import { pastProjects } from '../projects'

function PastProjects({ lang, t }) {
  return (
    <section className="past-projects" id="proyectos-pasados">
      <span className="section-eyebrow">{t.pastProjectsEyebrow}</span>
      <h2 className="section-title">{t.pastProjectsTitle}</h2>

      <div className="timeline">
        {pastProjects.map((entry) => (
          <div className="timeline-year" key={entry.year}>
            <span className="timeline-year-label">{entry.year}</span>
            <ul className="timeline-list">
              {entry[lang].map((item) => (
                <li className="timeline-item" key={item}>
                  <span className="timeline-check">✓</span>
                  <span className="timeline-item-text">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

export default PastProjects
