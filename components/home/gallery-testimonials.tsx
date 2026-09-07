import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Quote } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'

const gallery = [
  { src: '/ABIT_IMAGES/WhatsApp-Image-2026-06-04-at-2.30.21-PM-200x300.jpeg', alt: 'Campus celebration at ABIT', span: 'sm:col-span-2 sm:row-span-2' },
  { src: '/ABIT_IMAGES/banner01.webp', alt: 'Engineering laboratory' },
  { src: '/ABIT_IMAGES/WhatsApp-Image-2026-06-04-at-2.30.22-PM-200x300.jpeg', alt: 'ABIT campus event' },
  { src: '/ABIT_IMAGES/BUILDING-2-Copy-1.jpg', alt: 'ABIT campus building' },
  { src: '/ABIT_IMAGES/bannerp2.jpg', alt: 'Students in computer laboratory' },
]

const testimonials = [
  {
    quote:
      'ABIT gave me the confidence and skills to build my career. The faculty support and campus environment shaped who I am today.',
    name: 'Priya S.',
    role: 'CSE Graduate',
  },
  {
    quote:
      'The residential system and inspiring student life created lifelong friendships and a genuine love for learning.',
    name: 'Anjali R.',
    role: 'ECE Graduate',
  },
]

export function GalleryTestimonials() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Campus Life"
          title="Moments from ABIT"
          description="A glimpse into life, events and celebrations across the ABIT campus."
        />

        <div className="mt-12 grid auto-rows-[160px] grid-cols-2 gap-3 sm:grid-cols-4">
          {gallery.map((g) => (
            <div
              key={g.src}
              className={`group relative overflow-hidden rounded-xl ${g.span ?? ''}`}
            >
              <Image
                src={g.src}
                alt={g.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-navy-deep/0 transition-colors group-hover:bg-navy-deep/25" aria-hidden />
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-center">
          <Link
            href="/gallery/"
            className="inline-flex items-center gap-2 rounded-full border border-navy/20 px-6 py-2.5 text-sm font-semibold text-navy transition-colors hover:bg-navy hover:text-primary-foreground"
          >
            View Full Gallery
            <ArrowRight className="size-4" aria-hidden />
          </Link>
        </div>

        {/* Testimonials */}
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="relative rounded-2xl border border-border bg-secondary/40 p-8"
            >
              <Quote className="size-8 text-gold" aria-hidden />
              <blockquote className="mt-4 text-lg leading-relaxed text-pretty text-foreground">
                {t.quote}
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3">
                <span className="flex size-11 items-center justify-center rounded-full bg-navy font-heading font-bold text-gold">
                  {t.name.charAt(0)}
                </span>
                <span>
                  <span className="block font-heading font-bold text-navy">{t.name}</span>
                  <span className="block text-sm text-muted-foreground">{t.role}</span>
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  )
}
