import { useEffect, useRef, useState } from 'react';
import {
  ChatIcon,
  CopyIcon,
  CheckIcon,
  PlusIcon,
  MailIcon,
  ArrowRightIcon,
} from './icons/ServiceIcons.jsx';
import Reveal from './Reveal.jsx';
import { EMAIL, buildGmailUrl, buildWhatsAppUrl } from '../lib/contact.js';

const NEEDS = [
  'Sistema a la medida',
  'Pagos en línea',
  'Agente de IA',
  'Servidores / DevOps',
  'App móvil',
  'Soporte mensual',
];

const SEGMENTS = [
  { id: 'pyme', label: 'PyME o startup', sentence: 'Somos una PyME / startup.' },
  { id: 'corp', label: 'Agencia o corporativo', sentence: 'Somos una agencia / corporativo.' },
];

const buildMessage = (needs, segment) => {
  const lines = ['Hola, vengo de aydevops.mx.'];
  lines.push(
    needs.length
      ? `Me interesa: ${needs.join(', ')}.`
      : 'Me gustaría platicar sobre un proyecto.',
  );
  if (segment) lines.push(segment.sentence);
  lines.push('¿Podemos agendar una llamada?');
  return lines.join('\n');
};

// A flag that turns itself off after `ms` — drives the click confirmations.
function useTimedFlag(ms) {
  const [on, setOn] = useState(false);
  const timer = useRef();

  useEffect(() => () => clearTimeout(timer.current), []);

  const trigger = () => {
    clearTimeout(timer.current);
    setOn(true);
    timer.current = setTimeout(() => setOn(false), ms);
  };

  return [on, trigger];
}

// Two labels stacked in one grid cell: the button keeps its width while they crossfade.
function SwapLabel({ active, idle, done }) {
  const base =
    'inline-flex items-center justify-center gap-2 transition-[opacity,filter] duration-200 ease-out [grid-area:1/1]';
  return (
    <span className="grid">
      <span aria-hidden={active} className={`${base} ${active ? 'opacity-0 blur-[2px]' : 'opacity-100'}`}>
        {idle}
      </span>
      <span aria-hidden={!active} className={`${base} ${active ? 'opacity-100' : 'opacity-0 blur-[2px]'}`}>
        {done}
      </span>
    </span>
  );
}

export default function Contact() {
  const [needs, setNeeds] = useState([]);
  const [segmentId, setSegmentId] = useState(null);
  const [sent, flashSent] = useTimedFlag(2500);
  const [copied, flashCopied] = useTimedFlag(2000);

  const segment = SEGMENTS.find((item) => item.id === segmentId);
  const message = buildMessage(needs, segment);

  const toggleNeed = (need) =>
    setNeeds((current) =>
      current.includes(need)
        ? current.filter((item) => item !== need)
        : NEEDS.filter((item) => item === need || current.includes(item)),
    );

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      flashCopied();
    } catch {
      window.open(buildGmailUrl(), '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section
      id="contacto"
      className="relative scroll-mt-28 overflow-hidden border-t border-white/5 bg-deep py-24 sm:py-32"
    >
      <div
        className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-[420px] w-[720px] -translate-x-1/2 translate-y-1/2 rounded-full bg-accent/20 blur-[140px]"
        aria-hidden
      />

      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:px-10">
        <Reveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Contacto directo
          </span>
          <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl md:text-5xl">
            Hablemos de tu proyecto,{' '}
            <span className="text-gradient-name">directo con quien lo construye</span>.
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">
            Sin intermediarios ni call centers. Cuéntanos qué necesitas y te
            respondemos personalmente con una propuesta clara para tu
            negocio.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/[0.03] px-5 py-3 text-sm font-semibold text-white transition-[transform,background-color,border-color] duration-150 ease-out hover:border-white/30 hover:bg-white/[0.06] active:scale-[0.97]"
            >
              <SwapLabel
                active={copied}
                idle={
                  <>
                    <CopyIcon className="h-4 w-4" />
                    Copiar correo
                  </>
                }
                done={
                  <>
                    <CheckIcon className="h-4 w-4 text-accent" />
                    Correo copiado
                  </>
                }
              />
            </button>
            <a
              href={buildGmailUrl()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold text-muted transition-[transform,color] duration-150 ease-out hover:text-white active:scale-[0.97]"
            >
              <MailIcon className="h-4 w-4" />
              Escribir por Gmail
            </a>
          </div>
          <span className="sr-only" aria-live="polite">
            {copied ? 'Correo copiado al portapapeles' : ''}
          </span>
        </Reveal>

        <Reveal delay={100}>
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 shadow-[0_20px_80px_-20px_rgba(0,0,0,0.7)] sm:p-8">
            <h3 className="text-lg font-bold text-white">Arma tu mensaje en 10 segundos</h3>

            <fieldset className="mt-6">
              <legend className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                ¿Qué necesitas?
              </legend>
              <div className="mt-3 flex flex-wrap gap-2">
                {NEEDS.map((need) => {
                  const selected = needs.includes(need);
                  return (
                    <label
                      key={need}
                      className={`inline-flex cursor-pointer select-none items-center gap-2 rounded-full border px-3.5 py-2 text-sm font-medium transition-[transform,background-color,border-color,color] duration-150 active:scale-[0.97] has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-accent ${
                        selected
                          ? 'border-accent/70 bg-accent/15 text-white'
                          : 'border-white/10 bg-white/[0.02] text-muted hover:border-white/25 hover:text-white'
                      }`}
                    >
                      <input
                        type="checkbox"
                        className="sr-only"
                        checked={selected}
                        onChange={() => toggleNeed(need)}
                      />
                      <span className="grid h-4 w-4 place-items-center" aria-hidden>
                        <PlusIcon
                          className={`h-4 w-4 transition-[opacity,transform] duration-150 ease-out [grid-area:1/1] ${
                            selected ? 'scale-90 opacity-0' : 'opacity-100'
                          }`}
                        />
                        <CheckIcon
                          className={`h-4 w-4 text-accent transition-[opacity,transform] duration-150 ease-out [grid-area:1/1] ${
                            selected ? 'opacity-100' : 'scale-90 opacity-0'
                          }`}
                        />
                      </span>
                      {need}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <fieldset className="mt-6">
              <legend className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Tu empresa
              </legend>
              <div className="mt-3 grid grid-cols-2 gap-1 rounded-2xl border border-white/10 bg-white/[0.02] p-1">
                {SEGMENTS.map((item) => {
                  const selected = item.id === segmentId;
                  return (
                    <label
                      key={item.id}
                      className={`flex cursor-pointer select-none items-center justify-center rounded-xl px-3 py-2 text-center text-sm font-medium transition-[background-color,color] duration-150 has-[:focus-visible]:outline has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-accent ${
                        selected ? 'bg-accent text-white' : 'text-muted hover:text-white'
                      }`}
                    >
                      <input
                        type="radio"
                        name="segment"
                        className="sr-only"
                        checked={selected}
                        onChange={() => setSegmentId(item.id)}
                      />
                      {item.label}
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <div className="mt-6">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-muted">
                Así se enviará tu mensaje
              </span>
              {/* Functional content: it updates instantly, no motion. */}
              <p className="mt-3 whitespace-pre-line rounded-2xl rounded-tl-sm border border-white/10 bg-white/[0.04] p-4 text-sm leading-relaxed text-white/90">
                {message}
              </p>
            </div>

            <a
              href={buildWhatsAppUrl(message)}
              target="_blank"
              rel="noopener noreferrer"
              onClick={flashSent}
              className="group mt-6 flex w-full items-center justify-center rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white shadow-glow transition-[transform,background-color] duration-150 ease-out hover:bg-[#ff1a26] active:scale-[0.97]"
            >
              <SwapLabel
                active={sent}
                idle={
                  <>
                    <ChatIcon className="h-4 w-4" />
                    Enviar por WhatsApp
                    <ArrowRightIcon className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </>
                }
                done={
                  <>
                    <CheckIcon className="h-4 w-4" />
                    Abriendo WhatsApp…
                  </>
                }
              />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
