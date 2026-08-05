// Central place for all site text in English and Spanish.
// Add new keys here whenever new content is added to the site,
// with both an "en" and an "es" version.
export const translations = {
  en: {
    title: 'Kesher Israel',
    welcome: 'Welcome to your new site.',

    // Hero
    heroEyebrow: 'Founded in 2023',
    heroTagline: 'From words to action.',
    heroSubtitle:
      'Kesher Israel was born after October 7th, 2023, when we decided that watching and posting was not enough. Since then we have raised and delivered aid from across Latin America and the U.S. directly to soldiers, wounded veterans, and families in Israel.',
    heroCta: 'Donate now',
    heroCtaSecondary: 'See our story',

    // Map
    mapTitle: 'Connecting communities to Israel',
    mapSubtitle: 'Donations gathered across Latin America and the U.S., delivered directly to Israel.',
    mapDestinationLabel: 'Every donation reaches Israel',

    // Stats
    statYearsLabel: 'Years of work',
    statProjectsLabel: 'Projects completed',
    statCountriesLabel: 'Donor countries',
    statRaisedLabel: 'Raised & delivered',
    statHelpedLabel: 'People helped',

    // Campaign / countdown
    campaignEyebrow: '3rd anniversary special',
    campaignTitle: 'A Sefer Torah for a religious army base',
    campaignDescription:
      "To mark three years of Kesher Israel, we're raising funds to donate a Sefer Torah to a religious army base, and we'll invite the soldiers there to celebrate with us.",
    countdownBeforeTitle: 'The campaign opens in',
    countdownActiveTitle: 'Time left to donate',
    countdownClosedTitle: 'This campaign is now closed',
    countdownBeforeNote: "Come back when the countdown ends — that's when donations open.",
    countdownClosedNote: 'Thank you to everyone who donated. Follow us for the next project.',
    countdownDays: 'Days',
    countdownHours: 'Hours',
    countdownMinutes: 'Min',
    countdownSeconds: 'Sec',

    // Donate section
    donateTitle: 'How to donate',
    donateSubtitle: 'Every donation goes directly to soldiers, wounded veterans, and families in Israel.',
    donateYappyLabel: 'Yappy (Panama)',
    donateYappyInstructions: 'Send your donation to this number via the Yappy app.',
    donateYappyQrPending: 'QR code coming soon — for now, send to the number above.',
    donateAchLabel: 'Bank transfer (ACH)',
    donateAchBankField: 'Bank',
    donateAchTypeField: 'Account type',
    donateAchNumberField: 'Account number',
    donateAchHolderField: 'Account holder',
    donateAchType: 'Savings account',
    donateProofTitle: 'Already donated?',
    donateProofText: 'Send us your proof of payment so we can confirm it and send you a thank-you receipt.',
    donateProofButton: 'Send proof via WhatsApp',
  },
  es: {
    title: 'Kesher Israel',
    welcome: 'Bienvenido a tu nuevo sitio.',

    // Hero
    heroEyebrow: 'Fundada en 2023',
    heroTagline: 'De las palabras a la acción.',
    heroSubtitle:
      'Kesher Israel nació después del 7 de octubre de 2023, cuando decidimos que opinar en redes no era suficiente. Desde entonces hemos recolectado y entregado ayuda desde Latinoamérica y Estados Unidos directamente a soldados, heridos y familias en Israel.',
    heroCta: 'Donar ahora',
    heroCtaSecondary: 'Conoce nuestra historia',

    // Map
    mapTitle: 'Conectando comunidades con Israel',
    mapSubtitle: 'Donaciones recolectadas en Latinoamérica y Estados Unidos, entregadas directamente en Israel.',
    mapDestinationLabel: 'Cada donación llega a Israel',

    // Stats
    statYearsLabel: 'Años de trabajo',
    statProjectsLabel: 'Proyectos realizados',
    statCountriesLabel: 'Países donantes',
    statRaisedLabel: 'Recaudado y entregado',
    statHelpedLabel: 'Personas ayudadas',

    // Campaign / countdown
    campaignEyebrow: 'Especial 3er aniversario',
    campaignTitle: 'Un Sefer Torá para una base militar religiosa',
    campaignDescription:
      'Para celebrar tres años de Kesher Israel, estamos recolectando fondos para donar un Sefer Torá a una base militar religiosa, e invitaremos a los soldados a celebrarlo con nosotros.',
    countdownBeforeTitle: 'La recolecta abre en',
    countdownActiveTitle: 'Tiempo restante para donar',
    countdownClosedTitle: 'Esta recolecta ya cerró',
    countdownBeforeNote: 'Vuelve cuando termine la cuenta regresiva — ahí abren las donaciones.',
    countdownClosedNote: 'Gracias a todos los que donaron. Síguenos para el próximo proyecto.',
    countdownDays: 'Días',
    countdownHours: 'Horas',
    countdownMinutes: 'Min',
    countdownSeconds: 'Seg',

    // Donate section
    donateTitle: 'Cómo donar',
    donateSubtitle: 'Cada donación llega directo a soldados, heridos y familias en Israel.',
    donateYappyLabel: 'Yappy (Panamá)',
    donateYappyInstructions: 'Envía tu donación a este número desde la app de Yappy.',
    donateYappyQrPending: 'Código QR próximamente — por ahora, envía al número de arriba.',
    donateAchLabel: 'Transferencia bancaria (ACH)',
    donateAchBankField: 'Banco',
    donateAchTypeField: 'Tipo de cuenta',
    donateAchNumberField: 'Número de cuenta',
    donateAchHolderField: 'Titular',
    donateAchType: 'Cuenta de ahorros',
    donateProofTitle: '¿Ya donaste?',
    donateProofText: 'Envíanos tu comprobante de pago para confirmarlo y mandarte un agradecimiento.',
    donateProofButton: 'Enviar comprobante por WhatsApp',
  },
}

// Donor countries shown on the world map, with approximate coordinates
// [longitude, latitude] for placing markers.
export const donorCountries = [
  { code: 'PA', name: { en: 'Panama', es: 'Panamá' }, coords: [-79.52, 8.99], flag: '🇵🇦' },
  { code: 'BR', name: { en: 'Brazil', es: 'Brasil' }, coords: [-46.63, -23.55], flag: '🇧🇷' },
  { code: 'AR', name: { en: 'Argentina', es: 'Argentina' }, coords: [-58.38, -34.6], flag: '🇦🇷' },
  { code: 'MX', name: { en: 'Mexico', es: 'México' }, coords: [-99.13, 19.43], flag: '🇲🇽' },
  { code: 'VE', name: { en: 'Venezuela', es: 'Venezuela' }, coords: [-66.9, 10.48], flag: '🇻🇪' },
  { code: 'US', name: { en: 'United States', es: 'Estados Unidos' }, coords: [-80.19, 25.76], flag: '🇺🇸' },
]

export const destinationCountry = {
  code: 'IL',
  name: { en: 'Israel', es: 'Israel' },
  coords: [35.21, 31.77],
  flag: '🇮🇱',
}

export const stats = {
  years: '3+',
  projects: '15+',
  countries: `${donorCountries.length}+`,
  raised: '$150,000+',
  helped: '10,000+',
}
