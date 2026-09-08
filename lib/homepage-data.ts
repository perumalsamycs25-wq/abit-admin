import type { HomepageData } from '@/lib/homepage-types'

export const STATIC_HOMEPAGE: HomepageData = {
  hero: {
    title: 'Discover the world of possibility with ANUBOSE',
    description: 'AnuBose Institute of Technology for Women inspires students to become confident builders of their future.',
    buttonText: 'Apply for Admissions',
    marqueeItems: ['Admissions Open 2026-27', 'Sankranthi Celebrations', 'Discover the world of possibility with ANUBOSE'],
    banners: [
      { src: '/ABIT_IMAGES/bannerp2.jpg', alt: 'ABIT students learning together' },
      { src: '/ABIT_IMAGES/banner01.webp', alt: 'ABIT students in the laboratory' },
    ],
  },
  about: {
    imageUrl: '/ABIT_IMAGES/home-01-welcome-image-1-1.png',
    title: "Welcome to AnuBose Institute of Technology For Women's",
    paragraphs: [
      'AnuBose Institute Of Technology (ABIT), located at Paloncha - an industrial hub in Bhadradri Kothagudem district, is sponsored by the National Educational Trust, Paloncha. The members of the trust are eminent personalities in various walks of life and dedicate themselves to the cause of education. In light of this, ABIT was established in 2008 with special attention to technical education and is approved by AICTE, New Delhi and affiliated to the premier and world-renowned Jawaharlal Nehru Technological University, Hyderabad.',
      'The ABIT expands itself as "Always Best In Technical-education". AnuBose Institute of Technology (ABIT) strives to make students confident and creative builders of their future. ABIT believes learning is maximized when it takes place in an environment enriched with support.',
    ],
    points: ['Approved by AICTE, New Delhi', 'Affiliated to JNTU, Hyderabad', 'Sponsored by National Educational Trust, Paloncha'],
    buttonText: 'Read More',
    experienceText: '15+ Years',
  },
  statistics: [
    { value: '2008', label: 'Established' },
    { value: '10+', label: 'Departments' },
    { value: 'B++', label: 'NAAC Grade' },
    { value: 'JNTUH', label: 'Affiliated' },
  ],
  admissions: [
    { title: 'B.Tech Admissions 2026-27', imageUrl: '/ABIT_IMAGES/WhatsApp-Image-2026-06-04-at-2.30.22-PM-200x300.jpeg', url: '/admissions-2/' },
    { title: 'Admissions Open 2026-27', imageUrl: '/ABIT_IMAGES/WhatsApp-Image-2026-06-04-at-2.30.22-PM-1-200x300.jpeg', url: '/admissions-2/' },
    { title: 'Join ABIT', imageUrl: '/ABIT_IMAGES/WhatsApp-Image-2026-06-04-at-2.30.21-PM-200x300.jpeg', url: '/admissions-2/' },
    { title: 'Admissions 2026-27', imageUrl: '/ABIT_IMAGES/WhatsApp-Image-2026-06-04-at-2.30.20-PM-200x300.jpeg', url: '/admissions-2/' },
    { title: 'Apply Now', imageUrl: '/ABIT_IMAGES/WhatsApp-Image-2026-06-04-at-2.30.20-PM-2-200x300.jpeg', url: '/admissions-2/' },
    { title: 'Admissions Open', imageUrl: '/ABIT_IMAGES/WhatsApp-Image-2026-06-04-at-2.30.20-PM-1-212x300.jpeg', url: '/admissions-2/' },
  ],
  news: [
    { title: 'Admissions', description: 'Explore opportunities and begin your journey at ABIT.', imageUrl: '/event-convocation.png', data: { category: 'News', dateLabel: 'Latest updates' }, url: '/admissions-2/' },
    { title: 'Sankranthi celebrations', description: 'Celebrating culture, community and student life at ABIT.', imageUrl: '/event-culture.png', data: { category: 'Events', dateLabel: 'Latest updates' }, url: '/gallery/' },
    { title: 'Test News', description: 'Learning, innovation and hands-on experiences across our campus.', imageUrl: '/facility-lab.png', data: { category: 'News', dateLabel: 'Latest updates' }, url: '/gallery/' },
  ],
  newsEvents: { eyebrow: 'Events & Updates', title: 'News & Events', viewAllText: 'View all', viewAllUrl: '/gallery/' },
  whyChoose: [
    { title: 'Affordability', description: 'Our financial aid program makes ABIT affordable for every family throughout the world.', imageUrl: '/ABIT_IMAGES/whychoose-s1.PNG' },
    { title: 'Academics', description: 'An education at ABIT has limitless possibilities. Our courses are taught by accomplished faculty members.', imageUrl: '/ABIT_IMAGES/whychoose-s2.PNG' },
    { title: 'Inspiring Student Life', description: 'Our residential system creates more opportunities for learning with peers and professors.', imageUrl: '/ABIT_IMAGES/whychoose-s3.PNG' },
  ],
  whyChooseSection: { eyebrow: 'Why Choose AnuBose', title: 'It begins with good academics', description: 'ABIT begins with good academics and goes so much further from there.', buttonText: 'Learn more' },
  cta: { imageUrl: '/ABIT_IMAGES/BUILDING-2-Copy-1.jpg', title: 'Apply for Admissions', description: 'We are looking for future students who are inquisitive, passionate, original and determined to grow.', buttonText: 'Apply for Admissions', buttonUrl: '/admissions-2/' },
  pressSection: { eyebrow: 'News coverage', title: 'AnuBose in Press', description: 'ABIT begins with good academics, and goes so much further from there.' },
  press: [
    { title: 'ABIT in the news', imageUrl: '/ABIT_IMAGES/Paper-Note-14.jpg' },
    { title: 'AnuBose Institute activities', imageUrl: '/ABIT_IMAGES/Paper-Note-16-1.jpg' },
    { title: 'Student achievements', imageUrl: '/ABIT_IMAGES/Paper-Note-24.jpg' },
  ],
  recruiters: [
    { title: 'BYJUS', imageUrl: '/ABIT_IMAGES/Byjus_logo.svg.png' },
    { title: 'Atos', imageUrl: '/ABIT_IMAGES/Atos.s0vg.png' },
    { title: 'Axelor', imageUrl: '/ABIT_IMAGES/axelor.png' },
    { title: 'Aggne', imageUrl: '/ABIT_IMAGES/AGGNE_LOGO-2.png' },
    { title: 'AGP', imageUrl: '/ABIT_IMAGES/AGP.png' },
  ],
}