import { useApp, planCopy, type Plan } from '../useApp'
import { LIME, font, fontBlack } from '../theme'

interface PlanDef {
  id: Plan
  name: string
  sub: string
  price: string
  per: string
  badge: string
}

const PLANS: PlanDef[] = [
  {
    id: 'mensual',
    name: 'Mensual',
    sub: 'Flexibilidad total',
    price: '4,99€',
    per: 'al mes',
    badge: '',
  },
  {
    id: 'anual',
    name: 'Anual',
    sub: 'Equivale a 4,16€/mes',
    price: '49,99€',
    per: 'al año',
    badge: 'AHORRA 17%',
  },
]

const FEATURES = [
  'Plan de entreno hecho a tu medida',
  'Dieta personalizada según tu objetivo',
  'Seguimiento de peso, fotos y récords',
  'Ajustes automáticos cada semana',
  'Chat directo con tu entrenador',
]

export function Plans() {
  const { state, pick, goPay } = useApp()
  const cta = planCopy(state.plan).cta

  return (
    <div
      style={{
        padding: '14px 22px 36px',
        display: 'flex',
        flexDirection: 'column',
        gap: '20px',
        animation: 'floatUp .4s ease',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          textAlign: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '54px',
            height: '54px',
            borderRadius: '16px',
            background: 'rgba(166,255,61,0.12)',
            border: '1px solid rgba(166,255,61,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '24px',
          }}
        >
          🔥
        </div>
        <h2
          style={{
            margin: '4px 0 0',
            fontFamily: fontBlack,
            fontSize: '27px',
            letterSpacing: '-0.02em',
            color: '#fff',
            lineHeight: 1.05,
          }}
        >
          Empieza tu cambio
          <br />
          hoy mismo
        </h2>
        <p style={{ margin: 0, color: '#9396A2', fontSize: '14px' }}>
          Plan de entreno + dieta + seguimiento. Cancela cuando quieras.
        </p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {PLANS.map((p) => {
          const chosen = state.plan === p.id
          return (
            <button
              key={p.id}
              onClick={() => pick('plan', p.id)}
              style={{
                width: '100%',
                padding: '18px',
                borderRadius: '20px',
                cursor: 'pointer',
                fontFamily: font,
                transition: 'all .15s',
                border: chosen ? `2px solid ${LIME}` : '2px solid #1C1E27',
                background: chosen ? 'rgba(166,255,61,0.06)' : '#13141A',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '10px',
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
                      display: 'flex',
                      alignItems: 'center',
                      gap: '7px',
                      fontSize: '16px',
                      fontWeight: 900,
                      color: '#fff',
                    }}
                  >
                    {p.name}
                    {p.badge && (
                      <span
                        style={{
                          fontSize: '9px',
                          fontWeight: 900,
                          color: '#0A0A0A',
                          background: LIME,
                          padding: '3px 7px',
                          borderRadius: '999px',
                          letterSpacing: '0.04em',
                        }}
                      >
                        {p.badge}
                      </span>
                    )}
                  </span>
                  <span
                    style={{
                      fontSize: '12px',
                      color: '#9396A2',
                      fontWeight: 600,
                    }}
                  >
                    {p.sub}
                  </span>
                </div>
                <div
                  style={{
                    textAlign: 'right',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1px',
                  }}
                >
                  <span
                    style={{
                      fontSize: '22px',
                      fontWeight: 900,
                      color: '#fff',
                      letterSpacing: '-0.02em',
                    }}
                  >
                    {p.price}
                  </span>
                  <span
                    style={{
                      fontSize: '11px',
                      color: '#7B7E8A',
                      fontWeight: 700,
                    }}
                  >
                    {p.per}
                  </span>
                </div>
              </div>
            </button>
          )
        })}
      </div>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '11px',
          background: '#13141A',
          border: '1px solid #1C1E27',
          borderRadius: '18px',
          padding: '18px',
        }}
      >
        {FEATURES.map((f) => (
          <div
            key={f}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '11px',
              fontSize: '14px',
              color: '#D4D6DD',
              fontWeight: 600,
            }}
          >
            <span
              style={{
                width: '20px',
                height: '20px',
                flex: 'none',
                borderRadius: '7px',
                background: 'rgba(166,255,61,0.16)',
                color: LIME,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '12px',
                fontWeight: 900,
              }}
            >
              ✓
            </span>
            {f}
          </div>
        ))}
      </div>

      <button
        onClick={goPay}
        style={{
          background: LIME,
          color: '#0A0A0A',
          border: 'none',
          borderRadius: '16px',
          padding: '18px',
          fontSize: '16px',
          fontWeight: 900,
          fontFamily: font,
          cursor: 'pointer',
        }}
      >
        {cta}
      </button>
      <div style={{ textAlign: 'center', fontSize: '11px', color: '#5C5F6B' }}>
        Pago seguro · Sin permanencia · Cancela en 1 toque
      </div>
    </div>
  )
}
