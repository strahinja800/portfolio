import type { Metadata, Viewport } from 'next'
import { Archivo, IBM_Plex_Mono } from 'next/font/google'
import './globals.css'
import { Analytics } from '@vercel/analytics/next'

const archivo = Archivo({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-archivo',
  axes: ['wdth'],
})

const plexMono = IBM_Plex_Mono({
  subsets: ['latin', 'latin-ext'],
  variable: '--font-plex-mono',
  weight: ['400', '500'],
})

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://strahinjakovic.dev'),
  title: 'Strahinja Ković — Frontend Web Developer',
  description:
    'Strahinja Ković — frontend web developer building fast, reliable products end to end.',
  openGraph: {
    title: 'Strahinja Ković — Frontend Web Developer',
    description:
      'Strahinja Ković — frontend web developer building fast, reliable products end to end.',
    url: 'https://strahinjakovic.dev',
    siteName: 'Strahinja Ković',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Strahinja Ković — Frontend Web Developer',
    description:
      'Strahinja Ković — frontend web developer building fast, reliable products end to end.',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/favicon.ico',
  },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Strahinja Ković',
  url: 'https://strahinjakovic.dev',
  jobTitle: 'Frontend Web Developer',
  description:
    'Frontend web developer building fast, reliable products end to end.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Belgrade',
    addressCountry: 'RS',
  },
  knowsAbout: ['TypeScript', 'React', 'Node.js', 'PostgreSQL', 'Next.js'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang='en'
      className={`${archivo.variable} ${plexMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        {/* eslint-disable-next-line @next/next/no-before-interactive-script-component */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='light')document.documentElement.dataset.theme='light'}catch(e){}})()`,
          }}
        />
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, '\\u003c'),
          }}
        />
        <Analytics />
        {children}
      </body>
    </html>
  )
}
