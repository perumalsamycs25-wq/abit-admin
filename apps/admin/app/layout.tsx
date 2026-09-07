import type { Metadata } from 'next'
import './styles.css'

export const metadata: Metadata = { title: 'ABIT CMS' }
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <html lang="en"><body><style>{`@keyframes admin-reveal { from { opacity: 0; transform: translateY(20px) scale(.99); filter: blur(2px); } to { opacity: 1; transform: translateY(0) scale(1); filter: blur(0); } } .login-card, .sidebar, .metrics > div, .editor-panel { animation: admin-reveal .65s cubic-bezier(.16,1,.3,1) both; } .metrics > div:nth-child(2) { animation-delay: .08s; } .metrics > div:nth-child(3) { animation-delay: .16s; } .editor-panel { animation-delay: .24s; } @media (prefers-reduced-motion: reduce) { .login-card, .sidebar, .metrics > div, .editor-panel { animation: none; } }`}</style>{children}</body></html>
}