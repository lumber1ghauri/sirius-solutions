import { motion } from 'framer-motion'
import { ArrowLeft, FileText, Calendar, Shield, AlertTriangle, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

const TermsAndConditions = () => {
  const lastUpdated = "June 25, 2025"

  const sections = [
    {
      id: "acceptance",
      title: "1. Acceptance of Terms",
      content: [
        "By accessing and using the services provided by Sirius Solutions ('Company', 'we', 'us', or 'our'), you ('Client', 'you', or 'your') agree to be bound by these Terms and Conditions ('Terms').",
        "These Terms constitute a legally binding agreement between you and Sirius Solutions. If you do not agree to these Terms, you must not use our services.",
        "We reserve the right to update these Terms at any time. Continued use of our services after changes constitutes acceptance of the new Terms."
      ]
    },
    {
      id: "services",
      title: "2. Description of Services",
      content: [
        "Sirius Solutions provides software development, UI/UX design, project management, quality assurance, and maintenance & support services.",
        "Our services include but are not limited to: custom software development, web and mobile application development, system integration, consulting, and ongoing technical support.",
        "Service specifications, deliverables, timelines, and pricing are detailed in individual Service Agreements or Statements of Work (SOW) that supplement these Terms."
      ]
    },
    {
      id: "client-obligations",
      title: "3. Client Obligations and Responsibilities",
      content: [
        "You agree to provide accurate, complete, and timely information necessary for service delivery.",
        "You are responsible for obtaining all necessary licenses, permissions, and approvals required for your project.",
        "You must provide timely feedback and approvals as outlined in the project timeline.",
        "You agree to pay all fees according to the agreed payment schedule.",
        "You are responsible for maintaining the confidentiality of any login credentials or access information provided."
      ]
    },
    {
      id: "payment-terms",
      title: "4. Payment Terms and Conditions",
      content: [
        "Payment terms are specified in individual Service Agreements. Standard payment terms are Net 30 days unless otherwise agreed.",
        "Late payments may incur interest charges of 1.5% per month or the maximum rate permitted by law, whichever is less.",
        "All fees are exclusive of taxes. You are responsible for all applicable taxes, duties, and government charges.",
        "Disputed invoices must be reported within 30 days of invoice date with specific details of the dispute.",
        "We reserve the right to suspend services for accounts with overdue payments exceeding 60 days."
      ]
    },
    {
      id: "intellectual-property",
      title: "5. Intellectual Property Rights",
      content: [
        "Custom developments created specifically for you become your property upon full payment, subject to our retained rights in pre-existing components and methodologies.",
        "We retain ownership of our pre-existing intellectual property, including but not limited to methodologies, frameworks, tools, and general knowledge.",
        "You grant us a non-exclusive license to use your trademarks and materials solely for the purpose of providing services.",
        "Third-party software and components remain the property of their respective owners and are subject to their licensing terms.",
        "We may showcase completed projects in our portfolio and marketing materials unless specifically prohibited in writing."
      ]
    },
    {
      id: "confidentiality",
      title: "6. Confidentiality and Non-Disclosure",
      content: [
        "We agree to maintain the confidentiality of your proprietary and confidential information disclosed during the course of our engagement.",
        "Confidential information includes but is not limited to business plans, technical data, customer lists, financial information, and any information marked as confidential.",
        "This obligation survives termination of our agreement and continues for a period of five (5) years.",
        "Exceptions include information that is publicly available, independently developed, or required to be disclosed by law.",
        "Both parties agree to implement reasonable security measures to protect confidential information."
      ]
    },
    {
      id: "warranties-disclaimers",
      title: "7. Warranties and Disclaimers",
      content: [
        "We warrant that our services will be performed with professional skill and care in accordance with industry standards.",
        "We provide a 90-day warranty on deliverables, covering defects in materials and workmanship under normal use.",
        "EXCEPT AS EXPRESSLY SET FORTH HEREIN, ALL SERVICES ARE PROVIDED 'AS IS' WITHOUT WARRANTY OF ANY KIND.",
        "WE DISCLAIM ALL OTHER WARRANTIES, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.",
        "We do not warrant that our services will be uninterrupted, error-free, or meet all your requirements."
      ]
    },
    {
      id: "limitation-liability",
      title: "8. Limitation of Liability",
      content: [
        "IN NO EVENT SHALL SIRIUS SOLUTIONS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES.",
        "Our total liability for any claim arising out of or relating to these Terms or our services shall not exceed the total amount paid by you for services in the twelve (12) months preceding the claim.",
        "This limitation applies regardless of the form of action, whether in contract, tort, negligence, or otherwise.",
        "Some jurisdictions do not allow limitation of liability, so these limitations may not apply to you.",
        "You agree to indemnify and hold us harmless from any claims arising from your use of our services or breach of these Terms."
      ]
    },
    {
      id: "termination",
      title: "9. Termination",
      content: [
        "Either party may terminate an engagement with thirty (30) days written notice, subject to completion of work in progress.",
        "We may terminate immediately if you breach these Terms or fail to pay undisputed invoices within sixty (60) days.",
        "Upon termination, you will pay for all services performed and expenses incurred up to the termination date.",
        "Sections relating to payment, intellectual property, confidentiality, and limitation of liability survive termination.",
        "We will cooperate in good faith to ensure orderly transition of work and deliverables upon termination."
      ]
    },
    {
      id: "force-majeure",
      title: "10. Force Majeure",
      content: [
        "Neither party shall be liable for any delay or failure to perform due to circumstances beyond their reasonable control.",
        "Force majeure events include but are not limited to natural disasters, war, terrorism, government actions, pandemics, and internet or telecommunications failures.",
        "The affected party must promptly notify the other party and use reasonable efforts to minimize the impact.",
        "If a force majeure event continues for more than sixty (60) days, either party may terminate the affected engagement.",
        "During force majeure events, we will make reasonable efforts to continue providing services to the extent possible."
      ]
    },
    {
      id: "governing-law",
      title: "11. Governing Law and Dispute Resolution",
      content: [
        "These Terms are governed by the laws of [Jurisdiction], without regard to conflict of law principles.",
        "Any disputes arising under these Terms shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.",
        "The arbitration shall take place in [City, State], and the arbitrator's decision shall be final and binding.",
        "Notwithstanding the foregoing, either party may seek injunctive relief in any court of competent jurisdiction.",
        "The prevailing party in any dispute shall be entitled to recover reasonable attorneys' fees and costs."
      ]
    },
    {
      id: "general-provisions",
      title: "12. General Provisions",
      content: [
        "These Terms, together with any Service Agreements, constitute the entire agreement between the parties.",
        "No modification of these Terms shall be effective unless in writing and signed by both parties.",
        "If any provision of these Terms is found to be unenforceable, the remainder shall remain in full force and effect.",
        "Our failure to enforce any provision shall not constitute a waiver of that provision or any other provision.",
        "These Terms are binding upon and inure to the benefit of the parties' successors and permitted assigns."
      ]
    }
  ]

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Link to="/" className="inline-flex items-center text-[#44bee7] hover:text-white transition-colors duration-200 mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          
          <div className="w-16 h-16 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-xl flex items-center justify-center mx-auto mb-6">
            <FileText size={32} className="text-white" />
          </div>
          
          <h1 className="text-5xl font-bold text-white mb-6">
            Terms and <span className="gradient-text">Conditions</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Please read these terms and conditions carefully before using our services. 
            These terms govern your relationship with Sirius Solutions.
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
              <span className="text-sm">Current Version</span>
            </div>
          </div>
        </motion.div>

        {/* Important Notice */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="glass rounded-xl p-6 mb-12 border-l-4 border-yellow-400"
        >
          <div className="flex items-start space-x-3">
            <AlertTriangle size={24} className="text-yellow-400 mt-1 flex-shrink-0" />
            <div>
              <h3 className="text-xl font-bold text-white mb-2">Important Notice</h3>
              <p className="text-gray-300">
                These Terms and Conditions are legally binding. By using our services, you acknowledge that you have read, 
                understood, and agree to be bound by these terms. If you have any questions, please contact our legal team 
                at <span className="text-[#44bee7]">legal@siriussolutions.com</span> before proceeding.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Table of Contents */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
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
                  <span className="text-white text-sm font-bold">{index + 1}</span>
                </div>
                <span className="text-gray-300 group-hover:text-white transition-colors">
                  {section.title}
                </span>
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* Terms Sections */}
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
                  <span className="text-white font-bold">{index + 1}</span>
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
          
          <h2 className="text-3xl font-bold text-white mb-4">Questions About These Terms?</h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            If you have any questions about these Terms and Conditions, please don't hesitate to contact us. 
            Our legal team is available to provide clarification and support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact-us">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300"
              >
                Contact Legal Team
              </motion.button>
            </Link>
            
            <a href="mailto:legal@siriussolutions.com">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-[#44bee7] text-[#44bee7] hover:bg-[#44bee7] hover:text-white px-8 py-3 rounded-full transition-all duration-300"
              >
                Email: legal@siriussolutions.com
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default TermsAndConditions
