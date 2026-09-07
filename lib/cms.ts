export type CmsItem = {
  id?: string
  title: string
  description?: string
  imageUrl?: string
  url?: string
  data?: Record<string, unknown>
}

export type HomepageCms = {
  hero?: { banners?: Array<{ src?: string; imageUrl?: string; title?: string; alt?: string }>; marqueeItems?: string[]; title?: string; description?: string; buttonText?: string; buttonUrl?: string }
  banners?: CmsItem[]
  about?: { imageUrl?: string; title?: string; paragraphs?: string[]; points?: string[]; buttonText?: string; buttonUrl?: string; experienceText?: string }
  statistics?: Array<{ value: string; label: string }>
  admissions?: CmsItem[]
  news?: CmsItem[]
  'news-events'?: CmsItem[]
  whyChoose?: CmsItem[]
  'why-choose'?: CmsItem[]
  cta?: { imageUrl?: string; title?: string; description?: string; buttonText?: string; buttonUrl?: string }
  press?: CmsItem[]
  recruiters?: CmsItem[]
  newsEvents?: { eyebrow?: string; title?: string; viewAllText?: string; viewAllUrl?: string }
  whyChooseSection?: { eyebrow?: string; title?: string; description?: string; buttonText?: string }
  pressSection?: { eyebrow?: string; title?: string; description?: string }
  footer?: { about?: string; copyright?: string; tagline?: string; quickLinks?: Array<{ label: string; href: string }>; amenities?: Array<{ label: string; href: string }>; cells?: Array<{ label: string; href: string }> }
}

export async function getHomepageCms(): Promise<HomepageCms | null> {
  try {
    const response = await fetch(`${process.env.CMS_API_URL || 'http://localhost:4000'}/api/homepage`, { cache: 'no-store' })
    return response.ok ? await response.json() as HomepageCms : null
  } catch { return null }
}

export type PublishedPage = {
  slug: string
  title: string
  sections: Record<string, { heading?: string; paragraphs?: string[]; bullets?: string[] }>
}

export async function getPublishedPage(slug: string): Promise<PublishedPage | null> {
  try {
    const response = await fetch(`${process.env.CMS_API_URL || 'http://localhost:4000'}/api/pages/${slug}`, { cache: 'no-store' })
    return response.ok ? await response.json() as PublishedPage : null
  } catch { return null }
}

export function cmsImageUrl(value?: string): string {
  if (!value) return ''
  return value.startsWith('/uploads/') ? `${process.env.CMS_API_URL || 'http://localhost:4000'}${value}` : value
}