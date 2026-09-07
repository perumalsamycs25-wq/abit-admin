import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'A glimpse into life, events and celebrations across the AnuBose Institute of Technology campus.',
}

const images = [
  { src: '/ABIT_IMAGES/BUILDING-2-Copy-1.jpg', alt: 'ABIT Main Campus Building', caption: 'ABIT Main Building' },
  { src: '/ABIT_IMAGES/banner01.webp', alt: 'Campus Overview', caption: 'Campus Overview' },
  { src: '/ABIT_IMAGES/admission_overview.jpg', alt: 'Practical Surveying Session', caption: 'Practical Lab Session' },
  { src: '/ABIT_IMAGES/Science-Humanities-banner.jpg', alt: 'Academic Seminar Hall', caption: 'Academic Seminar' },
  { src: '/ABIT_IMAGES/Placements-banner.jpg', alt: 'Placements & Campus Drives', caption: 'Placement Drive' },
  { src: '/ABIT_IMAGES/Departments.jpg', alt: 'Department Blocks', caption: 'Department Infrastructure' },
  { src: '/ABIT_IMAGES/Mechanical-Engineering.jpg', alt: 'Engineering Workshop', caption: 'Engineering Workshop' },
  { src: '/ABIT_IMAGES/bannerp2.jpg', alt: 'Campus Life & Activities', caption: 'Campus Life' },
  { src: '/ABIT_IMAGES/csd.jpg', alt: 'Computer Science Department', caption: 'Computer Science Block' },
]

export default function GalleryPage() {
  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="Moments from life, events and celebrations across the ABIT campus."
        crumbs={[{ label: 'Gallery' }]}
      />
      <section className="bg-background py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {images.map((img, i) => (
              <figure
                key={i}
                className="group relative aspect-[4/3] overflow-hidden rounded-xl border border-border"
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <figcaption className="absolute inset-x-0 bottom-0 translate-y-2 bg-gradient-to-t from-navy-deep/85 to-transparent p-4 text-sm font-semibold text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  {img.caption}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
