import { useEffect } from 'react'
import { AppProvider, useApp, showTabs, type Screen } from './useApp'
import { GRAD, A, font, fontBlack, mono } from './theme'
import { Welcome, Login, Register, Quiz, NotifPerm } from './screens/Onboarding'
import { Home } from './screens/Home'
import { Workout } from './screens/Workout'
import { Diet } from './screens/Diet'
import { Progress } from './screens/Progress'
import { Profile, Notif, Contact } from './screens/Account'
import { Admin } from './screens/Admin'
import { VideoOverlay } from './VideoOverlay'
import { isNative, useNativeChrome } from './platform'

const NAV: [Screen, string][] = [
  ['welcome', 'Bienvenida'], ['login', 'Login'], ['register', 'Registro'], ['quiz', 'Cuestionario'], ['notifperm', 'Permisos'],
  ['home', 'Inicio'], ['workout', 'Entreno'], ['diet', 'Dieta'], ['progress', 'Progreso'], ['profile', 'Perfil'], ['notif', 'Avisos'], ['contact', 'Contacto'], ['admin', 'Admin'],
]

const TABS: [Screen, string, string][] = [
  ['home', '🏠', 'Inicio'], ['workout', '💪', 'Entreno'], ['diet', '🥗', 'Dieta'], ['progress', '📈', 'Progreso'], ['profile', '👤', 'Perfil'],
]

const SCREENS: Record<Screen, () => JSX.Element> = {
  welcome: Welcome, login: Login, register: Register, quiz: Quiz, notifperm: NotifPerm,
  home: Home, workout: Workout, diet: Diet, progress: Progress,
  profile: Profile, notif: Notif, contact: Contact, admin: Admin,
}

const gradText = { background: GRAD, WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' } as const

function NavPills() {
  const { state, go } = useApp()
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', justifyContent: 'center', maxWidth: '560px' }}>
      {NAV.map(([id, label]) => {
        const on = state.screen === id
        return (
          <button key={id} onClick={() => go(id)} style={{
            padding: '8px 14px', borderRadius: '999px', cursor: 'pointer', fontFamily: font,
            fontSize: '12px', fontWeight: 800, transition: 'all .15s',
            border: on ? '1px solid transparent' : '1px solid #241F2C',
            background: on ? GRAD : '#120E18', color: on ? '#1A0A06' : '#8A8596',
          }}>{label}</button>
        )
      })}
    </div>
  )
}

function TabBar({ safeArea = false }: { safeArea?: boolean }) {
  const { state, go } = useApp()
  if (!showTabs(state)) return null
  return (
    <div style={{
      flex: 'none', borderTop: '1px solid #1E1828', background: 'rgba(12,10,17,0.92)',
      backdropFilter: 'blur(12px)', display: 'flex', alignItems: 'center', justifyContent: 'space-around',
      padding: safeArea ? '10px 14px calc(14px + env(safe-area-inset-bottom))' : '0 14px 14px',
      height: safeArea ? 'auto' : '74px',
    }}>
      {TABS.map(([id, icon, label]) => {
        const on = state.screen === id
        return (
          <button key={id} onClick={() => go(id)} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', background: 'transparent', border: 'none', cursor: 'pointer', fontFamily: font, color: on ? A : '#5C5F6B', flex: 1, padding: '4px' }}>
            <span style={{ fontSize: '21px', lineHeight: 1 }}>{icon}</span>
            <span style={{ fontSize: '10px', fontWeight: 800, letterSpacing: '0.02em' }}>{label}</span>
          </button>
        )
      })}
    </div>
  )
}

function ScreenArea() {
  const { state, scrollRef } = useApp()
  const Active = SCREENS[state.screen]
  return (
    <div ref={scrollRef} style={{ flex: 1, overflowY: 'auto', overflowX: 'hidden', position: 'relative' }}>
      <Active />
    </div>
  )
}

function StatusBar() {
  return (
    <div style={{ height: '46px', flex: 'none', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 26px', fontSize: '13px', fontWeight: 700, color: '#fff', zIndex: 5 }}>
      <span>9:41</span>
      <span style={{ display: 'flex', gap: '6px', alignItems: 'center', fontSize: '11px', color: '#C7CAD4' }}>PULSOFIT</span>
    </div>
  )
}

function Phone() {
  return (
    <div style={{ width: '100%', maxWidth: '412px', height: '872px', background: '#0C0A11', borderRadius: '42px', border: '1px solid #221C2C', boxShadow: '0 40px 120px rgba(0,0,0,0.6), inset 0 0 0 8px #060509', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column' }}>
      <StatusBar />
      <ScreenArea />
      <VideoOverlay />
      <TabBar />
    </div>
  )
}

function ShowcaseShell() {
  return (
    <div style={{ minHeight: '100vh', background: 'radial-gradient(1200px 600px at 50% -10%, #1B1320 0%, #08070B 62%)', fontFamily: font, display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '28px 16px 60px', gap: '22px' }}>
      <div style={{ textAlign: 'center' }}>
        <div style={{ fontFamily: fontBlack, letterSpacing: '-0.02em', fontSize: '20px', color: '#fff', display: 'flex', alignItems: 'center', gap: '8px', justifyContent: 'center' }}>
          <span style={{ width: '11px', height: '11px', borderRadius: '3px', background: GRAD, display: 'inline-block', transform: 'rotate(45deg)' }} />
          PULSO<span style={gradText}>FIT</span>
        </div>
        <div style={{ color: '#5C5F6B', fontSize: '12px', fontFamily: mono, marginTop: '5px', letterSpacing: '0.04em' }}>PROTOTIPO · TOCA UNA PANTALLA PARA NAVEGAR</div>
      </div>
      <NavPills />
      <Phone />
    </div>
  )
}

function MobileShell() {
  useNativeChrome()
  return (
    <div style={{ position: 'relative', height: '100dvh', width: '100%', background: '#0C0A11', fontFamily: font, display: 'flex', flexDirection: 'column', paddingTop: 'env(safe-area-inset-top)', overflow: 'hidden' }}>
      <ScreenArea />
      <VideoOverlay />
      <TabBar safeArea />
    </div>
  )
}

function Root() {
  const forceMobile = typeof window !== 'undefined' && new URLSearchParams(window.location.search).has('mobile')
  useEffect(() => {
    if (isNative() || forceMobile) document.body.style.background = '#0C0A11'
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
