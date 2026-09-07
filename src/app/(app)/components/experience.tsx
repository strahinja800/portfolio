'use client'

import { SECTION_INDEX, SECTION_TITLE } from '@/constants/work-consts'
import { useEffect, useState } from 'react'
import ExperienceSkeleton from './experience-skeleton'

type ExperienceEntry = {
  id: string
  role: string
  period: string
  description: string
}

export default function Experience() {
  const [entries, setEntries] = useState<ExperienceEntry[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/experience?limit=50&sort=order')
      .then(res => res.json())
      .then(data => {
        setEntries(data.docs ?? [])
        setLoading(false)
      })
      .catch(() => { setLoading(false) })
  }, [])

  return (
    <section
      className='py-[clamp(56px,9vh,110px)]'
      id='experience'
    >
      <div className='wrap'>
        {/* Section head */}
        <div className='flex flex-wrap items-end justify-between gap-x-6 gap-y-2 pb-[22px] border-b-2 border-accent reveal'>
          <h2 className={SECTION_TITLE}>
            Freelance
            <br />
            Experience
          </h2>
          <span className={SECTION_INDEX}>[ 02 / Experience ]</span>
        </div>

        <p className='mt-[18px] mb-2 font-mono-face text-[12px] tracking-[0.12em] uppercase text-muted reveal'>
          1+ year building for clients, end to end.
        </p>

        {/* Entries */}
        {loading ? (
          <ExperienceSkeleton />
        ) : entries.length === 0 ? (
          <p className='py-10 text-[13.5px] text-muted'>
            More engagements coming soon.
          </p>
        ) : (
          entries.map((e, i) => (
            <article
              key={`experience-${e.id}`}
              className={[
                'flex items-start gap-[clamp(20px,2.4vw,30px)] py-[clamp(24px,3.4vw,30px)]',
                'max-[640px]:flex-col',
                i === entries.length - 1 ? '' : 'border-b border-line-soft',
              ].join(' ')}
            >
              <span
                className='shrink-0 font-display-face text-[clamp(40px,5.5vw,56px)] leading-[0.8] text-transparent [-webkit-text-stroke:2px_var(--line)] w-[86px]'
                aria-hidden
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              <div className='flex flex-col items-start gap-[10px] flex-1'>
                <div className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 w-full'>
                  <h3 className='font-display-face text-[clamp(20px,2.4vw,26px)] leading-[1.02] tracking-[-0.02em] uppercase'>
                    {e.role}
                  </h3>
                  <span className='font-mono-face text-[11px] tracking-[0.14em] uppercase text-faint whitespace-nowrap'>
                    {e.period}
                  </span>
                </div>
                <p className='text-[13.5px] leading-[1.75] text-muted max-w-[62ch]'>
                  {e.description}
                </p>
              </div>
            </article>
          ))
        )}
      </div>
    </section>
  )
}
