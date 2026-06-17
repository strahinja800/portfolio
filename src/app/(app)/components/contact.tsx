import { SOCIAL_LINKS } from '@/constants/social-links'
import Link from 'next/link'

export default function Contact() {
  return (
    <section
      className='py-[clamp(60px,10vh,120px)] border-t border-line-soft'
      id='contact'
    >
      <div className='wrap'>
        {/* Eyebrow */}
        <span className='inline-flex items-center gap-2.5 mb-7 font-mono-face text-[12.5px] tracking-[0.16em] uppercase text-faint before:block before:w-[22px] before:h-px before:bg-line reveal'>
          Let&apos;s talk
        </span>

        {/* Heading */}
        <h2
          className='font-display-face text-[clamp(38px,7vw,92px)] font-bold tracking-[-0.035em] leading-[0.98] mb-9 reveal'
          data-d='1'
        >
          Have a role or project?
          <br />
          Reach me at <br />
          <Link
            href='mailto:strahinjakovic8@gmail.com'
            className="grad relative break-all after:content-[''] after:absolute after:left-0 after:bottom-1 after:w-full after:h-0.5 after:[background:var(--accent-grad)] after:origin-left after:scale-x-0 after:transition-transform after:duration-400 hover:after:scale-x-100"
          >
            strahinjakovic8@gmail.com
          </Link>
        </h2>

        {/* Sub */}
        <p
          className='text-muted max-w-[46ch] text-[18px] reveal'
          data-d='2'
        >
          I reply to everything. Whether it&apos;s a full-time opening, a
          contract, or just a question — I&apos;d love to hear what you&apos;re
          building.
        </p>

        {/* Social links */}
        <div
          className='mt-[46px] flex flex-wrap gap-3 reveal'
          data-d='3'
        >
          {SOCIAL_LINKS.map(({ label, href, external }) => (
            <Link
              key={label}
              href={href}
              {...(external
                ? { target: '_blank', rel: 'noopener noreferrer' }
                : {})}
              className='group inline-flex items-center gap-[9px] whitespace-nowrap font-mono-face text-[13px] text-muted border border-line-soft rounded-full px-4.5 py-2.5 bg-surface-2 transition-[color,border-color,transform] duration-250 hover:text-copy hover:border-accent hover:-translate-y-0.5'
            >
              {label}{' '}
              <span className='transition-transform duration-250 group-hover:translate-x-0.5 group-hover:-translate-y-0.5'>
                ↗
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
