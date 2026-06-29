import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from 'react'

export type Screen =
  | 'welcome' | 'login' | 'register' | 'quiz' | 'notifperm'
  | 'home' | 'workout' | 'diet' | 'progress'
  | 'profile' | 'notif' | 'contact' | 'admin'

export type NotifKey = 'entreno' | 'agua' | 'comidas' | 'peso' | 'motiva'
export type AdminTab = 'clientes' | 'mensajes' | 'stats'

export interface AppState {
  screen: Screen
  objetivo: string
  motivo: string
  nivel: string
  ritmo: string
  dieta: string
  diasEntreno: string
  contactSent: boolean
  done: boolean[]
  water: number
  mealsDone: boolean[]
  notif: Record<NotifKey, boolean>
  adminTab: AdminTab
  faqOpen: number
  videoEx: number
}

export interface AppController {
  state: AppState
  scrollRef: RefObject<HTMLDivElement>
  go: (s: Screen) => void
  pick: (k: keyof AppState, v: string) => void
  toggleDone: (i: number) => void
  toggleMeal: (i: number) => void
  waterAdd: () => void
  waterSub: () => void
  toggleNotif: (k: NotifKey) => void
  setAdminTab: (t: AdminTab) => void
  toggleFaq: (i: number) => void
  openVideo: (i: number) => void
  closeVideo: () => void
  acceptNotif: () => void
  skipNotif: () => void
  doLogin: () => void
  logout: () => void
  sendContact: () => void
  resetContact: () => void
}

const TABS: Screen[] = ['home', 'workout', 'diet', 'progress', 'profile']

const Ctx = createContext<AppController | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>({
    screen: 'welcome',
    objetivo: 'Perder grasa',
    motivo: 'Sentirme bien',
    nivel: 'Intermedio',
    ritmo: 'Activo',
    dieta: 'Equilibrada',
    diasEntreno: '4',
    contactSent: false,
    done: [false, false, false, false, false],
    water: 5,
    mealsDone: [false, false, false, false],
    notif: { entreno: true, agua: true, comidas: true, peso: true, motiva: false },
    adminTab: 'clientes',
    faqOpen: -1,
    videoEx: -1,
  })

  const scrollRef = useRef<HTMLDivElement>(null)
  const scrollTop = useCallback(() => {
    requestAnimationFrame(() => {
      if (scrollRef.current) scrollRef.current.scrollTop = 0
    })
  }, [])

  const go = useCallback((screen: Screen) => {
    setState((s) => ({ ...s, screen, contactSent: false }))
    scrollTop()
  }, [scrollTop])

  const pick = useCallback(
    (k: keyof AppState, v: string) => setState((s) => ({ ...s, [k]: v })),
    [],
  )
  const toggleDone = useCallback(
    (i: number) => setState((s) => { const d = s.done.slice(); d[i] = !d[i]; return { ...s, done: d } }),
    [],
  )
  const toggleMeal = useCallback(
    (i: number) => setState((s) => { const d = s.mealsDone.slice(); d[i] = !d[i]; return { ...s, mealsDone: d } }),
    [],
  )
  const waterAdd = useCallback(() => setState((s) => ({ ...s, water: Math.min(8, s.water + 1) })), [])
  const waterSub = useCallback(() => setState((s) => ({ ...s, water: Math.max(0, s.water - 1) })), [])
  const toggleNotif = useCallback(
    (k: NotifKey) => setState((s) => ({ ...s, notif: { ...s.notif, [k]: !s.notif[k] } })),
    [],
  )
  const setAdminTab = useCallback((t: AdminTab) => setState((s) => ({ ...s, adminTab: t })), [])
  const toggleFaq = useCallback(
    (i: number) => setState((s) => ({ ...s, faqOpen: s.faqOpen === i ? -1 : i })),
    [],
  )
  const openVideo = useCallback((i: number) => setState((s) => ({ ...s, videoEx: i })), [])
  const closeVideo = useCallback(() => setState((s) => ({ ...s, videoEx: -1 })), [])
  const acceptNotif = useCallback(() => {
    setState((s) => ({ ...s, notif: { entreno: true, agua: true, comidas: true, peso: true, motiva: true }, screen: 'home' }))
    scrollTop()
  }, [scrollTop])
  const skipNotif = useCallback(() => go('home'), [go])
  const doLogin = useCallback(() => go('home'), [go])
  const logout = useCallback(() => go('welcome'), [go])
  const resetContact = useCallback(() => setState((s) => ({ ...s, contactSent: false })), [])
  const sendContact = useCallback(() => {
    const v = (id: string) => {
      const el = document.getElementById(id) as HTMLInputElement | HTMLTextAreaElement | null
      return el ? el.value.trim() : ''
    }
    const name = v('contact-name'), email = v('contact-email'), subj = v('contact-subject'), msg = v('contact-msg')
    const subject = encodeURIComponent('PulsoFit · ' + (subj || 'Consulta') + (name ? ' · ' + name : ''))
    const body = encodeURIComponent(`Nombre: ${name}\nEmail: ${email}\nAsunto: ${subj}\n\n${msg}`)
    window.location.href = `mailto:infopulsofit@gmail.com?subject=${subject}&body=${body}`
    setState((s) => ({ ...s, contactSent: true }))
  }, [])

  const ctrl = useMemo<AppController>(() => ({
    state, scrollRef, go, pick, toggleDone, toggleMeal, waterAdd, waterSub,
    toggleNotif, setAdminTab, toggleFaq, openVideo, closeVideo, acceptNotif,
    skipNotif, doLogin, logout, sendContact, resetContact,
  }), [state, go, pick, toggleDone, toggleMeal, waterAdd, waterSub, toggleNotif,
    setAdminTab, toggleFaq, openVideo, closeVideo, acceptNotif, skipNotif,
    doLogin, logout, sendContact, resetContact])

  return <Ctx.Provider value={ctrl}>{children}</Ctx.Provider>
}

export function useApp(): AppController {
  const ctx = useContext(Ctx)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}

export function showTabs(s: AppState): boolean {
  return TABS.includes(s.screen) && s.videoEx < 0
}
