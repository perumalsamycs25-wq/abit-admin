import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import multer from 'multer'
import path from 'node:path'
import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import { Pool } from 'pg'
import { z } from 'zod'

const app = express()
const pool = new Pool({ connectionString: process.env.DATABASE_URL })
const port = Number(process.env.PORT || 4000)
const root = path.dirname(fileURLToPath(import.meta.url))
const schemaPath = path.join(root, '..', 'schema.sql')
const seedPath = path.join(root, '..', 'seed.sql')
const uploadDir = path.join(root, '..', 'uploads')
fs.mkdirSync(uploadDir, { recursive: true })
const upload = multer({ dest: uploadDir, limits: { fileSize: 8 * 1024 * 1024 } })
const itemSchema = z.object({ title: z.string().min(1), slug: z.string().optional(), description: z.string().optional(), imageUrl: z.string().optional(), url: z.string().optional(), status: z.enum(['draft', 'published']).default('published'), displayOrder: z.number().int().default(0), data: z.record(z.unknown()).default({}) })

app.use(cors({ origin: [process.env.PUBLIC_ORIGIN || 'http://localhost:3000', process.env.ADMIN_ORIGIN || 'http://localhost:3001'] }))
app.use(express.json({ limit: '2mb' }))
app.use('/uploads', express.static(uploadDir))
app.get('/health', (_req, res) => res.json({ ok: true }))

function auth(req, res, next) {
  const token = req.headers.authorization?.replace('Bearer ', '')
  try { req.user = jwt.verify(token, process.env.JWT_SECRET || 'development-secret'); next() } catch { res.status(401).json({ error: 'Authentication required' }) }
}

app.post('/api/auth/login', async (req, res, next) => {
  try {
    const input = z.object({ email: z.string().email(), password: z.string().min(1) }).parse(req.body)
    const { rows } = await pool.query('SELECT id, email, password_hash, role FROM users WHERE email = $1', [input.email.toLowerCase()])
    const user = rows[0]
    if (!user || !(await bcrypt.compare(input.password, user.password_hash))) return res.status(401).json({ error: 'Invalid credentials' })
    res.json({ token: jwt.sign({ id: user.id, email: user.email, role: user.role }, process.env.JWT_SECRET || 'development-secret', { expiresIn: '8h' }) })
  } catch (error) { next(error) }
})

app.post('/api/auth/bootstrap', async (_req, res, next) => {
  try { const email = (process.env.ADMIN_EMAIL || 'admin@abit.edu.in').toLowerCase(); const hash = await bcrypt.hash(process.env.ADMIN_PASSWORD || 'change-me', 12); await pool.query('INSERT INTO users (email, password_hash) VALUES ($1, $2) ON CONFLICT (email) DO UPDATE SET password_hash = EXCLUDED.password_hash', [email, hash]); res.status(201).json({ email }) } catch (error) { next(error) }
})

app.get('/api/homepage', async (_req, res, next) => {
  try {
    const sections = await pool.query("SELECT section_type, content FROM page_sections s JOIN pages p ON p.id = s.page_id WHERE p.slug = 'home' AND s.status = 'published' ORDER BY s.display_order")
    const items = await pool.query("SELECT id, resource, slug, title, description, image_url AS \"imageUrl\", url, status, display_order AS \"displayOrder\", data FROM content_items WHERE status = 'published' ORDER BY resource, display_order")
    const content = Object.fromEntries(sections.rows.map((row) => [row.section_type, row.content]))
    for (const item of items.rows) (content[item.resource] ||= []).push(item)
    res.json(content)
  } catch (error) { next(error) }
})

app.get('/api/pages/:slug', async (req, res, next) => {
  try {
    const page = await pool.query('SELECT slug, title, seo FROM pages WHERE slug = $1 AND status = \'published\'', [req.params.slug])
    if (!page.rows[0]) return res.status(404).json({ error: 'Page not found' })
    const sections = await pool.query('SELECT section_type AS "sectionType", content, display_order AS "displayOrder" FROM page_sections s JOIN pages p ON p.id = s.page_id WHERE p.slug = $1 AND p.status = \'published\' AND s.status = \'published\' ORDER BY s.display_order', [req.params.slug])
    res.json({ ...page.rows[0], sections: Object.fromEntries(sections.rows.map((section) => [section.sectionType, section.content])) })
  } catch (error) { next(error) }
})

