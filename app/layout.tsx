import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Poppins, Inter } from 'next/font/google'
import './globals.css'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: {
    default: 'AnuBose Institute of Technology (ABIT) | Paloncha, Telangana',
    template: '%s | AnuBose Institute of Technology',
  },
  description:
    'AnuBose Institute of Technology (ABIT) for Women, Paloncha — established 2008, approved by AICTE, affiliated to JNTU Hyderabad and graded B++ by NAAC. Always Best In Technical-education.',
  generator: 'v0.app',
  keywords: [
    'ABIT',
    'AnuBose Institute of Technology',
    'engineering college Telangana',
    'JNTUH affiliated college',
    'women engineering college Paloncha',
  ],
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#1a3a6b',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`bg-background ${inter.variable} ${poppins.variable}`}
    >
      <body className="font-sans antialiased" style={{
        // map next/font variables to the theme font families
        // @ts-expect-error CSS custom props
        '--font-sans': `var(--font-inter), ui-sans-serif, system-ui, sans-serif`,
        '--font-heading': `var(--font-poppins), ui-sans-serif, system-ui, sans-serif`,
      }}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
