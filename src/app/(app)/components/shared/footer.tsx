import { SOCIAL_LINKS } from '@/constants/social-links'
import Link from 'next/link'

const FOOTER_LINK = 'transition-colors duration-250 hover:text-accent'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className='border-t-2 border-accent py-6'>
      <div className='wrap flex flex-col gap-4 font-mono-face text-[11.5px] tracking-[0.06em] uppercase text-faint'>
        <nav
          aria-label='Footer'
          className='flex flex-wrap gap-x-6 gap-y-2 text-muted'
        >
          <Link
            href='/'
            className={FOOTER_LINK}
          >
            Portfolio
          </Link>
          <Link
            href='/web-development'
            className={FOOTER_LINK}
          >
            Web Development
          </Link>
          {SOCIAL_LINKS.map(({ label, href, external }) => (
            <a
              key={label}
              href={href}
              {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className={FOOTER_LINK}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className='flex items-center justify-between flex-wrap gap-4'>
          <span>© {year} Strahinja Ković — Frontend web developer</span>
          <span>Built from scratch · TypeScript &amp; care</span>
          <a
            href='#top'
            className='group inline-flex items-center gap-2 text-muted transition-colors duration-250 hover:text-accent'
          >
            Back to top{' '}
            <span className='transition-transform duration-250 group-hover:-translate-y-0.75'>
              ↑
            </span>
          </a>
        </div>
      </div>
    </footer>
  )
}
