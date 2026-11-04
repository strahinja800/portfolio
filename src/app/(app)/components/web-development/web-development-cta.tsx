import {
  BUTTON_ARROW,
  BUTTON_PRIMARY,
} from '@/constants/web-development-consts'
import SectionLink from '../shared/section-link'

/* contextual CTA placed after sections that build intent */
export default function WebDevelopmentCta({ text }: { text: string }) {
  return (
    <div className='mt-10 flex flex-wrap items-center justify-between gap-x-8 gap-y-5 border-2 border-line-soft bg-surface-2 px-[clamp(18px,3vw,28px)] py-5 reveal'>
      <p className='font-mono-face text-[13px] leading-[1.7] text-muted max-w-[52ch]'>
        <span className='text-accent'>$</span> {text}
      </p>
      <SectionLink
        id='contact'
        className={`${BUTTON_PRIMARY} max-[560px]:w-full`}
      >
        Get a Free Quote <span className={BUTTON_ARROW}>↗</span>
      </SectionLink>
    </div>
  )
}
