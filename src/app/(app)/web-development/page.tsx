import type { Metadata } from 'next'
import Footer from '../components/shared/footer'
import WebDevelopmentContact from '../components/web-development/web-development-contact'
import WebDevelopmentFaq from '../components/web-development/web-development-faq'
import WebDevelopmentHero from '../components/web-development/web-development-hero'
import WebDevelopmentNavBar from '../components/web-development/web-development-nav-bar'
import WebDevelopmentProcess from '../components/web-development/web-development-process'
import WebDevelopmentScrollReveal from '../components/web-development/web-development-scroll-reveal'
import WebDevelopmentServices from '../components/web-development/web-development-services'
import WebDevelopmentWhy from '../components/web-development/web-development-why'
import { SERVICES } from '@/constants/web-development-consts'

const TITLE = 'Freelance Web Developer | Business Website Design & Development'
const DESCRIPTION =
  'Professional web development services for businesses. Modern, responsive websites, landing pages and website redesigns tailored to your needs.'
const PAGE_URL = 'https://strahinjakovic.dev/web-development'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/web-development' },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: PAGE_URL,
    siteName: 'Strahinja Ković',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
  },
}

/* only facts already published on the site — no ratings, prices or reviews */
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Freelance Web Development',
  serviceType: 'Web development',
  url: PAGE_URL,
  description: DESCRIPTION,
  areaServed: ['RS', 'Worldwide'],
  provider: {
    '@type': 'Person',
    name: 'Strahinja Ković',
    url: 'https://strahinjakovic.dev',
  },
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Web Development Services',
    itemListElement: SERVICES.map(({ title, desc }) => ({
      '@type': 'Offer',
      itemOffered: { '@type': 'Service', name: title, description: desc },
    })),
  },
}

export default function WebDevelopmentPage() {
  return (
    <>
      <script
        type='application/ld+json'
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
        }}
      />
      <WebDevelopmentScrollReveal />
      <WebDevelopmentNavBar />

      <main id='top'>
        <WebDevelopmentHero />
        <WebDevelopmentServices />
        <WebDevelopmentWhy />
        <WebDevelopmentProcess />
        <WebDevelopmentFaq />
        <WebDevelopmentContact />
      </main>

      <Footer />
    </>
  )
}
