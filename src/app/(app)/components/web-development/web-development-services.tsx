import {
  BUTTON_ARROW,
  SERVICES,
  type ServiceIcon,
} from '@/constants/web-development-consts'
import {
  Briefcase,
  RefreshCw,
  SquarePen,
  Target,
  Wrench,
  type LucideIcon,
} from 'lucide-react'
import WebDevelopmentSectionHead from './web-development-section-head'
import SectionLink from '../shared/section-link'

const ICONS: Record<ServiceIcon, LucideIcon> = {
  briefcase: Briefcase,
  target: Target,
  refresh: RefreshCw,
  edit: SquarePen,
  wrench: Wrench,
}

export default function WebDevelopmentServices() {
  return (
    <section
      id='services'
      aria-labelledby='services-title'
      className='py-[clamp(56px,9vh,110px)] scroll-mt-16'
    >
      <div className='wrap'>
        <WebDevelopmentSectionHead
          id='services'
          index='[ 01 / Services ]'
          title={
            <>
              Web Development
              <br />
              Services
            </>
          }
          lede='From business websites to custom landing pages, I build digital solutions tailored to your business needs.'
        />

        {/* 1px-gap grid — the line-soft background shows through as rules */}
        <ul className='grid grid-cols-3 gap-0.5 bg-line-soft border-2 border-line-soft list-none p-0 m-0 max-[980px]:grid-cols-2 max-[620px]:grid-cols-1 reveal'>
          {SERVICES.map(({ title, desc, icon }, i) => {
            const Icon = ICONS[icon]
            return (
              <li
                key={title}
                className='group flex flex-col gap-4 bg-surface p-[clamp(20px,2.6vw,30px)] transition-colors duration-250 hover:bg-surface-2'
              >
                <div className='flex items-center justify-between'>
                  <span className='flex size-11 items-center justify-center border-2 border-line text-accent transition-colors duration-250 group-hover:border-accent'>
                    <Icon
                      size={20}
                      strokeWidth={1.75}
                      aria-hidden
                    />
                  </span>
                  <span className='font-mono-face text-[11px] tracking-[0.16em] text-faint'>
                    S/{String(i + 1).padStart(2, '0')}
                  </span>
                </div>
                <h3 className='font-mono-face text-[15px] font-bold tracking-[0.04em] uppercase text-copy'>
                  {title}
                </h3>
                <p className='text-[13.5px] leading-[1.75] text-muted'>{desc}</p>
              </li>
            )
          })}

          {/* sixth cell closes the grid with the primary action */}
          <li className='flex flex-col justify-between gap-6 bg-accent-soft p-[clamp(20px,2.6vw,30px)]'>
            <p className='font-display-face text-[clamp(20px,2.2vw,26px)] leading-[1.05] tracking-[-0.02em] uppercase text-copy'>
              Not sure what you need?
            </p>
            <p className='text-[13.5px] leading-[1.75] text-muted'>
              Describe your business and goals. I&apos;ll suggest the right
              approach and send you a personalized quote.
            </p>
            <SectionLink
              id='contact'
              className='group inline-flex w-fit items-center gap-[9px] font-mono-face text-[12.5px] font-bold tracking-[0.06em] uppercase pb-[3px] border-b-2 text-accent border-accent'
            >
              Get a Free Quote <span className={BUTTON_ARROW}>↗</span>
            </SectionLink>
          </li>
        </ul>
      </div>
    </section>
  )
}
