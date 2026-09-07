import { Hero } from '@/components/home/hero'
import { AboutStats } from '@/components/home/about-stats'
import { AdmissionsStrip } from '@/components/home/admissions-strip'
import { NewsEvents } from '@/components/home/news-events'
import { WhyChoose } from '@/components/home/why-choose'
import { CtaBanner } from '@/components/cta-banner'
import { Press } from '@/components/home/press'
import { Placements } from '@/components/home/placements'
import { getHomepageCms } from '@/lib/cms'

export default async function HomePage() {
  const cms = await getHomepageCms()
  const firstBanner = cms?.banners?.[0]
  return (
    <>
      <Hero content={cms ? { ...cms.hero, title: cms.hero?.title || firstBanner?.title, description: cms.hero?.description || firstBanner?.description, banners: cms.banners?.map((item) => ({ src: item.imageUrl, alt: item.title })) || cms.hero?.banners } : undefined} />
      <AboutStats content={cms ?? undefined} />
      <AdmissionsStrip items={cms?.admissions} />
      <NewsEvents items={cms?.news || cms?.['news-events']} content={cms?.newsEvents} />
      <WhyChoose items={cms?.whyChoose || cms?.['why-choose']} content={cms?.whyChooseSection} />
      <CtaBanner content={cms?.cta} />
      <Press items={cms?.press} content={cms?.pressSection} />
      <Placements items={cms?.recruiters} />
    </>
  )
}
