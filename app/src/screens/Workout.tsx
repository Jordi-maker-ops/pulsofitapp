import { useApp } from '../useApp'
import { GRAD, fontBlack, mono, font } from '../theme'
import { EXERCISES, WEEK, TODAY_IDX, HISTORY } from '../data'

export function Workout() {
  const { state, go, toggleDone, openVideo } = useApp()
  const doneCount = state.done.filter(Boolean).length
  const pct = (doneCount / 5) * 100

  return (
    <div style={{ padding: '6px 22px 110px', display: 'flex', flexDirection: 'column', gap: '18px', animation: 'floatUp .4s ease' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <div>
          <div style={{ fontFamily: mono, fontSize: '11px', color: '#5C5F6B' }}>JUEVES · TREN SUPERIOR</div>
          <h2 style={{ margin: '3px 0 0', fontFamily: fontBlack, fontSize: '25px', color: '#fff', letterSpacing: '-0.02em' }}>Entreno de hoy</h2>
        </div>
        <div style={{ width: '88px', height: '88px', flex: 'none', borderRadius: '50%', background: `conic-gradient(#FF3D6E ${pct}%, #221C2C 0)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: '#0C0A11', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
            <span style={{ fontSize: '18px', fontWeight: 900, color: '#fff', lineHeight: 1 }}>{doneCount}/5</span>
            <span style={{ fontSize: '9px', color: '#7B7E8A', fontWeight: 700 }}>HECHO</span>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', gap: '7px' }}>
        {WEEK.map(([day, tag], i) => {
          const on = i === TODAY_IDX, past = i < TODAY_IDX
          return (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '3px', padding: '10px 2px', borderRadius: '12px', background: on ? GRAD : '#15111C', border: on ? 'none' : '1px solid #221C2C', color: on ? '#1A0A06' : past ? '#FF7A4D' : '#7B7E8A' }}>
              <span style={{ fontSize: '11px', fontWeight: 800 }}>{day}</span>
              <span style={{ fontSize: '9px', fontWeight: 700, opacity: 0.7 }}>{tag}</span>
            </div>
          )
        })}
      </div>

      <div style={{ background: 'linear-gradient(135deg,rgba(255,138,61,0.12),rgba(255,61,110,0.1))', border: '1px solid rgba(255,107,61,0.22)', borderRadius: '14px', padding: '12px 15px', display: 'flex', alignItems: 'center', gap: '10px' }}>
        <span style={{ fontSize: '17px' }}>🎬</span>
        <span style={{ fontSize: '12.5px', color: '#FFCBA8', fontWeight: 700 }}>Toca cualquier ejercicio para ver el vídeo de cómo hacerlo.</span>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        {EXERCISES.map((ex, i) => {
          const d = state.done[i]
          return (
            <div key={ex.name} style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '12px', padding: '12px 14px', borderRadius: '16px', border: d ? '1.5px solid rgba(255,107,61,0.4)' : '1.5px solid #221C2C', background: d ? 'rgba(255,107,61,0.07)' : '#15111C', transition: 'all .15s' }}>
              <button onClick={() => openVideo(i)} style={{ width: '54px', height: '54px', flex: 'none', borderRadius: '14px', border: 'none', cursor: 'pointer', background: GRAD, color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', boxShadow: '0 6px 16px rgba(255,61,110,0.3)', fontFamily: font }}>
                <span style={{ fontSize: '17px' }}>▶</span>
                <span style={{ fontSize: '9px', fontWeight: 800, marginTop: '1px' }}>{ex.duration}</span>
              </button>
              <button onClick={() => openVideo(i)} style={{ flex: 1, background: 'transparent', border: 'none', textAlign: 'left', cursor: 'pointer', display: 'flex', flexDirection: 'column', gap: '3px', padding: 0, fontFamily: font }}>
                <span style={{ fontSize: '15px', fontWeight: 900, color: d ? '#9A93A6' : '#fff', textDecoration: d ? 'line-through' : 'none' }}>{ex.name}</span>
                <span style={{ fontSize: '12px', color: '#7B7E8A', fontWeight: 600 }}>{ex.detail} · ▶ {ex.duration}</span>
              </button>
              <button onClick={() => toggleDone(i)} style={{ width: '28px', height: '28px', flex: 'none', borderRadius: '9px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '15px', fontWeight: 900, border: d ? 'none' : '2px solid #322A3C', background: d ? '#FF6B3D' : 'transparent', color: '#1A0A06' }}>{d ? '✓' : ''}</button>
            </div>
          )
        })}
      </div>

      <button onClick={() => go('diet')} style={{ background: GRAD, color: '#1A0A06', border: 'none', borderRadius: '16px', padding: '17px', fontSize: '15px', fontWeight: 900, fontFamily: font, cursor: 'pointer' }}>Terminar entreno 💪</button>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '11px', marginTop: '4px' }}>
        <span style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>Historial de entrenos</span>
        {HISTORY.map((h) => (
          <div key={h.name} style={{ background: '#15111C', border: '1px solid #221C2C', borderRadius: '16px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '13px' }}>
            <div style={{ width: '38px', height: '38px', flex: 'none', borderRadius: '11px', background: 'rgba(255,107,61,0.14)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px' }}>{h.icon}</div>
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '2px' }}>
              <span style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>{h.name}</span>
              <span style={{ fontSize: '12px', color: '#7B7E8A', fontWeight: 600 }}>{h.date} · {h.detail}</span>
            </div>
            <span style={{ fontSize: '12px', fontWeight: 900, color: '#22E0A1' }}>✓</span>
          </div>
        ))}
      </div>
    </div>
  )
}
