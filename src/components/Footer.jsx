import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-grid">
        <div className="footer-brand">
          <span className="logo-text">Brewnara</span>
          <p>More than a café — a community. We've been serving handcrafted coffee and heartfelt hospitality since 2008. Come as a stranger, leave as family.</p>
          <div className="footer-social">
            <a href="#" aria-label="Instagram">📷</a>
            <a href="#" aria-label="Facebook">👥</a>
            <a href="#" aria-label="Twitter">🐦</a>
            <a href="#" aria-label="YouTube">▶️</a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/menu">Menu</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Hours</h4>
          <ul>
            <li>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Mon – Fri</span>
              <br /><span style={{ fontSize: '0.85rem' }}>7:00 AM – 10:00 PM</span>
            </li>
            <li style={{ marginTop: '8px' }}>
              <span style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>Sat – Sun</span>
              <br /><span style={{ fontSize: '0.85rem' }}>8:00 AM – 11:00 PM</span>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Visit Us</h4>
          <ul>
            <li><Link to="/contact">📍 12, Café Lane, Bandra West, Mumbai – 400050</Link></li>
            <li><a href="tel:+912212345678">📞 +91 22 1234 5678</a></li>
            <li><a href="mailto:hello@brewnara.in">✉️ hello@brewnara.in</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <span>© 2024 Brewnara Café. Made with ☕ and love.</span>
        <span>Privacy Policy · Terms of Service</span>
      </div>
    </footer>
  )
}
