'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { ArrowRight, Award, GraduationCap, Sparkles } from 'lucide-react'
import type { HomepageData } from '@/lib/homepage-types'
import { openAdmissionModal } from '@/components/admission-modal'

export function Hero({ content }: { content?: HomepageData['hero'] }) {
  const bannerItems = (content?.banners || []).map((banner) => ({ src: banner.src || banner.imageUrl || '', alt: banner.alt || banner.title || 'ABIT campus' })).filter((banner) => banner.src)
  const announcements = content?.marqueeItems || []
  const [activeBanner, setActiveBanner] = useState(0)
  useEffect(() => {
    if (bannerItems.length === 0) return
    const timer = window.setInterval(() => {
      setActiveBanner((current) => (current + 1) % bannerItems.length)
    }, 5500)

    return () => window.clearInterval(timer)
  }, [bannerItems.length])

  if (!content || bannerItems.length === 0) return null

  return (
    <>
      {/* Announcement marquee */}
      <div className="flex items-stretch bg-accent text-accent-foreground">
        <span className="flex shrink-0 items-center gap-2 bg-navy px-4 py-2.5 text-xs font-bold uppercase tracking-wider text-primary-foreground">
          <Sparkles className="size-4 text-gold" aria-hidden />
          Updates
        </span>
        <div className="relative flex-1 overflow-hidden">
          <div className="flex w-max animate-marquee items-center whitespace-nowrap py-2.5">
            {[...announcements, ...announcements].map((item, i) => (
              <span key={i} className="mx-6 text-sm font-medium">
                {item}
                <span className="mx-6 text-accent-foreground/40" aria-hidden>
                  •
                </span>
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Hero banner */}
      <section className="relative isolate min-h-[500px] overflow-hidden bg-navy-deep sm:min-h-[570px]">
        {bannerItems.map((banner, index) => (
          <Image
            key={banner.src}
            src={banner.src}
            alt={banner.alt || 'ABIT campus'}
            fill
            priority={index === 0}
            className={`object-cover object-center transition-opacity duration-1000 ${
              activeBanner === index ? 'opacity-45' : 'opacity-0'
            }`}
            sizes="100vw"
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-deep via-navy-deep/85 to-navy-deep/40" aria-hidden />
        <div className="relative mx-auto grid max-w-7xl gap-8 px-6 py-20 sm:py-28 lg:py-32">
          <div className="max-w-2xl animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-gold/40 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-gold">
              <Award className="size-3.5" aria-hidden />
              Estd. 2008 · AICTE · JNTUH · NAAC B++
            </span>
            <h1 className="mt-6 font-heading text-4xl font-extrabold leading-[1.1] text-balance text-primary-foreground sm:text-5xl lg:text-6xl">
              {content.title}
            </h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-pretty text-primary-foreground/80">
              {content.description}
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={openAdmissionModal}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-accent-foreground shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl cursor-pointer"
              >
                <GraduationCap className="size-4" aria-hidden />
                {content.buttonText}
              </button>
              <Link
                href="/about/"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 text-sm font-semibold text-primary-foreground backdrop-blur transition-colors hover:bg-white/10"
              >
                Discover ABIT
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div> 
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2" aria-label="Banner slides">
          {bannerItems.map((banner, index) => (
            <button
              key={banner.src}
              type="button"
              aria-label={`Show banner ${index + 1}`}
              aria-current={activeBanner === index}
              onClick={() => setActiveBanner(index)}
              className={`h-1.5 rounded-full transition-all ${
                activeBanner === index ? 'w-10 bg-gold' : 'w-5 bg-white/50'
              }`}
            />
          ))}
        </div>
      </section>
    </>
  )
}
