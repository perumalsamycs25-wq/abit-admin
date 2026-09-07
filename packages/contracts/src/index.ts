export type CmsStatus = 'draft' | 'published'

export type CmsItem = {
  id: string
  slug?: string
  title: string
  description?: string
  imageUrl?: string
  url?: string
  status: CmsStatus
  displayOrder: number
  data: Record<string, unknown>
}

export type HomepageContent = {
  hero?: Record<string, unknown>
  about?: Record<string, unknown>
  statistics?: Array<{ value: string; label: string }>
  admissions?: CmsItem[]
  news?: CmsItem[]
  whyChoose?: CmsItem[]
  cta?: Record<string, unknown>
  press?: CmsItem[]
  recruiters?: CmsItem[]
  footer?: Record<string, unknown>
}