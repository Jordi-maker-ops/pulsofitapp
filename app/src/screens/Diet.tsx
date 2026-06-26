import { fontBlack, mono, LIME } from '../theme'

interface Meal {
  icon: string
  meal: string
  kcal: string
  items: string
  macro: string
}

const MEALS: Meal[] = [
  {
    icon: '🍳',
    meal: 'Desayuno',
    kcal: '480 kcal',
    items: 'Avena, plátano y claras de huevo',
    macro: 'P 32 · C 60 · G 10',
  },
  {
    icon: '🥗',
    meal: 'Comida',
    kcal: '720 kcal',
    items: 'Pollo, arroz integral y verduras',
    macro: 'P 55 · C 78 · G 18',
  },
  {
    icon: '🍎',
    meal: 'Merienda',
    kcal: '300 kcal',
    items: 'Yogur griego, nueces y miel',
    macro: 'P 22 · C 24 · G 14',
  },
  {
    icon: '🐟',
    meal: 'Cena',
    kcal: '600 kcal',
    items: 'Salmón, patata y ensalada',
    macro: 'P 51 · C 48 · G 20',
  },
]

export function Diet() {
  return (
    <div
      style={{
        padding: '6px 22px 110px',
        display: 'flex',
        flexDirection: 'column',
        gap: '18px',
        animation: 'floatUp .4s ease',
      }}
    >
      <div>
        <div style={{ fontFamily: mono, fontSize: '11px', color: '#5C5F6B' }}>
          PLAN DE HOY · EQUILIBRADO
        </div>
        <h2
          style={{
            margin: '3px 0 0',
            fontFamily: fontBlack,
            fontSize: '25px',
            color: '#fff',
            letterSpacing: '-0.02em',
          }}
        >
          Tu dieta
        </h2>
      </div>

      <div
        style={{
          background: '#13141A',
          border: '1px solid #1C1E27',
          borderRadius: '20px',
          padding: '18px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          <span style={{ fontSize: '12px', color: '#7B7E8A', fontWeight: 700 }}>
            Total del día
          </span>
          <span
            style={{ fontFamily: fontBlack, fontSize: '28px', color: '#fff' }}
          >
            2.100 <span style={{ fontSize: '14px', color: '#5C5F6B' }}>kcal</span>
          </span>
        </div>
        <div style={{ display: 'flex', gap: '14px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '16px', fontWeight: 900, color: LIME }}>
              160g
            </div>
            <div style={{ fontSize: '10px', color: '#7B7E8A', fontWeight: 700 }}>
              PROT
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '16px', fontWeight: 900, color: '#fff' }}>
              210g
            </div>
            <div style={{ fontSize: '10px', color: '#7B7E8A', fontWeight: 700 }}>
              CARB
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: '16px', fontWeight: 900, color: '#fff' }}>
              62g
            </div>
            <div style={{ fontSize: '10px', color: '#7B7E8A', fontWeight: 700 }}>
              GRASA
            </div>
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
        {MEALS.map((m) => (
          <div
            key={m.meal}
            style={{
              background: '#13141A',
              border: '1px solid #1C1E27',
              borderRadius: '18px',
              padding: '16px',
              display: 'flex',
              gap: '14px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '48px',
                height: '48px',
                flex: 'none',
                borderRadius: '14px',
                background: 'rgba(166,255,61,0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '22px',
              }}
            >
              {m.icon}
            </div>
            <div
              style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                gap: '3px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <span
                  style={{ fontSize: '15px', fontWeight: 900, color: '#fff' }}
                >
                  {m.meal}
                </span>
                <span
                  style={{ fontSize: '12px', fontWeight: 800, color: LIME }}
                >
                  {m.kcal}
                </span>
              </div>
              <span
                style={{ fontSize: '13px', color: '#9396A2', fontWeight: 500 }}
              >
                {m.items}
              </span>
              <span
                style={{ fontFamily: mono, fontSize: '10px', color: '#5C5F6B' }}
              >
                {m.macro}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
