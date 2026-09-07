import Image from 'next/image'
import { BookOpen } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import type { HomepageData, HomepageItem } from '@/lib/homepage-types'

export function WhyChoose({ items, content }: { items?: HomepageItem[]; content?: HomepageData['whyChooseSection'] }) {
  const reasonItems = (items || []).map((item) => ({ Icon: BookOpen, title: item.title, text: item.description || '', image: item.imageUrl || '' }))
  if (reasonItems.length === 0) return null
  return (
    <section className="border-y border-border bg-[#FFFFFF] py-10 sm:py-10">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading eyebrow={content?.eyebrow || 'Why Choose AnuBose'} title={content?.title || 'It begins with good academics'} description={content?.description || 'ABIT begins with good academics and goes so much further from there.'} />
        <div className="mx-auto mt-16 grid max-w-6xl gap-12 lg:grid-cols-3 lg:gap-20">
          {reasonItems.map(({ Icon, title, text, image }) => (
            <div
              key={title}
              className="group flex flex-col items-center text-center"
            >
              <div className="flex size-32 items-center justify-center text-primary transition-all group-hover:-translate-y-1 sm:size-54">
                {image ? <Image src={image} alt={title} width={300} height={300} className="size-32 object-contain sm:size-54" /> : <Icon className="size-20 sm:size-31" strokeWidth={1.4} aria-hidden />}
              </div>
              <h3 className="mt-8 font-heading text-xl font-bold text-foreground">
                {title}
              </h3>
              <p className="mt-4 max-w-xs text-base leading-7 text-muted-foreground">
                {text}
              </p>
              <span className="mt-7 inline-flex bg-primary px-7 py-3 text-xs font-bold uppercase tracking-wider text-primary-foreground transition-transform group-hover:scale-105">{content?.buttonText || 'Learn more'}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
