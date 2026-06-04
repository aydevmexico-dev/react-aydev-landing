import { CheckIcon } from './icons/ServiceIcons.jsx';

const PILLARS = [
  {
    title: 'Arquitectura Limpia',
    description:
      'Separación clara de responsabilidades, dominios bien delimitados y dependencias controladas para un código que sobrevive al paso del tiempo.',
  },
  {
    title: 'Modularidad Real',
    description:
      'Componentes independientes, contratos explícitos y reutilización sin acoplamiento. Cada pieza se puede mover, sustituir o evolucionar sin romper el sistema.',
  },
  {
    title: 'Escalabilidad por Diseño',
    description:
      'Decisiones técnicas que anticipan el crecimiento: infraestructura, datos y rendimiento listos para escalar cuando tu negocio lo necesite.',
  },
  {
    title: 'Calidad y Seguridad',
    description:
      'Pruebas, tipado estricto, revisiones y mejores prácticas de seguridad como parte del proceso, no como un parche al final.',
  },
];

export default function Philosophy() {
  return (
    <section
      id="filosofia"
      className="relative overflow-hidden border-t border-white/5 bg-deep py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute -left-32 top-1/2 -z-10 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-secondary/15 blur-[140px]"
        aria-hidden
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 px-6 lg:grid-cols-2 lg:gap-20 lg:px-10">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-secondary">
            Filosofía de Desarrollo
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Construimos software que{' '}
            <span className="text-gradient-name">crece contigo</span>, no en
            tu contra.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Cada línea de código es una decisión. En aydevops.mx trabajamos
            con principios de ingeniería sólidos para que tu inversión se
            traduzca en un producto mantenible, performante y listo para
            evolucionar.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="https://wa.me/5530662066"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#ff1a26]"
            >
              Conversemos de tu proyecto
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-white transition-colors duration-300 hover:border-secondary hover:text-secondary"
            >
              Explorar servicios
            </a>
          </div>
        </div>

        <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PILLARS.map((pillar) => (
            <li
              key={pillar.title}
              className="group rounded-2xl border border-white/10 bg-white/[0.02] p-6 transition-all duration-500 hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-accent/30 bg-accent/10 text-accent transition-colors duration-500 group-hover:bg-accent group-hover:text-white">
                <CheckIcon className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-base font-bold text-white">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {pillar.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
