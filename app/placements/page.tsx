import type { Metadata } from 'next'
import Image from 'next/image'
import { Download, Mail, Phone, ExternalLink } from 'lucide-react'
import { PageHero } from '@/components/page-hero'

export const metadata: Metadata = {
  title: 'Placements',
  description:
    'Training & Placement Cell at AnuBose Institute of Technology (ABIT) — preparing students for rewarding careers with leading recruiters.',
}

const statsData = [
  { year: '2022-23', count: '202' },
  { year: '2021-22', count: '173' },
  { year: '2020-21', count: '238' },
  { year: '2019-20', count: '133' },
  { year: '2018-19', count: '123' },
]

const recruiterLogos = [
  { name: 'DXC Technology', src: '/ABIT_IMAGES/DXC.png' },
  { name: 'Mphasis', src: '/ABIT_IMAGES/MPHASIS.png' },
  { name: 'Tiger Analytics', src: '/ABIT_IMAGES/TIGER-ANALYTICS.png' },
  { name: 'Tech Mahindra', src: '/ABIT_IMAGES/texh-mahindra.png' },
  { name: 'HCL', src: '/ABIT_IMAGES/HCL-logo.png' },
  { name: 'Virtusa', src: '/ABIT_IMAGES/virtusa.png' },
  { name: 'Hexaware', src: '/ABIT_IMAGES/hexaware-logo.png' },
  { name: 'Atos Syntel', src: '/ABIT_IMAGES/atosyntel.png' },
  { name: 'Legato', src: '/ABIT_IMAGES/LEGATO.png' },
  { name: 'IBM', src: '/ABIT_IMAGES/IBM.png' },
  { name: 'DBS', src: '/ABIT_IMAGES/DBS.png' },
  { name: 'Big Works', src: '/ABIT_IMAGES/BIG-WORKS.png' },
  { name: 'Axelor', src: '/ABIT_IMAGES/axelor.png' },
  { name: 'SMBXL', src: '/ABIT_IMAGES/SMBXL.png' },
  { name: 'Efftronics', src: '/ABIT_IMAGES/eff.png' },
]

