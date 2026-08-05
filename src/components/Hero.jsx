import WorldMap from './WorldMap'
import { stats } from '../translations'

function Hero({ lang, t }) {
  const statItems = [
    { value: stats.years, label: t.statYearsLabel },
    { value: stats.projects, label: t.statProjectsLabel },
    { value: stats.countries, label: t.statCountriesLabel },
    { value: stats.raised, label: t.statRaisedLabel },
    { value: stats.helped, label: t.statHelpedLabel },
  ]

  return (
    <section className="hero">
      <div className="hero-intro">
        <span className="hero-eyebrow">{t.heroEyebrow}</span>
        <h1 className="hero-tagline">{t.heroTagline}</h1>
        <p className="hero-subtitle">{t.heroSubtitle}</p>
        <div className="hero-actions">
          <a className="btn btn-primary" href="#donar">
            {t.heroCta}
          </a>
          <a className="btn btn-secondary" href="#nosotros">
            {t.heroCtaSecondary}
          </a>
        </div>
      </div>

      <div className="hero-map-block">
        <h2 className="hero-map-title">{t.mapTitle}</h2>
        <p className="hero-map-subtitle">{t.mapSubtitle}</p>
        <WorldMap lang={lang} />
      </div>

      <div className="hero-stats">
        {statItems.map((item) => (
          <div className="hero-stat" key={item.label}>
            <span className="hero-stat-value">{item.value}</span>
            <span className="hero-stat-label">{item.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Hero
