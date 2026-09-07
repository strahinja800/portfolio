const ROWS = [
  { roleW: 180, periodW: 96, lines: [92, 70] },
  { roleW: 160, periodW: 84, lines: [88, 55] },
]

export default function ExperienceSkeleton() {
  return (
    <>
      {ROWS.map((row, i) => (
        <div
          key={i}
          className={[
            'flex items-start gap-[clamp(20px,2.4vw,30px)] py-[clamp(24px,3.4vw,30px)]',
            'max-[640px]:flex-col',
            i === ROWS.length - 1 ? '' : 'border-b border-line-soft',
          ].join(' ')}
        >
          <div className='skeleton h-[45px] w-[86px] shrink-0' />
          <div className='flex flex-col gap-[10px] flex-1 w-full'>
            <div className='flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 w-full'>
              <div
                className='skeleton h-6'
                style={{ width: `${row.roleW}px` }}
              />
              <div
                className='skeleton h-3.5'
                style={{ width: `${row.periodW}px` }}
              />
            </div>
            <div className='flex flex-col gap-2 w-full'>
              {row.lines.map((w, j) => (
                <div
                  key={j}
                  className='skeleton h-3.5'
                  style={{ width: `${w}%` }}
                />
              ))}
            </div>
          </div>
        </div>
      ))}
    </>
  )
}
