import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Nav from './components/layout/Nav'
import Home from './pages/Home'
import Services from './pages/Services'
import Research from './pages/Research'
import BlogPost from './pages/BlogPost'
import Team from './pages/Team'
import Contact from './pages/Contact'
import PrivacyPolicy from './pages/PrivacyPolicy'
import ComplaintsRemuneration from './pages/ComplaintsRemuneration'
import Disclaimer from './pages/Disclaimer'

function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/research" element={<Research />} />
        <Route path="/research/:slug" element={<BlogPost />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/complaints-remuneration" element={<ComplaintsRemuneration />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  )
}
