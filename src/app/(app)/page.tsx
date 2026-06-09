'use client'

import { useEffect } from 'react'
import NavBar from './components/shared/nav-bar'
import Footer from './components/shared/footer'
import Hero from './components/hero'
import Work from './components/work'
import About from './components/about'
import Contact from './components/contact'

export default function Home() {
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

    // rAF ensures layout is fully computed before checking positions
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

    // Final fallback — reveal everything after 1s no matter what
    const timer = setTimeout(() => reveals.forEach(revealEl), 1000)

    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      clearTimeout(timer)
      window.removeEventListener('scroll', revealInView)
      window.removeEventListener('load', revealInView)
    }
  }, [])

  return (
    <>
      <NavBar />

      <main id='top'>
        {/* ── HERO ── */}
        <Hero />
        {/* ── WORK ── */}
        <Work />
        {/* ── ABOUT ── */}
        <About />
        {/* ── CONTACT ── */}
        <Contact />
      </main>

      <Footer />
    </>
  )
}
