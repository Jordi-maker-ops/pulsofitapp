import { ImageSlot } from '../ImageSlot'
import { useApp } from '../useApp'
import { GRAD, GRAD90, font, fontBlack, mono } from '../theme'
import { OptionButton, GradButton } from '../ui'
import { PERM_REMINDERS } from '../data'

const gradText = {
  background: GRAD,
  WebkitBackgroundClip: 'text',
  backgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
} as const

const input = {
  background: '#181320', border: '1px solid #2A2336', borderRadius: '13px',
  padding: '15px', color: '#fff', fontSize: '15px', outline: 'none',
} as const
const fieldLabel = { fontSize: '12px', fontWeight: 800, color: '#9A93A6' } as const
const col = (gap: number) => ({ display: 'flex', flexDirection: 'column' as const, gap: `${gap}px` })
const qLabel = { fontSize: '13px', fontWeight: 800, color: '#fff' } as const
const quizInput = { ...input, borderRadius: '14px', padding: '14px 15px', fontSize: '14px' }

export function Welcome() {
  const { go } = useApp()
  return (
    <div style={{ ...col(0), minHeight: '100%', animation: 'floatUp .4s ease' }}>
      <div style={{ position: 'relative', height: '430px', flex: 'none', background: '#17121E', display: 'flex', alignItems: 'flex-end', overflow: 'hidden' }}>
        <ImageSlot id="welcome-hero" shape="rect" fit="cover" placeholder="Arrastra tu foto: chico y chica entrenando" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'linear-gradient(to top, #0C0A11 6%, rgba(12,10,17,0.1) 55%, rgba(12,10,17,0.4) 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', background: 'radial-gradient(120% 80% at 80% 0%, rgba(255,61,110,0.22), transparent 60%)' }} />
        <div style={{ position: 'absolute', top: '18px', left: '22px', background: 'rgba(255,107,61,0.16)', border: '1px solid rgba(255,107,61,0.4)', color: '#FFB088', fontSize: '11px', fontWeight: 800, letterSpacing: '0.08em', padding: '6px 11px', borderRadius: '999px' }}>100% GRATIS · TU ENTRENADOR PERSONAL</div>
      </div>
      <div style={{ padding: '8px 26px 30px', ...col(16) }}>
        <h1 style={{ margin: 0, fontFamily: fontBlack, fontSize: '38px', lineHeight: 0.98, letterSpacing: '-0.03em', color: '#fff' }}>
          Entrena, come<br />y avanza<br /><span style={gradText}>sin pensar.</span>
        </h1>
        <p style={{ margin: 0, color: '#9A93A6', fontSize: '15px', lineHeight: 1.5 }}>
          Yo te hago el plan de entreno, la dieta y el seguimiento. Gratis y a tu medida. <strong style={{ color: '#CEC8D8' }}>¡Vamos a por ello!</strong>
        </p>
        <GradButton glow onClick={() => go('register')} style={{ marginTop: '6px' }}>Empezar gratis</GradButton>
        <button onClick={() => go('login')} style={{ background: 'transparent', color: '#9A93A6', border: 'none', fontSize: '14px', fontWeight: 600, cursor: 'pointer', padding: '4px', fontFamily: font }}>Ya tengo cuenta · Iniciar sesión</button>
      </div>
    </div>
  )
}

function Field({ label, type, placeholder }: { label: string; type: string; placeholder: string }) {
  return (
    <div style={col(6)}>
      <span style={fieldLabel}>{label}</span>
      <input type={type} placeholder={placeholder} style={input} />
    </div>
  )
}

