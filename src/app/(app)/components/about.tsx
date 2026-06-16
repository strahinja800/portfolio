'use client'

import { useEffect, useState } from 'react'
import { STACK_TAG } from '@/constants/work-consts'

export default function About() {
  const [stacks, setStacks] = useState<{ label: string; items: string[] }[]>([])

  useEffect(() => {
    fetch('/api/skills?limit=20&sort=createdAt')
      .then(res => res.json())
      .then(data => {
        const docs = data.docs ?? []
        setStacks(
          docs.map((doc: any) => ({
            label: doc.label as string,
            items: (doc.skill ?? []).map((s: any) => s.label as string),
          })),
        )
      })
      .catch(err => console.error('Error fetching skills:', err))
  }, [])

  return (
    <section
      className='py-[clamp(80px,13vh,160px)]'
      id='about'
    >
      <div className='wrap'>
        {/* Section head */}
        <div className='flex items-baseline justify-between gap-6 pb-10 border-b border-line-soft mb-14 reveal'>
          <h2 className='font-display-face text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.02em] leading-[1.05]'>
            About
          </h2>
          <span className='font-mono-face text-[13px] text-faint whitespace-nowrap'>
            [ 02 / About ]
          </span>
        </div>

        <div className='grid grid-cols-[1.1fr_0.9fr] gap-[clamp(40px,6vw,90px)] items-start max-[880px]:grid-cols-1'>
          {/* Bio */}
          <div className='reveal'>
            <p className='text-[clamp(19px,2.4vw,25px)] leading-[1.55] tracking-[-0.01em]'>
              I build web products that are{' '}
              <em className='text-accent not-italic'>
                fast, reliable, and pleasant to use
              </em>{' '}
              — and just as pleasant to maintain.
            </p>
            <p className='mt-[22px] text-[17px] leading-[1.65] text-muted'>
              My favorite work lives at the seams: the API contract between
              teams, the migration nobody wants to do, the loading state that
              makes an app feel instant. I care about the whole path from a
              database index to a button&apos;s hover state, and I write code
              other developers actually enjoy inheriting.
            </p>
          </div>

          {/* Stacks */}
          <div
            className='flex flex-col gap-5 reveal'
            data-d='1'
          >
            {stacks.map(group => (
              <div key={group.label}>
                <span className='block font-mono-face text-[11px] tracking-[0.14em] uppercase text-accent mb-2.5'>
                  {group.label}
                </span>
                <ul className='flex flex-wrap gap-2 list-none p-0 m-0'>
                  {group.items.map((item: string) => (
                    <li key={item}>
                      <span className={STACK_TAG}>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
