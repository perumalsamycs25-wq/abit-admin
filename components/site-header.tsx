'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import {
  ChevronDown,
  Menu,
  X,
  Search,
  Phone,
  Mail,
  MapPin,
  GraduationCap,
  Award,
  ChevronRight,
} from 'lucide-react'
import { NAV, CONTACT, type NavItem } from '@/lib/nav'
import { AdmissionModal, openAdmissionModal } from '@/components/admission-modal'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [openMenu, setOpenMenu] = useState<string | null>(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header className="sticky top-0 z-50">
      {/* Top utility strip */}
      <div className="hidden bg-navy-deep text-primary-foreground lg:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-6 py-1.5 text-xs">
          <div className="flex items-center gap-5">
            <span className="flex items-center gap-1.5">
              <MapPin className="size-3.5 text-gold" aria-hidden />
              {CONTACT.address}
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a
              href={`tel:${CONTACT.landline}`}
              className="flex items-center gap-1.5 transition-colors hover:text-gold"
            >
              <Phone className="size-3.5 text-gold" aria-hidden />
              {CONTACT.landline}
            </a>
            <a
              href={`mailto:${CONTACT.email}`}
              className="flex items-center gap-1.5 transition-colors hover:text-gold"
            >
              <Mail className="size-3.5 text-gold" aria-hidden />
              {CONTACT.email}
            </a>
            <span className="flex items-center gap-1.5 border-l border-white/20 pl-5 text-gold">
              <Award className="size-3.5" aria-hidden />
              AICTE Approved · JNTUH · NAAC B++
            </span>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`border-b border-border bg-background/95 backdrop-blur transition-all ${
          scrolled ? 'shadow-md' : ''
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 sm:px-6">
          <Link href="/" className="flex items-center gap-3">
            <img
              src="/ABIT_IMAGES/logo-s1.png"
              alt="AnuBose Institute of Technology logo"
              className="h-10 sm:h-12 w-auto object-contain"
            />
            <span className="leading-tight">
              <span className="block font-heading text-sm font-extrabold uppercase text-primary sm:text-lg">
                AnuBose Institute of Technology
              </span>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-muted-foreground sm:text-xs">
                For Women&apos;s · New Paloncha, Telangana
              </span>
            </span>
            <img
              src="/ABIT_IMAGES/logo-s2.png"
              alt="AnuBose Institute of Technology NAAC B++ logo"
              className="hidden sm:block h-10 sm:h-12 w-auto object-contain"
            />
          </Link>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setSearchOpen((v) => !v)}
              aria-label="Toggle search"
              className="flex size-10 items-center justify-center rounded-full text-navy transition-colors hover:bg-secondary"
            >
              <Search className="size-5" aria-hidden />
            </button>
            <button
              type="button"
              onClick={openAdmissionModal}
              className="hidden items-center gap-2 rounded-full bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md sm:flex cursor-pointer"
            >
              <GraduationCap className="size-4" aria-hidden />
              Apply Now
            </button>
            <button
              type="button"
              onClick={() => setMobileOpen(true)}
              aria-label="Open menu"
              className="flex size-10 items-center justify-center rounded-full text-navy transition-colors hover:bg-secondary lg:hidden"
            >
              <Menu className="size-6" aria-hidden />
            </button>
          </div>
        </div>

        {searchOpen && (
          <div className="border-t border-border bg-secondary/60">
            <div className="mx-auto max-w-7xl px-4 py-3 sm:px-6">
              <form action="/" className="flex items-center gap-2">
                <Search className="size-5 text-muted-foreground" aria-hidden />
                <input
                  type="search"
                  name="s"
                  placeholder="Search the ABIT website..."
                  className="w-full bg-transparent py-1.5 text-sm outline-none placeholder:text-muted-foreground"
                  autoFocus
                />
              </form>
            </div>
          </div>
        )}

        {/* Desktop nav */}
        <nav
          className="hidden border-t border-border bg-navy lg:block"
          onMouseLeave={() => setOpenMenu(null)}
          aria-label="Primary"
        >
          <div className="mx-auto flex max-w-7xl items-stretch justify-between px-4 sm:px-6">
            {NAV.map((item, index) => (
              <DesktopNavItem
                key={item.label}
                item={item}
                index={index}
                total={NAV.length}
                open={openMenu === item.label}
                onEnter={() => setOpenMenu(item.children ? item.label : null)}
              />
            ))}
          </div>
        </nav>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <MobileNav onClose={() => setMobileOpen(false)} />
      )}

      {/* Global Admission Popup Modal */}
      <AdmissionModal />
    </header>
  )
}

function DesktopNavItem({
  item,
  index,
  total,
  open,
  onEnter,
}: {
  item: NavItem
  index: number
  total: number
  open: boolean
  onEnter: () => void
}) {
  const hasChildren = !!item.children?.length
  const isRightAligned = index >= total - 3

  return (
    <div className="relative group" onMouseEnter={onEnter}>
      <Link
        href={item.href}
        className={`flex h-full items-center gap-1 px-3 py-3 text-xs xl:text-sm font-semibold transition-all duration-200 whitespace-nowrap ${
          open
            ? 'bg-gold text-navy font-bold'
            : 'text-white hover:bg-gold hover:text-navy'
        }`}
      >
        {item.label}
        {hasChildren && (
          <ChevronDown
            className={`size-3.5 transition-transform duration-200 ${
              open ? 'rotate-180 text-navy' : 'text-gold'
            }`}
            aria-hidden
          />
        )}
      </Link>

      {hasChildren && open && (
        <div
          className={`absolute top-full z-50 mt-0 overflow-hidden rounded-none border border-gray-100 bg-white p-3.5 shadow-2xl ring-1 ring-black/5 animate-in fade-in slide-in-from-top-1 duration-150 ${
            isRightAligned ? 'right-0' : 'left-0'
          } ${
            (item.children?.length || 0) > 6 ? 'w-[480px] xl:w-[540px]' : 'w-[240px] xl:w-[280px]'
          }`}
        >
          <div className="mb-2.5 flex items-center gap-2 border-b border-gray-100 pb-2 px-2">
            <span className="h-4 w-1 bg-gold" aria-hidden />
            <h4 className="font-heading text-xs font-bold uppercase tracking-wider text-navy">
              {item.label}
            </h4>
          </div>
          <div
            className={`grid gap-1 ${
              (item.children?.length || 0) > 6 ? 'grid-cols-2' : 'grid-cols-1'
            }`}
          >
            {item.children!.map((child) => (
              <Link
                key={child.label}
                href={child.href}
                className="flex items-center gap-2 rounded-none px-2.5 py-1.5 text-xs font-medium text-gray-700 transition-colors hover:bg-[#f0f4fc] hover:text-navy hover:font-semibold"
              >
                <ChevronRight className="size-3.5 shrink-0 text-gold" aria-hidden />
                <span>{child.label}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function MobileNav({ onClose }: { onClose: () => void }) {
  const [expanded, setExpanded] = useState<string | null>(null)
  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div className="absolute inset-0 bg-navy-deep/60 backdrop-blur-sm" onClick={onClose} />
      <div className="absolute right-0 top-0 flex h-full w-[86%] max-w-sm flex-col bg-background shadow-2xl">
        <div className="flex items-center justify-between border-b border-border px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="flex size-9 items-center justify-center border-2 border-primary font-heading text-xs font-extrabold text-primary">ABIT</span>
            <span className="font-heading text-sm font-bold text-navy">AnuBose Institute</span>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex size-9 items-center justify-center rounded-full text-navy hover:bg-secondary"
          >
            <X className="size-5" aria-hidden />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-2 py-3">
          {NAV.map((item) => {
            const hasChildren = !!item.children?.length
            const isOpen = expanded === item.label
            return (
              <div key={item.label} className="border-b border-border/60">
                <div className="flex items-center">
                  <Link
                    href={item.href}
                    onClick={onClose}
                    className="flex-1 px-3 py-3 text-sm font-medium text-foreground"
                  >
                    {item.label}
                  </Link>
                  {hasChildren && (
                    <button
                      type="button"
                      aria-label={`Toggle ${item.label}`}
                      onClick={() => setExpanded(isOpen ? null : item.label)}
                      className="flex size-11 items-center justify-center text-navy"
                    >
                      <ChevronDown
                        className={`size-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden
                      />
                    </button>
                  )}
                </div>
                {hasChildren && isOpen && (
                  <div className="pb-2 pl-3">
                    {item.children!.map((child) => (
                      <Link
                        key={child.label}
                        href={child.href}
                        onClick={onClose}
                        className="flex items-center gap-2 rounded-md px-3 py-2 text-sm text-muted-foreground hover:text-navy"
                      >
                        <ChevronRight className="size-3.5 text-gold" aria-hidden />
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
        <div className="border-t border-border p-4">
          <button
            type="button"
            onClick={() => {
              onClose()
              openAdmissionModal()
            }}
            className="flex w-full items-center justify-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-foreground cursor-pointer"
          >
            <GraduationCap className="size-4" aria-hidden />
            Apply Now
          </button>
        </div>
      </div>
    </div>
  )
}
