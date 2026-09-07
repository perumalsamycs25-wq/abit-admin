import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Library, FlaskConical, Building2 } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'

const facilities = [
  {
    Icon: Library,
    title: 'Central Library',
    text: 'A well-stocked central library with digital resources, reading spaces and journals.',
    href: '/library/',
    image: '/ABIT_IMAGES/bannerp2.jpg',
  },
  {
    Icon: FlaskConical,
    title: 'Modern Laboratories',
    text: 'State-of-the-art laboratories and computing facilities across every department.',
    href: '/infrastructure',
    image: '/ABIT_IMAGES/banner01.webp',
  },
  {
    Icon: Building2,
    title: 'Campus Infrastructure',
    text: 'Spacious campus with residential system, sports and student amenities.',
    href: '/infrastructure',
    image: '/ABIT_IMAGES/BUILDING-2-Copy-1.jpg',
  },
]

export function Facilities() {
  return (
    <section className="bg-background py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Facilities"
          title="Infrastructure built for learning"
          description="Our residential system and campus facilities create more opportunities for learning with peers and professors."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {facilities.map(({ Icon, title, text, href, image }) => (
            <Link
              key={title}
              href={href}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/60 to-transparent" aria-hidden />
                <div className="absolute bottom-3 left-3 flex size-11 items-center justify-center rounded-xl bg-gold text-navy">
                  <Icon className="size-5" aria-hidden />
                </div>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-heading text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {text}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-navy group-hover:text-accent-foreground">
                  Learn more
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
