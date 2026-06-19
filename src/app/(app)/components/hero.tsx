'use client'

import { scrollToSection } from '@/hooks/use-smooth-scroll'
import { useEffect, useState } from 'react'
import HeroSkeleton from './hero-skeleton'

type MetaItem = { k: string; v: string }

export default function Hero() {
  const [metaStrip, setMetaStrip] = useState<MetaItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/meta?sort=createdAt&limit=10')
      .then(res => res.json())
      .then(data => {
        const items: MetaItem[] = (data.docs ?? []).map((item: { key: string; value: string }) => ({
          k: item.key,
          v: item.value,
        }))
        setMetaStrip(items)
        setLoading(false)
      })
      .catch(() => { setLoading(false) })
  }, [])
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
          className='mt-24 pt-7 border-t border-line-soft reveal'
          data-d='3'
        >
          {loading ? (
            <HeroSkeleton />
          ) : (
            <div className='flex flex-wrap gap-[clamp(28px,5vw,64px)]'>
              {metaStrip.map(({ k, v }: MetaItem) => (
                <div key={k} className='flex flex-col gap-1.25'>
                  <span className='font-mono-face text-[11.5px] tracking-[0.14em] uppercase text-faint'>
                    {k}
                  </span>
                  <span className='text-[15px] text-copy'>{v}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
