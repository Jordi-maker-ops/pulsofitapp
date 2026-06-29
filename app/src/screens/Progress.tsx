import { ImageSlot } from '../ImageSlot'
import { GRAD, GREEN, fontBlack, mono, font } from '../theme'
import { WEIGHTS, WEIGHT_LABELS, MEASURES } from '../data'

const card = { background: '#15111C', border: '1px solid #221C2C' } as const
const MAX = 72.5, MIN = 67.5

export function Progress() {
  return (
    <div style={{ padding: '6px 22px 110px', display: 'flex', flexDirection: 'column', gap: '20px', animation: 'floatUp .4s ease' }}>
      <div>
        <div style={{ fontFamily: mono, fontSize: '11px', color: '#5C5F6B' }}>ÚLTIMAS 6 SEMANAS</div>
        <h2 style={{ margin: '3px 0 0', fontFamily: fontBlack, fontSize: '25px', color: '#fff', letterSpacing: '-0.02em' }}>Tu progreso</h2>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
        <div style={{ ...card, borderRadius: '18px', padding: '16px' }}>
          <div style={{ fontSize: '12px', color: '#7B7E8A', fontWeight: 700 }}>Peso actual</div>
          <div style={{ fontFamily: fontBlack, fontSize: '26px', color: '#fff' }}>68,4 kg</div>
          <div style={{ fontSize: '12px', color: GREEN, fontWeight: 800 }}>▼ 3,6 kg</div>
        </div>
        <div style={{ ...card, borderRadius: '18px', padding: '16px' }}>
          <div style={{ fontSize: '12px', color: '#7B7E8A', fontWeight: 700 }}>Objetivo</div>
          <div style={{ fontFamily: fontBlack, fontSize: '26px', color: '#fff' }}>72%</div>
          <div style={{ fontSize: '12px', color: '#FF7A4D', fontWeight: 800 }}>¡Casi lo tienes!</div>
        </div>
      </div>

      <div style={{ ...card, borderRadius: '20px', padding: '20px 18px 16px' }}>
        <div style={{ fontSize: '13px', fontWeight: 800, color: '#fff', marginBottom: '16px' }}>Evolución del peso</div>
        <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: '8px', height: '120px' }}>
          {WEIGHTS.map((w, i) => {
            const h = 18 + ((w - MIN) / (MAX - MIN)) * 82
            const last = i === WEIGHTS.length - 1
            return (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '7px', flex: 1, height: '100%', justifyContent: 'flex-end' }}>
                <div style={{ width: '100%', maxWidth: '26px', height: `${h}%`, borderRadius: '8px 8px 4px 4px', background: last ? GRAD : '#2E2738', transition: 'all .2s' }} />
                <span style={{ fontSize: '10px', color: '#5C5F6B', fontWeight: 700 }}>{WEIGHT_LABELS[i]}</span>
              </div>
            )
          })}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
        <span style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>Medidas corporales</span>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
          {MEASURES.map(([label, val, delta]) => (
            <div key={label} style={{ ...card, borderRadius: '16px', padding: '15px', display: 'flex', flexDirection: 'column', gap: '3px' }}>
              <span style={{ fontSize: '12px', color: '#7B7E8A', fontWeight: 700 }}>{label}</span>
              <span style={{ fontFamily: fontBlack, fontSize: '21px', color: '#fff' }}>{val}</span>
              <span style={{ fontSize: '11px', fontWeight: 800, color: delta.indexOf('▼') === 0 ? GREEN : '#7BD4FF' }}>{delta}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
        <span style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>Comparativa antes / después</span>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          <div style={{ position: 'relative', aspectRatio: '3 / 4', borderRadius: '16px', overflow: 'hidden' }}>
            <ImageSlot id="progress-before" shape="rect" fit="cover" placeholder="Foto antes" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
            <span style={{ position: 'absolute', left: '10px', bottom: '10px', fontFamily: mono, fontSize: '10px', color: '#CEC8D8', background: 'rgba(0,0,0,0.4)', padding: '3px 7px', borderRadius: '6px', pointerEvents: 'none' }}>ANTES · 12 abr</span>
          </div>
          <div style={{ position: 'relative', aspectRatio: '3 / 4', borderRadius: '16px', overflow: 'hidden' }}>
            <ImageSlot id="progress-now" shape="rect" fit="cover" placeholder="Foto ahora" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }} />
            <span style={{ position: 'absolute', left: '10px', bottom: '10px', fontFamily: mono, fontSize: '10px', color: '#FF7A4D', background: 'rgba(0,0,0,0.4)', padding: '3px 7px', borderRadius: '6px', pointerEvents: 'none' }}>AHORA · 24 jun</span>
          </div>
        </div>
        <button style={{ background: '#15111C', border: '1px dashed #2E2738', color: '#9A93A6', borderRadius: '14px', padding: '14px', fontSize: '14px', fontWeight: 800, fontFamily: font, cursor: 'pointer' }}>+ Subir nueva foto de progreso</button>
      </div>
    </div>
  )
}
