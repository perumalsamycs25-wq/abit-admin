'use client'

import { useEffect, useState } from 'react'
import { X, Send, CheckCircle2, GraduationCap } from 'lucide-react'

export function openAdmissionModal() {
  if (typeof window !== 'undefined') {
    window.dispatchEvent(new Event('open-admission-modal'))
  }
}

export function AdmissionModal() {
  const [isOpen, setIsOpen] = useState(false)
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    program: 'Computer Science and Engineering',
    message: '',
  })

  useEffect(() => {
    const handleOpen = () => {
      setSubmitted(false)
      setIsOpen(true)
    }
    window.addEventListener('open-admission-modal', handleOpen)
    return () => window.removeEventListener('open-admission-modal', handleOpen)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false)
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen])

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const courses = [
    'Computer Science and Engineering',
    'Computer Science and Engineering (AI & ML)',
    'Computer Science and Engineering (Data Science)',
    'Electronics & Communication Engineering',
    'Electrical & Electronics Engineering',
    'Mechanical Engineering',
    'Civil Engineering',
    'Mining Engineering',
    'Master of Business Administration (MBA)',
    'Diploma Courses',
  ]

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-navy-deep/70 backdrop-blur-sm transition-opacity"
        onClick={() => setIsOpen(false)}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-lg overflow-hidden rounded-2xl bg-white shadow-2xl ring-1 ring-black/10 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="bg-navy px-6 py-5 text-white flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="flex size-9 items-center justify-center rounded-full bg-gold text-navy">
              <GraduationCap className="size-5" />
            </div>
            <div>
              <h3 className="font-heading text-lg font-bold text-white leading-tight">
                Admission Enquiry 2026-27
              </h3>
              <p className="text-xs text-primary-foreground/80">AnuBose Institute of Technology, Paloncha</p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsOpen(false)}
            className="flex size-8 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close modal"
          >
            <X className="size-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="py-8 text-center space-y-4">
              <div className="mx-auto flex size-16 items-center justify-center rounded-full bg-green-100 text-green-600">
                <CheckCircle2 className="size-10" />
              </div>
              <h4 className="font-heading text-xl font-bold text-navy">Enquiry Submitted Successfully!</h4>
              <p className="text-sm text-gray-600 max-w-sm mx-auto">
                Thank you for your interest in ABIT. Our admissions team will review your application details and reach out to you shortly.
              </p>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="mt-4 inline-flex items-center justify-center rounded-full bg-navy px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-navy-deep"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="modal-name" className="block text-xs font-semibold text-gray-700 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="modal-name"
                    type="text"
                    required
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/20"
                  />
                </div>
                <div>
                  <label htmlFor="modal-phone" className="block text-xs font-semibold text-gray-700 mb-1">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="modal-phone"
                    type="tel"
                    required
                    placeholder="Mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/20"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="modal-email" className="block text-xs font-semibold text-gray-700 mb-1">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    id="modal-email"
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/20"
                  />
                </div>

                <div>
                  <label htmlFor="modal-program" className="block text-xs font-semibold text-gray-700 mb-1">
                    Program of Interest
                  </label>
                  <select
                    id="modal-program"
                    value={formData.program}
                    onChange={(e) => setFormData({ ...formData, program: e.target.value })}
                    className="w-full rounded-lg border border-gray-300 px-3 py-2 text-xs sm:text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/20"
                  >
                    {courses.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="modal-message" className="block text-xs font-semibold text-gray-700 mb-1">
                  Message / Remarks
                </label>
                <textarea
                  id="modal-message"
                  rows={3}
                  placeholder="How can we assist you with admissions?"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm outline-none transition-colors focus:border-navy focus:ring-2 focus:ring-navy/20"
                />
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 text-sm font-bold text-navy transition-all hover:bg-gold-soft hover:shadow-md"
              >
                <Send className="size-4" />
                Submit Admission Enquiry
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  )
}
