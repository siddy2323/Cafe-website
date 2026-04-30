import { useEffect } from 'react'

/**
 * Adds 'visible' class to elements with .reveal or .pop-in when they enter viewport.
 * Call this inside each page component's useEffect.
 */
export function useScrollReveal() {
  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal')
    const popEls    = document.querySelectorAll('.pop-in')

    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          revealObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.12 })

    const popObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
          setTimeout(() => entry.target.classList.add('visible'), i * 80)
          popObserver.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    revealEls.forEach(el => revealObserver.observe(el))
    popEls.forEach(el => popObserver.observe(el))

    return () => {
      revealObserver.disconnect()
      popObserver.disconnect()
    }
  }, [])
}
