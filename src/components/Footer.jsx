import logo from '../assets/logo.png';

const EMAIL = 'ay.padilla.doval@gmail.com';
const EMAIL_SUBJECT = 'Cotización de proyecto — AYDEV México';
const EMAIL_BODY =
  'Hola Amaury,\n\nMe interesa cotizar un proyecto con AYDEV México.\n\n— ';

const buildGmailUrl = () =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    EMAIL,
  )}&su=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(
    EMAIL_BODY,
  )}`;

const SOCIAL_LINKS = [
  { label: 'GitHub', href: 'https://github.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Email', href: buildGmailUrl() },
  { label: 'WhatsApp', href: 'https://wa.me/5530662066' },
];

const FOOTER_LINKS = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Filosofía', href: '#filosofia' },
  { label: 'Inicio', href: '#inicio' },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      id="contacto"
      className="relative border-t border-white/5 bg-deep"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <a
              href="#inicio"
              className="inline-flex items-center gap-3 text-lg font-extrabold tracking-tight text-white"
            >
              <img
                src={logo}
                alt="AYDEV México"
                className="h-12 w-12 object-contain drop-shadow-[0_0_24px_rgba(213,0,11,0.4)]"
              />
              <span className="flex flex-col leading-tight">
                <span className="text-base font-black tracking-wide">
                  AY<span className="text-accent">DEV</span>
                </span>
                <span className="text-[10px] font-medium uppercase tracking-[0.25em] text-muted">
                  México
                </span>
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
              AYDEV México — Firma de desarrollo de software empresarial a la
              medida. Construimos páginas Web, CRMs, ERPs y Apps Móviles con foco en
              resultados de negocio.
            </p>
            {/* <p className="mt-3 text-xs text-muted/80">
              Dirigida por{' '}
              <span className="font-semibold text-white">
                Amaury Yael Padilla Doval
              </span>
              .
            </p> */}
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Navegación
            </h4>
            <ul className="mt-5 space-y-3">
              {FOOTER_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-muted transition-colors duration-200 hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-white">
              Hablemos
            </h4>
            <ul className="mt-5 grid grid-cols-2 gap-3">
              {SOCIAL_LINKS.map((link) => {
                const isExternal = link.href.startsWith('http');
                return (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      {...(isExternal
                        ? { target: '_blank', rel: 'noopener noreferrer' }
                        : {})}
                      className="inline-flex w-full items-center justify-between rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-sm text-muted transition-all duration-300 hover:border-secondary hover:text-white"
                    >
                      {link.label}
                      <span aria-hidden className="text-secondary">↗</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/5 pt-8 text-xs text-muted sm:flex-row">
          <p>
            © {year} AYDEV México. Todos los derechos reservados.
          </p>
          <p>
            Diseñado y desarrollado a la medida con{' '}
            <span className="text-accent">●</span> React + Tailwind CSS.
          </p>
        </div>
      </div>
    </footer>
  );
}
