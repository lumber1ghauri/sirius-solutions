import { motion } from 'framer-motion'
import { Shield, Eye, Lock, Database, Globe, UserCheck, AlertTriangle, Calendar, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const PrivacyPolicy = () => {
  const lastUpdated = "June 25, 2025"

  const sections = [
    {
      id: "introduction",
      title: "1. Introduction",
      icon: Shield,
      content: [
        "Sirius Solutions ('Company', 'we', 'us', or 'our') is committed to protecting your privacy and ensuring the security of your personal information.",
        "This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or engage with us in any capacity.",
        "By using our services, you consent to the data practices described in this Privacy Policy. If you do not agree with this policy, please do not use our services."
      ]
    },
    {
      id: "information-collection",
      title: "2. Information We Collect",
      icon: Database,
      content: [
        "Personal Information: We collect information you provide directly, such as your name, email address, phone number, company name, and job title when you contact us or use our services.",
        "Technical Information: We automatically collect certain technical information, including IP addresses, browser type, operating system, device information, and website usage patterns.",
        "Project Information: During service delivery, we may collect information related to your business processes, technical requirements, and project specifications.",
        "Communication Records: We maintain records of our communications with you, including emails, phone calls, and chat conversations for quality assurance and support purposes.",
        "Cookies and Tracking: We use cookies and similar technologies to enhance your browsing experience and analyze website usage patterns."
      ]
    },
    {
      id: "how-we-use",
      title: "3. How We Use Your Information",
      icon: Eye,
      content: [
        "Service Delivery: We use your information to provide, maintain, and improve our software development and consulting services.",
        "Communication: We use your contact information to respond to inquiries, provide customer support, and send important service-related notifications.",
        "Project Management: We use project-related information to plan, execute, and deliver services according to your requirements.",
        "Legal Compliance: We may use your information to comply with applicable laws, regulations, and legal processes.",
        "Business Operations: We use aggregated and anonymized data to analyze trends, improve our services, and make informed business decisions.",
        "Marketing: With your consent, we may use your information to send you marketing communications about our services and industry insights."
      ]
    },
    {
      id: "information-sharing",
      title: "4. Information Sharing and Disclosure",
      icon: Globe,
      content: [
        "Service Providers: We may share your information with trusted third-party service providers who assist us in delivering our services, such as cloud hosting providers and communication platforms.",
        "Legal Requirements: We may disclose your information if required by law, court order, or government regulation, or to protect our rights and interests.",
        "Business Transfers: In the event of a merger, acquisition, or sale of assets, your information may be transferred as part of the transaction.",
        "Consent: We may share your information with your explicit consent for specific purposes not covered in this policy.",
        "We do not sell, trade, or rent your personal information to third parties for marketing purposes without your explicit consent."
      ]
    },
    {
      id: "data-security",
      title: "5. Data Security and Protection",
      icon: Lock,
      content: [
        "Encryption: We use industry-standard encryption to protect your data both in transit and at rest.",
        "Access Controls: We implement strict access controls to ensure that only authorized personnel can access your information.",
        "Security Monitoring: We continuously monitor our systems for security threats and vulnerabilities.",
        "Employee Training: Our employees receive regular training on data protection and security best practices.",
        "Incident Response: We have established procedures for detecting, responding to, and recovering from security incidents.",
        "While we implement robust security measures, no system is completely secure, and we cannot guarantee absolute security of your information."
      ]
    },
    {
      id: "data-retention",
      title: "6. Data Retention",
      icon: Database,
      content: [
        "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy.",
        "Project data is typically retained for the duration of our engagement plus seven (7) years for legal and business purposes.",
        "Communication records are retained for up to five (5) years for quality assurance and support purposes.",
        "Website analytics data is typically retained for up to two (2) years in aggregated and anonymized form.",
        "You may request deletion of your personal information, subject to legal and contractual obligations.",
        "We will securely delete or anonymize your information when it is no longer needed for legitimate business purposes."
      ]
    },
    {
      id: "your-rights",
      title: "7. Your Privacy Rights",
      icon: UserCheck,
      content: [
        "Access: You have the right to request access to the personal information we hold about you.",
        "Correction: You can request correction of inaccurate or incomplete personal information.",
        "Deletion: You may request deletion of your personal information, subject to legal and contractual obligations.",
        "Portability: You have the right to request a copy of your personal information in a portable format.",
        "Objection: You can object to certain processing of your personal information, including marketing communications.",
        "Restriction: You may request restriction of processing in certain circumstances.",
        "To exercise these rights, please contact us using the information provided at the end of this policy."
      ]
    },
    {
      id: "cookies-tracking",
      title: "8. Cookies and Tracking Technologies",
      icon: Globe,
      content: [
        "Essential Cookies: We use cookies that are necessary for the website to function properly and provide basic functionality.",
        "Analytics Cookies: We use analytics cookies to understand how visitors interact with our website and improve user experience.",
        "Preference Cookies: These cookies remember your preferences and settings to enhance your browsing experience.",
        "Marketing Cookies: With your consent, we may use marketing cookies to deliver relevant advertisements and track campaign effectiveness.",
        "You can control cookie settings through your browser preferences, though disabling certain cookies may affect website functionality.",
        "We do not use cookies to track your activities across other websites without your consent."
      ]
    },
    {
      id: "international-transfers",
      title: "9. International Data Transfers",
      icon: Globe,
      content: [
        "Your information may be transferred to and processed in countries other than your country of residence.",
        "We ensure that any international transfers comply with applicable data protection laws and regulations.",
        "We implement appropriate safeguards, such as standard contractual clauses, to protect your information during international transfers.",
        "When working with international clients, we may store and process data in multiple jurisdictions to ensure optimal service delivery.",
        "We will inform you of any significant changes to our international data transfer practices."
      ]
    },
    {
      id: "third-party-links",
      title: "10. Third-Party Links and Services",
      icon: Globe,
      content: [
        "Our website may contain links to third-party websites and services that are not controlled by us.",
        "This Privacy Policy does not apply to third-party websites, and we are not responsible for their privacy practices.",
        "We encourage you to review the privacy policies of any third-party websites you visit.",
        "Some third-party services may be integrated into our platform to enhance functionality, and their use is subject to their respective privacy policies.",
        "We carefully vet third-party service providers to ensure they meet our standards for data protection and security."
      ]
    },
    {
      id: "children-privacy",
      title: "11. Children's Privacy",
      icon: Shield,
      content: [
        "Our services are not directed to children under the age of 13, and we do not knowingly collect personal information from children under 13.",
        "If we become aware that we have collected personal information from a child under 13, we will take steps to delete such information promptly.",
        "Parents and guardians who believe their child has provided personal information to us should contact us immediately.",
        "We are committed to complying with all applicable laws regarding children's privacy protection."
      ]
    },
    {
      id: "policy-changes",
      title: "12. Changes to This Privacy Policy",
      icon: AlertTriangle,
      content: [
        "We may update this Privacy Policy from time to time to reflect changes in our practices, services, or legal requirements.",
        "We will notify you of any material changes by posting the updated policy on our website and updating the 'Last Updated' date.",
        "For significant changes, we may provide additional notice through email or other communication channels.",
        "Your continued use of our services after policy changes constitutes acceptance of the updated Privacy Policy.",
        "We encourage you to review this Privacy Policy periodically to stay informed about how we protect your information."
      ]
    }
  ]

  const dataTypes = [
    { type: "Contact Information", examples: "Name, email, phone, address", retention: "7 years" },
    { type: "Technical Data", examples: "IP address, browser type, device info", retention: "2 years" },
    { type: "Project Information", examples: "Requirements, specifications, deliverables", retention: "7 years" },
    { type: "Communication Records", examples: "Emails, calls, chat logs", retention: "5 years" },
    { type: "Usage Analytics", examples: "Website interactions, feature usage", retention: "2 years" }
  ]

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Privacy Policy</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We are committed to protecting your privacy and ensuring the security of your personal information.
          </p>
        </motion.div>

        {/* Last Updated */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-xl p-6 mb-12"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <Calendar size={20} className="text-[#44bee7]" />
              <span className="text-white font-semibold">Last Updated: {lastUpdated}</span>
            </div>
            <div className="flex items-center space-x-2 text-green-400">
              <CheckCircle size={16} />
              <span className="text-sm">GDPR Compliant</span>
            </div>
          </div>
        </motion.div>

        {/* Data Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-xl p-8 mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Data Collection Summary</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-600">
                  <th className="text-left py-3 px-4 text-[#44bee7] font-semibold">Data Type</th>
                  <th className="text-left py-3 px-4 text-[#44bee7] font-semibold">Examples</th>
                  <th className="text-left py-3 px-4 text-[#44bee7] font-semibold">Retention Period</th>
                </tr>
              </thead>
              <tbody>
                {dataTypes.map((item, index) => (
                  <motion.tr
                    key={item.type}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="border-b border-gray-700/50"
                  >
                    <td className="py-3 px-4 text-white font-medium">{item.type}</td>
                    <td className="py-3 px-4 text-gray-300">{item.examples}</td>
                    <td className="py-3 px-4 text-gray-300">{item.retention}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Privacy Rights Quick Reference */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="grid md:grid-cols-3 gap-6 mb-12"
        >
          {[
            { icon: Eye, title: "Access Your Data", description: "Request a copy of all personal information we hold about you" },
            { icon: Lock, title: "Control Your Privacy", description: "Update, correct, or delete your personal information" },
            { icon: UserCheck, title: "Manage Preferences", description: "Control how your data is used and communications you receive" }
          ].map((right, index) => (
            <motion.div
              key={right.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="glass rounded-xl p-6 text-center hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-lg flex items-center justify-center mx-auto mb-4">
                <right.icon size={24} className="text-white" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{right.title}</h3>
              <p className="text-gray-300 text-sm">{right.description}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Table of Contents */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="glass rounded-xl p-6 mb-12"
        >
          <h2 className="text-2xl font-bold text-white mb-6">Table of Contents</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {sections.map((section, index) => (
              <motion.a
                key={section.id}
                href={`#${section.id}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.05 * index }}
                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-white/10 transition-colors duration-200 group"
              >
                <div className="w-8 h-8 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-lg flex items-center justify-center flex-shrink-0">
                  <section.icon size={16} className="text-white" />
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {section.title}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Privacy Policy Sections */}
        <div className="space-y-12">
          {sections.map((section, index) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
              className="glass rounded-xl p-8"
            >
              <div className="flex items-start space-x-4 mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-xl flex items-center justify-center flex-shrink-0">
                  <section.icon size={24} className="text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white">{section.title}</h2>
              </div>
              
              <div className="space-y-4 ml-16">
                {section.content.map((paragraph, pIndex) => (
                  <p key={pIndex} className="text-gray-300 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.section>
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="glass rounded-xl p-8 mt-12 text-center"
        >
          <div className="w-16 h-16 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-xl flex items-center justify-center mx-auto mb-6">
            <Shield size={32} className="text-white" />
          </div>
          
          <h2 className="text-3xl font-bold text-white mb-4">Questions About Your Privacy?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            If you have any questions about this Privacy Policy or how we handle your personal information, 
            our Data Protection Officer is here to help.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
              >
                Contact Privacy Team
              </motion.button>
            </Link>
            
            <a href="mailto:privacy@siriussolutions.com">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-[#44bee7] text-[#44bee7] hover:bg-[#44bee7] hover:text-white px-8 py-3 rounded-full transition-all duration-300"
              >
                Email: privacy@siriussolutions.com
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
