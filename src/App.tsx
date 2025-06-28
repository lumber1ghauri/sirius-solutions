import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SoftwareDevelopment from './pages/SoftwareDevelopment'
import UIUXDesign from './pages/UIUXDesign'
import ProjectManagement from './pages/ProjectManagement'
import QualityAssurance from './pages/QualityAssurance'
import MaintenanceSupport from './pages/MaintenanceSupport'
import ArtificialIntelligence from './pages/ArtificialIntelligence'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Careers from './pages/Careers'
import Blog from './pages/Blog'
import HelpCenter from './pages/HelpCenter'
import TermsAndConditions from './pages/TermsAndConditions'
import PrivacyPolicy from './pages/PrivacyPolicy'
import Security from './pages/Security'
import AdminDashboard from './pages/AdminDashboard'
import { ThemeProvider } from './context/ThemeContext'
import { DataProvider } from './context/DataContext'

// ScrollToTop component
const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

// Home page component
const HomePage = () => (
  <>
    <Hero />
    <About />
    <Testimonials />
    <Contact />
  </>
)

// Main app layout component
const AppLayout = () => {
  const location = useLocation()
  const isAdminDashboard = location.pathname === '/admin-dashboard'

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#44bee7] relative overflow-hidden">
      <ScrollToTop />
      {/* Background particles/stars effect */}
      {!isAdminDashboard && (
        <div className="absolute inset-0 overflow-hidden">
          <div className="stars absolute inset-0"></div>
        </div>
      )}
      
      {!isAdminDashboard && <Navbar />}
      <main className="relative z-10">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/software-development" element={<SoftwareDevelopment />} />
          <Route path="/uiux-design" element={<UIUXDesign />} />
          <Route path="/project-management" element={<ProjectManagement />} />
          <Route path="/quality-assurance" element={<QualityAssurance />} />
          <Route path="/maintenance-support" element={<MaintenanceSupport />} />
          <Route path="/artificial-intelligence" element={<ArtificialIntelligence />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/help-center" element={<HelpCenter />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/security" element={<Security />} />
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
        </Routes>
      </main>
      {!isAdminDashboard && <Footer />}
    </div>
  )
}

function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <Router>
          <AppLayout />
        </Router>
      </DataProvider>
    </ThemeProvider>
  )
}

export default App
