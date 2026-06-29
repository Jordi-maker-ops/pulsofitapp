import { useApp } from './useApp'
import { GRAD, fontBlack, mono, font } from './theme'
import { EXERCISES } from './data'

const anim = (name: string, dur: string, origin: string) => ({
  transformOrigin: origin,
  animation: `${name} ${dur} ease-in-out infinite`,
})

function Figure({ i }: { i: number }) {
  const svg = { position: 'relative' as const, zIndex: 1 }
  if (i === 0)
    return (
      <svg width="200" height="150" viewBox="0 0 200 150" style={svg}>
        <g stroke="#5A4A5E" strokeWidth={7} fill="none" strokeLinecap="round"><line x1="52" y1="122" x2="150" y2="122" /><line x1="66" y1="122" x2="66" y2="140" /><line x1="140" y1="122" x2="140" y2="140" /></g>
        <g stroke="#FFC2A0" strokeWidth={7} fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="58" y1="112" x2="132" y2="112" /><line x1="58" y1="112" x2="40" y2="124" /><line x1="72" y1="112" x2="54" y2="126" /></g>
        <circle cx="146" cy="110" r="11" fill="#FFC2A0" />
        <g style={anim('f_pressV', '1.4s', '128px 110px')}><line x1="128" y1="110" x2="128" y2="72" stroke="#FFC2A0" strokeWidth={7} strokeLinecap="round" /><line x1="106" y1="66" x2="150" y2="66" stroke="#FF5E3A" strokeWidth={9} strokeLinecap="round" /></g>
      </svg>
    )
  if (i === 1)
    return (
      <svg width="200" height="150" viewBox="0 0 200 150" style={svg}>
        <circle cx="100" cy="44" r="13" fill="#FFC2A0" />
        <g stroke="#FFC2A0" strokeWidth={7} fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="100" y1="58" x2="100" y2="100" /><line x1="100" y1="100" x2="84" y2="126" /><line x1="100" y1="100" x2="116" y2="126" /></g>
        <g style={anim('f_pressV', '1.4s', 'center')}>
          <g stroke="#FFC2A0" strokeWidth={7} fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="86" y1="64" x2="80" y2="34" /><line x1="80" y1="34" x2="80" y2="22" /><line x1="114" y1="64" x2="120" y2="34" /><line x1="120" y1="34" x2="120" y2="22" /></g>
          <line x1="68" y1="20" x2="132" y2="20" stroke="#FF5E3A" strokeWidth={9} strokeLinecap="round" />
        </g>
      </svg>
    )
  if (i === 2)
    return (
      <svg width="200" height="150" viewBox="0 0 200 150" style={svg}>
        <g stroke="#5A4A5E" strokeWidth={6} fill="none" strokeLinecap="round"><line x1="34" y1="132" x2="172" y2="132" /></g>
        <circle cx="150" cy="58" r="11" fill="#FFC2A0" />
        <g stroke="#FFC2A0" strokeWidth={7} fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="70" y1="92" x2="144" y2="62" /><line x1="70" y1="92" x2="58" y2="128" /><line x1="70" y1="92" x2="92" y2="128" /></g>
        <g style={anim('f_pull', '1.3s', '138px 66px')}><line x1="138" y1="66" x2="134" y2="104" stroke="#FFC2A0" strokeWidth={7} strokeLinecap="round" /><line x1="116" y1="108" x2="152" y2="108" stroke="#FF5E3A" strokeWidth={9} strokeLinecap="round" /></g>
      </svg>
    )
  if (i === 3)
    return (
      <svg width="200" height="150" viewBox="0 0 200 150" style={svg}>
        <g stroke="#5A4A5E" strokeWidth={7} fill="none" strokeLinecap="round"><line x1="48" y1="74" x2="84" y2="74" /><line x1="116" y1="74" x2="152" y2="74" /><line x1="56" y1="74" x2="56" y2="122" /><line x1="144" y1="74" x2="144" y2="122" /></g>
        <g style={anim('f_dip', '1.5s', 'center')}>
          <circle cx="100" cy="40" r="11" fill="#FFC2A0" />
          <g stroke="#FFC2A0" strokeWidth={7} fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="100" y1="51" x2="100" y2="92" /><line x1="100" y1="58" x2="74" y2="74" /><line x1="100" y1="58" x2="126" y2="74" /><line x1="100" y1="92" x2="88" y2="116" /><line x1="100" y1="92" x2="112" y2="112" /></g>
        </g>
      </svg>
    )
  return (
    <svg width="200" height="150" viewBox="0 0 200 150" style={svg}>
      <circle cx="100" cy="40" r="13" fill="#FFC2A0" />
      <g stroke="#FFC2A0" strokeWidth={7} fill="none" strokeLinecap="round" strokeLinejoin="round"><line x1="100" y1="53" x2="100" y2="100" /><line x1="100" y1="100" x2="86" y2="126" /><line x1="100" y1="100" x2="114" y2="126" /><line x1="84" y1="60" x2="80" y2="92" /><line x1="116" y1="60" x2="120" y2="92" /></g>
      <g style={anim('f_curlL', '1.3s', '80px 92px')}><line x1="80" y1="92" x2="80" y2="118" stroke="#FFC2A0" strokeWidth={7} strokeLinecap="round" /><rect x="71" y="112" width="18" height="11" rx="3" fill="#FF5E3A" /></g>
      <g style={anim('f_curlR', '1.3s', '120px 92px')}><line x1="120" y1="92" x2="120" y2="118" stroke="#FFC2A0" strokeWidth={7} strokeLinecap="round" /><rect x="111" y="112" width="18" height="11" rx="3" fill="#FF5E3A" /></g>
    </svg>
  )
}

