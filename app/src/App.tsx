import { useEffect } from 'react'
import { AppProvider, useApp, type Screen } from './useApp'
import { LIME, font, fontBlack, mono } from './theme'
import { Welcome } from './screens/Welcome'
import { Quiz } from './screens/Quiz'
import { Plans } from './screens/Plans'
import { Pay } from './screens/Pay'
import { Home } from './screens/Home'
import { Workout } from './screens/Workout'
import { Diet } from './screens/Diet'
import { Progress } from './screens/Progress'
import { PayOverlay, CancelOverlay } from './overlays'
import { isNative, useNativeChrome } from './platform'

const GATED: Screen[] = ['home', 'workout', 'diet', 'progress']

const NAV: [Screen, string][] = [
  ['welcome', 'Bienvenida'],
  ['quiz', 'Cuestionario'],
  ['plans', 'Planes'],
  ['pay', 'Pago'],
  ['home', 'Inicio'],
  ['workout', 'Entreno'],
  ['diet', 'Dieta'],
  ['progress', 'Progreso'],
]

const TABS: [Screen, string, string][] = [
  ['home', '🏠', 'Inicio'],
  ['workout', '💪', 'Entreno'],
  ['diet', '🥗', 'Dieta'],
  ['progress', '📈', 'Progreso'],
]

const SCREENS: Record<Screen, () => JSX.Element> = {
  welcome: Welcome,
  quiz: Quiz,
  plans: Plans,
  pay: Pay,
  home: Home,
  workout: Workout,
  diet: Diet,
  progress: Progress,
}

function NavPills() {
  const { state, go } = useApp()
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '7px',
        justifyContent: 'center',
        maxWidth: '480px',
      }}
    >
      {NAV.map(([id, label]) => {
        const active = state.screen === id
        const locked = GATED.includes(id) && !state.subscribed
        return (
          <button
            key={id}
            onClick={() => go(id)}
            style={{
              padding: '8px 14px',
              borderRadius: '999px',
              cursor: 'pointer',
              fontFamily: font,
              fontSize: '12px',
              fontWeight: 800,
              transition: 'all .15s',
              border: active ? `1px solid ${LIME}` : '1px solid #1F212B',
              background: active ? LIME : '#101218',
              color: active ? '#0A0A0A' : '#8A8D99',
              opacity: locked ? 0.5 : 1,
            }}
          >
            {locked ? `${label} 🔒` : label}
          </button>
        )
      })}
    </div>
  )
}

function TabBar({ safeArea = false }: { safeArea?: boolean }) {
  const { state, go } = useApp()
  if (!GATED.includes(state.screen)) return null
  return (
    <div
      style={{
        flex: 'none',
        borderTop: '1px solid #1A1C24',
        background: 'rgba(10,11,15,0.92)',
        backdropFilter: 'blur(12px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around',
        // On a real device, reserve the home-indicator inset below the tabs.
        padding: safeArea
          ? '10px 14px calc(14px + env(safe-area-inset-bottom))'
          : '0 14px 14px',
        height: safeArea ? 'auto' : '74px',
      }}
    >
      {TABS.map(([id, icon, label]) => {
        const on = state.screen === id
        return (
          <button
            key={id}
            onClick={() => go(id)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '4px',
              background: 'transparent',
              border: 'none',
              cursor: 'pointer',
              fontFamily: font,
              color: on ? LIME : '#5C5F6B',
              flex: 1,
              padding: '4px',
            }}
          >
            <span style={{ fontSize: '21px', lineHeight: 1 }}>{icon}</span>
            <span
              style={{
                fontSize: '10px',
                fontWeight: 800,
                letterSpacing: '0.02em',
              }}
            >
              {label}
            </span>
          </button>
        )
      })}
    </div>
  )
}

// Scrollable content area shared by both shells.
function ScreenArea() {
  const { state, scrollRef } = useApp()
  const ActiveScreen = SCREENS[state.screen]
  return (
    <div
      ref={scrollRef}
      style={{
        flex: 1,
        overflowY: 'auto',
        overflowX: 'hidden',
        position: 'relative',
      }}
    >
      <ActiveScreen />
    </div>
  )
}

// ---- Desktop browser: showcase the app inside a phone mockup ----
function Phone() {
  return (
    <div
      style={{
        width: '100%',
        maxWidth: '412px',
        height: '872px',
        background: '#0C0D12',
        borderRadius: '42px',
        border: '1px solid #1C1E27',
        boxShadow: '0 40px 120px rgba(0,0,0,0.6), inset 0 0 0 8px #060608',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          height: '46px',
          flex: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 26px',
          fontSize: '13px',
          fontWeight: 700,
          color: '#fff',
          zIndex: 5,
        }}
      >
        <span>9:41</span>
        <span
          style={{
            display: 'flex',
            gap: '6px',
            alignItems: 'center',
            fontSize: '11px',
            color: '#C7CAD4',
          }}
        >
          PULSOFIT
        </span>
      </div>

      <ScreenArea />

      <PayOverlay />
      <CancelOverlay />
      <TabBar />
    </div>
  )
}

function ShowcaseShell() {
  return (
    <div
      style={{
        minHeight: '100vh',
        background:
          'radial-gradient(1200px 600px at 50% -10%, #16181F 0%, #08080B 60%)',
        fontFamily: font,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '28px 16px 60px',
        gap: '22px',
      }}
    >
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            fontFamily: fontBlack,
            letterSpacing: '-0.02em',
            fontSize: '20px',
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            justifyContent: 'center',
          }}
        >
          <span
            style={{
              width: '11px',
              height: '11px',
              borderRadius: '3px',
              background: LIME,
              display: 'inline-block',
              transform: 'rotate(45deg)',
            }}
          />
          PULSO<span style={{ color: LIME }}>FIT</span>
        </div>
        <div
          style={{
            color: '#5C5F6B',
            fontSize: '12px',
            fontFamily: mono,
            marginTop: '5px',
            letterSpacing: '0.04em',
          }}
        >
          PROTOTIPO · TOCA UNA PANTALLA PARA NAVEGAR
        </div>
      </div>

      <NavPills />
      <Phone />
    </div>
  )
}

// ---- Real device: full-screen app, no mockup chrome ----
function MobileShell() {
  useNativeChrome()
  return (
    <div
      style={{
        position: 'relative',
        height: '100dvh',
        width: '100%',
        background: '#0C0D12',
        fontFamily: font,
        display: 'flex',
        flexDirection: 'column',
        // Keep content clear of the notch / status bar.
        paddingTop: 'env(safe-area-inset-top)',
        overflow: 'hidden',
      }}
    >
      <ScreenArea />
      <PayOverlay />
      <CancelOverlay />
      <TabBar safeArea />
    </div>
  )
}

function Root() {
  // Allow forcing the mobile shell in a browser for previewing: ?mobile=1
  const forceMobile =
    typeof window !== 'undefined' &&
    new URLSearchParams(window.location.search).has('mobile')

  useEffect(() => {
    if (isNative() || forceMobile) {
      document.body.style.background = '#0C0D12'
    }
  }, [forceMobile])

  return isNative() || forceMobile ? <MobileShell /> : <ShowcaseShell />
}

export function App() {
  return (
    <AppProvider>
      <Root />
    </AppProvider>
  )
}
