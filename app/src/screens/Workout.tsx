import { useApp } from '../useApp'
import { LIME, font, fontBlack, mono } from '../theme'

const EXERCISES: [string, string][] = [
  ['Press de banca', '4 series · 8 reps · 50 kg'],
  ['Press militar', '4 series · 10 reps · 30 kg'],
  ['Remo con barra', '4 series · 10 reps · 45 kg'],
  ['Fondos en paralelas', '3 series · 12 reps'],
  ['Curl de bíceps', '3 series · 12 reps · 14 kg'],
]

export function Workout() {
  const { state, toggleDone, go } = useApp()
  const doneCount = state.done.filter(Boolean).length
  const pct = (doneCount / 5) * 100

  return (
    <div
      style={{
        padding: '6px 22px 110px',
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
        animation: 'floatUp .4s ease',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
        }}
      >
        <div>
          <div style={{ fontFamily: mono, fontSize: '11px', color: '#5C5F6B' }}>
            JUEVES · TREN SUPERIOR
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
            Entreno de hoy
          </h2>
        </div>
        <div
          style={{
            width: '88px',
            height: '88px',
            flex: 'none',
            borderRadius: '50%',
            background: `conic-gradient(${LIME} ${pct}%, #1C1E27 0)`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <div
            style={{
              width: '70px',
              height: '70px',
              borderRadius: '50%',
              background: '#0C0D12',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <span
              style={{
                fontSize: '18px',
                fontWeight: 900,
                color: '#fff',
                lineHeight: 1,
              }}
            >
              {doneCount}/5
            </span>
            <span style={{ fontSize: '9px', color: '#7B7E8A', fontWeight: 700 }}>
              HECHO
            </span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {EXERCISES.map(([name, detail], i) => {
          const d = state.done[i]
          return (
            <button
              key={name}
              onClick={() => toggleDone(i)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                padding: '15px 16px',
                borderRadius: '16px',
                cursor: 'pointer',
                fontFamily: font,
                textAlign: 'left',
                border: d
                  ? '1.5px solid rgba(166,255,61,0.4)'
                  : '1.5px solid #1C1E27',
                background: d ? 'rgba(166,255,61,0.07)' : '#13141A',
                transition: 'all .15s',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '3px',
                  textAlign: 'left',
                }}
              >
                <span
                  style={{
                    fontSize: '15px',
                    fontWeight: 900,
                    color: d ? '#9396A2' : '#fff',
                    textDecoration: d ? 'line-through' : 'none',
                  }}
                >
                  {name}
                </span>
                <span
                  style={{
                    fontSize: '12px',
                    color: '#7B7E8A',
                    fontWeight: 600,
                  }}
                >
                  {detail}
                </span>
              </div>
              <span
                style={{
                  width: '28px',
                  height: '28px',
                  flex: 'none',
                  borderRadius: '9px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '15px',
                  fontWeight: 900,
                  border: d ? 'none' : '2px solid #2A2D38',
                  background: d ? LIME : 'transparent',
                  color: '#0A0A0A',
                }}
              >
                {d ? '✓' : ''}
              </span>
            </button>
          )
        })}
      </div>

      <button
        onClick={() => go('diet')}
        style={{
          background: LIME,
          color: '#0A0A0A',
          border: 'none',
          borderRadius: '16px',
          padding: '17px',
          fontSize: '15px',
          fontWeight: 900,
          fontFamily: font,
          cursor: 'pointer',
        }}
      >
        Terminar entreno 💪
      </button>
    </div>
  )
}
