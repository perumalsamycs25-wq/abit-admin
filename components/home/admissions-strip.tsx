'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { ScrollReveal } from '@/components/scroll-reveal'
import type { HomepageItem } from '@/lib/homepage-types'

export function AdmissionsStrip({ items }: { items?: HomepageItem[] }) {
  const admissionPosters = (items || []).map((item) => ({ image: item.imageUrl || '', href: item.url || '#', title: item.title })).filter((item) => item.image)
  const posterRailRef = useRef<HTMLDivElement>(null)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    const rail = posterRailRef.current
    if (!rail || admissionPosters.length < 2 || isPaused) return

    let animationFrame = 0
    let lastTimestamp = 0
    const speed = 0.035

    const animate = (timestamp: number) => {
      if (lastTimestamp) rail.scrollLeft += (timestamp - lastTimestamp) * speed
      if (rail.scrollLeft >= rail.scrollWidth - rail.clientWidth) rail.scrollLeft = 0
      lastTimestamp = timestamp
      animationFrame = window.requestAnimationFrame(animate)
    }

    animationFrame = window.requestAnimationFrame(animate)
    return () => window.cancelAnimationFrame(animationFrame)
  }, [admissionPosters.length, isPaused])

  if (admissionPosters.length === 0) return null
  return (
    <ScrollReveal>
      <section className="overflow-hidden bg-background py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Admissions</p>
              <h2 className="mt-2 font-heading text-2xl font-bold text-navy sm:text-3xl">Build your future at ABIT</h2>
            </div>
            <Link href="/admissions-2/" className="hidden items-center gap-2 text-sm font-semibold text-primary sm:flex">
              Admissions 2026-27 <ArrowRight className="size-4" aria-hidden />
            </Link>
          </div>
          <div
            ref={posterRailRef}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onFocus={() => setIsPaused(true)}
            onBlur={() => setIsPaused(false)}
            className="mt-7 flex snap-x gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {admissionPosters.map((poster, index) => (
              <Link key={poster.image} href={poster.href} className="group relative w-[170px] shrink-0 snap-start overflow-hidden border border-border bg-white shadow-sm transition-transform hover:-translate-y-1 sm:w-[190px]">
                <Image src={poster.image} alt={poster.title} width={200} height={300} className="h-auto w-full object-cover transition-transform duration-500 group-hover:scale-105" />
              </Link>
            ))}
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
