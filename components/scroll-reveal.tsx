'use client'

import { useEffect, useRef, useState, type ReactNode } from 'react'

export function ScrollReveal({ children }: { children: ReactNode }) {
  const elementRef = useRef<HTMLDivElement>(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12 },
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <div ref={elementRef} className={visible ? 'animate-fade-up' : 'opacity-0'}>
      {children}
    </div>
  )
}
