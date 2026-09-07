import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { cmsImageUrl, type CmsItem } from '@/lib/cms'

export function Placements({ items }: { items?: CmsItem[] }) {
  const recruiterItems = (items || []).map((item) => ({ name: item.title, image: cmsImageUrl(item.imageUrl) })).filter((item) => item.image)
  if (recruiterItems.length === 0) return null
  return (
    <ScrollReveal>
      <section className="overflow-hidden bg-secondary/40 py-14 sm:py-18">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Placements</p>
            <h2 className="mt-2 font-heading text-2xl font-bold uppercase text-navy sm:text-3xl">Our leading recruiters</h2>
            <span className="mx-auto mt-3 block h-1 w-12 bg-primary" aria-hidden />
          </div>
          <div className="mt-9 overflow-hidden">
            <div className="flex w-max animate-marquee items-center gap-4">
              {[...recruiterItems, ...recruiterItems].map((r, index) => (
                <div
                  key={`${r.name}-${index}`}
                  className="flex h-24 w-44 items-center justify-center border border-border bg-white p-4 shadow-sm"
                >
                  <Image src={r.image} alt={`${r.name} recruiter`} width={150} height={56} className="max-h-14 w-auto object-contain" />
                </div>
              ))}
            </div>
          </div>
          <Link href="/placements/" className="mx-auto mt-8 flex w-fit items-center gap-2 text-sm font-semibold text-primary">
            View placements <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>
      </section>
    </ScrollReveal>
  )
}
