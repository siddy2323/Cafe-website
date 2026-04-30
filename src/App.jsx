import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Cursor from './components/Cursor'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import Menu from './pages/Menu'
import About from './pages/About'
import Gallery from './pages/Gallery'
import Contact from './pages/Contact'

export default function App() {
  const location = useLocation()

  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [location.pathname])

  return (
    <>
      <Cursor />
      <div className="page-transition" id="pageTransition"></div>
      <Navbar />
      <Routes>
        <Route path="/"        element={<Home />} />
        <Route path="/menu"    element={<Menu />} />
        <Route path="/about"   element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </>
  )
}
