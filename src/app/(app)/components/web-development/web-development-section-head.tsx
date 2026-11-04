import { SECTION_INDEX, SECTION_TITLE } from '@/constants/work-consts'

type Props = {
  id: string
  index: string
  title: React.ReactNode
  lede?: string
}

/* same head block as Work / About: title + index over a 2px accent rule */
export default function WebDevelopmentSectionHead({ id, index, title, lede }: Props) {
  return (
    <div className='mb-10 reveal'>
      <div className='flex flex-wrap items-end justify-between gap-x-6 gap-y-2 pb-[22px] border-b-2 border-accent'>
        <h2
          id={`${id}-title`}
          className={SECTION_TITLE}
        >
          {title}
        </h2>
        <span className={SECTION_INDEX}>{index}</span>
      </div>
      {lede && (
        <p className='mt-6 text-[14px] leading-[1.8] text-muted max-w-[60ch]'>{lede}</p>
      )}
    </div>
  )
}