export function VideoOverlay() {
  const { state, closeVideo } = useApp()
  const i = state.videoEx
  if (i < 0) return null
  const ex = EXERCISES[i]
  return (
    <div style={{ position: 'absolute', inset: 0, zIndex: 30, background: '#0C0A11', display: 'flex', flexDirection: 'column', animation: 'floatUp .25s ease' }}>
      <div style={{ position: 'relative', height: '262px', flex: 'none', background: 'linear-gradient(160deg,#241320,#140C18)', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(120% 120% at 50% 38%, rgba(255,61,110,0.22), transparent 60%)' }} />
        <div style={{ position: 'absolute', left: 0, right: 0, bottom: '56px', height: '8px', background: 'linear-gradient(90deg,transparent,rgba(255,255,255,0.1),transparent)' }} />
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '230px', height: '150px' }}>
          <div style={{ position: 'absolute', width: '150px', height: '150px', borderRadius: '50%', background: 'radial-gradient(circle,rgba(255,138,61,0.25),transparent 70%)' }} />
          <Figure i={i} />
        </div>
        <button onClick={closeVideo} style={{ position: 'absolute', top: '16px', right: '16px', width: '38px', height: '38px', borderRadius: '12px', background: 'rgba(0,0,0,0.45)', border: '1px solid rgba(255,255,255,0.15)', color: '#fff', fontSize: '18px', cursor: 'pointer', zIndex: 2 }}>✕</button>
        <span style={{ position: 'absolute', top: '18px', left: '18px', display: 'flex', alignItems: 'center', gap: '7px', fontFamily: mono, fontSize: '10px', fontWeight: 800, letterSpacing: '0.08em', color: '#FFCBA8', background: 'rgba(0,0,0,0.4)', padding: '5px 10px', borderRadius: '999px' }}>
          <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#FF3D6E', animation: 'playPulse 1.2s ease-in-out infinite' }} />REPRODUCIENDO
        </span>
        <div style={{ position: 'absolute', left: '16px', right: '16px', bottom: '14px', display: 'flex', flexDirection: 'column', gap: '7px' }}>
          <div style={{ height: '4px', borderRadius: '999px', background: 'rgba(255,255,255,0.2)', overflow: 'hidden' }}>
            <div style={{ height: '100%', background: '#fff', borderRadius: '999px', animation: 'tlPlay 4s linear infinite' }} />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontFamily: mono, fontSize: '10px', color: 'rgba(255,255,255,0.7)', fontWeight: 700 }}>
            <span>demo en bucle</span><span>{ex.duration}</span>
          </div>
        </div>
      </div>

      <div style={{ flex: 1, overflowY: 'auto', padding: '20px 22px 28px', display: 'flex', flexDirection: 'column', gap: '18px' }}>
        <div>
          <div style={{ fontFamily: mono, fontSize: '11px', color: '#5C5F6B' }}>EJERCICIO · TÉCNICA</div>
          <h2 style={{ margin: '3px 0 0', fontFamily: fontBlack, fontSize: '24px', color: '#fff', letterSpacing: '-0.02em' }}>{ex.name}</h2>
        </div>
        <div style={{ display: 'flex', gap: '9px' }}>
          {ex.chips.map(([val, label]) => (
            <div key={label} style={{ flex: 1, background: '#15111C', border: '1px solid #221C2C', borderRadius: '14px', padding: '13px', display: 'flex', flexDirection: 'column', gap: '2px', alignItems: 'center' }}>
              <span style={{ fontFamily: fontBlack, fontSize: '18px', color: '#FF7A4D' }}>{val}</span>
              <span style={{ fontSize: '10px', color: '#7B7E8A', fontWeight: 700 }}>{label}</span>
            </div>
          ))}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
          <span style={{ fontSize: '14px', fontWeight: 800, color: '#fff' }}>Cómo hacerlo</span>
          {ex.steps.map((text, n) => (
            <div key={n} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
              <span style={{ width: '26px', height: '26px', flex: 'none', borderRadius: '9px', background: 'rgba(255,107,61,0.14)', color: '#FF7A4D', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 900 }}>{n + 1}</span>
              <span style={{ fontSize: '13.5px', color: '#D4D0DD', fontWeight: 500, lineHeight: 1.45, paddingTop: '3px' }}>{text}</span>
            </div>
          ))}
        </div>
        <div style={{ background: 'linear-gradient(135deg,rgba(255,138,61,0.12),rgba(255,61,110,0.1))', border: '1px solid rgba(255,107,61,0.22)', borderRadius: '14px', padding: '14px 16px', display: 'flex', gap: '11px', alignItems: 'flex-start' }}>
          <span style={{ fontSize: '18px' }}>💡</span>
          <span style={{ fontSize: '13px', color: '#FFCBA8', fontWeight: 600, lineHeight: 1.45 }}>{ex.tip}</span>
        </div>
        <button onClick={closeVideo} style={{ background: GRAD, color: '#1A0A06', border: 'none', borderRadius: '16px', padding: '17px', fontSize: '15px', fontWeight: 900, fontFamily: font, cursor: 'pointer' }}>Entendido, ¡a entrenar!</button>
      </div>
    </div>
  )
}
