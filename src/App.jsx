import { useState } from 'react'
import './App.css'
import { translations } from './translations'
import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import PastProjects from './components/PastProjects'
import Campaign from './components/Campaign'
import Donate from './components/Donate'

function App() {
  const [lang, setLang] = useState('es')
  const t = translations[lang]

  return (
    <div className="app">
      <div className="top-bar">
        <Nav t={t} />
        <div className="lang-switcher">
          <button
            className={lang === 'en' ? 'lang-btn active' : 'lang-btn'}
            onClick={() => setLang('en')}
          >
            English
          </button>
          <span className="lang-divider">/</span>
          <button
            className={lang === 'es' ? 'lang-btn active' : 'lang-btn'}
            onClick={() => setLang('es')}
          >
            Español
          </button>
        </div>
      </div>
      <Hero lang={lang} t={t} />
      <About t={t} />
      <PastProjects lang={lang} t={t} />
      <Campaign t={t} />
      <Donate lang={lang} t={t} />
    </div>
  )
}

export default App
