import { useEffect, useRef } from 'react'

export default function Cursor() {
  const dotRef  = useRef(null)
  const ringRef = useRef(null)
  const mousePos = useRef({ x: 0, y: 0 })
  const ringPos  = useRef({ x: 0, y: 0 })
  const rafId    = useRef(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current

    const onMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY }
      dot.style.left = e.clientX + 'px'
      dot.style.top  = e.clientY + 'px'
    }

    const animateRing = () => {
      ringPos.current.x += (mousePos.current.x - ringPos.current.x) * 0.12
      ringPos.current.y += (mousePos.current.y - ringPos.current.y) * 0.12
      ring.style.left = ringPos.current.x + 'px'
      ring.style.top  = ringPos.current.y + 'px'
      rafId.current = requestAnimationFrame(animateRing)
    }

    const onHoverEnter = () => ring.classList.add('hover')
    const onHoverLeave = () => ring.classList.remove('hover')

    const addHoverListeners = () => {
      document.querySelectorAll('a, button, .feat-card, .menu-card, .gallery-item, .gp-item')
        .forEach(el => {
          el.addEventListener('mouseenter', onHoverEnter)
          el.addEventListener('mouseleave', onHoverLeave)
        })
    }

    const onClick = (e) => {
      const ripple = document.createElement('div')
      ripple.classList.add('ripple-effect')
      ripple.style.left = e.clientX + 'px'
      ripple.style.top  = e.clientY + 'px'
      document.body.appendChild(ripple)
      setTimeout(() => ripple.remove(), 700)
    }

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('click', onClick)
    rafId.current = requestAnimationFrame(animateRing)

    // Re-attach hover listeners after each navigation (slight delay for DOM)
    const timeout = setTimeout(addHoverListeners, 300)

    return () => {
      document.removeEventListener('mousemove', onMouseMove)
      document.removeEventListener('click', onClick)
      cancelAnimationFrame(rafId.current)
      clearTimeout(timeout)
    }
  }, [])

  return (
    <>
      <div className="cursor-dot"  ref={dotRef}  />
      <div className="cursor-ring" ref={ringRef} />
    </>
  )
}
