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
