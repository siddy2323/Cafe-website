import { useEffect } from 'react'

export default function Particles() {
  useEffect(() => {
    const container = document.querySelector('.hero-particles')
    if (!container) return

    const items = ['☕', '🫘', '✨', '🍃', '🌿', '⭐']
    const particles = []

    for (let i = 0; i < 18; i++) {
      const p = document.createElement('div')
      p.classList.add('particle')
      p.textContent = items[Math.floor(Math.random() * items.length)]
      const size     = Math.random() * 0.6 + 0.5
      const left     = Math.random() * 100
      const delay    = Math.random() * 8
      const duration = Math.random() * 8 + 10

      Object.assign(p.style, {
        left: left + '%',
        bottom: '-40px',
        fontSize: size + 'rem',
        animationDuration: duration + 's',
        animationDelay: delay + 's',
        opacity: '0',
        filter: 'drop-shadow(0 0 6px rgba(196,122,43,0.4))',
      })

      container.appendChild(p)
      particles.push(p)
    }

    return () => {
      particles.forEach(p => p.remove())
    }
  }, [])

  return null
}
