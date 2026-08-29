const ITEMS = [
  { labelW: 72, valueW: 110 },
  { labelW: 56, valueW: 90 },
  { labelW: 88, valueW: 130 },
  { labelW: 64, valueW: 100 },
]

export default function HeroSkeleton() {
  return (
    <div className='grid grid-cols-4 gap-0.5 bg-line-soft border-2 border-line-soft max-[880px]:grid-cols-2'>
      {ITEMS.map(({ labelW, valueW }, i) => (
        <div
          key={i}
          className='flex flex-col gap-2 bg-surface px-5 py-4.5'
        >
          <div
            className='skeleton h-[10px]'
            style={{ width: `${labelW}px` }}
          />
          <div
            className='skeleton h-[15px]'
            style={{ width: `${valueW}px` }}
          />
        </div>
      ))}
    </div>
  )
}
