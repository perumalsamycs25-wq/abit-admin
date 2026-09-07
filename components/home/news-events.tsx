import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CalendarDays } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { ScrollReveal } from '@/components/scroll-reveal'
import { cmsImageUrl, type CmsItem, type HomepageCms } from '@/lib/cms'

export function NewsEvents({ items, content }: { items?: CmsItem[]; content?: HomepageCms['newsEvents'] }) {
  const newsItems = (items || []).map((item) => ({ title: item.title, href: item.url || '#', category: String(item.data?.category || 'News'), image: cmsImageUrl(item.imageUrl), dateLabel: String(item.data?.dateLabel || 'Latest updates'), excerpt: item.description || 'NA' })).filter((item) => item.image)
  if (newsItems.length === 0) return null
  return (
    <ScrollReveal>
      <section className="bg-secondary/40 py-16 sm:py-16">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <SectionHeading
            align="left"
            eyebrow={content?.eyebrow || 'Events & Updates'}
            title={content?.title || 'News & Events'}
            className="max-w-xl"
          />
          <Link
            href={content?.viewAllUrl || '/gallery/'}
            className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-5 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-primary-foreground"
          >
            {content?.viewAllText || 'View all'}
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
        <span className="mt-3 block h-1 w-12 bg-primary" aria-hidden />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {newsItems.map((n) => (
            <article
              key={n.title}
              className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                <Image
                  src={n.image}
                  alt={n.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <span className="absolute left-3 top-3 rounded-md bg-navy/90 px-2.5 py-1 text-xs font-semibold text-gold">
                  {n.category}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                  <CalendarDays className="size-3.5 text-accent-foreground" aria-hidden />
                  {n.dateLabel}
                </span>
                <h3 className="mt-2 font-heading text-lg font-bold text-navy">
                  {n.title}
                </h3>
                <p className="mt-2 line-clamp-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {n.excerpt}
                </p>
                <Link
                  href={n.href}
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy transition-colors hover:text-accent-foreground"
                >
                  Read More
                  <ArrowRight className="size-4" aria-hidden />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
      </section>
    </ScrollReveal>
  )
}
