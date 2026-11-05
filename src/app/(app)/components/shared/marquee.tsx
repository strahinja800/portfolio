const STACK = [
  'TypeScript',
  'React',
  'Next.js',
  'Payload CMS',
  'MongoDB',
  'Tailwind',
  'Node',
  'Playwright',
  'Vercel',
]

export default function Marquee() {
  const strip = [...STACK, ...STACK]

  return (
    <div
      className='relative z-1 border-y border-line bg-surface text-copy overflow-hidden py-3 select-none'
      aria-hidden
    >
      <div className='flex w-max [animation:marquee_38s_linear_infinite]'>
        {strip.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className='flex items-center gap-12 pl-12 font-mono-face text-[12.5px] font-medium tracking-[0.2em] uppercase whitespace-nowrap'
          >
            <span className='text-accent'>+</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
