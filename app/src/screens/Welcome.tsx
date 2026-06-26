import { ImageSlot } from '../ImageSlot'
import { useApp } from '../useApp'
import { LIME, font, fontBlack } from '../theme'

export function Welcome() {
  const { go } = useApp()
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100%',
        animation: 'floatUp .4s ease',
      }}
    >
      <div
        style={{
          position: 'relative',
          height: '430px',
          flex: 'none',
          background: '#15171E',
          display: 'flex',
          alignItems: 'flex-end',
          overflow: 'hidden',
        }}
      >
        <ImageSlot
          id="welcome-hero"
          shape="rect"
          fit="cover"
          placeholder="Arrastra tu foto: chico y chica entrenando"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            pointerEvents: 'none',
            background:
              'linear-gradient(to top, #0C0D12 6%, rgba(12,13,18,0.1) 55%, rgba(12,13,18,0.4) 100%)',
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '18px',
            left: '22px',
            background: 'rgba(166,255,61,0.14)',
            border: '1px solid rgba(166,255,61,0.35)',
            color: LIME,
            fontSize: '11px',
            fontWeight: 800,
            letterSpacing: '0.08em',
            padding: '6px 11px',
            borderRadius: '999px',
          }}
        >
          TU ENTRENADOR PERSONAL
        </div>
      </div>
      <div
        style={{
          padding: '8px 26px 30px',
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
        }}
      >
        <h1
          style={{
            margin: 0,
            fontFamily: fontBlack,
            fontSize: '38px',
            lineHeight: 0.98,
            letterSpacing: '-0.03em',
            color: '#fff',
          }}
        >
          Entrena, come
          <br />y avanza
          <br />
          <span style={{ color: LIME }}>sin pensar.</span>
        </h1>
        <p
          style={{
            margin: 0,
            color: '#9396A2',
            fontSize: '15px',
            lineHeight: 1.5,
          }}
        >
          Yo te hago el plan de entreno, la dieta y el seguimiento. Tú solo
          tienes que aparecer.{' '}
          <strong style={{ color: '#C7CAD4' }}>¡Vamos a por ello!</strong>
        </p>
        <button
          onClick={() => go('quiz')}
          style={{
            marginTop: '6px',
            background: LIME,
            color: '#0A0A0A',
            border: 'none',
            borderRadius: '16px',
            padding: '18px',
            fontSize: '16px',
            fontWeight: 900,
            fontFamily: font,
            letterSpacing: '-0.01em',
            cursor: 'pointer',
            animation: 'pulseGlow 2.6s infinite',
          }}
        >
          Empezar ahora
        </button>
        <button
          onClick={() => go('plans')}
          style={{
            background: 'transparent',
            color: '#9396A2',
            border: 'none',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
            padding: '4px',
            fontFamily: font,
          }}
        >
          Ya tengo cuenta · Iniciar sesión
        </button>
      </div>
    </div>
  )
}
