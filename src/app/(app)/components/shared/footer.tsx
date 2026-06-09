export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className='border-t border-line-soft py-9'>
      <div className='wrap flex items-center justify-between flex-wrap gap-4 font-mono-face text-[12px] text-faint'>
        <span>© {year} Strahinja Ković — Full-stack web developer</span>
        <span>Built from scratch · TypeScript &amp; care</span>
        <a
          href='#top'
          className='group inline-flex items-center gap-2 text-muted transition-colors duration-250 hover:text-copy'
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
