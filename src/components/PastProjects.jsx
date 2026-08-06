import { useState } from 'react'
import { pastProjects } from '../projects'
import { gallery } from '../gallery'

function PastProjects({ lang, t }) {
  const [lightbox, setLightbox] = useState(null)

  return (
    <section className="past-projects" id="logros">
      <span className="section-eyebrow">{t.pastProjectsEyebrow}</span>
      <h2 className="section-title">{t.pastProjectsTitle}</h2>

      <div className="gallery-grid">
        {gallery.map((photo) => (
          <button
            type="button"
            key={photo.file}
            className="gallery-item"
            onClick={() => setLightbox(photo)}
          >
            <img src={`/gallery/${photo.file}`} alt={photo[lang]} loading="lazy" />
            <span className="gallery-caption">{photo[lang]}</span>
          </button>
        ))}
      </div>

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

      {lightbox && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <img src={`/gallery/${lightbox.file}`} alt={lightbox[lang]} />
          <span className="lightbox-caption">{lightbox[lang]}</span>
        </div>
      )}
    </section>
  )
}

export default PastProjects
