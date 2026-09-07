import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Fragment } from 'react'
import { ClipboardList, FileCheck2, GraduationCap, Landmark, Mail, MapPin, Phone, Send } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { SectionHeading } from '@/components/ui/section-heading'
import { CONTACT } from '@/lib/nav'

export const metadata: Metadata = {
  title: 'Admissions',
  description:
    'Admissions at AnuBose Institute of Technology (ABIT), Paloncha — overview, procedure, courses offered and admission enquiry.',
}

const steps = [
  {
    Icon: ClipboardList,
    title: 'Entrance Exam',
    text: 'Qualifying candidates are considered through the applicable entrance examination process.',
  },
  {
    Icon: FileCheck2,
    title: 'Counselling Process',
    text: 'Attend counselling and select the programme that matches your eligibility and interests.',
  },
  {
    Icon: GraduationCap,
    title: 'Admissions Process',
    text: 'Submit the required certificates and complete document verification with the admissions team.',
  },
  {
    Icon: Landmark,
    title: 'Final Committee Decision',
    text: 'Receive confirmation after the final review and complete your admission formalities.',
  },
]

const intakeGroups = [
  {
    level: 'Undergraduate',
    programs: [
      ['Civil Engineering', '60'],
      ['Computer Science and Engineering', '60'],
      ['Computer Science and Engineering (Artificial Intelligence and Machine Learning)', '60'],
      ['Computer Science and Engineering (Data Science)', '60'],
      ['Electronics and Communication Engineering', '60'],
      ['Electrical and Electronics Engineering', '60'],
      ['Mechanical Engineering', '30'],
      ['Mining Engineering', '30'],
    ],
    total: '420',
  },
  {
    level: 'Postgraduate - MBA',
    programs: [['Master of Business Administration', '60']],
  },
  {
    level: 'Diploma',
    programs: [
      ['Diploma in Civil Engineering', '60'],
      ['Diploma in Electrical and Electronics Engineering', '60'],
      ['Diploma in Computer Science and Engineering', '120'],
    ],
    total: '240',
  },
]

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        title="Admissions"
        subtitle="We're looking for future students who are inquisitive, passionate, original and determined to grow."
        crumbs={[{ label: 'Admissions' }]}
      />

      {/* Overview */}
      <section id="AdmissionsOverview" className="scroll-mt-28 bg-background py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            align="left"
            eyebrow="Admissions Overview"
            title="Begin your journey at ABIT"
            className="max-w-3xl"
          />
          <div className="mt-10 grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-start">
            <div className="space-y-6">
              <p className="text-[1.02rem] leading-[1.9] text-[#4f5d6e]">
                We are a group of institutions affiliated to Jawaharlal Nehru Technological University Hyderabad (JNTUH), which follows a standard admission process. Candidates who have cleared their 10+2 with Physics and Mathematics as major subjects and secured a minimum of 45% marks are eligible to apply. Selection is based on marks obtained in EAMCET (Engineering, Agriculture and Medical Common Entrance Test).
              </p>
            </div>

            <div className="overflow-hidden rounded-[1.5rem] border border-border bg-secondary/30 shadow-md">
              <Image
                src="/ABIT_IMAGES/admission_overview.jpg"
                alt="AnuBose Institute of Technology"
                width={800}
                height={600}
                className="h-auto w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Procedure */}
      <section id="AdmissionsProcedure" className="scroll-mt-28 bg-secondary/40 py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading
            eyebrow="Admissions Procedure"
            title="A simple three-step process"
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map(({ Icon, title, text }, i) => (
              <div key={title} className="relative rounded-xl border border-border bg-card p-6">
                <span className="absolute right-5 top-5 font-heading text-3xl font-extrabold text-secondary-foreground/10">
                  0{i + 1}
                </span>
                <div className="flex size-12 items-center justify-center rounded-xl bg-navy text-gold">
                  <Icon className="size-6" aria-hidden />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses / Intake */}
      <section id="CourseIntake" className="scroll-mt-28 bg-background py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeading eyebrow="Courses Offered" title="Programs & Intake" />
          <div className="mt-12 overflow-hidden rounded-xl border border-border">
            <table className="w-full text-left text-sm">
              <thead className="bg-navy text-primary-foreground">
                <tr>
                  <th className="w-16 px-5 py-3.5 font-heading font-semibold">S.No.</th>
                  <th className="px-5 py-3.5 font-heading font-semibold">Programme Offered</th>
                  <th className="w-40 px-5 py-3.5 font-heading font-semibold">Approved Intake</th>
                </tr>
              </thead>
              <tbody>
                {intakeGroups.map((group) => (
                  <Fragment key={group.level}>
                    <tr className="border-y border-border bg-secondary/60">
                      <th colSpan={3} className="px-5 py-3 text-left font-heading text-xs font-bold uppercase tracking-wide text-navy">{group.level}</th>
                    </tr>
                    {group.programs.map(([program, intake], index) => (
                      <tr key={program} className="border-b border-border even:bg-secondary/30">
                        <td className="px-5 py-3.5 font-medium text-navy">{index + 1}</td>
                        <td className="px-5 py-3.5 text-foreground">{program}</td>
                        <td className="px-5 py-3.5 text-muted-foreground">{intake}</td>
                      </tr>
                    ))}
                    {group.total && (
                      <tr className="border-b border-border bg-gold-soft/60 font-semibold text-navy">
                        <td colSpan={2} className="px-5 py-3.5">Total</td>
                        <td className="px-5 py-3.5">{group.total}</td>
                      </tr>
                    )}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Enquiry */}
      <section id="Enquiry" className="scroll-mt-28 bg-secondary/40 py-14 sm:py-16">
        <div className="mx-auto max-w-3xl px-6">
          <SectionHeading eyebrow="Admission Enquiry" title="Send us an enquiry" />
          <form className="mt-10 grid gap-5 rounded-2xl border border-border bg-card p-6 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Full Name" name="name" placeholder="Your name" required />
              <Field label="Phone" name="phone" type="tel" placeholder="Mobile number" required />
            </div>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Email" name="email" type="email" placeholder="you@example.com" />
              <div className="flex flex-col gap-1.5">
                <label htmlFor="program" className="text-sm font-medium text-foreground">
                  Program of Interest
                </label>
                <select
                  id="program"
                  name="program"
                  className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
                >
                  {intakeGroups.flatMap((group) => group.programs).map(([program]) => (
                    <option key={program}>{program}</option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="message" className="text-sm font-medium text-foreground">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                placeholder="How can we help?"
                className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
              />
            </div>
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 justify-self-start rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground transition-all hover:-translate-y-0.5 hover:shadow-md"
            >
              <Send className="size-4" aria-hidden />
              Submit Enquiry
            </button>
          </form>
        </div>
      </section>
    </>
  )
}

function Field({
  label,
  name,
  type = 'text',
  placeholder,
  required,
}: {
  label: string
  name: string
  type?: string
  placeholder?: string
  required?: boolean
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={name} className="text-sm font-medium text-foreground">
        {label}
        {required && <span className="text-destructive"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="rounded-lg border border-input bg-background px-4 py-2.5 text-sm outline-none transition-colors focus:border-accent focus:ring-2 focus:ring-accent/30"
      />
    </div>
  )
}
