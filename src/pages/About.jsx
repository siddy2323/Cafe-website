import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { useCounterAnimation } from '../hooks/useCounter'
import PageHero from '../components/PageHero'

const VALUES = [
  { icon: '🌱', title: 'Ethical Sourcing',  desc: 'We pay above fair-trade prices to every farm we work with. We know the names of the farmers whose beans fill your cup.' },
  { icon: '♻️', title: 'Zero Waste',        desc: 'Our coffee grounds go to local composters, packaging is 100% compostable, and we\'ve eliminated single-use plastic entirely.' },
  { icon: '🤝', title: 'Community First',   desc: '10% of our profits fund local education initiatives. We host weekly community events, open mic nights, and art showcases.' },
  { icon: '🔬', title: 'Craft & Science',   desc: 'Our head barista holds Q-Grader certification. We pull espresso at exactly 9 bars of pressure, 93°C, 25-second extraction.' },
]

const TIMELINE = [
  { year: '2008', title: 'The First Cup',         desc: 'Brewnara opens its doors in Bandra West with 8 tables and a single espresso machine.',                                         side: 'right' },
  { year: '2012', title: 'First Award',            desc: 'Named "Best Independent Café" by Mumbai Food & Drink Awards for the first time.',                                              side: 'left'  },
  { year: '2016', title: 'In-House Roastery',      desc: 'Launched our own micro-roastery, allowing us to control every aspect of your coffee\'s flavour.',                              side: 'right' },
  { year: '2020', title: 'Through the Pandemic',   desc: 'Pivoted to home delivery, launched subscription coffee beans, and supported 200 local families with free meals.',             side: 'left'  },
  { year: '2024', title: '500 Cups a Day',         desc: 'Celebrating 16 years, serving 500+ cups daily, and still as passionate about coffee as day one.',                             side: 'right' },
]

const TEAM = [
  { emoji: '👩‍🍳', name: 'Priya Sharma',  role: 'Founder & Head Roaster', bio: 'Q-Grader certified. Travelled to 12 coffee-producing countries. Dreams in espresso flavour notes.' },
  { emoji: '👨‍🍵', name: 'Arjun Verma',   role: 'Head Barista',            bio: '2× Mumbai Barista Champion. Obsessed with latte art and precise extraction. Your coffee is in good hands.' },
  { emoji: '👩‍🍰', name: 'Kavya Nair',    role: 'Pastry Chef',             bio: 'Trained in Paris. Brings French technique with a distinctly Indian heart. Creator of our beloved hazelnut tart.' },
]

export default function About() {
  useScrollReveal()
  useCounterAnimation()

  return (
    <main>
      <PageHero label="Since 2008" title="Our" titleSpan="Story" description="A journey fuelled by passion, community, and really great coffee." />

      {/* Founder Story */}
      <section className="section">
        <div className="about-preview" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="about-img-wrap reveal from-left">
            <div className="about-img-main" style={{ background: 'linear-gradient(135deg,var(--mocha),var(--espresso))' }}>👩‍🍳</div>
            <div className="about-img-badge badge-float">
              <div className="badge-year">16</div>
              <div className="badge-text">Years of<br />Craft</div>
            </div>
          </div>
          <div className="reveal from-right">
            <p className="section-label">The Founder</p>
            <h2 className="section-title">Priya Sharma's <span>Dream</span></h2>
            <div className="divider"></div>
            <p className="section-desc">In 2008, Priya Sharma quit her corporate job in finance with one dream: to create a space where people could slow down, connect, and experience coffee the way it deserves to be experienced.</p>
            <p className="section-desc" style={{ marginTop: '12px' }}>She travelled to Coorg, Chikmagalur, and Araku Valley — learning directly from farmers. She trained under master baristas in Milan and Tokyo before returning to Mumbai to open the first Brewnara with just ₹8 lakh in savings and infinite determination.</p>
            <p className="section-desc" style={{ marginTop: '12px' }}>Today, Brewnara serves over 500 cups a day and has been voted Mumbai's best local café five years in a row.</p>
            <div style={{ marginTop: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
              <Link to="/menu" className="btn btn-primary">Explore Our Menu</Link>
              <Link to="/contact" className="btn btn-outline">Visit Us</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section" style={{ background: 'var(--dark-roast)', borderTop: '1px solid var(--glass-border)', borderBottom: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }} className="reveal">
            <p className="section-label">What We Stand For</p>
            <h2 className="section-title">Our <span>Core Values</span></h2>
            <div className="divider divider-center"></div>
          </div>
          <div className="values-grid">
            {VALUES.map((v, i) => (
              <div key={v.title} className={`value-card glass-card reveal stagger-${i + 1}`}>
                <div className="value-icon">{v.icon}</div>
                <div>
                  <h3>{v.title}</h3>
                  <p className="section-desc" style={{ marginTop: '6px' }}>{v.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center' }} className="reveal">
            <p className="section-label">Our Journey</p>
            <h2 className="section-title">16 Years of <span>Milestones</span></h2>
            <div className="divider divider-center"></div>
          </div>
          <div className="timeline">
            {TIMELINE.map((item) => (
              <div key={item.year} className="timeline-item">
                {item.side === 'right' ? (
                  <>
                    <div className={`timeline-content reveal from-right`}>
                      <div className="timeline-year">{item.year}</div>
                      <div className="timeline-title">{item.title}</div>
                      <div className="timeline-desc">{item.desc}</div>
                    </div>
                    <div className="timeline-dot"></div>
                    <div className="timeline-empty"></div>
                  </>
                ) : (
                  <>
                    <div className="timeline-empty"></div>
                    <div className="timeline-dot"></div>
                    <div className={`timeline-content reveal from-left`}>
                      <div className="timeline-year">{item.year}</div>
                      <div className="timeline-title">{item.title}</div>
                      <div className="timeline-desc">{item.desc}</div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section" style={{ background: 'var(--dark-roast)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container">
          <div style={{ textAlign: 'center' }} className="reveal">
            <p className="section-label">The People Behind Your Cup</p>
            <h2 className="section-title">Meet the <span>Team</span></h2>
            <div className="divider divider-center"></div>
          </div>
          <div className="team-grid" style={{ marginTop: '50px' }}>
            {TEAM.map((member, i) => (
              <div key={member.name} className={`team-card glass-card reveal stagger-${i + 1}`}>
                <div className="team-avatar">{member.emoji}</div>
                <div className="team-name">{member.name}</div>
                <div className="team-role">{member.role}</div>
                <div className="team-bio">{member.bio}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats-strip" style={{ background: 'var(--mocha)' }}>
        <div className="stats-grid" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {[
            { target: 15000, suffix: '+', label: 'Happy Customers' },
            { target: 500,   suffix: '',  label: 'Cups Per Day'    },
            { target: 8,     suffix: '',  label: 'Awards Won'      },
            { target: 6,     suffix: '',  label: 'Farm Partners'   },
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
    </main>
  )
}
