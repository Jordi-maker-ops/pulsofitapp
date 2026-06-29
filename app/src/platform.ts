import { Capacitor } from '@capacitor/core'

export function isNative(): boolean {
  try {
    return Capacitor.isNativePlatform()
  } catch {
    return false
  }
}

/**
 * Native chrome (status bar style, splash) is configured declaratively:
 * iOS via Info.plist (light status bar), Android via the theme. Kept as a
 * no-op hook so call sites stay stable if we add native plugins later.
 */
export function useNativeChrome(): void {
  // Intentionally empty — see Info.plist / Android theme.
}
