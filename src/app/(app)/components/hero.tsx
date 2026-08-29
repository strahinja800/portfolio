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
    <section className='pt-[clamp(96px,15vh,168px)] pb-[clamp(48px,8vh,96px)]'>
      <div className='wrap'>
        {/* Status */}
        <div className='mb-9 reveal'>
          <span className='inline-flex items-center gap-3.5 font-mono-face text-[11.5px] tracking-[0.18em] uppercase text-muted'>
            <span className='size-[9px] bg-accent shadow-[0_0_16px_var(--accent)] shrink-0' />
            Open to full-time roles · Remote / Europe
          </span>
        </div>

        {/* Headline */}
        <h1
          className='font-display-face text-[clamp(34px,6.6vw,96px)] leading-[0.84] tracking-[-0.045em] uppercase reveal'
          data-d='1'
        >
          Frontend web
          <br />
          developer building
          <br />
          <span className='grad'>things that ship.</span>
        </h1>

        {/* ASCII rule */}
        <div
          className='font-mono-face text-[13px] text-line-soft overflow-hidden whitespace-nowrap select-none my-[30px] reveal'
          data-d='2'
          aria-hidden
        >
          ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
        </div>

        {/* Lede + CTAs */}
        <div
          className='grid grid-cols-[1.1fr_0.9fr] gap-[clamp(28px,5vw,56px)] items-end max-[880px]:grid-cols-1 max-[880px]:items-start reveal'
          data-d='2'
        >
          <p className='text-[clamp(14px,1.6vw,15px)] leading-[1.8] text-muted max-w-[50ch]'>
            <span className='text-accent'>$</span> cat about.txt
            <br />
            I&apos;m{' '}
            <strong className='text-copy font-bold'>Strahinja Ković</strong> — I
            design and build web products end to end, from data models to the
            pixels users actually touch.
          </p>

          <div className='flex flex-wrap gap-3 min-[881px]:justify-end'>
            <a
              href='#work'
              onClick={e => { e.preventDefault(); scrollToSection('work') }}
              className='group inline-flex items-center gap-3 font-mono-face text-[12.5px] font-bold tracking-[0.08em] uppercase px-5.5 py-3.5 bg-accent text-accent-ink transition-opacity duration-250 hover:opacity-85'
            >
              View work{' '}
              <span className='transition-transform duration-250 group-hover:translate-x-0.75 group-hover:-translate-y-0.75'>
                ↗
              </span>
            </a>
            <a
              href='#contact'
              onClick={e => { e.preventDefault(); scrollToSection('contact') }}
              className='group inline-flex items-center gap-3 font-mono-face text-[12.5px] font-bold tracking-[0.08em] uppercase px-5.5 py-3.5 border-2 border-line text-copy transition-colors duration-250 hover:border-accent hover:text-accent'
            >
              Get in touch{' '}
              <span className='transition-transform duration-250 group-hover:translate-x-0.75 group-hover:-translate-y-0.75'>
                ↗
              </span>
            </a>
          </div>
        </div>

        {/* Meta strip */}
        <div
          className='mt-11 reveal'
          data-d='3'
        >
          {loading ? (
            <HeroSkeleton />
          ) : (
            <div className='grid grid-cols-4 gap-0.5 bg-line-soft border-2 border-line-soft max-[880px]:grid-cols-2'>
              {metaStrip.map(({ k, v }: MetaItem) => (
                <div
                  key={k}
                  className='flex flex-col gap-2 bg-surface px-5 py-4.5'
                >
                  <span className='font-mono-face text-[10.5px] tracking-[0.18em] uppercase text-faint'>
                    {k}
                  </span>
                  <span className='font-mono-face text-[15px] font-medium text-copy'>
                    {v}
                  </span>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
