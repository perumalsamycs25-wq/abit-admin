'use client'

import { useId, useState } from 'react'
import { ExternalLink } from 'lucide-react'
import { cn } from '@/lib/utils'

type CalendarTab = {
  label: string
  rows: Array<{ date?: string; title: string; academicYear?: string; href?: string }>
}

export function AcademicCalendarTabs({ tabs }: { tabs: CalendarTab[] }) {
  const [activeTab, setActiveTab] = useState(0)
  const tabListId = useId()
  const currentTab = tabs?.[activeTab] || tabs?.[0] || { label: '', rows: [] }
  const includesDate = currentTab.rows.some((row) => Boolean(row.date))
  const includesAcademicYear = currentTab.rows.some((row) => Boolean(row.academicYear))
  const includesLinks = currentTab.rows.some((row) => Boolean(row.href))

  return (
    <section className="pt-2" aria-label="Academic calendar by year">
      {tabs.length > 1 && (
        <div
          role="tablist"
          aria-label="Academic year"
          className="flex flex-wrap overflow-hidden rounded-lg border border-navy bg-navy"
        >
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
                'min-h-12 flex-1 border-r border-primary-foreground/20 px-4 py-3 font-heading text-sm font-semibold transition-colors last:border-r-0 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-gold',
                activeTab === index
                  ? 'bg-gold text-navy'
                  : 'bg-navy text-primary-foreground hover:bg-gold hover:text-navy',
              )}
            >
              {tab.label}
            </button>
          ))}
        </div>
      )}

      <div
        id={`${tabListId}-panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`${tabListId}-tab-${activeTab}`}
        className="mt-6 overflow-x-auto rounded-lg border border-border"
      >
        <table className="min-w-[36rem] w-full border-collapse text-left text-sm">
          <thead className="bg-secondary text-navy">
            <tr>
              <th scope="col" className="w-16 border-r border-border px-4 py-3 font-heading text-sm font-bold text-center">S.No.</th>
              {includesDate && <th scope="col" className="w-36 border-r border-border px-4 py-3 font-heading text-sm font-bold">Date</th>}
              <th scope="col" className="border-r border-border px-4 py-3 font-heading text-sm font-bold">Title</th>
              {includesAcademicYear && <th scope="col" className="w-36 border-r border-border px-4 py-3 font-heading text-sm font-bold">Academic Year</th>}
              {includesLinks && <th scope="col" className="w-24 px-4 py-3 font-heading text-sm font-bold text-center">View</th>}
            </tr>
          </thead>
          <tbody>
            {currentTab.rows.map((row, index) => (
              <tr key={`${row.date || ''}-${row.title}-${index}`} className="border-t border-border even:bg-secondary/30">
                <td className="border-r border-border px-4 py-3.5 font-semibold text-navy text-center">{index + 1}</td>
                {includesDate && <td className="border-r border-border px-4 py-3.5 text-foreground">{row.date}</td>}
                <td className="border-r border-border px-4 py-3.5 text-foreground font-medium">{row.title}</td>
                {includesAcademicYear && <td className="border-r border-border px-4 py-3.5 text-foreground">{row.academicYear}</td>}
                {includesLinks && (
                  <td className="px-4 py-3.5 text-center">
                    {row.href && (
                      <a
                        href={row.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-gray-700 hover:text-navy underline decoration-gray-400 underline-offset-4 transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold"
                      >
                        view
                        <ExternalLink className="size-3.5" aria-hidden />
                      </a>
                    )}
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}