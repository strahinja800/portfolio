'use client'

import { useScrollReveal } from '@/hooks/use-scroll-reveal'
import NavBar from './components/shared/nav-bar'
import Footer from './components/shared/footer'
import Marquee from './components/shared/marquee'
import Hero from './components/hero'
import Work from './components/work'
import Experience from './components/experience'
import About from './components/about'
import Contact from './components/contact'

export default function Home() {
  useScrollReveal()

  return (
    <>
      <NavBar />

      <main id='top'>
        <Hero />
        <Marquee />
        <Work />
        <Experience />
        <About />
        <Contact />
      </main>

      <Footer />
    </>
  )
}
