import { ArrowRightIcon } from './icons/ServiceIcons.jsx';
import heroVideo from '../assets/simple-app-screen-animation-for-a-landing-page-sho.mp4';
import logo from '../assets/logo.png';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative isolate overflow-hidden bg-deep pt-32 pb-24 sm:pt-40 sm:pb-32 lg:pt-48 lg:pb-40"
    >
      <div className="absolute inset-0 -z-10 bg-grid" aria-hidden />
      <div
        className="absolute -top-32 left-1/2 -z-10 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-accent/25 blur-[140px] animate-pulse-glow"
        aria-hidden
      />
      <div
        className="absolute bottom-0 right-0 -z-10 h-[420px] w-[420px] translate-x-1/3 translate-y-1/3 rounded-full bg-secondary/25 blur-[140px] animate-pulse-glow"
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="flex flex-col items-center text-center">
          <div className="relative animate-fade-up">
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

          <span className="mt-6 inline-flex animate-fade-up items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.18em] text-muted backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-accent shadow-glow" />
            Disponible para nuevos proyectos · 2026
          </span>

          <h1 className="mt-8 max-w-5xl animate-fade-up text-4xl font-extrabold leading-[1.05] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Transformamos ideas en{' '}
            <span className="relative inline-block">
              <span className="text-gradient-name">software empresarial</span>
              <span
                className="absolute -bottom-2 left-0 h-1 w-full rounded-full bg-gradient-to-r from-accent via-accent to-transparent"
                aria-hidden
              />
            </span>{' '}
            de alto rendimiento.
          </h1>

          <p className="mt-8 max-w-2xl animate-fade-up text-base leading-relaxed text-muted sm:text-lg md:text-xl">
            Somos{' '}
            <span className="font-semibold text-white">aydevops.mx</span>, una
            empresa de desarrollo de software a la medida para pequeñas y medianas empresas.
            Construimos plataformas Web, CRMs, ERPs y Aplicaciones Móviles
            con arquitectura limpia, escalable y enfocada en resultados de
            negocio.
          </p>

          <div className="mt-10 flex w-full animate-fade-up flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="https://wa.me/5530662066"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff1a26] hover:shadow-[0_0_80px_-5px_rgba(213,0,11,0.65)] sm:w-auto"
            >
              Cotiza tu Proyecto
              <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#servicios"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-secondary hover:bg-secondary/10 hover:text-white hover:shadow-glow-blue sm:w-auto"
            >
              Ver Servicios
            </a>
          </div>

          <div className="relative mt-12 w-full max-w-3xl animate-fade-up sm:mt-14">
            <div
              className="absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-tr from-accent/25 via-transparent to-secondary/25 opacity-70 blur-3xl"
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

          <dl className="mt-16 grid w-full max-w-3xl animate-fade-up grid-cols-2 gap-6 border-t border-white/5 pt-10 sm:grid-cols-4">
            {[
              { value: '+5', label: 'Años de experiencia' },
              { value: '30+', label: 'Proyectos entregados' },
              { value: '100%', label: 'Código a la medida' },
              { value: '24/7', label: 'Soporte directo' },
            ].map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <dt className="text-2xl font-extrabold text-white sm:text-3xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs font-medium uppercase tracking-wider text-muted">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
