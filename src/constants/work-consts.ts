export const STACK_TAG =
  'font-mono-face text-[11.5px] tracking-[0.02em] text-muted border border-line-soft rounded-[6px] px-2.5 py-[5px] bg-surface-2'

export const PROJECTS = [
  {
    num: '001 — SaaS platform',
    title: 'Atlas — analytics for product teams',
    desc: 'A real-time analytics dashboard processing millions of events a day. Led the rebuild from a slow monolith to a streaming pipeline, cutting query latency from seconds to under 200ms.',
    stack: ['TypeScript', 'Next.js', 'Node', 'ClickHouse', 'Kafka', 'AWS'],
    label: 'product shot — dashboard.png',
    flip: false,
  },
  {
    num: '002 — E-commerce',
    title: 'Loom — headless storefront engine',
    desc: 'A composable commerce stack powering storefronts for 40+ brands. Built the headless API, checkout, and a plugin system that lets teams ship custom flows without forking the core.',
    stack: ['React', 'GraphQL', 'Stripe', 'PostgreSQL', 'Redis', 'Docker'],
    label: 'product shot — storefront.png',
    flip: true,
  },
  {
    num: '003 — Realtime',
    title: 'Quill — collaborative docs editor',
    desc: 'A live multiplayer document editor with offline support and conflict-free sync. Implemented the CRDT layer and presence system; the editor stays in sync across hundreds of concurrent cursors.',
    stack: ['TypeScript', 'WebSockets', 'CRDT', 'Rust', 'WASM', 'Fly.io'],
    label: 'product shot — editor.png',
    flip: false,
  },
]
