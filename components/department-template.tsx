'use client'

import { useState } from 'react'
import { GraduationCap, Target, Eye, BookMarked, UserCheck, Award, Mail, Phone, MapPin, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react'
import { PageHero } from '@/components/page-hero'
import { DEPARTMENTS, type Department } from '@/lib/departments'

function departmentBanner(dept: Department): string {
  if (dept.short === 'ECE') return '/ABIT_IMAGES/Electronics-Communication-Engineering-banner.png'
  if (dept.short === 'MECH') return '/ABIT_IMAGES/Mechanical-Engineering.jpg'
  if (dept.short === 'MINING') return '/ABIT_IMAGES/Mining-Engineering-banner.jpg'
  if (dept.short === 'MBA') return '/ABIT_IMAGES/Master-Business-Administration-banner.jpg'
  if (dept.short === 'S&H') return '/ABIT_IMAGES/Science-Humanities-banner.jpg'
  return '/ABIT_IMAGES/banner01.webp'
}

export function DepartmentTemplate({ dept }: { dept: Department }) {
  const [activeTab, setActiveTab] = useState(0)
  const [poTab, setPoTab] = useState<'po' | 'peo' | 'pso'>('po')
  const [regulationTab, setRegulationTab] = useState<'R18' | 'R22' | 'R16'>('R18')
  const [openSemester, setOpenSemester] = useState<number | null>(0)

  const navItems = [
    `About ${dept.short} Department`,
    "Vision,Mission ,PEO's",
    "CO's,PO, PSO's",
    'Course Outcomes',
    'Head of Department',
    'Faculty Profile',
    'Gallery',
  ]

  const courseOutcomesData = [
    {
      sem: 'Year I - I Semester',
      courses: [
        {
          code: 'MA101BS',
          name: 'MATHEMATICS - I',
          outcomes: [
            { label: 'CO1', text: 'Simplify the system of linear equations using rank of matrix.' },
            { label: 'CO2', text: 'Classify characteristic equations, eigenvectors as well as the application of Cayley-Hamilton theorem to find powers of matrix.' },
            { label: 'CO3', text: 'Apply improper integrals to test the convergence and divergence of the given series.' },
            { label: 'CO4', text: 'Apply partial differentiation of multi-variable functions.' },
            { label: 'CO5', text: 'Apply multi-variable functions to find maxima and minima, Jacobians.' },
          ],
        },
        {
          code: 'CH102BS',
          name: 'ENGINEERING CHEMISTRY',
          outcomes: [
            { label: 'CO1', text: 'Explain concepts of electrical double layer to calculate E.M.F and electrodes.' },
            { label: 'CO2', text: 'Determine water treatment standards for domestic and industrial purposes.' },
            { label: 'CO3', text: 'Analyze stereochemistry and structure-reactivity relationships of organic reactions.' },
            { label: 'CO4', text: 'Synthesize pharmaceutical drugs and engineering polymers.' },
            { label: 'CO5', text: 'Recognize the principles and applications of spectroscopy.' },
          ],
        },
        {
          code: 'EE103ES',
          name: 'BASIC ELECTRICAL ENGINEERING',
          outcomes: [
            { label: 'CO1', text: 'Analyze electrical circuits using Mesh and Nodal methods.' },
            { label: 'CO2', text: 'Solve DC circuits and AC circuits under steady state conditions.' },
            { label: 'CO3', text: 'Explain working principles of Electrical Machines.' },
            { label: 'CO4', text: 'Explain components of Low Voltage Electrical Installation.' },
          ],
        },
        {
          code: 'ME105ES',
          name: 'ENGINEERING WORKSHOP',
          outcomes: [
            { label: 'CO1', text: 'Study different trades in engineering workshop.' },
            { label: 'CO2', text: 'Fabricate components using woodworking, sheet metal, fitting, and welding.' },
          ],
        },
      ],
    },
    {
      sem: 'Year I - II Semester',
      courses: [
        {
          code: 'CS203ES',
          name: 'PROGRAMMING FOR PROBLEM SOLVING',
          outcomes: [
            { label: 'CO1', text: 'Formulate algorithms and flowcharts for problem solving.' },
            { label: 'CO2', text: 'Translate algorithms into programs using C programming language.' },
            { label: 'CO3', text: 'Develop C programs using arrays, strings, functions, structures and pointers.' },
            { label: 'CO4', text: 'Apply C programming skills for file handling and memory management.' },
          ],
        },
        {
          code: 'AP202BS',
          name: 'APPLIED PHYSICS',
          outcomes: [
            { label: 'CO1', text: 'Understand wave optics, lasers and fiber optics applications.' },
            { label: 'CO2', text: 'Explain quantum mechanics principles and band theory of solids.' },
            { label: 'CO3', text: 'Demonstrate electromagnetic theory and semiconductor physics.' },
          ],
        },
      ],
    },
    {
      sem: 'Year II - I Semester',
      courses: [
        {
          code: 'CS301PC',
          name: 'DATA STRUCTURES',
          outcomes: [
            { label: 'CO1', text: 'Select appropriate data structures for given problem requirements.' },
            { label: 'CO2', text: 'Implement linear data structures such as stacks, queues, and linked lists.' },
            { label: 'CO3', text: 'Implement non-linear data structures including trees, BSTs, and graphs.' },
            { label: 'CO4', text: 'Analyze searching and sorting algorithms for efficiency.' },
          ],
        },
        {
          code: 'CS302PC',
          name: 'COMPUTER ORGANIZATION AND ARCHITECTURE',
          outcomes: [
            { label: 'CO1', text: 'Demonstrate understanding of functional units and bus structures.' },
            { label: 'CO2', text: 'Analyze instruction formats, addressing modes, and ALU design.' },
            { label: 'CO3', text: 'Evaluate memory hierarchy, cache mapping, and I/O organizations.' },
          ],
        },
      ],
    },
    {
      sem: 'Year II - II Semester',
      courses: [
        {
          code: 'CS401PC',
          name: 'DATABASE MANAGEMENT SYSTEMS',
          outcomes: [
            { label: 'CO1', text: 'Design ER diagrams and translate them into relational schemas.' },
            { label: 'CO2', text: 'Formulate SQL queries and relational algebra expressions.' },
            { label: 'CO3', text: 'Apply normalization techniques (1NF, 2NF, 3NF, BCNF).' },
            { label: 'CO4', text: 'Understand transaction processing, ACID properties, and concurrency control.' },
          ],
        },
        {
          code: 'CS402PC',
          name: 'OPERATING SYSTEMS',
          outcomes: [
            { label: 'CO1', text: 'Explain operating system structures, system calls, and process concepts.' },
            { label: 'CO2', text: 'Analyze CPU scheduling, process synchronization, and deadlock prevention.' },
            { label: 'CO3', text: 'Evaluate memory management techniques including virtual memory.' },
          ],
        },
      ],
    },
    {
      sem: 'Year III - I Semester',
      courses: [
        {
          code: 'CS501PC',
          name: 'FORMAL LANGUAGES & AUTOMATA THEORY',
          outcomes: [
            { label: 'CO1', text: 'Design finite automata and regular expressions for formal languages.' },
            { label: 'CO2', text: 'Construct context-free grammars and pushdown automata.' },
            { label: 'CO3', text: 'Understand Turing machines and computability principles.' },
          ],
        },
        {
          code: 'CS502PC',
          name: 'SOFTWARE ENGINEERING',
          outcomes: [
            { label: 'CO1', text: 'Identify software lifecycle models and requirements engineering processes.' },
            { label: 'CO2', text: 'Apply software design architectures, UML diagrams, and design patterns.' },
            { label: 'CO3', text: 'Develop software testing strategies and quality assurance frameworks.' },
          ],
        },
      ],
    },
    {
      sem: 'Year III - II Semester',
      courses: [
        {
          code: 'CS601PC',
          name: 'COMPILER DESIGN',
          outcomes: [
            { label: 'CO1', text: 'Understand compiler phases and design lexical analyzers.' },
            { label: 'CO2', text: 'Construct top-down and bottom-up parsers for programming languages.' },
            { label: 'CO3', text: 'Generate intermediate code and apply code optimization techniques.' },
          ],
        },
        {
          code: 'CS602PC',
          name: 'WEB TECHNOLOGIES',
          outcomes: [
            { label: 'CO1', text: 'Develop interactive web pages using HTML5, CSS3, JavaScript, and Bootstrap.' },
            { label: 'CO2', text: 'Build dynamic server-side applications using PHP / Node.js and MySQL.' },
            { label: 'CO3', text: 'Understand AJAX, JSON, RESTful web services, and web security basics.' },
          ],
        },
      ],
    },
    {
      sem: 'Year IV - I Semester',
      courses: [
        {
          code: 'CS701PC',
          name: 'CRYPTOGRAPHY AND NETWORK SECURITY',
          outcomes: [
            { label: 'CO1', text: 'Understand security goals, attacks, and classic cryptographic techniques.' },
            { label: 'CO2', text: 'Apply symmetric encryption (DES, AES) and asymmetric encryption (RSA, ECC).' },
            { label: 'CO3', text: 'Analyze hash functions, digital signatures, and firewalls.' },
          ],
        },
        {
          code: 'CS702PC',
          name: 'CLOUD COMPUTING',
          outcomes: [
            { label: 'CO1', text: 'Explain cloud architecture, virtualization, and cloud service models (IaaS, PaaS, SaaS).' },
            { label: 'CO2', text: 'Analyze cloud storage, resource management, and cloud security.' },
          ],
        },
      ],
    },
    {
      sem: 'Year IV - II Semester',
      courses: [
        {
          code: 'CS802PC',
          name: 'MAJOR PROJECT / DISSERTATION',
          outcomes: [
            { label: 'CO1', text: 'Formulate technical problem statements and conduct systematic literature review.' },
            { label: 'CO2', text: 'Design, implement, test, and document comprehensive technical solutions.' },
          ],
        },
      ],
    },
  ]

  const facultyList = [
    { sno: 1, name: 'Dr G SAMBASIVA RAO', role: 'PROFESSOR', qual: 'M TECH, Ph.D.', passing: 'APR-2007', appDate: '09-06-2022', type: 'REGULAR', exp: '1' },
    { sno: 2, name: 'Dr T BHARATH KRISHNA', role: 'PROFESSOR', qual: 'M TECH, Ph.D.', passing: 'APR-2013', appDate: '01-12-2010', type: 'REGULAR', exp: '13' },
    { sno: 3, name: 'Dr A AVANI', role: 'PROFESSOR & DEAN ACADEMICS', qual: 'M TECH, Ph.D.', passing: 'NOV-2019', appDate: '01-09-2008', type: 'REGULAR', exp: '15' },
    { sno: 4, name: 'Dr T VENKATA SATYA VIVEK', role: 'PROFESSOR', qual: 'M TECH, Ph.D.', passing: 'JUL-2021', appDate: '01-06-2022', type: 'REGULAR', exp: '1' },
    { sno: 5, name: 'Mrs T PREETHI PRIYANKA', role: 'ASSOCIATE PROFESSOR', qual: 'M TECH', passing: 'JAN-2014', appDate: '01-06-2022', type: 'REGULAR', exp: '1' },
    { sno: 6, name: 'Mr I KRANTHI KUMAR', role: 'ASSISTANT PROFESSOR', qual: 'M TECH', passing: 'SEP-2015', appDate: '07-09-2012', type: 'REGULAR', exp: '11' },
    { sno: 7, name: 'Mr K PRAVEEN KUMAR', role: 'ASSISTANT PROFESSOR', qual: 'M TECH', passing: 'NOV-2014', appDate: '07-09-2012', type: 'REGULAR', exp: '11' },
    { sno: 8, name: 'Mrs Y NANCHARI', role: 'ASSISTANT PROFESSOR', qual: 'M TECH-CSE', passing: 'OCT-2016', appDate: '01-11-2016', type: 'REGULAR', exp: '7' },
    { sno: 9, name: 'Mrs K SOWMYA', role: 'ASSISTANT PROFESSOR', qual: 'M TECH', passing: 'AUG-2015', appDate: '01-11-2016', type: 'REGULAR', exp: '7' },
    { sno: 10, name: 'Mrs K JANAKI', role: 'ASSISTANT PROFESSOR', qual: 'M TECH', passing: 'AUG-2015', appDate: '19-01-2017', type: 'REGULAR', exp: '6' },
    { sno: 11, name: 'Mrs SK NADIYA', role: 'ASSISTANT PROFESSOR', qual: 'M TECH', passing: 'AUG-2015', appDate: '19-01-2017', type: 'REGULAR', exp: '6' },
    { sno: 12, name: 'Mrs J KAVITHA', role: 'ASSISTANT PROFESSOR', qual: 'M TECH-CSE', passing: 'FEB-2017', appDate: '03-02-2017', type: 'REGULAR', exp: '6' },
    { sno: 13, name: 'Mrs G NIHARIKA', role: 'ASSISTANT PROFESSOR', qual: 'M TECH', passing: 'DEC-2020', appDate: '28-12-2020', type: 'REGULAR', exp: '3' },
    { sno: 14, name: 'Mr M VINOD KUMAR', role: 'ASSISTANT PROFESSOR', qual: 'M TECH', passing: 'DEC-2016', appDate: '13-12-2021', type: 'REGULAR', exp: '2' },
    { sno: 15, name: 'Mr D VEERASWAMY', role: 'ASSISTANT PROFESSOR', qual: 'M TECH', passing: 'JAN-2014', appDate: '01-06-2021', type: 'REGULAR', exp: '2' },
  ]

  const galleryImages = [
    { src: departmentBanner(dept), title: `${dept.short} Main Laboratory` },
    { src: '/ABIT_IMAGES/admission_overview.jpg', title: 'Practical Hands-on Session' },
    { src: '/ABIT_IMAGES/banner01.webp', title: 'Department Seminar Hall' },
    { src: '/ABIT_IMAGES/Science-Humanities-banner.jpg', title: 'Technical Symposium & Workshop' },
  ]

  return (
    <>
      <PageHero
        title={dept.name}
        subtitle={dept.blurb}
        image={departmentBanner(dept)}
        crumbs={[{ label: 'Departments' }, { label: dept.name }]}
      />
      <div className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Left Column: Image + Sub-navigation Buttons */}
          <div className="space-y-4 lg:col-span-5">
            <div className="overflow-hidden rounded-md border border-border shadow-sm">
              <img
                src={departmentBanner(dept)}
                alt={dept.name}
                className="aspect-[4/3] w-full object-cover"
              />
            </div>

            <div className="space-y-2.5">
              {navItems.map((item, index) => {
                const isActive = activeTab === index
                return (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setActiveTab(index)}
                    className={`w-full text-left rounded-lg px-5 py-3.5 text-sm font-semibold transition-all duration-200 ${
                      isActive
                        ? 'bg-gold text-navy font-bold shadow-md'
                        : 'bg-[#0a237c] text-white hover:bg-[#081b66]'
                    }`}
                  >
                    {item}
                  </button>
                )
              })}
            </div>
          </div>

          {/* Right Column: Title + Content based on Active Tab */}
          <div className="space-y-6 lg:col-span-7">
            <div className="text-center">
              <h1 className="font-heading text-2xl font-bold text-navy sm:text-3xl">
                {dept.name}
              </h1>
              <div className="mx-auto mt-2 h-1 w-16 bg-gold rounded-full" />
            </div>

            {/* TAB 0: About Department */}
            {activeTab === 0 && (
              <div className="space-y-4 text-sm leading-relaxed text-gray-700 sm:text-base">
                <p>
                  {dept.name} is one of the fastest-growing career fields in modern history. Dating back only a few decades, it has become the most leading industry in the world today. A career in the field of {dept.name.toLowerCase()} has been proven to be a worth-while direction for many young enthusiasts and this trend is looking very bright in the new millennium.
                </p>
                <p>
                  The Department of {dept.name} at AnuBose Institute of Technology was established in the year 2008 with an approved intake in B.Tech. {dept.name} ({dept.short}). Consequently, intake capacity has been expanded to accommodate aspiring technical students.
                </p>
                <p>
                  Department is equipped with well-qualified and dedicated faculty members to train students towards their holistic development. Currently, there are multiple faculty members with Ph.D. qualifications in the department striving for academic and technical excellence.
                </p>
                <p>
                  The department provides students with learning mechanisms to develop robust technical solutions and systems. Students are facilitated with high-end equipment, laboratories, digital libraries, NPTEL Courseware, and Journals alongside High-Bandwidth internet to facilitate effective learning.
                </p>
                <p>
                  Students are imparted with training in cutting-edge technologies through Seminars, Workshops, and Guest Lectures alongside Technical Symposia/paper contests; and co-curricular and Extra-curricular events through the technical associations of the department. Strong mentoring by the faculty members to monitor student progression and personality development.
                </p>
              </div>
            )}

            {/* TAB 1: Vision, Mission, PEO's */}
            {activeTab === 1 && (
              <div className="space-y-6 text-sm leading-relaxed text-gray-700 sm:text-base">
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-3 font-heading text-lg font-bold text-navy">
                    <Eye className="size-6 text-[#a31d36]" />
                    Department Vision
                  </div>
                  <p className="mt-3 text-muted-foreground">
                    To be in the frontiers of Computer Science and Engineering with academic excellence and Research.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-3 font-heading text-lg font-bold text-navy">
                    <Target className="size-6 text-[#a31d36]" />
                    Department Mission
                  </div>
                  <ul className="mt-3 space-y-2.5 text-muted-foreground">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#a31d36]" />
                      <span><strong>DM1:</strong> To bring up high level of Decency, Dignity and Discipline in student to attain high intellectual abilities.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#a31d36]" />
                      <span><strong>DM2:</strong> To produce employable students at State, National and International levels by effective training programmes.</span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-1 size-4 shrink-0 text-[#a31d36]" />
                      <span><strong>DM3:</strong> To create academic, research and entrepreneur skills with high level learning attitudes.</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex items-center gap-3 font-heading text-lg font-bold text-navy">
                    <Award className="size-6 text-[#a31d36]" />
                    PEO's
                  </div>
                  <div className="mt-3 space-y-3 text-muted-foreground">
                    <p><strong>PEO 1:</strong> To develop mathematical, analytical and computational ability to solve software problems by applying innovative technical tools.</p>
                    <p><strong>PEO 2:</strong> To make Students employable as software professionals and be able to embrace lifelong learning with professional ethics.</p>
                    <p><strong>PEO 3:</strong> To make students deal with multidisciplinary project teams having effective communication and professional skills and leadership qualities.</p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 2: CO's, PO, PSO's */}
            {activeTab === 2 && (
              <div className="space-y-6 text-sm leading-relaxed text-gray-700 sm:text-base">
                {/* Internal Sub-Tabs: PO's | PEO's | PSO's matching attached image bar design */}
                <div className="w-full overflow-hidden rounded-xl bg-navy shadow-md">
                  <div className="grid grid-cols-3">
                    <button
                      type="button"
                      onClick={() => setPoTab('po')}
                      className={`py-3.5 text-center text-sm font-bold transition-all sm:text-base ${
                        poTab === 'po'
                          ? 'bg-gold text-navy font-bold'
                          : 'bg-navy text-white hover:bg-navy-deep'
                      }`}
                    >
                      PO's
                    </button>
                    <button
                      type="button"
                      onClick={() => setPoTab('peo')}
                      className={`py-3.5 text-center text-sm font-bold transition-all sm:text-base ${
                        poTab === 'peo'
                          ? 'bg-gold text-navy font-bold'
                          : 'bg-navy text-white hover:bg-navy-deep'
                      }`}
                    >
                      PEO's
                    </button>
                    <button
                      type="button"
                      onClick={() => setPoTab('pso')}
                      className={`py-3.5 text-center text-sm font-bold transition-all sm:text-base ${
                        poTab === 'pso'
                          ? 'bg-gold text-navy font-bold'
                          : 'bg-navy text-white hover:bg-navy-deep'
                      }`}
                    >
                      PSO's
                    </button>
                  </div>
                </div>

                {/* Sub-Tab 1: PO's */}
                {poTab === 'po' && (
                  <div className="space-y-4 rounded-xl border border-border bg-card p-6 shadow-sm">
                    <h3 className="font-heading text-base font-extrabold uppercase text-navy">
                      PROGRAM OUTCOMES
                    </h3>
                    <ol className="space-y-3.5 text-xs text-gray-800 sm:text-sm leading-relaxed">
                      <li>
                        <strong>1. Engineering Knowledge:</strong> Apply the knowledge of mathematics, science, engineering fundamentals, and an engineering specialization to the solution of complex engineering problems.
                      </li>
                      <li>
                        <strong>2. Problem Analysis:</strong> Identify, formulate, review research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences, and engineering sciences.
                      </li>
                      <li>
                        <strong>3. Design/Development of Solutions:</strong> Design solutions for complex engineering problems and design system components or processes that meet the specified needs with appropriate consideration for the public health and safety, and the cultural, societal, and environmental considerations.
                      </li>
                      <li>
                        <strong>4. Conduct Investigations of Complex Problems:</strong> Use research-based knowledge and research methods including design of experiments, analysis and interpretation of data, and synthesis of the information to provide valid conclusions.
                      </li>
                      <li>
                        <strong>5. Modern Tool Usage:</strong> Create, select, and apply appropriate techniques, resources, and modern engineering and IT tools including prediction and modeling to complex engineering activities with an understanding of the limitations.
                      </li>
                      <li>
                        <strong>6. The Engineer and Society:</strong> Apply reasoning informed by the contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to the professional engineering practice.
                      </li>
                      <li>
                        <strong>7. Environment and Sustainability:</strong> Understand the impact of the professional engineering solutions in societal and environmental contexts, and demonstrate the knowledge of, and need for sustainable development.
                      </li>
                      <li>
                        <strong>8. Ethics:</strong> Apply ethical principles and commit to professional ethics and responsibilities and norms of the engineering practice.
                      </li>
                      <li>
                        <strong>9. Individual and Team Work:</strong> Function effectively as an individual, and as a member or leader in diverse teams, and in multidisciplinary settings.
                      </li>
                      <li>
                        <strong>10. Communication:</strong> Communicate effectively on complex engineering activities with the engineering community and with society at large, such as, being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.
                      </li>
                      <li>
                        <strong>11. Project Management and Finance:</strong> Demonstrate knowledge and understanding of the engineering and management principles and apply these to one's own work, as a member and leader in a team, to manage projects and in multidisciplinary environments.
                      </li>
                      <li>
                        <strong>12. Life-long Learning:</strong> Recognize the need for, and have the preparation and ability to engage in independent and lifelong learning in the broadest context of technological change.
                      </li>
                    </ol>
                  </div>
                )}

                {/* Sub-Tab 2: PEO's */}
                {poTab === 'peo' && (
                  <div className="overflow-x-auto rounded-xl border border-border bg-card shadow-sm">
                    <table className="w-full text-left text-xs sm:text-sm">
                      <tbody className="divide-y divide-border">
                        <tr className="hover:bg-secondary/10">
                          <td className="w-24 px-4 py-4 font-bold text-navy align-middle sm:w-32">PEO 1</td>
                          <td className="px-4 py-4 text-center text-gray-800 leading-relaxed">
                            To develop mathematical, analytical and computational ability to solve software problems by applying innovative technical tools.
                          </td>
                        </tr>
                        <tr className="hover:bg-secondary/10">
                          <td className="w-24 px-4 py-4 font-bold text-navy align-middle sm:w-32">PEO 2</td>
                          <td className="px-4 py-4 text-center text-gray-800 leading-relaxed">
                            To make Students employable as software professionals and be able to embrace lifelong learning with professional ethics.
                          </td>
                        </tr>
                        <tr className="hover:bg-secondary/10">
                          <td className="w-24 px-4 py-4 font-bold text-navy align-middle sm:w-32">PEO 3</td>
                          <td className="px-4 py-4 text-center text-gray-800 leading-relaxed">
                            To make students deal with multidisciplinary project teams having effective communication and professional skills and leadership qualities.
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}

                {/* Sub-Tab 3: PSO's */}
                {poTab === 'pso' && (
                  <div className="space-y-4 rounded-xl border border-border bg-card p-6 shadow-sm">
                    <div className="space-y-3.5 text-xs text-gray-800 sm:text-sm leading-relaxed">
                      <p>
                        <strong>PSO 1:</strong> The ability to design, code , analyse and test application specific problems using programming languages and emerging technologies by applying the knowledge of basic sciences, and mathematics.
                      </p>
                      <p>
                        <strong>PSO 2:</strong> The ability to adapt for rapid changes in applications and technology with an understanding of societal and ecological issues, relevant to professional engineering practice through life-long learning.
                      </p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* TAB 3: Course Outcomes */}
            {activeTab === 3 && (
              <div className="space-y-6 text-sm leading-relaxed text-gray-700 sm:text-base">
                {/* Regulation Sub-Tabs Bar (R18 | R22 | R16) */}
                <div className="w-full overflow-hidden rounded-xl bg-navy shadow-md">
                  <div className="grid grid-cols-3">
                    <button
                      type="button"
                      onClick={() => setRegulationTab('R18')}
                      className={`py-3.5 text-center text-sm font-bold transition-all sm:text-base ${
                        regulationTab === 'R18'
                          ? 'bg-gold text-navy font-bold'
                          : 'bg-navy text-white hover:bg-navy-deep'
                      }`}
                    >
                      R18 Regulation
                    </button>
                    <button
                      type="button"
                      onClick={() => setRegulationTab('R22')}
                      className={`py-3.5 text-center text-sm font-bold transition-all sm:text-base ${
                        regulationTab === 'R22'
                          ? 'bg-gold text-navy font-bold'
                          : 'bg-navy text-white hover:bg-navy-deep'
                      }`}
                    >
                      R22 Regulation
                    </button>
                    <button
                      type="button"
                      onClick={() => setRegulationTab('R16')}
                      className={`py-3.5 text-center text-sm font-bold transition-all sm:text-base ${
                        regulationTab === 'R16'
                          ? 'bg-gold text-navy font-bold'
                          : 'bg-navy text-white hover:bg-navy-deep'
                      }`}
                    >
                      R16 Regulation
                    </button>
                  </div>
                </div>

                {/* Course Outcomes Accordion Section with Light BG Headings */}
                <div className="space-y-3.5">
                  {courseOutcomesData.map((semData, idx) => {
                    const isOpen = openSemester === idx
                    return (
                      <div
                        key={semData.sem}
                        className="overflow-hidden rounded-xl border border-gray-200 bg-card shadow-sm"
                      >
                        {/* Light Background Heading Box */}
                        <button
                          type="button"
                          onClick={() => setOpenSemester(isOpen ? null : idx)}
                          className="flex w-full items-center justify-between bg-[#f4f6f9] px-5 py-4 text-left transition-colors hover:bg-gray-200/80"
                        >
                          <span className="font-heading text-base font-bold text-navy">
                            {semData.sem} ({regulationTab} Regulation)
                          </span>
                          <span className="flex size-7 items-center justify-center rounded-full bg-white text-navy shadow-sm">
                            {isOpen ? <ChevronUp className="size-4" /> : <ChevronDown className="size-4" />}
                          </span>
                        </button>

                        {/* Accordion Content */}
                        {isOpen && (
                          <div className="space-y-6 divide-y divide-gray-100 bg-white p-5">
                            {semData.courses.map((course) => (
                              <div key={course.code} className="space-y-2.5 pt-4 first:pt-0">
                                <div className="flex flex-wrap items-center justify-between gap-2">
                                  <h4 className="font-heading text-sm font-bold text-[#a31d36] sm:text-base">
                                    Course Name: {course.name}
                                  </h4>
                                  <span className="rounded bg-navy/10 px-2.5 py-1 text-xs font-semibold text-navy">
                                    Course Code: {course.code}
                                  </span>
                                </div>
                                <ul className="space-y-2 text-xs text-gray-800 sm:text-sm">
                                  {course.outcomes.map((co) => (
                                    <li key={co.label} className="flex items-start gap-2.5">
                                      <span className="shrink-0 font-bold text-navy">{co.label}:</span>
                                      <span className="leading-relaxed">{co.text}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            )}

            {/* TAB 4: Head of Department */}
            {activeTab === 4 && (
              <div className="space-y-6 text-sm leading-relaxed text-gray-700 sm:text-base">
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                    <div className="flex size-24 shrink-0 items-center justify-center rounded-full bg-navy text-gold">
                      <UserCheck className="size-12" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-navy">Head of Department - {dept.name}</h3>
                      <p className="text-sm font-semibold text-[#a31d36]">Professor & Head of Department</p>
                      <p className="mt-2 text-xs text-muted-foreground sm:text-sm">
                        Qualifications: Ph.D., M.Tech in {dept.name} | Experience: 18+ Years
                      </p>
                      <p className="text-xs text-muted-foreground sm:text-sm">
                        Email: hod.{dept.short.toLowerCase().replace(/[^a-z0-9]/g, '')}@abit.ac.in
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 border-t border-border pt-4">
                    <h4 className="font-heading text-base font-bold text-navy">HOD's Message</h4>
                    <p className="mt-2 text-muted-foreground">
                      "Welcome to the Department of {dept.name} at AnuBose Institute of Technology. Our aim is to empower students with state-of-the-art technical skills, strong analytical capabilities, and ethical values. We encourage active participation in research, innovation, and industry collaborations to prepare our students for successful global careers."
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 5: Faculty Profile */}
            {activeTab === 5 && (
              <div className="space-y-4 text-sm leading-relaxed text-gray-700 sm:text-base">
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                 

                  <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
                    <table className="w-full text-left text-xs sm:text-sm border-collapse">
                      <thead className="bg-[#122b5c]/80 text-white">
                        <tr>
                          <th className="px-4 py-3.5 font-heading font-semibold">S.No.</th>
                          <th className="px-4 py-3.5 font-heading font-semibold">Name Of The Full-Time Teacher</th>
                          <th className="px-4 py-3.5 font-heading font-semibold">Designation</th>
                          <th className="px-4 py-3.5 font-heading font-semibold">Qualification</th>
                          <th className="px-4 py-3.5 font-heading font-semibold">Year of passing</th>
                          <th className="px-4 py-3.5 font-heading font-semibold">Date of appointment</th>
                          <th className="px-4 py-3.5 font-heading font-semibold">Nature of appointment</th>
                          <th className="px-4 py-3.5 font-heading font-semibold text-right">Experience (Yrs)</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-100 bg-white">
                        {facultyList.map((f) => (
                          <tr key={f.sno} className="hover:bg-gray-50/80 transition-colors">
                            <td className="px-4 py-3.5 font-semibold text-gray-900">{f.sno}</td>
                            <td className="px-4 py-3.5 text-gray-800 font-medium">{f.name}</td>
                            <td className="px-4 py-3.5 text-gray-600 uppercase">{f.role}</td>
                            <td className="px-4 py-3.5 text-gray-600">{f.qual}</td>
                            <td className="px-4 py-3.5 text-gray-500 whitespace-nowrap">{f.passing}</td>
                            <td className="px-4 py-3.5 text-gray-500 whitespace-nowrap">{f.appDate}</td>
                            <td className="px-4 py-3.5 text-gray-600 uppercase">{f.type}</td>
                            <td className="px-4 py-3.5 text-right text-gray-600">{f.exp}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}

            {/* TAB 6: Gallery */}
            {activeTab === 6 && (
              <div className="space-y-4 text-sm leading-relaxed text-gray-700 sm:text-base">
                <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                  <h3 className="font-heading text-lg font-bold text-navy">{dept.short} Department Gallery</h3>
                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {galleryImages.map((img, index) => (
                      <div key={index} className="overflow-hidden rounded-lg border border-border shadow-sm">
                        <img
                          src={img.src}
                          alt={img.title}
                          className="aspect-[4/3] w-full object-cover transition-transform duration-300 hover:scale-105"
                        />
                        <div className="bg-secondary/40 p-2.5 text-center text-xs font-semibold text-navy">
                          {img.title}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}
