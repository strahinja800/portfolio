'use client'

import { META_STRIP } from '@/constants/meta-strip'
import { scrollToSection } from '@/hooks/use-smooth-scroll'

export default function Hero() {
  return (
    <section className='pt-[clamp(100px,16vh,180px)] pb-[clamp(60px,10vh,120px)]'>
      <div className='wrap'>
        {/* Status pill */}
        <div className='mb-12 reveal'>
          <span className='inline-flex items-center gap-2.5 font-mono-face text-[12.5px] tracking-[0.04em] text-muted border border-line-soft bg-surface-2 rounded-full px-3.5 py-[7px] whitespace-nowrap max-[480px]:whitespace-normal'>
            <span className='size-2 rounded-full bg-[oklch(0.78_0.16_150)] shadow-[0_0_10px_oklch(0.78_0.16_150/0.8)]' />
            Open to full-time roles · Remote / Europe
          </span>
        </div>

        {/* Headline */}
        <h1
          className='font-display-face text-[clamp(40px,8.2vw,104px)] font-bold leading-[0.98] tracking-[-0.035em] mb-10 reveal'
          data-d='1'
        >
          Frontend web
          <br />
          developer building
          <br />
          <span className='grad'>things that ship.</span>
        </h1>

        {/* Lede */}
        <p
          className='text-[clamp(18px,2.3vw,23px)] leading-[1.5] text-muted max-w-[30ch] reveal'
          data-d='2'
        >
          I&apos;m{' '}
          <strong className='text-copy font-semibold'>Strahinja Ković</strong> —
          I design and build web products end to end, from data models to the
          pixels users actually touch.
        </p>

        {/* CTAs */}
        <div
          className='flex text-surface flex-wrap gap-3.5 mt-14 reveal'
          data-d='3'
        >
          <a
            href='#work'
            onClick={e => { e.preventDefault(); scrollToSection('work') }}
            className='group inline-flex items-center gap-2.5 font-mono-face text-[13.5px] tracking-[0.02em] px-5.5 py-3.5 rounded-full bg-copy font-semibold transition-transform duration-250 hover:-translate-y-0.5'
          >
            View selected work{' '}
            <span className='transition-transform duration-250 group-hover:translate-x-0.75 group-hover:-translate-y-0.75'>
              ↗
            </span>
          </a>
          <a
            href='#contact'
            onClick={e => { e.preventDefault(); scrollToSection('contact') }}
            className='group inline-flex items-center gap-2.5 font-mono-face text-[13.5px] tracking-[0.02em] px-5.5 py-3.5 rounded-full border border-line text-copy transition-[transform,background,border-color] duration-250 hover:border-accent hover:bg-accent-soft hover:-translate-y-0.5'
          >
            Get in touch{' '}
            <span className='transition-transform duration-250 group-hover:translate-x-0.75 group-hover:-translate-y-0.75'>
              ↗
            </span>
          </a>
        </div>

        {/* Meta strip */}
        <div
          className='mt-24 flex flex-wrap gap-[clamp(28px,5vw,64px)] pt-7 border-t border-line-soft reveal'
          data-d='3'
        >
          {META_STRIP.map(({ k, v }) => (
            <div
              key={k}
              className='flex flex-col gap-[5px]'
            >
              <span className='font-mono-face text-[11.5px] tracking-[0.14em] uppercase text-faint'>
                {k}
              </span>
              <span className='text-[15px] text-copy'>{v}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
