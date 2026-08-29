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
      className='w-[104%] -ml-[2%] bg-accent text-accent-ink overflow-hidden rotate-[-0.8deg] py-2.5 select-none'
      aria-hidden
    >
      <div className='flex w-max [animation:marquee_38s_linear_infinite]'>
        {strip.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className='font-mono-face text-[12.5px] font-bold tracking-[0.24em] uppercase px-6 whitespace-nowrap'
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}
