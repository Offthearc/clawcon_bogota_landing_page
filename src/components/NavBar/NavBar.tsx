import { useEffect } from 'react'
import { useNavMenu } from '../../hooks/useNavMenu'
import './NavBar.css'

interface NavLink {
  label: string
  href: string
}

const NAV_LINKS: NavLink[] = [
  { label: 'Hero', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Schedule', href: '#schedule' },
  { label: 'Guests', href: '#guests' },
  { label: 'Register', href: '#register' },
  { label: 'Contact', href: '#footer' },
]

export function NavBar() {
  const { isOpen, toggle, close, buttonRef } = useNavMenu()

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === 'Escape' && isOpen) {
        close()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, close])

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <a
          href="#hero"
          className="navbar__logo"
          aria-label="ClawCon Bogota — home"
        >
          ClawCon Bogota
        </a>

        <button
          ref={buttonRef}
          className="navbar__hamburger"
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
          aria-controls="navbar-menu"
          onClick={toggle}
        >
          <span className="navbar__hamburger-bar" />
          <span className="navbar__hamburger-bar" />
          <span className="navbar__hamburger-bar" />
        </button>

        <nav id="navbar-menu" className="navbar__nav" aria-label="Main">
          <ul
            className={`navbar__list${isOpen ? ' navbar__list--open' : ''}`}
            role="list"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <li key={href} className="navbar__item">
                <a href={href} className="navbar__link" onClick={close}>
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default NavBar
