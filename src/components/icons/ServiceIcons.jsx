const baseProps = {
  xmlns: 'http://www.w3.org/2000/svg',
  fill: 'none',
  viewBox: '0 0 24 24',
  strokeWidth: 1.5,
  stroke: 'currentColor',
  'aria-hidden': true,
};

export function WebIcon({ className = 'h-8 w-8' }) {
  return (
    <svg {...baseProps} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75A2.25 2.25 0 0 1 6 4.5h12a2.25 2.25 0 0 1 2.25 2.25v10.5A2.25 2.25 0 0 1 18 19.5H6a2.25 2.25 0 0 1-2.25-2.25V6.75Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.008v.008H6.75V6.75Zm2.25 0h.008v.008H9V6.75Zm2.25 0h.008v.008h-.008V6.75Z" />
    </svg>
  );
}

export function CrmIcon({ className = 'h-8 w-8' }) {
  return (
    <svg {...baseProps} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 20.25a7.5 7.5 0 0 1 15 0" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 9.75v4.5m2.25-2.25h-4.5" />
    </svg>
  );
}

export function ErpIcon({ className = 'h-8 w-8' }) {
  return (
    <svg {...baseProps} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21V8.25l8.25-4.5 8.25 4.5V21" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 21v-6h6v6" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 21h16.5" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 11.25h.008v.008H9v-.008Zm3 0h.008v.008H12v-.008Zm3 0h.008v.008H15v-.008Z" />
    </svg>
  );
}

export function MobileIcon({ className = 'h-8 w-8' }) {
  return (
    <svg {...baseProps} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5h3a3 3 0 0 1 3 3v15a3 3 0 0 1-3 3h-3a3 3 0 0 1-3-3v-15a3 3 0 0 1 3-3Z" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 18.75h1.5" />
    </svg>
  );
}

export function CheckIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...baseProps} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

export function ArrowRightIcon({ className = 'h-5 w-5' }) {
  return (
    <svg {...baseProps} className={className}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
    </svg>
  );
}
