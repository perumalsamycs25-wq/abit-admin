import Link from 'next/link'
import Image from 'next/image'
import { ChevronRight, Home } from 'lucide-react'

export type Crumb = { label: string; href?: string }

export function PageHero({
  title,
  subtitle,
  image = '/ABIT_IMAGES/banner01.webp',
  crumbs,
}: {
  title: string
  subtitle?: string
  image?: string
  crumbs: Crumb[]
}) {
  return (
    <section className="relative overflow-hidden bg-navy-deep min-h-[220px] sm:min-h-[260px] flex items-center">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover opacity-65 sm:opacity-75 transition-opacity duration-300"
        sizes="100vw"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-navy-deep/85 via-navy-deep/60 to-navy-deep/40" aria-hidden />
      <div className="relative mx-auto w-full max-w-7xl px-6 py-12 sm:py-16">
        <nav aria-label="Breadcrumb" className="mb-3">
          <ol className="flex flex-wrap items-center gap-1.5 text-xs sm:text-sm text-primary-foreground/80 font-medium">
            <li>
              <Link href="/" className="flex items-center gap-1 hover:text-gold transition-colors">
                <Home className="size-3.5 text-gold" aria-hidden />
                Home
              </Link>
            </li>
            {crumbs.map((c, i) => (
              <li key={i} className="flex items-center gap-1.5">
                <ChevronRight className="size-3.5 text-gold/80" aria-hidden />
                {c.href && i < crumbs.length - 1 ? (
                  <Link href={c.href} className="hover:text-gold transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-white font-semibold">{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
        <h1 className="font-heading text-3xl font-extrabold text-balance text-white sm:text-4xl lg:text-5xl drop-shadow-sm">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl whitespace-pre-line text-sm sm:text-base leading-relaxed text-pretty text-white/90 drop-shadow-sm">
            {subtitle}
          </p>
        )}
        <span className="mt-5 block h-1 w-20 rounded-full bg-gold shadow-sm" aria-hidden />
      </div>
    </section>
  )
}
