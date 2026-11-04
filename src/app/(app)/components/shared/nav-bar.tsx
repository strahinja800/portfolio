'use client'

import { LINK_CLASS, useNavBarLinks } from '@/hooks/nav-bar-links'
import Link from 'next/link'
import SectionLink from './section-link'
import { ThemeToggle } from './theme-toggle'

export default function NavBar() {
  const { activeSection, scrolled, menuOpen, setMenuOpen } = useNavBarLinks()

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 border-b-2 border-accent',
        'transition-[background,backdrop-filter] duration-[400ms]',
        scrolled
          ? 'bg-[var(--nav-scrolled-bg)] backdrop-blur-[14px] backdrop-saturate-[140%]'
          : '',
      ].join(' ')}
    >
      <div className='wrap flex items-center justify-between h-[66px]'>
        {/* Brand */}
        <SectionLink
          id='top'
          className='font-mono-face text-[13px] font-bold tracking-[0.06em] uppercase inline-flex items-center gap-[7px] text-copy'
        >
          <span className='text-accent'>&gt;</span>
          Strahinja&nbsp;Ković
          <span className='text-accent [animation:blink_1.1s_step-end_infinite]'>
            _
          </span>
        </SectionLink>

        {/* Nav links */}
        <nav
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
          <SectionLink
            id='work'
            className={LINK_CLASS('work', activeSection)}
          >
            <span className='text-faint mr-1.5'>01</span>Work
          </SectionLink>
          <SectionLink
            id='about'
            className={LINK_CLASS('about', activeSection)}
          >
            <span className='text-faint mr-1.5'>02</span>About
          </SectionLink>
          <SectionLink
            id='contact'
            className={LINK_CLASS('contact', activeSection)}
          >
            <span className='text-faint mr-1.5'>03</span>Contact
          </SectionLink>
          <Link
            href='/web-development'
            className={LINK_CLASS('web-development', activeSection)}
          >
            <span className='text-faint mr-1.5'>04</span>Services
          </Link>
          <ThemeToggle />
          <SectionLink
            id='contact'
            className='bg-accent text-accent-ink font-bold px-[14px] py-[9px] whitespace-nowrap transition-opacity duration-[250ms] hover:opacity-85'
          >
            Available for work
          </SectionLink>
        </nav>

        {/* Mobile toggle */}
        <button
          className='min-[881px]:hidden font-mono-face text-[12px] tracking-[0.1em] uppercase text-copy bg-transparent border-2 border-line px-[13px] py-[7px] cursor-pointer'
          aria-label='Toggle menu'
          onClick={() => setMenuOpen(o => !o)}
        >
          Menu
        </button>
      </div>
    </header>
  )
}
