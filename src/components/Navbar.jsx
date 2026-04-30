import { useState, useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

export default function Navbar() {
  const [scrolled,    setScrolled]    = useState(false)
  const [menuOpen,    setMenuOpen]    = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { to: '/',        label: 'Home'     },
    { to: '/menu',    label: 'Menu'     },
    { to: '/about',   label: 'About Us' },
    { to: '/gallery', label: 'Gallery'  },
    { to: '/contact', label: 'Contact'  },
  ]

  return (
    <>
      {/* Mobile overlay */}
      <div
        className={`mobile-overlay${menuOpen ? ' open' : ''}`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Mobile menu */}
      <nav className={`mobile-menu${menuOpen ? ' open' : ''}`} aria-label="Mobile Navigation">
        <button className="close-menu" onClick={() => setMenuOpen(false)} aria-label="Close menu">✕</button>
        {navLinks.map(l => (
          <NavLink key={l.to} to={l.to} onClick={() => setMenuOpen(false)}>{l.label}</NavLink>
        ))}
      </nav>

      {/* Main navbar */}
      <header className={`navbar${scrolled ? ' scrolled' : ''}`} role="banner">
        <NavLink to="/" className="nav-logo">
          <div className="logo-icon">☕</div>
          <div>
            <div className="logo-text">Brewnara</div>
            <div className="logo-tagline">Est. 2008 · Artisan Café</div>
          </div>
        </NavLink>

        <nav className="nav-links" aria-label="Main Navigation">
          {navLinks.map(l => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => isActive ? 'active' : ''}
              end={l.to === '/'}
            >
              {l.label}
            </NavLink>
          ))}
          <NavLink to="/contact" className="nav-cta">Reserve a Table</NavLink>
        </nav>

        <button
          className="nav-hamburger"
          onClick={() => setMenuOpen(true)}
          aria-label="Open menu"
        >
          <span /><span /><span />
        </button>
      </header>
    </>
  )
}
