import { motion } from 'framer-motion'
import { ArrowLeft, CheckCircle, Palette, Zap, Brain, Eye, Users, Smartphone, Monitor, Tablet, Lightbulb, Target, Layers, Grid, Figma, Wand2, Sparkles, MousePointer, PenTool } from 'lucide-react'
import { Link } from 'react-router-dom'

const UIUXDesign = () => {
  const designProcess = [
    {
      phase: "1. Discovery & Research",
      icon: Brain,
      description: "Deep dive into user needs, business goals, and market analysis using AI-powered research tools.",
      activities: [
        "User persona creation with AI insights",
        "Competitive analysis automation",
        "Market trend analysis using AI",
        "User journey mapping"
      ],
      tools: ["ChatGPT", "Miro", "Maze", "Hotjar"],
      duration: "1-2 weeks"
    },
    {
      phase: "2. AI-Powered Ideation",
      icon: Lightbulb,
      description: "Generate innovative design concepts using cutting-edge AI tools and creative brainstorming.",
      activities: [
        "AI-generated design concepts",
        "Automated color palette generation",
        "Typography suggestions via AI",
        "Layout inspiration from AI models"
      ],
      tools: ["Midjourney", "DALL-E", "Adobe Firefly", "Galileo AI"],
      duration: "1 week"
    },
    {
      phase: "3. Wireframing & Prototyping",
      icon: Grid,
      description: "Create detailed wireframes and interactive prototypes using industry-leading design tools.",
      activities: [
        "Low-fidelity wireframes",
        "Interactive prototypes",
        "User flow diagrams",
        "Component library creation"
      ],
      tools: ["Figma", "Sketch", "Adobe XD", "Framer"],
      duration: "2-3 weeks"
    },
    {
      phase: "4. Visual Design",
      icon: Palette,
      description: "Craft stunning visual interfaces with perfect attention to aesthetics and usability.",
      activities: [
        "High-fidelity mockups",
        "Design system creation",
        "Icon and illustration design",
        "Responsive design variants"
      ],
      tools: ["Figma", "Adobe Creative Suite", "Principle", "InVision"],
      duration: "3-4 weeks"
    },
    {
      phase: "5. Testing & Iteration",
      icon: Target,
      description: "Validate designs through user testing and iterate based on feedback and analytics.",
      activities: [
        "Usability testing",
        "A/B testing setup",
        "Accessibility audits",
        "Performance optimization"
      ],
      tools: ["Figma", "Maze", "UserTesting", "Optimal Workshop"],
      duration: "1-2 weeks"
    },
    {
      phase: "6. Development Handoff",
      icon: Layers,
      description: "Seamless handoff to development with detailed specifications and ongoing support.",
      activities: [
        "Design system documentation",
        "Asset export and optimization",
        "Developer collaboration",
        "Quality assurance support"
      ],
      tools: ["Figma", "Zeplin", "Abstract", "GitHub"],
      duration: "Ongoing"
    }
  ]

  const aiTools = [
    {
      name: "Midjourney",
      category: "AI Image Generation",
      description: "Create stunning visual concepts and inspiration for design projects.",
      capabilities: ["Concept generation", "Visual inspiration", "Style exploration", "Mood board creation"],
      icon: Wand2
    },
    {
      name: "ChatGPT & Claude",
      category: "AI Content & Strategy",
      description: "Generate UX copy, user personas, and strategic design decisions.",
      capabilities: ["UX writing", "Persona creation", "Content strategy", "Design documentation"],
      icon: Brain
    },
    {
      name: "Galileo AI",
      category: "AI UI Generation",
      description: "Generate complete UI designs from text descriptions and prompts.",
      capabilities: ["UI generation", "Layout creation", "Component design", "Style variations"],
      icon: Sparkles
    },
    {
      name: "Adobe Firefly",
      category: "AI Creative Suite",
      description: "Integrated AI tools within Adobe ecosystem for enhanced creativity.",
      capabilities: ["Generative fill", "Text effects", "Color matching", "Image enhancement"],
      icon: Zap
    }
  ]

  const designTools = [
    {
      category: "Design & Prototyping",
      tools: [
        { name: "Figma", description: "Primary design tool for UI/UX", icon: Figma },
        { name: "Adobe XD", description: "Advanced prototyping", icon: PenTool },
        { name: "Sketch", description: "macOS design tool", icon: Layers },
        { name: "Framer", description: "Interactive prototyping", icon: MousePointer }
      ]
    },
    {
      category: "User Research",
      tools: [
        { name: "Maze", description: "User testing platform", icon: Target },
        { name: "Hotjar", description: "User behavior analytics", icon: Eye },
        { name: "UserTesting", description: "Remote user testing", icon: Users },
        { name: "Optimal Workshop", description: "UX research suite", icon: Brain }
      ]
    },
    {
      category: "Collaboration",
      tools: [
        { name: "Miro", description: "Digital whiteboarding", icon: Grid },
        { name: "Notion", description: "Documentation", icon: Layers },
        { name: "Slack", description: "Team communication", icon: Users },
        { name: "Zeplin", description: "Design handoff", icon: Target }
      ]
    }
  ]

  const designSpecialties = [
    {
      title: "Mobile App Design",
      description: "Native iOS and Android interfaces with platform-specific guidelines.",
      features: [
        "iOS Human Interface Guidelines",
        "Material Design principles",
        "Touch-optimized interactions",
        "Cross-platform consistency"
      ],
      icon: Smartphone
    },
    {
      title: "Web Application Design",
      description: "Responsive web interfaces that work seamlessly across all devices.",
      features: [
        "Responsive design systems",
        "Progressive web apps",
        "Cross-browser compatibility",
        "Performance optimization"
      ],
      icon: Monitor
    },
    {
      title: "Dashboard & Analytics",
      description: "Complex data visualization and admin interfaces for business intelligence.",
      features: [
        "Data visualization",
        "Information architecture",
        "User role management",
        "Real-time updates"
      ],
      icon: Grid
    },
    {
      title: "E-commerce Design",
      description: "Conversion-optimized shopping experiences that drive sales.",
      features: [
        "Conversion optimization",
        "Product discovery",
        "Checkout flow design",
        "Mobile commerce"
      ],
      icon: Tablet
    }
  ]

  const aiWorkflow = [
    {
      step: "Research Enhancement",
      description: "AI analyzes market trends and user behavior patterns to inform design decisions.",
      aiTools: ["ChatGPT for persona creation", "AI-powered analytics tools"]
    },
    {
      step: "Concept Generation",
      description: "Generate multiple design concepts and visual directions using AI image generation.",
      aiTools: ["Midjourney for visual concepts", "DALL-E for illustrations"]
    },
    {
      step: "Content Creation",
      description: "AI assists in creating UX copy, microcopy, and design documentation.",
      aiTools: ["ChatGPT for UX writing", "Claude for documentation"]
    },
    {
      step: "Design Optimization",
      description: "AI-powered tools help optimize layouts, colors, and user flows.",
      aiTools: ["Galileo AI for layout optimization", "Adobe Firefly for assets"]
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
              <Link
                to="/"
                className="inline-flex items-center space-x-2 text-[#44bee7] hover:text-white transition-colors duration-200 mb-8"
              >
                <ArrowLeft size={20} />
                <span>Back to Home</span>
              </Link>
              
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                UI/UX <span className="gradient-text">Design</span>
              </h1>
              
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                We create exceptional user experiences by combining human-centered design principles 
                with cutting-edge AI tools and industry-leading design platforms like Figma. Our approach 
                ensures every interface is both beautiful and functional.
              </p>
            </motion.div>
          </div>
        </section>

        {/* AI-Enhanced Design Process */}
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
                AI-Enhanced <span className="gradient-text">Design Process</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We leverage artificial intelligence throughout our design process to enhance creativity, 
                accelerate workflows, and deliver innovative solutions.
              </p>
            </motion.div>

            <div className="grid gap-8">
              {designProcess.map((phase, index) => (
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
                      
                      <div className="grid md:grid-cols-2 gap-4 mb-4">
                        <div>
                          <h5 className="text-white font-semibold mb-2">Activities:</h5>
                          <div className="space-y-1">
                            {phase.activities.map((activity, actIndex) => (
                              <div key={actIndex} className="flex items-center space-x-2">
                                <CheckCircle size={16} className="text-[#44bee7] flex-shrink-0" />
                                <span className="text-gray-300 text-sm">{activity}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                        
                        <div>
                          <h5 className="text-white font-semibold mb-2">Tools Used:</h5>
                          <div className="flex flex-wrap gap-2">
                            {phase.tools.map((tool, toolIndex) => (
                              <span key={toolIndex} className="bg-[#44bee7]/20 text-[#44bee7] px-2 py-1 rounded-md text-xs font-medium">
                                {tool}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* AI Tools Integration */}
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
                <span className="gradient-text">AI Tools</span> We Use
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We integrate the latest AI technologies to enhance our design capabilities and deliver innovative solutions.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {aiTools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-lg flex items-center justify-center">
                      <tool.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-xl font-bold text-white">{tool.name}</h3>
                        <span className="bg-[#44bee7]/20 text-[#44bee7] px-2 py-1 rounded-md text-xs font-medium">
                          {tool.category}
                        </span>
                      </div>
                      <p className="text-gray-300 mb-4">{tool.description}</p>
                      
                      <div className="space-y-2">
                        {tool.capabilities.map((capability, capIndex) => (
                          <div key={capIndex} className="flex items-center space-x-2">
                            <CheckCircle size={16} className="text-[#44bee7] flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{capability}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* AI Workflow */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="glass rounded-2xl p-8"
            >
              <h3 className="text-2xl font-bold text-white mb-8 text-center">
                How AI Enhances Our <span className="gradient-text">Design Workflow</span>
              </h3>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {aiWorkflow.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-16 h-16 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold text-lg">{index + 1}</span>
                    </div>
                    <h4 className="text-white font-semibold mb-2">{step.step}</h4>
                    <p className="text-gray-300 text-sm mb-3">{step.description}</p>
                    <div className="space-y-1">
                      {step.aiTools.map((tool, toolIndex) => (
                        <div key={toolIndex} className="text-[#44bee7] text-xs">{tool}</div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Design Tools & Technologies */}
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
                Design <span className="gradient-text">Tools & Technologies</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We use industry-leading design tools and collaborate seamlessly with our clients and development teams.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-8">
              {designTools.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="glass rounded-xl p-6"
                >
                  <h3 className="text-xl font-bold text-white mb-6">{category.category}</h3>
                  <div className="space-y-4">
                    {category.tools.map((tool, toolIndex) => (
                      <div key={toolIndex} className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-lg flex items-center justify-center">
                          <tool.icon size={16} className="text-white" />
                        </div>
                        <div>
                          <h4 className="text-white font-medium">{tool.name}</h4>
                          <p className="text-gray-300 text-sm">{tool.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Specialties */}
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
                Design <span className="gradient-text">Specialties</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                From mobile apps to complex dashboards, we create exceptional user experiences across all platforms.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {designSpecialties.map((specialty, index) => (
                <motion.div
                  key={specialty.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-lg flex items-center justify-center">
                      <specialty.icon size={24} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-3">{specialty.title}</h3>
                      <p className="text-gray-300 mb-4">{specialty.description}</p>
                      
                      <div className="grid grid-cols-2 gap-2">
                        {specialty.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle size={16} className="text-[#44bee7] flex-shrink-0" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
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
                Ready to Create an Amazing <span className="gradient-text">User Experience</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                Let's collaborate to design interfaces that your users will love and that drive your business goals.
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <Link to="/contact-us">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white px-8 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 pulse-glow"
                  >
                    Start Your Design Project
                  </motion.button>
                </Link>
                
                <Link to="/blog">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="glass text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
                  >
                    View Our Portfolio
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

export default UIUXDesign
