import { useEffect, useState } from 'react';
import logo from '../assets/logo_sn_brg.png';

const NAV_LINKS = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#filosofia', label: 'Filosofía' },
  { href: '#contacto', label: 'Contacto' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
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
            alt="AYDEV México"
            className="h-24 w-24 object-contain drop-shadow-[0_0_18px_rgba(213,0,11,0.45)] transition-transform duration-300 group-hover:scale-105"
          />
          <span className="hidden flex-col leading-tight sm:flex">
            <span className="text-base font-black tracking-wide">
              AY<span className="text-accent">DEV</span>
            </span>
            <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted">
              México
            </span>
          </span>
        </a>

        <ul className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative text-sm font-medium text-muted transition-colors duration-200 hover:text-white"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:block">
          <a
            href="https://wa.me/5530662066"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2 text-sm font-semibold text-white transition-all duration-300 hover:border-accent hover:bg-accent hover:shadow-glow"
          >
            Cotiza tu Proyecto
          </a>
        </div>

        <button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-white md:hidden"
        >
          <span className="sr-only">Menú</span>
          <div className="flex flex-col gap-1.5">
            <span
              className={`h-0.5 w-5 bg-white transition-transform duration-300 ${
                open ? 'translate-y-2 rotate-45' : ''
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-opacity duration-300 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`h-0.5 w-5 bg-white transition-transform duration-300 ${
                open ? '-translate-y-2 -rotate-45' : ''
              }`}
            />
          </div>
        </button>
      </nav>

      <div
        className={`overflow-hidden border-t border-white/5 bg-deep/95 backdrop-blur-xl transition-[max-height] duration-300 md:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="space-y-2 px-6 py-4">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-muted hover:bg-white/5 hover:text-white"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="https://wa.me/5530662066"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 block rounded-full bg-accent px-4 py-2.5 text-center text-sm font-semibold text-white shadow-glow"
            >
              Cotiza tu Proyecto
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}
