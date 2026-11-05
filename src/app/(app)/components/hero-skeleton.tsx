const ITEMS = [
  { labelW: 72, valueW: 110 },
  { labelW: 56, valueW: 90 },
  { labelW: 88, valueW: 130 },
  { labelW: 64, valueW: 100 },
]

export default function HeroSkeleton() {
  return (
    <div className='grid grid-cols-4 border-t-2 border-accent max-[880px]:grid-cols-2'>
      {ITEMS.map(({ labelW, valueW }, i) => (
        <div
          key={i}
          className='flex flex-col gap-2.5 px-5 pt-4.5 pb-1 border-l border-dashed border-line first:border-l-0 first:pl-0 max-[880px]:odd:border-l-0 max-[880px]:odd:pl-0'
        >
          <div
            className='skeleton h-2.5'
            style={{ width: `${labelW}px` }}
          />
          <div
            className='skeleton h-5'
            style={{ width: `${valueW}px` }}
          />
        </div>
      ))}
    </div>
  )
}
