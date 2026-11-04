import {
  BUTTON_ARROW,
  BUTTON_PRIMARY,
  BUTTON_SECONDARY,
} from '@/constants/web-development-consts'
import Link from 'next/link'
import SectionLink from '../shared/section-link'

const FACTS = [
  { k: 'For', v: 'Small & medium businesses' },
  { k: 'Clients', v: 'Serbia & international' },
  { k: 'You work with', v: 'The developer, directly' },
  { k: 'Quote', v: 'Free & individual' },
]

/* no .reveal here — the hero must be visible instantly for ad traffic */
export default function WebDevelopmentHero() {
  return (
    <section className='pt-[clamp(108px,15vh,168px)] pb-[clamp(48px,8vh,96px)]'>
      <div className='wrap'>
        {/* Status */}
        <div className='mb-7 min-[881px]:mb-9'>
          <span className='inline-flex items-center gap-3.5 font-mono-face text-[11.5px] tracking-[0.18em] uppercase text-muted'>
            <span className='size-[9px] bg-accent shadow-[0_0_16px_var(--accent)] shrink-0' />
            Freelance web development
          </span>
        </div>

        {/* Headline */}
        <h1 className='font-display-face text-[clamp(32px,6.2vw,88px)] leading-[0.9] tracking-[-0.045em] uppercase'>
          Freelance Web Developer
          <span className='sr-only'> – </span>
          <br />
          <span className='grad'>Websites for Businesses</span>
        </h1>

        {/* ASCII rule */}
        <div
          className='font-mono-face text-[13px] text-line-soft overflow-hidden whitespace-nowrap select-none my-[30px]'
          aria-hidden
        >
          ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
        </div>

        {/* Lede + CTAs */}
        <div className='grid grid-cols-[1.1fr_0.9fr] gap-[clamp(28px,5vw,56px)] items-end max-[880px]:grid-cols-1 max-[880px]:items-start'>
          <p className='text-[clamp(14px,1.6vw,15px)] leading-[1.8] text-muted max-w-[52ch]'>
            I design and develop modern, fast and responsive websites that help
            businesses build a strong online presence and reach more customers.
          </p>

          <div className='flex flex-wrap gap-3 min-[881px]:justify-end max-[560px]:flex-col'>
            <SectionLink
              id='contact'
              className={BUTTON_PRIMARY}
            >
              Get a Free Quote <span className={BUTTON_ARROW}>↗</span>
            </SectionLink>
            <Link
              href='/#work'
              className={BUTTON_SECONDARY}
            >
              View My Work <span className={BUTTON_ARROW}>↗</span>
            </Link>
          </div>
        </div>

        {/* Facts strip — same block as the home meta strip */}
        <dl className='mt-11 grid grid-cols-4 gap-0.5 bg-line-soft border-2 border-line-soft max-[880px]:grid-cols-2'>
          {FACTS.map(({ k, v }) => (
            <div
              key={k}
              className='flex flex-col gap-2 bg-surface px-5 py-4.5 max-[560px]:px-4'
            >
              <dt className='font-mono-face text-[10.5px] tracking-[0.18em] uppercase text-faint'>
                {k}
              </dt>
              <dd className='font-mono-face text-[14px] font-medium text-copy'>{v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  )
}
