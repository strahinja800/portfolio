export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className='border-t-2 border-accent py-6'>
      <div className='wrap flex items-center justify-between flex-wrap gap-4 font-mono-face text-[11.5px] tracking-[0.06em] uppercase text-faint'>
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
    </footer>
  )
}
