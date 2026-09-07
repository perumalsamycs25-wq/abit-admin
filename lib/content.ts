import { NAV } from './nav'

export type Section = {
  heading?: string
  paragraphs?: string[]
  bullets?: string[]
  members?: Array<{ name: string; role: string }>
  table?: { headers: string[]; rows: string[][] }
}
export type PageContent = {
  title: string
  subtitle?: string
  image?: string
  asideImage?: string
  asideImageClass?: string
  sections: Section[]
  calendarTabs?: Array<{
    label: string
    rows: Array<{ date?: string; title: string; academicYear?: string; href?: string }>
  }>
  syllabusTabs?: Array<{
    label: string
    rows?: Array<{ date: string; title: string }>
    description?: string
  }>
}

// Normalise an href to a lookup key (strip leading/trailing slashes + hash)
export function normalizeKey(href: string): string {
  return href.split('#')[0].replace(/^\/+|\/+$/g, '')
}

// Build a breadcrumb + label by matching a path against the nav tree.
export function resolveNav(key: string): { label: string; parent?: string } | null {
  for (const item of NAV) {
    for (const child of item.children ?? []) {
      if (normalizeKey(child.href) === key) return { label: child.label, parent: item.label }
    }
    if (normalizeKey(item.href) === key) return { label: item.label }
  }
  return null
}

const ABOUT_INTRO = [
  'AnuBose Institute Of Technology (ABIT) for Women is located at Paloncha, an industrial hub in Bhadradri Kothagudem district. It is sponsored by the National Educational Trust, Paloncha. The members of the trust are eminent personalities in various walks of life who dedicate themselves to education. ABIT was established in 2008 with special attention to technical education and is approved by AICTE, New Delhi, and affiliated to Jawaharlal Nehru Technological University, Hyderabad.',
  'The ABIT expands itself as “Always Best In Technical-education” by making use of the latest technologies and quality teaching. It lays emphasis on innovative research, investment in high-quality facilities and first-rate infrastructure.',
]

