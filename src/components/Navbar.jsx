import { useEffect, useState } from 'react';
import logo from '../assets/logo_sn_brg.png';
import { buildWhatsAppUrl } from '../lib/contact.js';

const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#igualas', label: 'Igualas' },
  { href: '#resultados', label: 'Resultados' },
  { href: '#contacto', label: 'Contacto' },
];

const WHATSAPP_URL = buildWhatsAppUrl('Hola, me interesa platicar sobre un proyecto con aydevops.mx.');

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!open) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-200 ${
        scrolled || open
          ? 'border-b border-white/5 bg-deep/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a
          href="#inicio"
          className="group flex items-center gap-3 text-lg font-extrabold tracking-tight text-white"
        >
          <img
            src={logo}
            alt="aydevops.mx"
            className="h-24 w-24 object-contain drop-shadow-[0_0_18px_rgba(213,0,11,0.45)] transition-transform duration-200 group-hover:scale-105"
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-base font-black tracking-wide">
              AYDEV<span className="text-accent">OPS</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted">
              .mx
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="group relative text-sm font-medium text-muted transition-colors duration-200 hover:text-white"
              >
                {link.label}
                <span
                  className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-accent transition-transform duration-200 ease-out group-hover:scale-x-100"
                  aria-hidden
                />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition-[transform,background-color,border-color] duration-150 ease-out hover:border-accent hover:bg-accent active:scale-[0.97]"
          >
            Hablemos
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white transition-transform duration-150 ease-out active:scale-[0.97] md:hidden"
        >
          <div className="flex flex-col gap-1.5" aria-hidden>
            <span
              className={`h-0.5 w-5 bg-white transition-transform duration-200 ease-out ${
                open ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-opacity duration-200 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-transform duration-200 ease-out ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      {/* Absolutely positioned so opening it never pushes layout; leaves the way it came in. */}
      <div
        id="mobile-menu"
        inert={open ? undefined : ''}
        className={`absolute inset-x-0 top-full border-y border-white/5 bg-deep shadow-[0_24px_48px_-12px_rgba(0,0,0,0.8)] transition-[opacity,transform,visibility] duration-200 ease-out md:hidden ${
          open ? 'visible translate-y-0 opacity-100' : 'invisible -translate-y-2 opacity-0'
        }`}
      >
        <ul className="space-y-2 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-muted transition-colors duration-150 hover:bg-white/5 hover:text-white active:bg-white/5"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-accent px-4 py-2.5 text-center text-sm font-semibold text-white shadow-glow transition-transform duration-150 ease-out active:scale-[0.97]"
            >
              Hablemos por WhatsApp
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
