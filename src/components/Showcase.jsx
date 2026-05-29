import erpImg from '../assets/erp.jpeg';
import crmImg from '../assets/crm.jpeg';
import { ArrowRightIcon } from './icons/ServiceIcons.jsx';

const PROJECTS = [
  {
    image: erpImg,
    tag: 'ERP',
    title: 'Sistema ERP de gestión integral',
    description:
      'Panel modular con métricas de operación, control de pagos, inventario y reportería en tiempo real para empresas en crecimiento.',
    highlights: ['Multi-módulo', 'Reportería en vivo', 'Roles granulares'],
    accent: 'accent',
  },
  {
    image: crmImg,
    tag: 'CRM',
    title: 'CRM analítico para equipos comerciales',
    description:
      'Dashboards interactivos con embudo de ventas, performance por canal y análisis predictivo para acelerar la conversión.',
    highlights: ['Pipelines a medida', 'Analítica avanzada', 'Integraciones API'],
    accent: 'secondary',
  },
];

function ProjectCard({ project }) {
  const isAccent = project.accent === 'accent';

  return (
    <article
      className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-all duration-500 hover:-translate-y-1 hover:border-white/20 ${
        isAccent ? 'hover:shadow-glow' : 'hover:shadow-glow-blue'
      }`}
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-deep">
        <div
          className={`absolute inset-0 z-10 bg-gradient-to-t from-deep via-deep/40 to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-60`}
          aria-hidden
        />
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <span
          className={`absolute left-5 top-5 z-20 inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] ${
            isAccent
              ? 'border-accent/40 bg-accent/10 text-accent'
              : 'border-secondary/40 bg-secondary/10 text-secondary'
          }`}
        >
          <span
            className={`h-1.5 w-1.5 rounded-full ${
              isAccent ? 'bg-accent' : 'bg-secondary'
            }`}
          />
          {project.tag}
        </span>
      </div>

      <div className="relative p-8">
        <h3 className="text-xl font-bold text-white sm:text-2xl">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">
          {project.description}
        </p>

        <ul className="mt-5 flex flex-wrap gap-2">
          {project.highlights.map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted"
            >
              {item}
            </li>
          ))}
        </ul>

        <a
          href="#contacto"
          className={`mt-7 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors duration-300 ${
            isAccent
              ? 'text-accent hover:text-white'
              : 'text-secondary hover:text-white'
          }`}
        >
          Ver más detalles
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </article>
  );
}

export default function Showcase() {
  return (
    <section
      id="proyectos"
      className="relative overflow-hidden border-t border-white/5 bg-deep py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[420px] w-[420px] translate-x-1/3 rounded-full bg-accent/10 blur-[140px]"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Proyectos
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Plataformas reales, resultados medibles
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Sistemas empresariales construidos desde cero — limpios, escalables
            y diseñados para potenciar la operación de cada cliente.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.tag} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
