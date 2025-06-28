import { motion } from 'framer-motion'
import { Heart, Lightbulb, Github, Linkedin, Mail, Star, Zap, Shield, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const AboutUs = () => {
  const founders = [
    {
      name: "Ukasha Zahid",
      role: "Co-Founder & CEO",
      education: "BSIT - AI and Automation Specialist",
      specialization: "Agentic AI",
      image: "/ukasha.png", // Updated to use actual image
      bio: "Ukasha is a visionary automation engineer with expertise in creating intelligent systems that streamline business processes. His passion for automation drives our commitment to building efficient, scalable solutions that reduce manual effort and maximize productivity.",
      expertise: [
        "Process Automation & Optimization",
        "DevOps & CI/CD Pipeline Design",
        "Infrastructure as Code (IaC)",
        "Robotic Process Automation (RPA)",
        "System Integration & APIs",
        "Cloud Infrastructure Management"
      ],
      technologies: ["Python", "Docker", "n8n", "Scrappy", "Selenium", "AWS", "Azure"],
      achievements: [
        "Automated 50+ business processes for enterprise clients",
        "Reduced deployment time by 80% through CI/CD optimization",
        "Led digital transformation initiatives for Fortune 500 companies"
      ],
      social: {
        github: "https://github.com/lumber1ghauri",
        linkedin: "https://www.linkedin.com/in/ukasha-zahid-46b397222",
        email: "ukashazahid3@gmail.com"
      }
    },
    {
      name: "M Mujeeb",
      role: "Co-Founder & CTO",
      education: "BSIT - AI and Web Development Specialist",
      specialization: "Artificial Intelligence",
      image: "/mujeeb.png", // Placeholder - replace with actual image
      bio: "Mujeeb is an AI innovator who brings cutting-edge artificial intelligence solutions to real-world problems. His deep understanding of machine learning and data science enables us to create intelligent applications that learn, adapt, and evolve with user needs.",
      expertise: [
        "Machine Learning & Deep Learning",
        "Natural Language Processing (NLP)",
        "Computer Vision & Image Recognition",
        "Predictive Analytics & Data Science",
        "AI Model Development & Deployment",
        "Conversational AI & Chatbots"
      ],
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenAI", "Hugging Face", "Docker"],
      achievements: [
        "Developed AI solutions with 95%+ accuracy rates",
        "Published research in machine learning conferences",
        "Created award-winning AI chatbot for customer service"
      ],
      social: {
        github: "https://github.com/mujeeb4",
        linkedin: "https://www.linkedin.com/in/muhammad-mujeeb-59017623b/",
        email: "mujeebrathore4@gmail.com"
      }
    },
    {
      name: "Hassan A",
      role: "Co-Founder & CDO",
      education: "BSIT - Devops and Development Specialist",
      specialization: "Full Stack Development",
      image: "/hassan.png", // Placeholder - replace with actual image
      bio: "Hassan is a full-stack development expert who architects and builds robust, scalable web applications. His comprehensive understanding of both frontend and backend technologies ensures our solutions are not only functional but also user-friendly and performant.",
      expertise: [
        "Frontend Development (React, Vue, Angular)",
        "Backend Development (Node.js, Python, Java)",
        "Database Design & Management",
        "RESTful APIs & GraphQL",
        "Mobile App Development",
        "Cloud Architecture & Microservices"
      ],
      technologies: ["JavaScript", "TypeScript", "React", "Node.js", "Python", "MongoDB", "PostgreSQL"],
      achievements: [
        "Architected 100+ scalable web applications",
        "Mentored 20+ junior developers",
        "Led development of award-winning e-commerce platforms"
      ],
      social: {
        github: "https://github.com/hassana",
        linkedin: "https://www.linkedin.com/in/hassan-adil-5214ba261/",
        email: "hassanadil@gmail.com"
      }
    }
  ]

  const companyValues = [
    {
      title: "Innovation First",
      icon: Lightbulb,
      description: "We constantly push the boundaries of technology to deliver cutting-edge solutions that drive business growth and transformation."
    },
    {
      title: "Quality Excellence",
      icon: Shield,
      description: "Every project undergoes rigorous testing and quality assurance to ensure we deliver nothing but the best to our clients."
    },
    {
      title: "Client Partnership",
      icon: Heart,
      description: "We build lasting relationships with our clients, understanding their unique needs and growing together as trusted partners."
    },
    {
      title: "Continuous Learning",
      icon: TrendingUp,
      description: "We stay ahead of technology trends and continuously upgrade our skills to provide the most advanced solutions available."
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#44bee7] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars absolute inset-0"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#44bee7]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#3b72b0]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About <span className="gradient-text">Sirius Solutions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We are a cutting-edge software company dedicated to transforming businesses through 
            innovative technology solutions and exceptional service.
          </p>
        </motion.div>

        {/* Our Story */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <div className="glass rounded-2xl p-12">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-6">
                Our <span className="gradient-text">Story</span>
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Sirius Solutions began as a dream shared by three ambitious BSIT graduates who 
                  believed that technology could solve any problem. Each bringing unique expertise 
                  in their respective fields, we combined our knowledge to create a company that 
                  doesn't just build software – we build solutions that transform businesses.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  Named after the brightest star in the night sky, Sirius Solutions represents 
                  our commitment to being a guiding light for businesses navigating the complex 
                  digital landscape. We believe that with the right combination of automation, 
                  artificial intelligence, and full-stack development, any business can reach 
                  new heights of success.
                </p>
              </div>
              
              <div className="relative">
                <div className="glass rounded-xl p-8 bg-gradient-to-br from-[#44bee7]/10 to-[#3b72b0]/10">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-full flex items-center justify-center mx-auto mb-6">
                      <Star size={40} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                    <p className="text-gray-300 leading-relaxed">
                      To empower businesses worldwide with innovative software solutions that 
                      drive growth, efficiency, and digital transformation through the power 
                      of automation, AI, and expert development.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Founding Members */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Meet Our <span className="gradient-text">Founding Team</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Three passionate technologists with complementary expertise, united by a shared 
              vision to transform businesses through innovative software solutions.
            </p>
          </div>

          <div className="space-y-12">
            {founders.map((founder, index) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="glass rounded-2xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className={`grid lg:grid-cols-3 gap-8 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Profile Image */}
                  <div className={`${index % 2 === 1 ? 'lg:col-start-3' : ''}`}>
                    <motion.div
                      whileHover={{ scale: 1.05, rotate: 2 }}
                      className="relative"
                    >
                      <div className="w-80 h-80 mx-auto bg-gradient-to-br from-[#44bee7] to-[#3b72b0] rounded-2xl p-1">
                        <div className="w-full h-full bg-gray-800 rounded-xl overflow-hidden">
                          <img 
                            src={founder.image} 
                            alt={`${founder.name} - ${founder.role}`}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                      
                      {/* Floating specialization badge */}
                      <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
                        <div className="bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white px-4 py-2 rounded-full text-sm font-bold">
                          {founder.specialization}
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  {/* Profile Details */}
                  <div className={`lg:col-span-2 ${index % 2 === 1 ? 'lg:col-start-1' : ''} space-y-6`}>
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-2">{founder.name}</h3>
                      <div className="text-[#44bee7] text-lg font-semibold mb-2">{founder.role}</div>
                      <div className="text-gray-300 text-sm mb-4">{founder.education}</div>
                      <p className="text-gray-300 leading-relaxed">{founder.bio}</p>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-3">Core Expertise:</h4>
                      <div className="grid md:grid-cols-2 gap-2">
                        {founder.expertise.map((skill, idx) => (
                          <div key={idx} className="flex items-center space-x-2">
                            <Zap size={16} className="text-[#44bee7] flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{skill}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-white font-bold mb-3">Technologies:</h4>
                      <div className="flex flex-wrap gap-2">
                        {founder.technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="bg-[#44bee7]/20 text-[#44bee7] px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="border-t border-gray-600 pt-4">
                      <div className="flex space-x-4">
                        <motion.a
                          href={founder.social.github}
                          whileHover={{ scale: 1.1 }}
                          className="w-10 h-10 bg-gray-700 hover:bg-[#44bee7] rounded-lg flex items-center justify-center transition-colors duration-200"
                        >
                          <Github size={20} className="text-white" />
                        </motion.a>
                        <motion.a
                          href={founder.social.linkedin}
                          whileHover={{ scale: 1.1 }}
                          className="w-10 h-10 bg-gray-700 hover:bg-[#44bee7] rounded-lg flex items-center justify-center transition-colors duration-200"
                        >
                          <Linkedin size={20} className="text-white" />
                        </motion.a>
                        <motion.a
                          href={`mailto:${founder.social.email}`}
                          whileHover={{ scale: 1.1 }}
                          className="w-10 h-10 bg-gray-700 hover:bg-[#44bee7] rounded-lg flex items-center justify-center transition-colors duration-200"
                        >
                          <Mail size={20} className="text-white" />
                        </motion.a>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Company Values */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Our <span className="gradient-text">Values</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              The principles that guide everything we do and shape how we serve our clients.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {companyValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="text-center"
        >
          <div className="glass rounded-2xl p-12 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Work with <span className="gradient-text">Our Team</span>?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our combined expertise in automation, AI, and full-stack 
              development can transform your business and drive your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 pulse-glow"
                >
                  Start Your Project
                </motion.button>
              </Link>
              <Link to="/#contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="border border-[#44bee7] text-[#44bee7] hover:bg-[#44bee7] hover:text-white px-8 py-3 rounded-full transition-all duration-300"
                >
                  Get In Touch
                </motion.button>
              </Link>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default AboutUs
