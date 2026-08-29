'use client'

import { useEffect, useState } from 'react'
import {
  SECTION_INDEX,
  SECTION_TITLE,
  STACK_TAG,
} from '@/constants/work-consts'
import AboutSkeleton from './about-skeleton'

export default function About() {
  const [stacks, setStacks] = useState<{ label: string; items: string[] }[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/skills?limit=20&sort=createdAt')
      .then(res => res.json())
      .then(data => {
        const docs = data.docs ?? []
        setStacks(
          docs.map((doc: any) => ({
            label: doc.label as string,
            items: (doc.skills ?? doc.skill ?? []).map((s: any) => s.label as string),
          })),
        )
        setLoading(false)
      })
      .catch(err => {
        console.error('Error fetching skills:', err)
        setLoading(false)
      })
  }, [])

  return (
    <section
      className='py-[clamp(56px,9vh,110px)]'
      id='about'
    >
      <div className='wrap'>
        {/* Section head */}
        <div className='flex items-end justify-between gap-6 pb-[22px] border-b-2 border-accent mb-10 reveal'>
          <h2 className={SECTION_TITLE}>About</h2>
          <span className={SECTION_INDEX}>[ 02 / About ]</span>
        </div>

        <div className='grid grid-cols-[1.15fr_0.85fr] gap-[clamp(36px,5vw,64px)] items-start max-[880px]:grid-cols-1'>
          {/* Bio */}
          <div className='reveal'>
            <p className='font-display-face text-[clamp(22px,3vw,30px)] leading-[1.16] tracking-[-0.025em] uppercase'>
              I build web products that are{' '}
              <em className='text-accent not-italic'>
                fast, reliable and pleasant to use
              </em>{' '}
              — and just as pleasant to maintain.
            </p>
            <p className='mt-[22px] text-[14px] leading-[1.8] text-muted max-w-[58ch]'>
              My favorite work lives at the seams: the API contract between
              teams, the migration nobody wants to do, the loading state that
              makes an app feel instant. I care about the whole path from a
              database index to a button&apos;s hover state, and I write code
              other developers actually enjoy inheriting.
            </p>
          </div>

          {/* Stacks */}
          <div
            className='flex flex-col gap-6 reveal'
            data-d='1'
          >
            {loading ? (
              <AboutSkeleton />
            ) : (
              stacks.map(group => (
                <div key={group.label}>
                  <span className='block font-mono-face text-[10.5px] tracking-[0.2em] uppercase text-accent mb-2.75'>
                    {group.label}
                  </span>
                  <ul className='flex flex-wrap gap-[7px] list-none p-0 m-0'>
                    {group.items.map((item: string) => (
                      <li key={item}>
                        <span className={STACK_TAG}>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
