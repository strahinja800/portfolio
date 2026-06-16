const GROUPS = [
  { labelW: 80, tags: [56, 72, 48, 64, 52] },
  { labelW: 64, tags: [60, 44, 76, 56] },
  { labelW: 96, tags: [52, 68, 44] },
]

export default function AboutSkeleton() {
  return (
    <div className='flex flex-col gap-5'>
      {GROUPS.map((group, i) => (
        <div key={i}>
          <div
            className='skeleton h-[11px] mb-2.5 rounded-full'
            style={{ width: `${group.labelW}px` }}
          />
          <div className='flex flex-wrap gap-2'>
            {group.tags.map((w, j) => (
              <div
                key={j}
                className='skeleton h-[26px] rounded-full'
                style={{ width: `${w}px` }}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
