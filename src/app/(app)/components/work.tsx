'use client'

import { STACK_TAG } from '@/constants/work-consts'
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
      className='py-[clamp(80px,13vh,160px)]'
      id='work'
    >
      <div className='wrap'>
        {/* Section head */}
        <div className='flex items-baseline justify-between gap-6 pb-10 border-b border-line-soft mb-14 reveal'>
          <h2 className='font-display-face text-[clamp(28px,4vw,44px)] font-semibold tracking-[-0.02em] leading-[1.05]'>
            Selected work
          </h2>
          <span className='font-mono-face text-[13px] text-faint whitespace-nowrap'>
            [ 01 / Work ]
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
                'group/project grid items-center gap-[clamp(20px,3vw,40px)] py-[clamp(48px,7vw,88px)] max-[880px]:grid-cols-1',
                i === 0
                  ? 'grid-cols-[1fr_1.45fr] pt-0 border-t-0'
                  : 'grid-cols-[1fr_1.45fr] border-t border-line-soft',
              ].join(' ')}
            >
              {/* Info */}
              <div>
                <div className='font-mono-face text-[13px] text-accent mb-[18px]'>
                  {p.subtitle}
                </div>
                <h3 className='font-display-face text-[clamp(26px,3.4vw,40px)] font-semibold tracking-[-0.02em] leading-[1.05] mb-4'>
                  {p.title}
                </h3>
                <p className='text-muted max-w-[46ch] mb-[26px]'>{descText}</p>
                <div className='flex flex-wrap gap-2 mb-[30px]'>
                  {techStack.map((t: string) => (
                    <span
                      key={t}
                      className={STACK_TAG}
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <Link
                  href={p.liveUrl || '#contact'}
                  target={p.liveUrl ? '_blank' : undefined}
                  rel={p.liveUrl ? 'noopener noreferrer' : undefined}
                  className="relative inline-flex items-center gap-[9px] whitespace-nowrap font-mono-face text-[13.5px] text-copy after:content-[''] after:absolute after:left-0 after:bottom-[-3px] after:w-full after:h-px after:bg-accent after:origin-left after:scale-x-0 after:transition-transform after:duration-300 group-hover/project:after:scale-x-100"
                >
                  {p.liveUrl ? 'View live' : 'View case study'}{' '}
                  <span className='transition-transform duration-250 group-hover/project:translate-x-0.75 group-hover/project:-translate-y-0.75'>
                    ↗
                  </span>
                </Link>
              </div>

              {/* Media */}
              <div
                className={[
                  'border border-line-soft rounded-[var(--radius)] overflow-hidden bg-surface-2',
                  'transition-[transform,border-color] duration-500 ease-[cubic-bezier(0.2,0.7,0.2,1)]',
                  'group-hover/project:-translate-y-1.5 group-hover/project:border-line',
                  'max-[880px]:mt-2',
                ].join(' ')}
              >
                <div
                  className='ph relative aspect-video [background:repeating-linear-gradient(135deg,oklch(0.245_0.009_264)_0_12px,oklch(0.225_0.009_264)_12px_24px)] overflow-hidden'
                >
                  <div className='absolute inset-x-0 top-0 h-[34px] flex items-center gap-[7px] px-3.5 border-b border-line-soft bg-[oklch(0.20_0.008_264/0.7)] z-10'>
                    <i className='size-[9px] rounded-full bg-line block not-italic' />
                    <i className='size-[9px] rounded-full bg-line block not-italic' />
                    <i className='size-[9px] rounded-full bg-line block not-italic' />
                  </div>
                  {p.coverImage?.url && (
                    <Image
                      src={p.coverImage.url}
                      alt={p.coverImage.alt || p.title}
                      fill
                      className='object-cover object-top pt-8.5'
                      sizes='(max-width: 880px) 100vw, 50vw'
                    />
                  )}
                </div>
              </div>
            </article>
          )
        })
        )}
      </div>
    </section>
  )
}
