import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, Phone } from 'lucide-react'
import { CONTACT } from '@/lib/nav'
import { cmsImageUrl, type HomepageCms } from '@/lib/cms'

export function CtaBanner({ content }: { content?: HomepageCms['cta'] }) {
  if (!content) return null
  return (
    <section className="bg-secondary/40 py-20 sm:py-22">
      <div className="mx-auto max-w-7xl px-6">
        <div className="relative min-h-[330px] overflow-hidden bg-navy px-8 py-16 text-center sm:px-14 sm:py-24">
          <Image
            src={cmsImageUrl(content.imageUrl)}
            alt="ABIT campus"
            fill
            className="object-cover opacity-35"
            sizes="100vw"
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-10"
            style={{
              backgroundImage:
                'radial-gradient(circle at 1px 1px, var(--color-gold) 1px, transparent 0)',
              backgroundSize: '26px 26px',
            }}
            aria-hidden
          />
          <div className="absolute -left-10 -top-10 size-40 rounded-full bg-gold/15 blur-3xl" aria-hidden />
          <div className="relative mx-auto max-w-xl bg-white px-6 py-10 text-navy shadow-xl sm:px-14 sm:py-12">
            <h2 className="mx-auto max-w-2xl font-heading text-3xl font-bold text-balance text-navy sm:text-4xl">
              {content.title}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-pretty text-muted-foreground">
              {content.description}
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href={content.buttonUrl || '#'}
                className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-lg"
              >
                {content.buttonText}
                <ArrowRight className="size-4" aria-hidden />
              </Link>
              <a
                href={`tel:${CONTACT.cells[0]}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/25 px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-white/10"
              >
                <Phone className="size-4" aria-hidden />
                {CONTACT.cells[0]}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
