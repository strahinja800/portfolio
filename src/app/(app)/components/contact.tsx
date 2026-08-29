import { SOCIAL_LINKS } from '@/constants/social-links'
import Link from 'next/link'

export default function Contact() {
  return (
    <section
      className='py-[clamp(56px,9vh,110px)] border-t-2 border-line-soft'
      id='contact'
    >
      <div className='wrap'>
        {/* Eyebrow */}
        <span className='inline-flex items-center gap-3.5 mb-7 font-mono-face text-[11.5px] tracking-[0.2em] uppercase text-faint before:block before:w-[34px] before:h-0.5 before:bg-accent reveal'>
          [ 03 / Contact ] — Let&apos;s talk
        </span>

        {/* Heading */}
        <h2
          className='font-display-face text-[clamp(38px,6.5vw,76px)] leading-[0.9] tracking-[-0.04em] uppercase reveal'
          data-d='1'
        >
          Have a role
          <br />
          or project?
        </h2>

        {/* Email */}
        <Link
          href='mailto:strahinjakovic8@gmail.com'
          className='inline-block mt-6.5 font-mono-face text-[clamp(17px,3vw,30px)] font-bold tracking-[-0.01em] text-accent break-all border-b-[3px] border-accent pb-2 transition-opacity duration-250 hover:opacity-80 reveal'
          data-d='1'
        >
          strahinjakovic8@gmail.com
        </Link>

        {/* Sub + socials */}
        <div
          className='grid grid-cols-2 gap-[clamp(28px,5vw,56px)] items-end mt-9 max-[880px]:grid-cols-1 max-[880px]:items-start reveal'
          data-d='2'
        >
          <p className='text-[14px] leading-[1.8] text-muted max-w-[48ch]'>
            I reply to everything. Whether it&apos;s a full-time opening, a
            contract, or just a question — I&apos;d love to hear what
            you&apos;re building.
          </p>

          <div className='flex flex-wrap gap-2.5 min-[881px]:justify-end'>
            {SOCIAL_LINKS.map(({ label, href, external }) => (
              <Link
                key={label}
                href={href}
                {...(external
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                className='group inline-flex items-center gap-2.5 whitespace-nowrap font-mono-face text-[12px] font-bold tracking-[0.08em] uppercase border-2 border-line px-4.5 py-3.25 text-copy transition-colors duration-250 hover:border-accent hover:text-accent'
              >
                {label}{' '}
                <span className='transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'>
                  ↗
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
