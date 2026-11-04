import { STEPS } from '@/constants/web-development-consts'
import WebDevelopmentCta from './web-development-cta'
import WebDevelopmentSectionHead from './web-development-section-head'

export default function WebDevelopmentProcess() {
  return (
    <section
      id='process'
      aria-labelledby='process-title'
      className='py-[clamp(56px,9vh,110px)] scroll-mt-16'
    >
      <div className='wrap'>
        <WebDevelopmentSectionHead
          id='process'
          index='[ 03 / Process ]'
          title={
            <>
              From Idea
              <br />
              to Launch
            </>
          }
          lede='A straightforward process designed to make building your website simple and transparent.'
        />

        {/* desktop: four columns on a shared rule · mobile: vertical timeline */}
        <ol className='grid grid-cols-4 list-none p-0 m-0 max-[980px]:grid-cols-2 max-[980px]:gap-y-10 max-[620px]:grid-cols-1 max-[620px]:gap-y-0 max-[620px]:border-l-2 max-[620px]:border-line-soft max-[620px]:ml-1'>
          {STEPS.map(({ num, title, desc }, i) => (
            <li
              key={num}
              className='relative pr-[clamp(16px,2.4vw,32px)] border-t-2 border-line-soft pt-6 max-[620px]:border-t-0 max-[620px]:pt-0 max-[620px]:pb-9 max-[620px]:pl-7 max-[620px]:last:pb-0 reveal'
              data-d={String(Math.min(i, 3))}
            >
              {/* marker sits on the rule (desktop) or the timeline (mobile) */}
              <span
                className='absolute -top-[7px] left-0 size-3 bg-accent max-[620px]:top-1.5 max-[620px]:-left-[7px]'
                aria-hidden
              />
              <span className='block font-display-face text-[clamp(40px,4.6vw,56px)] leading-none tracking-[-0.04em] text-line max-[620px]:text-[34px]'>
                {num}
              </span>
              <h3 className='mt-4 font-mono-face text-[15px] font-bold tracking-[0.04em] uppercase text-copy'>
                {title}
              </h3>
              <p className='mt-2.5 text-[13.5px] leading-[1.75] text-muted'>{desc}</p>
            </li>
          ))}
        </ol>

        <WebDevelopmentCta text='Ready to start? Tell me about your project and get a free, individual quote.' />
      </div>
    </section>
  )
}
