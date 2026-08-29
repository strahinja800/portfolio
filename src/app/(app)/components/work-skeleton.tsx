export default function WorkSkeleton() {
  return (
    <>
      {[0, 1].map(i => (
        <div
          key={i}
          className={[
            'grid grid-cols-[128px_1fr_1.05fr] items-start gap-[clamp(20px,2.4vw,30px)] py-[clamp(28px,4vw,34px)]',
            'max-[880px]:grid-cols-1',
            i === 1 ? '' : 'border-b border-line-soft',
          ].join(' ')}
        >
          <div className='skeleton h-[56px] w-[86px]' />

          <div className='flex flex-col gap-[15px]'>
            <div className='skeleton h-[12px] w-28' />
            <div className='skeleton h-8 w-[62%]' />
            <div className='flex flex-col gap-2'>
              <div className='skeleton h-3.5 w-full' />
              <div className='skeleton h-3.5 w-[88%]' />
              <div className='skeleton h-3.5 w-[64%]' />
            </div>
            <div className='flex flex-wrap gap-[7px]'>
              {[62, 54, 78, 48].map(w => (
                <div
                  key={w}
                  className='skeleton h-[25px]'
                  style={{ width: `${w}px` }}
                />
              ))}
            </div>
            <div className='flex items-center gap-[22px] mt-1'>
              <div className='skeleton h-4 w-24' />
              <div className='skeleton h-4 w-20' />
            </div>
          </div>

          <div className='border-2 border-line-soft aspect-video w-full max-[880px]:mt-2'>
            <div className='skeleton size-full' />
          </div>
        </div>
      ))}
    </>
  )
}
