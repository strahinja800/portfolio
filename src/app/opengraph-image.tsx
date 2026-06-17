import { ImageResponse } from 'next/og'

export const runtime = 'edge'
export const alt = 'Strahinja Ković — Frontend Web Developer'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          backgroundColor: '#1a1b26',
          padding: '72px 80px',
          fontFamily: 'system-ui, sans-serif',
        }}
      >
        {/* Top — status pill */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            color: '#6b7280',
            fontSize: '15px',
            letterSpacing: '0.04em',
          }}
        >
          <div
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: '#4ade80',
            }}
          />
          Available for work · Remote / Europe
        </div>

        {/* Middle — headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 700,
              lineHeight: 1,
              letterSpacing: '-0.035em',
              color: '#f5f5f7',
            }}
          >
            Frontend web
            <br />
            developer building
            <br />
            <span style={{ color: '#a78bfa' }}>things that ship.</span>
          </div>
          <div
            style={{
              fontSize: '22px',
              color: '#8b92a5',
              marginTop: '12px',
              lineHeight: 1.5,
            }}
          >
            Strahinja Ković — TypeScript · React · Node · Postgres
          </div>
        </div>

        {/* Bottom — domain */}
        <div
          style={{
            fontSize: '16px',
            color: '#4b5563',
            letterSpacing: '0.08em',
            fontFamily: 'monospace',
          }}
        >
          strahinjakovic.dev
        </div>
      </div>
    ),
    { ...size },
  )
}
