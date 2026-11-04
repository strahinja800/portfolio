'use client'

import { scrollToSection } from '@/hooks/use-smooth-scroll'

type Props = {
  id: string
  className?: string
  children: React.ReactNode
}

/* in-page link that smooth-scrolls without adding #id to the URL */
export default function SectionLink({ id, className, children }: Props) {
  return (
    <a
      href={`#${id}`}
      onClick={e => {
        e.preventDefault()
        scrollToSection(id)
      }}
      className={className}
    >
      {children}
    </a>
  )
}
