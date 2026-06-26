import { useApp } from '../useApp'
import { LIME, font, fontBlack, mono } from '../theme'

type Group = 'objetivo' | 'dieta' | 'comidas'

function OptionButton({
  group,
  label,
  two,
}: {
  group: Group
  label: string
  two: boolean
}) {
  const { state, pick } = useApp()
  const on = state[group] === label
  return (
    <button
      onClick={() => pick(group, label)}
      style={{
        padding: two ? '15px 10px' : '11px 16px',
        borderRadius: '13px',
        cursor: 'pointer',
        fontFamily: font,
        fontWeight: 800,
        fontSize: '13.5px',
        textAlign: 'center',
        lineHeight: 1.15,
        border: on ? `1.5px solid ${LIME}` : '1.5px solid #23252F',
        background: on ? 'rgba(166,255,61,0.12)' : '#15161D',
        color: on ? '#D7FFA8' : '#C7CAD4',
        transition: 'all .15s',
      }}
    >
      {label}
    </button>
  )
}

const labelStyle: React.CSSProperties = {
  fontSize: '13px',
  fontWeight: 800,
  color: '#fff',
}

const inputBox: React.CSSProperties = {
  background: '#15161D',
  border: '1px solid #23252F',
  borderRadius: '14px',
  padding: '14px',
}

export function Quiz() {
  const { go } = useApp()
  return (
    <div
      style={{
        padding: '8px 22px 36px',
        display: 'flex',
        flexDirection: 'column',
        gap: '22px',
        animation: 'floatUp .4s ease',
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div
          style={{
            height: '6px',
            borderRadius: '999px',
            background: '#1C1E27',
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              height: '100%',
              width: '80%',
              background: LIME,
              borderRadius: '999px',
            }}
          />
        </div>
        <div style={{ fontFamily: mono, fontSize: '11px', color: '#5C5F6B' }}>
          PASO 4 DE 5 · CONÓCETE
        </div>
        <h2
          style={{
            margin: 0,
            fontFamily: fontBlack,
            fontSize: '25px',
            letterSpacing: '-0.02em',
            color: '#fff',
            lineHeight: 1.05,
          }}
        >
          Cuéntame sobre ti
        </h2>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
        <span style={{ ...labelStyle, letterSpacing: '0.02em' }}>
          ¿Cuál es tu objetivo principal?
        </span>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '9px',
          }}
        >
          {['Perder grasa', 'Ganar músculo', 'Mantenerme', 'Más resistencia'].map(
            (l) => (
              <OptionButton key={l} group="objetivo" label={l} two />
            ),
          )}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
        <span style={labelStyle}>¿Qué meta quieres alcanzar?</span>
        <div
          style={{
            background: '#15161D',
            border: '1px solid #23252F',
            borderRadius: '14px',
            padding: '14px 15px',
            color: '#7B7E8A',
            fontSize: '14px',
            fontStyle: 'italic',
          }}
        >
          Ej: bajar 5 kg para el verano 🏖️
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
        <span style={labelStyle}>¿Cómo es tu alimentación actual?</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {['Equilibrada', 'Alta en proteína', 'Vegetariana', 'Sin control'].map(
            (l) => (
              <OptionButton key={l} group="dieta" label={l} two={false} />
            ),
          )}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '11px' }}>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '7px',
          }}
        >
          <span style={labelStyle}>Peso actual</span>
          <div
            style={{
              ...inputBox,
              display: 'flex',
              alignItems: 'baseline',
              gap: '5px',
            }}
          >
            <span style={{ fontSize: '24px', fontWeight: 900, color: '#fff' }}>
              72
            </span>
            <span
              style={{ fontSize: '13px', color: '#7B7E8A', fontWeight: 700 }}
            >
              kg
            </span>
          </div>
        </div>
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            gap: '7px',
          }}
        >
          <span style={labelStyle}>Altura</span>
          <div
            style={{
              ...inputBox,
              display: 'flex',
              alignItems: 'baseline',
              gap: '5px',
            }}
          >
            <span style={{ fontSize: '24px', fontWeight: 900, color: '#fff' }}>
              175
            </span>
            <span
              style={{ fontSize: '13px', color: '#7B7E8A', fontWeight: 700 }}
            >
              cm
            </span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
        <span style={labelStyle}>¿Cuántas comidas haces al día?</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          {['2', '3', '4', '5'].map((l) => (
            <OptionButton key={l} group="comidas" label={l} two={false} />
          ))}
        </div>
      </div>

      <button
        onClick={() => go('plans')}
        style={{
          marginTop: '4px',
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
        Continuar
      </button>
    </div>
  )
}
