import { ImageSlot } from '../ImageSlot'
import { useApp } from '../useApp'
import { GRAD, fontBlack, font } from '../theme'
import { BackHeader } from '../ui'
import { NOTIF_FEED, NOTIF_DEFS, FAQS } from '../data'

const card = { background: '#15111C', border: '1px solid #221C2C' } as const
const col = (g: number) => ({ display: 'flex', flexDirection: 'column' as const, gap: `${g}px` })

export function Profile() {
  const { go, state, logout } = useApp()
  const stats = [
    { val: '68,4', label: 'PESO (KG)' },
    { val: '175', label: 'ALTURA (CM)' },
    { val: '22,3', label: 'IMC' },
  ]
  const fields = [
    ['Edad', '28 años'], ['Sexo', 'Mujer'], ['Nivel físico', state.nivel],
    ['Objetivo', state.objetivo], ['Lo que te mueve', state.motivo], ['Ritmo de vida', state.ritmo],
    ['Días de entreno', `${state.diasEntreno} días/semana`], ['Preferencia dieta', state.dieta],
    ['Alergias / lesiones', 'Lactosa · rodilla'],
  ]
  return (
    <div style={{ padding: '6px 22px 110px', ...col(18), animation: 'floatUp .4s ease' }}>
      <BackHeader onBack={() => go('home')} title="Mi perfil" />
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <div style={{ width: '72px', height: '72px', flex: 'none', borderRadius: '20px', overflow: 'hidden' }}>
          <ImageSlot id="profile-photo" shape="rounded" radius={20} fit="cover" placeholder="Foto" style={{ width: '72px', height: '72px' }} />
        </div>
        <div style={col(3)}>
          <span style={{ fontFamily: fontBlack, fontSize: '21px', color: '#fff', letterSpacing: '-0.02em' }}>Laura García</span>
          <span style={{ fontSize: '13px', color: '#9A93A6', fontWeight: 600 }}>laura.garcia@email.com</span>
          <span style={{ fontSize: '11px', color: '#FF7A4D', fontWeight: 800, background: 'rgba(255,107,61,0.14)', padding: '3px 9px', borderRadius: '999px', width: 'fit-content' }}>Nivel intermedio</span>
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
        {stats.map((p) => (
          <div key={p.label} style={{ ...card, borderRadius: '16px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '3px', alignItems: 'center' }}>
            <span style={{ fontFamily: fontBlack, fontSize: '19px', color: '#fff' }}>{p.val}</span>
            <span style={{ fontSize: '10px', color: '#7B7E8A', fontWeight: 700 }}>{p.label}</span>
          </div>
        ))}
      </div>
      <div style={col(10)}>
        <span style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>Tus datos</span>
        <div style={{ ...card, borderRadius: '18px', overflow: 'hidden' }}>
          {fields.map(([label, val]) => (
            <div key={label} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', padding: '14px 16px', borderBottom: '1px solid #1A1622' }}>
              <span style={{ fontSize: '13px', color: '#9A93A6', fontWeight: 700 }}>{label}</span>
              <span style={{ fontSize: '13.5px', color: '#fff', fontWeight: 700, textAlign: 'right' }}>{val}</span>
            </div>
          ))}
        </div>
      </div>
      <button onClick={() => go('quiz')} style={{ background: '#181320', border: '1px solid #2A2336', color: '#fff', borderRadius: '14px', padding: '15px', fontSize: '14px', fontWeight: 800, fontFamily: font, cursor: 'pointer' }}>Editar mis datos y objetivos</button>
      <button onClick={logout} style={{ background: 'transparent', border: 'none', color: '#FF7A5C', fontSize: '14px', fontWeight: 800, fontFamily: font, cursor: 'pointer', padding: '6px' }}>Cerrar sesión</button>
    </div>
  )
}

export function Notif() {
  const { go, state, toggleNotif } = useApp()
  return (
    <div style={{ padding: '6px 22px 110px', ...col(18), animation: 'floatUp .4s ease' }}>
      <BackHeader onBack={() => go('home')} title="Notificaciones" />
      <div style={col(10)}>
        <span style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>Recientes</span>
        {NOTIF_FEED.map((n) => (
          <div key={n.title} style={{ ...card, borderRadius: '16px', padding: '14px 16px', display: 'flex', gap: '13px', alignItems: 'flex-start' }}>
            <div style={{ width: '40px', height: '40px', flex: 'none', borderRadius: '12px', background: 'rgba(255,107,61,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '19px' }}>{n.icon}</div>
            <div style={{ flex: 1, ...col(2) }}>
              <span style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>{n.title}</span>
              <span style={{ fontSize: '12.5px', color: '#9A93A6', fontWeight: 500, lineHeight: 1.4 }}>{n.body}</span>
              <span style={{ fontSize: '11px', color: '#5C5F6B', fontWeight: 700, marginTop: '2px' }}>{n.time}</span>
            </div>
          </div>
        ))}
      </div>
      <div style={col(10)}>
        <span style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>Recordatorios</span>
        <div style={{ ...card, borderRadius: '18px', overflow: 'hidden' }}>
          {NOTIF_DEFS.map(([key, icon, label]) => {
            const on = state.notif[key]
            return (
              <div key={key} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px', padding: '15px 16px', borderBottom: '1px solid #1A1622' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '11px' }}>
                  <span style={{ fontSize: '18px' }}>{icon}</span>
                  <span style={{ fontSize: '14px', color: '#fff', fontWeight: 700 }}>{label}</span>
                </div>
                <button onClick={() => toggleNotif(key)} style={{ width: '46px', height: '27px', flex: 'none', borderRadius: '999px', border: 'none', cursor: 'pointer', padding: '3px', display: 'flex', justifyContent: on ? 'flex-end' : 'flex-start', background: on ? '#FF6B3D' : '#2E2738', transition: 'all .15s' }}>
                  <span style={{ width: '21px', height: '21px', borderRadius: '50%', background: '#fff', display: 'block' }} />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export function Contact() {
  const { go, state, sendContact, resetContact, toggleFaq } = useApp()
  const fieldLabel = { fontSize: '12px', fontWeight: 800, color: '#9A93A6' } as const
  const input = { background: '#181320', border: '1px solid #2A2336', borderRadius: '13px', padding: '14px', color: '#fff', fontSize: '14px', outline: 'none' } as const
  return (
    <div style={{ padding: '6px 22px 110px', ...col(18), animation: 'floatUp .4s ease' }}>
      <BackHeader onBack={() => go('home')} title="Contacto" kicker="ESTAMOS PARA AYUDARTE" />
      <div style={col(10)}>
        <a href="mailto:infopulsofit@gmail.com" style={{ textDecoration: 'none', ...card, borderRadius: '16px', padding: '15px 16px', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '42px', height: '42px', flex: 'none', borderRadius: '12px', background: 'rgba(255,107,61,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px' }}>📧</div>
          <div style={{ flex: 1, ...col(1) }}>
            <span style={{ fontSize: '14px', fontWeight: 900, color: '#fff' }}>Email</span>
            <span style={{ fontSize: '12px', color: '#9A93A6', fontWeight: 600 }}>infopulsofit@gmail.com</span>
          </div>
          <span style={{ color: '#5C5F6B', fontSize: '18px' }}>›</span>
        </a>
      </div>
      <div style={{ height: '1px', background: '#221C2C', margin: '2px 0' }} />

      {!state.contactSent ? (
        <div style={col(13)}>
          <span style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>O escríbenos directamente</span>
          <div style={col(6)}><span style={fieldLabel}>Tu nombre</span><input id="contact-name" type="text" placeholder="Laura García" style={input} /></div>
          <div style={col(6)}><span style={fieldLabel}>Tu email</span><input id="contact-email" type="email" placeholder="tucorreo@email.com" style={input} /></div>
          <div style={col(6)}><span style={fieldLabel}>Asunto</span><input id="contact-subject" type="text" placeholder="Duda sobre mi dieta" style={input} /></div>
          <div style={col(6)}><span style={fieldLabel}>¿En qué te ayudamos?</span><textarea id="contact-msg" placeholder="Cuéntanos tu duda sobre el entreno, la dieta…" rows={4} style={{ ...input, resize: 'none' }} /></div>
          <button onClick={sendContact} style={{ background: GRAD, color: '#1A0A06', border: 'none', borderRadius: '14px', padding: '16px', fontSize: '15px', fontWeight: 900, fontFamily: font, cursor: 'pointer' }}>Enviar mensaje</button>
          <div style={{ textAlign: 'center', fontSize: '11px', color: '#5C5F6B' }}>Te respondemos en 24/48h ⚡</div>
        </div>
      ) : (
        <div style={{ ...card, border: '1px solid rgba(255,107,61,0.3)', borderRadius: '18px', padding: '26px 20px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '12px', textAlign: 'center', animation: 'popIn .35s ease' }}>
          <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: GRAD, color: '#1A0A06', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '30px', fontWeight: 900 }}>✓</div>
          <div style={{ fontFamily: fontBlack, fontSize: '20px', color: '#fff', letterSpacing: '-0.02em' }}>¡Mensaje enviado!</div>
          <div style={{ fontSize: '14px', color: '#9A93A6', lineHeight: 1.5, maxWidth: '250px' }}>Gracias por escribirnos. Nuestro equipo te responderá en 24/48h. 💪</div>
          <button onClick={resetContact} style={{ marginTop: '4px', background: '#181320', border: '1px solid #2A2336', color: '#fff', borderRadius: '13px', padding: '13px 24px', fontSize: '14px', fontWeight: 800, fontFamily: font, cursor: 'pointer' }}>Enviar otro mensaje</button>
        </div>
      )}

      <div style={col(10)}>
        <span style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>Preguntas frecuentes</span>
        {FAQS.map(([q, a], i) => {
          const open = state.faqOpen === i
          return (
            <button key={q} onClick={() => toggleFaq(i)} style={{ ...card, borderRadius: '14px', padding: '15px 16px', display: 'flex', flexDirection: 'column', gap: '8px', cursor: 'pointer', fontFamily: font, textAlign: 'left' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px', width: '100%' }}>
                <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#fff' }}>{q}</span>
                <span style={{ fontSize: '16px', color: '#FF7A4D', fontWeight: 900 }}>{open ? '−' : '+'}</span>
              </div>
              <span style={{ fontSize: '13px', color: '#9A93A6', fontWeight: 500, lineHeight: 1.5, display: open ? 'block' : 'none' }}>{a}</span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
