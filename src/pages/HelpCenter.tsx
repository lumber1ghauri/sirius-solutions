import { motion } from 'framer-motion'
import { Send, User, MessageSquare, CheckCircle, HelpCircle, Search, Book, Video, FileText, Headphones, Paperclip, X } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'

interface Message {
  id: string
  text: string
  sender: 'user' | 'support'
  timestamp: Date
  status?: 'sent' | 'delivered' | 'read'
}

const HelpCenter = () => {
  const [showChat, setShowChat] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [newMessage, setNewMessage] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const [attachedFiles, setAttachedFiles] = useState<File[]>([])
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)
  
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    priority: 'medium',
    category: '',
    subject: '',
    description: '',
    hasAccount: 'yes'
  })

  const priorities = [
    { value: 'low', label: 'Low - General inquiry', color: 'text-green-400' },
    { value: 'medium', label: 'Medium - Need assistance', color: 'text-yellow-400' },
    { value: 'high', label: 'High - Urgent issue', color: 'text-orange-400' },
    { value: 'critical', label: 'Critical - System down', color: 'text-red-400' }
  ]

  const categories = [
    'Technical Support',
    'Billing & Payments',
    'Account Management',
    'Product Features',
    'Integration Help',
    'Performance Issues',
    'Security Concerns',
    'General Questions'
  ]

  const helpResources = [
    {
      icon: Book,
      title: "Documentation",
      description: "Comprehensive guides and API references",
      link: "#",
      articles: 127
    },
    {
      icon: Video,
      title: "Video Tutorials",
      description: "Step-by-step video walkthroughs",
      link: "#",
      articles: 45
    },
    {
      icon: FileText,
      title: "FAQ",
      description: "Frequently asked questions and answers",
      link: "#",
      articles: 89
    },
    {
      icon: HelpCircle,
      title: "Troubleshooting",
      description: "Common issues and their solutions",
      link: "#",
      articles: 63
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setShowChat(true)
      
      // Add initial support message
      const welcomeMessage: Message = {
        id: '1',
        text: `Hello ${formData.firstName}! Thank you for contacting Sirius Solutions support. I'm here to help you with "${formData.subject}". How can I assist you today?`,
        sender: 'support',
        timestamp: new Date(),
        status: 'delivered'
      }
      
      setMessages([welcomeMessage])
    }, 2000)
  }

  const sendMessage = () => {
    if (newMessage.trim() === '' && attachedFiles.length === 0) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: newMessage,
      sender: 'user',
      timestamp: new Date(),
      status: 'sent'
    }

    setMessages(prev => [...prev, userMessage])
    setNewMessage('')
    setAttachedFiles([])

    // Simulate support typing
    setIsTyping(true)
    setTimeout(() => {
      setIsTyping(false)
      
      // Simulate support response (in real app, this would come from dashboard)
      const supportMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I understand your concern. Let me look into this for you. Could you provide more details about when this issue started?",
        sender: 'support',
        timestamp: new Date(),
        status: 'delivered'
      }
      
      setMessages(prev => [...prev, supportMessage])
    }, 2000)
  }

  const handleFileAttach = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      setAttachedFiles(prev => [...prev, ...Array.from(files)])
    }
  }

  const removeFile = (index: number) => {
    setAttachedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    })
  }

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isTyping])

  if (showChat) {
    return (
      <div className="min-h-screen pt-20 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Chat Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass rounded-xl p-6 mb-6"
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-full flex items-center justify-center">
                  <Headphones size={24} className="text-white" />
                </div>
                <div>
                  <h1 className="text-2xl font-bold text-white">Support Chat</h1>
                  <p className="text-gray-300">
                    Case #{Date.now().toString().slice(-6)} - {formData.subject}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-green-400">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-sm">Support Online</span>
                </div>
                <Link to="/help-center">
                  <button className="text-gray-400 hover:text-white transition-colors">
                    <X size={20} />
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Chat Container */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="glass rounded-xl h-[600px] flex flex-col"
          >
            {/* Messages Area */}
            <div className="flex-1 p-6 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-sm ${message.sender === 'user' ? 'order-2' : 'order-1'}`}>
                    <div
                      className={`rounded-lg p-4 ${
                        message.sender === 'user'
                          ? 'bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white'
                          : 'bg-white/10 text-gray-100'
                      }`}
                    >
                      <p className="text-sm">{message.text}</p>
                    </div>
                    <div className={`flex items-center mt-1 space-x-2 ${
                      message.sender === 'user' ? 'justify-end' : 'justify-start'
                    }`}>
                      <span className="text-xs text-gray-400">{formatTime(message.timestamp)}</span>
                      {message.sender === 'user' && message.status && (
                        <CheckCircle size={12} className="text-green-400" />
                      )}
                    </div>
                  </div>
                  
                  {message.sender === 'support' && (
                    <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-3 order-0">
                      <User size={16} className="text-white" />
                    </div>
                  )}
                  
                  {message.sender === 'user' && (
                    <div className="w-8 h-8 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-full flex items-center justify-center ml-3 order-3">
                      <span className="text-white text-sm font-bold">
                        {formData.firstName.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </motion.div>
              ))}
              
              {/* Typing Indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex justify-start"
                >
                  <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center mr-3">
                    <User size={16} className="text-white" />
                  </div>
                  <div className="bg-white/10 rounded-lg p-4 max-w-sm">
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </motion.div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* File Attachments Preview */}
            {attachedFiles.length > 0 && (
              <div className="px-6 py-2 border-t border-gray-600">
                <div className="flex flex-wrap gap-2">
                  {attachedFiles.map((file, index) => (
                    <div key={index} className="flex items-center bg-white/10 rounded-lg px-3 py-2">
                      <span className="text-white text-sm mr-2">{file.name}</span>
                      <button
                        onClick={() => removeFile(index)}
                        className="text-red-400 hover:text-red-300"
                      >
                        <X size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Message Input */}
            <div className="p-6 border-t border-white/10">
              <div className="flex items-end space-x-4">
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Paperclip size={20} />
                </button>
                
                <div className="flex-1">
                  <textarea
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' && !e.shiftKey) {
                        e.preventDefault()
                        sendMessage()
                      }
                    }}
                    placeholder="Type your message..."
                    rows={1}
                    className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:outline-none transition-colors resize-none"
                  />
                </div>
                
                <motion.button
                  onClick={sendMessage}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  disabled={newMessage.trim() === '' && attachedFiles.length === 0}
                  className="bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white p-3 rounded-lg hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={20} />
                </motion.button>
              </div>
            </div>
          </motion.div>

          <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={handleFileAttach}
            className="hidden"
            accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif"
          />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-white mb-4">Help Center</h1>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Get the support you need. Browse our resources or contact our expert support team directly.
          </p>
        </motion.div>

        {/* Quick Search */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="glass rounded-xl p-6 mb-12"
        >
          <div className="relative max-w-2xl mx-auto">
            <Search size={20} className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search for help articles, tutorials, or common issues..."
              className="w-full bg-white/10 border border-gray-600 rounded-lg pl-12 pr-4 py-4 text-white placeholder-gray-400 focus:border-[#44bee7] focus:outline-none transition-colors"
            />
          </div>
        </motion.div>

        {/* Help Resources */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Browse Help Resources</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {helpResources.map((resource, index) => (
              <motion.a
                key={resource.title}
                href={resource.link}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-lg flex items-center justify-center mb-4">
                  <resource.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                <p className="text-gray-300 mb-3">{resource.description}</p>
                <div className="text-[#44bee7] text-sm font-semibold">
                  {resource.articles} articles available
                </div>
              </motion.a>
            ))}
          </div>
        </motion.section>

        {/* Contact Support Form */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-xl flex items-center justify-center mx-auto mb-4">
              <MessageSquare size={32} className="text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Contact Support</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Can't find what you're looking for? Our support team is here to help. 
              Fill out the form below to start a conversation with our experts.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="max-w-4xl mx-auto space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:outline-none transition-colors"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:outline-none transition-colors"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:outline-none transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:outline-none transition-colors"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Do you have an account with us?</label>
                <select
                  name="hasAccount"
                  value={formData.hasAccount}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#44bee7] focus:outline-none transition-colors"
                >
                  <option value="yes" className="bg-gray-800">Yes, I'm an existing customer</option>
                  <option value="no" className="bg-gray-800">No, I'm a potential customer</option>
                  <option value="trial" className="bg-gray-800">I'm on a trial</option>
                </select>
              </div>
            </div>

            {/* Issue Details */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Priority Level *</label>
                <select
                  name="priority"
                  value={formData.priority}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#44bee7] focus:outline-none transition-colors"
                >
                  {priorities.map(priority => (
                    <option key={priority.value} value={priority.value} className="bg-gray-800">
                      {priority.label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Category *</label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#44bee7] focus:outline-none transition-colors"
                >
                  <option value="" className="bg-gray-800">Select a category</option>
                  {categories.map(category => (
                    <option key={category} value={category} className="bg-gray-800">
                      {category}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Subject *</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleInputChange}
                required
                className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:outline-none transition-colors"
                placeholder="Brief description of your issue"
              />
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Detailed Description *</label>
              <textarea
                name="description"
                value={formData.description}
                onChange={handleInputChange}
                required
                rows={6}
                className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:outline-none transition-colors resize-none"
                placeholder="Please provide as much detail as possible about your issue, including any error messages, steps to reproduce, and expected behavior..."
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center mx-auto"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Starting Chat Session...
                  </>
                ) : (
                  <>
                    <MessageSquare size={20} className="mr-3" />
                    Start Support Chat
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.section>
      </div>
    </div>
  )
}

export default HelpCenter
