import { motion } from 'framer-motion'
import { ArrowUp, Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react'
import { Link } from 'react-router-dom'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { name: 'Software Development', href: '/software-development' },
      { name: 'UI/UX Design', href: '/uiux-design' },
      { name: 'Project Management', href: '/project-management' },
      { name: 'Quality Assurance', href: '/quality-assurance' },
      { name: 'Maintenance & Support', href: '/maintenance-support' }
    ],
    Company: [
      { name: 'About Us', href: '/about-us' },
      { name: 'Contact', href: '/contact-us' },
      { name: 'Careers', href: '/careers' },
      { name: 'Blog', href: '/blog' },
      { name: 'Our Team', href: '/about-us' }
    ],
    Resources: [
      { name: 'Documentation', href: '/help-center' },
      { name: 'Help Center', href: '/help-center' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-and-conditions' },
      { name: 'Security', href: '/security' }
    ]
  }

  const socialLinks = [
    { icon: Github, href: 'https://github.com/sirius-solutions', label: 'GitHub' },
    { icon: Linkedin, href: 'https://linkedin.com/company/sirius-solutions', label: 'LinkedIn' },
    { icon: Twitter, href: 'https://twitter.com/sirius_solutions', label: 'Twitter' },
    { icon: Mail, href: 'mailto:hello@siriussolutions.com', label: 'Email' }
  ]

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-black/50 border-t border-white/10">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">        <div className="absolute -top-20 left-1/4 w-96 h-96 bg-[#44bee7]/5 rounded-full blur-3xl"></div>
        <div className="absolute -top-20 right-1/4 w-80 h-80 bg-[#3b72b0]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className="flex items-center">
                <img 
                  src="/NavbarLogo.png" 
                  alt="Sirius Solutions Logo" 
                  className="h-20 w-auto"
                />
              </div>
              
              <p className="text-gray-300 leading-relaxed max-w-md">
                Pioneering the future of software development through innovative design, 
                development, testing, and maintenance. Your success is our mission.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone size={16} className="text-[#44bee7]" />
                  <span>+92 3097928616</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail size={16} className="text-[#44bee7]" />
                  <span>ukashazahid3@gmail.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin size={16} className="text-[#44bee7]" />
                  <span> E-1 Block, Johar Town, Lahore</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="w-10 h-10 glass rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon size={18} className="text-gray-300 hover:text-white" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links], categoryIndex) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              viewport={{ once: true }}
              className="space-y-4"
            >
              <h4 className="text-white font-semibold text-lg">{category}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.name}>
                    {link.href.startsWith('/') ? (
                      <Link
                        to={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                      >
                        {link.name}
                      </Link>
                    ) : (
                      <a
                        href={link.href}
                        className="text-gray-300 hover:text-white transition-colors duration-200 hover:underline"
                      >
                        {link.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 mb-12"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Stay Updated with <span className="gradient-text">Sirius Solutions</span>
            </h3>
            <p className="text-gray-300 mb-6">
              Get the latest updates on our services, industry insights, and technology trends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:ring-2 focus:ring-[#44bee7]/20 transition-all duration-300"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2 }}
                className="bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 pulse-glow"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-gray-400 text-center md:text-left mb-4 md:mb-0"
          >
            © {currentYear} Sirius Solutions. All rights reserved. Crafted with ❤️ and innovation.
          </motion.p>

          {/* Back to Top Button */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            className="glass w-12 h-12 rounded-lg flex items-center justify-center hover:bg-white/10 transition-all duration-300"
            aria-label="Back to top"
          >
            <ArrowUp size={20} className="text-gray-300 hover:text-white" />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer
