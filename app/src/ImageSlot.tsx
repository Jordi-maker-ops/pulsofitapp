import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from 'react'
import { A as LIME, font } from './theme'

type Shape = 'rect' | 'rounded' | 'circle' | 'pill'

interface ImageSlotProps {
  /** Persistence key — each slot needs a distinct id. */
  id: string
  shape?: Shape
  radius?: number
  fit?: CSSProperties['objectFit']
  placeholder?: string
  style?: CSSProperties
}

const STORE_PREFIX = 'pulsofit.image-slot.'
const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif']

function radiusFor(shape: Shape, radius: number): string {
  switch (shape) {
    case 'rect':
      return '0'
    case 'circle':
      return '50%'
    case 'pill':
      return '999px'
    default:
      return `${radius}px`
  }
}

/**
 * User-fillable image placeholder. Click to browse or drag an image onto it;
 * the chosen image persists across reloads via localStorage. Empty state shows
 * a styled caption so screens read clearly before any photo is supplied.
 */
export function ImageSlot({
  id,
  shape = 'rounded',
  radius = 12,
  fit = 'cover',
  placeholder = 'Arrastra una imagen',
  style,
}: ImageSlotProps) {
  const storeKey = STORE_PREFIX + id
  const [src, setSrc] = useState<string | null>(null)
  const [dragOver, setDragOver] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    try {
      setSrc(localStorage.getItem(storeKey))
    } catch {
      /* storage may be unavailable */
    }
  }, [storeKey])

  const ingest = useCallback(
    (file: File | undefined) => {
      if (!file || !ACCEPT.includes(file.type)) return
      const reader = new FileReader()
      reader.onload = () => {
        const data = String(reader.result)
        setSrc(data)
        try {
          localStorage.setItem(storeKey, data)
        } catch {
          /* quota or unavailable — keep in-memory only */
        }
      }
      reader.readAsDataURL(file)
    },
    [storeKey],
  )

  const borderRadius = radiusFor(shape, radius)

  const base: CSSProperties = {
    position: 'relative',
    overflow: 'hidden',
    borderRadius,
    background: '#15171E',
    cursor: 'pointer',
    ...style,
  }

  if (src) {
    return (
      <div
        style={base}
        onClick={() => inputRef.current?.click()}
        onDragOver={(e) => {
          e.preventDefault()
          setDragOver(true)
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragOver(false)
          ingest(e.dataTransfer.files?.[0])
        }}
      >
        <img
          src={src}
          alt=""
          style={{
            width: '100%',
            height: '100%',
            objectFit: fit,
            display: 'block',
          }}
        />
        <input
          ref={inputRef}
          type="file"
          accept={ACCEPT.join(',')}
          style={{ display: 'none' }}
          onChange={(e) => ingest(e.target.files?.[0] ?? undefined)}
        />
      </div>
    )
  }

  return (
    <div
      style={{
        ...base,
        background: dragOver
          ? 'rgba(166,255,61,0.10)'
          : 'radial-gradient(120% 120% at 50% 0%, #1B1E27 0%, #14161D 100%)',
        border: dragOver
          ? `1.5px dashed ${LIME}`
          : '1.5px dashed rgba(255,255,255,0.10)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
        padding: '14px',
        textAlign: 'center',
        transition: 'all .15s',
      }}
      onClick={() => inputRef.current?.click()}
      onDragOver={(e) => {
        e.preventDefault()
        setDragOver(true)
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={(e) => {
        e.preventDefault()
        setDragOver(false)
        ingest(e.dataTransfer.files?.[0])
      }}
    >
      <span
        style={{
          width: '34px',
          height: '34px',
          flex: 'none',
          borderRadius: '11px',
          background: 'rgba(166,255,61,0.12)',
          border: '1px solid rgba(166,255,61,0.3)',
          color: LIME,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontSize: '17px',
        }}
      >
        ＋
      </span>
      <span
        style={{
          fontFamily: font,
          fontSize: '11.5px',
          fontWeight: 700,
          lineHeight: 1.35,
          color: '#8A8D99',
          maxWidth: '90%',
        }}
      >
        {placeholder}
      </span>
      <input
        ref={inputRef}
        type="file"
        accept={ACCEPT.join(',')}
        style={{ display: 'none' }}
        onChange={(e) => ingest(e.target.files?.[0] ?? undefined)}
      />
    </div>
  )
}
