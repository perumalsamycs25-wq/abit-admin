import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/ui/section-heading'
import { DEPARTMENTS } from '@/lib/departments'

export function DepartmentsSection() {
  return (
    <section className="bg-secondary/40 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Academics"
          title="Explore our Departments"
          description="An education at ABIT has limitless possibilities. Our courses are taught by esteemed faculty members across engineering, management and sciences."
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {DEPARTMENTS.map((d) => (
            <Link
              key={d.href}
              href={d.href}
              className="group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center rounded-md bg-navy px-2.5 py-1 font-heading text-xs font-bold tracking-wide text-gold">
                  {d.short}
                </span>
                <ArrowUpRight className="size-5 text-muted-foreground transition-colors group-hover:text-navy" aria-hidden />
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-navy">
                {d.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {d.blurb}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
