import React from 'react';
import { motion } from 'framer-motion';
import { 
  Shield, 
  Eye, 
  Server, 
  Database, 
  Zap, 
  CheckCircle, 
  AlertTriangle, 
  Clock, 
  Globe, 
  UserCheck,
  FileText,
  Wifi,
  Monitor
} from 'lucide-react';

const Security: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const securityFeatures = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Real-Time Data Processing",
      description: "All our systems operate on real-time data streams with zero-latency processing capabilities.",
      details: [
        "Live data synchronization across all platforms",
        "Instant updates and notifications",
        "Real-time analytics and monitoring",
        "Sub-second response times"
      ]
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Enterprise-Grade Security",
      description: "Military-grade encryption and security protocols protect your data at every level.",
      details: [
        "AES-256 encryption for data at rest",
        "TLS 1.3 for data in transit",
        "Multi-factor authentication",
        "Zero-trust security architecture"
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data Integrity",
      description: "Comprehensive data validation and integrity checks ensure accuracy and reliability.",
      details: [
        "Blockchain-based data verification",
        "Automated backup and recovery",
        "Data consistency checks",
        "Immutable audit trails"
      ]
    },
    {
      icon: <Monitor className="w-8 h-8" />,
      title: "24/7 Monitoring",
      description: "Continuous system monitoring and threat detection with automated response protocols.",
      details: [
        "Real-time threat detection",
        "Automated incident response",
        "Performance monitoring",
        "Security event logging"
      ]
    }
  ];

  const complianceStandards = [
    { name: "SOC 2 Type II", description: "Security, availability, and confidentiality" },
    { name: "ISO 27001", description: "Information security management" },
    { name: "GDPR", description: "Data protection and privacy" },
    { name: "HIPAA", description: "Healthcare data protection" },
    { name: "PCI DSS", description: "Payment card industry security" },
    { name: "FedRAMP", description: "Federal risk and authorization management" }
  ];

  const realTimeCapabilities = [
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Sub-Second Latency",
      description: "Critical operations processed in under 100ms"
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: "Global Distribution",
      description: "Edge computing nodes worldwide for optimal performance"
    },
    {
      icon: <Wifi className="w-6 h-6" />,
      title: "Live Synchronization",
      description: "Real-time data sync across all connected devices"
    },
    {
      icon: <Server className="w-6 h-6" />,
      title: "Scalable Infrastructure",
      description: "Auto-scaling to handle millions of concurrent operations"
    }
  ];

  const securityLayers = [
    {
      layer: "Application Layer",
      measures: ["Input validation", "SQL injection prevention", "XSS protection", "CSRF tokens"]
    },
    {
      layer: "Network Layer",
      measures: ["Firewall protection", "DDoS mitigation", "VPN tunneling", "Network segmentation"]
    },
    {
      layer: "Data Layer",
      measures: ["Encryption at rest", "Database security", "Access controls", "Data masking"]
    },
    {
      layer: "Infrastructure Layer",
      measures: ["Secure hosting", "Physical security", "Hardware encryption", "Environmental controls"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 text-white">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div
              className="flex justify-center mb-6"
              variants={fadeInUp}
            >
              <div className="p-4 bg-gradient-to-r from-primary to-secondary rounded-full">
                <Shield className="w-12 h-12 text-white" />
              </div>
            </motion.div>
            
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
              variants={fadeInUp}
            >
              Security & Real-Time Operations
            </motion.h1>
            
            <motion.p
              className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
              variants={fadeInUp}
            >
              Our advanced security infrastructure ensures your data is protected while enabling 
              real-time operations with zero-compromise performance and enterprise-grade reliability.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Real-Time Operations Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Real-Time Data Operations
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Experience the power of instant data processing and real-time insights 
              that drive your business forward at the speed of thought.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {realTimeCapabilities.map((capability, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
                variants={fadeInUp}
              >
                <div className="flex justify-center mb-4 text-primary">
                  {capability.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">
                  {capability.title}
                </h3>
                <p className="text-gray-300 text-sm">
                  {capability.description}
                </p>
              </motion.div>
            ))}
          </motion.div>

          {/* Real-Time Architecture Diagram */}
          <motion.div
            className="glass-card p-8 mb-16"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h3 className="text-2xl font-bold mb-8 text-center text-white">
              Real-Time Data Flow Architecture
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Database className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Data Ingestion</h4>
                <p className="text-gray-300 text-sm">
                  Real-time data streams from multiple sources processed instantly
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-secondary to-accent rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Processing Engine</h4>
                <p className="text-gray-300 text-sm">
                  Advanced algorithms process data with sub-second latency
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-accent to-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <Monitor className="w-10 h-10 text-white" />
                </div>
                <h4 className="text-lg font-semibold mb-2 text-white">Live Dashboard</h4>
                <p className="text-gray-300 text-sm">
                  Real-time visualization and instant notifications
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Security Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Advanced Security Features
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Multi-layered security architecture designed to protect your most sensitive data 
              while maintaining optimal performance for real-time operations.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                className="glass-card p-8 hover:scale-105 transition-transform duration-300"
                variants={fadeInUp}
              >
                <div className="flex items-center mb-6">
                  <div className="p-3 bg-gradient-to-r from-primary to-secondary rounded-lg mr-4 text-white">
                    {feature.icon}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-6">
                  {feature.description}
                </p>
                
                <ul className="space-y-2">
                  {feature.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="w-4 h-4 text-green-400 mr-3 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security Layers Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Multi-Layer Security Architecture
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Our defense-in-depth approach ensures comprehensive protection at every level of your infrastructure.
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {securityLayers.map((layer, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 hover:bg-white/10 transition-colors duration-300"
                variants={fadeInUp}
              >
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="md:w-1/4 mb-4 md:mb-0">
                    <h3 className="text-xl font-bold text-white">{layer.layer}</h3>
                  </div>
                  <div className="md:w-3/4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                      {layer.measures.map((measure, measureIndex) => (
                        <div
                          key={measureIndex}
                          className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg p-3 text-center"
                        >
                          <span className="text-white text-sm font-medium">{measure}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Compliance & Certifications
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We maintain the highest standards of compliance with industry regulations 
              and security frameworks to ensure your data is always protected.
            </p>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            {complianceStandards.map((standard, index) => (
              <motion.div
                key={index}
                className="glass-card p-6 text-center hover:scale-105 transition-transform duration-300"
                variants={fadeInUp}
              >
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                  <FileText className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">{standard.name}</h3>
                <p className="text-gray-300 text-sm">{standard.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Security Monitoring Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="glass-card p-8"
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
                24/7 Security Operations Center
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Our dedicated security team monitors your systems around the clock, 
                ensuring immediate response to any potential threats or anomalies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Eye className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Threat Detection</h3>
                <p className="text-gray-300 text-sm">
                  AI-powered threat detection identifies potential security risks in real-time
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <AlertTriangle className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Incident Response</h3>
                <p className="text-gray-300 text-sm">
                  Automated response protocols activate within seconds of threat detection
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <UserCheck className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-lg font-bold mb-2 text-white">Expert Analysis</h3>
                <p className="text-gray-300 text-sm">
                  Our security experts provide detailed analysis and recommendations
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary to-secondary">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="initial"
            animate="animate"
            variants={fadeInUp}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Secure Your Real-Time Operations?
            </h2>
            <p className="text-xl text-white/90 mb-8">
              Let's discuss how our advanced security infrastructure can protect 
              your data while enabling lightning-fast real-time operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="bg-white text-primary px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Schedule Security Consultation
              </motion.button>
              <motion.button
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-primary transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Download Security Whitepaper
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Security;