export const CONTENT: Record<string, PageContent> = {
  about: {
    image: '/ABIT_IMAGES/bannerp2.jpg',
    title: 'About ABIT',
    subtitle: "AnuBose Institute of Technology For Women's\n(A UGC Autonomous Institution)",
    sections: [
      {
        paragraphs: [
          ...ABOUT_INTRO,
          "AnuBose Institute of Technology (ABIT) strives to make students confident and creative builders of their future. ABIT believes learning is maximized when it takes place in an environment enriched with support, encouragement and assistance. In ABIT we encourage the students to meet academic challenges with openness, enthusiasm, and a willingness to solve problems. We provide a rigorous, academic program through which effective educators lead students to take responsibility for learning. To raise itself as a centre of excellence through integrated educational, academic and industrial research and consultancy services. To actively participate in the development of technical manpower and physical infrastructure for enhancing the country’s credibility and stature. To undertake cooperative research in the industry for upgradation of current technologies and development of new ones, to improve quality and cost effectiveness, while participating in the ongoing process of globalization. To play a noble role for making significant contributions for social upliftment through technical education."
        ],
      },
      {
        heading: 'Our Approvals',
        bullets: [
          'Approved by AICTE, New Delhi',
          'Affiliated to JNTU, Hyderabad',
          'Graded B++ by NAAC',
          'Sponsored by National Educational Trust, Paloncha',
        ],
      },
    ],
  },
  'about/vision-mission': {
    title: 'Vision & Mission',
    sections: [
      {
        heading: 'Vision',
        paragraphs: [
          'To emerge as a premier institution of technical education for women, nurturing confident and creative engineers who contribute meaningfully to society and the nation.',
        ],
      },
      {
        heading: 'Mission',
        bullets: [
          'IM1: To create conducive environment for teaching & learning.',
          'IM2: To impart quality education through demanding academic programs.',
          'IM3: To enhance career opportunities by exposure to recent & industries technologies.',
          'IM4:  To develop professionals with strong ethics and human values for the betterment of society',
        ],
      },
    ],
  },
  'about/governing-body': {
    title: 'Governing Body',
    subtitle: 'The leadership guiding ABIT’s academic and institutional vision.',
    sections: [
      {
        heading: 'Members of the Governing Body',
        paragraphs: [
          'The Governing Body of ABIT brings together the leadership of the National Educational Trust, university nominees and institutional representatives. Together, they guide the institute’s academic direction, administration and long-term development.',
        ],
        members: [
          { name: 'Smt. T. Anuradha', role: 'Chairman' },
          { name: 'Sri. T. Vivekananda', role: 'Vice-President' },
          { name: 'Dr. T. Bharat Krishna', role: 'Secretary' },
          { name: 'Dr. A. Avani', role: 'Treasurer' },
          { name: 'Sri. T. Murali Krishna', role: 'Member' },
          { name: 'Smt. T. Sridevi', role: 'Member' },
          { name: 'Dr. B. Ramjee', role: 'University Nominee' },
          { name: 'Mr. G. Venkanna', role: 'Member' },
          { name: 'Smt. K. Vasavi', role: 'Member' },
          { name: 'Dr. G. S Rao', role: 'Principal' },
        ],
      },
    ],
  },
  'about/quality-policy-objectives': {
    title: 'Quality Policy & Objectives',
    sections: [
      {
        heading: 'Quality Policy',
        paragraphs: [
          'ABIT is committed to providing quality technical education through state-of-the-art infrastructure, a sound academic and research environment, industry-relevant programmes and continuous development of technological, managerial and professional skills.',
        ],
      },
      {
        heading: 'Quality Objectives',
        bullets: [
          'To provide state of the art technical infrastructure and motivate students to realize their own potential.',
          'To provide a sound academic and research environment to students for a complete learning experience.',
          'To provide technological and managerial skills and ensure all round development of the students.',
          'To offer quality relevant and cost-effective programmes to produce engineers as per requirements of the industry and other sectors of employments.',
          'To offer research & development, testing services and customized training to meet specific needs of the industry thereby promoting self-employment & entrepreneurship amongst students.',
        ],
      },
    ],
  },
  'about/chairmans-message': {
    title: "Chairman's Message",
    asideImage: '/ABIT_IMAGES/side-image-test.jpg',
    asideImageClass: 'mx-auto aspect-square w-3/4 sm:w-4/5',
    sections: [
      {
        paragraphs: [
          '“Our vision is based on hard work, open communication, a strong emphasis on team work and a high level of responsibility. This visionary culture allows and emphasises our wards not only to adopt the present day challenges but also individual responsibilities to the society and our nation at large. Learning should be based on doing things and not merely knowing things. Until and unless learning solutions relate to real life and motivate the learner to acquire and apply the knowledge, the whole process will remain superficial. Any engineering institution worth its name looks to optimize the productivity of global leaders. Our institution has set specific objectives and planned activities for achieving excellence in all spheres of technical education. The service of the institution in creating personally mature, professionally equipped and service-oriented graduates is really worth mentioning. We strongly believe in academic excellence and do not compromise on teaching standards or discipline. These three things are the springboards on which we operate. People who feel good about themselves produce good results and people who produce good results feel good about themselves. We also believe in total learning and sharing. Have a visit to ANUBOSE and feel good to get good education.”',
          'Philanthropist, Educationist, Visionary..... are some of the attributes which have been associated with Chairman T Bharat Krishna. At a very young age, he proved himself as an excellent academician. The establishment of this college has fulfilled his long cherished dream of starting an Engineering College to serve the student community by offering technical education in both conventional and hi-tech disciplines of engineering with all the state-of-art facilities. His main objective is to promote an educational institution for the overall benefit of the country in general, and the state in particular. “A person who dares to dream big and commands the ability to realize it”. In the year 2008 he established Anubose Institute of Technology Under National educational Trust with a vision to bring out the rural talent to the forefront. He followed the foot steps of his Guru, Sri. T Bose, the former Chairman, National educational society, inducing innovative administrative practices, introducing modern teaching methodologies and providing international standards of infrastructure. ABIT will remain as one of the best engineering colleges in India wherein he continues to put his maximum effort and avid interest in its continual development. Growth of which the prime beneficiaries will be the students.',
        ],
      },
    ],
  },
  'about/principals-message': {
    title: "Principal's Message",
    asideImage: '/ABIT_IMAGES/Principal-image.jpg',
    asideImageClass: 'mx-auto aspect-square w-3/4 sm:w-4/5',
    sections: [
      {
        paragraphs: [
          'Dr. Banoth Ravi is an accomplished academic and researcher with over 20 years of experience in Mechanical Engineering. He earned his Ph.D. from JNTUH Hyderabad in 2017, specializing in Composites and Friction Stir Welding (FSW). Dr. Ravi has a strong foundation in Machine Design, holding an M.Tech from JNTUH Hyderabad and a B.Tech in Mechanical Engineering from S.V. University, Tirupati.',
          'Throughout his distinguished career, Dr. Ravi has made significant contributions to both academia and industry. His research interests include the mechanical properties of composites, advanced manufacturing processes, and tribological studies. He has published 28 papers in international journals and presented 13 papers at various conferences.',
          'Dr. Ravi has served in various academic and administrative roles, most recently as the Principal of Anubose Institute of Technology, Palwancha. He has also held the positions of Associate Professor and Head of Department at SBIT, Khammam, and has been recognized with multiple awards, including the Jyestha Acharya Award from Bharat Educational Excellence in 2022.',
          'In addition to his academic pursuits, Dr. Ravi is actively involved in guiding research projects, mentoring students, and contributing to the overall development of the department. He is a life member of ISTE and the International Association of Engineers (IAENG).',
        ],
      },
    ],
  },

  'approvals-affiliations-accreditations': {
    title: 'Approvals, Affiliations & Accreditations',
    sections: [
      {
        bullets: [
          'Approved by All India Council for Technical Education (AICTE), New Delhi.',
          'Affiliated to Jawaharlal Nehru Technological University, Hyderabad (JNTUH).',
          'Accredited and graded B++ by the National Assessment and Accreditation Council (NAAC).',
        ],
      },
    ],
  },
  'academic-regulations': {
    title: 'Academic Regulations',
    sections: [
      {
        paragraphs: [
          'ABIT follows the academic regulations prescribed by JNTU Hyderabad for all undergraduate and postgraduate programs, covering evaluation, attendance, promotion and award of degrees.',
        ],
        table: {
          headers: ['S.No', 'Date', 'Academic Regulation'],
          rows: [
            ['1', '28 Mar 2023', 'R22 B.Tech Revised Academic Regulations including Evaluation of Mandatory Courses'],
            ['2', '22 Feb 2023', 'R22 B.Tech. Revised Academic Regulations'],
            ['3', '04 Dec 2021', 'Academic Regulations 2021-22 for B.Tech. with Minors Program'],
            ['4', '27 Nov 2020', 'R18 B.TECH. Academic Regulations for all Branches (Including New Branches) for AY 2020-21'],
            ['5', '22 Oct 2018', 'Academic Regulations R13 for B.Tech.(Regular)'],
            ['6', '22 Oct 2018', 'Revised Academic Regulations R15 for B.Tech.(Regular)'],
            ['7', '09 Aug 2018', 'R18 B.TECH Academic Regulations'],
            ['8', '21 Sep 2016', 'R16 B.Tech. Academic Regulations Including Transitory Regulations with Clarification on Evaluation for Mandatory Courses'],
          ],
        },
      },
    ],
  },
  'courses-offered': {
    title: 'Courses Offered',
    subtitle: 'Undergraduate and postgraduate programs across engineering, management and sciences.',
    sections: [
      {
        paragraphs: [
          'ABIT offers undergraduate, diploma and postgraduate programs designed to build strong technical knowledge, practical skills and professional confidence.',
        ],
      },
      {
        heading: 'B.Tech Courses',
        bullets: [
          'Computer Science & Engineering',
          'Computer Science & Engineering (AI & ML)',
          'Computer Science & Engineering (Data Science)',
          'Civil Engineering',
          'Electronics & Communication Engineering',
          'Electrical & Electronics Engineering',
        ],
      },
      {
        heading: 'Diploma Courses',
        bullets: [
          'Computer Science & Engineering',
          'Electrical & Electronics Engineering',
        ],
      },
      {
        heading: 'PG Courses',
        bullets: ['MBA (Masters of Business Administration)'],
      },
    ],
  },
  'academic-calendar': {
    title: 'Academic Calendar',
    sections: [
      {
        paragraphs: [
          'The academic calendar outlines the schedule of instruction, examinations, holidays and events for the academic year, in line with the JNTUH calendar.',
        ],
      },
    ],
    calendarTabs: [
      {
        label: '2022-23',
        rows: [
          {
            date: '01 Apr 2023',
            title: 'B.Tech. I Year II Semester Revised Academic Calendar for 2022-23',
            href: '#calendar-2022-23-revised',
          },
          {
            date: '15 Sep 2023',
            title: 'MBA and MCA II Year I & II Semesters 2023-24',
            href: '#calendar-2022-23-mba-mca',
          },
        ],
      },
      {
        label: '2021-22',
        rows: [
          {
            date: '24 Nov 2022',
            title: 'Academic Calendar for B.Tech.-B.Pharm. II Year I & II Semesters',
            academicYear: '2022-23',
          },
          {
            date: '26 Oct 2022',
            title: 'Academic Calendar of B.Tech. I Year I & II Semesters',
            academicYear: '2022-23',
          },
          {
            date: '02 Sep 2022',
            title: 'B.Tech./B.Pharm. III Year I & II Semesters Academic Calendar for AY 2022-23',
            academicYear: '2022-23',
          },
          {
            date: '02 Sep 2022',
            title: 'B.Tech./B.Pharm. IV Year I & II Semesters Academic Calendar for AY 2022-23',
            academicYear: '2022-23',
          },
        ],
      },
      {
        label: '2020-21',
        rows: [
          {
            date: '23 Feb 2022',
            title: 'Revised Academic Calendars of B.Tech.-B.Pharm. I, II, III and IV yrs, M.Tech., M.Pharm, MBA, MCA I and II yrs, Pharm.D III, IV and V yrs for A.Y. 2021-22',
            academicYear: '2021-22',
          },
          {
            date: '27 Aug 2021',
            title: 'Academic Calendar 2021-22 B.Tech., B.Pharm. III and IV years',
            academicYear: '2021-22',
          },
        ],
      },
    ],
  },
  'academics-syllabus': {
    title: 'Academics Syllabus',
    sections: [
      {
        paragraphs: [
          'Browse the syllabus and course structure for each academic regulation year. Select a tab to view the available programme syllabi, then use the link below to access the complete JNTUH syllabus information.',
        ],
      },
    ],
    syllabusTabs: [
      {
        label: '2023',
        description: 'Access the JNTUH syllabus for the 2023 academic regulations and current programme structure.',
      },
      {
        label: '2022',
        rows: [
          { date: '01 Dec 2022', title: 'R22 B.Tech. Aeronautical Engineering I Year Syllabus' },
          { date: '23 Nov 2022', title: 'R22 B.Tech. CSD Course Structure, I & II Year Syllabus' },
          { date: '23 Nov 2022', title: 'R22 B.Tech. CSBS Course Structure, I & II Year Syllabus' },
          { date: '19 Nov 2022', title: 'R22 B.Tech. AI & DS I and II Year Syllabus' },
          { date: '19 Nov 2022', title: 'R22 B.Tech. AI & ML I and II Year Syllabus' },
          { date: '19 Nov 2022', title: 'R22 B.Tech. CSE (AI & ML) I and II Year Syllabus' },
          { date: '19 Nov 2022', title: 'R22 B.Tech. CSE (Data Science) I and II Year Syllabus' },
          { date: '19 Nov 2022', title: 'R22 B.Tech. CSE (IOT) I and II Year Syllabus' },
          { date: '19 Nov 2022', title: 'R22 B.Tech. CSIT I and II Year Syllabus' },
          { date: '19 Nov 2022', title: 'R22 B.Tech. IT I and II Year Syllabus' },
          { date: '13 Nov 2022', title: 'R22 B.Tech. Textile Engineering I & II Year Syllabus' },
          { date: '13 Nov 2022', title: 'R22 B.Tech. CE (Software Engineering) I and II Year Syllabus' },
          { date: '13 Nov 2022', title: 'R22 B.Tech. Civil Engineering I & II Year Syllabus' },
          { date: '13 Nov 2022', title: 'R22 B.Tech. CSE (Cyber Security) I and II Year Syllabus' },
          { date: '13 Nov 2022', title: 'R22 B.Tech. CSE (Networks) I and II Year Syllabus' },
          { date: '13 Nov 2022', title: 'R22 B.Tech. CSE I and II Year Syllabus' },
        ],
      },
      {
        label: '2021',
        description: 'Access the JNTUH syllabus for the 2021 academic regulations and programme curricula.',
      },
    ],
  },
  'code-of-conduct': {
    title: 'Code of Conduct',
    sections: [
      {
        paragraphs: [
          'ABIT expects all students and staff to maintain the highest standards of discipline, integrity and mutual respect, fostering a safe and inclusive campus environment.',
        ],
      },
    ],
  },

  examinations: {
    title: 'About Examinations',
    subtitle: 'Examination Branch of AnuBose Institute of Technology (ABIT), Paloncha.',
    sections: [
      {
        paragraphs: [
          'Examination Committee is a body which is authorized to conduct examinations and make decisions in regard to organizing examinations.',
          'The Examination Committee deals with all the matters in relation to examinations and hears the complaints received pertaining to any matter arising out of the conduct of examinations and decides the course of action,',
        ],
      },
      {
        heading: 'Functions of Examination committee',
        bullets: [
          'To conduct the Internal/External/ Practical Examinations for all the branches offered in the College.',
          'To follow the schedule Time Table for the above-mentioned examinations in advance and inform the students about the same.',
          'To allot the exam halls for all the examinations conducted in the College. To ensure that all the question papers are prepared well in advance. .',
          'To collect all the answer scripts and the supporting documents required.',
          'To arrange for Internal Valuation of Exams. To address the grievances/ complaints of the students and staff concerning exam-related issues.',
        ],
      },
    ],
  },
  'examinations/about-examinations': {
    title: 'About Examinations',
    subtitle: 'Examination Branch of AnuBose Institute of Technology (ABIT), Paloncha.',
    sections: [
      {
        paragraphs: [
          'Examination Committee is a body which is authorized to conduct examinations and make decisions in regard to organizing examinations.',
          'The Examination Committee deals with all the matters in relation to examinations and hears the complaints received pertaining to any matter arising out of the conduct of examinations and decides the course of action,',
        ],
      },
      {
        heading: 'Functions of Examination committee',
        bullets: [
          'To conduct the Internal/External/ Practical Examinations for all the branches offered in the College.',
          'To follow the schedule Time Table for the above-mentioned examinations in advance and inform the students about the same.',
          'To allot the exam halls for all the examinations conducted in the College. To ensure that all the question papers are prepared well in advance. .',
          'To collect all the answer scripts and the supporting documents required.',
          'To arrange for Internal Valuation of Exams. To address the grievances/ complaints of the students and staff concerning exam-related issues.',
        ],
      },
    ],
  },
  'examinations/vision-and-mission': {
    title: 'Vision & Mission',
    subtitle: 'Vision and Mission of the ABIT Examination Branch.',
    sections: [
      {
        heading: 'Vision',
        paragraphs: [
          'Vision of the examination committee is to establish and maintain the rules and regulations for qualitative and reliable assessment and evaluation of students. The core purpose of examination is to encourage students for regular study to achieve academic excellence.',
        ],
      },
      {
        heading: 'Department Mission',
        paragraphs: [
          'The mission of examination committee is to design plans and strategies for transparent, robust and continuous evaluation of students. The main effort of the house examination committee is to set a standard examination and evaluation profile of the college in pace with the affiliated university.',
        ],
      },
    ],
  },
  'examinations/staff': {
    title: 'Staff',
    subtitle: 'Examination Committee Members at AnuBose Institute of Technology.',
    sections: [
      {
        table: {
          headers: ['Sno.', 'Name of The staff', 'Department', 'Designation', 'Position'],
          rows: [
            ['1', 'Dr N.V.Subbarao', 'EEE', 'Principal', 'Chairman'],
            ['2', 'K.Nagendra Babu', 'MECH', 'Asst Professor', 'Coordinator'],
            ['3', 'K Praveen Kumar', 'CSE', 'Asst Professor', 'Member'],
            ['4', 'NVN Prabath', 'CIV', 'Asst Professor', 'Member'],
            ['5', 'M.Ramesh Babu', 'S&H', 'Asst Professor', 'Member'],
            ['6', 'M.Divya', 'MBA', 'Asst Professor', 'Member'],
            ['7', 'SK.Nadiya', 'CSE', 'Asst Professor', 'Member'],
            ['8', 'V.Ravindra Naik', 'ECE', 'Asst Professor', 'Member'],
            ['9', 'B.Ramesh', 'EEE', 'Asst Professor', 'Member'],
            ['10', 'L.Sudhakar', 'MINING', 'Asst Professor', 'Member'],
          ],
        },
      },
    ],
  },
  'examinations/notifications': {
    title: 'Notifications',
    subtitle: 'Official examination notifications from ABIT Examination Branch.',
    sections: [],
    calendarTabs: [
      {
        label: 'Notifications',
        rows: [
          {
            title: 'Special_supply_Notification_for_BTech_I_II_III_IV_Years_Nov_2023',
            href: '/documents/approvals/jntuh-affiliation-2023-24.pdf',
          },
          {
            title: 'All_PG_Courses_RegSup_Project_Thesis_Uploading_Notification_Jun2023',
            href: '/documents/approvals/jntuh-affiliation-2023-24.pdf',
          },
          {
            title: 'M.Tech_M.Pharm_Courses_Notification_for_Project_Thesis_Uploading_Sep_2023',
            href: '/documents/approvals/jntuh-affiliation-2023-24.pdf',
          },
          {
            title: 'MBA_MCA_Reg_Sup_Notification_for_Project_Thesis_Uploading_Nov_2023',
            href: '/documents/approvals/jntuh-affiliation-2023-24.pdf',
          },
          {
            title: 'Notification for BTech & BPharm II_I regular supply, II_II supply April 2023',
            href: '/documents/approvals/jntuh-affiliation-2022-23.pdf',
          },
          {
            title: 'Notification_BTech_BPharm_42_RegSup_and_41_Sup_July2023',
            href: '/documents/approvals/jntuh-affiliation-2022-23.pdf',
          },
          {
            title: 'Notification_for_BPharm_I_I_Reg_supply_I_year_I_II_supply_Sep_oct_2023',
            href: '/documents/approvals/jntuh-affiliation-2022-23.pdf',
          },
          {
            title: 'Notification_for_BTech_BPharm_II_II_regular_supply_III_I_supply_Sep_oct_2023',
            href: '/documents/approvals/jntuh-affiliation-2022-23.pdf',
          },
          {
            title: 'Notification_for_BTech_BPharm_III_II_Reg_Sup_and_III_I_Sup_July2023',
            href: '/documents/approvals/jntuh-affiliation-2022-23.pdf',
          },
          {
            title: 'Notification_for_BTech_I_I_Reg_Sup_I_Year_I_II_Supply_Mar2023',
            href: '/documents/approvals/jntuh-affiliation-2022-23.pdf',
          },
          {
            title: 'Notification_for_BTech_I_I_RegSup_I_Year_and_I_II_Supply_2023_Exams',
            href: '/documents/approvals/jntuh-affiliation-2022-23.pdf',
          },
          {
            title: 'Notification_for_Btech&BPharm_31_32_Reg_Sup_31_32_MinorProgram_Jan2023',
            href: '/documents/approvals/jntuh-affiliation-2021-22.pdf',
          },
          {
            title: 'Notification_for_IV_I_BTech_BPharm_and_IV_I_MinorDegree_Jan2023_Exams',
            href: '/documents/approvals/jntuh-affiliation-2021-22.pdf',
          },
          {
            title: 'Notification_for_IV_II_B.Tech_B.Pharm_Advanced_Supply_Exams_August_2023',
            href: '/documents/approvals/jntuh-affiliation-2021-22.pdf',
          },
          {
            title: 'Notification for MBA MCA II Sem RegSup and I Sem Supply AugSep2023',
            href: '/documents/approvals/jntuh-affiliation-2021-22.pdf',
          },
          {
            title: 'Notification for MBA MCA III Sem Reg Sup IV V Sem Sup Exams MarApr2023',
            href: '/documents/approvals/jntuh-affiliation-2021-22.pdf',
          },
          {
            title: 'Notification_for_MBA_MCA_IV_Sem_Reg_and_III_&_V_Sem_Sup_Exams_Sep_2023',
            href: '/documents/approvals/jntuh-affiliation-2021-22.pdf',
          },
          {
            title: 'Notification_for_MTech_MPharmacy_Project_Thesis_Uploading_Feb2023',
            href: '/documents/approvals/jntuh-affiliation-2021-22.pdf',
          },
          {
            title: 'Notification for One Time Chance 2023',
            href: '/documents/approvals/jntuh-affiliation-2020-21.pdf',
          },
          {
            title: 'Notification_for_PG_Project_Thesis_One_Time_Chance_2023.pdf',
            href: '/documents/approvals/jntuh-affiliation-2020-21.pdf',
          },
          {
            title: 'Notification_MBA_MCA_I_Sem_RegSup_and_II_Sem_Sup_Exams_Mar_April2023',
            href: '/documents/approvals/jntuh-affiliation-2020-21.pdf',
          },
          {
            title: 'Notification MTech MPharm I II Sem RegSup II Sem Supply Exams March2023',
            href: '/documents/approvals/jntuh-affiliation-2020-21.pdf',
          },
          {
            title: 'Notification MTech MPharm II Sem RegSup and I and III Sem Sup Aug2023',
            href: '/documents/approvals/jntuh-affiliation-2020-21.pdf',
          },
          {
            title: 'Notifications_for_Btech_BPharm_IV_I_Regular_Supply_exams_Dec_2023',
            href: '/documents/approvals/jntuh-affiliation-2020-21.pdf',
          },
          {
            title: 'Special_Supply_Examination_Notification_for_R18_Mech_Dec2022',
            href: '/documents/approvals/jntuh-affiliation-2020-21.pdf',
          },
        ],
      },
    ],
  },
  'examinations/results': {
    title: 'Results',
    subtitle: 'Access examination results and official JNTUH & ABIT result portals.',
    sections: [],
    calendarTabs: [
      {
        label: 'Results & Documents',
        rows: [
          {
            title: 'JNTUH Official Examination Results Portal',
            href: 'https://jntuhresults.in/',
          },
          {
            title: 'B.Tech I, II, III & IV Year Regular & Supplementary Examination Results',
            href: 'https://jntuhresults.in/',
          },
          {
            title: 'MBA II & IV Semester Regular & Supplementary Examination Results',
            href: 'https://jntuhresults.in/',
          },
          {
            title: 'MALPRACTICE-RULES.pdf (JNTUH & ABIT Disciplinary Regulations)',
            href: '/documents/approvals/jntuh-affiliation-2023-24.pdf',
          },
        ],
      },
    ],
  },
  'examinations/malpractice-guidelines': {
    title: 'Malpractice Guidelines',
    subtitle: 'Disciplinary rules, offenses and penalties enforced by JNTU Hyderabad & ABIT.',
    sections: [
      {
        heading: 'Examination Discipline & Conduct',
        paragraphs: [
          'To maintain strict academic integrity and conduct fair examinations, candidates must strictly follow hall rules. Bringing mobile phones, smartwatches, programmable calculators, electronic devices, or unauthorized written material into the examination hall is strictly prohibited.',
        ],
      },
    ],
    calendarTabs: [
      {
        label: 'Malpractice Rules Document',
        rows: [
          {
            title: 'MALPRACTICE-RULES.pdf (DISCIPLINARY ACTION FOR / IMPROPER CONDUCT IN EXAMINATIONS)',
            href: 'https://abit.ac.in/wp-content/uploads/2023/11/MALPRACTICE-RULES.pdf',
          },
        ],
      },
    ],
  },
  'examinations/academic-regulations': {
    title: 'Academic Regulations',
    subtitle: 'JNTUH Regulations governing course structure, attendance, evaluation, and degree award.',
    sections: [
      {
        heading: 'Attendance Requirements & Condonation',
        paragraphs: [
          'A student must secure a minimum of 75% aggregate attendance across all subjects in the semester to be eligible for end-semester university examinations.',
          'Condonation of shortage of attendance between 65% and 75% may be recommended by the College Academic Committee on genuine medical grounds, subject to valid medical certificates and payment of the prescribed condonation fee. Students with less than 65% attendance are detained and must repeat the semester.',
        ],
      },
      {
        heading: 'Evaluation Scheme & Credit System',
        bullets: [
          'Theory Evaluation (R22 Regulation): Evaluated for 100 marks comprising 40 marks for Internal Continuous Assessment (Mid-Tests, Assignments, Quiz) and 60 marks for University End-Semester Examination.',
          'Practical Evaluation: Evaluated for 50/100 marks with continuous internal evaluation and external end-semester practical examination conducted jointly by internal and external examiners.',
          'Passing Minimum: A student must secure a minimum of 35% marks (21 out of 60) in the end-semester theory exam and a minimum 40% aggregate (internal + external) to pass a subject.',
          'Promotion Criteria: Promotion to subsequent academic years depends on securing the minimum required cumulative credits as specified under JNTUH regulations.',
        ],
      },
    ],
  },
  'examinations/syllabus': {
    title: 'Syllabus & Course Structure',
    subtitle: 'Curriculum structure, credits, and detailed syllabus for B.Tech, MBA and Diploma courses.',
    sections: [
      {
        heading: 'JNTUH & SBTET Curriculum Structure',
        paragraphs: [
          'AnuBose Institute of Technology follows the Choice Based Credit System (CBCS) curriculum formulated by Jawaharlal Nehru Technological University Hyderabad (JNTUH) for undergraduate (B.Tech) and postgraduate (MBA) programs, and SBTET regulations for Diploma courses.',
        ],
        bullets: [
          'B.Tech Regulations: R22 Regulation (for students admitted from 2022-23 onwards) and R18 Regulation (for prior batches).',
          'MBA Regulations: R22 & R19 Regulations for Master of Business Administration.',
          'Diploma Regulations: C-21 / C-24 Scheme prescribed by the State Board of Technical Education and Training (SBTET), Telangana.',
          'Syllabus Access: Detailed semester-wise syllabus books and course outcomes are accessible through departmental offices and the Central Library.',
        ],
      },
    ],
  },
  'examinations/time-tables': {
    title: 'Examination Time-Tables',
    subtitle: 'Schedules for Mid-Term and End-Semester University Theory & Practical Examinations.',
    sections: [
      {
        heading: 'Semester & Mid-Term Exam Schedules',
        paragraphs: [
          'Time-tables for internal Mid-Term Examinations and JNTUH University Semester-End Theory and Practical Examinations are published well in advance. Students must strictly adhere to exam timings and hall allocation notices.',
        ],
        table: {
          headers: ['S.No.', 'Program & Year', 'Examination Type', 'Scheduled Month / Timeline'],
          rows: [
            ['1', 'B.Tech I, II, III & IV Year', 'JNTUH Semester End Theory Examinations', 'November / December 2026'],
            ['2', 'B.Tech I, II, III & IV Year', 'JNTUH End Semester Practical Examinations', 'October / November 2026'],
            ['3', 'B.Tech All Branches', 'Mid-Term Test 1 & Mid-Term Test 2', 'As per JNTUH Academic Calendar'],
            ['4', 'MBA I & II Year', 'University End Examinations & Mid Tests', 'December 2026'],
            ['5', 'Diploma (Polycet)', 'SBTET Board Examinations (Theory & Practical)', 'November 2026'],
          ],
        },
      },
    ],
  },
  'examinations/downloads': {
    title: 'Examination Downloads & Forms',
    subtitle: 'Download official application forms, certificates request formats, and application templates.',
    sections: [
      {
        heading: 'Downloadable Application Forms',
        paragraphs: [
          'Students can download the official application forms below, complete the required details, and submit them to the Examination Branch counter along with the necessary enclosures.',
        ],
        bullets: [
          'JNTUH Revaluation / Recounting Application Form',
          'Application Form for Duplicate Hall Ticket / Marks Memorandum',
          'Official Academic Transcripts & Migration Certificate Request Form',
          'Application for Correction of Name / Father Name in Marks Memorandums',
          'No Dues Clearance Form for Final Year Students',
          'Student Educational Document Background Verification Request Form',
        ],
      },
    ],
  },
  'examinations/student-background-verification': {
    title: 'Student Background Verification',
    subtitle: 'Official process for educational document verification for employers, screening agencies, and universities.',
    sections: [
      {
        heading: 'Educational Document Verification Process',
        paragraphs: [
          'AnuBose Institute of Technology provides official and confidential educational background verification services for alumni who graduated from ABIT. Verification agencies, corporate employers, background screening companies, government organizations, and foreign universities can request official verification of Provisional Certificates (PC), Degree Certificates, Consolidated Marks Memos (CMM), and Study Certificates.',
        ],
      },
      {
        heading: 'Verification Submission Guidelines',
        bullets: [
          'Email Request: Send formal verification requests along with scanned copies of student credentials to info@abit.ac.in or exams@abit.ac.in.',
          'Required Enclosures: Clear scanned copies of student Provisional Certificate / Degree Certificate, Consolidated Marks Memo (CMM), and Hall Ticket Number.',
          'Candidate Consent: A signed consent / authorization letter from the candidate authorizing the background screening.',
          'Turnaround Time: Standard document verification requests are processed and confirmed via official email within 3 to 5 working days.',
          'Fee Remittance: Prescribed verification fee (if applicable) can be remitted online or via demand draft drawn in favor of "AnuBose Institute of Technology", payable at Paloncha.',
        ],
      },
    ],
  },

  // IQAC SECTION
  iqac: {
    title: 'Internal Quality Assurance Cell (IQAC)',
    subtitle: 'Driving quality culture, academic excellence and institutional standards at ABIT.',
    sections: [
      {
        heading: 'About IQAC',
        paragraphs: [
          'In accordance with National Assessment and Accreditation Council (NAAC) guidelines, the Internal Quality Assurance Cell (IQAC) was established at AnuBose Institute of Technology (ABIT) as a post-accreditation quality sustenance measure. The primary aim of IQAC is to develop a system for conscious, consistent, and catalytic action to improve the academic and administrative performance of the institution.',
          'IQAC acts as a dynamic vehicle for ushering in quality enhancement by working out planned strategies and mechanisms to remove deficiencies and enhance quality across all academic, research, and administrative spheres.',
        ],
      },
      {
        heading: 'Objectives & Functions of IQAC',
        bullets: [
          'To develop quality benchmarks and parameters for academic and administrative activities of the institution.',
          'To facilitate the creation of a learner-centric environment conducive to quality education and faculty maturation to adopt required knowledge and technology.',
          'To arrange feedback response from students, parents, alumni, employers and other stakeholders on quality-related institutional processes.',
          'To organize inter and intra institutional workshops, seminars on quality related themes and promotion of quality circles.',
          'To document various programmes/activities leading to quality improvement and prepare Annual Quality Assurance Reports (AQAR) for NAAC.',
          'To act as a nodal agency of the Institution for coordinating quality-related activities, including adoption and dissemination of best practices.',
        ],
      },
    ],
  },
  'iqac/cell-composition-and-members': {
    title: 'Cell Composition and Members',
    subtitle: 'Composition of Internal Quality Assurance Cell (IQAC) Committee.',
    sections: [
      {
        heading: 'IQAC Committee Composition',
        table: {
          headers: ['S.No.', 'Name of the Member', 'Designation / Affiliation', 'IQAC Role'],
          rows: [
            ['1', 'Dr. N.V. Subbarao', 'Principal, ABIT', 'Chairperson'],
            ['2', 'Dr. A. Avani', 'Professor, CSE & Dean Academics', 'IQAC Coordinator'],
            ['3', 'Dr. G. Sambasiva Rao', 'Professor, ECE & Exam Controller', 'Senior Teacher Member'],
            ['4', 'Dr. T. Bharath Krishna', 'Professor, EEE', 'Senior Teacher Member'],
            ['5', 'Dr. T. Venkata Satya Vivek', 'Professor, MECH', 'Senior Teacher Member'],
            ['6', 'Mr. K. Nagendra Babu', 'Asst. Professor, MECH', 'Teacher Member'],
            ['7', 'Mr. I. Kranthi Kumar', 'TPO & Asst. Professor, CSE', 'Teacher Member / Administrative'],
            ['8', 'Sri K.S. Rao', 'Management Representative, NET', 'Management Member'],
            ['9', 'Mr. P. Venkateswarlu', 'Administrative Officer, ABIT', 'Senior Administrative Officer'],
            ['10', 'Mr. V. Krishna', 'Local Society Representative / Alumni', 'Nominee from Local Society / Alumni'],
          ],
        },
      },
    ],
  },
  'iqac/mom-atr': {
    title: 'MOM & ATR',
    subtitle: 'Minutes of Meeting (MOM) and Action Taken Reports (ATR) of IQAC.',
    sections: [
      {
        paragraphs: [
          'The IQAC meets regularly each academic quarter to review institutional progress, quality initiatives, academic audits, and stakeholder feedback. Find official Minutes of Meetings and Action Taken Reports below.',
        ],
      },
    ],
    calendarTabs: [
      {
        label: 'MOM & ATR Documents',
        rows: [
          {
            title: 'IQAC Minutes of Meeting & Action Taken Report (2023-2024)',
            href: '/documents/approvals/jntuh-affiliation-2023-24.pdf',
          },
          {
            title: 'IQAC Minutes of Meeting & Action Taken Report (2022-2023)',
            href: '/documents/approvals/jntuh-affiliation-2022-23.pdf',
          },
          {
            title: 'IQAC Minutes of Meeting & Action Taken Report (2021-2022)',
            href: '/documents/approvals/jntuh-affiliation-2021-22.pdf',
          },
          {
            title: 'IQAC Minutes of Meeting & Action Taken Report (2020-2021)',
            href: '/documents/approvals/jntuh-affiliation-2020-21.pdf',
          },
        ],
      },
    ],
  },
  'iqac/aqar': {
    title: 'AQAR Reports',
    subtitle: 'Annual Quality Assurance Reports (AQAR) submitted to NAAC.',
    sections: [
      {
        paragraphs: [
          'Annual Quality Assurance Report (AQAR) is the yearly benchmark report tracking academic, infrastructural, and administrative quality parameters submitted annually to NAAC.',
        ],
      },
    ],
    calendarTabs: [
      {
        label: 'AQAR Submissions',
        rows: [
          {
            title: 'Annual Quality Assurance Report (AQAR 2022-23) - NAAC Submission',
            href: '/documents/approvals/jntuh-affiliation-2023-24.pdf',
          },
          {
            title: 'Annual Quality Assurance Report (AQAR 2021-22) - NAAC Submission',
            href: '/documents/approvals/jntuh-affiliation-2022-23.pdf',
          },
          {
            title: 'Annual Quality Assurance Report (AQAR 2020-21) - NAAC Submission',
            href: '/documents/approvals/jntuh-affiliation-2021-22.pdf',
          },
          {
            title: 'Annual Quality Assurance Report (AQAR 2019-20) - NAAC Submission',
            href: '/documents/approvals/jntuh-affiliation-2020-21.pdf',
          },
        ],
      },
    ],
  },
  'iqac/hr-policy': {
    title: 'HR Policy',
    subtitle: 'Human Resource & Administrative Code of Conduct Policies at ABIT.',
    sections: [
      {
        heading: 'Service Rules & Human Resource Policy',
        paragraphs: [
          'AnuBose Institute of Technology has well-defined Human Resource Policies governing recruitment, service rules, code of conduct, leave regulations, promotional avenues, and welfare schemes for teaching and non-teaching staff members.',
        ],
        bullets: [
          'Cadre Structure & Qualifications in adherence to AICTE and JNTUH norms.',
          'Transparent recruitment procedures through Selection Committees.',
          'Leaves & Absence Policies: Casual Leave, Earned Leave, Maternity Leave, and On-Duty Leave for research/conferences.',
          'Staff Welfare Schemes: EPF, ESI, Group Insurance, Seed Money for Research, and Faculty Development Support.',
        ],
      },
    ],
    calendarTabs: [
      {
        label: 'HR Policy Document',
        rows: [
          {
            title: 'ABIT Service Rules & HR Policy Document (PDF)',
            href: '/documents/approvals/jntuh-affiliation-2023-24.pdf',
          },
        ],
      },
    ],
  },
  'iqac/events': {
    title: 'IQAC Quality Events',
    subtitle: 'Seminars, Faculty Development Programs (FDPs), and Quality Workshops.',
    sections: [
      {
        heading: 'Quality Initiatives & Workshops',
        paragraphs: [
          'IQAC regularly conducts state and national level Faculty Development Programs (FDPs), workshops on Outcome Based Education (OBE), pedagogical innovations, and research methodology.',
        ],
        bullets: [
          'National Workshop on Outcome Based Education (OBE) and NBA/NAAC Accreditation Parameters.',
          'One-Week Faculty Development Program on Advanced Research Methodology and Patent Drafting.',
          'Seminar on Quality Enhancement in Teaching-Learning and Assessment Processes.',
        ],
      },
    ],
  },

  // NAAC SECTION
  ssr: {
    title: 'Self Study Report (SSR)',
    subtitle: 'Institutional Self Study Report for NAAC Accreditation.',
    sections: [
      {
        paragraphs: [
          'The Self Study Report (SSR) presents a detailed qualitative and quantitative evaluation of AnuBose Institute of Technology across the seven NAAC Criteria.',
        ],
      },
    ],
    calendarTabs: [
      {
        label: 'SSR Documents',
        rows: [
          {
            title: 'NAAC Self Study Report (SSR 1st Cycle) - Full Report PDF',
            href: '/documents/approvals/jntuh-affiliation-2023-24.pdf',
          },
          {
            title: 'Executive Summary & Institutional Profile - SSR',
            href: '/documents/approvals/jntuh-affiliation-2022-23.pdf',
          },
        ],
      },
    ],
  },
  dvv: {
    title: 'Data Verification & Validation (DVV)',
    subtitle: 'NAAC DVV Clarifications, supporting documents and metrics.',
    sections: [
      {
        paragraphs: [
          'Data Verification and Validation (DVV) portal provides metric-wise clarification responses and supporting official documents submitted during NAAC accreditation.',
        ],
      },
    ],
    calendarTabs: [
      {
        label: 'DVV Clarification Metrics',
        rows: [
          {
            title: 'DVV Clarification Document - Criterion I to VII Metrics',
            href: '/documents/approvals/jntuh-affiliation-2023-24.pdf',
          },
        ],
      },
    ],
  },
  'naac/best-practices': {
    title: 'Best Practices',
    subtitle: 'Institutional best practices driving holistic student development at ABIT.',
    sections: [
      {
        heading: 'Best Practice I: Comprehensive Skill & Employability Enhancement',
        paragraphs: [
          'ABIT integrates rigorous technical training, industry certifications, soft-skill workshops, and mock interview drives from Year I to ensure students achieve high placement readiness in top MNCs.',
        ],
      },
      {
        heading: 'Best Practice II: Mentorship, Student Welfare & Holistic Support',
        paragraphs: [
          'A robust 1:15 faculty-to-student counseling system tracks academic performance, personal well-being, attendance, and career aspirations, creating a supportive learning environment.',
        ],
      },
    ],
  },
  'naac/institutional-distinctiveness': {
    title: 'Institutional Distinctiveness',
    subtitle: 'Unique features distinguishing AnuBose Institute of Technology.',
    sections: [
      {
        heading: 'Empowering Technical Education in Rural & Industrial Hub',
        paragraphs: [
          'Situated in Paloncha, Bhadradri Kothagudem district, ABIT stands distinct as a beacon of high-quality technical and professional education catering to rural and semi-urban engineering aspirants.',
          'With modern labs, Ph.D. qualified faculty, campus placement records, and affordable fees, ABIT fulfills its core motto: "Always Best In Technical-education".',
        ],
      },
    ],
  },
  policies: {
    title: 'Institutional Policies',
    subtitle: 'Code of ethics, environment, research and academic policies at ABIT.',
    sections: [
      {
        heading: 'Key Policy Documents',
        bullets: [
          'Academic Integrity & Anti-Plagiarism Policy',
          'Research, Consultancy & Seed Money Promotion Policy',
          'Green Campus, Environment & Energy Conservation Policy',
          'E-Governance & IT Infrastructure Policy',
          'Scholarship, Financial Support & Freeship Policy',
        ],
      },
    ],
  },

  // MORE SECTION & STAKEHOLDERS FEEDBACK
  'stakeholders-feedback': {
    title: 'Stakeholders Feedback',
    subtitle: 'Feedback mechanisms and analysis reports from Students, Teachers, Employers, Alumni & Parents.',
    sections: [
      {
        heading: 'Stakeholder Feedback System',
        paragraphs: [
          'AnuBose Institute of Technology collects online and offline feedback periodically from key stakeholders—Students, Teachers, Employers, Alumni, and Parents—regarding curriculum design, teaching-learning quality, infrastructure, and placement support.',
          'The feedback is analyzed by IQAC and College Academic Committee to implement corrective actions and syllabus enrichment recommendations to JNTU Hyderabad.',
        ],
      },
      {
        heading: 'Feedback Reports & Action Taken Reports',
        table: {
          headers: ['S.No.', 'Stakeholder Category', 'Feedback Analysis & Action Taken Report'],
          rows: [
            ['1', 'Student Feedback', 'Feedback on Curriculum, Faculty Teaching & Campus Facilities'],
            ['2', 'Teacher Feedback', 'Feedback on Syllabus Coverage, Research Support & Infrastructure'],
            ['3', 'Employer Feedback', 'Feedback on Industry Readiness, Soft Skills & Technical Knowledge'],
            ['4', 'Alumni Feedback', 'Feedback on Placement Preparation & Institutional Growth'],
            ['5', 'Parent Feedback', 'Feedback on Academic Discipline, Safety & Career Support'],
          ],
        },
      },
    ],
    calendarTabs: [
      {
        label: 'Feedback Action Taken Reports (PDF)',
        rows: [
          {
            title: 'Stakeholders Feedback Analysis & Action Taken Report (2022-2023)',
            href: '/documents/approvals/jntuh-affiliation-2023-24.pdf',
          },
          {
            title: 'Stakeholders Feedback Analysis & Action Taken Report (2021-2022)',
            href: '/documents/approvals/jntuh-affiliation-2022-23.pdf',
          },
        ],
      },
    ],
  },
  library: {
    title: 'Central Library',
    subtitle: 'A hub of knowledge and resources for the ABIT community.',
    sections: [
      {
        heading: 'Library Resources',
        paragraphs: [
          'The Central Library of ABIT is well-stocked with over 25,000 volumes, national and international journals, e-books, e-journals, DELNET access, and NPTEL courseware.',
        ],
      },
    ],
  },
  'library/about-librarian': {
    title: 'About Librarian',
    subtitle: 'Library Leadership & Administration.',
    sections: [
      {
        paragraphs: [
          'The Central Library is managed by qualified library professionals who guide students and faculty in accessing digital repositories, research databases, and academic literature.',
        ],
      },
    ],
  },
  'library/library-timings': {
    title: 'Library Timings',
    subtitle: 'Working hours and reading room schedule.',
    sections: [
      {
        heading: 'Operating Schedule',
        bullets: [
          'Working Days (Mon - Sat): 8:00 AM to 6:00 PM',
          'Circulation / Issue Counter: 9:00 AM to 5:00 PM',
          'Digital Library / e-Resource Section: 9:00 AM to 5:30 PM',
          'Exam Time Extended Hours: 8:00 AM to 7:00 PM',
        ],
      },
    ],
  },
  'library/library-facilities': {
    title: 'Library Facilities',
    subtitle: 'Services and digital resources offered at Central Library.',
    sections: [
      {
        heading: 'Services & Facilities',
        bullets: [
          'Fully Automated OPAC (Open Public Access Catalogue) System.',
          'Digital Library with 30 High-Speed Internet Multimedia PCs.',
          'Subscription to IEEE, DELNET, N-LIST e-journals and e-books.',
          'Reprographic, Printing and Scanning Services.',
          'Book Bank Facility for SC/ST and Merit Students.',
        ],
      },
    ],
  },
  services: {
    title: 'Campus Services & Amenities',
    subtitle: 'Student and staff support facilities across campus.',
    sections: [
      {
        heading: 'Campus Amenities',
        bullets: [
          'Hygienic Canteen & Cafeteria serving nutritious meals.',
          'Transport Network connecting Kothagudem, Paloncha, Bhadrachalam and surrounding areas.',
          'Medical Assistance Cell with First Aid and Doctor on Call.',
          'Sports & Physical Education Grounds for Cricket, Volleyball, Badminton & Indoor Games.',
          '24/7 RO Purified Drinking Water and High-Speed Wi-Fi Campus.',
        ],
      },
    ],
  },
  infrastructure: {
    title: 'Infrastructure',
    subtitle: 'Modern facilities designed to maximize learning.',
    sections: [
      {
        heading: 'Academic & Campus Infrastructure',
        paragraphs: [
          'ABIT boasts state-of-the-art academic infrastructure spread over a green campus. Facilities include spacious ICT-enabled classrooms, advanced engineering laboratories, seminar halls, auditorium, central library, and sports complexes.',
        ],
      },
    ],
  },
  'research-development-wing': {
    title: 'Research & Development Wing',
    subtitle: 'Fostering research, patents and innovation at ABIT.',
    sections: [
      {
        heading: 'R&D Cell Objectives',
        paragraphs: [
          'The R&D Wing promotes a culture of innovation, funded research projects, patent filings, and peer-reviewed journal publications among faculty and students.',
        ],
      },
    ],
  },
}
