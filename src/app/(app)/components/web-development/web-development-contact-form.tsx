'use client'

import { submitInquiry } from '@/app/(app)/web-development/actions'
import {
  validateInquiry,
  type InquiryField,
  type InquiryFieldErrors,
  type InquiryInput,
} from '@/app/(app)/web-development/validate-inquiry'
import {
  BUTTON_ARROW,
  BUTTON_PRIMARY,
  CONTACT_EMAIL,
  SERVICE_OPTIONS,
} from '@/constants/web-development-consts'
import { useState, useTransition } from 'react'

const LABEL =
  'block mb-2 font-mono-face text-[10.5px] tracking-[0.18em] uppercase text-faint'

/* 16px on mobile prevents iOS zoom-on-focus */
const FIELD =
  'w-full bg-surface-2 border-2 border-line px-4 py-3 font-mono-face text-[16px] min-[881px]:text-[14px] text-copy placeholder:text-faint outline-none transition-colors duration-250 focus:border-accent aria-[invalid=true]:border-[oklch(0.68_0.19_25)]'

const ERROR = 'mt-2 font-mono-face text-[12px] text-[oklch(0.72_0.17_25)]'

function readForm(form: HTMLFormElement): InquiryInput {
  const data = new FormData(form)
  const get = (key: keyof InquiryInput) => String(data.get(key) ?? '')
  return {
    name: get('name'),
    email: get('email'),
    company: get('company'),
    service: get('service'),
    details: get('details'),
    hp_x9: get('hp_x9'),
  }
}

export default function WebDevelopmentContactForm() {
  const [errors, setErrors] = useState<InquiryFieldErrors>({})
  const [message, setMessage] = useState<string | null>(null)
  const [sent, setSent] = useState(false)
  const [pending, startTransition] = useTransition()

  const fieldProps = (name: InquiryField) => ({
    id: `inquiry-${name}`,
    name,
    'aria-invalid': Boolean(errors[name]),
    'aria-describedby': errors[name] ? `inquiry-${name}-error` : undefined,
    onInput: () => {
      if (errors[name]) setErrors(e => ({ ...e, [name]: undefined }))
    },
  })

  const fieldError = (name: InquiryField) =>
    errors[name] && (
      <p
        id={`inquiry-${name}-error`}
        className={ERROR}
      >
        {errors[name]}
      </p>
    )

  const onSubmit = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const input = readForm(form)
    const clientErrors = validateInquiry(input)

    setMessage(null)
    setErrors(clientErrors)
    if (Object.keys(clientErrors).length > 0) {
      const first = Object.keys(clientErrors)[0]
      form.querySelector<HTMLElement>(`#inquiry-${first}`)?.focus()
      return
    }

    startTransition(async () => {
      try {
        const result = await submitInquiry(input)
        if (result.ok) {
          setSent(true)
          return
        }
        setErrors(result.fieldErrors ?? {})
        setMessage(result.message)
      } catch {
        setMessage(
          `Your message couldn't be sent. Please check your connection and try again, or email me at ${CONTACT_EMAIL}.`,
        )
      }
    })
  }

  if (sent) {
    return (
      <div
        role='status'
        className='border-2 border-accent bg-accent-soft p-[clamp(20px,3vw,32px)]'
      >
        <p className='font-mono-face text-[12px] tracking-[0.18em] uppercase text-accent'>
          ✓ Message sent
        </p>
        <p className='mt-4 font-display-face text-[clamp(22px,3vw,30px)] leading-[1.05] tracking-[-0.02em] uppercase'>
          Thanks, I&apos;ve got your message.
        </p>
        <p className='mt-4 text-[14px] leading-[1.8] text-muted max-w-[48ch]'>
          I&apos;ll review your project details and get back to you by email to
          discuss next steps and your personalized quote.
        </p>
        <button
          type='button'
          onClick={() => setSent(false)}
          className='mt-6 font-mono-face text-[12px] font-bold tracking-[0.06em] uppercase pb-[3px] border-b-2 border-line text-muted cursor-pointer transition-colors duration-250 hover:text-copy hover:border-accent'
        >
          Send another message
        </button>
      </div>
    )
  }

  return (
    <form
      onSubmit={onSubmit}
      noValidate
      aria-busy={pending}
      className='flex flex-col gap-5'
    >
      <div className='grid grid-cols-2 gap-5 max-[620px]:grid-cols-1'>
        <div>
          <label
            htmlFor='inquiry-name'
            className={LABEL}
          >
            Name <span className='text-accent'>*</span>
          </label>
          <input
            {...fieldProps('name')}
            type='text'
            autoComplete='name'
            required
            maxLength={100}
            className={FIELD}
          />
          {fieldError('name')}
        </div>

        <div>
          <label
            htmlFor='inquiry-email'
            className={LABEL}
          >
            Email <span className='text-accent'>*</span>
          </label>
          <input
            {...fieldProps('email')}
            type='email'
            autoComplete='email'
            inputMode='email'
            required
            className={FIELD}
          />
          {fieldError('email')}
        </div>
      </div>

      <div className='grid grid-cols-2 gap-5 max-[620px]:grid-cols-1'>
        <div>
          <label
            htmlFor='inquiry-company'
            className={LABEL}
          >
            Company / Business <span className='normal-case tracking-normal'>(optional)</span>
          </label>
          <input
            id='inquiry-company'
            name='company'
            type='text'
            autoComplete='organization'
            maxLength={150}
            className={FIELD}
          />
        </div>

        <div>
          <label
            htmlFor='inquiry-service'
            className={LABEL}
          >
            Service Needed
          </label>
          <select
            id='inquiry-service'
            name='service'
            defaultValue=''
            className={`${FIELD} cursor-pointer`}
          >
            <option value=''>Select a service</option>
            {SERVICE_OPTIONS.map(option => (
              <option
                key={option}
                value={option}
              >
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor='inquiry-details'
          className={LABEL}
        >
          Project Details <span className='text-accent'>*</span>
        </label>
        <textarea
          {...fieldProps('details')}
          required
          rows={6}
          maxLength={5000}
          placeholder='What does your business do, and what should the website achieve?'
          className={`${FIELD} resize-y min-h-[140px]`}
        />
        {fieldError('details')}
      </div>

      {/* honeypot — hidden from people and assistive tech, filled by bots */}
      <div
        className='absolute -left-[9999px] size-px overflow-hidden'
        aria-hidden
      >
        <label htmlFor='inquiry-hp'>Leave this field empty</label>
        <input
          id='inquiry-hp'
          name='hp_x9'
          type='text'
          tabIndex={-1}
          autoComplete='off'
        />
      </div>

      {message && (
        <p
          role='alert'
          className='border-2 border-[oklch(0.68_0.19_25)] px-4 py-3 font-mono-face text-[12.5px] leading-[1.7] text-[oklch(0.72_0.17_25)]'
        >
          {message}
        </p>
      )}

      <button
        type='submit'
        disabled={pending}
        className={`${BUTTON_PRIMARY} self-start max-[560px]:self-stretch`}
      >
        {pending ? 'Sending…' : 'Send Message'}
        {!pending && <span className={BUTTON_ARROW}>↗</span>}
      </button>
    </form>
  )
}
