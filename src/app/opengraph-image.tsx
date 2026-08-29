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
          backgroundColor: '#050806',
          padding: '68px 80px',
          fontFamily: 'monospace',
          borderTop: '10px solid #5ef08f',
        }}
      >
        {/* Top — status */}
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '14px',
            color: '#97ad9f',
            fontSize: '15px',
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
          }}
        >
          <div
            style={{
              width: '10px',
              height: '10px',
              backgroundColor: '#5ef08f',
            }}
          />
          Open to full-time roles · Remote / Europe
        </div>

        {/* Middle — headline */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
          <div
            style={{
              fontSize: '72px',
              fontWeight: 700,
              lineHeight: 0.9,
              letterSpacing: '-0.045em',
              textTransform: 'uppercase',
              color: '#eafff1',
            }}
          >
            Frontend web
            <br />
            developer building
            <br />
            <span style={{ color: '#5ef08f' }}>things that ship.</span>
          </div>
          <div
            style={{
              fontSize: '21px',
              color: '#97ad9f',
              marginTop: '10px',
              lineHeight: 1.5,
            }}
          >
            Strahinja Ković — TypeScript · React · Next.js · Node
          </div>
        </div>

        {/* Bottom — domain */}
        <div
          style={{
            fontSize: '16px',
            color: '#4d6657',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
          }}
        >
          strahinjakovic.dev
        </div>
      </div>
    ),
    { ...size },
  )
}
