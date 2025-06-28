import { motion } from 'framer-motion'
import { Shield, Bug, TestTube, CheckCircle, Zap, Eye, Target, Users, Star, Code, Settings, FileText, Activity, Lock } from 'lucide-react'
import { Link } from 'react-router-dom'

const QualityAssurance = () => {
  const qaMetrics = [
    { metric: "Bug Detection Rate", value: "99.2%", icon: Bug },
    { metric: "Test Coverage", value: "95%+", icon: Shield },
    { metric: "Zero Critical Bugs", value: "98%", icon: CheckCircle },
    { metric: "Client Satisfaction", value: "4.9/5", icon: Star }
  ]

  const qaTeamStructure = [
    {
      role: "QA Lead",
      count: "1",
      icon: Shield,
      responsibilities: [
        "Test strategy development and implementation",
        "Quality standards definition and enforcement",
        "Test automation framework design",
        "Risk assessment and mitigation planning",
        "Team coordination and client communication"
      ],
      tools: ["Test Management Tools", "Risk Assessment Frameworks", "Quality Metrics Dashboards"]
    },
    {
      role: "Senior QA Engineers",
      count: "2-3",
      icon: TestTube,
      responsibilities: [
        "Comprehensive test case design and execution",
        "Automated testing script development",
        "Performance and load testing coordination",
        "Security testing and vulnerability assessment",
        "Junior QA mentoring and knowledge transfer"
      ],
      tools: ["Selenium", "Jest", "Cypress", "JMeter", "OWASP ZAP"]
    },
    {
      role: "QA Engineers",
      count: "3-5",
      icon: Users,
      responsibilities: [
        "Manual testing execution and documentation",
        "User acceptance testing coordination",
        "Bug reporting and lifecycle management",
        "Cross-browser and device compatibility testing",
        "Regression testing and smoke testing"
      ],
      tools: ["TestRail", "Jira", "BrowserStack", "Postman", "Charles Proxy"]
    },
    {
      role: "Automation Specialists",
      count: "2",
      icon: Zap,
      responsibilities: [
        "CI/CD pipeline integration and testing",
        "Test automation framework maintenance",
        "API testing automation development",
        "Performance monitoring setup",
        "Test data management and generation"
      ],
      tools: ["Jenkins", "GitHub Actions", "Docker", "Kubernetes", "TestNG"]
    }
  ]

  const testingTypes = [
    {
      category: "Functional Testing",
      icon: Code,
      tests: [
        { name: "Unit Testing", description: "Individual component validation", coverage: "95%" },
        { name: "Integration Testing", description: "Component interaction verification", coverage: "90%" },
        { name: "System Testing", description: "End-to-end functionality validation", coverage: "85%" },
        { name: "User Acceptance Testing", description: "Business requirement compliance", coverage: "100%" }
      ]
    },
    {
      category: "Non-Functional Testing",
      icon: Activity,
      tests: [
        { name: "Performance Testing", description: "Load, stress, and scalability testing", coverage: "100%" },
        { name: "Security Testing", description: "Vulnerability and penetration testing", coverage: "100%" },
        { name: "Usability Testing", description: "User experience and interface testing", coverage: "90%" },
        { name: "Compatibility Testing", description: "Cross-browser and device testing", coverage: "95%" }
      ]
    },
    {
      category: "Specialized Testing",
      icon: Settings,
      tests: [
        { name: "API Testing", description: "RESTful and GraphQL endpoint validation", coverage: "100%" },
        { name: "Database Testing", description: "Data integrity and CRUD operations", coverage: "90%" },
        { name: "Mobile Testing", description: "iOS and Android application testing", coverage: "95%" },
        { name: "Accessibility Testing", description: "WCAG compliance and screen reader testing", coverage: "85%" }
      ]
    }
  ]

  const qaProcess = [
    {
      phase: "1. Requirements Analysis",
      duration: "1-2 days",
      icon: FileText,
      activities: [
        "Requirement review and analysis for testability",
        "Test strategy definition and documentation",
        "Risk assessment and priority identification",
        "Test environment planning and setup requirements"
      ],
      deliverables: ["Test Strategy Document", "Risk Assessment Report", "Test Plan", "Environment Requirements"]
    },
    {
      phase: "2. Test Planning & Design",
      duration: "3-5 days",
      icon: Target,
      activities: [
        "Detailed test case design and documentation",
        "Test data identification and preparation",
        "Automation test script development",
        "Test environment setup and configuration"
      ],
      deliverables: ["Test Cases", "Test Data Sets", "Automation Scripts", "Test Environment"]
    },
    {
      phase: "3. Test Execution",
      duration: "Ongoing",
      icon: Eye,
      activities: [
        "Manual test execution and result documentation",
        "Automated test suite execution and monitoring",
        "Bug identification, reporting, and tracking",
        "Regression testing after bug fixes"
      ],
      deliverables: ["Test Execution Reports", "Bug Reports", "Test Results", "Coverage Reports"]
    },
    {
      phase: "4. Performance & Security Testing",
      duration: "2-3 days",
      icon: Lock,
      activities: [
        "Load testing and performance benchmarking",
        "Security vulnerability scanning and penetration testing",
        "Stress testing and scalability validation",
        "Performance optimization recommendations"
      ],
      deliverables: ["Performance Reports", "Security Assessment", "Load Test Results", "Optimization Plan"]
    },
    {
      phase: "5. UAT & Sign-off",
      duration: "3-5 days",
      icon: CheckCircle,
      activities: [
        "User acceptance testing coordination with client",
        "Final regression testing and smoke testing",
        "Documentation review and completion",
        "Go-live readiness assessment and sign-off"
      ],
      deliverables: ["UAT Reports", "Final Test Summary", "Go-Live Checklist", "Quality Certificate"]
    }
  ]

  const automationTools = [
    {
      category: "Web Testing",
      tools: [
        { name: "Selenium WebDriver", purpose: "Cross-browser automation" },
        { name: "Cypress", purpose: "End-to-end testing" },
        { name: "Playwright", purpose: "Modern web app testing" },
        { name: "TestCafe", purpose: "Node.js-based testing" }
      ]
    },
    {
      category: "API Testing",
      tools: [
        { name: "Postman/Newman", purpose: "API test automation" },
        { name: "REST Assured", purpose: "Java-based API testing" },
        { name: "Supertest", purpose: "Node.js API testing" },
        { name: "Insomnia", purpose: "GraphQL and REST testing" }
      ]
    },
    {
      category: "Performance Testing",
      tools: [
        { name: "JMeter", purpose: "Load and performance testing" },
        { name: "K6", purpose: "Modern load testing" },
        { name: "Gatling", purpose: "High-performance load testing" },
        { name: "LoadRunner", purpose: "Enterprise performance testing" }
      ]
    },
    {
      category: "Mobile Testing",
      tools: [
        { name: "Appium", purpose: "Cross-platform mobile automation" },
        { name: "Detox", purpose: "React Native testing" },
        { name: "XCUITest", purpose: "iOS native testing" },
        { name: "Espresso", purpose: "Android native testing" }
      ]
    }
  ]

  const qualityStandards = [
    {
      standard: "ISO 25010",
      description: "Software Quality Model",
      compliance: "100%",
      areas: ["Functional Suitability", "Performance Efficiency", "Compatibility", "Usability"]
    },
    {
      standard: "IEEE 829",
      description: "Test Documentation Standard",
      compliance: "100%",
      areas: ["Test Plans", "Test Cases", "Test Reports", "Test Procedures"]
    },
    {
      standard: "WCAG 2.1",
      description: "Web Accessibility Guidelines",
      compliance: "AA Level",
      areas: ["Perceivable", "Operable", "Understandable", "Robust"]
    },
    {
      standard: "OWASP Top 10",
      description: "Security Testing Standards",
      compliance: "100%",
      areas: ["Injection", "Authentication", "Sensitive Data", "XXE"]
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
              Quality <span className="gradient-text">Assurance</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Ensure excellence in your software with our comprehensive testing and quality assurance services.
            </p>
          </motion.div>

          {/* QA Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {qaMetrics.map((metric, index) => (
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

          {/* QA Team Structure */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                QA <span className="gradient-text">Team Structure</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Our specialized quality assurance team ensures comprehensive testing coverage 
                across all aspects of your software application.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {qaTeamStructure.map((member, index) => (
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
                    <h4 className="text-white font-semibold mb-2">Primary Tools:</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.tools.map((tool, idx) => (
                        <span
                          key={idx}
                          className="bg-[#44bee7]/20 text-[#44bee7] px-3 py-1 rounded-full text-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Testing Types */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Testing <span className="gradient-text">Coverage</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Comprehensive testing across all dimensions ensures your software performs 
                flawlessly under any condition.
              </p>
            </div>

            <div className="space-y-8">
              {testingTypes.map((category, index) => (
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

                  <div className="grid md:grid-cols-2 gap-6">
                    {category.tests.map((test, testIdx) => (
                      <div key={testIdx} className="bg-black/20 rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-white font-semibold">{test.name}</h4>
                          <span className="bg-[#44bee7] text-black px-2 py-1 rounded-md text-xs font-bold">
                            {test.coverage}
                          </span>
                        </div>
                        <p className="text-gray-300 text-sm">{test.description}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* QA Process */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                QA <span className="gradient-text">Process</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                Our systematic approach to quality assurance ensures thorough testing 
                at every stage of development.
              </p>
            </div>

            <div className="space-y-8">
              {qaProcess.map((phase, index) => (
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

          {/* Automation Tools */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Automation <span className="gradient-text">Tools</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                We leverage industry-leading tools and frameworks to ensure efficient, 
                reliable, and comprehensive test automation.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {automationTools.map((category, index) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-white mb-6 text-center">{category.category}</h3>
                  <div className="space-y-4">
                    {category.tools.map((tool, toolIdx) => (
                      <div key={toolIdx} className="flex justify-between items-center p-3 bg-black/20 rounded-lg">
                        <div>
                          <div className="text-white font-semibold">{tool.name}</div>
                          <div className="text-gray-300 text-sm">{tool.purpose}</div>
                        </div>
                        <div className="w-2 h-2 bg-[#44bee7] rounded-full"></div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Quality Standards */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mb-20"
          >
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-white mb-4">
                Quality <span className="gradient-text">Standards</span>
              </h2>
              <p className="text-gray-300 text-lg max-w-3xl mx-auto">
                We adhere to international quality standards and best practices to ensure 
                your software meets industry requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {qualityStandards.map((standard, index) => (
                <motion.div
                  key={standard.standard}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                  className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white">{standard.standard}</h3>
                      <p className="text-gray-300">{standard.description}</p>
                    </div>
                    <div className="bg-[#44bee7] text-black px-3 py-1 rounded-full text-sm font-bold">
                      {standard.compliance}
                    </div>
                  </div>

                  <div className="border-t border-gray-600 pt-4">
                    <h4 className="text-white font-semibold mb-2">Coverage Areas:</h4>
                    <div className="flex flex-wrap gap-2">
                      {standard.areas.map((area, idx) => (
                        <span
                          key={idx}
                          className="bg-[#3b72b0]/20 text-[#3b72b0] px-3 py-1 rounded-full text-sm"
                        >
                          {area}
                        </span>
                      ))}
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
            transition={{ duration: 0.8, delay: 1.4 }}
            className="text-center"
          >
            <div className="glass rounded-2xl p-12 max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-4">
                Ensure Your Software <span className="gradient-text">Quality</span>
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
                Partner with our expert QA team to deliver flawless software that exceeds 
                user expectations and industry standards.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact-us">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 pulse-glow"
                  >
                    Request QA Assessment
                  </motion.button>
                </Link>
                <Link to="/contact-us">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="border border-[#44bee7] text-[#44bee7] hover:bg-[#44bee7] hover:text-white px-8 py-3 rounded-full transition-all duration-300"
                  >
                    Discuss Your Project
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

export default QualityAssurance