export default function PlacementsPage() {
  return (
    <>
      <PageHero
        title="Placements"
        subtitle="It begins with good academics, and goes so much further from there."
        crumbs={[{ label: 'Placements' }]}
      />

      {/* TOTAL NUMBER OF STUDENTS PLACED TABLE */}
      <section className="bg-background py-10 sm:py-10">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="font-heading text-xl font-bold uppercase tracking-wider text-navy sm:text-2xl">
              TOTAL NUMBER OF STUDENTS PLACED
            </h2>
            <div className="mx-auto mt-2 h-1 w-16 bg-gold rounded-full" />
            <p className="mt-2 text-xs text-muted-foreground italic">*Click on count to view file</p>
          </div>

          <div className="mt-6 overflow-x-auto rounded-lg border border-gray-200 shadow-sm">
            <table className="w-full border-collapse text-center text-sm">
              <tbody className="divide-y divide-gray-200">
                <tr className="bg-gray-50/80 font-bold text-gray-800">
                  <td className="border-r border-gray-200 px-4 py-3 text-left font-semibold text-navy">Academic Year</td>
                  {statsData.map((s) => (
                    <td key={s.year} className="border-r border-gray-200 px-4 py-3 last:border-r-0">{s.year}</td>
                  ))}
                </tr>
                <tr className="bg-white text-gray-700">
                  <td className="border-r border-gray-200 px-4 py-3 text-left font-medium text-gray-600">No. of Students Placed</td>
                  {statsData.map((s) => (
                    <td key={s.year} className="border-r border-gray-200 px-4 py-3 font-semibold text-navy last:border-r-0">{s.count}</td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          
        </div>
      </section>

      {/* VISION & MISSION */}
      <section className="bg-secondary/30 py-12 sm:py-12">
        <div className="mx-auto max-w-6xl px-6 grid gap-8 md:grid-cols-2">
          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="text-center">
              <h2 className="font-heading text-2xl font-bold text-navy">Vision</h2>
              <div className="mx-auto mt-2 h-1 w-12 bg-gold rounded-full" />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-gray-700 text-center">
              To empower students with skills coherent with the industry, and recruiters with a competent talent pool.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
            <div className="text-center">
              <h2 className="font-heading text-2xl font-bold text-navy">Mission</h2>
              <div className="mx-auto mt-2 h-1 w-12 bg-gold rounded-full" />
            </div>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-gray-700 text-left">
              <li className="flex items-start gap-2">
                <span className="text-navy font-bold">•</span>
                <span>To encourage students to make informed and conscious career decisions.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy font-bold">•</span>
                <span>To engage with ample recruiters and Organizations for Campus Recruitment drives.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy font-bold">•</span>
                <span>To augment the skillset and necessary technical know how of students and make them market ready.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PLACEMENT DEPARTMENT */}
      <section className="bg-background py-12 sm:py-13">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">Placement Department</h2>
            <div className="mx-auto mt-2 h-1 w-16 bg-gold rounded-full" />
          </div>

          <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p>
              Our Training and Placement Cell is credited with providing successful engineers and professionals after completion of their degree. We organise a number of training programs for all the students with the help of in-house experts and resource personnel drawn from professional agencies. These activities have proved exceptionally useful in shaping the careers of students.
            </p>
            <p className="font-semibold text-navy">The goal of the placement cell is:</p>
            <ul className="space-y-2.5 pl-4 text-sm text-gray-700">
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-navy" />
                <span>Connecting the students with organisations and giving both the opportunity to find the right fit in terms of career advancement &amp; employability. This is done by reaching out to multiple recruiters and companies and organising campus drives and optimising the job hunting and talent scouting procedure.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-navy" />
                <span>Coaching students in their training process by providing a simulated corporate experience through globally recognised technical certifications from leading MNCs, industrial visits, seminars and Guest Lectures by eminent professionals of their fields, soft skills &amp; aptitude building training, amongst a few.</span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-navy" />
                <span>Ensuring the quality and reputation of a ABIT alumna to remain withheld and be a responsible and ethical member of the society.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* PLACEMENTS COMMITTEE */}
      <section className="bg-secondary/30 py-12 sm:py-13">
        <div className="mx-auto max-w-5xl px-6">
          <div className="text-center">
            <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">Placements Committee</h2>
            <div className="mx-auto mt-2 h-1 w-16 bg-gold rounded-full" />
          </div>

          <div className="mt-6 space-y-4 text-sm sm:text-base leading-relaxed text-gray-700">
            <p>
              The Placement Committee members strive to provide the students and recruiters with the right kind of facilities and establish a smooth and uninterrupted placement process. Their key objectives are to:
            </p>
            <ul className="space-y-2 pl-4 text-sm text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-navy font-bold">•</span>
                <span>Provide Career Guidance to Students</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy font-bold">•</span>
                <span>Network with Employers across the country</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy font-bold">•</span>
                <span>Plan and Organise hiring events and Placement Drive</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-navy font-bold">•</span>
                <span>Screen potential candidates</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* RECRUITERS & ANIMATED SCROLL MARQUEE */}
      <section className="bg-background py-12 sm:py-13">
        <div className="mx-auto max-w-6xl px-6 text-center">
          <h2 className="font-heading text-2xl font-bold text-navy sm:text-3xl">Recruiters</h2>
          <div className="mx-auto mt-2 h-1 w-16 bg-gold rounded-full" />

          {/* Grid of Recruiter Graphics */}
         


          {/* Animated Scrolling Recruiter Logos Marquee with Increased Image Sizes */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200 bg-white py-8 shadow-sm">
            <div className="flex w-max animate-marquee items-center gap-8">
              {[...recruiterLogos, ...recruiterLogos, ...recruiterLogos].map((logo, index) => (
                <div
                  key={`${logo.name}-${index}`}
                  className="flex h-28 w-56 shrink-0 items-center justify-center rounded-xl border border-gray-100 bg-gray-50/50 p-4 shadow-sm transition-transform hover:scale-105"
                >
                  <Image
                    src={logo.src}
                    alt={logo.name}
                    width={200}
                    height={80}
                    className="max-h-20 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8">
            <a
              href="/documents/approvals/jntuh-affiliation-2023-24.pdf"
              download
              className="inline-flex items-center gap-2 rounded-md bg-navy px-6 py-3 text-sm font-bold text-white shadow-md transition-all hover:bg-navy-deep"
            >
              <Download className="size-4" aria-hidden />
              Download Placement Brochure
            </a>
          </div>
        </div>
      </section>

      {/* TPO CONTACT DETAILS WITH ILLUSTRATION */}
      <section className="bg-secondary/40 py-12 sm:py-13">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 rounded-2xl border border-border bg-card p-6 sm:p-8 shadow-sm">
            <div className="space-y-2">
              <h3 className="font-heading text-xl font-bold text-navy">Mr. Kranthi Immadi</h3>
              <p className="text-sm font-semibold text-muted-foreground">TPO, AnuBose Institute of Technology</p>

              <div className="pt-2 space-y-2 text-sm text-gray-700">
                <div className="flex items-center gap-2">
                  <Phone className="size-4 text-navy" />
                  <span>+91 9381112641 / +91 7997180044</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="size-4 text-navy" />
                  <a href="mailto:abittpo@gmail.com" className="hover:underline text-navy">abittpo@gmail.com</a>
                </div>
              </div>
            </div>

            <div className="relative w-64 h-48 shrink-0">
              <Image
                src="/ABIT_IMAGES/Admission-Enquiry.svg"
                alt="TPO Contact Illustration"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
