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
  | 'welcome'
  | 'quiz'
  | 'plans'
  | 'pay'
  | 'home'
  | 'workout'
  | 'diet'
  | 'progress'

export type Plan = 'mensual' | 'anual'
export type PayStatus = 'idle' | 'processing' | 'success'
export type CancelStatus = 'idle' | 'confirm' | 'done'

const GATED: Screen[] = ['home', 'workout', 'diet', 'progress']

export interface AppState {
  screen: Screen
  objetivo: string
  dieta: string
  comidas: string
  plan: Plan
  payStatus: PayStatus
  cancelStatus: CancelStatus
  subscribed: boolean
  done: boolean[]
}

export interface AppController {
  state: AppState
  scrollRef: RefObject<HTMLDivElement>
  go: (screen: Screen) => void
  goPay: () => void
  pay: () => void
  finishPay: () => void
  askCancel: () => void
  confirmCancel: () => void
  keepSub: () => void
  closeCancel: () => void
  pick: (key: 'objetivo' | 'dieta' | 'comidas' | 'plan', val: string) => void
  toggleDone: (i: number) => void
}

const AppContext = createContext<AppController | null>(null)

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>({
    screen: 'welcome',
    objetivo: 'Perder grasa',
    dieta: 'Equilibrada',
    comidas: '4',
    plan: 'anual',
    payStatus: 'idle',
    cancelStatus: 'idle',
    subscribed: false,
    done: [false, false, false, false, false],
  })

  const scrollRef = useRef<HTMLDivElement>(null)
  const payTimer = useRef<number | undefined>(undefined)

  const scrollTop = useCallback(() => {
    // Defer so the new screen has mounted before we reset the scroll position.
    requestAnimationFrame(() => {
      if (scrollRef.current) scrollRef.current.scrollTop = 0
    })
  }, [])

  const go = useCallback(
    (screen: Screen) => {
      setState((s) => {
        const target =
          GATED.includes(screen) && !s.subscribed ? 'plans' : screen
        return { ...s, screen: target }
      })
      scrollTop()
    },
    [scrollTop],
  )

  const goPay = useCallback(() => {
    setState((s) => ({ ...s, payStatus: 'idle', screen: 'pay' }))
    scrollTop()
  }, [scrollTop])

  const pay = useCallback(() => {
    setState((s) => ({ ...s, payStatus: 'processing' }))
    window.clearTimeout(payTimer.current)
    payTimer.current = window.setTimeout(() => {
      setState((s) => ({ ...s, payStatus: 'success' }))
    }, 1700)
  }, [])

  const finishPay = useCallback(() => {
    setState((s) => ({
      ...s,
      payStatus: 'idle',
      subscribed: true,
      screen: 'home',
    }))
    scrollTop()
  }, [scrollTop])

  const askCancel = useCallback(
    () => setState((s) => ({ ...s, cancelStatus: 'confirm' })),
    [],
  )
  const confirmCancel = useCallback(
    () => setState((s) => ({ ...s, cancelStatus: 'done', subscribed: false })),
    [],
  )
  const keepSub = useCallback(
    () => setState((s) => ({ ...s, cancelStatus: 'idle' })),
    [],
  )
  const closeCancel = useCallback(() => {
    setState((s) => ({ ...s, cancelStatus: 'idle', screen: 'plans' }))
    scrollTop()
  }, [scrollTop])

  const pick = useCallback(
    (key: 'objetivo' | 'dieta' | 'comidas' | 'plan', val: string) =>
      setState((s) => ({ ...s, [key]: val })),
    [],
  )

  const toggleDone = useCallback(
    (i: number) =>
      setState((s) => {
        const done = s.done.slice()
        done[i] = !done[i]
        return { ...s, done }
      }),
    [],
  )

  const controller = useMemo<AppController>(
    () => ({
      state,
      scrollRef,
      go,
      goPay,
      pay,
      finishPay,
      askCancel,
      confirmCancel,
      keepSub,
      closeCancel,
      pick,
      toggleDone,
    }),
    [
      state,
      go,
      goPay,
      pay,
      finishPay,
      askCancel,
      confirmCancel,
      keepSub,
      closeCancel,
      pick,
      toggleDone,
    ],
  )

  return <AppContext.Provider value={controller}>{children}</AppContext.Provider>
}

export function useApp(): AppController {
  const ctx = useContext(AppContext)
  if (!ctx) throw new Error('useApp must be used within AppProvider')
  return ctx
}

// Plan-dependent copy, mirrors renderVals() in the prototype.
export function planCopy(plan: Plan) {
  return plan === 'anual'
    ? {
        name: 'Plan Anual',
        price: '49,99€',
        cycle: 'Facturado una vez al año',
        renew: 'Se renueva el 26 jun 2027 · Cancela cuando quieras',
        per: '/año',
        renewDate: '26 jun 2027',
        cta: 'Suscribirme por 49,99€/año',
      }
    : {
        name: 'Plan Mensual',
        price: '4,99€',
        cycle: 'Facturado cada mes',
        renew: 'Se renueva el 26 jul 2026 · Cancela cuando quieras',
        per: '/mes',
        renewDate: '26 jul 2026',
        cta: 'Suscribirme por 4,99€/mes',
      }
}
