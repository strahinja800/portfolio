'use client'

import { useEffect, useState } from 'react'
import HeroPortrait from './hero-portrait'
import HeroSkeleton from './hero-skeleton'
import SectionLink from './shared/section-link'

type MetaItem = { k: string; v: string }

const META_CELL =
  'flex flex-col gap-1.5 px-5 pt-4.5 pb-1 border-l border-dashed border-line first:border-l-0 first:pl-0 max-[880px]:odd:border-l-0 max-[880px]:odd:pl-0'

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
    <section className='pt-[clamp(112px,16vh,168px)] pb-[clamp(48px,8vh,96px)]'>
      <div className='wrap'>
        <div className='grid grid-cols-[minmax(0,1fr)_320px] gap-[clamp(40px,6vw,72px)] items-start max-[880px]:grid-cols-1'>
          <div className='min-w-0'>
            {/* Status */}
            <p className='mb-9 font-mono-face text-[11px] tracking-[0.16em] uppercase text-faint reveal'>
              Frontend web developer · Open to full-time, remote EU
            </p>

            {/* Headline */}
            <h1
              className='font-display-face text-[clamp(34px,5.6vw,82px)] leading-[0.93] tracking-[-0.03em] uppercase reveal'
              data-d='1'
            >
              Building
              <br />
              things that
              <br />
              <span className='grad'>actually ship.</span>
            </h1>

            {/* Lede */}
            <p
              className='mt-11 pt-7 border-t border-dashed border-line text-[clamp(16px,1.6vw,18px)] leading-[1.6] text-muted max-w-[50ch] reveal'
              data-d='2'
            >
              I&apos;m{' '}
              <strong className='text-copy font-semibold'>Strahinja Ković</strong>,
              a frontend developer who designs and builds web products end to
              end, from data models to the pixels users actually touch.
            </p>

            {/* CTAs */}
            <div
              className='flex flex-wrap gap-3 mt-9 reveal'
              data-d='2'
            >
              <SectionLink
                id='work'
                className='group inline-flex items-center gap-3 text-[14px] font-bold tracking-[0.06em] uppercase px-6.5 py-4 bg-accent text-accent-ink transition-opacity duration-250 hover:opacity-85'
              >
                View work{' '}
                <span className='transition-transform duration-250 group-hover:translate-x-0.75 group-hover:-translate-y-0.75'>
                  ↗
                </span>
              </SectionLink>
              <SectionLink
                id='contact'
                className='inline-flex items-center text-[14px] font-bold tracking-[0.06em] uppercase px-6 py-3.75 border border-muted bg-surface text-copy transition-colors duration-250 hover:border-accent hover:text-accent'
              >
                Contact
              </SectionLink>
            </div>
          </div>

          <div
            className='reveal'
            data-d='2'
          >
            <HeroPortrait />
          </div>
        </div>

        {/* Meta strip */}
        <div
          className='mt-16 reveal'
          data-d='3'
        >
          {loading ? (
            <HeroSkeleton />
          ) : (
            <div className='grid grid-cols-4 border-t-2 border-accent max-[880px]:grid-cols-2'>
              {metaStrip.map(({ k, v }: MetaItem, i: number) => (
                <div
                  key={k}
                  className={META_CELL}
                >
                  <span className='font-mono-face text-[11px] tracking-[0.14em] uppercase text-faint'>
                    {String.fromCharCode(65 + i)} · {k}
                  </span>
                  <span className='font-display-face font-semibold font-stretch-105% text-[clamp(15px,1.3vw,18px)] leading-[1.45] text-copy'>
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
