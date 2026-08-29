'use client'

import {
  PROJECT_FRAME,
  PROJECT_LINK_ARROW,
  PROJECT_LINK_PRIMARY,
  PROJECT_LINK_SECONDARY,
  SECTION_INDEX,
  SECTION_TITLE,
  STACK_TAG,
} from '@/constants/work-consts'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import WorkSkeleton from './work-skeleton'

function serializeRichText(nodes: any): string {
  if (!nodes) return ''

  let text = ''

  const recurse = (node: any): void => {
    if (!node) return
    if (typeof node === 'string') {
      text += node
      return
    }
    if (node.type === 'text' && node.text) {
      text += node.text
      return
    }
    if (node.children && Array.isArray(node.children)) {
      node.children.forEach((child: any) => recurse(child))
    }
  }

  if (nodes?.root?.children) {
    recurse(nodes.root)
  } else if (Array.isArray(nodes)) {
    nodes.forEach(node => recurse(node))
  } else {
    recurse(nodes)
  }

  return text.trim()
}

export default function Work() {
  const [projects, setProjects] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/projects?sort=order')
      .then(res => res.json())
      .then(data => {
        const projectList = data.docs
          ? data.docs
          : Array.isArray(data)
            ? data
            : []
        setProjects(projectList)
        setLoading(false)
      })
      .catch(error => {
        console.error('Error fetching projects:', error)
        setLoading(false)
      })
  }, [])

  return (
    <section
      className='py-[clamp(56px,9vh,110px)]'
      id='work'
    >
      <div className='wrap'>
        {/* Section head */}
        <div className='flex items-end justify-between gap-6 pb-[22px] border-b-2 border-accent reveal'>
          <h2 className={SECTION_TITLE}>
            Selected
            <br />
            Work
          </h2>
          <span className={SECTION_INDEX}>
            [ 01 / Work ]
            {!loading &&
              ` — ${String(projects.length).padStart(2, '0')} projects`}
          </span>
        </div>

        {/* Projects */}
        {loading ? (
          <WorkSkeleton />
        ) : (
          projects.map((p, i) => {
          const desc =
            typeof p.description === 'string'
              ? (() => {
                  try {
                    return JSON.parse(p.description)
                  } catch {
                    return p.description
                  }
                })()
              : p.description
          const descText = serializeRichText(desc)
          const techStack = p.technologies?.map((t: any) => t.name) || []

          return (
            <article
              key={`project-${p.id}`}
              className={[
                'group/project grid grid-cols-[128px_1fr_1.05fr] items-start gap-[clamp(20px,2.4vw,30px)] py-[clamp(28px,4vw,34px)]',
                'max-[880px]:grid-cols-1',
                i === projects.length - 1 ? '' : 'border-b border-line-soft',
              ].join(' ')}
            >
              {/* Index numeral */}
              <span
                className='font-display-face text-[clamp(48px,7vw,70px)] leading-[0.8] text-transparent [-webkit-text-stroke:2px_var(--line)]'
                aria-hidden
              >
                {String(i + 1).padStart(2, '0')}
              </span>

              {/* Info */}
              <div className='flex flex-col items-start gap-[15px]'>
                <span className='font-mono-face text-[11.5px] tracking-[0.16em] uppercase text-accent'>
                  {p.subtitle}
                </span>
                <h3 className='font-display-face text-[clamp(26px,3.2vw,34px)] leading-[0.98] tracking-[-0.03em] uppercase'>
                  {p.title}
                </h3>
                <p className='text-[13.5px] leading-[1.75] text-muted max-w-[44ch]'>
                  {descText}
                </p>
                <div className='flex flex-wrap gap-[7px]'>
                  {techStack.map((t: string) => (
                    <span
                      key={t}
                      className={STACK_TAG}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className='flex flex-wrap items-center gap-x-[22px] gap-y-3 mt-1'>
                  {p.liveUrl && (
                    <Link
                      href={p.liveUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={PROJECT_LINK_PRIMARY}
                    >
                      View live <span className={PROJECT_LINK_ARROW}>↗</span>
                    </Link>
                  )}
                  {p.sourceUrl && (
                    <Link
                      href={p.sourceUrl}
                      target='_blank'
                      rel='noopener noreferrer'
                      className={PROJECT_LINK_SECONDARY}
                    >
                      Source <span className={PROJECT_LINK_ARROW}>↗</span>
                    </Link>
                  )}
                </div>
              </div>

              {/* Media */}
              <div
                className={[
                  PROJECT_FRAME,
                  'relative aspect-video w-full',
                  'transition-[transform,border-color] duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)]',
                  'group-hover/project:-translate-y-1.5 group-hover/project:border-accent',
                  'max-[880px]:mt-2',
                ].join(' ')}
              >
                {p.coverImage?.url ? (
                  <Image
                    src={p.coverImage.url}
                    alt={p.coverImage.alt || p.title}
                    fill
                    className='object-cover object-top'
                    sizes='(max-width: 880px) 100vw, 50vw'
                  />
                ) : (
                  <span className='absolute inset-0 flex items-center justify-center font-mono-face text-[11.5px] tracking-[0.18em] uppercase text-faint'>
                    ./{p.title?.toLowerCase().replace(/\s+/g, '-')}.png
                  </span>
                )}
              </div>
            </article>
          )
        })
        )}
      </div>
    </section>
  )
}
