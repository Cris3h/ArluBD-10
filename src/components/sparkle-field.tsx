import { Sparkle, Star } from 'lucide-react'

const sparkles = [
  { top: '8%', left: '6%', size: 22, delay: '0s', color: 'text-accent' },
  { top: '16%', left: '88%', size: 30, delay: '0.6s', color: 'text-secondary' },
  { top: '38%', left: '3%', size: 18, delay: '1.1s', color: 'text-primary' },
  { top: '52%', left: '93%', size: 26, delay: '0.3s', color: 'text-accent' },
  { top: '72%', left: '9%', size: 24, delay: '0.9s', color: 'text-secondary' },
  { top: '84%', left: '82%', size: 20, delay: '1.4s', color: 'text-primary' },
  { top: '28%', left: '48%', size: 16, delay: '1.7s', color: 'text-accent' },
]

const stars = [
  { top: '12%', left: '70%', size: 16, delay: '0.4s' },
  { top: '60%', left: '20%', size: 14, delay: '1.2s' },
  { top: '90%', left: '55%', size: 18, delay: '0.8s' },
]

export function SparkleField() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {sparkles.map((s, i) => (
        <Sparkle
          key={`sp-${i}`}
          className={`absolute animate-twinkle ${s.color}`}
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
          size={s.size}
          fill="currentColor"
          strokeWidth={0}
        />
      ))}
      {stars.map((s, i) => (
        <Star
          key={`st-${i}`}
          className="absolute animate-twinkle text-accent/80"
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
          size={s.size}
          fill="currentColor"
          strokeWidth={0}
        />
      ))}
    </div>
  )
}
