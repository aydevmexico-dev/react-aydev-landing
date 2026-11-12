import NumberFlow from '@number-flow/react';
import erpImg from '../assets/erp.jpeg';
import crmImg from '../assets/crm.jpeg';
import { ArrowRightIcon } from './icons/ServiceIcons.jsx';
import Reveal from './Reveal.jsx';
import useInView from '../hooks/useInView.js';

// TODO: confirmar cifras reales. Los años vienen de la versión anterior del sitio.
const METRICS = [
  { value: 10, suffix: '+', label: 'Sistemas estables en producción' },
  { value: 3, suffix: '+', label: 'Apps publicadas en Google Play' },
  { value: 5, suffix: '+', label: 'Conectores de IA activos' },
  { value: 5, suffix: '+', label: 'Años de experiencia' },
];

const PROJECTS = [
  {
    image: erpImg,
    tag: 'ERP',
    title: 'Sistema ERP de gestión integral',
    description:
      'Panel modular con métricas de operación, control de pagos, inventario y reportería en tiempo real para empresas en crecimiento.',
    highlights: ['Multi-módulo', 'Reportería en vivo', 'Roles granulares'],
  },
  {
    image: crmImg,
    tag: 'CRM',
    title: 'CRM analítico para equipos comerciales',
    description:
      'Dashboards interactivos con embudo de ventas, desempeño por canal y análisis predictivo para acelerar la conversión.',
    highlights: ['Pipelines a medida', 'Analítica avanzada', 'Integraciones API'],
  },
];

function Metrics() {
  const [ref, inView] = useInView();

  return (
    <dl
      ref={ref}
      className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4"
    >
      {METRICS.map((metric, index) => (
        <div
          key={metric.label}
          style={{ transitionDelay: `${index * 80}ms` }}
          className={`flex flex-col justify-between bg-deep p-6 transition-opacity duration-500 ease-out sm:p-8 ${
            inView ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <dt className="order-2 mt-3 text-xs font-medium uppercase leading-relaxed tracking-wider text-muted">
            {metric.label}
          </dt>
          <dd className="order-1 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
            <NumberFlow
              value={inView ? metric.value : 0}
              suffix={metric.suffix}
              className="tabular-nums"
            />
          </dd>
        </div>
      ))}
    </dl>
  );
}

function ProjectCard({ project }) {
  return (
    <article className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition-[transform,border-color] duration-200 hover:-translate-y-1 hover:border-accent/40">
      <div className="relative aspect-[16/10] overflow-hidden bg-deep">
        <div
          className="absolute inset-0 z-10 bg-gradient-to-t from-deep via-deep/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-60"
          aria-hidden
        />
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover object-top transition-transform duration-300 ease-out group-hover:scale-[1.03]"
        />
        <span className="absolute left-5 top-5 z-20 inline-flex items-center gap-1.5 rounded-full border border-accent/40 bg-accent/10 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-accent">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          {project.tag}
        </span>
      </div>

      <div className="relative p-8">
        <h3 className="text-xl font-bold text-white sm:text-2xl">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{project.description}</p>

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
          className="group/link mt-7 inline-flex items-center gap-1.5 text-sm font-semibold text-accent transition-colors duration-200 hover:text-white"
        >
          Quiero algo así
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover/link:translate-x-1" />
        </a>
      </div>
    </article>
  );
}

export default function Results() {
  return (
    <section
      id="resultados"
      className="relative scroll-mt-28 overflow-hidden border-t border-white/5 bg-deep py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute right-0 top-1/3 -z-10 h-[420px] w-[420px] translate-x-1/3 rounded-full bg-accent/10 blur-[140px]"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Resultados
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Sistemas reales, operando todos los días
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            No son demos: son plataformas, apps y agentes de IA que nuestros
            clientes usan en producción.
          </p>
        </Reveal>

        <Metrics />

        <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.tag} delay={index * 80}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
