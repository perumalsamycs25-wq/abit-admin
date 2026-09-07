export type HomepageItem = {
  title: string
  description?: string
  imageUrl?: string
  url?: string
  data?: Record<string, unknown>
}

export type HomepageData = {
  hero: { banners: Array<{ src: string; title?: string; alt?: string }>; marqueeItems: string[]; title: string; description: string; buttonText: string; buttonUrl?: string }
  about: { imageUrl: string; title: string; paragraphs: string[]; points: string[]; buttonText?: string; buttonUrl?: string; experienceText?: string }
  statistics: Array<{ value: string; label: string }>
  admissions: HomepageItem[]
  news: HomepageItem[]
  whyChoose: HomepageItem[]
  cta: { imageUrl: string; title: string; description: string; buttonText: string; buttonUrl?: string }
  press: HomepageItem[]
  recruiters: HomepageItem[]
  newsEvents: { eyebrow: string; title: string; viewAllText: string; viewAllUrl: string }
  whyChooseSection: { eyebrow: string; title: string; description: string; buttonText: string }
  pressSection: { eyebrow: string; title: string; description: string }
}