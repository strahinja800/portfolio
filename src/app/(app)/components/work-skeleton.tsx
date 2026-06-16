export default function WorkSkeleton() {
  return (
    <>
      {[0, 1].map(i => (
        <div
          key={i}
          className={[
            'grid items-center gap-[clamp(20px,3vw,40px)] py-[clamp(48px,7vw,88px)] max-[880px]:grid-cols-1 grid-cols-[1fr_1.45fr]',
            i === 0 ? 'pt-0 border-t-0' : 'border-t border-line-soft',
          ].join(' ')}
        >
          <div className='flex flex-col gap-4'>
            <div className='skeleton h-[13px] w-24 rounded-full' />
            <div className='flex flex-col gap-2.5'>
              <div className='skeleton h-8 w-[72%] rounded-lg' />
              <div className='skeleton h-8 w-[55%] rounded-lg' />
            </div>
            <div className='flex flex-col gap-2 mt-1'>
              <div className='skeleton h-4 w-full rounded' />
              <div className='skeleton h-4 w-[88%] rounded' />
              <div className='skeleton h-4 w-[70%] rounded' />
            </div>
            <div className='flex flex-wrap gap-2 mt-1'>
              {[52, 68, 44, 60].map(w => (
                <div
                  key={w}
                  className='skeleton h-[26px] rounded-full'
                  style={{ width: `${w}px` }}
                />
              ))}
            </div>
            <div className='skeleton h-4 w-20 rounded mt-1' />
          </div>

          <div className='border border-line-soft rounded-[var(--radius)] overflow-hidden bg-surface-2 max-[880px]:mt-2'>
            <div className='relative aspect-video'>
              <div className='absolute inset-x-0 top-0 h-[34px] flex items-center gap-[7px] px-3.5 border-b border-line-soft bg-[oklch(0.20_0.008_264/0.7)] z-10'>
                <i className='size-[9px] rounded-full bg-line block not-italic' />
                <i className='size-[9px] rounded-full bg-line block not-italic' />
                <i className='size-[9px] rounded-full bg-line block not-italic' />
              </div>
              <div className='skeleton absolute inset-0 rounded-none' />
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
