// Static content for PulsoFit v2, mirroring the design's dc-script data.

export interface Exercise {
  name: string
  detail: string
  duration: string
  chips: [string, string][]
  steps: string[]
  tip: string
}

export const EXERCISES: Exercise[] = [
  {
    name: 'Press de banca', detail: '4 series · 8 reps · 50 kg', duration: '0:48',
    chips: [['4', 'SERIES'], ['8', 'REPS'], ['50kg', 'PESO']],
    steps: [
      'Túmbate con los pies firmes en el suelo y los omóplatos retraídos.',
      'Baja la barra controlando hasta rozar el pecho.',
      'Empuja con fuerza sin llegar a bloquear los codos.',
      'Mantén las muñecas firmes y la espalda pegada al banco.',
    ],
    tip: 'No rebotes la barra en el pecho: controla la bajada en 2 segundos.',
  },
  {
    name: 'Press militar', detail: '4 series · 10 reps · 30 kg', duration: '0:42',
    chips: [['4', 'SERIES'], ['10', 'REPS'], ['30kg', 'PESO']],
    steps: [
      'De pie, core apretado y glúteos activos.',
      'Coloca la barra a la altura de la clavícula.',
      'Empuja por encima de la cabeza sin arquear la espalda.',
      'Baja controlando hasta la posición inicial.',
    ],
    tip: 'Aprieta el abdomen para no compensar con la zona lumbar.',
  },
  {
    name: 'Remo con barra', detail: '4 series · 10 reps · 45 kg', duration: '0:50',
    chips: [['4', 'SERIES'], ['10', 'REPS'], ['45kg', 'PESO']],
    steps: [
      'Espalda recta con una ligera flexión de cadera.',
      'Tira de la barra hacia el ombligo llevando los codos atrás.',
      'Aprieta la espalda en el punto más alto.',
      'Baja despacio sin redondear la espalda.',
    ],
    tip: 'Imagina que metes los codos en el bolsillo trasero.',
  },
  {
    name: 'Fondos en paralelas', detail: '3 series · 12 reps', duration: '0:38',
    chips: [['3', 'SERIES'], ['12', 'REPS'], ['Peso', 'CORP.']],
    steps: [
      'Cuerpo ligeramente inclinado hacia delante.',
      'Baja de forma controlada hasta unos 90° de codo.',
      'Empuja hasta extender los brazos.',
      'Mantén los hombros lejos de las orejas.',
    ],
    tip: 'Si te cuesta, usa una banda elástica de asistencia.',
  },
  {
    name: 'Curl de bíceps', detail: '3 series · 12 reps · 14 kg', duration: '0:35',
    chips: [['3', 'SERIES'], ['12', 'REPS'], ['14kg', 'PESO']],
    steps: [
      'Codos pegados al cuerpo y core firme.',
      'Sube las mancuernas sin balancear el tronco.',
      'Aprieta el bíceps en la parte alta.',
      'Baja lento controlando el peso.',
    ],
    tip: 'El movimiento es solo del antebrazo: no uses impulso.',
  },
]

export const WEEK: [string, string][] = [
  ['L', 'Pier'], ['M', 'Pec'], ['X', 'Esp'], ['J', 'Hoy'], ['V', 'Pier'], ['S', 'Card'], ['D', 'Off'],
]
export const TODAY_IDX = 3

export const HISTORY = [
  { icon: '🏋️', name: 'Tren inferior · Fuerza', date: 'Ayer', detail: '52 min' },
  { icon: '🏃', name: 'Cardio HIIT', date: 'Mar 24', detail: '30 min' },
  { icon: '💪', name: 'Tren superior · Hipertrofia', date: 'Lun 23', detail: '48 min' },
]

export const MEALS = [
  { icon: '🍳', meal: 'Desayuno', kcal: '480 kcal', items: 'Avena, plátano y claras de huevo', macro: 'P 32 · C 60 · G 10' },
  { icon: '🥗', meal: 'Comida', kcal: '720 kcal', items: 'Pollo, arroz integral y verduras', macro: 'P 55 · C 78 · G 18' },
  { icon: '🍎', meal: 'Merienda', kcal: '300 kcal', items: 'Yogur griego, nueces y miel', macro: 'P 22 · C 24 · G 14' },
  { icon: '🐟', meal: 'Cena', kcal: '600 kcal', items: 'Salmón, patata y ensalada', macro: 'P 51 · C 48 · G 20' },
]

export const SHOPPING = [
  { name: 'Pechuga de pollo', qty: '1,2 kg' },
  { name: 'Arroz integral', qty: '1 kg' },
  { name: 'Salmón fresco', qty: '600 g' },
  { name: 'Avena', qty: '500 g' },
  { name: 'Yogur griego natural', qty: '8 uds' },
  { name: 'Verduras variadas', qty: '2 kg' },
  { name: 'Plátanos', qty: '6 uds' },
]

