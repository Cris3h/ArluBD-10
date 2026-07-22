import {
  CalendarHeart,
  CheckCircle2,
  Clock,
  MapPin,
  Music,
  Sparkle,
  Waves,
  XCircle,
} from 'lucide-react'
import { Countdown } from './components/countdown'
import { SparkleField } from './components/sparkle-field'

// Formulario de confirmación de asistencia (definido en .env como PUBLIC_SURVEY_BIRTHDAY_URL).
const FORM_ASISTO = import.meta.env.PUBLIC_SURVEY_BIRTHDAY_URL
// TODO: reemplazar por la segunda URL del formulario "No voy a poder ir".
const FORM_NO_ASISTO = 'https://forms.gle/REEMPLAZAR-NO-VOY'

const details = [
  {
    icon: CalendarHeart,
    label: 'Fecha',
    value: 'Sábado 1 de agosto de 2026',
  },
  {
    icon: Clock,
    label: 'Horario',
    value: '12:00 a 15:00 hs',
  },
  {
    icon: MapPin,
    label: 'Lugar',
    value: 'ACJ · Catamarca 1247, Rosario',
  },
]

function App() {
  return (
    <main className="relative min-h-dvh overflow-hidden px-4 py-10 sm:py-16">
      <SparkleField />

      <div className="relative mx-auto flex max-w-xl flex-col items-center">
        {/* Etiqueta grupo */}
        <div className="mb-5 flex items-center gap-2 rounded-full bg-primary px-4 py-1.5 text-primary-foreground shadow-lg">
          <Music size={16} strokeWidth={2.5} />
          <span className="font-display text-sm font-semibold uppercase tracking-[0.25em]">
            Fiesta K4OS
          </span>
        </div>

        {/* Tarjeta principal */}
        <section className="relative w-full rounded-4xl bg-card/80 p-6 text-center shadow-2xl ring-2 ring-primary/40 backdrop-blur sm:p-9">
          <p className="font-display text-base font-medium text-secondary">
            ¡Estás invitad@ al cumple de
          </p>
          <h1 className="mt-1 font-display text-6xl font-bold text-balance text-primary drop-shadow-[0_2px_0_oklch(0.86_0.17_95)] sm:text-7xl">
            Arlette
          </h1>
          <p className="mt-2 font-display text-lg font-semibold text-accent">¡Cumple 10 años!</p>

          {/* Imagen hero */}
          <div className="relative mx-auto mt-6 aspect-square w-full max-w-xs overflow-hidden rounded-3xl ring-2 ring-secondary/50">
            <img
              src="/k4os.png"
              alt="Ilustración de un grupo de K-pop en el escenario con lightsticks y brillos"
              className="absolute inset-0 h-full w-full object-contain"
            />
          </div>

          <div className="animate-float-slow pointer-events-none absolute -right-3 top-24 h-16 w-16 sm:-right-5 sm:h-20 sm:w-20">
            <img
              src="/k4osIc.png"
              alt=""
              aria-hidden="true"
              className="h-full w-full object-contain drop-shadow-lg"
            />
          </div>

          {/* Cuenta regresiva */}
          <div className="mt-8">
            <p className="mb-3 font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
              Falta para el show
            </p>
            <Countdown />
          </div>

          {/* Detalles */}
          <ul className="mt-8 flex flex-col gap-3 text-left">
            {details.map((d) => (
              <li
                key={d.label}
                className="flex items-center gap-3 rounded-2xl bg-muted/60 px-4 py-3 ring-1 ring-border"
              >
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-secondary text-secondary-foreground">
                  <d.icon size={20} strokeWidth={2.4} />
                </span>
                <span className="flex flex-col">
                  <span className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    {d.label}
                  </span>
                  <span className="font-display text-base font-semibold text-card-foreground text-pretty">
                    {d.value}
                  </span>
                </span>
              </li>
            ))}
          </ul>

          {/* Aviso pileta */}
          <div className="mt-4 flex items-center gap-3 rounded-2xl bg-accent px-4 py-3 text-left text-accent-foreground">
            <Waves size={22} strokeWidth={2.5} className="shrink-0" />
            <p className="text-sm font-semibold text-pretty">
              {'¡Atención! Traé malla para disfrutar de la pileta climatizada.'}
            </p>
          </div>

          {/* RSVP */}
          <div className="mt-8">
            <p className="mb-3 font-display text-lg font-semibold text-primary">
              ¿Venís a bailar con nosotras?
            </p>
            <div className="flex flex-col gap-3">
              <a
                href={FORM_ASISTO}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-pulse-glow flex items-center justify-center gap-2 rounded-2xl bg-primary px-6 py-4 font-display text-lg font-bold text-primary-foreground transition-transform hover:scale-[1.03] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <CheckCircle2 size={22} strokeWidth={2.5} />
                ¡Voy a asistir!
              </a>
              <a
                href={FORM_NO_ASISTO}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-2xl bg-muted px-6 py-3 font-display text-base font-semibold text-muted-foreground ring-1 ring-border transition-transform hover:scale-[1.02] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                <XCircle size={20} strokeWidth={2.4} />
                No voy a poder ir
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              Al tocar un botón te llevamos a un formulario de Google para confirmar.
            </p>
          </div>
        </section>

        <p className="mt-6 flex items-center gap-2 font-display text-sm font-medium text-secondary">
          <Sparkle size={16} fill="currentColor" strokeWidth={0} />
          ¡Te esperamos con mucha purpurina y K-pop!
          <Sparkle size={16} fill="currentColor" strokeWidth={0} />
        </p>
      </div>
    </main>
  )
}

export default App
