import { ServerIcon, CodeIcon, AiIcon, CheckIcon, ArrowRightIcon } from './icons/ServiceIcons.jsx';
import Reveal from './Reveal.jsx';
import { buildWhatsAppUrl } from '../lib/contact.js';

const BENEFITS = [
  { title: 'Costo fijo y predecible', text: 'Una cuota mensual en lugar de facturas sorpresa por cada ajuste.' },
  { title: 'Un solo responsable técnico', text: 'Alguien que ya conoce tu sistema y responde por él.' },
  { title: 'Atención directa', text: 'Hablas con quien resuelve, sin call center ni tickets perdidos.' },
];

const PLANS = [
  {
    icon: ServerIcon,
    name: 'Infraestructura',
    tagline: 'Gestión de servidores',
    idealFor: 'Negocios con sistemas en producción que no pueden detenerse.',
    benefits: [
      'Monitoreo y alertas antes de que tus clientes noten un problema',
      'Respaldos automáticos y actualizaciones de seguridad',
      'Optimización de recursos con Docker para pagar solo lo que usas',
    ],
    waMessage: 'Hola, me interesa la iguala de Infraestructura (gestión de servidores).',
  },
  {
    icon: CodeIcon,
    name: 'Evolución',
    tagline: 'Mantenimiento y mejora continua',
    idealFor: 'Equipos que necesitan que su plataforma mejore cada mes.',
    benefits: [
      'Corrección de errores con prioridad',
      'Horas mensuales para nuevas funciones y ajustes',
      'Pasarelas de pago y dependencias siempre al día',
    ],
    waMessage: 'Hola, me interesa la iguala de Evolución (mantenimiento y mejoras).',
  },
  {
    icon: AiIcon,
    name: 'Agentes de IA',
    tagline: 'Operación de IA',
    idealFor: 'Empresas que quieren automatizar atención y procesos con IA.',
    benefits: [
      'Monitoreo de respuestas y del costo de uso de la API',
      'Ajustes continuos con la información de tu negocio',
      'Nuevas automatizaciones conforme creces',
    ],
    waMessage: 'Hola, me interesa la iguala de Agentes de IA.',
  },
];

const AUDIENCES = [
  {
    title: 'PyMEs y startups',
    text: 'Escala tu operación sin contratar un área de TI completa. Tienes un equipo técnico senior por una fracción del costo.',
  },
  {
    title: 'Agencias y corporativos',
    text: 'Capacidad técnica especializada para tus proyectos: entregables documentados, tiempos de respuesta acordados y código mantenible.',
  },
];

function PlanCard({ plan }) {
  const Icon = plan.icon;

  return (
    <article className="group relative flex h-full flex-col rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-[transform,border-color] duration-200 hover:-translate-y-1 hover:border-accent/50">
      {/* Glow lives on its own layer so hover only animates opacity, not box-shadow. */}
      <span
        className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 shadow-glow transition-opacity duration-200 group-hover:opacity-100"
        aria-hidden
      />

      <div className="flex items-center gap-4">
        <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 text-accent transition-colors duration-200 group-hover:bg-accent group-hover:text-white">
          <Icon className="h-6 w-6" />
        </span>
        <div>
          <h3 className="text-xl font-bold text-white">{plan.name}</h3>
          <p className="text-xs font-medium uppercase tracking-wider text-muted">
            {plan.tagline}
          </p>
        </div>
      </div>

      <p className="mt-6 text-sm leading-relaxed text-muted">
        <span className="font-semibold text-white">Ideal para: </span>
        {plan.idealFor}
      </p>

      <ul className="mt-6 space-y-3">
        {plan.benefits.map((benefit) => (
          <li key={benefit} className="flex items-start gap-3 text-sm text-white/90">
            <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
            {benefit}
          </li>
        ))}
      </ul>

      <div className="mt-8 border-t border-white/5 pt-6 lg:mt-auto">
        <p className="text-sm font-semibold text-white">Cotización a tu medida</p>
        <a
          href={buildWhatsAppUrl(plan.waMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="group/cta mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition-[transform,background-color,border-color] duration-150 ease-out hover:border-accent hover:bg-accent active:scale-[0.97]"
        >
          Quiero esta iguala
          <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover/cta:translate-x-1" />
        </a>
      </div>
    </article>
  );
}

export default function Retainer() {
  return (
    <section
      id="igualas"
      className="relative scroll-mt-28 overflow-hidden border-t border-white/5 bg-deep py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute -left-32 top-1/3 -z-10 h-[420px] w-[420px] rounded-full bg-accent/10 blur-[140px]"
        aria-hidden
      />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Modelo de trabajo
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Tu tecnología en manos expertas, por una cuota fija al mes
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Con una iguala mensual nos hacemos cargo de tus servidores, tu
            plataforma y tus agentes de IA. Tú te enfocas en vender.
          </p>
        </Reveal>

        <dl className="mt-14 grid grid-cols-1 gap-6 border-y border-white/5 py-8 sm:grid-cols-3">
          {BENEFITS.map((benefit, index) => (
            <Reveal key={benefit.title} delay={index * 60}>
              <dt className="flex items-center gap-2 text-sm font-bold text-white">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden />
                {benefit.title}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-muted">{benefit.text}</dd>
            </Reveal>
          ))}
        </dl>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {PLANS.map((plan, index) => (
            <Reveal key={plan.name} delay={index * 80}>
              <PlanCard plan={plan} />
            </Reveal>
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {AUDIENCES.map((audience) => (
            <Reveal
              key={audience.title}
              className="rounded-2xl border border-white/5 bg-white/[0.015] p-6 sm:p-8"
            >
              <h3 className="text-base font-bold text-white">{audience.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{audience.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