export function Login() {
  const { go, doLogin } = useApp()
  return (
    <div style={{ padding: '14px 24px 36px', ...col(20), animation: 'floatUp .4s ease', minHeight: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button onClick={() => go('welcome')} style={{ width: '38px', height: '38px', flex: 'none', borderRadius: '12px', background: '#181320', border: '1px solid #2A2336', color: '#fff', fontSize: '17px', cursor: 'pointer' }}>←</button>
        <h2 style={{ margin: 0, fontFamily: fontBlack, fontSize: '24px', color: '#fff', letterSpacing: '-0.02em' }}>Bienvenido de nuevo</h2>
      </div>
      <p style={{ margin: '-8px 0 0', color: '#9A93A6', fontSize: '14px' }}>Entra para seguir con tu plan. ¡Te estábamos esperando! 💪</p>
      <div style={col(14)}>
        <Field label="Email" type="email" placeholder="tucorreo@email.com" />
        <Field label="Contraseña" type="password" placeholder="••••••••" />
        <span style={{ fontSize: '12px', color: '#9A93A6', fontWeight: 600, textAlign: 'right' }}>¿Olvidaste tu contraseña?</span>
      </div>
      <GradButton onClick={doLogin}>Iniciar sesión</GradButton>
      <div style={{ textAlign: 'center', fontSize: '13px', color: '#9A93A6' }}>¿No tienes cuenta? <span onClick={() => go('register')} style={{ color: '#FF7A4D', fontWeight: 800, cursor: 'pointer' }}>Regístrate gratis</span></div>
    </div>
  )
}

export function Register() {
  const { go } = useApp()
  return (
    <div style={{ padding: '14px 24px 36px', ...col(18), animation: 'floatUp .4s ease', minHeight: '100%' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button onClick={() => go('welcome')} style={{ width: '38px', height: '38px', flex: 'none', borderRadius: '12px', background: '#181320', border: '1px solid #2A2336', color: '#fff', fontSize: '17px', cursor: 'pointer' }}>←</button>
        <div>
          <div style={{ fontFamily: mono, fontSize: '11px', color: '#5C5F6B' }}>PASO 1 DE 3 · TU CUENTA</div>
          <h2 style={{ margin: '2px 0 0', fontFamily: fontBlack, fontSize: '23px', color: '#fff', letterSpacing: '-0.02em' }}>Crea tu cuenta gratis</h2>
        </div>
      </div>
      <div style={col(14)}>
        <Field label="Nombre completo" type="text" placeholder="Laura García" />
        <Field label="Email" type="email" placeholder="tucorreo@email.com" />
        <Field label="Contraseña" type="password" placeholder="Mínimo 8 caracteres" />
      </div>
      <label style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '12.5px', color: '#9A93A6', fontWeight: 600, cursor: 'pointer' }}>
        <span style={{ width: '18px', height: '18px', flex: 'none', borderRadius: '6px', background: GRAD, color: '#1A0A06', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 900 }}>✓</span>
        Acepto los <span style={{ color: '#CEC8D8', textDecoration: 'underline' }}>Términos</span> y la <span style={{ color: '#CEC8D8', textDecoration: 'underline' }}>Privacidad</span>
      </label>
      <GradButton onClick={() => go('quiz')}>Continuar</GradButton>
      <div style={{ textAlign: 'center', fontSize: '13px', color: '#9A93A6' }}>¿Ya tienes cuenta? <span onClick={() => go('login')} style={{ color: '#FF7A4D', fontWeight: 800, cursor: 'pointer' }}>Inicia sesión</span></div>
    </div>
  )
}

const dim = { background: '#181320', border: '1px solid #2A2336', borderRadius: '14px', padding: '14px', display: 'flex', alignItems: 'baseline', gap: '5px' } as const

export function Quiz() {
  const { go } = useApp()
  return (
    <div style={{ padding: '8px 22px 36px', ...col(22), animation: 'floatUp .4s ease' }}>
      <div style={col(10)}>
        <div style={{ height: '6px', borderRadius: '999px', background: '#221C2C', overflow: 'hidden' }}><div style={{ height: '100%', width: '66%', background: GRAD90, borderRadius: '999px' }} /></div>
        <div style={{ fontFamily: mono, fontSize: '11px', color: '#5C5F6B' }}>PASO 2 DE 3 · CUÉNTAME DE TI</div>
        <h2 style={{ margin: 0, fontFamily: fontBlack, fontSize: '25px', letterSpacing: '-0.02em', color: '#fff', lineHeight: 1.05 }}>Encantado 👋<br />Vamos a conocernos</h2>
        <p style={{ margin: 0, color: '#9A93A6', fontSize: '14px', lineHeight: 1.5 }}>Cuanto mejor te conozca, más a tu medida será tu plan. Sé sincero/a, esto queda entre tú y yo. 🤝</p>
      </div>

      <div style={col(9)}>
        <span style={qLabel}>¿Cómo te llamamos?</span>
        <input type="text" placeholder="Tu nombre o como prefieras 😊" style={quizInput} />
      </div>

      <div style={col(11)}>
        <span style={{ ...qLabel, letterSpacing: '0.02em' }}>¿Qué es lo que más te gustaría conseguir?</span>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '9px' }}>
          {['Perder grasa', 'Ganar músculo', 'Mantenerme', 'Más resistencia'].map((l) => <OptionButton key={l} group="objetivo" label={l} two />)}
        </div>
      </div>

      <div style={col(11)}>
        <span style={qLabel}>Y dime… ¿qué te mueve de verdad?</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {['Sentirme bien', 'Verme mejor', 'Tener energía', 'Salud', 'Un evento'].map((l) => <OptionButton key={l} group="motivo" label={l} two />)}
        </div>
      </div>

      <div style={col(11)}>
        <span style={qLabel}>¿Cómo dirías que estás ahora mismo?</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          {['Empezando', 'Intermedio', 'Avanzado'].map((l) => <OptionButton key={l} group="nivel" label={l} two={false} />)}
        </div>
      </div>

      <div style={col(11)}>
        <span style={qLabel}>¿Cómo es tu día a día?</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          {['Sedentario', 'Activo', 'Muy activo'].map((l) => <OptionButton key={l} group="ritmo" label={l} two={false} />)}
        </div>
      </div>

      <div style={col(9)}>
        <span style={qLabel}>¿Cuál es tu meta soñada? Ponle nombre 💭</span>
        <input type="text" placeholder="Ej: volver a ponerme mis vaqueros favoritos" style={quizInput} />
      </div>

      <div style={col(11)}>
        <span style={qLabel}>¿Cómo comes normalmente?</span>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
          {['Equilibrada', 'Alta en proteína', 'Vegetariana', 'Sin control'].map((l) => <OptionButton key={l} group="dieta" label={l} two />)}
        </div>
      </div>

      <div style={{ display: 'flex', gap: '11px' }}>
        <div style={{ flex: 1, ...col(7) }}>
          <span style={qLabel}>Tu peso hoy</span>
          <div style={dim}><span style={{ fontSize: '24px', fontWeight: 900, color: '#fff' }}>72</span><span style={{ fontSize: '13px', color: '#7B7E8A', fontWeight: 700 }}>kg</span></div>
        </div>
        <div style={{ flex: 1, ...col(7) }}>
          <span style={qLabel}>Tu altura</span>
          <div style={dim}><span style={{ fontSize: '24px', fontWeight: 900, color: '#fff' }}>175</span><span style={{ fontSize: '13px', color: '#7B7E8A', fontWeight: 700 }}>cm</span></div>
        </div>
      </div>

      <div style={col(11)}>
        <span style={qLabel}>¿Cuántos días a la semana puedes sacar?</span>
        <div style={{ display: 'flex', gap: '8px' }}>
          {['2', '3', '4', '5'].map((l) => <OptionButton key={l} group="diasEntreno" label={l} two={false} />)}
        </div>
      </div>

      <div style={col(9)}>
        <span style={qLabel}>¿Algo que deba saber? Alergias, lesiones…</span>
        <input type="text" placeholder="Ej: intolerante a la lactosa, molestia de rodilla" style={quizInput} />
      </div>

      <GradButton onClick={() => go('notifperm')} style={{ marginTop: '4px' }}>Crear mi plan personalizado</GradButton>
    </div>
  )
}

