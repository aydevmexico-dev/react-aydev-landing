import { ArrowRightIcon, ChatIcon } from './icons/ServiceIcons.jsx';
import { buildWhatsAppUrl } from '../lib/contact.js';
import heroVideo from '../assets/simple-app-screen-animation-for-a-landing-page-sho.mp4';
import logo from '../assets/logo.png';

// Entrance choreography: the headline leads, support follows 100ms apart,
// the preview lands last. Logo and badge are decoration — they fade in place.
const step = (ms) => ({ animationDelay: `${ms}ms` });

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-deep pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-36"
    >
      <div className="absolute inset-0 -z-10 bg-grid animate-fade-in" aria-hidden />
      <div
        className="absolute -top-32 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/25 blur-[140px] animate-pulse-glow"
        aria-hidden
      />
      <div
        className="absolute -bottom-40 right-0 -z-10 h-[380px] w-[380px] translate-x-1/3 rounded-full bg-accent/10 blur-[140px]"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <div className="relative animate-fade-in">
            <div
              className="absolute inset-0 -z-10 rounded-full bg-accent/30 blur-2xl"
              aria-hidden
            />
            <img
              src={logo}
              alt="aydevops.mx — Software empresarial a la medida"
              className="h-24 w-24 object-contain drop-shadow-[0_0_40px_rgba(213,0,11,0.55)] sm:h-28 sm:w-28"
            />
          </div>

          <span className="mt-6 inline-flex animate-fade-in items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
            Disponible para nuevos proyectos · 2026
          </span>

          <h1 className="mt-8 max-w-5xl animate-enter text-4xl font-extrabold leading-[1.05] tracking-tight text-white motion-reduce:animate-fade-in sm:text-5xl md:text-6xl lg:text-7xl">
            Construimos el software que{' '}
            <span className="relative inline-block">
              <span className="text-gradient-name">mueve tu negocio</span>
              <span
                className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-accent via-accent to-transparent"
                aria-hidden
              />
            </span>{' '}
            y lo mantenemos en marcha.
          </h1>

          <p
            style={step(100)}
            className="mt-8 max-w-2xl animate-enter text-base leading-relaxed text-muted motion-reduce:animate-fade-in sm:text-lg md:text-xl"
          >
            Plataformas a la medida en Python y Django, pagos en línea, agentes
            de IA conectados a tu operación y servidores administrados con una
            iguala mensual.{' '}
            <span className="font-semibold text-white">
              Sin intermediarios: hablas directo con quien desarrolla tu
              proyecto.
            </span>
          </p>

          <div
            style={step(200)}
            className="mt-10 flex w-full animate-enter flex-col items-center justify-center gap-4 motion-reduce:animate-fade-in sm:flex-row"
          >
            <a
              href={buildWhatsAppUrl('Hola, me interesa platicar sobre un proyecto con aydevops.mx.')}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-[transform,background-color] duration-150 ease-out hover:bg-[#ff1a26] active:scale-[0.97] sm:w-auto"
            >
              <ChatIcon className="h-4 w-4" />
              Hablemos por WhatsApp
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            <a
              href="#servicios"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white transition-[transform,background-color,border-color] duration-150 ease-out hover:border-white/30 hover:bg-white/[0.06] active:scale-[0.97] sm:w-auto"
            >
              Ver servicios
            </a>
          </div>

          <div
            style={step(320)}
            className="relative mt-14 w-full max-w-3xl animate-enter-scale motion-reduce:animate-fade-in sm:mt-16"
          >
            <div
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-accent/25 via-transparent to-accent/10 opacity-70 blur-3xl"
              aria-hidden
            />
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] shadow-[0_20px_80px_-20px_rgba(0,0,0,0.7)] backdrop-blur">
              <div className="flex items-center gap-2 border-b border-white/5 bg-deep/60 px-4 py-2.5">
                <span className="h-2 w-2 rounded-full bg-[#ff5f57]" />
                <span className="h-2 w-2 rounded-full bg-[#febc2e]" />
                <span className="h-2 w-2 rounded-full bg-[#28c840]" />
                <span className="ml-3 text-[11px] font-medium text-muted">
                  preview · plataforma.aydevops.mx
                </span>
              </div>
              <div className="aspect-[16/9] w-full bg-deep">
                <video
                  src={heroVideo}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="block h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
