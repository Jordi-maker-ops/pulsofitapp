import { useApp, planCopy } from '../useApp'
import { LIME, font, fontBlack, mono } from '../theme'

interface Wallet {
  label: string
  mark: string
  markStyle: React.CSSProperties
  style: React.CSSProperties
}

const walletBase: React.CSSProperties = {
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '9px',
  padding: '15px',
  borderRadius: '14px',
  fontFamily: font,
  fontSize: '16px',
  fontWeight: 900,
  cursor: 'pointer',
  border: 'none',
}

const WALLETS: Wallet[] = [
  {
    label: 'Apple Pay',
    mark: '',
    markStyle: { fontSize: '17px' },
    style: { ...walletBase, background: '#000', color: '#fff', border: '1px solid #2A2D38' },
  },
  {
    label: 'Google Pay',
    mark: 'G',
    markStyle: { fontWeight: 900, color: '#4285F4', fontSize: '17px' },
    style: { ...walletBase, background: '#fff', color: '#1A1A1A' },
  },
  {
    label: 'PayPal',
    mark: '',
    markStyle: { fontSize: '17px' },
    style: { ...walletBase, background: '#FFC439', color: '#003087' },
  },
]

const fieldLabel: React.CSSProperties = {
  fontSize: '12px',
  fontWeight: 800,
  color: '#9396A2',
}

const fieldBox: React.CSSProperties = {
  background: '#15161D',
  border: '1px solid #23252F',
  borderRadius: '13px',
  padding: '14px',
  color: '#7B7E8A',
  fontSize: '15px',
  fontFamily: mono,
}

const infoCard: React.CSSProperties = {
  background: '#15161D',
  border: '1px solid #23252F',
  borderRadius: '14px',
  padding: '13px 15px',
  display: 'flex',
  alignItems: 'center',
  gap: '12px',
}

export function Pay() {
  const { state, go, pay } = useApp()
  const plan = planCopy(state.plan)

  return (
    <div
      style={{
        padding: '6px 22px 36px',
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
        animation: 'floatUp .4s ease',
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button
          onClick={() => go('plans')}
          style={{
            width: '38px',
            height: '38px',
            flex: 'none',
            borderRadius: '12px',
            background: '#15161D',
            border: '1px solid #23252F',
            color: '#fff',
            fontSize: '17px',
            cursor: 'pointer',
          }}
        >
          ←
        </button>
        <h2
          style={{
            margin: 0,
            fontFamily: fontBlack,
            fontSize: '23px',
            color: '#fff',
            letterSpacing: '-0.02em',
          }}
        >
          Confirmar y pagar
        </h2>
      </div>

      <div
        style={{
          background: '#13141A',
          border: '1px solid #1C1E27',
          borderRadius: '20px',
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
          }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <span style={{ fontSize: '16px', fontWeight: 900, color: '#fff' }}>
              {plan.name}
            </span>
            <span
              style={{ fontSize: '12px', color: '#9396A2', fontWeight: 600 }}
            >
              {plan.cycle}
            </span>
          </div>
          <span
            style={{ fontFamily: fontBlack, fontSize: '22px', color: '#fff' }}
          >
            {plan.price}
          </span>
        </div>
        <div style={{ height: '1px', background: '#1C1E27' }} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <span style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>
            Total a pagar hoy
          </span>
          <span style={{ fontSize: '18px', fontWeight: 900, color: LIME }}>
            {plan.price}
          </span>
        </div>
        <div style={{ fontSize: '11px', color: '#5C5F6B' }}>{plan.renew}</div>
      </div>

      <span style={{ fontSize: '13px', fontWeight: 800, color: '#fff' }}>
        Pago rápido
      </span>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {WALLETS.map((w) => (
          <button key={w.label} onClick={pay} style={w.style}>
            <span style={w.markStyle}>{w.mark}</span>
            {w.label}
          </button>
        ))}
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          margin: '2px 0',
        }}
      >
        <div style={{ flex: 1, height: '1px', background: '#1C1E27' }} />
        <span
          style={{
            fontSize: '11px',
            color: '#5C5F6B',
            fontWeight: 700,
            letterSpacing: '0.04em',
          }}
        >
          O TARJETA · TPV REDSYS
        </span>
        <div style={{ flex: 1, height: '1px', background: '#1C1E27' }} />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={fieldLabel}>Número de tarjeta</span>
          <div
            style={{
              ...fieldBox,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            1234 5678 9012 3456<span style={{ fontSize: '18px' }}>💳</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            <span style={fieldLabel}>Caducidad</span>
            <div style={fieldBox}>MM / AA</div>
          </div>
          <div
            style={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              gap: '6px',
            }}
          >
            <span style={fieldLabel}>CVC</span>
            <div style={fieldBox}>•••</div>
          </div>
        </div>
      </div>

      <button
        onClick={pay}
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
        Pagar {plan.price} con Redsys
      </button>

      <div style={infoCard}>
        <div
          style={{
            width: '34px',
            height: '34px',
            flex: 'none',
            borderRadius: '10px',
            background: '#0E1B3A',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '12px',
            fontWeight: 900,
            color: '#4D8DFF',
            fontFamily: font,
          }}
        >
          R
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span style={{ fontSize: '12px', color: '#7B7E8A', fontWeight: 700 }}>
            Procesado por
          </span>
          <span style={{ fontSize: '13px', color: '#fff', fontWeight: 800 }}>
            Redsys · TPV Virtual con 3D Secure
          </span>
        </div>
      </div>

      <div style={infoCard}>
        <div
          style={{
            width: '34px',
            height: '34px',
            flex: 'none',
            borderRadius: '10px',
            background: 'rgba(166,255,61,0.12)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '16px',
          }}
        >
          🏦
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span style={{ fontSize: '12px', color: '#7B7E8A', fontWeight: 700 }}>
            El pago se abona a
          </span>
          <span style={{ fontSize: '13px', color: '#fff', fontWeight: 800 }}>
            PulsoFit S.L. · ES** **** **** **** **23 4567
          </span>
        </div>
      </div>

      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '7px',
          fontSize: '11px',
          color: '#5C5F6B',
        }}
      >
        <span>🔒</span>Conexión segura con tu banco vía Redsys
      </div>
    </div>
  )
}
