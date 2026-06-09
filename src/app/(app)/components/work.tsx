'use client'

import { PROJECTS, STACK_TAG } from '@/constants/work-consts'
import Link from 'next/link'

export default function Work() {
  return (
    <section
      className='py-[clamp(80px,13vh,160px)]'
      id='work'
    >
      <div className='wrap'>
        {/* Section head */}
        <div className='flex items-baseline justify-between gap-6 pb-10 border-b border-line-soft mb-14 reveal'>
          <h2 className='font-display-face text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.02em] leading-[1.05]'>
            Selected work
          </h2>
          <span className='font-mono-face text-[13px] text-faint whitespace-nowrap'>
            [ 01 / Work ]
          </span>
        </div>

        {/* Projects */}
        {PROJECTS.map((p, i) => (
          <article
            key={p.num}
            className={[
              'group/project grid items-center gap-[clamp(28px,5vw,72px)] py-[clamp(48px,7vw,88px)] max-[880px]:grid-cols-1 reveal',
              i === 0
                ? 'grid-cols-[1fr_1.05fr] pt-0 border-t-0'
                : 'grid-cols-[1fr_1.05fr] border-t border-line-soft',
            ].join(' ')}
          >
            {/* Info — conditionally ordered for flip */}
            <div className={p.flip ? 'max-[880px]:order-2' : ''}>
              <div className='font-mono-face text-[13px] text-accent mb-[18px]'>
                {p.num}
              </div>
              <h3 className='font-display-face text-[clamp(26px,3.4vw,40px)] font-semibold tracking-[-0.02em] leading-[1.05] mb-4'>
                {p.title}
              </h3>
              <p className='text-muted max-w-[46ch] mb-[26px]'>{p.desc}</p>
              <div className='flex flex-wrap gap-2 mb-[30px]'>
                {p.stack.map(t => (
                  <span
                    key={t}
                    className={STACK_TAG}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <Link
                href='#contact'
                className="relative inline-flex items-center gap-[9px] whitespace-nowrap font-mono-face text-[13.5px] text-copy after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-px after:bg-accent after:origin-left after:scale-x-0 after:transition-transform after:duration-300 group-hover/project:after:scale-x-100"
              >
                View case study{' '}
                <span className='transition-transform duration-250 group-hover/project:translate-x-0.75 group-hover/project:-translate-y-0.75'>
                  ↗
                </span>
              </Link>
            </div>

            {/* Media */}
            <div
              className={[
                'border border-line-soft rounded-[var(--radius)] overflow-hidden bg-surface-2',
                'transition-[transform,border-color] duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)]',
                'group-hover/project:-translate-y-1.5 group-hover/project:border-line',
                p.flip
                  ? 'max-[880px]:order-1 min-[881px]:-order-1'
                  : 'max-[880px]:mt-2',
              ].join(' ')}
            >
              <div
                className='ph relative aspect-[4/3] [background:repeating-linear-gradient(135deg,oklch(0.245_0.009_264)_0_12px,oklch(0.225_0.009_264)_12px_24px)] grid place-items-center'
                data-label={p.label}
              >
                <div className='absolute inset-x-0 top-0 h-[34px] flex items-center gap-[7px] px-3.5 border-b border-line-soft bg-[oklch(0.20_0.008_264/0.7)]'>
                  <i className='size-[9px] rounded-full bg-line block not-italic' />
                  <i className='size-[9px] rounded-full bg-line block not-italic' />
                  <i className='size-[9px] rounded-full bg-line block not-italic' />
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
