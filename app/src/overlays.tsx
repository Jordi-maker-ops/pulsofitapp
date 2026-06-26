import { useApp } from './useApp'
import { LIME, font, fontBlack } from './theme'

export function PayOverlay() {
  const { state, finishPay } = useApp()
  if (state.payStatus !== 'processing' && state.payStatus !== 'success')
    return null

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 20,
        background: 'rgba(8,8,11,0.82)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '30px',
      }}
    >
      {state.payStatus === 'processing' && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '18px',
            textAlign: 'center',
          }}
        >
          <div
            style={{
              width: '58px',
              height: '58px',
              borderRadius: '50%',
              border: '4px solid #1C1E27',
              borderTopColor: LIME,
              animation: 'spin .8s linear infinite',
            }}
          />
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}
          >
            <span style={{ fontSize: '15px', fontWeight: 800, color: '#fff' }}>
              Conectando con Redsys…
            </span>
            <span
              style={{ fontSize: '12px', color: '#7B7E8A', fontWeight: 600 }}
            >
              Pasarela segura de tu banco · 3D Secure
            </span>
          </div>
        </div>
      )}
      {state.payStatus === 'success' && (
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '14px',
            textAlign: 'center',
            animation: 'popIn .35s ease',
          }}
        >
          <div
            style={{
              width: '84px',
              height: '84px',
              borderRadius: '50%',
              background: LIME,
              color: '#0A0A0A',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '42px',
              fontWeight: 900,
            }}
          >
            ✓
          </div>
          <div
            style={{
              fontFamily: fontBlack,
              fontSize: '24px',
              color: '#fff',
              letterSpacing: '-0.02em',
            }}
          >
            ¡Pago confirmado!
          </div>
          <div
            style={{
              fontSize: '14px',
              color: '#9396A2',
              lineHeight: 1.5,
              maxWidth: '240px',
            }}
          >
            Tu suscripción ya está activa y el importe se abonará a la cuenta de
            PulsoFit. ¡Vamos a por ese cambio! 💪
          </div>
          <button
            onClick={finishPay}
            style={{
              marginTop: '8px',
              background: LIME,
              color: '#0A0A0A',
              border: 'none',
              borderRadius: '14px',
              padding: '15px 28px',
              fontSize: '15px',
              fontWeight: 900,
              fontFamily: font,
              cursor: 'pointer',
            }}
          >
            Entrar a PulsoFit
          </button>
        </div>
      )}
    </div>
  )
}

export function CancelOverlay() {
  const { state, keepSub, confirmCancel, closeCancel } = useApp()
  if (state.cancelStatus !== 'confirm' && state.cancelStatus !== 'done')
    return null

  return (
    <div
      style={{
        position: 'absolute',
        inset: 0,
        zIndex: 20,
        background: 'rgba(8,8,11,0.82)',
        backdropFilter: 'blur(6px)',
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        padding: '18px',
      }}
    >
      {state.cancelStatus === 'confirm' && (
        <div
          style={{
            width: '100%',
            background: '#13141A',
            border: '1px solid #23252F',
            borderRadius: '24px',
            padding: '24px 22px',
            display: 'flex',
            flexDirection: 'column',
            gap: '14px',
            animation: 'popIn .3s ease',
          }}
        >
          <div
            style={{
              width: '52px',
              height: '52px',
              borderRadius: '15px',
              background: 'rgba(255,90,54,0.12)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '24px',
            }}
          >
            😢
          </div>
          <div
            style={{
              fontFamily: fontBlack,
              fontSize: '21px',
              color: '#fff',
              letterSpacing: '-0.02em',
            }}
          >
            ¿Cancelar tu suscripción?
          </div>
          <div style={{ fontSize: '14px', color: '#9396A2', lineHeight: 1.5 }}>
            Perderás el acceso{' '}
            <strong style={{ color: '#FF7A5C' }}>al instante</strong> a tu plan
            de entreno, la dieta y el seguimiento. Podrás volver cuando quieras.
          </div>
          <button
            onClick={keepSub}
            style={{
              marginTop: '4px',
              background: LIME,
              color: '#0A0A0A',
              border: 'none',
              borderRadius: '14px',
              padding: '16px',
              fontSize: '15px',
              fontWeight: 900,
              fontFamily: font,
              cursor: 'pointer',
            }}
          >
            Mantener suscripción
          </button>
          <button
            onClick={confirmCancel}
            style={{
              background: 'transparent',
              color: '#FF7A5C',
              border: 'none',
              fontSize: '14px',
              fontWeight: 800,
              fontFamily: font,
              cursor: 'pointer',
              padding: '6px',
            }}
          >
            Sí, cancelar y perder el acceso
          </button>
        </div>
      )}
      {state.cancelStatus === 'done' && (
        <div
          style={{
            width: '100%',
            background: '#13141A',
            border: '1px solid #23252F',
            borderRadius: '24px',
            padding: '26px 22px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '13px',
            textAlign: 'center',
            animation: 'popIn .3s ease',
          }}
        >
          <div
            style={{
              width: '72px',
              height: '72px',
              borderRadius: '50%',
              background: '#1C1E27',
              color: '#9396A2',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '32px',
            }}
          >
            🔒
          </div>
          <div
            style={{
              fontFamily: fontBlack,
              fontSize: '21px',
              color: '#fff',
              letterSpacing: '-0.02em',
            }}
          >
            Suscripción cancelada
          </div>
          <div
            style={{
              fontSize: '14px',
              color: '#9396A2',
              lineHeight: 1.5,
              maxWidth: '250px',
            }}
          >
            Has perdido el acceso a las funciones premium. Vuelve a suscribirte
            cuando quieras para retomar tu plan.
          </div>
          <button
            onClick={closeCancel}
            style={{
              marginTop: '6px',
              background: LIME,
              border: 'none',
              color: '#0A0A0A',
              borderRadius: '14px',
              padding: '14px 28px',
              fontSize: '15px',
              fontWeight: 900,
              fontFamily: font,
              cursor: 'pointer',
            }}
          >
            Ver planes
          </button>
        </div>
      )}
    </div>
  )
}
