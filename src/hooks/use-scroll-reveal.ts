'use client'

import { useEffect } from 'react'

/* adds `.in` to every `.reveal` element as it scrolls into view */
export function useScrollReveal() {
  useEffect(() => {
    const reveals = Array.from(document.querySelectorAll<Element>('.reveal'))
    const revealEl = (el: Element) => el.classList.add('in')

    const revealInView = () => {
      const vh = window.innerHeight
      reveals.forEach(el => {
        const r = el.getBoundingClientRect()
        if (r.top < vh * 0.95 && r.bottom > 0) revealEl(el)
      })
    }

    const raf = requestAnimationFrame(revealInView)

    const io = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            revealEl(entry.target)
            io.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.05, rootMargin: '0px 0px -5% 0px' },
    )
    reveals.forEach(el => io.observe(el))

    window.addEventListener('scroll', revealInView, { passive: true })
    window.addEventListener('load', revealInView)

    const timer = setTimeout(() => reveals.forEach(revealEl), 1000)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      clearTimeout(timer)
      window.removeEventListener('scroll', revealInView)
      window.removeEventListener('load', revealInView)
    }
  }, [])
}
