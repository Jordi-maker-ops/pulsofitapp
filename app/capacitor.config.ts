import type { CapacitorConfig } from '@capacitor/cli'

const config: CapacitorConfig = {
  appId: 'com.pulsofit.app',
  appName: 'PulsoFit',
  webDir: 'dist',
  backgroundColor: '#0C0D12',
  plugins: {
    SplashScreen: {
      launchShowDuration: 600,
      backgroundColor: '#0C0D12',
      showSpinner: false,
    },
  },
}

export default config
