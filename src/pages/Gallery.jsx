import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'
import PageHero from '../components/PageHero'

const GALLERY_ITEMS = [
  { emoji: '☕', bg: 'linear-gradient(135deg,#3d2000,#1a0a00)', height: '340px', category: 'drinks',  label: 'Brewnara Special'   },
  { emoji: '🥐', bg: 'linear-gradient(135deg,#4a2800,#2d1500)', height: '240px', category: 'food',    label: 'Morning Croissants' },
  { emoji: '🏡', bg: 'linear-gradient(135deg,#2d1500,#3d2000)', height: '280px', category: 'space',   label: 'The Main Hall'      },
  { emoji: '🥛', bg: 'linear-gradient(135deg,#5a3000,#2d1500)', height: '200px', category: 'drinks',  label: 'Oat Milk Latte'     },
  { emoji: '👨‍👩‍👧', bg: 'linear-gradient(135deg,#3d1a00,#1a0a00)', height: '260px', category: 'people',  label: 'Sunday Families'    },
  { emoji: '🧊', bg: 'linear-gradient(135deg,#4a2000,#1a0a00)', height: '300px', category: 'drinks',  label: 'Nitro Cold Brew'    },
  { emoji: '🍫', bg: 'linear-gradient(135deg,#3d2000,#2d1500)', height: '220px', category: 'food',    label: 'Hazelnut Tart'      },
  { emoji: '🪴', bg: 'linear-gradient(135deg,#2d1500,#4a2800)', height: '320px', category: 'space',   label: 'The Garden Nook'    },
  { emoji: '🎸', bg: 'linear-gradient(135deg,#1a0a00,#3d2000)', height: '200px', category: 'people',  label: 'Open Mic Nights'    },
  { emoji: '🌸', bg: 'linear-gradient(135deg,#5a3000,#3d2000)', height: '260px', category: 'drinks',  label: 'Rose Latte'         },
  { emoji: '🧇', bg: 'linear-gradient(135deg,#3d2000,#1a0a00)', height: '240px', category: 'food',    label: 'Belgian Waffles'    },
  { emoji: '🕯️', bg: 'linear-gradient(135deg,#2d1500,#1a0a00)', height: '200px', category: 'space',   label: 'Evening Ambiance'   },
]

const GFILTERS = [
  { id: 'all',    label: 'All'        },
  { id: 'drinks', label: '☕ Drinks'   },
  { id: 'food',   label: '🥐 Food'    },
  { id: 'space',  label: '🏡 Our Space'},
  { id: 'people', label: '👥 Community'},
]

export default function Gallery() {
  useScrollReveal()
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === activeFilter)

  return (
    <main>
      <PageHero
        label="Visual Diary"
        title="Our"
        titleSpan="Gallery"
        description="A snapshot of warmth, craft, and the community that makes us who we are."
      />

      {/* Filter */}
      <section className="section" style={{ paddingTop: '60px', paddingBottom: '0' }}>
        <div className="container">
          <div className="menu-filter reveal">
            {GFILTERS.map(f => (
              <button
                key={f.id}
                className={`filter-btn${activeFilter === f.id ? ' active' : ''}`}
                onClick={() => setActiveFilter(f.id)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Gallery */}
      <section className="section" style={{ paddingTop: '40px' }}>
        <div className="gallery-masonry">
          {filtered.map((item, i) => (
            <div key={`${item.label}-${i}`} className="gallery-item pop-in">
              <div
                className="gallery-item-inner"
                style={{ height: item.height, background: item.bg, fontSize: '4rem' }}
              >
                {item.emoji}
              </div>
              <div className="gallery-item-overlay">
                <span className="gallery-item-label">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Instagram CTA */}
      <section className="cta-strip">
        <h2>Follow Our <em>Journey</em></h2>
        <p>Tag us with <strong>@brewnara</strong> and we'll feature your photo in our gallery!</p>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <a href="#" className="btn btn-primary" style={{ display: 'inline-flex' }}>📷 Follow @brewnara</a>
        </div>
      </section>
    </main>
  )
}
