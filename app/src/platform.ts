import { useEffect } from 'react'
import { Capacitor } from '@capacitor/core'

export function isNative(): boolean {
  try {
    return Capacitor.isNativePlatform()
  } catch {
    return false
  }
}

/**
 * Configure the native status bar to match the app (dark surface, light icons)
 * and hide the splash screen once the web layer is up. No-ops on the web.
 */
export function useNativeChrome(): void {
  useEffect(() => {
    if (!isNative()) return
    let cancelled = false

    void (async () => {
      try {
        const { StatusBar, Style } = await import('@capacitor/status-bar')
        if (cancelled) return
        await StatusBar.setStyle({ style: Style.Dark })
        if (Capacitor.getPlatform() === 'android') {
          await StatusBar.setBackgroundColor({ color: '#0C0D12' })
        }
      } catch {
        /* plugin unavailable — ignore */
      }
      try {
        const { SplashScreen } = await import('@capacitor/splash-screen')
        if (!cancelled) await SplashScreen.hide()
      } catch {
        /* ignore */
      }
    })()

    return () => {
      cancelled = true
    }
  }, [])
}
