import { useEffect } from 'react'

function animateCounter(el) {
  const target   = parseInt(el.dataset.target, 10)
  const duration = 1800
  const start    = performance.now()
  const update   = (now) => {
    const progress = Math.min((now - start) / duration, 1)
    const eased    = 1 - Math.pow(1 - progress, 3)
    el.textContent = Math.round(eased * target).toLocaleString()
    if (progress < 1) requestAnimationFrame(update)
  }
  requestAnimationFrame(update)
}

/**
 * Animates [data-target] elements when they scroll into view.
 */
export function useCounterAnimation() {
  useEffect(() => {
    const counterObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target)
          counterObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.5 })

    document.querySelectorAll('[data-target]').forEach(el => counterObserver.observe(el))

    return () => counterObserver.disconnect()
  }, [])
}
