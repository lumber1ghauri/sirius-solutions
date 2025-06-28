import { motion } from 'framer-motion'
import { Code2, Palette, Settings, TestTube, Wrench, Users, Award, Target, Brain } from 'lucide-react'
import { Link } from 'react-router-dom'

const About = () => {
  const services = [
    {
      icon: Palette,
      title: "Design",
      description: "Creating intuitive and visually stunning user experiences that captivate and engage your audience."
    },
    {
      icon: Code2,
      title: "Development", 
      description: "Building robust, scalable applications using cutting-edge technologies and best practices."
    },
    {
      icon: Brain,
      title: "AI Solutions",
      description: "Developing intelligent automation, chatbots, and AI-powered systems that transform business operations."
    },
    {
      icon: Settings,
      title: "Management",
      description: "Comprehensive project management ensuring timely delivery and seamless execution."
    },
    {
      icon: TestTube,
      title: "Testing",
      description: "Rigorous quality assurance and testing procedures to ensure flawless performance."
    },
    {
      icon: Wrench,
      title: "Maintenance",
      description: "Ongoing support and maintenance to keep your systems running optimally."
    }
  ]

  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">        
        <div className="absolute top-10 right-20 w-64 h-64 bg-[#44bee7]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-20 w-80 h-80 bg-[#3b72b0]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="gradient-text">Sirius Solutions</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            We are a cutting-edge software company dedicated to transforming businesses through 
            innovative technology solutions and exceptional service.
          </p>
        </motion.div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6 max-w-3xl mx-auto mb-20"
        >
          <div className="glass rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-lg flex items-center justify-center">
                <Target size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Mission</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
              To empower businesses worldwide with innovative software solutions that drive growth, 
              efficiency, and digital transformation. We believe in creating technology that not only 
              meets today's needs but anticipates tomorrow's challenges.
            </p>
          </div>

          <div className="glass rounded-2xl p-8">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#3b72b0] to-[#44bee7] rounded-lg flex items-center justify-center">
                <Award size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Our Expertise</h3>
            </div>
            <p className="text-gray-300 leading-relaxed">
            We build practical, high-impact tech — from automation tools to custom dashboards and AI-powered systems. Our team thrives on solving real problems with clean, scalable code. Whether it’s streamlining a workflow or scraping complex data, we focus on shipping fast, staying flexible, and delivering exactly what’s needed. No corporate overhead, just sharp execution.
            </p>
          </div>
        </motion.div>

        {/* Services grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            Our <span className="gradient-text">Services</span>
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                                className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <service.icon size={24} className="text-white" />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{service.title}</h4>
                <p className="text-gray-300 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Team section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-[#3b72b0] to-[#44bee7] rounded-lg flex items-center justify-center">
                <Users size={24} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white">Why Choose Us?</h3>
            </div>
            <p className="text-gray-300 leading-relaxed text-lg">
            At Sirius Solutions, you're not just another ticket in a queue. Unlike big firms juggling thousands of clients, we work closely with each project — giving it the attention and urgency it truly deserves. Being a lean startup means we adapt faster, build quicker, and communicate directly — no layers, no delays. We treat your growth like our own, because your success is our portfolio. You're not just hiring a team — you're getting partners.
            </p>
            
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              <Link
                to="/software-development"
                className="inline-flex items-center space-x-2 text-[#44bee7] hover:text-white transition-colors duration-200 font-medium"
              >
                <span>Development Process</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/uiux-design"
                className="inline-flex items-center space-x-2 text-[#44bee7] hover:text-white transition-colors duration-200 font-medium"
              >
                <span>Design Services</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/project-management"
                className="inline-flex items-center space-x-2 text-[#44bee7] hover:text-white transition-colors duration-200 font-medium"
              >
                <span>Project Management</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/quality-assurance"
                className="inline-flex items-center space-x-2 text-[#44bee7] hover:text-white transition-colors duration-200 font-medium"
              >
                <span>Quality Assurance</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
              <Link
                to="/maintenance-support"
                className="inline-flex items-center space-x-2 text-[#44bee7] hover:text-white transition-colors duration-200 font-medium"
              >
                <span>Maintenance & Support</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About