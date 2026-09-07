import type { Metadata } from 'next'
import { ContentPage } from '@/components/content-page'
import { DepartmentTemplate } from '@/components/department-template'
import { CONTENT, resolveNav, normalizeKey, type PageContent } from '@/lib/content'
import { DEPARTMENTS } from '@/lib/departments'
import type { Crumb } from '@/components/page-hero'
import { getPublishedPage } from '@/lib/cms'
import { ApprovalAccreditationSection } from '@/components/approval-accreditation-section'
import { AcademicCalendarTabs } from '@/components/academic-calendar-tabs'
import { AcademicSyllabusTabs } from '@/components/academic-syllabus-tabs'

const BANNERS = [
  '/ABIT_IMAGES/banner01.webp',
  '/ABIT_IMAGES/bannerp2.jpg',
  '/ABIT_IMAGES/Science-Humanities-banner.jpg',
  '/ABIT_IMAGES/Placements-banner.jpg',
]

function bannerForKey(key: string): string {
  if (key === 'about' || key.startsWith('about/')) return '/ABIT_IMAGES/bannerp2.jpg'
  if (key.includes('academic') || key === 'courses-offered' || key === 'examinations') return '/ABIT_IMAGES/Science-Humanities-banner.jpg'
  if (key === 'infrastructure' || key === 'library') return '/ABIT_IMAGES/banner01.webp'
  if (key.includes('research') || key === 'iqac') return '/ABIT_IMAGES/Placements-banner.jpg'
  const index = [...key].reduce((total, character) => total + character.charCodeAt(0), 0) % BANNERS.length
  return BANNERS[index]
}

function titleFromSlug(slug: string[]): string {
  const last = slug[slug.length - 1] ?? ''
  return last
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (c) => c.toUpperCase())
}

function buildCrumbs(key: string, fallbackTitle: string): { crumbs: Crumb[]; title: string } {
  const match = resolveNav(key)
  if (match) {
    const crumbs: Crumb[] = match.parent
      ? [{ label: match.parent }, { label: match.label }]
      : [{ label: match.label }]
    return { crumbs, title: match.label }
  }
  return { crumbs: [{ label: fallbackTitle }], title: fallbackTitle }
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>
}): Promise<Metadata> {
  const { slug } = await params
  const key = slug.join('/')
  const dept = DEPARTMENTS.find((d) => normalizeKey(d.href) === key)
  if (dept) return { title: dept.name }
  const match = resolveNav(key)
  return { title: match?.label ?? titleFromSlug(slug) }
}

export default async function CatchAllPage({
  params,
}: {
  params: Promise<{ slug: string[] }>
}) {
  const { slug } = await params
  const key = slug.join('/')

  // Department pages
  const dept = DEPARTMENTS.find((d) => normalizeKey(d.href) === key)
  if (dept) {
    return <DepartmentTemplate dept={dept} />
  }

  const fallbackTitle = titleFromSlug(slug)
  const { crumbs, title } = buildCrumbs(key, fallbackTitle)

  const publishedPage = await getPublishedPage(key)
  if (publishedPage) {
    return <ContentPage content={{ title: publishedPage.title, sections: Object.values(publishedPage.sections), image: bannerForKey(key) }} crumbs={crumbs} />
  }

  // Registered rich content
  const registered = CONTENT[key]
  if (registered) {
    if (key === 'approvals-affiliations-accreditations') {
      return (
        <ContentPage content={{ ...registered, image: registered.image || bannerForKey(key) }} crumbs={crumbs}>
          <ApprovalAccreditationSection />
        </ContentPage>
      )
    }
    if (registered.calendarTabs) {
      return (
        <ContentPage content={{ ...registered, image: registered.image || bannerForKey(key) }} crumbs={crumbs}>
          <AcademicCalendarTabs tabs={registered.calendarTabs} />
        </ContentPage>
      )
    }
    if (key === 'academics-syllabus' && registered.syllabusTabs) {
      return (
        <ContentPage content={{ ...registered, image: registered.image || bannerForKey(key) }} crumbs={crumbs}>
          <AcademicSyllabusTabs tabs={registered.syllabusTabs} />
        </ContentPage>
      )
    }
    return <ContentPage content={{ ...registered, image: registered.image || bannerForKey(key) }} crumbs={crumbs} />
  }

  // Graceful, on-brand fallback for pages not yet ported into the redesign
  const fallback: PageContent = {
    title,
    image: bannerForKey(key),
    subtitle: 'AnuBose Institute of Technology — Always Best In Technical-education.',
    sections: [
      {
        paragraphs: [
          `This section presents the ${title} information of AnuBose Institute of Technology (ABIT), Paloncha. ABIT is approved by AICTE, affiliated to JNTU Hyderabad and graded B++ by NAAC.`,
          'For detailed information, downloads or assistance regarding this section, please reach out to the college using the contact details provided.',
        ],
      },
    ],
  }
  return <ContentPage content={fallback} crumbs={crumbs} />
}
