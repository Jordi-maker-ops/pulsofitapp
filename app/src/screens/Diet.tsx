import { useApp } from '../useApp'
import { fontBlack, mono, font } from '../theme'
import { MEALS, SHOPPING } from '../data'

const card = { background: '#15111C', border: '1px solid #221C2C' } as const

export function Diet() {
  const { state, toggleMeal, waterAdd } = useApp()
  const waterText = `${state.water} / 8 vasos`
  const mealsDoneText = `${state.mealsDone.filter(Boolean).length}/4 completadas`

  return (
    <div style={{ padding: '6px 22px 110px', display: 'flex', flexDirection: 'column', gap: '18px', animation: 'floatUp .4s ease' }}>
      <div>
        <div style={{ fontFamily: mono, fontSize: '11px', color: '#5C5F6B' }}>PLAN DE HOY · EQUILIBRADO</div>
        <h2 style={{ margin: '3px 0 0', fontFamily: fontBlack, fontSize: '25px', color: '#fff', letterSpacing: '-0.02em' }}>Tu dieta</h2>
      </div>

      <div style={{ ...card, borderRadius: '20px', padding: '18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span style={{ fontSize: '12px', color: '#7B7E8A', fontWeight: 700 }}>Total del día</span>
          <span style={{ fontFamily: fontBlack, fontSize: '28px', color: '#fff' }}>2.100 <span style={{ fontSize: '14px', color: '#5C5F6B' }}>kcal</span></span>
        </div>
        <div style={{ display: 'flex', gap: '14px' }}>
          {[['160g', 'PROT', '#FF7A4D'], ['210g', 'CARB', '#fff'], ['62g', 'GRASA', '#fff']].map(([v, l, c]) => (
            <div key={l} style={{ textAlign: 'center' }}>
              <div style={{ fontSize: '16px', fontWeight: 900, color: c }}>{v}</div>
              <div style={{ fontSize: '10px', color: '#7B7E8A', fontWeight: 700 }}>{l}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ ...card, borderRadius: '18px', padding: '16px 18px', display: 'flex', alignItems: 'center', gap: '14px' }}>
        <span style={{ fontSize: '22px' }}>💧</span>
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <span style={{ fontSize: '13px', fontWeight: 800, color: '#fff' }}>Agua de hoy</span>
            <span style={{ fontSize: '13px', fontWeight: 900, color: '#8B5CFF' }}>{waterText}</span>
          </div>
          <div style={{ height: '8px', borderRadius: '999px', background: '#221C2C', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${(state.water / 8) * 100}%`, background: '#8B5CFF', borderRadius: '999px', transition: 'all .2s' }} />
          </div>
        </div>
        <button onClick={waterAdd} style={{ width: '38px', height: '38px', flex: 'none', background: '#8B5CFF', border: 'none', color: '#fff', borderRadius: '12px', fontSize: '18px', fontWeight: 900, cursor: 'pointer' }}>+</button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>Comidas de hoy</span>
          <span style={{ fontSize: '12px', color: '#7B7E8A', fontWeight: 700 }}>{mealsDoneText}</span>
        </div>
        {MEALS.map((m, i) => {
          const d = state.mealsDone[i]
          return (
            <button key={m.meal} onClick={() => toggleMeal(i)} style={{ width: '100%', background: d ? 'rgba(255,107,61,0.07)' : '#15111C', border: d ? '1px solid rgba(255,107,61,0.4)' : '1px solid #221C2C', borderRadius: '18px', padding: '16px', display: 'flex', gap: '14px', alignItems: 'center', cursor: 'pointer', fontFamily: font, transition: 'all .15s' }}>
              <div style={{ width: '48px', height: '48px', flex: 'none', borderRadius: '14px', background: 'rgba(255,107,61,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>{m.icon}</div>
              <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3px', textAlign: 'left' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: '15px', fontWeight: 900, color: '#fff' }}>{m.meal}</span>
                  <span style={{ fontSize: '12px', fontWeight: 800, color: '#FF7A4D' }}>{m.kcal}</span>
                </div>
                <span style={{ fontSize: '13px', color: '#9A93A6', fontWeight: 500 }}>{m.items}</span>
                <span style={{ fontFamily: mono, fontSize: '10px', color: '#5C5F6B' }}>{m.macro}</span>
              </div>
              <span style={{ width: '26px', height: '26px', flex: 'none', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: 900, border: d ? 'none' : '2px solid #322A3C', background: d ? '#FF6B3D' : 'transparent', color: '#1A0A06' }}>{d ? '✓' : ''}</span>
            </button>
          )
        })}
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
        <span style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>🛒 Lista de la compra semanal</span>
        <div style={{ ...card, borderRadius: '18px', padding: '8px 6px' }}>
          {SHOPPING.map((i) => (
            <div key={i.name} style={{ display: 'flex', alignItems: 'center', gap: '11px', padding: '10px 12px', fontSize: '14px', color: '#D4D0DD', fontWeight: 600, borderBottom: '1px solid #1A1622' }}>
              <span style={{ width: '18px', height: '18px', flex: 'none', borderRadius: '6px', border: '2px solid #2E2738' }} />
              <span style={{ flex: 1 }}>{i.name}</span>
              <span style={{ fontSize: '12px', color: '#7B7E8A', fontWeight: 700 }}>{i.qty}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
