const ITEMS = [
  { labelW: 72, valueW: 110 },
  { labelW: 56, valueW: 90 },
  { labelW: 88, valueW: 130 },
  { labelW: 64, valueW: 100 },
]

export default function HeroSkeleton() {
  return (
    <div className='flex flex-wrap gap-[clamp(28px,5vw,64px)]'>
      {ITEMS.map(({ labelW, valueW }, i) => (
        <div key={i} className='flex flex-col gap-[5px]'>
          <div
            className='skeleton h-[10px] rounded-full'
            style={{ width: `${labelW}px` }}
          />
          <div
            className='skeleton h-[15px] rounded'
            style={{ width: `${valueW}px` }}
          />
        </div>
      ))}
    </div>
  )
}