export const WEIGHTS = [72.0, 71.1, 70.3, 69.6, 68.9, 68.4]
export const WEIGHT_LABELS = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6']

export const MEASURES: [string, string, string][] = [
  ['Cintura', '78 cm', '▼ 4 cm'], ['Pecho', '98 cm', '▲ 2 cm'],
  ['Brazo', '34 cm', '▲ 1,5 cm'], ['Pierna', '56 cm', '▲ 2 cm'],
]

export const NOTIF_FEED = [
  { icon: '💪', title: '¡Entreno de hoy listo!', body: 'Tren superior · 6 ejercicios con vídeo te esperan.', time: 'Hace 1 h' },
  { icon: '💧', title: 'Recuerda hidratarte', body: 'Llevas 5 de 8 vasos. ¡Un poco más!', time: 'Hace 3 h' },
  { icon: '⚖️', title: 'Toca pesarte', body: 'Registra tu peso semanal para ver tu progreso.', time: 'Ayer' },
]

export const NOTIF_DEFS: [import('./useApp').NotifKey, string, string][] = [
  ['entreno', '💪', 'Recordatorio de entreno'],
  ['agua', '💧', 'Recordatorio de agua'],
  ['comidas', '🍽️', 'Recordatorio de comidas'],
  ['peso', '⚖️', 'Aviso de pesaje semanal'],
  ['motiva', '⚡', 'Mensajes motivacionales'],
]

export const PERM_REMINDERS = [
  { icon: '💪', title: 'Tu entreno del día', body: 'Te aviso a tu hora para no fallar.' },
  { icon: '💧', title: 'Hidratación', body: 'Pequeños toques para beber agua.' },
  { icon: '🍽️', title: 'Tus comidas', body: 'Recordatorio de cada comida del plan.' },
  { icon: '⚖️', title: 'Pesaje semanal', body: 'Para ver tu progreso cada semana.' },
]

export const FAQS: [string, string][] = [
  ['¿La app es de pago?', 'No, PulsoFit es 100% gratis: entreno, dieta y seguimiento sin coste ni permanencia.'],
  ['¿El plan se adapta a mí?', 'Sí. Generamos entreno y dieta según tu objetivo, nivel, peso, altura y días disponibles, y se ajusta cada semana.'],
  ['¿Los ejercicios traen vídeo?', 'Sí, cada ejercicio incluye un vídeo demostrativo y los pasos de técnica para que lo hagas perfecto.'],
  ['¿Puedo activar recordatorios?', 'Claro, desde Notificaciones activas o desactivas los avisos de entreno, agua, comidas y pesaje.'],
]

export const MACROS = [
  { label: 'Proteína', val: '120g', width: '75%', grad: true },
  { label: 'Carbos', val: '145g', width: '69%', grad: false },
  { label: 'Grasas', val: '40g', width: '64%', grad: false },
]

export const CLIENTS: [string, string, string, string, number][] = [
  ['Laura García', 'Perder grasa', 'Intermedio', 'Activa', 72],
  ['Carlos Ruiz', 'Ganar músculo', 'Principiante', 'Activa', 45],
  ['Marta López', 'Mantenerse', 'Avanzado', 'Activa', 88],
  ['Javier Sanz', 'Perder grasa', 'Intermedio', 'Inactivo', 30],
]

export const MESSAGES = [
  { name: 'Carlos Ruiz', time: 'Hace 2 h', subject: 'Duda con la dieta', body: 'Hola, ¿puedo cambiar el salmón de la cena por atún? No me gusta mucho el pescado azul.' },
  { name: 'Marta López', time: 'Ayer', subject: 'Cambio de rutina', body: '¿Podemos meter más trabajo de glúteo esta semana? Gracias!' },
  { name: 'Javier Sanz', time: 'Hace 2 días', subject: 'Vuelvo a entrenar', body: 'He estado de viaje, ¿retomo donde lo dejé o reinicio el plan?' },
]

export const STATS: [string, string, string][] = [
  ['Clientes activos', '142', '▲ 12 este mes'],
  ['Entrenos hoy', '87', '▲ 9%'],
  ['Retención', '91%', '▲ 3%'],
  ['Entrenos/sem', '4,2', '▲ 0,3'],
]
export const REV_VALS = [40, 62, 78, 95, 120, 142]
export const REV_LABELS = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun']

export const QUICK_LINKS: { icon: string; label: string; to: import('./useApp').Screen }[] = [
  { icon: '👤', label: 'Mi perfil', to: 'profile' },
  { icon: '🔔', label: 'Notificaciones', to: 'notif' },
  { icon: '💬', label: 'Contacto', to: 'contact' },
  { icon: '🛠️', label: 'Panel admin', to: 'admin' },
]

export const MOTIVATION = 'El dolor de hoy es la fuerza de mañana. ¡A por todas!'
