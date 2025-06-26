import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Brain, 
  Bot, 
  Cpu, 
  Database, 
  Eye, 
  MessageSquare, 
  Zap, 
  Target, 
  Code, 
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
  Shield,
  Lightbulb,
  Cog,
  Network
} from 'lucide-react'

const ArtificialIntelligence: React.FC = () => {
  const services = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Agentic Robots",
      description: "Intelligent autonomous agents that can make decisions, learn from interactions, and perform complex tasks with minimal human intervention.",
      features: [
        "Autonomous decision-making systems",
        "Multi-agent coordination",
        "Real-time learning and adaptation",
        "Industry-specific robot behaviors"
      ],
      applications: ["Manufacturing automation", "Customer service", "Data processing", "Quality control"]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Automation Agents",
      description: "Smart automation solutions that streamline business processes, reduce manual work, and increase operational efficiency.",
      features: [
        "Process automation workflows",
        "Intelligent task scheduling",
        "Error detection and recovery",
        "Performance optimization"
      ],
      applications: ["Business process automation", "Document processing", "Workflow management", "System integration"]
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Advanced Chatbots",
      description: "Conversational AI systems that provide natural, contextual interactions with advanced NLP capabilities.",
      features: [
        "Natural language understanding",
        "Context-aware responses",
        "Multi-language support",
        "Emotional intelligence"
      ],
      applications: ["Customer support", "Sales assistance", "Internal help desk", "Lead qualification"]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "AI Training & Development",
      description: "Custom AI model training, fine-tuning, and deployment services tailored to your specific business needs.",
      features: [
        "Custom model development",
        "Data preprocessing and cleaning",
        "Model optimization and tuning",
        "Continuous learning systems"
      ],
      applications: ["Predictive analytics", "Computer vision", "Natural language processing", "Recommendation systems"]
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Special Case AI Development",
      description: "Bespoke AI solutions for unique business challenges that require specialized approaches and innovative thinking.",
      features: [
        "Custom algorithm development",
        "Edge case handling",
        "Specialized domain expertise",
        "Research-backed solutions"
      ],
      applications: ["Medical diagnostics", "Financial modeling", "Scientific research", "Creative applications"]
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: "Computer Vision",
      description: "Advanced image and video analysis systems for object detection, recognition, and automated visual inspection.",
      features: [
        "Object detection and tracking",
        "Facial recognition systems",
        "Quality inspection automation",
        "Real-time video analysis"
      ],
      applications: ["Security systems", "Manufacturing QC", "Medical imaging", "Retail analytics"]
    }
  ]

  const technologies = [
    { name: "TensorFlow", icon: <Cpu className="w-6 h-6" /> },
    { name: "PyTorch", icon: <Brain className="w-6 h-6" /> },
    { name: "OpenAI GPT", icon: <MessageSquare className="w-6 h-6" /> },
    { name: "Computer Vision", icon: <Eye className="w-6 h-6" /> },
    { name: "Natural Language Processing", icon: <Code className="w-6 h-6" /> },
    { name: "Machine Learning", icon: <Database className="w-6 h-6" /> },
    { name: "Deep Learning", icon: <Network className="w-6 h-6" /> },
    { name: "Reinforcement Learning", icon: <Target className="w-6 h-6" /> }
  ]

  const benefits = [
    {
      icon: <TrendingUp className="w-6 h-6" />,
      title: "Increased Efficiency",
      description: "Automate repetitive tasks and optimize processes for 40-60% efficiency gains."
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Reduced Errors",
      description: "AI systems provide consistent accuracy and eliminate human error in critical processes."
    },
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: "Data-Driven Insights",
      description: "Extract valuable insights from your data to make informed business decisions."
    },
    {
      icon: <Cog className="w-6 h-6" />,
      title: "24/7 Operations",
      description: "AI systems work continuously without breaks, ensuring round-the-clock service."
    }
  ]

  const caseStudies = [
    {
      title: "E-commerce Recommendation Engine",
      challenge: "Increase sales through personalized product recommendations",
      solution: "Developed a machine learning system that analyzes user behavior and preferences",
      result: "35% increase in sales and 50% improvement in customer engagement"
    },
    {
      title: "Manufacturing Quality Control",
      challenge: "Automate defect detection in production line",
      solution: "Implemented computer vision system for real-time quality inspection",
      result: "99.7% accuracy in defect detection and 60% reduction in manual inspection time"
    },
    {
      title: "Customer Service Automation",
      challenge: "Handle high volume of customer inquiries efficiently",
      solution: "Built intelligent chatbot with natural language understanding",
      result: "80% of queries resolved automatically, 90% customer satisfaction rate"
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
      
      {/* Header Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link
              to="/"
              className="inline-flex items-center space-x-2 text-[#44bee7] hover:text-white transition-colors duration-200 mb-8"
            >
              <ArrowRight className="w-5 h-5 rotate-180" />
              <span>Back to Home</span>
            </Link>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Artificial <span className="gradient-text">Intelligence</span>
            </h1>
            
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Harness the power of artificial intelligence to automate processes, gain insights, 
              and create intelligent solutions that drive your business forward. From agentic robots 
              to advanced chatbots, we deliver AI solutions that transform operations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI Services Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="gradient-text">AI Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive artificial intelligence solutions designed to solve complex business challenges 
              and unlock new opportunities for growth and innovation.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="glass rounded-xl p-8 hover:shadow-xl hover:shadow-[#44bee7]/20 transition-all duration-300"
              >
                <div className="text-[#44bee7] mb-6">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>
                
                <div className="mb-6">
                  <h4 className="font-semibold text-white mb-3">Key Features:</h4>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-gray-300">
                        <CheckCircle className="w-4 h-4 text-[#44bee7] mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-white mb-3">Applications:</h4>
                  <div className="flex flex-wrap gap-2">
                    {service.applications.map((app, idx) => (
                      <span
                        key={idx}
                        className="bg-[#44bee7]/20 text-[#44bee7] px-3 py-1 rounded-full text-sm border border-[#44bee7]/30"
                      >
                        {app}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="relative py-20 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#44bee7]/5 to-[#3b72b0]/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI Technologies We <span className="gradient-text">Master</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We leverage cutting-edge AI technologies and frameworks to deliver 
              state-of-the-art solutions that meet your specific requirements.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-lg p-6 text-center hover:shadow-lg hover:shadow-[#44bee7]/20 transition-all duration-300"
              >
                <div className="text-[#44bee7] flex justify-center mb-3">
                  {tech.icon}
                </div>
                <h3 className="font-semibold text-white">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why Choose <span className="gradient-text">AI Solutions?</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover the transformative benefits of implementing AI in your business operations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-[#44bee7]/20 to-[#3b72b0]/20 glass w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-[#44bee7] border border-[#44bee7]/30">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-4">
                  {benefit.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Section */}
      <section className="relative py-20 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#44bee7]/5 to-[#3b72b0]/5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              AI <span className="gradient-text">Success Stories</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Real-world examples of how our AI solutions have transformed businesses 
              and delivered measurable results.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass rounded-xl p-8 hover:shadow-xl hover:shadow-[#44bee7]/20 transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <Star className="w-5 h-5 text-[#44bee7] mr-2" />
                  <h3 className="text-xl font-bold text-white">
                    {study.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-white mb-2">Challenge:</h4>
                    <p className="text-gray-300">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Solution:</h4>
                    <p className="text-gray-300">{study.solution}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-white mb-2">Result:</h4>
                    <p className="text-[#44bee7] font-medium">{study.result}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 z-10">
        <div className="absolute inset-0 bg-gradient-to-r from-[#44bee7]/30 to-[#3b72b0]/30"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Business with <span className="gradient-text">AI?</span>
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Let's discuss how our AI solutions can address your specific challenges 
              and unlock new opportunities for growth and innovation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:shadow-lg hover:shadow-[#44bee7]/25 transition-all duration-300 inline-flex items-center justify-center"
                >
                  Start Your AI Project
                  <ArrowRight className="ml-2 w-5 h-5" />
                </motion.button>
              </Link>
              
              <Link to="/contact-us">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="glass border-2 border-[#44bee7]/30 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#44bee7]/10 hover:border-[#44bee7] transition-all duration-300"
                >
                  Schedule Consultation
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

export default ArtificialIntelligence
