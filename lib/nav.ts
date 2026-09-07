export type NavChild = { label: string; href: string }
export type NavItem = {
  label: string
  href: string
  children?: NavChild[]
}

// Menu names and URLs preserved exactly from the existing ABIT website.
export const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  {
    label: 'About',
    href: '/about/',
    children: [
      { label: 'About ABIT', href: '/about/' },
      { label: 'Vision & Mission', href: '/about/vision-mission/' },
      { label: 'Governing Body', href: '/about/governing-body/' },
      {
        label: 'Quality Policy & Objectives',
        href: '/about/quality-policy-objectives/',
      },
      { label: "Chairman's Message", href: '/about/chairmans-message/' },
      { label: "Principal's Message", href: '/about/principals-message/' },
    ],
  },
  {
    label: 'Academics',
    href: '/approvals-affiliations-accreditations/',
    children: [
      {
        label: 'Approvals, Affiliations & Accreditations',
        href: '/approvals-affiliations-accreditations/',
      },
      { label: 'Academic Regulations', href: '/academic-regulations/' },
      { label: 'Courses Offered', href: '/courses-offered/' },
      { label: 'Academic Calendar', href: '/academic-calendar/' },
      { label: 'Academics Syllabus', href: '/academics-syllabus/' },
      { label: 'Code of Conduct', href: '/code-of-conduct/' },
    ],
  },
  {
    label: 'Admissions',
    href: '/admissions-2/',
    children: [
      { label: 'Admissions Overview', href: '/admissions-2/#AdmissionsOverview' },
      { label: 'Admissions Procedure', href: '/admissions-2/#AdmissionsProcedure' },
      { label: 'Courses Offered', href: '/admissions-2/#CourseIntake' },
      {
        label: 'Application',
        href: '/admissions-2/#Enquiry',
      },
      { label: 'Admission Enquiry', href: '/admissions-2/#Enquiry' },
    ],
  },
  {
    label: 'Departments',
    href: '/computer-science-engineering/',
    children: [
      { label: 'Computer Science and Engineering', href: '/computer-science-engineering/' },
      {
        label: 'Electronics & Communication Engineering',
        href: '/electronics-communication-engineering/',
      },
      {
        label: 'Electrical & Electronics Engineering',
        href: '/electrical-electronics-engineering/',
      },
      { label: 'Mechanical Engineering', href: '/mechanical-engineering/' },
      {
        label: 'Computer Science and Engineering (Data Science)',
        href: '/computer-science-and-engineeringdata-science/',
      },
      {
        label: 'Computer Science and Engineering (AI & ML)',
        href: '/computer-science-and-engineeringartificial-intelligence-and-machine-learning/',
      },
      { label: 'Civil Engineering', href: '/civil-engineering/' },
      { label: 'Mining Engineering', href: '/mining-engineering' },
      {
        label: 'Master of Business Administration',
        href: '/master-of-business-administrationmba/',
      },
      { label: 'Science & Humanities', href: '/science-humanities/' },
    ],
  },
  {
    label: 'Examinations',
    href: '/examinations/about-examinations/',
    children: [
      { label: 'About Examinations', href: '/examinations/about-examinations/' },
      { label: 'Vision and Mission', href: '/examinations/vision-and-mission/' },
      { label: 'Staff', href: '/examinations/staff/' },
      { label: 'Notifications', href: '/examinations/notifications/' },
      { label: 'Results', href: '/examinations/results/' },
      { label: 'Malpractice guidelines', href: '/examinations/malpractice-guidelines/' },
      { label: 'Academic Regulations', href: '/examinations/academic-regulations/' },
      { label: 'Syllabus', href: '/examinations/syllabus/' },
      { label: 'Time-tables', href: '/examinations/time-tables/' },
      { label: 'Downloads', href: '/examinations/downloads/' },
      {
        label: 'Student Background Verification',
        href: '/examinations/student-background-verification/',
      },
    ],
  },
  { label: 'Placements', href: '/placements/' },
  {
    label: 'IQAC',
    href: '/iqac',
    children: [
      { label: 'IQAC', href: '/iqac' },
      { label: 'Cells / Committees', href: '/cells-committees-2/' },
      { label: 'Cell Composition and Members', href: '/iqac/cell-composition-and-members/' },
      { label: 'MOM & ATR', href: '/iqac/mom-atr/' },
      { label: 'AQAR', href: '/iqac/aqar/' },
      { label: 'HR Policy', href: '/iqac/hr-policy/' },
      { label: 'Events', href: '/iqac/events/' },
    ],
  },
  {
    label: 'NAAC',
    href: '/ssr/',
    children: [
      { label: 'SSR', href: '/ssr/' },
      { label: 'DVV', href: '/dvv/' },
      { label: 'Best Practices', href: '/naac/best-practices/' },
      { label: 'Institutional Distinctiveness', href: '/naac/institutional-distinctiveness/' },
      { label: 'Policies', href: '/policies/' },
    ],
  },
  {
    label: 'More',
    href: '/stakeholders-feedback/',
    children: [
      { label: 'Stakeholders Feedback', href: '/stakeholders-feedback/' },
      { label: 'Gallery', href: '/gallery/' },
      { label: 'Central Library', href: '/library/' },
      { label: 'About Librarian', href: '/library/about-librarian/' },
      { label: 'Library Timings', href: '/library/library-timings/' },
      { label: 'Library Facilities', href: '/library/library-facilities/' },
      { label: 'Services', href: '/services/' },
      { label: 'Infrastructure', href: '/infrastructure' },
      { label: 'Research & Development Wing', href: '/research-development-wing/' },
    ],
  },
]

export const CONTACT = {
  name: 'AnuBose Institute of Technology',
  fullName: "AnuBose Institute of Technology For Women's",
  short: 'ABIT',
  address: 'K.S.P Road, New Palvoncha - 507115, Bhadradri Kothagudem Dist, Telangana',
  landline: '08744-25833',
  cells: ['9246907407', '7997180044'],
  email: 'info@abit.ac.in',
}
