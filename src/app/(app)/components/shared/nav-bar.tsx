'use client'

import { LINK_CLASS, useNavBarLinks } from '@/hooks/nav-bar-links'
import { scrollToSection } from '@/hooks/use-smooth-scroll'

export default function NavBar() {
  const { activeSection, scrolled, menuOpen, setMenuOpen } = useNavBarLinks()

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 border-b',
        'transition-[background,border-color,backdrop-filter] duration-[400ms]',
        scrolled
          ? 'bg-[oklch(0.165_0.006_264/0.72)] backdrop-blur-[14px] backdrop-saturate-[140%] border-line-soft'
          : 'border-transparent',
      ].join(' ')}
    >
      <div className='wrap flex items-center justify-between h-[72px]'>
        {/* Brand */}
        <a
          href='#top'
          onClick={e => { e.preventDefault(); scrollToSection('top') }}
          className='font-mono-face text-[14px] tracking-[0.02em] inline-flex items-center gap-[9px] text-copy'
        >
          <span className='size-[7px] rounded-full bg-accent [animation:pulse_2.6s_ease-in-out_infinite]' />
          Strahinja&nbsp;Ković
        </a>

        {/* Nav links */}
        <nav
          className={[
            'font-mono-face text-[13px] tracking-[0.02em]',
            'min-[881px]:flex min-[881px]:flex-row min-[881px]:items-center min-[881px]:gap-[30px]',
            'min-[881px]:static min-[881px]:p-0 min-[881px]:bg-transparent min-[881px]:border-0',
            menuOpen
              ? [
                  'flex flex-col items-start gap-1',
                  'absolute top-[72px] inset-x-0',
                  'px-[clamp(20px,5vw,72px)] pt-[18px] pb-[26px]',
                  'bg-[oklch(0.165_0.006_264/0.96)] backdrop-blur-[14px]',
                  'border-b border-line-soft',
                ].join(' ')
              : 'hidden',
          ].join(' ')}
          onClick={() => setMenuOpen(false)}
        >
          <a
            href='#work'
            onClick={e => { e.preventDefault(); scrollToSection('work') }}
            className={LINK_CLASS('work', activeSection)}
          >
            <span className='text-faint mr-1.5'>01</span>Work
          </a>
          <a
            href='#about'
            onClick={e => { e.preventDefault(); scrollToSection('about') }}
            className={LINK_CLASS('about', activeSection)}
          >
            <span className='text-faint mr-1.5'>02</span>About
          </a>
          <a
            href='#contact'
            onClick={e => { e.preventDefault(); scrollToSection('contact') }}
            className={LINK_CLASS('contact', activeSection)}
          >
            <span className='text-faint mr-1.5'>03</span>Contact
          </a>
          <a
            href='#contact'
            onClick={e => { e.preventDefault(); scrollToSection('contact') }}
            className='border border-line rounded-full px-[18px] py-[9px] text-copy whitespace-nowrap transition-[border-color,background] duration-[250ms] hover:border-accent hover:bg-accent-soft'
          >
            Available for work
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className='min-[881px]:hidden font-mono-face text-[13px] text-copy bg-transparent border border-line rounded-full px-[14px] py-[8px] cursor-pointer'
          aria-label='Toggle menu'
          onClick={() => setMenuOpen(o => !o)}
        >
          Menu
        </button>
      </div>
    </header>
  )
}