export function NotifPerm() {
  const { acceptNotif, skipNotif } = useApp()
  return (
    <div style={{ padding: '20px 24px 36px', ...col(20), animation: 'floatUp .4s ease', minHeight: '100%' }}>
      <div style={col(6)}>
        <div style={{ height: '6px', borderRadius: '999px', background: '#221C2C', overflow: 'hidden' }}><div style={{ height: '100%', width: '100%', background: GRAD90, borderRadius: '999px' }} /></div>
        <div style={{ fontFamily: mono, fontSize: '11px', color: '#5C5F6B', marginTop: '6px' }}>PASO 3 DE 3 · ÚLTIMO PASO</div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '14px', textAlign: 'center', marginTop: '6px' }}>
        <div style={{ width: '96px', height: '96px', borderRadius: '30px', background: GRAD, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '46px', boxShadow: '0 16px 40px rgba(255,61,110,0.35)' }}>
          <span style={{ display: 'inline-block', animation: 'bellRing 2.4s ease-in-out infinite', transformOrigin: '50% 10%' }}>🔔</span>
        </div>
        <h2 style={{ margin: '4px 0 0', fontFamily: fontBlack, fontSize: '26px', color: '#fff', letterSpacing: '-0.02em', lineHeight: 1.05 }}>No lo dejes a medias</h2>
        <p style={{ margin: 0, color: '#9A93A6', fontSize: '14.5px', lineHeight: 1.5, maxWidth: '280px' }}>Activa los recordatorios y te avisaré en el momento justo. Quien recibe avisos entrena <strong style={{ color: '#FFCBA8' }}>3 veces más</strong>. 💪</p>
      </div>
      <div style={{ ...col(10), background: '#15111C', border: '1px solid #221C2C', borderRadius: '18px', padding: '16px' }}>
        {PERM_REMINDERS.map((p) => (
          <div key={p.title} style={{ display: 'flex', alignItems: 'center', gap: '13px' }}>
            <div style={{ width: '40px', height: '40px', flex: 'none', borderRadius: '12px', background: 'rgba(255,107,61,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '19px' }}>{p.icon}</div>
            <div style={{ flex: 1, ...col(1) }}>
              <span style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>{p.title}</span>
              <span style={{ fontSize: '12px', color: '#9A93A6', fontWeight: 600 }}>{p.body}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={{ ...col(10), marginTop: '2px' }}>
        <GradButton glow onClick={acceptNotif}>Activar recordatorios</GradButton>
        <button onClick={skipNotif} style={{ background: 'transparent', color: '#9A93A6', border: 'none', fontSize: '14px', fontWeight: 700, fontFamily: font, cursor: 'pointer', padding: '6px' }}>Ahora no, gracias</button>
      </div>
      <div style={{ textAlign: 'center', fontSize: '11px', color: '#5C5F6B' }}>Podrás cambiarlo cuando quieras desde Notificaciones.</div>
    </div>
  )
}
