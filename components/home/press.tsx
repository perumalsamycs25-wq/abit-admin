'use client'

import Image from 'next/image'
import { useState } from 'react'
import { ScrollReveal } from '@/components/scroll-reveal'
import type { HomepageData, HomepageItem } from '@/lib/homepage-types'

export function Press({ items, content }: { items?: HomepageItem[]; content?: HomepageData['pressSection'] }) {
  const pressItems = (items || []).map((item) => item.imageUrl || '').filter(Boolean)
  const [active, setActive] = useState(0)
  if (pressItems.length === 0) return null
  const visible = [0, 1, 2].map((offset) => pressItems[(active + offset) % pressItems.length])

  return (
    <ScrollReveal>
      <section className="bg-[#FFFFFF] py-20 sm:py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">{content?.eyebrow || 'News coverage'}</p>
            <h2 className="mt-2 font-heading text-3xl font-bold text-[#0f3b82] sm:text-5xl">{content?.title || 'AnuBose in Press'}</h2>
            <span className="mx-auto mt-5 block h-1 w-16 bg-[#2563eb]" aria-hidden />
            <p className="mx-auto mt-5 max-w-2xl text-base text-muted-foreground">{content?.description || 'ABIT, It begins with good academics, and goes so much further from there.'}</p>
          </div>
          <div className="mt-8">
            <div className="grid gap-6 sm:grid-cols-3">
              {visible.map((image, index) => (
                <div key={`${image}-${index}`} className="aspect-[4/3] overflow-hidden rounded-xl border border-blue-200 bg-white p-2 shadow-md transition-transform hover:-translate-y-1 hover:shadow-xl">
                  <Image src={image} alt="ABIT in the press" width={800} height={600} className="size-full rounded-lg object-cover" />
                </div>
              ))}
            </div>
            <div className="mt-7 flex justify-center gap-2" aria-label="Press gallery pages">
              {pressItems.map((image, index) => (
                <button
                  key={`${image}-dot`}
                  type="button"
                  aria-label={`Show press gallery page ${index + 1}`}
                  aria-current={active === index ? 'true' : undefined}
                  onClick={() => setActive(index)}
                  className={`h-2.5 rounded-full transition-all ${active === index ? 'w-8 bg-[#2563eb]' : 'w-2.5 bg-blue-300 hover:bg-blue-500'}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  )
}
