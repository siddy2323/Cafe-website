import React, { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import PageHero from '../components/PageHero'

export default function Contact() {
  useScrollReveal()

  const [form, setForm] = useState({
    name: '', phone: '', email: '', subject: '', date: '', guests: '', message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.id.replace('contact', '').toLowerCase()]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitting(true)
    setTimeout(() => {
      setSubmitting(false)
      setSubmitted(true)
    }, 1200)
  }

  const HOURS = [
    ['Monday',    '7:00 AM – 10:00 PM'],
    ['Tuesday',   '7:00 AM – 10:00 PM'],
    ['Wednesday', '7:00 AM – 10:00 PM'],
    ['Thursday',  '7:00 AM – 10:00 PM'],
    ['Friday',    '7:00 AM – 11:00 PM'],
    ['Saturday',  '8:00 AM – 11:00 PM'],
    ['Sunday',    '8:00 AM – 10:00 PM'],
  ]

  return (
    <main>
      <PageHero
        label="Come Say Hello"
        title="Find"
        titleSpan="Brewnara"
        description="We'd love to see you. Book a table, ask a question, or just walk in — you're always welcome."
      />

      <section className="section">
        <div className="contact-grid">

          {/* Info Panel */}
          <div className="reveal from-left">
            <p className="section-label">Get In Touch</p>
            <h2 className="section-title">We're <span>Always Here</span></h2>
            <div className="divider"></div>

            {[
              { icon: '📍', label: 'Location', value: <>12, Café Lane, Bandra West,<br />Mumbai – 400050, Maharashtra</> },
              { icon: '📞', label: 'Phone',    value: <><a href="tel:+912212345678" style={{ color: 'var(--cream)' }}>+91 22 1234 5678</a><br /><a href="tel:+919876543210" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>+91 98765 43210 (WhatsApp)</a></> },
              { icon: '✉️', label: 'Email',    value: <><a href="mailto:hello@brewnara.in" style={{ color: 'var(--cream)' }}>hello@brewnara.in</a><br /><a href="mailto:events@brewnara.in" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>events@brewnara.in</a></> },
            ].map(info => (
              <div key={info.label} className="contact-info-item">
                <div className="contact-info-icon">{info.icon}</div>
                <div>
                  <div className="contact-info-label">{info.label}</div>
                  <div className="contact-info-value">{info.value}</div>
                </div>
              </div>
            ))}

            {/* Hours */}
            <div className="contact-info-item">
              <div className="contact-info-icon">🕐</div>
              <div>
                <div className="contact-info-label">Opening Hours</div>
                <div className="hours-grid">
                  {HOURS.map(([day, time]) => (
                    <React.Fragment key={day}>
                      <span className="hours-day">{day}</span>
                      <span className="hours-time">{time}</span>
                    </React.Fragment>
                  ))}
                </div>
              </div>
            </div>

            {/* Map placeholder */}
            <div className="map-embed">
              <div className="map-inner" style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '3rem' }}>🗺️</div>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: 'var(--text-muted)', marginTop: '12px', display: 'block' }}>
                  12, Café Lane, Bandra West, Mumbai
                </span>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="reveal from-right">
            <div className="contact-form glass-card">
              <p className="section-label">Send Us a Message</p>
              <h2 className="section-title" style={{ fontSize: '1.8rem' }}>Book a <span>Table</span> or Ask Away</h2>
              <div className="divider"></div>

              {!submitted ? (
                <form onSubmit={handleSubmit} style={{ marginTop: '24px' }}>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contactName">Full Name</label>
                      <input id="contactName" type="text" placeholder="Your name" required onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contactPhone">Phone Number</label>
                      <input id="contactPhone" type="tel" placeholder="+91 98765 43210" onChange={handleChange} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactEmail">Email Address</label>
                    <input id="contactEmail" type="email" placeholder="your@email.com" required onChange={handleChange} />
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactSubject">Reason for Contact</label>
                    <select id="contactSubject" onChange={handleChange}>
                      <option value="">Select a reason…</option>
                      <option value="reservation">Table Reservation</option>
                      <option value="event">Private Event Booking</option>
                      <option value="feedback">Feedback</option>
                      <option value="general">General Enquiry</option>
                      <option value="catering">Catering Enquiry</option>
                    </select>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="contactDate">Preferred Date</label>
                      <input id="contactDate" type="date" onChange={handleChange} />
                    </div>
                    <div className="form-group">
                      <label htmlFor="contactGuests">Number of Guests</label>
                      <select id="contactGuests" onChange={handleChange}>
                        <option value="">Select…</option>
                        <option>1–2</option>
                        <option>3–4</option>
                        <option>5–8</option>
                        <option>9+</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="contactMessage">Message</label>
                    <textarea id="contactMessage" placeholder="Tell us more — any dietary requirements, special occasions, or questions?" onChange={handleChange}></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }} disabled={submitting}>
                    {submitting ? '⏳ Sending…' : '☕ Send Message'}
                  </button>
                </form>
              ) : (
                <div style={{ textAlign: 'center', padding: '40px 0', color: 'var(--gold)', fontFamily: 'var(--font-display)', fontSize: '1.2rem', lineHeight: '1.8' }}>
                  <div style={{ fontSize: '3rem', marginBottom: '16px' }}>✅</div>
                  We've got your message!<br />
                  <span style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>Expect a reply within 2 hours during opening hours.</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </section>

      {/* Quick Info Strip */}
      <section className="stats-strip" style={{ background: 'var(--mocha)' }}>
        <div className="stats-grid" style={{ maxWidth: '1100px', margin: '0 auto' }}>
          {[
            { icon: '🚇', label: '2 min walk from Bandra Station'    },
            { icon: '🅿️', label: 'Free parking available nearby'     },
            { icon: '📶', label: 'High-speed Wi-Fi for all guests'   },
            { icon: '♿', label: 'Fully wheelchair accessible'        },
          ].map((item, i) => (
            <div key={item.label} className={`stat-item reveal stagger-${i + 1}`}>
              <div style={{ fontSize: '2.5rem' }}>{item.icon}</div>
              <div className="stat-label">{item.label}</div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
