export type NavLink = { label: string } & ({ id: string } | { href: string })

export type NavConfig = {
  links: NavLink[]
  cta: { id: string; label: string; mobileLabel: string }
}

export const HOME_NAV: NavConfig = {
  links: [
    { id: 'work', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
    { href: '/web-development', label: 'Services' },
  ],
  cta: { id: 'contact', label: 'Available for work', mobileLabel: 'Hire me' },
}

export const WEB_DEVELOPMENT_NAV: NavConfig = {
  links: [
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'faq', label: 'FAQ' },
    { href: '/', label: 'Portfolio' },
  ],
  cta: { id: 'contact', label: 'Get a Free Quote', mobileLabel: 'Free Quote' },
}
