import Image from 'next/image'

const CORNERS = [
  'top-[-7px] left-[-7px] border-t-2 border-l-2',
  'top-[-7px] right-[-7px] border-t-2 border-r-2',
  'bottom-[-7px] left-[-7px] border-b-2 border-l-2',
  'bottom-[-7px] right-[-7px] border-b-2 border-r-2',
]

export default function HeroPortrait() {
  return (
    <figure className='m-0 w-full max-w-[320px] min-[881px]:pt-7'>
      <figcaption className='flex justify-between mb-3.5 font-mono-face text-[11px] tracking-[0.16em] uppercase text-faint'>
        <span>Fig. 01</span>
        <span>Portrait</span>
      </figcaption>

      <div className='relative aspect-[4/5] border border-dashed border-line bg-surface p-2'>
        {CORNERS.map(position => (
          <span
            key={position}
            className={`absolute size-3.5 border-accent ${position}`}
            aria-hidden
          />
        ))}
        <div className='relative size-full overflow-hidden bg-surface-3'>
          <Image
            src='/images/portrait.jpg'
            alt='Portrait of Strahinja Ković'
            fill
            priority
            sizes='(max-width: 880px) 320px, 304px'
            className='object-cover object-[50%_30%]'
          />
        </div>
      </div>

      <div
        className='flex items-center gap-2.5 mt-3.5 font-mono-face text-[10.5px] text-faint'
        aria-hidden
      >
        <span>├</span>
        <span className='grow border-t border-line' />
        <span>W 320</span>
        <span className='grow border-t border-line' />
        <span>┤</span>
      </div>
    </figure>
  )
}
