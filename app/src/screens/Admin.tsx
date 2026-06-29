import { useApp } from '../useApp'
import { GRAD, fontBlack, font } from '../theme'
import { BackHeader } from '../ui'
import { CLIENTS, MESSAGES, STATS, REV_VALS, REV_LABELS } from '../data'

const card = { background: '#15111C', border: '1px solid #221C2C' } as const
const A = '#FF6B3D'
const REV_MAX = 150

export function Admin() {
  const { go, state, setAdminTab } = useApp()
  const tabs: [typeof state.adminTab, string][] = [['clientes', 'Clientes'], ['mensajes', 'Mensajes'], ['stats', 'Estadísticas']]
  return (
    <div style={{ padding: '6px 22px 110px', display: 'flex', flexDirection: 'column', gap: '18px', animation: 'floatUp .4s ease' }}>
      <BackHeader onBack={() => go('home')} title="Administración" kicker="PANEL DE ENTRENADOR" kickerColor="#4D8DFF" />

      <div style={{ display: 'flex', gap: '7px', ...card, borderRadius: '14px', padding: '5px' }}>
        {tabs.map(([id, label]) => {
          const on = state.adminTab === id
          return (
            <button key={id} onClick={() => setAdminTab(id)} style={{ flex: 1, padding: '10px', borderRadius: '10px', border: 'none', cursor: 'pointer', fontFamily: font, fontSize: '12.5px', fontWeight: 800, background: on ? GRAD : 'transparent', color: on ? '#1A0A06' : '#8A8596', transition: 'all .15s' }}>{label}</button>
          )
        })}
      </div>

      {state.adminTab === 'clientes' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {CLIENTS.map(([name, goal, plan, status, prog]) => (
            <div key={name} style={{ ...card, borderRadius: '16px', padding: '15px 16px', display: 'flex', flexDirection: 'column', gap: '11px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div style={{ width: '42px', height: '42px', flex: 'none', borderRadius: '12px', background: 'linear-gradient(135deg,#2A2336,#1C1726)' }} />
                <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '1px' }}>
                  <span style={{ fontSize: '14.5px', fontWeight: 900, color: '#fff' }}>{name}</span>
                  <span style={{ fontSize: '12px', color: '#9A93A6', fontWeight: 600 }}>{goal} · {plan}</span>
                </div>
                <span style={{ fontSize: '10px', fontWeight: 900, padding: '4px 9px', borderRadius: '999px', flex: 'none', letterSpacing: '0.03em', background: status === 'Activa' ? 'rgba(255,107,61,0.16)' : 'rgba(123,118,138,0.18)', color: status === 'Activa' ? A : '#9A93A6' }}>{status}</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '11px', color: '#7B7E8A', fontWeight: 700 }}>
                  <span>Progreso del objetivo</span><span style={{ color: '#FF7A4D' }}>{prog}%</span>
                </div>
                <div style={{ height: '6px', borderRadius: '999px', background: '#221C2C', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${prog}%`, background: status === 'Activa' ? GRAD : '#5A5470', borderRadius: '999px' }} />
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                {['Editar entreno', 'Editar dieta'].map((t) => (
                  <button key={t} style={{ flex: 1, background: '#181320', border: '1px solid #2A2336', color: '#fff', borderRadius: '11px', padding: '10px', fontSize: '12px', fontWeight: 800, fontFamily: font, cursor: 'pointer' }}>{t}</button>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}

      {state.adminTab === 'mensajes' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {MESSAGES.map((m) => (
            <div key={m.name} style={{ ...card, borderRadius: '16px', padding: '15px 16px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '14px', fontWeight: 900, color: '#fff' }}>{m.name}</span>
                <span style={{ fontSize: '11px', color: '#5C5F6B', fontWeight: 700 }}>{m.time}</span>
              </div>
              <span style={{ fontSize: '12px', color: '#FF7A4D', fontWeight: 700 }}>{m.subject}</span>
              <span style={{ fontSize: '13px', color: '#9A93A6', fontWeight: 500, lineHeight: 1.45 }}>{m.body}</span>
              <button style={{ alignSelf: 'flex-start', background: GRAD, border: 'none', color: '#1A0A06', borderRadius: '11px', padding: '9px 18px', fontSize: '12.5px', fontWeight: 900, fontFamily: font, cursor: 'pointer' }}>Responder</button>
            </div>
          ))}
        </div>
      )}

      {state.adminTab === 'stats' && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {STATS.map(([label, val, delta]) => (
              <div key={label} style={{ ...card, borderRadius: '18px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <span style={{ fontSize: '12px', color: '#7B7E8A', fontWeight: 700 }}>{label}</span>
                <span style={{ fontFamily: fontBlack, fontSize: '25px', color: '#fff' }}>{val}</span>
                <span style={{ fontSize: '11px', color: '#22E0A1', fontWeight: 800 }}>{delta}</span>
              </div>
            ))}
          </div>
          <div style={{ ...card, borderRadius: '20px', padding: '20px 18px 16px' }}>
            <div style={{ fontSize: '13px', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>Clientes nuevos · últimos 6 meses</div>
            <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '8px', height: '110px' }}>
              {REV_VALS.map((v, i) => (
                <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '7px', flex: 1, height: '100%', justifyContent: 'flex-end' }}>
                  <div style={{ width: '100%', maxWidth: '26px', height: `${20 + (v / REV_MAX) * 80}%`, borderRadius: '8px 8px 4px 4px', background: i === REV_VALS.length - 1 ? GRAD : '#2E2738' }} />
                  <span style={{ fontSize: '10px', color: '#5C5F6B', fontWeight: 700 }}>{REV_LABELS[i]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
