export const CONTACT_EMAIL = 'strahinjakovic8@gmail.com'

export const SERVICE_OPTIONS = [
  'Business Website',
  'Landing Page',
  'Website Redesign',
  'CMS Integration',
  'Website Maintenance',
  'Other',
] as const

export type ServiceOption = (typeof SERVICE_OPTIONS)[number]

export type ServiceIcon = 'briefcase' | 'target' | 'refresh' | 'edit' | 'wrench'

export const SERVICES: { title: string; desc: string; icon: ServiceIcon }[] = [
  {
    title: 'Business Websites',
    desc: 'Professional websites that showcase your business, services and brand while helping potential customers find and connect with you.',
    icon: 'briefcase',
  },
  {
    title: 'Landing Pages',
    desc: 'Focused landing pages designed to present your services, communicate your value and encourage visitors to take action.',
    icon: 'target',
  },
  {
    title: 'Website Redesign',
    desc: 'Modernizing outdated websites with improved design, usability, performance and responsive layouts.',
    icon: 'refresh',
  },
  {
    title: 'CMS Integration',
    desc: 'Easy-to-manage websites that allow you to update text, images, galleries and other content without technical knowledge.',
    icon: 'edit',
  },
  {
    title: 'Website Maintenance',
    desc: 'Website updates, improvements and technical support when needed. Maintenance arrangements can be discussed individually depending on your project.',
    icon: 'wrench',
  },
]

export const BENEFITS = [
  {
    title: 'Direct Communication',
    desc: 'You work directly with the developer building your website. No intermediaries or unnecessary communication layers.',
  },
  {
    title: 'Tailored Solutions',
    desc: 'Every project is approached individually, with a focus on your business, goals and requirements.',
  },
  {
    title: 'Modern Technologies',
    desc: 'Fast, responsive and maintainable websites built using modern web technologies.',
  },
  {
    title: 'Attention to Detail',
    desc: 'Careful attention to design, usability, performance and the overall experience of your website.',
  },
]

export const STEPS = [
  {
    num: '01',
    title: 'Initial Discussion',
    desc: 'We discuss your business, goals, ideas and project requirements.',
  },
  {
    num: '02',
    title: 'Planning & Development',
    desc: 'I plan and develop a website tailored to your needs and brand.',
  },
  {
    num: '03',
    title: 'Review & Refinement',
    desc: 'You review the website and provide feedback. We make the necessary adjustments.',
  },
  {
    num: '04',
    title: 'Launch',
    desc: 'Once everything is approved, your website goes live and is ready for visitors.',
  },
]

export const FAQS = [
  {
    q: 'How much does a business website cost?',
    a: 'Every project is different. Pricing depends on the website’s complexity, required features and overall scope. Contact me with your requirements to receive a personalized quote.',
  },
  {
    q: 'How long does it take to build a website?',
    a: 'Project timelines depend on the size and complexity of the website. After discussing your requirements, I can provide an estimated timeline.',
  },
  {
    q: 'Will my website work on mobile devices?',
    a: 'Yes. All websites are developed with responsive design in mind, ensuring a consistent experience across desktops, tablets and mobile devices.',
  },
  {
    q: 'Can I update the website content myself?',
    a: 'Yes, CMS integration can be included when needed, allowing you to manage text, images, galleries and other website content.',
  },
  {
    q: 'Do you work with international clients?',
    a: 'Yes. I work with both local and international clients. Communication and project coordination can be handled remotely.',
  },
  {
    q: 'Do you provide website maintenance?',
    a: 'Maintenance and ongoing support can be arranged individually depending on the project and your requirements.',
  },
]

/* shared Phosphor buttons — same treatment as the home hero CTAs */
export const BUTTON_PRIMARY =
  'group inline-flex items-center justify-center gap-3 font-mono-face text-[12.5px] font-bold tracking-[0.08em] uppercase px-5.5 py-3.5 bg-accent text-accent-ink transition-opacity duration-250 hover:opacity-85 disabled:opacity-60 disabled:cursor-wait cursor-pointer'

export const BUTTON_SECONDARY =
  'group inline-flex items-center justify-center gap-3 font-mono-face text-[12.5px] font-bold tracking-[0.08em] uppercase px-5.5 py-3.5 border-2 border-line text-copy transition-colors duration-250 hover:border-accent hover:text-accent'

export const BUTTON_ARROW =
  'transition-transform duration-250 group-hover:translate-x-0.75 group-hover:-translate-y-0.75'
