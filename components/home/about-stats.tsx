import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import { ScrollReveal } from '@/components/scroll-reveal'
import { cmsImageUrl, type HomepageCms } from '@/lib/cms'

export function AboutStats({ content }: { content?: HomepageCms }) {
  const about = content?.about
  const aboutPoints = about?.points || []
  const aboutStats = content?.statistics || []
  if (!about) return null
  return (
    <ScrollReveal>
      <section className="bg-secondary/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-xl">
              <Image
                src={cmsImageUrl(about.imageUrl)}
                alt="AnuBose Institute of Technology campus buildings"
                width={720}
                height={560}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-4 hidden rounded-xl bg-navy px-6 py-4 text-primary-foreground shadow-lg sm:block">
              <div className="font-heading text-2xl font-bold text-gold">{about.experienceText}</div>
              <div className="text-xs text-primary-foreground/70">of academic excellence</div>
            </div>
          </div>

          <div>
            <span className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-accent-foreground">
              <span className="h-px w-6 bg-gold" aria-hidden />
              Welcome to ABIT
            </span>
            <h2 className="font-heading text-3xl font-bold text-balance text-navy sm:text-4xl">
              {about.title}
            </h2>
            <div className="mt-5 space-y-4 text-base leading-relaxed text-muted-foreground">
              {(about.paragraphs || []).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
            <ul className="mt-6 space-y-2.5">
              {aboutPoints.map((p) => (
                <li key={p} className="flex items-center gap-2.5 text-sm font-medium text-foreground">
                  <CheckCircle2 className="size-5 shrink-0 text-accent" aria-hidden />
                  {p}
                </li>
              ))}
            </ul>
            <Link
              href="/about/"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-navy px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              {about.buttonText || 'Read More'}
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 gap-4 rounded-2xl border border-border bg-secondary/50 p-6 sm:grid-cols-4 sm:p-8">
          {aboutStats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-heading text-3xl font-extrabold text-navy sm:text-4xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm font-medium text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      </section>
    </ScrollReveal>
  )
}
