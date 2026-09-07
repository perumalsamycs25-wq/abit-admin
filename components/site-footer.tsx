import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Mail, ChevronRight } from 'lucide-react'
import { CONTACT } from '@/lib/nav'
import type { HomepageCms } from '@/lib/cms'

type IconProps = { className?: string }

function FacebookGlyph({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.87.24-1.46 1.5-1.46H17V4a20 20 0 0 0-2.3-.12c-2.3 0-3.87 1.4-3.87 3.98V10H8.2v3h2.63v8h2.67Z" />
    </svg>
  )
}
function TwitterGlyph({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M17.53 3H20.5l-6.5 7.43L21.75 21h-6l-4.7-6.14L5.7 21H2.72l6.96-7.95L2.5 3h6.15l4.24 5.6L17.53 3Zm-1.05 16.2h1.65L7.6 4.7H5.83l10.65 14.5Z" />
    </svg>
  )
}
function InstagramGlyph({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}
function YoutubeGlyph({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M22 12c0-1.8-.2-3-.4-3.7a2.5 2.5 0 0 0-1.76-1.77C18.2 6.2 12 6.2 12 6.2s-6.2 0-7.84.33A2.5 2.5 0 0 0 2.4 8.3C2.2 9 2 10.2 2 12s.2 3 .4 3.7a2.5 2.5 0 0 0 1.76 1.77C5.8 17.8 12 17.8 12 17.8s6.2 0 7.84-.33a2.5 2.5 0 0 0 1.76-1.77c.2-.7.4-1.9.4-3.7Zm-12 2.7V9.3L15 12l-5 2.7Z" />
    </svg>
  )
}

const quickLinks = [
  { label: 'About', href: '/about/' },
  { label: 'Gallery', href: '/gallery/' },
  { label: 'IQAC', href: '/iqac' },
  { label: 'Placements', href: '/placements/' },
  { label: 'Departments', href: '/computer-science-engineering/' },
  { label: 'Contact', href: '/about/' },
]

const amenities = [
  { label: 'Examination', href: '/examinations/' },
  { label: 'Sports', href: '/infrastructure' },
  { label: 'Central Library', href: '/library/' },
  { label: 'Social Media', href: '/gallery/' },
  { label: 'Research & Development', href: '/research-development-wing/' },
]

const cells = [
  { label: 'Grievance Cell', href: '/cells-committees-2/' },
  { label: 'Student Activity Cell', href: '/cells-committees-2/' },
  { label: 'Women Empowerment Cell', href: '/cells-committees-2/' },
  { label: 'Medical Assistance Cell', href: '/cells-committees-2/' },
  { label: 'EDC Cell', href: '/cells-committees-2/' },
]

const socials = [
  { Icon: TwitterGlyph, label: 'Twitter', href: '#' },
  { Icon: FacebookGlyph, label: 'Facebook', href: '#' },
  { Icon: InstagramGlyph, label: 'Instagram', href: '#' },
  { Icon: YoutubeGlyph, label: 'YouTube', href: '#' },
]

function FooterColumn({
  title,
  links,
}: {
  title: string
  links: { label: string; href: string }[]
}) {
  return (
    <div>
      <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-gold">
        {title}
      </h3>
      <ul className="space-y-2.5">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="group flex items-center gap-1.5 text-sm text-primary-foreground/70 transition-colors hover:text-primary-foreground"
            >
              <ChevronRight className="size-3.5 text-gold/70 transition-transform group-hover:translate-x-0.5" aria-hidden />
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function SiteFooter({ content }: { content?: HomepageCms['footer'] }) {
  const footerQuickLinks = content?.quickLinks || quickLinks
  const footerAmenities = content?.amenities || amenities
  const footerCells = content?.cells || cells
  return (
    <footer className="bg-navy-deep text-primary-foreground">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3">
              <Image
                src="/abit-logo.png"
                alt="ABIT crest"
                width={48}
                height={48}
                className="size-12 rounded-full bg-white/95 object-contain p-0.5"
              />
              <span className="font-heading text-lg font-extrabold">ABIT</span>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
              {content?.about || `${CONTACT.fullName}. Established 2008 — approved by AICTE, affiliated to JNTU Hyderabad and graded B++ by NAAC.`}
            </p>
            <div className="mt-5 flex gap-2">
              {socials.map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="flex size-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-gold hover:text-accent-foreground"
                >
                  <Icon className="size-4" aria-hidden />
                </a>
              ))}
            </div>
          </div>

          <FooterColumn title="Quick Links" links={footerQuickLinks} />
          <FooterColumn title="Amenities" links={footerAmenities} />
          <FooterColumn title="Cells" links={footerCells} />

          <div>
            <h3 className="mb-4 font-heading text-sm font-bold uppercase tracking-wider text-gold">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-primary-foreground/75">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                <span>{CONTACT.address}</span>
              </li>
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                <span>
                  {CONTACT.landline}
                  <br />
                  {CONTACT.cells.join(', ')}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0 text-gold" aria-hidden />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-primary-foreground">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-2 px-6 py-4 text-xs text-primary-foreground/60 sm:flex-row">
          <p>{content?.copyright || `© ${new Date().getFullYear()} ABIT. All Rights Reserved.`}</p>
          <p>{content?.tagline || 'Always Best In Technical-education'}</p>
        </div>
      </div>
    </footer>
  )
}
