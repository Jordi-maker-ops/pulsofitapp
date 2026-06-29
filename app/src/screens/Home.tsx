import { ImageSlot } from '../ImageSlot'
import { useApp } from '../useApp'
import { GRAD, GRAD90, fontBlack } from '../theme'
import { MACROS, QUICK_LINKS, MOTIVATION } from '../data'

const card = { background: '#15111C', border: '1px solid #221C2C' } as const

export function Home() {
  const { go, state, waterAdd, waterSub } = useApp()
  const waterText = `${state.water} / 8 vasos`
  return (
    <div style={{ padding: '6px 22px 110px', display: 'flex', flexDirection: 'column', gap: '18px', animation: 'floatUp .4s ease' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontSize: '13px', color: '#7B7E8A', fontWeight: 600 }}>Buenos días 👋</div>
          <div style={{ fontFamily: fontBlack, fontSize: '26px', color: '#fff', letterSpacing: '-0.02em' }}>Hola, Laura</div>
        </div>
        <button onClick={() => go('profile')} style={{ padding: 0, border: 'none', background: 'transparent', cursor: 'pointer', width: '46px', height: '46px', borderRadius: '14px', overflow: 'hidden' }}>
          <ImageSlot id="home-avatar" shape="rounded" radius={14} fit="cover" placeholder="Tú" style={{ width: '46px', height: '46px' }} />
        </button>
      </div>

      <div style={{ background: 'linear-gradient(135deg,rgba(255,138,61,0.16),rgba(255,61,110,0.12))', border: '1px solid rgba(255,107,61,0.28)', borderRadius: '16px', padding: '15px 17px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ fontSize: '22px' }}>⚡</span>
        <span style={{ fontSize: '13.5px', color: '#FFCBA8', fontWeight: 700, lineHeight: 1.4 }}>"{MOTIVATION}"</span>
      </div>

      <div style={{ position: 'relative', background: 'linear-gradient(135deg,#FF8A3D 0%,#FF3D6E 100%)', borderRadius: '22px', padding: '20px', color: '#1A0A06', display: 'flex', justifyContent: 'space-between', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', right: '-30px', top: '-30px', width: '140px', height: '140px', borderRadius: '50%', background: 'rgba(255,255,255,0.12)' }} />
        <div style={{ display: 'flex', flexDirection: 'column', gap: '4px', position: 'relative' }}>
          <span style={{ fontSize: '12px', fontWeight: 800, opacity: 0.75, letterSpacing: '0.04em' }}>ENTRENO DE HOY</span>
          <span style={{ fontSize: '21px', fontWeight: 900, letterSpacing: '-0.02em' }}>Tren superior · Fuerza</span>
          <span style={{ fontSize: '13px', fontWeight: 700, opacity: 0.8 }}>6 ejercicios · 45 min · con vídeo</span>
        </div>
        <div onClick={() => go('workout')} style={{ position: 'relative', width: '54px', height: '54px', borderRadius: '50%', background: '#1A0A06', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', cursor: 'pointer', flex: 'none' }}>▶</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div style={{ ...card, borderRadius: '18px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ fontSize: '12px', color: '#7B7E8A', fontWeight: 700 }}>Calorías hoy</span>
          <span style={{ fontFamily: fontBlack, fontSize: '26px', color: '#fff' }}>1.480<span style={{ fontSize: '13px', color: '#5C5F6B', fontWeight: 700 }}> / 2.100</span></span>
          <div style={{ height: '5px', borderRadius: '999px', background: '#221C2C', overflow: 'hidden' }}><div style={{ height: '100%', width: '70%', background: GRAD90 }} /></div>
        </div>
        <div style={{ ...card, borderRadius: '18px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ fontSize: '12px', color: '#7B7E8A', fontWeight: 700 }}>Racha 🔥</span>
          <span style={{ fontFamily: fontBlack, fontSize: '26px', color: '#fff' }}>12 <span style={{ fontSize: '13px', color: '#5C5F6B', fontWeight: 700 }}>días</span></span>
          <span style={{ fontSize: '12px', color: '#FF7A4D', fontWeight: 700 }}>¡Sigue así, máquina!</span>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div style={{ ...card, borderRadius: '18px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '9px' }}>
          <span style={{ fontSize: '12px', color: '#8B5CFF', fontWeight: 800 }}>Agua 💧</span>
          <span style={{ fontFamily: fontBlack, fontSize: '22px', color: '#fff' }}>{waterText}</span>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={waterSub} style={{ flex: 1, background: '#221C2C', border: 'none', color: '#fff', borderRadius: '10px', padding: '7px', fontSize: '16px', fontWeight: 900, cursor: 'pointer' }}>−</button>
            <button onClick={waterAdd} style={{ flex: 1, background: '#8B5CFF', border: 'none', color: '#fff', borderRadius: '10px', padding: '7px', fontSize: '16px', fontWeight: 900, cursor: 'pointer' }}>+</button>
          </div>
        </div>
        <div style={{ ...card, borderRadius: '18px', padding: '16px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ fontSize: '12px', color: '#7B7E8A', fontWeight: 700 }}>Peso actual</span>
          <span style={{ fontFamily: fontBlack, fontSize: '26px', color: '#fff' }}>68,4 <span style={{ fontSize: '13px', color: '#5C5F6B', fontWeight: 700 }}>kg</span></span>
          <span style={{ fontSize: '12px', color: '#22E0A1', fontWeight: 800 }}>▼ 3,6 kg este mes</span>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
        <span style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>Tus macros de hoy</span>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
          {MACROS.map((m) => (
            <div key={m.label} style={{ ...card, borderRadius: '16px', padding: '14px', display: 'flex', flexDirection: 'column', gap: '6px', alignItems: 'flex-start' }}>
              <span style={{ fontSize: '11px', color: '#7B7E8A', fontWeight: 700 }}>{m.label}</span>
              <span style={{ fontSize: '18px', fontWeight: 900, color: '#fff' }}>{m.val}</span>
              <div style={{ height: '4px', width: '100%', borderRadius: '999px', background: '#221C2C', overflow: 'hidden' }}>
                <div style={{ height: '100%', width: m.width, background: m.grad ? GRAD : '#5A5470', borderRadius: '999px' }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
        <span style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>Accesos rápidos</span>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {QUICK_LINKS.map((q) => (
            <button key={q.label} onClick={() => go(q.to)} style={{ ...card, borderRadius: '16px', padding: '15px', display: 'flex', alignItems: 'center', gap: '11px', cursor: 'pointer', fontFamily: "'Archivo',sans-serif", textAlign: 'left' }}>
              <span style={{ fontSize: '20px' }}>{q.icon}</span>
              <span style={{ fontSize: '13.5px', fontWeight: 800, color: '#fff' }}>{q.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
