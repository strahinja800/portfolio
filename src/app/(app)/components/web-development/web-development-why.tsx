import { BENEFITS } from '@/constants/web-development-consts'
import WebDevelopmentSectionHead from './web-development-section-head'

export default function WebDevelopmentWhy() {
  return (
    <section
      id='why'
      aria-labelledby='why-title'
      className='py-[clamp(56px,9vh,110px)] scroll-mt-16'
    >
      <div className='wrap'>
        <WebDevelopmentSectionHead
          id='why'
          index='[ 02 / Why me ]'
          title={
            <>
              A Personal Approach.
              <br />
              Quality Work.
              <br />
              <span className='text-accent'>No Unnecessary Complexity.</span>
            </>
          }
        />

        <ul className='grid grid-cols-2 gap-x-[clamp(28px,5vw,64px)] list-none p-0 m-0 max-[720px]:grid-cols-1'>
          {BENEFITS.map(({ title, desc }, i) => (
            <li
              key={title}
              className='grid grid-cols-[auto_1fr] gap-x-4 border-t-2 border-line-soft py-7 reveal'
              data-d={String(i % 2)}
            >
              <span
                className='font-mono-face text-[15px] font-bold text-accent leading-[1.5]'
                aria-hidden
              >
                +
              </span>
              <div>
                <h3 className='font-mono-face text-[15px] font-bold tracking-[0.04em] uppercase text-copy'>
                  {title}
                </h3>
                <p className='mt-2.5 text-[13.5px] leading-[1.75] text-muted max-w-[46ch]'>
                  {desc}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
