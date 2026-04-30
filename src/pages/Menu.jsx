import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useScrollReveal } from '../hooks/useScrollReveal'
import PageHero from '../components/PageHero'

const MENU_ITEMS = [
  { emoji: '☕', category: 'coffee',  name: 'Brewnara Special',       desc: 'Our signature house blend — rich, bold, and velvety. Double shot espresso with micro-foam milk.',                    price: '₹220', tag: 'Bestseller' },
  { emoji: '🫘', category: 'coffee',  name: 'Filter Coffee',           desc: 'Traditional South Indian filter coffee — strong decoction, fresh cow\'s milk, the way it\'s always been.',          price: '₹80',  tag: 'Classic'   },
  { emoji: '🥛', category: 'coffee',  name: 'Oat Milk Latte',          desc: 'Smooth espresso over creamy oat milk. Lightly sweetened with vanilla syrup and a cinnamon dust.',                   price: '₹260', tag: 'Vegan'     },
  { emoji: '🫶', category: 'coffee',  name: 'Cardamom Cappuccino',     desc: 'A desi twist on the Italian classic — espresso with aromatic green cardamom and velvety foam.',                     price: '₹200', tag: 'Special'   },
  { emoji: '🌑', category: 'coffee',  name: 'Dark Moon Espresso',      desc: 'A triple ristretto for the true espresso devotee. Intense, powerful, and unapologetically dark.',                   price: '₹180', tag: 'Intense'   },
  { emoji: '🌿', category: 'coffee',  name: 'Matcha Espresso Fusion',  desc: 'Ceremonial grade matcha meets single origin espresso. A bold, earthy collision of East meets West.',                price: '₹290', tag: 'New'       },
  { emoji: '🍵', category: 'tea',    name: 'Darjeeling First Flush',   desc: 'The champagne of teas. Light, floral, and delicate — served in a glass pot with honey on the side.',              price: '₹160', tag: 'Premium'   },
  { emoji: '🫖', category: 'tea',    name: 'Masala Chai',              desc: 'A warming blend of ginger, cinnamon, cloves, and cardamom brewed strong with Assam tea and full cream milk.',      price: '₹90',  tag: 'Bestseller'},
  { emoji: '🌸', category: 'tea',    name: 'Rose Chamomile Latte',     desc: 'Soothing chamomile infused with dried rose petals, steamed milk and a swirl of honey.',                           price: '₹200', tag: 'Relaxing'  },
  { emoji: '🥐', category: 'pastry', name: 'Butter Croissant',         desc: 'Hand-laminated with French butter. 72-hour fermented dough for the flakiest, most indulgent layers.',             price: '₹140', tag: 'Daily Fresh'},
  { emoji: '🧇', category: 'pastry', name: 'Belgian Waffle',           desc: 'Deep-pocketed waffles topped with seasonal fruit compote, whipped cream, and a drizzle of dark chocolate.',       price: '₹220', tag: 'Brunch'    },
  { emoji: '🫓', category: 'pastry', name: 'Sourdough Avocado Toast',  desc: 'House sourdough, smashed avocado, cherry tomatoes, everything bagel seasoning, and a poached egg.',               price: '₹280', tag: 'Healthy'   },
  { emoji: '🍫', category: 'dessert',name: 'Choco Hazelnut Tart',      desc: 'Praline base, silky Valrhona chocolate ganache, edible gold dust and caramelised hazelnuts.',                     price: '₹180', tag: 'Signature' },
  { emoji: '🍰', category: 'dessert',name: 'Tiramisu',                 desc: 'Classic Italian dessert made with mascarpone, our own espresso, and a heavy dusting of Valrhona cocoa.',          price: '₹200', tag: 'Classic'   },
  { emoji: '🧁', category: 'dessert',name: 'Salted Caramel Cupcake',   desc: 'Moist brown butter sponge, silky salted caramel buttercream, and a caramel shard topping.',                       price: '₹150', tag: 'Popular'   },
  { emoji: '🧊', category: 'cold',   name: 'Cold Brew Nitro',          desc: '18-hour cold brew infused with nitrogen for a smooth, creamy texture. Served black over crystal clear ice.',      price: '₹280', tag: 'Summer Hit'},
  { emoji: '🍓', category: 'cold',   name: 'Strawberry Basil Lemonade',desc: 'Fresh strawberries, hand-squeezed lemon, basil infusion and sparkling water. Refreshingly gorgeous.',            price: '₹180', tag: 'Seasonal'  },
  { emoji: '🥭', category: 'cold',   name: 'Mango Cold Foam Latte',    desc: 'Iced espresso layered with Alphonso mango syrup and a silky cold foam cloud on top.',                            price: '₹260', tag: 'New'       },
]

const FILTERS = [
  { id: 'all',    label: 'All Items'    },
  { id: 'coffee', label: '☕ Coffee'    },
  { id: 'tea',    label: '🍵 Tea & More'},
  { id: 'pastry', label: '🥐 Pastries'  },
  { id: 'dessert',label: '🍰 Desserts'  },
  { id: 'cold',   label: '🧊 Cold Drinks'},
]

export default function Menu() {
  useScrollReveal()
  const [activeFilter, setActiveFilter] = useState('all')

  const filtered = activeFilter === 'all'
    ? MENU_ITEMS
    : MENU_ITEMS.filter(item => item.category === activeFilter)

  return (
    <main>
      <PageHero
        label="Crafted For You"
        title="Our"
        titleSpan="Menu"
        description="Every cup is a story. Every bite, a memory. Explore our curated selection of handcrafted drinks and artisan bakes."
      />

      <section className="section" style={{ paddingTop: '60px' }}>
        {/* Filter Tabs */}
        <div className="menu-filter reveal">
          {FILTERS.map(f => (
            <button
              key={f.id}
              className={`filter-btn${activeFilter === f.id ? ' active' : ''}`}
              onClick={() => setActiveFilter(f.id)}
            >
              {f.label}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="menu-grid">
          {filtered.map((item, i) => (
            <div key={item.name} className="menu-card-wrapper pop-in" style={{ animationDelay: `${(i % 6) * 0.08}s` }}>
              <div className="menu-card glass-card">
                <span className="menu-card-emoji">{item.emoji}</span>
                <div className="menu-card-category">{item.category.charAt(0).toUpperCase() + item.category.slice(1)}</div>
                <div className="menu-card-name">{item.name}</div>
                <div className="menu-card-desc">{item.desc}</div>
                <div className="menu-card-footer">
                  <span className="menu-price">{item.price}</span>
                  <span className="menu-tag">{item.tag}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-strip">
        <h2>Can't Decide? <em>Visit Us!</em></h2>
        <p>Our baristas love helping you find your perfect cup. Come in for a free tasting session.</p>
        <div style={{ position: 'relative', zIndex: 1 }}>
          <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex' }}>📍 Find Us Here</Link>
        </div>
      </section>
    </main>
  )
}
