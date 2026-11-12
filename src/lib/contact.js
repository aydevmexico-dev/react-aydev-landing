export const WHATSAPP_NUMBER = '5569633669';

export const EMAIL = 'aydevmexico@gmail.com';
const EMAIL_SUBJECT = 'Cotización de proyecto — aydevops.mx';
const EMAIL_BODY =
  'Hola Amaury,\n\nMe interesa cotizar un proyecto con aydevops.mx.\n\n— ';

export const buildWhatsAppUrl = (text) =>
  `https://wa.me/${WHATSAPP_NUMBER}${
    text ? `?text=${encodeURIComponent(text)}` : ''
  }`;

export const buildGmailUrl = () =>
  `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(
    EMAIL,
  )}&su=${encodeURIComponent(EMAIL_SUBJECT)}&body=${encodeURIComponent(
    EMAIL_BODY,
  )}`;
