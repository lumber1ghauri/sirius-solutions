import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [servicesDropdown, setServicesDropdown] = useState(false)
  const [companyDropdown, setCompanyDropdown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/', internal: true },
    { name: 'About', href: '/about-us', internal: true },
    { name: 'Blog', href: '/blog', internal: true },
    { name: 'Help', href: '/help-center', internal: true },
    { name: 'Contact', href: '/contact-us', internal: true },
    { name: 'Careers', href: '/careers', internal: true },
  ]

  const serviceItems = [
    { name: 'Software Development', href: '/software-development' },
    { name: 'UI/UX Design', href: '/uiux-design' },
    { name: 'Project Management', href: '/project-management' },
    { name: 'Quality Assurance', href: '/quality-assurance' },
    { name: 'Maintenance & Support', href: '/maintenance-support' },
    { name: 'Artificial Intelligence', href: '/artificial-intelligence' },
  ]

  const companyItems = [
    { name: 'Security', href: '/security' },
    { name: 'Terms & Conditions', href: '/terms-and-conditions' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
  ]

  // Dynamic dropdown styles based on scroll state - THIS IS THE KEY FIX
  const getDropdownStyles = () => ({
    background: scrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(255, 255, 255, 0.05)',
    backdropFilter: scrolled ? 'blur(16px)' : 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.1)'
  })

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center"
            >
              <img 
                src="/NavbarLogo.png" 
                alt="Sirius Solutions Logo" 
                className="h-12 w-auto"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => (
              item.internal ? (
                <Link key={item.name} to={item.href}>
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className="text-gray-300 hover:text-white transition-colors duration-200 relative group"
                  >
                    {item.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] group-hover:w-full transition-all duration-300"></span>
                  </motion.div>
                </Link>
              ) : (
                <motion.a
                  key={item.name}
                  href={item.href}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-gray-300 hover:text-white transition-colors duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              )
            ))}
            
            {/* Services Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setServicesDropdown(true)}
              onMouseLeave={() => setServicesDropdown(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: navItems.length * 0.1 }}
                className="text-gray-300 hover:text-white transition-colors duration-200 relative group cursor-pointer flex items-center space-x-1"
              >
                <span>Services</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${servicesDropdown ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] group-hover:w-full transition-all duration-300"></span>
              </motion.div>
              
              {/* Dropdown Menu - UPDATED WITH DYNAMIC STYLES */}
              {servicesDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-52 rounded-lg shadow-lg py-2 z-50 transition-all duration-300"
                  style={getDropdownStyles()}
                >
                  {serviceItems.map((service) => (
                    <Link
                      key={service.name}
                      to={service.href}
                      className="block px-4 py-3 text-white hover:text-blue-300 hover:bg-white/10 transition-all duration-200 font-medium border-b border-white/10 last:border-b-0"
                    >
                      {service.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>

            {/* Company Dropdown */}
            <div 
              className="relative"
              onMouseEnter={() => setCompanyDropdown(true)}
              onMouseLeave={() => setCompanyDropdown(false)}
            >
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: (navItems.length + 1) * 0.1 }}
                className="text-gray-300 hover:text-white transition-colors duration-200 relative group cursor-pointer flex items-center space-x-1"
              >
                <span>Company</span>
                <ChevronDown size={16} className={`transition-transform duration-200 ${companyDropdown ? 'rotate-180' : ''}`} />
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] group-hover:w-full transition-all duration-300"></span>
              </motion.div>
              
              {/* Company Dropdown Menu - UPDATED WITH DYNAMIC STYLES */}
              {companyDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute top-full left-0 mt-2 w-52 rounded-lg shadow-lg py-2 z-50 transition-all duration-300"
                  style={getDropdownStyles()}
                >
                  {companyItems.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className="block px-4 py-3 text-white hover:text-blue-300 hover:bg-white/10 transition-all duration-200 font-medium border-b border-white/10 last:border-b-0"
                    >
                      {item.name}
                    </Link>
                  ))}
                </motion.div>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <Link to="/contact-us">
            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.2 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden md:block bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white px-6 py-2 rounded-full hover:shadow-lg transition-all duration-300 pulse-glow"
            >
              Get Started
            </motion.button>
          </Link>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="md:hidden border-t border-white/20"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)'
          }}
        >
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              item.internal ? (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-white hover:text-blue-300 hover:bg-white/10 rounded-md transition-all duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-white hover:text-blue-300 hover:bg-white/10 rounded-md transition-all duration-200 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              )
            ))}
            
            {/* Services Section in Mobile */}
            <div className="px-3 py-2">
              <div className="text-white text-sm font-semibold mb-2">Services</div>
              {serviceItems.map((service) => (
                <Link
                  key={service.name}
                  to={service.href}
                  className="block px-3 py-2 text-white hover:text-blue-300 hover:bg-white/10 rounded-md transition-all duration-200 ml-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {service.name}
                </Link>
              ))}
            </div>
            
            {/* Company Section in Mobile */}
            <div className="px-3 py-2">
              <div className="text-white text-sm font-semibold mb-2">Company</div>
              {companyItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="block px-3 py-2 text-white hover:text-blue-300 hover:bg-white/10 rounded-md transition-all duration-200 ml-2 font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="px-3 py-2">
              <Link to="/contact-us">
                <button 
                  onClick={() => setIsOpen(false)}
                  className="w-full bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white px-4 py-2 rounded-full hover:shadow-lg transition-all duration-300"
                >
                  Get Started
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}

export default Navbar