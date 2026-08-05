import { useState } from 'react'
import './App.css'
import { translations } from './translations'
import Hero from './components/Hero'

function App() {
  const [lang, setLang] = useState('es')
  const t = translations[lang]

  return (
    <div className="app">
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
      <Hero lang={lang} t={t} />
    </div>
  )
}

export default App
