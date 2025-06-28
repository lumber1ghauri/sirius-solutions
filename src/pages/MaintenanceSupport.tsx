import { motion } from 'framer-motion'
import { Shield, Wrench, Clock, Headphones, CheckCircle, Zap, Users, Star, Activity, Phone, Mail, MessageSquare, Monitor, Cloud, Lock, TrendingUp } from 'lucide-react'
import { Link } from 'react-router-dom'

const MaintenanceSupport = () => {
  const supportMetrics = [
    { metric: "Response Time", value: "<15 min", icon: Clock },
    { metric: "Uptime Guarantee", value: "99.9%", icon: Shield },
    { metric: "Customer Satisfaction", value: "4.9/5", icon: Star },
    { metric: "24/7 Availability", value: "365 days", icon: Headphones }
  ]

  const supportTeamStructure = [
    {
      role: "Support Manager",
      count: "1",
      icon: Shield,
      responsibilities: [
        "Support strategy planning and execution",
        "Team coordination and resource allocation",
        "Escalation management and client communication",
        "SLA monitoring and performance optimization",
        "Support process improvement and training"
      ],
      availability: "24/7 on-call for critical issues"
    },
    {
      role: "Senior Support Engineers",
      count: "3-4",
      icon: Wrench,
      responsibilities: [
        "Complex technical issue resolution",
        "System architecture troubleshooting",
        "Performance optimization and tuning",
        "Security incident response and analysis",
        "Junior engineer mentoring and knowledge transfer"
      ],
      availability: "Business hours + emergency response"
    },
    {
      role: "Support Engineers",
      count: "6-8",
      icon: Users,
      responsibilities: [
        "First-line technical support and ticket resolution",
        "Bug fixes and minor feature implementations",
        "System monitoring and proactive maintenance",
        "Documentation updates and knowledge base management",
        "Client training and onboarding assistance"
      ],
      availability: "24/7 rotating shifts"
    },
    {
      role: "Customer Success Specialists",
      count: "2-3",
      icon: Headphones,
      responsibilities: [
        "Client relationship management and communication",
        "Support ticket triage and priority assessment",
        "User training and best practices guidance",
        "Feedback collection and product improvement suggestions",
        "Contract renewals and service upgrade consultations"
      ],
      availability: "Business hours with extended support"
    }
  ]

  const supportPlans = [
    {
      plan: "Essential Support",
      price: "Starting at $299/month",
      icon: CheckCircle,
      features: [
        "Business hours support (9 AM - 6 PM)",
        "Email and ticket-based communication",
        "Monthly system health reports",
        "Basic security updates and patches",
        "Standard response time: 4-8 hours",
        "Quarterly system optimization"
      ],
      bestFor: "Small businesses with standard requirements"
    },
    {
      plan: "Professional Support",
      price: "Starting at $599/month",
      icon: Zap,
      features: [
        "Extended hours support (7 AM - 10 PM)",
        "Priority email, phone, and chat support",
        "Bi-weekly system health reports",
        "Proactive monitoring and alerts",
        "Priority response time: 1-2 hours",
        "Monthly performance optimization",
        "Dedicated account manager"
      ],
      bestFor: "Growing businesses with critical operations",
      popular: true
    },
    {
      plan: "Enterprise Support",
      price: "Starting at $1,299/month",
      icon: Shield,
      features: [
        "24/7 premium support coverage",
        "Multi-channel support with dedicated hotline",
        "Real-time system monitoring and alerts",
        "Immediate critical issue response",
        "Emergency response time: <15 minutes",
        "Weekly optimization and strategy sessions",
        "Dedicated technical account manager",
        "Custom SLA agreements"
      ],
      bestFor: "Large enterprises with mission-critical systems"
    }
  ]

  const maintenanceServices = [
    {
      category: "Preventive Maintenance",
      icon: Shield,
      services: [
        { name: "System Health Monitoring", description: "Continuous monitoring of application performance and infrastructure health" },
        { name: "Security Updates", description: "Regular application of security patches and vulnerability fixes" },
        { name: "Performance Optimization", description: "Proactive tuning and optimization to maintain peak performance" },
        { name: "Database Maintenance", description: "Regular database optimization, backup verification, and cleanup procedures" }
      ]
    },
    {
      category: "Corrective Maintenance",
      icon: Wrench,
      services: [
        { name: "Bug Fixes", description: "Rapid identification and resolution of software defects and issues" },
        { name: "Emergency Repairs", description: "Immediate response to critical system failures and downtime" },
        { name: "Data Recovery", description: "Professional data recovery services in case of data loss or corruption" },
        { name: "System Restoration", description: "Complete system restoration from backups during major incidents" }
      ]
    },
    {
      category: "Adaptive Maintenance",
      icon: TrendingUp,
      services: [
        { name: "Feature Enhancements", description: "Implementation of new features and functionality improvements" },
        { name: "Technology Upgrades", description: "Migration to newer technologies and framework versions" },
        { name: "Scalability Improvements", description: "System modifications to handle increased load and user growth" },
        { name: "Integration Updates", description: "Updates to third-party integrations and API connections" }
      ]
    },
    {
      category: "Perfective Maintenance",
      icon: Star,
      services: [
        { name: "Code Refactoring", description: "Improving code quality, maintainability, and performance" },
        { name: "UI/UX Improvements", description: "Enhanced user interface and experience optimizations" },
        { name: "Documentation Updates", description: "Maintaining comprehensive and up-to-date technical documentation" },
        { name: "Training and Knowledge Transfer", description: "Ongoing team training and knowledge sharing sessions" }
      ]
    }
  ]

  const supportChannels = [
    {
      channel: "Emergency Hotline",
      icon: Phone,
      availability: "24/7",
      response: "<15 minutes",
      description: "Direct line for critical system failures and emergencies",
      contact: "+1-800-SIRIUS-1"
    },
    {
      channel: "Priority Email",
      icon: Mail,
      availability: "24/7",
      response: "1-4 hours",
      description: "High-priority technical issues and urgent requests",
      contact: "priority@siriussolutions.com"
    },
    {
      channel: "Live Chat Support",
      icon: MessageSquare,
      availability: "Business Hours",
      response: "<5 minutes",
      description: "Real-time assistance for quick questions and guidance",
      contact: "Available on client portal"
    },
    {
      channel: "Support Portal",
      icon: Monitor,
      availability: "24/7",
      response: "Self-service",
      description: "Comprehensive knowledge base and ticket management system",
      contact: "portal.siriussolutions.com"
    }
  ]

  const monitoringFeatures = [
    {
      feature: "Application Performance",
      icon: Activity,
      metrics: ["Response Times", "Throughput", "Error Rates", "User Experience"],
      alerts: "Real-time notifications for performance degradation"
    },
    {
      feature: "Infrastructure Health",
      icon: Cloud,
      metrics: ["Server Resources", "Network Performance", "Storage Utilization", "Backup Status"],
      alerts: "Proactive alerts for resource constraints"
    },
    {
      feature: "Security Monitoring",
      icon: Lock,
      metrics: ["Threat Detection", "Access Patterns", "Vulnerability Scans", "Compliance Status"],
      alerts: "Immediate security incident notifications"
    },
    {
      feature: "Business Intelligence",
      icon: TrendingUp,
      metrics: ["User Analytics", "Feature Usage", "Performance Trends", "Capacity Planning"],
      alerts: "Strategic insights and recommendations"
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
              Maintenance & <span className="gradient-text">Support</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Keep your software running smoothly with our comprehensive maintenance and support services.
            </p>
          </motion.div>

          {/* Support Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {supportMetrics.map((metric, index) => (
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

          {/* Support Plans */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Support <span className="gradient-text">Plans</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Choose the support plan that best fits your business needs and requirements.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {supportPlans.map((plan, index) => (
                <motion.div
                  key={plan.plan}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className={`glass rounded-xl p-8 hover:bg-white/10 transition-all duration-300 relative ${
                    plan.popular ? 'ring-2 ring-[#44bee7] ring-opacity-50' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white px-4 py-2 rounded-full text-sm font-bold">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-xl flex items-center justify-center">
                      <plan.icon size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{plan.plan}</h3>
                      <div className="text-[#44bee7] font-semibold">{plan.price}</div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="text-gray-300 text-sm flex items-start space-x-2">
                          <CheckCircle size={16} className="text-[#44bee7] mt-0.5 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-gray-600 pt-4 mb-6">
                    <p className="text-gray-300 text-sm">{plan.bestFor}</p>
                  </div>

                  <Link to="/contact-us">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`w-full py-3 rounded-full transition-all duration-300 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white hover:shadow-lg pulse-glow'
                          : 'border border-[#44bee7] text-[#44bee7] hover:bg-[#44bee7] hover:text-white'
                      }`}
                    >
                      Choose Plan
                    </motion.button>
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Support Team Structure */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Support <span className="gradient-text">Team</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Our dedicated support team ensures your systems receive expert care around the clock.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {supportTeamStructure.map((member, index) => (
                <motion.div
                  key={member.role}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="glass rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-xl flex items-center justify-center">
                      <member.icon size={28} className="text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{member.role}</h3>
                      <div className="text-[#44bee7] font-semibold">{member.count} per team</div>
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
                    <h4 className="text-white font-semibold mb-2">Availability:</h4>
                    <p className="text-gray-300 text-sm">{member.availability}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Maintenance Services */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Maintenance <span className="gradient-text">Services</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Comprehensive maintenance services to keep your software secure, optimized, and up-to-date.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {maintenanceServices.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="glass rounded-xl p-8 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-xl flex items-center justify-center">
                      <category.icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-white">{category.category}</h3>
                  </div>

                  <div className="space-y-4">
                    {category.services.map((service, idx) => (
                      <div key={idx} className="bg-black/20 rounded-lg p-4">
                        <h4 className="text-white font-semibold mb-2">{service.name}</h4>
                        <p className="text-gray-300 text-sm">{service.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Support Channels */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Support <span className="gradient-text">Channels</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Multiple ways to reach our support team for any assistance you need.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {supportChannels.map((channel, index) => (
                <motion.div
                  key={channel.channel}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass rounded-xl p-6 text-center hover:bg-white/10 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-lg flex items-center justify-center mx-auto mb-4">
                    <channel.icon size={24} className="text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{channel.channel}</h3>
                  <div className="text-[#44bee7] text-sm font-semibold mb-2">{channel.availability}</div>
                  <div className="text-gray-300 text-sm mb-3">{channel.description}</div>
                  <div className="text-white text-sm font-mono">{channel.contact}</div>
                  <div className="mt-2 text-[#44bee7] text-xs">Response: {channel.response}</div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Monitoring Features */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Proactive <span className="gradient-text">Monitoring</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Comprehensive monitoring and alerting to prevent issues before they impact your business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {monitoringFeatures.map((feature, index) => (
                <motion.div
                  key={feature.feature}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-lg flex items-center justify-center">
                      <feature.icon size={24} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white">{feature.feature}</h3>
                  </div>

                  <div className="mb-4">
                    <h4 className="text-white font-semibold mb-2">Key Metrics:</h4>
                    <div className="flex flex-wrap gap-2">
                      {feature.metrics.map((metric, idx) => (
                        <span
                          key={idx}
                          className="bg-[#44bee7]/20 text-[#44bee7] px-3 py-1 rounded-full text-sm"
                        >
                          {metric}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="border-t border-gray-600 pt-4">
                    <h4 className="text-white font-semibold mb-2">Alerting:</h4>
                    <p className="text-gray-300 text-sm">{feature.alerts}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center"
          >
            <div className="glass rounded-2xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Keep Your Software <span className="gradient-text">Running Smoothly</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Partner with our expert support team to ensure your software remains secure, 
                optimized, and always available when you need it.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact-us">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 pulse-glow"
                  >
                    Choose Support Plan
                  </motion.button>
                </Link>
                <Link to="/contact-us">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-[#44bee7] text-[#44bee7] hover:bg-[#44bee7] hover:text-white px-8 py-3 rounded-full transition-all duration-300"
                  >
                    Contact Support
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

export default MaintenanceSupport
