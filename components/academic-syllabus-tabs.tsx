'use client'

import { ExternalLink } from 'lucide-react'
import { useId, useState } from 'react'
import { cn } from '@/lib/utils'

type SyllabusTab = {
  label: string
  rows?: Array<{ date: string; title: string }>
  description?: string
}

const SYLLABUS_URL = 'https://jntuh.ac.in/syllabus'

export function AcademicSyllabusTabs({ tabs }: { tabs: SyllabusTab[] }) {
  const [activeTab, setActiveTab] = useState(0)
  const tabListId = useId()
  const currentTab = tabs[activeTab]

  return (
    <section className="pt-2" aria-label="Academic syllabus by year">
      <div role="tablist" aria-label="Syllabus year" className="grid max-w-2xl grid-cols-3 overflow-hidden rounded-lg border border-navy bg-navy">
        {tabs.map((tab, index) => (
          <button
            key={tab.label}
            id={`${tabListId}-tab-${index}`}
            type="button"
            role="tab"
            aria-selected={activeTab === index}
            aria-controls={`${tabListId}-panel-${index}`}
            onClick={() => setActiveTab(index)}
            className={cn(
              'min-h-12 border-r border-primary-foreground/20 px-3 py-3 font-heading text-sm font-semibold transition-colors last:border-r-0 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold',
              activeTab === index ? 'bg-gold text-navy' : 'bg-navy text-primary-foreground hover:bg-gold hover:text-navy',
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div id={`${tabListId}-panel-${activeTab}`} role="tabpanel" aria-labelledby={`${tabListId}-tab-${activeTab}`} className="mt-8">
        {currentTab.rows ? (
          <div className="overflow-x-auto rounded-lg border border-border">
            <table className="min-w-[42rem] w-full border-collapse text-left text-sm">
              <tbody>
                {currentTab.rows.map((row, index) => (
                  <tr key={`${row.date}-${row.title}`} className="border-t border-border first:border-t-0 even:bg-secondary/30">
                    <td className="w-16 border-r border-border px-4 py-3.5 font-semibold text-navy">{index + 1}</td>
                    <td className="w-36 border-r border-border px-4 py-3.5 text-foreground">{row.date}</td>
                    <td className="px-4 py-3.5 text-foreground">{row.title}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="max-w-3xl text-base leading-relaxed text-muted-foreground">{currentTab.description}</p>
        )}
      </div>

      <div className="mt-7 flex justify-center">
        <a
          href={SYLLABUS_URL}
          target="_blank"
          rel="noreferrer"
          className="inline-flex min-h-11 items-center gap-2 rounded-md bg-navy px-5 py-3 font-heading text-sm font-semibold text-primary-foreground transition-colors hover:bg-gold hover:text-navy focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
        >
          Click here
          <ExternalLink className="size-4" aria-hidden />
        </a>
      </div>
    </section>
  )
}