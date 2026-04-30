import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCounterAnimation } from '../hooks/useCounter'
import Particles from '../components/Particles'

export default function Home() {
  useScrollReveal()
  useCounterAnimation()

  const [email, setEmail] = useState('')
  const [subscribed, setSubscribed] = useState(false)

  const handleNewsletter = (e) => {
    e.preventDefault()
    setSubscribed(true)
    setEmail('')
    setTimeout(() => setSubscribed(false), 3000)
  }

  return (
    <main>
      {/* ===== HERO ===== */}
      <section className="hero" id="hero">
        <div className="hero-bg"></div>
        <div className="hero-particles"></div>
        <Particles />

        <div className="hero-content">
          <div className="hero-badge reveal stagger-1">
            <span>⭐</span> Rated #1 Local Café 5 Years Running
          </div>

          <h1 className="hero-title">
            <span className="hero-word">Where</span>{' '}
            <span className="hero-word">Every&nbsp;</span>
            <span className="hero-word line-gold">Sip&nbsp;</span>
            <span className="hero-word">Matters</span>
          </h1>

          <p className="hero-subtitle reveal stagger-3">
            Handcrafted brews, artisan pastries, and a community that feels like family.
            Step in, slow down, and savour the moment.
          </p>

          <div className="hero-actions reveal stagger-4">
            <Link to="/menu" className="btn btn-primary">☕ Explore Our Menu</Link>
            <Link to="/about" className="btn btn-outline">Our Story ↗</Link>
          </div>
        </div>

        {/* Coffee Cup SVG */}
        <div className="hero-visual">
          <div className="hero-circle-bg pulse-glow">
            <div className="hero-circle-ring"></div>
            <div className="hero-circle-ring"></div>
            <svg className="hero-cup-svg" viewBox="0 0 200 220" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path className="steam-path-1" d="M70 55 Q60 40 70 25 Q80 10 70 0" stroke="#c47a2b" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0"/>
              <path className="steam-path-2" d="M100 50 Q90 35 100 20 Q110 5 100 -5" stroke="#e8b86d" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0"/>
              <path className="steam-path-3" d="M130 55 Q120 40 130 25 Q140 10 130 0" stroke="#c47a2b" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0"/>
              <ellipse cx="100" cy="190" rx="75" ry="18" fill="#3d2000"/>
              <ellipse cx="100" cy="188" rx="75" ry="18" fill="#2d1500"/>
              <ellipse cx="100" cy="185" rx="65" ry="13" fill="#3d2000"/>
              <path d="M45 100 Q42 160 100 175 Q158 160 155 100 Z" fill="url(#cupGrad)"/>
              <ellipse cx="100" cy="100" rx="55" ry="14" fill="#3d2000"/>
              <ellipse cx="100" cy="100" rx="55" ry="14" fill="url(#rimGrad)"/>
              <ellipse cx="100" cy="100" rx="50" ry="12" fill="#1a0a00"/>
              <ellipse cx="100" cy="100" rx="35" ry="8" fill="#8b4513" opacity="0.6"/>
              <path d="M85 100 Q100 93 115 100 Q100 107 85 100" fill="#d4a96a" opacity="0.5"/>
              <circle cx="100" cy="100" r="4" fill="#d4a96a" opacity="0.4"/>
              <path d="M155 115 Q185 115 185 140 Q185 165 155 165" stroke="#3d2000" strokeWidth="14" fill="none" strokeLinecap="round"/>
              <path d="M155 115 Q183 115 183 140 Q183 163 155 163" stroke="#2d1500" strokeWidth="8" fill="none" strokeLinecap="round"/>
              <ellipse cx="72" cy="130" rx="6" ry="18" fill="white" opacity="0.06" transform="rotate(-20 72 130)"/>
              <defs>
                <linearGradient id="cupGrad" x1="45" y1="100" x2="155" y2="175" gradientUnits="userSpaceOnUse">
                  <stop offset="0%" stopColor="#4a2800"/>
                  <stop offset="100%" stopColor="#1a0a00"/>
                </linearGradient>
                <linearGradient id="rimGrad" x1="45" y1="100" x2="155" y2="100" gradientUnits="userSpaceOnUse">
                  <stop offset="0%"   stopColor="#5a3000"/>
                  <stop offset="50%"  stopColor="#7a4500"/>
                  <stop offset="100%" stopColor="#5a3000"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className="hero-float-tag tag1 reveal stagger-2">☕ Specialty Roasts Daily</div>
          <div className="hero-float-tag tag2 reveal stagger-3">🌿 100% Organic Beans</div>
        </div>

        <div className="hero-scroll">
          <span>Scroll</span>
          <div className="hero-scroll-line scroll-indicator"></div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="stats-strip">
        <div className="stats-grid">
          {[
            { target: 15000, suffix: '+', label: 'Happy Customers' },
            { target: 42,    suffix: '',  label: 'Menu Items'       },
            { target: 16,    suffix: '',  label: 'Years of Craft'   },
            { target: 8,     suffix: '',  label: 'Awards Won'       },
          ].map((s, i) => (
            <div key={s.label} className={`stat-item reveal stagger-${i + 1}`}>
              <div className="stat-number">
                <span data-target={s.target}>0</span>
                <span className="stat-suffix">{s.suffix}</span>
              </div>
              <div className="stat-label">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ===== FEATURED MENU ===== */}
      <section className="section" id="featured-menu">
        <div className="container">
          <div style={{ textAlign: 'center' }} className="reveal">
            <p className="section-label">Our Specialties</p>
            <h2 className="section-title">Crafted With <span>Love & Passion</span></h2>
            <div className="divider divider-center"></div>
            <p className="section-desc" style={{ margin: '0 auto' }}>
              From our signature espresso blends to freshly baked pastries — every item is made with the finest ingredients, locally sourced and lovingly prepared.
            </p>
          </div>

          <div className="featured-grid" style={{ marginTop: '50px' }}>
            {[
              { emoji: '☕', tag: 'Signature Brew',    name: 'Brewnara Special',     desc: 'Our legendary house blend — deep, rich, and velvety smooth with notes of dark chocolate and caramel.',           price: '₹220' },
              { emoji: '🥐', tag: 'Freshly Baked',     name: 'Butter Croissant',     desc: 'Flaky, buttery layers baked every morning. Best paired with our house almond latte for a perfect breakfast.',      price: '₹140' },
              { emoji: '🍫', tag: 'Customer Favourite', name: 'Choco Hazelnut Tart', desc: 'A decadent tart with a hazelnut praline base, silky dark chocolate ganache and a dusting of gold.',               price: '₹180' },
            ].map((item, i) => (
              <div key={item.name} className={`feat-card glass-card reveal stagger-${i + 1}`}>
                <div className="feat-card-img" style={{ height: '220px', fontSize: '80px', borderRadius: '12px 12px 0 0' }}>{item.emoji}</div>
                <div className="feat-card-body">
                  <div className="feat-card-tag">{item.tag}</div>
                  <div className="feat-card-name">{item.name}</div>
                  <div className="feat-card-desc">{item.desc}</div>
                  <div className="feat-card-price">
                    {item.price}{' '}
                    <Link to="/menu" style={{ fontSize: '0.75rem', color: 'var(--amber)', marginLeft: '12px' }}>Full Menu →</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }} className="reveal">
            <Link to="/menu" className="btn btn-outline">View Full Menu ☕</Link>
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="section" id="about-preview" style={{ background: 'var(--dark-roast)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="about-preview">
          <div className="about-img-wrap reveal from-left">
            <div className="about-img-main" style={{ background: 'linear-gradient(135deg,var(--mocha),var(--espresso))' }}>🏡</div>
            <div className="about-img-badge badge-float">
              <div className="badge-year">16</div>
              <div className="badge-text">Years of<br />Craft</div>
            </div>
          </div>
          <div className="reveal from-right">
            <p className="section-label">Our Story</p>
            <h2 className="section-title">More Than Coffee,<br />It's a <span>Community</span></h2>
            <div className="divider"></div>
            <p className="section-desc">
              Brewnara Café was born in 2008 when founder <strong style={{ color: 'var(--gold)' }}>Priya Sharma</strong> transformed her love for single-origin coffee into a neighbourhood gathering place. What started as a tiny 8-table café has grown into the heart of the community.
            </p>
            <div className="about-features">
              {['🌱 Ethically sourced beans', '🫙 In-house roasting', '♻️ Zero-waste kitchen', '🤝 Community-first values'].map((f, i) => (
                <div key={f} className={`about-feat-item reveal stagger-${i + 1}`}>
                  <span>{f.split(' ')[0]}</span> <span>{f.slice(f.indexOf(' ') + 1)}</span>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '32px' }}>
              <Link to="/about" className="btn btn-primary">Read Our Full Story →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== GALLERY PREVIEW ===== */}
      <section className="section" id="gallery-preview">
        <div className="container">
          <div style={{ textAlign: 'center' }} className="reveal">
            <p className="section-label">Our Space</p>
            <h2 className="section-title">A Glimpse of <span>Brewnara</span></h2>
            <div className="divider divider-center"></div>
          </div>
          <div className="gallery-preview-grid">
            {[
              { emoji: '☕', bg: 'linear-gradient(135deg,#3d2000,#1a0a00)', span: true,  h: '412px' },
              { emoji: '🥐', bg: 'linear-gradient(135deg,#2d1500,#3d2000)', span: false, h: '200px' },
              { emoji: '🍃', bg: 'linear-gradient(135deg,#4a2800,#2d1500)', span: false, h: '200px' },
              { emoji: '🫘', bg: 'linear-gradient(135deg,#3d2000,#1a0a00)', span: false, h: '200px' },
              { emoji: '🍰', bg: 'linear-gradient(135deg,#2d1500,#4a2800)', span: false, h: '200px' },
            ].map((item, i) => (
              <div key={i} className={`gp-item${!item.span ? ` pop-in stagger-${i}` : ''}`}>
                <div className="gp-item-inner" style={{ height: item.h, fontSize: item.span ? '6rem' : '4rem', background: item.bg }}>{item.emoji}</div>
                <div className="gp-overlay">🔍</div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }} className="reveal">
            <Link to="/gallery" className="btn btn-outline">View Full Gallery ↗</Link>
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="section testimonials-section" id="testimonials">
        <div className="container">
          <div style={{ textAlign: 'center' }} className="reveal">
            <p className="section-label">Kind Words</p>
            <h2 className="section-title">What Our <span>Regulars</span> Say</h2>
            <div className="divider divider-center"></div>
          </div>
          <div className="testimonials-grid" style={{ marginTop: '50px' }}>
            {[
              { text: '"Brewnara is my second home. The moment I walk in, the aroma just wraps around me. Best cappuccino in the entire city, hands down."', name: 'Rahul Mehta',     role: 'Regular since 2015', initial: 'R' },
              { text: '"I\'ve tried cafés across Mumbai and nothing compares. The ambiance, the staff, the coffee — every single thing is perfect."',          name: 'Ananya Krishnan', role: 'Food Blogger',        initial: 'A' },
              { text: '"My team holds weekly meetings here. The private nook, great Wi-Fi, and endless refills of their filter coffee — productivity guaranteed!"', name: 'Siddharth Nair', role: 'Startup Founder', initial: 'S' },
            ].map((t, i) => (
              <div key={t.name} className={`testimonial-card glass-card reveal stagger-${i + 1}`}>
                <div className="testimonial-stars">★★★★★</div>
                <p className="testimonial-text">{t.text}</p>
                <div className="testimonial-author">
                  <div className="testimonial-avatar">{t.initial}</div>
                  <div>
                    <div className="testimonial-name">{t.name}</div>
                    <div className="testimonial-role">{t.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PAGES OVERVIEW ===== */}
      <section className="section" id="pages-overview" style={{ background: 'var(--dark-roast)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }} className="reveal">
            <p className="section-label">Explore Brewnara</p>
            <h2 className="section-title">Everything You Need to <span>Know</span></h2>
            <div className="divider divider-center"></div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '24px', marginTop: '50px', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto' }}>
            {[
              { to: '/menu',    emoji: '☕', title: 'Our Menu',        desc: 'Explore 40+ handcrafted drinks, pastries, and seasonal specials. Filter by category and find your new favourite.',      cta: 'Browse Menu →' },
              { to: '/about',   emoji: '🏡', title: 'About Us',        desc: 'Learn about our 16-year journey, meet our baristas, and discover the values that make Brewnara special.',              cta: 'Our Story →'   },
              { to: '/gallery', emoji: '🖼️', title: 'Gallery',         desc: 'Wander through our cosy space, see our latte art in action, and get a feel for the Brewnara experience.',            cta: 'View Gallery →'},
              { to: '/contact', emoji: '📍', title: 'Contact & Visit', desc: 'Find us, book a table, or just send us a message. We\'re open 7 days a week, 7am–10pm.',                              cta: 'Get In Touch →'},
            ].map((card) => (
              <Link key={card.to} to={card.to} className="glass-card" style={{ display: 'flex', gap: '20px', padding: '32px', alignItems: 'flex-start', textDecoration: 'none' }}>
                <div style={{ fontSize: '2.2rem', flexShrink: 0 }}>{card.emoji}</div>
                <div>
                  <h3 style={{ fontFamily: 'var(--font-display)', color: 'var(--cream)', fontSize: '1.2rem', marginBottom: '6px' }}>{card.title}</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', lineHeight: '1.6' }}>{card.desc}</p>
                  <span style={{ color: 'var(--amber)', fontSize: '0.8rem', marginTop: '10px', display: 'inline-block' }}>{card.cta}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NEWSLETTER ===== */}
      <section className="cta-strip" id="newsletter">
        <h2>Stay in the <em>Loop</em></h2>
        <p>Get notified about our seasonal specials, events, and exclusive member offers.</p>
        <form className="cta-form" onSubmit={handleNewsletter}>
          <input
            type="email"
            placeholder="your@email.com"
            required
            aria-label="Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button type="submit" style={subscribed ? { background: '#2d6a2d', color: '#fff' } : {}}>
            {subscribed ? '✓ Subscribed!' : 'Subscribe'}
          </button>
        </form>
      </section>
    </main>
  )
}
