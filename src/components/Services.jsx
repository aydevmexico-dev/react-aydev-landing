import { useRef, useState } from 'react';
import {
  CodeIcon,
  PaymentIcon,
  AiIcon,
  ServerIcon,
  MobileIcon,
  SupportIcon,
  CheckIcon,
  ArrowRightIcon,
} from './icons/ServiceIcons.jsx';
import Reveal from './Reveal.jsx';
import { buildWhatsAppUrl } from '../lib/contact.js';

const SERVICES = [
  {
    id: 'backend',
    icon: CodeIcon,
    title: 'Backend a la medida',
    short: 'Python y Django',
    headline: 'Sistemas que ordenan tu operación y crecen contigo',
    description:
      'Portales, paneles administrativos y APIs construidos sobre Python y Django: la misma base que usan plataformas que atienden a millones de usuarios. Tu proceso real, digitalizado, sin pagar licencias por usuario.',
    deliverables: [
      'Paneles con roles y permisos para cada área',
      'Integraciones con tus sistemas actuales',
      'Reportes y datos en tiempo real',
    ],
    stack: ['Python', 'Django', 'PostgreSQL', 'APIs REST'],
    waMessage: 'Hola, me interesa un sistema a la medida en Python/Django.',
  },
  {
    id: 'pagos',
    icon: PaymentIcon,
    title: 'Pasarelas de pago',
    short: 'Cobros en línea',
    headline: 'Cobra en línea con seguridad, desde el primer día',
    description:
      'Integramos pagos únicos, suscripciones y cobros recurrentes directamente en tu plataforma, con conciliación automática para que finanzas deje de cuadrar a mano.',
    deliverables: [
      'Checkout integrado a tu sitio o app',
      'Suscripciones y cobros recurrentes',
      'Conciliación y avisos automáticos de pago',
    ],
    stack: ['Webhooks', 'Suscripciones', 'Facturación'],
    waMessage: 'Hola, quiero integrar pagos en línea a mi plataforma.',
  },
  {
    id: 'ia',
    icon: AiIcon,
    title: 'Agentes de IA',
    short: 'ChatGPT / OpenAI',
    headline: 'Agentes que atienden y resuelven con los datos de tu negocio',
    description:
      'Conectamos la API de OpenAI a tu operación: asistentes que responden clientes, clasifican solicitudes y automatizan tareas repetitivas, con costos de uso bajo control.',
    deliverables: [
      'Conectores personalizados con ChatGPT / OpenAI',
      'Automatización de atención y procesos internos',
      'Monitoreo de respuestas y costo por uso',
    ],
    stack: ['OpenAI API', 'Automatización', 'Integraciones'],
    waMessage: 'Hola, me interesa implementar un agente de IA en mi negocio.',
  },
  {
    id: 'devops',
    icon: ServerIcon,
    title: 'DevOps y servidores',
    short: 'Docker y despliegue',
    headline: 'Despliegues sin sustos y servidores que no se saturan',
    description:
      'Contenedores, despliegue automatizado y servidores optimizados para que tu sistema esté disponible cuando tus clientes lo necesitan, pagando solo por los recursos que realmente usas.',
    deliverables: [
      'Despliegue con Docker, repetible y documentado',
      'Monitoreo, alertas y respaldos automáticos',
      'Optimización de recursos y costos de nube',
    ],
    stack: ['Docker', 'CI/CD', 'Linux', 'Monitoreo'],
    waMessage: 'Hola, necesito apoyo con servidores y despliegue (DevOps).',
  },
  {
    id: 'movil',
    icon: MobileIcon,
    title: 'Apps móviles',
    short: 'Google Play',
    headline: 'Tu servicio en el bolsillo de tus clientes',
    description:
      'Apps conectadas a tu sistema, publicadas en Google Play y listas para operar: notificaciones, pagos y datos sincronizados con tu plataforma web.',
    deliverables: [
      'Publicación y gestión en Google Play',
      'Conexión directa con tu backend',
      'Notificaciones y actualizaciones continuas',
    ],
    // TODO: confirmar stack móvil (React Native, Flutter, Kotlin…)
    stack: ['Android', 'Google Play'],
    waMessage: 'Hola, me interesa desarrollar una app móvil.',
  },
  {
    id: 'soporte',
    icon: SupportIcon,
    title: 'Soporte y mantenimiento',
    short: 'Iguala mensual',
    headline: 'Un responsable técnico para tu sistema, cada mes',
    description:
      'Corregimos, actualizamos y mejoramos tu plataforma de forma continua bajo una iguala mensual. Sin tickets perdidos ni proveedores que desaparecen después de la entrega.',
    deliverables: [
      'Atención directa y prioritaria',
      'Actualizaciones de seguridad y dependencias',
      'Horas mensuales para nuevas mejoras',
    ],
    stack: ['Iguala mensual', 'Mantenimiento', 'Mejora continua'],
    waMessage: 'Hola, me interesa una iguala de soporte y mantenimiento.',
    link: { href: '#igualas', label: 'Ver igualas' },
  },
];

