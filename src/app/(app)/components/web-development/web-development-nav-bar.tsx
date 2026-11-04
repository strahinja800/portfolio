'use client'

import { LINK_CLASS, useNavBarLinks } from '@/hooks/nav-bar-links'
import Link from 'next/link'
import { ThemeToggle } from '../shared/theme-toggle'
import SectionLink from '../shared/section-link'

const SECTIONS = ['services', 'process', 'faq', 'contact'] as const

const LINKS: { id: (typeof SECTIONS)[number]; num: string; label: string }[] = [
  { id: 'services', num: '01', label: 'Services' },
  { id: 'process', num: '02', label: 'Process' },
  { id: 'faq', num: '03', label: 'FAQ' },
]

export default function WebDevelopmentNavBar() {
  const { activeSection, scrolled, menuOpen, setMenuOpen } = useNavBarLinks(SECTIONS)

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 border-b-2 border-accent',
        'transition-[background,backdrop-filter] duration-[400ms]',
        scrolled || menuOpen
          ? 'bg-[var(--nav-scrolled-bg)] backdrop-blur-[14px] backdrop-saturate-[140%]'
          : '',
      ].join(' ')}
    >
      <div className='wrap flex items-center justify-between gap-3 h-[66px]'>
        {/* Brand — back to the portfolio */}
        <Link
          href='/'
          className='font-mono-face text-[13px] font-bold tracking-[0.06em] uppercase inline-flex items-center gap-[7px] text-copy'
        >
          <span className='text-accent'>&gt;</span>
          Strahinja&nbsp;Ković
          <span className='text-accent [animation:blink_1.1s_step-end_infinite]'>_</span>
        </Link>

        {/* Nav links */}
        <nav
          id='web-development-menu'
          aria-label='Page sections'
          className={[
            'font-mono-face text-[12px] tracking-[0.1em] uppercase',
            'min-[881px]:flex min-[881px]:flex-row min-[881px]:items-center min-[881px]:gap-[26px]',
            'min-[881px]:static min-[881px]:p-0 min-[881px]:bg-transparent min-[881px]:border-0',
            menuOpen
              ? [
                  'flex flex-col items-start gap-2',
                  'absolute top-[66px] inset-x-0',
                  'px-[clamp(16px,3vw,40px)] pt-[18px] pb-[26px]',
                  'bg-[var(--nav-menu-bg)] backdrop-blur-[14px]',
                  'border-b-2 border-line-soft',
                ].join(' ')
              : 'hidden',
          ].join(' ')}
          onClick={() => setMenuOpen(false)}
        >
          {LINKS.map(({ id, num, label }) => (
            <SectionLink
              key={id}
              id={id}
              className={LINK_CLASS(id, activeSection)}
            >
              <span className='text-faint mr-1.5'>{num}</span>
              {label}
            </SectionLink>
          ))}
          <Link
            href='/'
            className={LINK_CLASS('portfolio', activeSection)}
          >
            <span className='text-faint mr-1.5'>04</span>Portfolio
          </Link>
          <ThemeToggle />
          <SectionLink
            id='contact'
            className='max-[880px]:hidden bg-accent text-accent-ink font-bold px-[14px] py-[9px] whitespace-nowrap transition-opacity duration-[250ms] hover:opacity-85'
          >
            Get a Free Quote
          </SectionLink>
        </nav>

        {/* Mobile — quote CTA stays visible next to the menu toggle */}
        <div className='min-[881px]:hidden flex items-center gap-2'>
          <SectionLink
            id='contact'
            className='font-mono-face text-[12px] font-bold tracking-[0.1em] uppercase bg-accent text-accent-ink px-[13px] py-[9px] whitespace-nowrap'
          >
            Free Quote
          </SectionLink>
          <button
            type='button'
            className='font-mono-face text-[12px] tracking-[0.1em] uppercase text-copy bg-transparent border-2 border-line px-[13px] py-[7px] cursor-pointer'
            aria-label='Toggle menu'
            aria-expanded={menuOpen}
            aria-controls='web-development-menu'
            onClick={() => setMenuOpen(o => !o)}
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  )
}
