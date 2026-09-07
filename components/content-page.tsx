import Link from 'next/link'
import Image from 'next/image'
import { CheckCircle2, Phone, Mail, MapPin, ArrowRight } from 'lucide-react'
import { PageHero, type Crumb } from '@/components/page-hero'
import type { PageContent } from '@/lib/content'
import { CONTACT } from '@/lib/nav'
import { openAdmissionModal } from '@/components/admission-modal'

export function ContentPage({
  content,
  crumbs,
  children,
}: {
  content: PageContent
  crumbs: Crumb[]
  children?: React.ReactNode
}) {
  return (
    <>
      <PageHero title={content.title} subtitle={content.subtitle} image={content.image} crumbs={crumbs} />
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 lg:grid-cols-3 lg:py-16">
        <div className="lg:col-span-2">
          <article className="space-y-8">
            {content.sections.map((s, i) => (
              <section key={i}>
                {s.heading && (
                  <h2 className="mb-3 flex items-center gap-2 font-heading text-xl font-bold text-navy">
                    <span className="h-5 w-1 rounded-full bg-gold" aria-hidden />
                    {s.heading}
                  </h2>
                )}
                {s.paragraphs?.map((p, j) => (
                  <p key={j} className="mb-4 text-base leading-relaxed text-muted-foreground">
                    {p}
                  </p>
                ))}
                {s.members && (
                  <div className="grid gap-x-8 gap-y-7 sm:grid-cols-2 lg:grid-cols-3">
                    {s.members.map((member) => (
                      <div key={`${member.name}-${member.role}`} className="border-l-4 border-primary bg-secondary/30 px-4 py-3">
                        <h3 className="font-heading text-lg font-bold text-foreground">{member.name}</h3>
                        <p className="mt-1 text-sm font-semibold text-red-700">{member.role}</p>
                      </div>
                    ))}
                  </div>
                )}
                {s.bullets && (
                  <ul className="space-y-2.5">
                    {s.bullets.map((b, j) => (
                      <li key={j} className="flex items-start gap-2.5 text-base text-foreground">
                        <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-accent" aria-hidden />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {s.table && (
                  <div className="mt-8 overflow-x-auto rounded-xl border border-border bg-white shadow-sm">
                    <table className="min-w-[46rem] w-full border-collapse text-left text-sm">
                      <thead className="bg-navy text-primary-foreground">
                        <tr>
                          {s.table.headers.map((header) => (
                            <th key={header} className="border-r border-white/15 px-4 py-3 font-heading text-xs font-semibold uppercase tracking-wide last:border-r-0">
                              {header}
                            </th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {s.table.rows.map((row, rowIndex) => (
                          <tr key={rowIndex} className="border-t border-border even:bg-secondary/30">
                            {row.map((cell, cellIndex) => (
                              <td key={cellIndex} className={`border-r border-border px-4 py-4 align-top last:border-r-0 ${cellIndex === 0 ? 'w-16 font-semibold text-navy' : cellIndex === 1 ? 'w-32 whitespace-nowrap text-muted-foreground' : 'text-foreground'}`}>
                                {cell}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </section>
            ))}
            {children}
          </article>
        </div>

        <aside className="space-y-6 lg:col-span-1">
          {content.asideImage && (
            <div className={`overflow-hidden rounded-2xl bg-secondary/30 shadow-sm ${content.asideImageClass || ''}`}>
              <Image
                src={content.asideImage}
                alt="AnuBose Institute of Technology"
                width={800}
                height={560}
                className="size-full object-cover object-top"
              />
            </div>
          )}
          <div className="rounded-2xl border border-border bg-secondary/40 p-6">
            <h3 className="font-heading text-lg font-bold text-navy">Get in touch</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex gap-2.5">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent-foreground" aria-hidden />
                {CONTACT.address}
              </li>
              <li className="flex gap-2.5">
                <Phone className="mt-0.5 size-4 shrink-0 text-accent-foreground" aria-hidden />
                <span>
                  {CONTACT.landline}
                  <br />
                  {CONTACT.cells.join(', ')}
                </span>
              </li>
              <li className="flex gap-2.5">
                <Mail className="mt-0.5 size-4 shrink-0 text-accent-foreground" aria-hidden />
                <a href={`mailto:${CONTACT.email}`} className="hover:text-navy">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
          <div className="rounded-2xl bg-navy p-6 text-primary-foreground">
            <h3 className="font-heading text-lg font-bold">Admissions Open</h3>
            <p className="mt-2 text-sm text-primary-foreground/75">
              Join a community that helps you grow into a confident builder of your future.
            </p>
            <button
              type="button"
              onClick={openAdmissionModal}
              className="mt-4 inline-flex items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 cursor-pointer"
            >
              Apply Now
              <ArrowRight className="size-4" aria-hidden />
            </button>
          </div>
        </aside>
      </div>
    </>
  )
}