const resources = ['banners', 'admissions', 'news-events', 'why-choose', 'press', 'recruiters', 'gallery', 'departments']
for (const resource of resources) {
  app.get(`/api/${resource}`, async (_req, res, next) => { try { const result = await pool.query('SELECT id, resource, slug, title, description, image_url AS "imageUrl", url, status, display_order AS "displayOrder", data FROM content_items WHERE resource = $1 ORDER BY display_order, created_at', [resource]); res.json(result.rows) } catch (error) { next(error) } })
  app.post(`/api/${resource}`, auth, async (req, res, next) => { try { const item = itemSchema.parse(req.body); const result = await pool.query('INSERT INTO content_items (resource, slug, title, description, image_url, url, status, display_order, data) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *', [resource, item.slug, item.title, item.description, item.imageUrl, item.url, item.status, item.displayOrder, item.data]); res.status(201).json(result.rows[0]) } catch (error) { next(error) } })
  app.put(`/api/${resource}/:id`, auth, async (req, res, next) => { try { const item = itemSchema.parse(req.body); const result = await pool.query('UPDATE content_items SET slug=$1,title=$2,description=$3,image_url=$4,url=$5,status=$6,display_order=$7,data=$8,updated_at=now() WHERE id=$9 AND resource=$10 RETURNING *', [item.slug, item.title, item.description, item.imageUrl, item.url, item.status, item.displayOrder, item.data, req.params.id, resource]); res.json(result.rows[0]) } catch (error) { next(error) } })
  app.delete(`/api/${resource}/:id`, auth, async (req, res, next) => { try { await pool.query('DELETE FROM content_items WHERE id=$1 AND resource=$2', [req.params.id, resource]); res.status(204).end() } catch (error) { next(error) } })
}

app.put('/api/pages/:slug/sections/:type', auth, async (req, res, next) => {
  try {
    const status = req.body.status === 'published' ? 'published' : 'draft'
    const content = req.body.content ?? req.body
    const result = await pool.query('WITH page AS (INSERT INTO pages (slug, title, status) VALUES ($1, initcap(replace($1, \'-\', \' \')), \'draft\') ON CONFLICT (slug) DO UPDATE SET updated_at = now() RETURNING id) INSERT INTO page_sections (page_id, section_type, content, status, display_order) SELECT id, $2, $3, $4, 0 FROM page ON CONFLICT (page_id, section_type) DO UPDATE SET content = EXCLUDED.content, status = EXCLUDED.status, updated_at = now() RETURNING *', [req.params.slug, req.params.type, content, status])
    res.json(result.rows[0])
  } catch (error) { next(error) }
})

app.post('/api/pages/:slug/publish', auth, async (req, res, next) => {
  const client = await pool.connect()
  try {
    await client.query('BEGIN')
    await client.query('UPDATE page_sections SET status = \'published\' WHERE page_id = (SELECT id FROM pages WHERE slug = $1)', [req.params.slug])
    if (req.params.slug === 'home') await client.query("UPDATE content_items SET status = 'published' WHERE status = 'draft'")
    await client.query('UPDATE pages SET status = \'published\', updated_at = now() WHERE slug = $1', [req.params.slug])
    await client.query('COMMIT')
    res.json({ published: true, slug: req.params.slug })
  } catch (error) { await client.query('ROLLBACK'); next(error) } finally { client.release() }
})
app.post('/api/media', auth, upload.single('file'), async (req, res, next) => {
  try {
    if (!req.file) return res.status(400).json({ error: 'A file is required' })
    const url = `/uploads/${req.file.filename}`
    await pool.query('INSERT INTO media (filename, url, mime_type) VALUES ($1, $2, $3)', [req.file.filename, url, req.file.mimetype])
    res.status(201).json({ filename: req.file.filename, url, mimeType: req.file.mimetype })
  } catch (error) { next(error) }
})
app.use((error, _req, res, _next) => {
  console.error(error)
  const validationError = error.name === 'ZodError'
  res.status(validationError ? 400 : 500).json({ error: validationError ? error.issues : process.env.NODE_ENV !== 'production' ? error.message : 'Internal server error' })
})

async function start() {
  await pool.query(fs.readFileSync(schemaPath, 'utf8'))
  await pool.query(fs.readFileSync(seedPath, 'utf8'))
  app.listen(port, () => console.log(`ABIT API listening on http://localhost:${port}`))
}

start().catch((error) => {
  console.error('API startup failed. Check apps/api/.env and PostgreSQL.', error.message)
  process.exitCode = 1
})