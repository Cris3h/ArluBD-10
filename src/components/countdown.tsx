import { useEffect, useState } from 'react'

const TARGET = new Date('2026-08-01T12:00:00-03:00').getTime()

function getRemaining() {
  const diff = Math.max(0, TARGET - Date.now())
  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    min: Math.floor((diff / (1000 * 60)) % 60),
    seg: Math.floor((diff / 1000) % 60),
  }
}

export function Countdown() {
  const [time, setTime] = useState(getRemaining)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const id = setInterval(() => setTime(getRemaining()), 1000)
    return () => clearInterval(id)
  }, [])

  const items = [
    { label: 'Días', value: time.dias },
    { label: 'Horas', value: time.horas },
    { label: 'Min', value: time.min },
    { label: 'Seg', value: time.seg },
  ]

  return (
    <div className="flex justify-center gap-2 sm:gap-3" aria-live="polite">
      {items.map((item) => (
        <div
          key={item.label}
          className="flex w-16 flex-col items-center rounded-2xl bg-card/70 px-2 py-3 ring-1 ring-primary/40 backdrop-blur sm:w-20"
        >
          <span className="font-display text-2xl font-bold text-secondary sm:text-3xl">
            {mounted ? String(item.value).padStart(2, '0') : '--'}
          </span>
          <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  )
}
