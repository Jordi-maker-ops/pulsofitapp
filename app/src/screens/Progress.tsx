import { ImageSlot } from '../ImageSlot'
import { LIME, fontBlack, mono } from '../theme'

const WEIGHTS = [72.0, 71.1, 70.3, 69.6, 68.9, 68.4]
const LABELS = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6']
const MAX = 72.5
const MIN = 67.5

const statCard: React.CSSProperties = {
  background: '#13141A',
  border: '1px solid #1C1E27',
  borderRadius: '18px',
  padding: '16px',
}

export function Progress() {
  return (
    <div
      style={{
        padding: '6px 22px 110px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        animation: 'floatUp .4s ease',
      }}
    >
      <div>
        <div style={{ fontFamily: mono, fontSize: '11px', color: '#5C5F6B' }}>
          ÚLTIMAS 6 SEMANAS
        </div>
        <h2
          style={{
            margin: '3px 0 0',
            fontFamily: fontBlack,
            fontSize: '25px',
            color: '#fff',
            letterSpacing: '-0.02em',
          }}
        >
          Tu progreso
        </h2>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
        }}
      >
        <div style={statCard}>
          <div style={{ fontSize: '12px', color: '#7B7E8A', fontWeight: 700 }}>
            Peso actual
          </div>
          <div style={{ fontFamily: fontBlack, fontSize: '26px', color: '#fff' }}>
            68,4 kg
          </div>
          <div style={{ fontSize: '12px', color: LIME, fontWeight: 800 }}>
            ▼ 3,6 kg
          </div>
        </div>
        <div style={statCard}>
          <div style={{ fontSize: '12px', color: '#7B7E8A', fontWeight: 700 }}>
            Entrenos
          </div>
          <div style={{ fontFamily: fontBlack, fontSize: '26px', color: '#fff' }}>
            38
          </div>
          <div style={{ fontSize: '12px', color: LIME, fontWeight: 800 }}>
            ▲ 94% asistencia
          </div>
        </div>
      </div>

      <div
        style={{
          background: '#13141A',
          border: '1px solid #1C1E27',
          borderRadius: '20px',
          padding: '20px 18px 16px',
        }}
      >
        <div
          style={{
            fontSize: '13px',
            fontWeight: 800,
            color: '#fff',
            marginBottom: '16px',
          }}
        >
          Evolución del peso
        </div>
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '8px',
            height: '120px',
          }}
        >
          {WEIGHTS.map((w, i) => {
            const h = 18 + ((w - MIN) / (MAX - MIN)) * 82
            const last = i === WEIGHTS.length - 1
            return (
              <div
                key={LABELS[i]}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '7px',
                  flex: 1,
                  height: '100%',
                  justifyContent: 'flex-end',
                }}
              >
                <div
                  style={{
                    width: '100%',
                    maxWidth: '26px',
                    height: `${h}%`,
                    borderRadius: '8px 8px 4px 4px',
                    background: last ? LIME : '#2A2D38',
                    transition: 'all .2s',
                  }}
                />
                <span
                  style={{ fontSize: '10px', color: '#5C5F6B', fontWeight: 700 }}
                >
                  {LABELS[i]}
                </span>
              </div>
            )
          })}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
        <span style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>
          Fotos de progreso
        </span>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '12px',
          }}
        >
          <div
            style={{
              position: 'relative',
              aspectRatio: '3 / 4',
              borderRadius: '16px',
              overflow: 'hidden',
            }}
          >
            <ImageSlot
              id="progress-before"
              shape="rect"
              fit="cover"
              placeholder="Foto antes"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
              }}
            />
            <span
              style={{
                position: 'absolute',
                left: '10px',
                bottom: '10px',
                fontFamily: mono,
                fontSize: '10px',
                color: '#7B7E8A',
                background: 'rgba(0,0,0,0.4)',
                padding: '3px 7px',
                borderRadius: '6px',
                pointerEvents: 'none',
              }}
            >
              ANTES · 12 abr
            </span>
          </div>
          <div
            style={{
              position: 'relative',
              aspectRatio: '3 / 4',
              borderRadius: '16px',
              overflow: 'hidden',
            }}
          >
            <ImageSlot
              id="progress-now"
              shape="rect"
              fit="cover"
              placeholder="Foto ahora"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
              }}
            />
            <span
              style={{
                position: 'absolute',
                left: '10px',
                bottom: '10px',
                fontFamily: mono,
                fontSize: '10px',
                color: LIME,
                background: 'rgba(0,0,0,0.4)',
                padding: '3px 7px',
                borderRadius: '6px',
                pointerEvents: 'none',
              }}
            >
              AHORA · 24 jun
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
