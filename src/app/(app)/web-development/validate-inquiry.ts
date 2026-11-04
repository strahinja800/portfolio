export type InquiryField = 'name' | 'email' | 'details'

export type InquiryFieldErrors = Partial<Record<InquiryField, string>>

export type InquiryInput = {
  name: string
  email: string
  company: string
  service: string
  details: string
  /* honeypot — non-semantic name so autofill and password managers skip it */
  hp_x9: string
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

/* shared by the form (instant feedback) and the server action (source of truth) */
export function validateInquiry(input: InquiryInput): InquiryFieldErrors {
  const errors: InquiryFieldErrors = {}
  const name = input.name.trim()
  const email = input.email.trim()
  const details = input.details.trim()

  if (name.length < 2) errors.name = 'Please enter your name.'
  else if (name.length > 100) errors.name = 'Name is too long.'

  if (!EMAIL_PATTERN.test(email)) errors.email = 'Please enter a valid email address.'

  if (details.length < 10)
    errors.details = 'Please tell me a bit more about your project (at least 10 characters).'
  else if (details.length > 5000)
    errors.details = 'Project details are too long (max 5000 characters).'

  return errors
}
