import { motion } from 'framer-motion'
import { CheckCircle, Code, TestTube, Rocket, FileText, Settings, Target, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'

const SoftwareDevelopment = () => {
  const waterfallPhases = [
    {
      phase: "1. Requirements Analysis",
      icon: FileText,
      description: "Comprehensive gathering and documentation of project requirements, stakeholder needs, and business objectives.",
      activities: [
        "Stakeholder interviews and workshops",
        "Requirements documentation",
        "Feasibility analysis",
        "Project scope definition"
      ],
      duration: "2-4 weeks"
    },
    {
      phase: "2. System Design",
      icon: Target,
      description: "Detailed system architecture, database design, and technical specifications creation.",
      activities: [
        "System architecture design",
        "Database schema design",
        "UI/UX wireframes and prototypes",
        "Technology stack selection"
      ],
      duration: "3-6 weeks"
    },
    {
      phase: "3. Implementation",
      icon: Code,
      description: "Actual coding and development of the software solution based on approved designs.",
      activities: [
        "Frontend development",
        "Backend development",
        "Database implementation",
        "API development and integration"
      ],
      duration: "8-16 weeks"
    },
    {
      phase: "4. Testing",
      icon: TestTube,
      description: "Comprehensive testing to ensure quality, performance, and security standards.",
      activities: [
        "Unit testing",
        "Integration testing",
        "System testing",
        "User acceptance testing"
      ],
      duration: "2-4 weeks"
    },
    {
      phase: "5. Deployment",
      icon: Rocket,
      description: "System deployment, configuration, and go-live activities with monitoring.",
      activities: [
        "Production environment setup",
        "Data migration",
        "System deployment",
        "Post-deployment monitoring"
      ],
      duration: "1-2 weeks"
    },
    {
      phase: "6. Maintenance",
      icon: Settings,
      description: "Ongoing support, updates, and enhancements to ensure optimal performance.",
      activities: [
        "Bug fixes and patches",
        "Performance optimization",
        "Feature enhancements",
        "Regular security updates"
      ],
      duration: "Ongoing"
    }
  ]

  const alternativeMethodologies = [
    {
      name: "Agile/Scrum",
      icon: Zap,
      description: "Iterative development with regular sprints and continuous feedback.",
      benefits: ["Faster delivery", "Flexible requirements", "Regular client feedback", "Risk mitigation"]
    },
    {
      name: "DevOps",
      icon: Settings,
      description: "Continuous integration and deployment with automated testing.",
      benefits: ["Faster deployment", "Better collaboration", "Automated testing", "Continuous monitoring"]
    },
    {
      name: "Hybrid Approach",
      icon: Target,
      description: "Combining waterfall planning with agile execution for optimal results.",
      benefits: ["Best of both worlds", "Structured planning", "Flexible execution", "Client adaptability"]
    }
  ]

  const technologies = [
    {
      category: "Frontend",
      techs: ["React", "Angular", "Vue.js", "TypeScript", "Tailwind CSS", "Next.js"]
    },
    {
      category: "Backend",
      techs: ["Node.js", "Python", "Java", "C#", ".NET", "PHP"]
    },
    {
      category: "Databases",
      techs: ["PostgreSQL", "MongoDB", "MySQL", "Redis", "Firebase", "Oracle"]
    },
    {
      category: "Cloud & DevOps",
      techs: ["AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "CI/CD"]
    }
  ]

  const projectTypes = [
    {
      title: "Web Applications",
      description: "Custom web applications built with modern frameworks and responsive design.",
      features: ["Responsive design", "Progressive Web Apps", "Single Page Applications", "E-commerce platforms"]
    },
    {
      title: "Mobile Applications",
      description: "Native and cross-platform mobile apps for iOS and Android.",
      features: ["Native iOS/Android", "React Native", "Flutter", "Hybrid apps"]
    },
    {
      title: "Enterprise Software",
      description: "Large-scale enterprise solutions with complex business logic.",
      features: ["ERP systems", "CRM solutions", "Business intelligence", "Workflow automation"]
    },
    {
      title: "API Development",
      description: "RESTful and GraphQL APIs for seamless system integration.",
      features: ["REST APIs", "GraphQL", "Microservices", "Third-party integrations"]
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#44bee7] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars absolute inset-0"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#44bee7]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#3b72b0]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-20">
        {/* Header */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center"
            >
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                Software <span className="gradient-text">Development</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Transform your ideas into powerful, scalable software solutions with our expert development team.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Approach */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="gradient-text">Development Approach</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We primarily follow the Waterfall methodology for its structured approach and clear milestones, 
                but we're flexible to adapt to your preferred development methodology.
              </p>
            </motion.div>

            {/* Waterfall Process */}
            <div className="glass rounded-2xl p-8 mb-12">
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                Waterfall Development Process
              </h3>
              
              <div className="grid gap-8">
                {waterfallPhases.map((phase, index) => (
                  <motion.div
                    key={phase.phase}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                  >
                    <div className="flex flex-col lg:flex-row items-start space-y-4 lg:space-y-0 lg:space-x-6">
                      <div className="flex items-center space-x-4 lg:min-w-[300px]">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-lg flex items-center justify-center">
                          <phase.icon size={24} className="text-white" />
                        </div>
                        <div>
                          <h4 className="text-xl font-bold text-white">{phase.phase}</h4>
                          <span className="text-[#44bee7] text-sm font-medium">{phase.duration}</span>
                        </div>
                      </div>
                      
                      <div className="flex-1">
                        <p className="text-gray-300 mb-4">{phase.description}</p>
                        <div className="grid md:grid-cols-2 gap-2">
                          {phase.activities.map((activity, actIndex) => (
                            <div key={actIndex} className="flex items-center space-x-2">
                              <CheckCircle size={16} className="text-[#44bee7] flex-shrink-0" />
                              <span className="text-gray-300 text-sm">{activity}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Alternative Methodologies */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                <span className="gradient-text">Flexible</span> Methodologies
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We adapt to your preferred development methodology to ensure the best fit for your project requirements and team dynamics.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {alternativeMethodologies.map((methodology, index) => (
                <motion.div
                  key={methodology.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-lg flex items-center justify-center mb-4">
                    <methodology.icon size={24} className="text-white" />
                  </div>
                  
                  <h3 className="text-xl font-bold text-white mb-3">{methodology.name}</h3>
                  <p className="text-gray-300 mb-4">{methodology.description}</p>
                  
                  <div className="space-y-2">
                    {methodology.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-[#44bee7] flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Technologies */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                Technology <span className="gradient-text">Stack</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We work with cutting-edge technologies to deliver modern, scalable, and maintainable solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-6"
                >
                  <h3 className="text-lg font-bold text-white mb-4">{category.category}</h3>
                  <div className="space-y-2">
                    {category.techs.map((tech, techIndex) => (
                      <div key={techIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-[#44bee7] rounded-full"></div>
                        <span className="text-gray-300 text-sm">{tech}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Project Types */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl font-bold text-white mb-6">
                What We <span className="gradient-text">Build</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From simple web applications to complex enterprise systems, we deliver solutions that drive business growth.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {projectTypes.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  <div className="grid grid-cols-2 gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle size={16} className="text-[#44bee7] flex-shrink-0" />
                        <span className="text-gray-300 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8"
            >
              <h2 className="text-3xl font-bold text-white mb-6">
                Ready to Start Your <span className="gradient-text">Software Project</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's discuss your requirements and find the perfect development approach for your needs.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link to="/contact-us">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 pulse-glow"
                  >
                    Get Started Today
                  </motion.button>
                </Link>
                
                <Link to="/about-us">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                  >
                    Learn More About Us
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default SoftwareDevelopment
