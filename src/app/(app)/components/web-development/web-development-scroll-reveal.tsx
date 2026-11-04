'use client'

import { useScrollReveal } from '@/hooks/use-scroll-reveal'

/* lets the server-rendered page opt into the shared reveal animation */
export default function WebDevelopmentScrollReveal() {
  useScrollReveal()
  return null
}
