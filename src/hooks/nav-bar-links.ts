'use client'

import { useEffect, useState } from 'react'

export function useNavBarLinks() {
  const [activeSection, setActiveSection] = useState<string | null>(null)
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24)
      const pos = window.scrollY + window.innerHeight * 0.35
      let current: string | null = null
      ;['work', 'about', 'contact'].forEach(id => {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= pos) current = id
      })
      setActiveSection(current)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return { activeSection, scrolled, menuOpen, setMenuOpen }
}

export const LINK_CLASS = (section: string, activeSection: string | null) =>
  [
    'relative py-[6px] transition-colors duration-[250ms]',
    "after:content-[''] after:absolute after:left-0 after:bottom-0",
    'after:h-px after:bg-accent after:origin-left after:transition-[transform] after:duration-300',
    activeSection === section
      ? 'text-copy after:scale-x-100'
      : 'text-muted hover:text-copy after:scale-x-0 hover:after:scale-x-100',
  ].join(' ')
