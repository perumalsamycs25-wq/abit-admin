export type Department = {
  name: string
  short: string
  href: string
  blurb: string
}

export const DEPARTMENTS: Department[] = [
  {
    name: 'Computer Science & Engineering',
    short: 'CSE',
    href: '/computer-science-engineering/',
    blurb:
      'Foundational and advanced computing — programming, data structures, systems and software engineering.',
  },
  {
    name: 'Electronics & Communication Engineering',
    short: 'ECE',
    href: '/electronics-communication-engineering/',
    blurb:
      'Electronics, communication systems, VLSI, embedded systems and signal processing.',
  },
  {
    name: 'Electrical & Electronics Engineering',
    short: 'EEE',
    href: '/electrical-electronics-engineering/',
    blurb:
      'Power systems, electrical machines, control systems and renewable energy technologies.',
  },
  {
    name: 'Mechanical Engineering',
    short: 'MECH',
    href: '/mechanical-engineering/',
    blurb:
      'Design, thermal engineering, manufacturing and industrial automation.',
  },
  {
    name: 'CSE (Data Science)',
    short: 'DS',
    href: '/computer-science-and-engineeringdata-science/',
    blurb:
      'Big data, analytics, machine learning and data-driven decision making.',
  },
  {
    name: 'CSE (AI & Machine Learning)',
    short: 'AI/ML',
    href: '/computer-science-and-engineeringartificial-intelligence-and-machine-learning/',
    blurb:
      'Artificial intelligence, deep learning, neural networks and intelligent systems.',
  },
  {
    name: 'Civil Engineering',
    short: 'CIVIL',
    href: '/civil-engineering/',
    blurb:
      'Structures, construction technology, environmental and geotechnical engineering.',
  },
  {
    name: 'Mining Engineering',
    short: 'MINING',
    href: '/mining-engineering',
    blurb:
      'Mine planning, mineral extraction, safety and resource management.',
  },
  {
    name: 'Master of Business Administration',
    short: 'MBA',
    href: '/master-of-business-administrationmba/',
    blurb:
      'Management, finance, marketing, human resources and entrepreneurship.',
  },
  {
    name: 'Science & Humanities',
    short: 'S&H',
    href: '/science-humanities/',
    blurb:
      'Mathematics, physics, chemistry and communication skills foundation.',
  },
]
