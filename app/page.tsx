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
  const homepage = STATIC_HOMEPAGE
  return (
    <>
      <Hero content={homepage.hero} />
      <AboutStats content={homepage} />
      <AdmissionsStrip items={homepage.admissions} />
      <NewsEvents items={homepage.news} content={homepage.newsEvents} />
      <WhyChoose items={homepage.whyChoose} content={homepage.whyChooseSection} />
      <CtaBanner content={homepage.cta} />
      <Press items={homepage.press} content={homepage.pressSection} />
      <Placements items={homepage.recruiters} />
    </>
  )
}
