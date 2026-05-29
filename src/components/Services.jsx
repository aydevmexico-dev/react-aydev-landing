import {
  WebIcon,
  CrmIcon,
  ErpIcon,
  MobileIcon,
  ArrowRightIcon,
} from './icons/ServiceIcons.jsx';

const SERVICES = [
  {
    icon: WebIcon,
    title: 'Páginas Web',
    description:
      'Sitios corporativos, landing pages de alta conversión y E-commerce optimizados para velocidad, SEO y experiencia de usuario.',
    features: ['Next.js / React', 'SEO técnico', 'E-commerce'],
    accent: 'accent',
  },
  {
    icon: CrmIcon,
    title: 'CRMs',
    description:
      'Sistemas de gestión de relaciones con clientes personalizados que automatizan ventas, marketing y soporte de tu negocio.',
    features: ['Pipelines a medida', 'Automatizaciones', 'Integraciones API'],
    accent: 'secondary',
  },
  {
    icon: ErpIcon,
    title: 'ERPs',
    description:
      'Planificación de recursos empresariales adaptada a tu operación real: inventario, finanzas, RRHH y reportería en tiempo real.',
    features: ['Multi-módulo', 'Reportería BI', 'Roles y permisos'],
    accent: 'accent',
  },
  {
    icon: MobileIcon,
    title: 'Aplicaciones Móviles',
    description:
      'Apps nativas y multiplataforma con rendimiento de producción, interfaces estéticas y publicación en App Store y Google Play.',
    features: ['React Native', 'iOS & Android', 'Push & Offline'],
    accent: 'secondary',
  },
];

function ServiceCard({ service }) {
  const Icon = service.icon;
  const isAccent = service.accent === 'accent';

  return (
    <article
      className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-500 hover:-translate-y-1 hover:border-white/20 ${
        isAccent ? 'hover:shadow-glow' : 'hover:shadow-glow-blue'
      }`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent ${
          isAccent ? 'via-accent' : 'via-secondary'
        } to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100`}
        aria-hidden
      />

      <div
        className={`inline-flex h-14 w-14 items-center justify-center rounded-xl border transition-all duration-500 ${
          isAccent
            ? 'border-accent/30 bg-accent/10 text-accent group-hover:bg-accent group-hover:text-white'
            : 'border-secondary/30 bg-secondary/10 text-secondary group-hover:bg-secondary group-hover:text-white'
        }`}
      >
        <Icon className="h-7 w-7" />
      </div>

      <h3 className="mt-6 text-xl font-bold text-white">{service.title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted">
        {service.description}
      </p>

      <ul className="mt-6 space-y-2">
        {service.features.map((feature) => (
          <li
            key={feature}
            className="flex items-center gap-2 text-xs font-medium text-muted"
          >
            <span
              className={`h-1 w-1 rounded-full ${
                isAccent ? 'bg-accent' : 'bg-secondary'
              }`}
            />
            {feature}
          </li>
        ))}
      </ul>

      <a
        href="https://wa.me/5530662066"
        target="_blank"
        rel="noopener noreferrer"
        className={`mt-8 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300 ${
          isAccent
            ? 'text-accent hover:text-white'
            : 'text-secondary hover:text-white'
        }`}
      >
        Solicitar propuesta
        <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </article>
  );
}

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative border-t border-white/5 bg-deep py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Servicios
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Soluciones tecnológicas a la medida
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Cuatro líneas de trabajo pensadas para escalar tu operación con
            código limpio, seguro y mantenible.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((service) => (
            <ServiceCard key={service.title} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}
