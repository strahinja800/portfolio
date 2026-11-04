import { CONTACT_EMAIL } from '@/constants/web-development-consts'
import { Mail, MessageCircle } from 'lucide-react'
import WebDevelopmentContactForm from './web-development-contact-form'

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, '')

const WHATSAPP_TEXT = encodeURIComponent(
  "Hi Strahinja, I'm interested in a website for my business.",
)

const DIRECT_LINK =
  'group flex items-center gap-4 border-2 border-line px-5 py-4 transition-colors duration-250 hover:border-accent'

export default function WebDevelopmentContact() {
  return (
    <section
      id='contact'
      aria-labelledby='contact-title'
      className='py-[clamp(56px,9vh,110px)] border-t-2 border-line-soft scroll-mt-16'
    >
      <div className='wrap'>
        {/* Eyebrow */}
        <span className='inline-flex items-center gap-3.5 mb-7 font-mono-face text-[11.5px] tracking-[0.2em] uppercase text-faint before:block before:w-[34px] before:h-0.5 before:bg-accent reveal'>
          [ 05 / Contact ] — Free quote
        </span>

        {/* Heading */}
        <h2
          id='contact-title'
          className='font-display-face text-[clamp(34px,6vw,72px)] leading-[0.92] tracking-[-0.04em] uppercase reveal'
          data-d='1'
        >
          Have a Project in Mind?
          <br />
          <span className='grad'>Let&apos;s Talk.</span>
        </h2>

        <p
          className='mt-6 text-[14px] leading-[1.8] text-muted max-w-[58ch] reveal'
          data-d='1'
        >
          Tell me a little about your business and what you&apos;re looking for.
          I&apos;ll get back to you to discuss your project and provide a
          personalized quote.
        </p>

        <div className='mt-11 grid grid-cols-[1.35fr_0.65fr] gap-[clamp(32px,5vw,64px)] items-start max-[980px]:grid-cols-1'>
          <div
            className='reveal'
            data-d='2'
          >
            <WebDevelopmentContactForm />
          </div>

          {/* Direct channels */}
          <aside
            aria-label='Other ways to reach me'
            className='flex flex-col gap-3 reveal'
            data-d='3'
          >
            <span className='mb-1 font-mono-face text-[10.5px] tracking-[0.2em] uppercase text-accent'>
              Prefer to reach out directly?
            </span>

            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('Website project inquiry')}`}
              className={DIRECT_LINK}
            >
              <Mail
                size={20}
                strokeWidth={1.75}
                className='shrink-0 text-accent'
                aria-hidden
              />
              <span className='flex min-w-0 flex-col'>
                <span className='font-mono-face text-[10.5px] tracking-[0.18em] uppercase text-faint'>
                  Email
                </span>
                <span className='font-mono-face text-[13.5px] font-bold text-copy break-all transition-colors duration-250 group-hover:text-accent'>
                  {CONTACT_EMAIL}
                </span>
              </span>
            </a>

            {WHATSAPP_NUMBER && (
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_TEXT}`}
                target='_blank'
                rel='noopener noreferrer'
                className={DIRECT_LINK}
              >
                <MessageCircle
                  size={20}
                  strokeWidth={1.75}
                  className='shrink-0 text-accent'
                  aria-hidden
                />
                <span className='flex flex-col'>
                  <span className='font-mono-face text-[10.5px] tracking-[0.18em] uppercase text-faint'>
                    WhatsApp
                  </span>
                  <span className='font-mono-face text-[13.5px] font-bold text-copy transition-colors duration-250 group-hover:text-accent'>
                    Message me on WhatsApp
                  </span>
                </span>
              </a>
            )}
          </aside>
        </div>
      </div>
    </section>
  )
}
