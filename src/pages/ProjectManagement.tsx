import { motion } from 'framer-motion'
import { Users, UserCheck, MessageSquare, CheckCircle, Target, GitBranch, Clock, Shield, Star, Zap, FileText, Phone, Briefcase, Award, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const ProjectManagement = () => {
  const teamStructure = [
    {
      role: "Lead Project Manager",
      count: "1",
      icon: UserCheck,
      responsibilities: [
        "Overall project oversight and strategic planning",
        "Client relationship management and communication",
        "Resource allocation and timeline management",
        "Risk assessment and mitigation strategies",
        "Quality assurance and delivery coordination"
      ],
      interaction: "Direct client contact for major decisions and project milestones"
    },
    {
      role: "Technical Project Coordinators",
      count: "2-3",
      icon: Users,
      responsibilities: [
        "Daily development team coordination",
        "Technical requirements analysis and documentation",
        "Sprint planning and backlog management",
        "Code review coordination and quality gates",
        "Technical risk identification and resolution"
      ],
      interaction: "Bridge between client needs and development implementation"
    },
    {
      role: "Client Success Manager",
      count: "1",
      icon: MessageSquare,
      responsibilities: [
        "Client onboarding and relationship nurturing",
        "Regular progress updates and feedback collection",
        "Change request management and documentation",
        "Stakeholder communication and expectation management",
        "Post-delivery support coordination"
      ],
      interaction: "Primary point of contact for day-to-day client communication"
    }
  ]

  const chainOfCommand = [
    {
      level: 1,
      title: "Client Executive",
      description: "Strategic decisions and project approval",
      responsibilities: ["Final project approval", "Budget authorization", "Strategic direction"]
    },
    {
      level: 2,
      title: "Lead Project Manager",
      description: "Project oversight and client relationship",
      responsibilities: ["Project planning", "Client communication", "Team coordination"]
    },
    {
      level: 3,
      title: "Technical Coordinators",
      description: "Development team management",
      responsibilities: ["Sprint planning", "Technical decisions", "Quality assurance"]
    },
    {
      level: 4,
      title: "Development Teams",
      description: "Implementation and delivery",
      responsibilities: ["Code development", "Testing", "Documentation"]
    }
  ]

  const communicationChannels = [
    {
      channel: "Executive Briefings",
      frequency: "Bi-weekly",
      icon: Briefcase,
      participants: ["Client Executive", "Lead PM", "Key Stakeholders"],
      purpose: "Strategic updates, milestone reviews, and major decision points"
    },
    {
      channel: "Progress Reviews",
      frequency: "Weekly",
      icon: TrendingUp,
      participants: ["Client Team", "Lead PM", "Client Success Manager"],
      purpose: "Project status, deliverable reviews, and feedback collection"
    },
    {
      channel: "Daily Standups",
      frequency: "Daily",
      icon: MessageSquare,
      participants: ["Technical Coordinators", "Development Teams"],
      purpose: "Sprint progress, blocker resolution, and task coordination"
    },
    {
      channel: "24/7 Support Channel",
      frequency: "As needed",
      icon: Phone,
      participants: ["Client", "Support Team", "On-call PM"],
      purpose: "Urgent issues, critical bugs, and emergency support"
    }
  ]

  const implementationProcess = [
    {
      phase: "1. Discovery & Planning",
      duration: "1-2 weeks",
      icon: Target,
      activities: [
        "Stakeholder interviews and requirement gathering",
        "Technical architecture planning and feasibility analysis",
        "Project timeline creation and resource allocation",
        "Communication plan establishment and team introductions"
      ],
      deliverables: ["Project Charter", "Technical Requirements", "Communication Matrix", "Project Timeline"]
    },
    {
      phase: "2. Design & Architecture",
      duration: "2-3 weeks",
      icon: FileText,
      activities: [
        "System architecture design and technology stack selection",
        "UI/UX wireframes and prototypes creation",
        "Database design and API specification development",
        "Security framework and compliance planning"
      ],
      deliverables: ["System Architecture", "UI/UX Designs", "API Documentation", "Security Plan"]
    },
    {
      phase: "3. Development Sprints",
      duration: "4-12 weeks",
      icon: GitBranch,
      activities: [
        "Agile development with 2-week sprint cycles",
        "Continuous integration and automated testing",
        "Regular client demos and feedback incorporation",
        "Code reviews and quality assurance processes"
      ],
      deliverables: ["Working Software", "Test Reports", "Sprint Reviews", "Documentation"]
    },
    {
      phase: "4. Testing & Deployment",
      duration: "1-2 weeks",
      icon: CheckCircle,
      activities: [
        "Comprehensive testing (unit, integration, user acceptance)",
        "Performance optimization and security testing",
        "Deployment planning and infrastructure setup",
        "Client training and knowledge transfer"
      ],
      deliverables: ["Test Results", "Deployed Application", "Training Materials", "Support Documentation"]
    },
    {
      phase: "5. Launch & Support",
      duration: "Ongoing",
      icon: Shield,
      activities: [
        "Production monitoring and performance tracking",
        "Bug fixes and immediate issue resolution",
        "Feature enhancements and iterative improvements",
        "Ongoing support and maintenance planning"
      ],
      deliverables: ["Launch Report", "Monitoring Dashboard", "Support Plan", "Maintenance Schedule"]
    }
  ]

  const projectMetrics = [
    { metric: "On-Time Delivery", value: "96%", icon: Clock },
    { metric: "Client Satisfaction", value: "4.8/5", icon: Star },
    { metric: "Average Team Size", value: "8-12", icon: Users },
    { metric: "Project Success Rate", value: "98%", icon: Award }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-[#44bee7] relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="stars absolute inset-0"></div>
        <div className="absolute top-20 right-20 w-96 h-96 bg-[#44bee7]/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-[#3b72b0]/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Project <span className="gradient-text">Management</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Streamline your project execution with our expert project management services.
            </p>
          </motion.div>

          {/* Project Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {projectMetrics.map((metric, index) => (
              <motion.div
                key={metric.metric}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-lg flex items-center justify-center mx-auto mb-4">
                  <metric.icon size={24} className="text-white" />
                </div>
                <div className="text-2xl font-bold gradient-text mb-2">{metric.value}</div>
                <div className="text-gray-300 text-sm">{metric.metric}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Team Structure */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Project <span className="gradient-text">Team Structure</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our dedicated project management team ensures every aspect of your project 
              is handled with expertise and precision.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {teamStructure.map((member, index) => (
              <motion.div
                key={member.role}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-xl flex items-center justify-center">
                    <member.icon size={28} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{member.role}</h3>
                    <div className="text-[#44bee7] font-semibold">{member.count} per project</div>
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3">Key Responsibilities:</h4>
                  <ul className="space-y-2">
                    {member.responsibilities.map((responsibility, idx) => (
                      <li key={idx} className="text-gray-300 text-sm flex items-start space-x-2">
                        <CheckCircle size={16} className="text-[#44bee7] mt-0.5 flex-shrink-0" />
                        <span>{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="border-t border-gray-600 pt-4">
                  <h4 className="text-white font-semibold mb-2">Client Interaction:</h4>
                  <p className="text-gray-300 text-sm">{member.interaction}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Chain of Command */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Chain of <span className="gradient-text">Command</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Clear hierarchy and decision-making processes ensure efficient project execution 
              and accountability at every level.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {chainOfCommand.map((level, index) => (
              <motion.div
                key={level.level}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative mb-8 last:mb-0"
              >
                <div className="flex items-center space-x-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {level.level}
                  </div>
                  <div className="glass rounded-xl p-6 flex-1">
                    <h3 className="text-xl font-bold text-white mb-2">{level.title}</h3>
                    <p className="text-gray-300 mb-4">{level.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {level.responsibilities.map((resp, idx) => (
                        <span
                          key={idx}
                          className="bg-[#44bee7]/20 text-[#44bee7] px-3 py-1 rounded-full text-sm"
                        >
                          {resp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                {index < chainOfCommand.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-8 bg-gradient-to-b from-[#44bee7] to-[#3b72b0]"></div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Communication Channels */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Communication <span className="gradient-text">Channels</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Structured communication ensures all stakeholders stay informed and aligned 
              throughout the project lifecycle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {communicationChannels.map((channel, index) => (
              <motion.div
                key={channel.channel}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-lg flex items-center justify-center">
                    <channel.icon size={24} className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">{channel.channel}</h3>
                    <div className="text-[#44bee7] font-semibold">{channel.frequency}</div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{channel.purpose}</p>

                <div>
                  <h4 className="text-white font-semibold mb-2">Participants:</h4>
                  <div className="flex flex-wrap gap-2">
                    {channel.participants.map((participant, idx) => (
                      <span
                        key={idx}
                        className="bg-[#3b72b0]/20 text-[#3b72b0] px-3 py-1 rounded-full text-sm"
                      >
                        {participant}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Implementation Process */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.0 }}
          className="mb-20"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Implementation <span className="gradient-text">Process</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-3xl mx-auto">
              Our proven methodology transforms client needs into successful software solutions 
              through systematic planning and execution.
            </p>
          </div>

          <div className="space-y-8">
            {implementationProcess.map((phase, index) => (
              <motion.div
                key={phase.phase}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="glass rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-8 items-start">
                  <div className="lg:col-span-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-16 h-16 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-xl flex items-center justify-center">
                        <phase.icon size={28} className="text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-white">{phase.phase}</h3>
                        <div className="text-[#44bee7] font-semibold">{phase.duration}</div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:col-span-1">
                    <h4 className="text-white font-semibold mb-3">Key Activities:</h4>
                    <ul className="space-y-2">
                      {phase.activities.map((activity, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start space-x-2">
                          <Zap size={16} className="text-[#44bee7] mt-0.5 flex-shrink-0" />
                          <span>{activity}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="lg:col-span-1">
                    <h4 className="text-white font-semibold mb-3">Deliverables:</h4>
                    <div className="space-y-2">
                      {phase.deliverables.map((deliverable, idx) => (
                        <div
                          key={idx}
                          className="bg-[#44bee7]/20 text-[#44bee7] px-3 py-2 rounded-lg text-sm"
                        >
                          {deliverable}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
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
              Ready to Start Your <span className="gradient-text">Project</span>?
            </h2>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Let our experienced project management team guide your software development 
              journey from concept to successful delivery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact-us">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 pulse-glow"
                >
                  Schedule Consultation
                </motion.button>
              </Link>
              <Link to="/contact-us">
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
    </div>
  )
}

export default ProjectManagement
