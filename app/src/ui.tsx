import type { CSSProperties, ReactNode } from 'react'
import { useApp, type AppState, type Screen } from './useApp'
import { GRAD, font, fontBlack, mono } from './theme'

type Group = 'objetivo' | 'motivo' | 'nivel' | 'ritmo' | 'dieta' | 'diasEntreno'

export function OptionButton({ group, label, two }: { group: Group; label: string; two: boolean }) {
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
        flex: two ? undefined : 1,
        border: on ? '1.5px solid #FF6B3D' : '1.5px solid #2A2336',
        background: on ? 'rgba(255,107,61,0.14)' : '#181320',
        color: on ? '#FFCBA8' : '#C7C2D0',
        transition: 'all .15s',
      }}
    >
      {label}
    </button>
  )
}

export function GradButton({
  children, onClick, glow, style,
}: { children: ReactNode; onClick?: () => void; glow?: boolean; style?: CSSProperties }) {
  return (
    <button
      onClick={onClick}
      style={{
        background: GRAD,
        color: '#1A0A06',
        border: 'none',
        borderRadius: '16px',
        padding: '18px',
        fontSize: '16px',
        fontWeight: 900,
        fontFamily: font,
        letterSpacing: '-0.01em',
        cursor: 'pointer',
        animation: glow ? 'pulseGlow 2.6s infinite' : undefined,
        ...style,
      }}
    >
      {children}
    </button>
  )
}

export function BackHeader({
  onBack, title, kicker, kickerColor = '#5C5F6B',
}: { onBack: () => void; title: string; kicker?: string; kickerColor?: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
      <button
        onClick={onBack}
        style={{
          width: '38px', height: '38px', flex: 'none', borderRadius: '12px',
          background: '#181320', border: '1px solid #2A2336', color: '#fff',
          fontSize: '17px', cursor: 'pointer',
        }}
      >
        ←
      </button>
      <div>
        {kicker && (
          <div style={{ fontFamily: mono, fontSize: '11px', color: kickerColor }}>{kicker}</div>
        )}
        <h2 style={{ margin: kicker ? '2px 0 0' : 0, fontFamily: fontBlack, fontSize: '24px', color: '#fff', letterSpacing: '-0.02em' }}>
          {title}
        </h2>
      </div>
    </div>
  )
}

export const card: CSSProperties = { background: '#15111C', border: '1px solid #221C2C' }

export function useGo() {
  const { go } = useApp()
  return (s: Screen) => go(s)
}

export function isScreen(state: AppState, s: Screen): boolean {
  return state.screen === s
}
