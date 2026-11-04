import { FAQS } from '@/constants/web-development-consts'
import { Plus } from 'lucide-react'
import WebDevelopmentSectionHead from './web-development-section-head'

/* native <details> — keyboard and screen-reader accessible with zero JS */
export default function WebDevelopmentFaq() {
  return (
    <section
      id='faq'
      aria-labelledby='faq-title'
      className='py-[clamp(56px,9vh,110px)] scroll-mt-16'
    >
      <div className='wrap'>
        <WebDevelopmentSectionHead
          id='faq'
          index='[ 04 / FAQ ]'
          title={
            <>
              Frequently Asked
              <br />
              Questions
            </>
          }
        />

        <div className='max-w-[880px] border-b-2 border-line-soft reveal'>
          {FAQS.map(({ q, a }) => (
            <details
              key={q}
              className='group border-t-2 border-line-soft'
            >
              <summary className='flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-mono-face text-[14.5px] font-bold leading-[1.5] text-copy transition-colors duration-250 hover:text-accent [&::-webkit-details-marker]:hidden'>
                {q}
                <span className='flex size-8 shrink-0 items-center justify-center border-2 border-line text-accent transition-[transform,border-color] duration-250 group-open:rotate-45 group-open:border-accent'>
                  <Plus
                    size={16}
                    strokeWidth={2}
                    aria-hidden
                  />
                </span>
              </summary>
              <p className='pb-6 pr-14 text-[13.5px] leading-[1.8] text-muted max-w-[68ch] max-[560px]:pr-0'>
                {a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}