export default function Services() {
  const [activeId, setActiveId] = useState(SERVICES[0].id);
  const tabRefs = useRef([]);

  const onKeyDown = (event, index) => {
    const last = SERVICES.length - 1;
    const next = {
      ArrowRight: index === last ? 0 : index + 1,
      ArrowDown: index === last ? 0 : index + 1,
      ArrowLeft: index === 0 ? last : index - 1,
      ArrowUp: index === 0 ? last : index - 1,
      Home: 0,
      End: last,
    }[event.key];
    if (next === undefined) return;
    event.preventDefault();
    setActiveId(SERVICES[next].id);
    tabRefs.current[next]?.focus();
  };

  return (
    <section
      id="servicios"
      className="relative scroll-mt-28 border-t border-white/5 bg-deep py-24 sm:py-32"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Servicios especializados
          </span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            Todo lo que tu operación digital necesita, con un solo equipo
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">
            Elige un servicio para ver qué resolvemos y qué recibes.
          </p>
        </Reveal>

        <div
          role="tablist"
          aria-label="Servicios"
          className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6"
        >
          {SERVICES.map((service, index) => {
            const Icon = service.icon;
            const selected = service.id === activeId;
            return (
              <Reveal key={service.id} delay={index * 60} role="none">
                <button
                  ref={(node) => {
                    tabRefs.current[index] = node;
                  }}
                  type="button"
                  role="tab"
                  id={`tab-${service.id}`}
                  aria-selected={selected}
                  aria-controls={`panel-${service.id}`}
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setActiveId(service.id)}
                  onKeyDown={(event) => onKeyDown(event, index)}
                  className={`group flex h-full w-full flex-col items-start rounded-2xl border p-4 text-left transition-[transform,background-color,border-color] duration-150 active:scale-[0.97] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    selected
                      ? 'border-accent/60 bg-accent/10'
                      : 'border-white/10 bg-white/[0.02] hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.04]'
                  }`}
                >
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-xl border transition-colors duration-200 ${
                      selected
                        ? 'border-accent bg-accent text-white'
                        : 'border-accent/30 bg-accent/10 text-accent'
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="mt-4 text-sm font-bold leading-snug text-white">
                    {service.title}
                  </span>
                  <span className="mt-1 text-xs text-muted">{service.short}</span>
                </button>
              </Reveal>
            );
          })}
        </div>

        {/* All panels share one grid cell, so the container keeps the tallest height and never jumps. */}
        <Reveal className="mt-6 grid">
          {SERVICES.map((service) => {
            const selected = service.id === activeId;
            return (
              <div
                key={service.id}
                role="tabpanel"
                id={`panel-${service.id}`}
                aria-labelledby={`tab-${service.id}`}
                inert={selected ? undefined : ''}
                className={`relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-[opacity,transform,filter,visibility] duration-200 ease-out [grid-area:1/1] sm:p-10 ${
                  selected
                    ? 'visible opacity-100'
                    : 'invisible translate-y-1 opacity-0 blur-[2px]'
                }`}
              >
                <div
                  className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent"
                  aria-hidden
                />
                <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.2fr_1fr] lg:gap-16">
                  <div>
                    <h3 className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                      {service.headline}
                    </h3>
                    <p className="mt-4 text-base leading-relaxed text-muted">
                      {service.description}
                    </p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {service.stack.map((item) => (
                        <li
                          key={item}
                          className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-muted"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-col">
                    <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
                      Qué recibes
                    </span>
                    <ul className="mt-5 space-y-4">
                      {service.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-3 text-sm text-white/90">
                          <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-accent/15 text-accent">
                            <CheckIcon className="h-3.5 w-3.5" />
                          </span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 lg:mt-auto lg:pt-8">
                      <a
                        href={buildWhatsAppUrl(service.waMessage)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full bg-accent px-6 py-3 text-sm font-semibold text-white shadow-glow transition-[transform,background-color] duration-150 ease-out hover:bg-[#ff1a26] active:scale-[0.97]"
                      >
                        Cotizar este servicio
                        <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                      </a>
                      {service.link && (
                        <a
                          href={service.link.href}
                          className="text-sm font-semibold text-muted transition-colors duration-200 hover:text-white"
                        >
                          {service.link.label}
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
