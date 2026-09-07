import { Hero } from '@/components/home/hero'
import { AboutStats } from '@/components/home/about-stats'
import { AdmissionsStrip } from '@/components/home/admissions-strip'
import { NewsEvents } from '@/components/home/news-events'
import { WhyChoose } from '@/components/home/why-choose'
import { CtaBanner } from '@/components/cta-banner'
import { Press } from '@/components/home/press'
import { Placements } from '@/components/home/placements'
import { STATIC_HOMEPAGE } from '@/lib/homepage-data'

export default function HomePage() {
  const cms = STATIC_HOMEPAGE
  return (
    <>
      <Hero content={cms.hero} />
      <AboutStats content={cms} />
      <AdmissionsStrip items={cms.admissions} />
      <NewsEvents items={cms.news} content={cms.newsEvents} />
      <WhyChoose items={cms.whyChoose} content={cms.whyChooseSection} />
      <CtaBanner content={cms.cta} />
      <Press items={cms.press} content={cms.pressSection} />
      <Placements items={cms.recruiters} />
    </>
  )
}
