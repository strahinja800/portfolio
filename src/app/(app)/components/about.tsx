import { ABOUT_STACKS } from '@/constants/about-stacks'

export default function About() {
  return (
    <section
      className='py-[clamp(80px,13vh,160px)]'
      id='about'
    >
      <div className='wrap'>
        {/* Section head */}
        <div className='flex items-baseline justify-between gap-6 pb-10 border-b border-line-soft mb-14 reveal'>
          <h2 className='font-display-face text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.02em] leading-[1.05]'>
            About
          </h2>
          <span className='font-mono-face text-[13px] text-faint whitespace-nowrap'>
            [ 02 / About ]
          </span>
        </div>

        <div className='grid grid-cols-[1.1fr_0.9fr] gap-[clamp(40px,6vw,90px)] items-start max-[880px]:grid-cols-1'>
          {/* Bio */}
          <div className='reveal'>
            <p className='text-[clamp(19px,2.4vw,25px)] leading-[1.55] tracking-[-0.01em]'>
              I build web products that are{' '}
              <em className='text-accent not-italic'>
                fast, reliable, and pleasant to use
              </em>{' '}
              — and just as pleasant to maintain.
            </p>
            <p className='mt-[22px] text-[17px] leading-[1.65] text-muted'>
              My favorite work lives at the seams: the API contract between
              teams, the migration nobody wants to do, the loading state that
              makes an app feel instant. I care about the whole path from a
              database index to a button&apos;s hover state, and I write code
              other developers actually enjoy inheriting.
            </p>
            <p className='mt-[22px] text-[17px] leading-[1.65] text-muted'>
              Most recently I&apos;ve been leading full-stack work on data-heavy
              SaaS products — owning architecture decisions, mentoring, and
              shipping features users notice. I&apos;m now looking for a team
              building something ambitious where I can do my best work.
            </p>
          </div>

          {/* Stacks */}
          <div
            className='grid gap-7 reveal'
            data-d='1'
          >
            {ABOUT_STACKS.map(group => (
              <div key={group.label}>
                <span className='block font-mono-face text-[11.5px] tracking-[0.14em] uppercase text-faint pb-3 mb-3.5 border-b border-line-soft'>
                  {group.label}
                </span>
                <ul className='list-none p-0 flex flex-wrap gap-2'>
                  {group.items.map((item, i) => (
                    <li
                      key={item}
                      className='font-mono-face text-[12.5px] text-muted'
                    >
                      {item}
                      {i < group.items.length - 1 && (
                        <span className='ml-2 text-line'>·</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
