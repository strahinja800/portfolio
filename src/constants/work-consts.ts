export const STACK_TAG =
  'font-mono-face text-[11px] lowercase tracking-[0.04em] text-muted border border-line px-2.5 py-[5px]'

const PROJECT_LINK_BASE =
  'group/link inline-flex items-center gap-[9px] whitespace-nowrap font-mono-face text-[12.5px] font-bold tracking-[0.06em] uppercase pb-[3px] border-b-2 transition-colors duration-250'

export const PROJECT_LINK_PRIMARY = `${PROJECT_LINK_BASE} text-accent border-accent`

export const PROJECT_LINK_SECONDARY = `${PROJECT_LINK_BASE} text-muted border-line hover:text-copy hover:border-accent`

export const PROJECT_LINK_ARROW =
  'transition-transform duration-250 group-hover/link:translate-x-0.75 group-hover/link:-translate-y-0.75'

/* section head — "SELECTED / WORK" style block used by Work and About */
export const SECTION_TITLE =
  'font-display-face text-[clamp(30px,5vw,56px)] leading-[0.88] tracking-[-0.035em] uppercase'

export const SECTION_INDEX =
  'font-mono-face text-[12px] tracking-[0.16em] uppercase text-faint whitespace-nowrap'

/* hatched placeholder behind project screenshots */
export const PROJECT_FRAME =
  'border-2 border-line-soft overflow-hidden [background:repeating-linear-gradient(45deg,var(--bg-2)_0_10px,var(--bg)_10px_20px)]'

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
