import { ImageSlot } from '../ImageSlot'
import { useApp, planCopy } from '../useApp'
import { LIME, font, fontBlack } from '../theme'

interface Macro {
  label: string
  val: string
  width: string
  color: string
}

const MACROS: Macro[] = [
  { label: 'Proteína', val: '120g', width: '75%', color: LIME },
  { label: 'Carbos', val: '145g', width: '69%', color: '#5A6072' },
  { label: 'Grasas', val: '40g', width: '64%', color: '#5A6072' },
]

const card: React.CSSProperties = {
  background: '#13141A',
  border: '1px solid #1C1E27',
}

export function Home() {
  const { state, go, askCancel } = useApp()
  const plan = planCopy(state.plan)
  const subPrice = `${plan.price} ${plan.per}`

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
          alignItems: 'center',
        }}
      >
        <div>
          <div style={{ fontSize: '13px', color: '#7B7E8A', fontWeight: 600 }}>
            Buenos días 👋
          </div>
          <div
            style={{
              fontFamily: fontBlack,
              fontSize: '26px',
              color: '#fff',
              letterSpacing: '-0.02em',
            }}
          >
            Hola, Laura
          </div>
        </div>
        <ImageSlot
          id="home-avatar"
          shape="rounded"
          radius={14}
          fit="cover"
          placeholder="Tú"
          style={{ width: '46px', height: '46px' }}
        />
      </div>

      <div
        style={{
          background: 'linear-gradient(135deg,#A6FF3D,#7FD41E)',
          borderRadius: '22px',
          padding: '20px',
          color: '#0A0A0A',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
          <span
            style={{
              fontSize: '12px',
              fontWeight: 800,
              opacity: 0.7,
              letterSpacing: '0.04em',
            }}
          >
            ENTRENO DE HOY
          </span>
          <span
            style={{
              fontSize: '21px',
              fontWeight: 900,
              letterSpacing: '-0.02em',
            }}
          >
            Tren superior · Fuerza
          </span>
          <span style={{ fontSize: '13px', fontWeight: 700, opacity: 0.75 }}>
            6 ejercicios · 45 min
          </span>
        </div>
        <div
          onClick={() => go('workout')}
          style={{
            width: '54px',
            height: '54px',
            borderRadius: '50%',
            background: '#0A0A0A',
            color: LIME,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '22px',
            cursor: 'pointer',
            flex: 'none',
          }}
        >
          ▶
        </div>
      </div>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '12px',
        }}
      >
        <div
          style={{
            ...card,
            borderRadius: '18px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}
        >
          <span style={{ fontSize: '12px', color: '#7B7E8A', fontWeight: 700 }}>
            Calorías hoy
          </span>
          <span
            style={{ fontFamily: fontBlack, fontSize: '26px', color: '#fff' }}
          >
            1.480
            <span
              style={{ fontSize: '13px', color: '#5C5F6B', fontWeight: 700 }}
            >
              {' '}
              / 2.100
            </span>
          </span>
          <div
            style={{
              height: '5px',
              borderRadius: '999px',
              background: '#1C1E27',
              overflow: 'hidden',
            }}
          >
            <div style={{ height: '100%', width: '70%', background: LIME }} />
          </div>
        </div>
        <div
          style={{
            ...card,
            borderRadius: '18px',
            padding: '16px',
            display: 'flex',
            flexDirection: 'column',
            gap: '6px',
          }}
        >
          <span style={{ fontSize: '12px', color: '#7B7E8A', fontWeight: 700 }}>
            Racha 🔥
          </span>
          <span
            style={{ fontFamily: fontBlack, fontSize: '26px', color: '#fff' }}
          >
            12{' '}
            <span
              style={{ fontSize: '13px', color: '#5C5F6B', fontWeight: 700 }}
            >
              días
            </span>
          </span>
          <span style={{ fontSize: '12px', color: LIME, fontWeight: 700 }}>
            ¡Sigue así, máquina!
          </span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
        <span style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>
          Tus macros de hoy
        </span>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr 1fr',
            gap: '10px',
          }}
        >
          {MACROS.map((m) => (
            <div
              key={m.label}
              style={{
                ...card,
                borderRadius: '16px',
                padding: '14px',
                display: 'flex',
                flexDirection: 'column',
                gap: '6px',
                alignItems: 'flex-start',
              }}
            >
              <span
                style={{ fontSize: '11px', color: '#7B7E8A', fontWeight: 700 }}
              >
                {m.label}
              </span>
              <span style={{ fontSize: '18px', fontWeight: 900, color: '#fff' }}>
                {m.val}
              </span>
              <div
                style={{
                  height: '4px',
                  width: '100%',
                  borderRadius: '999px',
                  background: '#1C1E27',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    height: '100%',
                    width: m.width,
                    background: m.color,
                    borderRadius: '999px',
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
        <span style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>
          Tu suscripción
        </span>
        <div
          style={{
            ...card,
            borderRadius: '18px',
            padding: '18px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '10px',
            }}
          >
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}
            >
              <span
                style={{ fontSize: '16px', fontWeight: 900, color: '#fff' }}
              >
                {plan.name}
              </span>
              <span
                style={{ fontSize: '13px', color: '#9396A2', fontWeight: 600 }}
              >
                {subPrice}
              </span>
            </div>
            <span
              style={{
                fontSize: '9px',
                fontWeight: 900,
                color: '#0A0A0A',
                background: LIME,
                padding: '4px 9px',
                borderRadius: '999px',
                letterSpacing: '0.04em',
                flex: 'none',
              }}
            >
              ACTIVA
            </span>
          </div>
          <div style={{ fontSize: '12px', color: '#7B7E8A', fontWeight: 600 }}>
            Próximo cobro: {plan.renewDate}
          </div>
          <div style={{ height: '1px', background: '#1C1E27' }} />
          <div style={{ display: 'flex', gap: '10px' }}>
            <button
              onClick={() => go('plans')}
              style={{
                flex: 1,
                background: '#15161D',
                border: '1px solid #23252F',
                color: '#fff',
                borderRadius: '13px',
                padding: '13px',
                fontSize: '13.5px',
                fontWeight: 800,
                fontFamily: font,
                cursor: 'pointer',
              }}
            >
              Cambiar plan
            </button>
            <button
              onClick={askCancel}
              style={{
                flex: 1,
                borderRadius: '13px',
                padding: '13px',
                fontSize: '13.5px',
                fontWeight: 800,
                fontFamily: font,
                cursor: 'pointer',
                background: 'transparent',
                border: '1px solid rgba(255,90,54,0.4)',
                color: '#FF7A5C',
              }}
            >
              Cancelar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
