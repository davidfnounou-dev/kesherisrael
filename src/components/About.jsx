function About({ t }) {
  return (
    <section className="about" id="nosotros">
      <span className="section-eyebrow">{t.aboutEyebrow}</span>
      <h2 className="section-title">{t.aboutTitle}</h2>
      <p className="about-text">{t.aboutText}</p>
    </section>
  )
}

export default About
