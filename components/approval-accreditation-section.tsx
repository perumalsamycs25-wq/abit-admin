import Image from 'next/image'
import { FileText } from 'lucide-react'

const years = ['2023-24', '2022-23', '2021-22', '2020-21', '2019-20', '2018-19', '2017-18']

function pdfDocuments(prefix: string) {
  return years.map((year) => ({
    year,
    href: `/documents/approvals/${prefix}-${year}.pdf`,
  }))
}

const accreditations = [
  {
    title: 'Approvals',
    label: 'AICTE Approval',
    description: 'All India Council for Technical Education',
    image: '/ABIT_IMAGES/aicte-logo.png',
    accent: 'bg-[#14287f]',
    documents: pdfDocuments('aicte-approval'),
  },
  {
    title: 'Affiliations',
    label: 'Affiliation Letters',
    description: 'Jawaharlal Nehru Technological University, Hyderabad',
    image: '/ABIT_IMAGES/jntuh-logo.png',
    accent: 'bg-[#14287f]',
    documents: pdfDocuments('jntuh-affiliation'),
  },
  {
    title: 'Accreditations',
    label: 'UGC Autonomous Institution',
    description: 'University Grants Commission',
    image: '/ABIT_IMAGES/ugc-logo.png',
    accent: 'bg-[#b20d3d]',
  },
  {
    title: 'ISO Certification',
    label: 'ISO Certification',
    description: 'Quality management certification',
    image: '/ABIT_IMAGES/iso-logo.png',
    accent: 'bg-[#14287f]',
  },
]

export function ApprovalAccreditationSection() {
  return (
    <section className="mt-10 border-t border-border pt-10">
      <div className="grid items-start gap-8 sm:grid-cols-2">
        {accreditations.map((item) => (
          <article key={item.label} className={`flex w-full flex-col overflow-hidden rounded-xl border border-border bg-white shadow-sm ${item.documents ? 'min-h-[24rem]' : 'min-h-[18rem]'}`}>
            {item.title && (
              <h2 className="border-b border-border px-5 py-3 text-center font-heading text-sm font-semibold uppercase tracking-[0.16em] text-[#b20d3d]">
                {item.title}
              </h2>
            )}
            <div className="grid flex-1 grid-cols-[minmax(0,1fr)_minmax(9rem,1fr)]">
              <div className="flex flex-col items-center justify-center gap-3 bg-[#f7fafc] p-5 text-center">
                <Image src={item.image} alt={item.label} width={220} height={140} className="h-24 w-40 object-contain" />
                <div>
                  <h3 className="font-heading text-sm font-bold text-navy">{item.label}</h3>
                  <p className="mt-1 text-xs text-muted-foreground">{item.description}</p>
                </div>
              </div>
              <div className="flex flex-col gap-1.5 bg-[#eef2ff] p-3">
                {item.documents ? item.documents.map(({ year, href }) => (
                  <a key={year} href={href} target="_blank" rel="noreferrer" className="flex items-center justify-between rounded-sm border border-white/80 bg-[#14287f] px-3 py-2 text-xs font-semibold text-white transition-colors hover:bg-[#b20d3d]">
                    <span>{year}</span>
                    <span className="inline-flex items-center gap-1">
                      PDF <FileText className="size-3.5" aria-hidden />
                    </span>
                  </a>
                )) : (
                  <div className={`${item.accent} flex flex-1 items-center justify-center rounded-sm px-3 py-2 text-center text-xs font-semibold text-white`}>
                    {item.label}
                  </div>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
