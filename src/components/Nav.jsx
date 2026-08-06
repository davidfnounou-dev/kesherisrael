import { useState } from 'react'

function Nav({ t }) {
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { href: '#donar', label: t.navDonate },
    { href: '#nosotros', label: t.navStory },
    { href: '#logros', label: t.navPastProjects },
    { href: '#campana', label: t.navFutureProjects },
  ]

  return (
    <nav className="nav">
      <button
        type="button"
        className={isOpen ? 'nav-toggle nav-toggle-open' : 'nav-toggle'}
        aria-label={t.navToggleLabel}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span />
        <span />
        <span />
      </button>

      {isOpen && (
        <div className="nav-menu">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="nav-menu-link" onClick={() => setIsOpen(false)}>
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  )
}

export default Nav
