'use server'

import config from '@payload-config'
import { getPayload } from 'payload'
import {
  CONTACT_EMAIL,
  SERVICE_OPTIONS,
  type ServiceOption,
} from '@/constants/web-development-consts'
import {
  validateInquiry,
  type InquiryFieldErrors,
  type InquiryInput,
} from './validate-inquiry'

export type InquiryResult =
  | { ok: true }
  | { ok: false; message: string; fieldErrors?: InquiryFieldErrors }

async function notifyByEmail(input: InquiryInput) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    console.warn(
      'RESEND_API_KEY is not set — inquiry saved without email notification.',
    )
    return
  }

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from:
        process.env.RESEND_FROM_EMAIL || 'Portfolio <onboarding@resend.dev>',
      to: [CONTACT_EMAIL],
      reply_to: input.email,
      subject: `New inquiry: ${input.service || 'Web development'} — ${input.name}`,
      text: [
        `Name: ${input.name}`,
        `Email: ${input.email}`,
        `Company: ${input.company || '—'}`,
        `Service: ${input.service || '—'}`,
        '',
        input.details,
      ].join('\n'),
    }),
  })

  if (!res.ok) {
    console.error('Resend notification failed:', res.status, await res.text())
  }
}

export async function submitInquiry(raw: InquiryInput): Promise<InquiryResult> {
  /* honeypot — real visitors never see or fill this field */
  if (raw.hp_x9) {
    console.warn('Inquiry dropped by honeypot:', raw.email)
    return { ok: true }
  }

  const fieldErrors = validateInquiry(raw)
  if (Object.keys(fieldErrors).length > 0) {
    return {
      ok: false,
      message: 'Please check the highlighted fields.',
      fieldErrors,
    }
  }

  const service = SERVICE_OPTIONS.includes(raw.service as ServiceOption)
    ? (raw.service as ServiceOption)
    : undefined

  const input: InquiryInput = {
    name: raw.name.trim(),
    email: raw.email.trim(),
    company: raw.company.trim().slice(0, 150),
    service: service ?? '',
    details: raw.details.trim(),
    hp_x9: '',
  }

  try {
    const payload = await getPayload({ config })
    await payload.create({
      collection: 'inquiries',
      data: {
        name: input.name,
        email: input.email,
        company: input.company || undefined,
        service,
        details: input.details,
      },
    })
  } catch (err) {
    console.error('Failed to save inquiry:', err)
    return {
      ok: false,
      message: `Something went wrong while sending your message. Please try again or email me directly at ${CONTACT_EMAIL}.`,
    }
  }

  /* the lead is already stored — a failed notification must not fail the submission */
  try {
    await notifyByEmail(input)
  } catch (err) {
    console.error('Resend notification failed:', err)
  }

  return { ok: true }
}
