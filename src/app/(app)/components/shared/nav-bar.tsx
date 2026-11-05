'use client'

import type { NavConfig } from '@/constants/nav-links'
import { LINK_CLASS, useNavBarLinks } from '@/hooks/nav-bar-links'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useMemo } from 'react'
import SectionLink from './section-link'
import { ThemeToggle } from './theme-toggle'

const BRAND_CLASS =
  'font-display-face text-[17px] tracking-[0.02em] uppercase text-copy'

const CTA_CLASS =
  'bg-accent text-accent-ink font-bold px-[14px] py-[9px] whitespace-nowrap transition-opacity duration-[250ms] hover:opacity-85'

export default function NavBar({ nav }: { nav: NavConfig }) {
  const sections = useMemo(
    () => [
      ...new Set([
        ...nav.links.flatMap(link => ('id' in link ? [link.id] : [])),
        nav.cta.id,
      ]),
    ],
    [nav],
  )
  const { activeSection, scrolled, menuOpen, setMenuOpen } =
    useNavBarLinks(sections)
  const onHome = usePathname() === '/'

  return (
    <header
      className={[
        'fixed inset-x-0 top-0 z-50 border-b border-line',
        'transition-[background,backdrop-filter] duration-[400ms]',
        scrolled || menuOpen
          ? 'bg-[var(--nav-scrolled-bg)] backdrop-blur-[14px] backdrop-saturate-[140%]'
          : '',
      ].join(' ')}
    >
      <div className='wrap flex items-center justify-between gap-3 h-[66px]'>
        {/* Brand — scrolls to top on home, links back to it elsewhere */}
        {onHome ? (
          <SectionLink
            id='top'
            className={BRAND_CLASS}
          >
            Strahinja<span className='text-accent'>.</span>
          </SectionLink>
        ) : (
          <Link
            href='/'
            className={BRAND_CLASS}
          >
            Strahinja<span className='text-accent'>.</span>
          </Link>
        )}

        {/* Nav links */}
        <nav
          id='site-menu'
          aria-label='Main'
          className={[
            'text-[13px] font-medium tracking-[0.08em] uppercase',
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
          {nav.links.map((link, i) => {
            const num = (
              <span className='text-faint mr-1.5'>
                {String(i + 1).padStart(2, '0')}
              </span>
            )
            return 'id' in link ? (
              <SectionLink
                key={link.label}
                id={link.id}
                className={LINK_CLASS(link.id, activeSection)}
              >
                {num}
                {link.label}
              </SectionLink>
            ) : (
              <Link
                key={link.label}
                href={link.href}
                className={LINK_CLASS(link.href, activeSection)}
              >
                {num}
                {link.label}
              </Link>
            )
          })}
          <ThemeToggle />
          <SectionLink
            id={nav.cta.id}
            className={`max-[880px]:hidden ${CTA_CLASS}`}
          >
            {nav.cta.label}
          </SectionLink>
        </nav>

        {/* Mobile — CTA stays visible next to the menu toggle */}
        <div className='min-[881px]:hidden flex items-center gap-2'>
          <SectionLink
            id={nav.cta.id}
            className={`text-[13px] tracking-[0.08em] uppercase ${CTA_CLASS}`}
          >
            {nav.cta.mobileLabel}
          </SectionLink>
          <button
            type='button'
            className='text-[13px] font-medium tracking-[0.08em] uppercase text-copy bg-transparent border border-line px-[13px] py-[7px] cursor-pointer'
            aria-label='Toggle menu'
            aria-expanded={menuOpen}
            aria-controls='site-menu'
            onClick={() => setMenuOpen(o => !o)}
          >
            Menu
          </button>
        </div>
      </div>
    </header>
  )
}
