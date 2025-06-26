import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { 
  BarChart3, Users, MessageSquare, FileText, Settings, 
  Plus, Edit, Trash2, Eye, Send, Search, Download,
  Globe, Shield, Star, CheckCircle, XCircle
} from 'lucide-react'
import { sendEmail, EMAIL_TEMPLATES } from '../utils/emailService'
import { useData } from '../context/DataContext'
import type { FormSubmission, BlogPost } from '../context/DataContext'

const AdminDashboard = () => {
  const {
    blogPosts,
    addBlogPost,
    updateBlogPost,
    deleteBlogPost,
    testimonials,
    updateTestimonial,
    deleteTestimonial,
    formSubmissions,
    setFormSubmissions,
    addFormSubmission,
    updateFormSubmission,
    chatSessions,
    setChatSessions,
    addChatMessage
  } = useData()

  const [activeTab, setActiveTab] = useState('dashboard')
  const [selectedChat, setSelectedChat] = useState<string | null>(null)
  const [newMessage, setNewMessage] = useState('')
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [adminPassword, setAdminPassword] = useState('')
  const [selectedSubmission, setSelectedSubmission] = useState<FormSubmission | null>(null)
  const [showSubmissionModal, setShowSubmissionModal] = useState(false)
  const [showBlogModal, setShowBlogModal] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [blogForm, setBlogForm] = useState({
    title: '',
    excerpt: '',
    content: '',
    author: '',
    authorRole: '',
    authorImage: '/api/placeholder/40/40',
    category: '',
    tags: '',
    readTime: '',
    featured: false,
    image: '/api/placeholder/600/400'
  })

  // Helper function to safely get string values from form data
  const getFormValue = (data: Record<string, unknown>, key: string): string => {
    const value = data[key]
    return typeof value === 'string' ? value : String(value || '')
  }

  const viewSubmissionDetails = (submission: FormSubmission) => {
    setSelectedSubmission(submission)
    setShowSubmissionModal(true)
  }

  // Function to add new form submission (for testing)
  const addMockSubmission = () => {
    const newSubmission: FormSubmission = {
      id: Date.now().toString(),
      type: 'contact',
      data: {
        firstName: 'Test',
        lastName: 'User',
        email: 'test@example.com',
        phone: '+1234567890',
        company: 'Test Company',
        message: 'This is a test submission from the admin dashboard'
      },
      timestamp: new Date().toLocaleString(),
      status: 'new'
    }

    addFormSubmission(newSubmission)
    
    // Auto-send email notification for new submissions
    const emailTemplate = EMAIL_TEMPLATES.formSubmission(newSubmission.type, newSubmission.data)
    sendEmail({
      to: 'mujeebrathore4@gmail.com',
      subject: emailTemplate.subject,
      message: emailTemplate.message
    }).then(success => {
      if (success) {
        alert('📧 New form submission received and email sent to admin!')
      }
    })
  }

  // Initialize sample data for first time users
  useEffect(() => {
    // Add some sample form submissions if none exist
    if (formSubmissions.length === 0) {
      setFormSubmissions([
        {
          id: '1',
          type: 'contact',
          data: {
            firstName: 'John',
            lastName: 'Doe',
            email: 'john.doe@example.com',
            phone: '+1234567890',
            company: 'Tech Corp',
            message: 'Interested in your software development services'
          },
          timestamp: '2025-06-26 10:30:00',
          status: 'new'
        },
        {
          id: '2',
          type: 'career',
          data: {
            firstName: 'Jane',
            lastName: 'Smith',
            email: 'jane.smith@example.com',
            position: 'Senior Full Stack Developer',
            experience: '5+ years',
            coverLetter: 'I am interested in joining your team...'
          },
          timestamp: '2025-06-26 09:15:00',
          status: 'read'
        }
      ])
    }

    // Add sample chat session if none exist
    if (chatSessions.length === 0) {
      setChatSessions([
        {
          id: '1',
          customerName: 'Alice Johnson',
          email: 'alice@example.com',
          subject: 'Technical Support',
          messages: [
            {
              id: '1',
              sender: 'customer',
              message: 'I need help with my application deployment',
              timestamp: '2025-06-26 11:00:00'
            }
          ],
          status: 'active',
          priority: 'high'
        }
      ])
    }
  }, [formSubmissions.length, chatSessions.length, setFormSubmissions, setChatSessions])

  const handleFormSubmissionResponse = async (submission: FormSubmission) => {
    const emailTemplate = EMAIL_TEMPLATES.formSubmission(submission.type, submission.data)
    
    const success = await sendEmail({
      to: 'mujeebrathore4@gmail.com',
      subject: emailTemplate.subject,
      message: emailTemplate.message
    })
    
    if (success) {
      alert('✅ Email notification sent to mujeebrathore4@gmail.com')
      updateFormSubmission(submission.id, { status: 'responded' })
    } else {
      alert('❌ Failed to send email notification')
    }
  }

  const handleChatMessage = async (chatId: string, message: string) => {
    const newMsg = {
      id: Date.now().toString(),
      sender: 'admin' as const,
      message,
      timestamp: new Date().toISOString()
    }

    addChatMessage(chatId, newMsg)

    const chat = chatSessions.find(c => c.id === chatId)
    if (chat) {
      const emailTemplate = EMAIL_TEMPLATES.adminChatResponse(
        chat.customerName, 
        chat.email, 
        chat.subject, 
        message
      )
      
      await sendEmail({
        to: 'mujeebrathore4@gmail.com',
        subject: emailTemplate.subject,
        message: emailTemplate.message
      })
    }

    setNewMessage('')
  }

  const handleLogin = () => {
    // Simple password protection - in production, use proper authentication
    if (adminPassword === 'sirius2025admin') {
      setIsAuthenticated(true)
    } else {
      alert('Invalid password')
    }
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass rounded-xl p-8 w-full max-w-md"
        >
          <div className="text-center mb-6">
            <Shield className="w-16 h-16 text-[#44bee7] mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-white">Admin Dashboard</h1>
            <p className="text-gray-300">Enter admin password to continue</p>
          </div>
          
          <div className="space-y-4">
            <input
              type="password"
              placeholder="Admin Password"
              value={adminPassword}
              onChange={(e) => setAdminPassword(e.target.value)}
              className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:ring-2 focus:ring-[#44bee7]/20"
              onKeyPress={(e) => e.key === 'Enter' && handleLogin()}
            />
            <button
              onClick={handleLogin}
              className="w-full bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Login
            </button>
          </div>
        </motion.div>
      </div>
    )
  }

  const DashboardOverview = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-white">Admin Dashboard</h1>
        <button 
          onClick={() => setIsAuthenticated(false)}
          className="bg-red-500/20 text-red-400 px-4 py-2 rounded-lg hover:bg-red-500/30 transition-colors"
        >
          Logout
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { 
            title: 'Form Submissions', 
            value: formSubmissions.length, 
            icon: FileText, 
            color: '#44bee7',
            new: formSubmissions.filter(f => f.status === 'new').length
          },
          { 
            title: 'Active Chats', 
            value: chatSessions.filter(c => c.status === 'active').length, 
            icon: MessageSquare, 
            color: '#3b72b0',
            new: chatSessions.filter(c => c.status === 'pending').length
          },
          { 
            title: 'Published Posts', 
            value: blogPosts.filter(p => p.status === 'published').length, 
            icon: Globe, 
            color: '#44bee7',
            new: blogPosts.filter(p => p.status === 'draft').length
          },
          { 
            title: 'Pending Reviews', 
            value: testimonials.filter(t => t.status === 'pending').length, 
            icon: Users, 
            color: '#3b72b0',
            new: testimonials.filter(t => t.status === 'pending').length
          }
        ].map((stat, index) => (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-lg p-6 relative"
          >
            {stat.new > 0 && (
              <div className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center">
                {stat.new}
              </div>
            )}
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold text-white">{stat.value}</p>
              </div>
              <stat.icon size={24} style={{ color: stat.color }} />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Recent Activity */}
      <div className="glass rounded-lg p-6">
        <h3 className="text-xl font-semibold text-white mb-4">Recent Activity</h3>
        <div className="space-y-4">
          {formSubmissions.slice(0, 5).map((submission) => (
            <div key={submission.id} className="flex items-center justify-between p-4 bg-white/5 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className={`w-2 h-2 rounded-full ${
                  submission.status === 'new' ? 'bg-yellow-400' :
                  submission.status === 'read' ? 'bg-blue-400' : 'bg-green-400'
                }`}></div>
                <div>
                  <p className="text-white font-medium">
                    New {submission.type} from {getFormValue(submission.data, 'firstName')} {getFormValue(submission.data, 'lastName')}
                  </p>
                  <p className="text-gray-400 text-sm">{submission.timestamp}</p>
                </div>
              </div>
              <span className={`px-3 py-1 rounded-full text-xs ${
                submission.status === 'new' ? 'bg-yellow-500/20 text-yellow-400' :
                submission.status === 'read' ? 'bg-blue-500/20 text-blue-400' :
                'bg-green-500/20 text-green-400'
              }`}>
                {submission.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )

  const FormSubmissionsTab = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Form Submissions</h2>
        <div className="flex space-x-4">
          <button 
            onClick={addMockSubmission}
            className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center space-x-2"
            title="Add Test Submission"
          >
            <Plus size={16} />
            <span>Test Submission</span>
          </button>
          <div className="relative">
            <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search submissions..."
              className="bg-white/5 border border-white/10 rounded-lg pl-10 pr-4 py-2 text-white placeholder-gray-400 focus:border-[#44bee7] focus:ring-2 focus:ring-[#44bee7]/20"
            />
          </div>
          <button className="bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white px-4 py-2 rounded-lg flex items-center space-x-2">
            <Download size={16} />
            <span>Export</span>
          </button>
        </div>
      </div>

      <div className="glass rounded-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="text-left p-4 text-gray-300">Type</th>
                <th className="text-left p-4 text-gray-300">Name</th>
                <th className="text-left p-4 text-gray-300">Email</th>
                <th className="text-left p-4 text-gray-300">Date</th>
                <th className="text-left p-4 text-gray-300">Status</th>
                <th className="text-left p-4 text-gray-300">Actions</th>
              </tr>
            </thead>
            <tbody>
              {formSubmissions.map((submission) => (
                <tr key={submission.id} className="border-b border-white/10 hover:bg-white/5">
                  <td className="p-4 text-white capitalize">{submission.type}</td>
                  <td className="p-4 text-white">
                    {getFormValue(submission.data, 'firstName')} {getFormValue(submission.data, 'lastName')}
                  </td>
                  <td className="p-4 text-gray-300">{getFormValue(submission.data, 'email')}</td>
                  <td className="p-4 text-gray-300">{submission.timestamp}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs ${
                      submission.status === 'new' ? 'bg-yellow-500/20 text-yellow-400' :
                      submission.status === 'read' ? 'bg-blue-500/20 text-blue-400' :
                      'bg-green-500/20 text-green-400'
                    }`}>
                      {submission.status}
                    </span>
                  </td>
                  <td className="p-4">
                    <div className="flex space-x-2">
                      <button 
                        onClick={() => viewSubmissionDetails(submission)}
                        className="text-[#44bee7] hover:text-white p-1 rounded"
                        title="View Details"
                      >
                        <Eye size={16} />
                      </button>
                      <button 
                        onClick={() => handleFormSubmissionResponse(submission)}
                        className="text-green-400 hover:text-white p-1 rounded"
                        title="Send Email Notification"
                      >
                        <Send size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )

  const ChatManagementTab = () => (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
      {/* Chat List */}
      <div className="glass rounded-lg p-4">
        <h3 className="text-lg font-semibold text-white mb-4">Active Chats</h3>
        <div className="space-y-2">
          {chatSessions.map((chat) => (
            <motion.div
              key={chat.id}
              onClick={() => setSelectedChat(chat.id)}
              className={`p-3 rounded-lg cursor-pointer transition-all ${
                selectedChat === chat.id ? 'bg-[#44bee7]/20' : 'bg-white/5 hover:bg-white/10'
              }`}
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-medium">{chat.customerName}</p>
                  <p className="text-gray-400 text-sm">{chat.subject}</p>
                  <p className="text-gray-500 text-xs">{chat.email}</p>
                </div>
                <div className="flex flex-col items-end space-y-1">
                  <span className={`w-3 h-3 rounded-full ${
                    chat.priority === 'critical' ? 'bg-red-500' :
                    chat.priority === 'high' ? 'bg-orange-500' :
                    chat.priority === 'medium' ? 'bg-yellow-500' :
                    'bg-green-500'
                  }`}></span>
                  <span className="text-xs text-gray-400">{chat.status}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Chat Window */}
      <div className="lg:col-span-2 glass rounded-lg flex flex-col">
        {selectedChat ? (
          <>
            <div className="p-4 border-b border-white/10">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="text-white font-medium">
                    {chatSessions.find(c => c.id === selectedChat)?.customerName}
                  </h4>
                  <p className="text-gray-400 text-sm">
                    {chatSessions.find(c => c.id === selectedChat)?.subject}
                  </p>
                </div>
                <div className="flex space-x-2">
                  <button className="text-green-400 hover:text-white p-2 rounded">
                    <CheckCircle size={16} />
                  </button>
                  <button className="text-red-400 hover:text-white p-2 rounded">
                    <XCircle size={16} />
                  </button>
                </div>
              </div>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto">
              <div className="space-y-4">
                {chatSessions.find(c => c.id === selectedChat)?.messages.map((msg) => (
                  <div
                    key={msg.id}
                    className={`flex ${msg.sender === 'admin' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                      msg.sender === 'admin' 
                        ? 'bg-[#44bee7] text-white' 
                        : 'bg-white/10 text-gray-300'
                    }`}>
                      <p>{msg.message}</p>
                      <p className={`text-xs mt-1 ${
                        msg.sender === 'admin' ? 'text-blue-100' : 'text-gray-500'
                      }`}>
                        {new Date(msg.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="p-4 border-t border-white/10">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your response..."
                  className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:border-[#44bee7] focus:ring-2 focus:ring-[#44bee7]/20"
                  onKeyPress={(e) => e.key === 'Enter' && selectedChat && handleChatMessage(selectedChat, newMessage)}
                />
                <button
                  onClick={() => selectedChat && handleChatMessage(selectedChat, newMessage)}
                  className="bg-[#44bee7] text-white px-4 py-2 rounded-lg hover:bg-[#3b72b0] transition-colors"
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex-1 flex items-center justify-center text-gray-400">
            <div className="text-center">
              <MessageSquare size={48} className="mx-auto mb-4 opacity-50" />
              <p>Select a chat to start messaging</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )

  const TestimonialManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Testimonial Management</h2>
        <button className="bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white px-4 py-2 rounded-lg flex items-center space-x-2">
          <Plus size={16} />
          <span>Add Review</span>
        </button>
      </div>

      <div className="grid gap-6">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="glass rounded-lg p-6">
            <div className="flex items-start justify-between">
              <div className="flex space-x-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h4 className="text-white font-medium">{testimonial.name}</h4>
                    <span className="text-gray-400">-</span>
                    <span className="text-gray-400">{testimonial.position}</span>
                    <span className="text-gray-400">at</span>
                    <span className="text-[#44bee7]">{testimonial.company}</span>
                  </div>
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className={i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}
                      />
                    ))}
                    <span className="text-gray-400 text-sm ml-2">({testimonial.rating}/5)</span>
                  </div>
                  <p className="text-gray-300 mb-3">{testimonial.content}</p>
                  <p className="text-gray-500 text-sm">Submitted: {testimonial.submittedDate}</p>
                </div>
              </div>
              
              <div className="flex flex-col space-y-2">
                <span className={`px-3 py-1 rounded-full text-xs ${
                  testimonial.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                  testimonial.status === 'approved' ? 'bg-green-500/20 text-green-400' :
                  'bg-red-500/20 text-red-400'
                }`}>
                  {testimonial.status}
                </span>
                
                {testimonial.status === 'pending' && (
                  <div className="flex space-x-2">
                    <button 
                      onClick={() => updateTestimonial(testimonial.id, { status: 'approved' })}
                      className="text-green-400 hover:text-white p-1 rounded"
                      title="Approve"
                    >
                      <CheckCircle size={16} />
                    </button>
                    <button 
                      onClick={() => updateTestimonial(testimonial.id, { status: 'rejected' })}
                      className="text-red-400 hover:text-white p-1 rounded"
                      title="Reject"
                    >
                      <XCircle size={16} />
                    </button>
                  </div>
                )}
                
                <div className="flex space-x-2">
                  <button 
                    onClick={() => {
                      const newContent = prompt('Edit testimonial content:', testimonial.content)
                      if (newContent) {
                        updateTestimonial(testimonial.id, { content: newContent })
                      }
                    }}
                    className="text-[#44bee7] hover:text-white p-1 rounded"
                  >
                    <Edit size={16} />
                  </button>
                  <button 
                    onClick={() => {
                      if (confirm('Are you sure you want to delete this testimonial?')) {
                        deleteTestimonial(testimonial.id)
                      }
                    }}
                    className="text-red-400 hover:text-white p-1 rounded"
                  >
                    <Trash2 size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const BlogManagement = () => (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Blog Management</h2>
        <button 
          onClick={() => {
            setEditingPost(null)
            setBlogForm({
              title: '',
              excerpt: '',
              content: '',
              author: '',
              authorRole: '',
              authorImage: '/api/placeholder/40/40',
              category: '',
              tags: '',
              readTime: '',
              featured: false,
              image: '/api/placeholder/600/400'
            })
            setShowBlogModal(true)
          }}
          className="bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white px-4 py-2 rounded-lg flex items-center space-x-2"
        >
          <Plus size={16} />
          <span>New Post</span>
        </button>
      </div>

      <div className="grid gap-6">
        {blogPosts.map((post) => (
          <div key={post.id} className="glass rounded-lg p-6">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <div className="flex items-center space-x-3 mb-3">
                  <h3 className="text-xl font-semibold text-white">{post.title}</h3>
                  {post.featured && (
                    <span className="bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded text-xs">
                      Featured
                    </span>
                  )}
                  <span className={`px-3 py-1 rounded-full text-xs ${
                    post.status === 'published' ? 'bg-green-500/20 text-green-400' :
                    'bg-orange-500/20 text-orange-400'
                  }`}>
                    {post.status}
                  </span>
                </div>
                
                <p className="text-gray-300 mb-3">{post.excerpt}</p>
                
                <div className="flex items-center space-x-4 text-sm text-gray-400">
                  <span>By {post.author}</span>
                  <span>•</span>
                  <span>{post.category}</span>
                  <span>•</span>
                  <span>{post.publishDate}</span>
                  <span>•</span>
                  <span>{post.views} views</span>
                </div>
                
                <div className="flex flex-wrap gap-2 mt-3">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-700/50 text-gray-300 px-2 py-1 rounded text-xs"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <div className="flex space-x-2 ml-4">
                <button 
                  onClick={() => {
                    alert(`Blog Post: ${post.title}\n\nContent: ${post.content.substring(0, 200)}...`)
                  }}
                  className="text-[#44bee7] hover:text-white p-2 rounded"
                  title="View Post"
                >
                  <Eye size={16} />
                </button>
                <button 
                  onClick={() => {
                    const newStatus = post.status === 'published' ? 'draft' : 'published'
                    updateBlogPost(post.id, { status: newStatus })
                    alert(`Post ${newStatus === 'published' ? 'published' : 'moved to draft'}!`)
                  }}
                  className="text-green-400 hover:text-white p-2 rounded"
                  title={post.status === 'published' ? 'Move to Draft' : 'Publish'}
                >
                  <Edit size={16} />
                </button>
                <button 
                  onClick={() => {
                    if (confirm('Are you sure you want to delete this blog post?')) {
                      deleteBlogPost(post.id)
                    }
                  }}
                  className="text-red-400 hover:text-white p-2 rounded"
                  title="Delete Post"
                >
                  <Trash2 size={16} />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
    { id: 'submissions', label: 'Form Submissions', icon: FileText, badge: formSubmissions.filter(f => f.status === 'new').length },
    { id: 'chats', label: 'Live Chat', icon: MessageSquare, badge: chatSessions.filter(c => c.status === 'pending').length },
    { id: 'testimonials', label: 'Testimonials', icon: Users, badge: testimonials.filter(t => t.status === 'pending').length },
    { id: 'blog', label: 'Blog Posts', icon: Globe },
    { id: 'settings', label: 'Settings', icon: Settings },
  ]

  // Submission Detail Modal Component
  const SubmissionDetailModal = () => {
    if (!showSubmissionModal || !selectedSubmission) return null

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass rounded-xl p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white">
              {selectedSubmission.type.charAt(0).toUpperCase() + selectedSubmission.type.slice(1)} Form Submission
            </h3>
            <button
              onClick={() => setShowSubmissionModal(false)}
              className="text-gray-400 hover:text-white"
            >
              <XCircle size={24} />
            </button>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-gray-400 text-sm">Submission ID</p>
                <p className="text-white">{selectedSubmission.id}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Submitted At</p>
                <p className="text-white">{selectedSubmission.timestamp}</p>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Status</p>
                <span className={`px-3 py-1 rounded-full text-xs ${
                  selectedSubmission.status === 'new' ? 'bg-yellow-500/20 text-yellow-400' :
                  selectedSubmission.status === 'read' ? 'bg-blue-500/20 text-blue-400' :
                  'bg-green-500/20 text-green-400'
                }`}>
                  {selectedSubmission.status}
                </span>
              </div>
              <div>
                <p className="text-gray-400 text-sm">Type</p>
                <p className="text-white capitalize">{selectedSubmission.type}</p>
              </div>
            </div>

            <div className="border-t border-white/10 pt-4">
              <h4 className="text-white font-semibold mb-3">Form Data</h4>
              <div className="space-y-3">
                {Object.entries(selectedSubmission.data).map(([key, value]) => (
                  <div key={key}>
                    <p className="text-gray-400 text-sm capitalize">{key.replace(/([A-Z])/g, ' $1')}</p>
                    <p className="text-white break-words">
                      {typeof value === 'string' ? value : String(value || 'N/A')}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex space-x-3 pt-4 border-t border-white/10">
              <button
                onClick={() => handleFormSubmissionResponse(selectedSubmission)}
                className="bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-all"
              >
                <Send size={16} />
                <span>Send Email Notification</span>
              </button>
              <button
                onClick={() => setShowSubmissionModal(false)}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  // Blog Post Modal Component
  const BlogPostModal = () => {
    if (!showBlogModal) return null
    
    const isEdit = editingPost !== null

    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="glass rounded-xl p-6 w-full max-w-2xl max-h-[80vh] overflow-y-auto"
        >
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-xl font-bold text-white">
              {isEdit ? 'Edit' : 'New'} Blog Post
            </h3>
            <button
              onClick={() => setShowBlogModal(false)}
              className="text-gray-400 hover:text-white"
            >
              <XCircle size={24} />
            </button>
          </div>

          <div className="space-y-4">
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-white mb-2">Title</label>
                <input
                  type="text"
                  value={blogForm.title}
                  onChange={(e) => setBlogForm({ ...blogForm, title: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:ring-2 focus:ring-[#44bee7]/20"
                  placeholder="Enter blog post title"
                />
              </div>
              <div>
                <label className="block text-white mb-2">Excerpt</label>
                <textarea
                  value={blogForm.excerpt}
                  onChange={(e) => setBlogForm({ ...blogForm, excerpt: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:ring-2 focus:ring-[#44bee7]/20"
                  placeholder="Enter a short excerpt for the post"
                  rows={3}
                />
              </div>
              <div>
                <label className="block text-white mb-2">Content</label>
                <textarea
                  value={blogForm.content}
                  onChange={(e) => setBlogForm({ ...blogForm, content: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:ring-2 focus:ring-[#44bee7]/20"
                  placeholder="Enter the main content of the post"
                  rows={6}
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-2">Author</label>
                  <input
                    type="text"
                    value={blogForm.author}
                    onChange={(e) => setBlogForm({ ...blogForm, author: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:ring-2 focus:ring-[#44bee7]/20"
                    placeholder="Enter author's name"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Author Role</label>
                  <input
                    type="text"
                    value={blogForm.authorRole}
                    onChange={(e) => setBlogForm({ ...blogForm, authorRole: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:ring-2 focus:ring-[#44bee7]/20"
                    placeholder="Enter author's role"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-2">Category</label>
                  <input
                    type="text"
                    value={blogForm.category}
                    onChange={(e) => setBlogForm({ ...blogForm, category: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:ring-2 focus:ring-[#44bee7]/20"
                    placeholder="Enter post category"
                  />
                </div>
                <div>
                  <label className="block text-white mb-2">Tags</label>
                  <input
                    type="text"
                    value={blogForm.tags}
                    onChange={(e) => setBlogForm({ ...blogForm, tags: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:ring-2 focus:ring-[#44bee7]/20"
                    placeholder="Enter post tags, separated by commas"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-white mb-2">Read Time</label>
                  <input
                    type="text"
                    value={blogForm.readTime}
                    onChange={(e) => setBlogForm({ ...blogForm, readTime: e.target.value })}
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:ring-2 focus:ring-[#44bee7]/20"
                    placeholder="Enter estimated read time (e.g., 5 min)"
                  />
                </div>
                <div className="flex flex-col">
                  <label className="block text-white mb-2">Featured</label>
                  <div className="flex items-center">
                    <input
                      type="checkbox"
                      checked={blogForm.featured}
                      onChange={(e) => setBlogForm({ ...blogForm, featured: e.target.checked })}
                      className="w-5 h-5 text-[#44bee7] rounded focus:ring-2 focus:ring-[#44bee7]/20"
                    />
                    <span className="ml-2 text-white text-sm">Mark as featured post</span>
                  </div>
                </div>
              </div>
              <div>
                <label className="block text-white mb-2">Image</label>
                <input
                  type="text"
                  value={blogForm.image}
                  onChange={(e) => setBlogForm({ ...blogForm, image: e.target.value })}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:ring-2 focus:ring-[#44bee7]/20"
                  placeholder="Enter image URL"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-3 pt-4 border-t border-white/10">
              <button
                onClick={() => {
                  if (isEdit && editingPost) {
                    const tagsArray = blogForm.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)
                    updateBlogPost(editingPost.id, { ...blogForm, tags: tagsArray })
                    alert('Blog post updated successfully!')
                  } else {
                    // Create new blog post
                    const tagsArray = blogForm.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)
                    const newPost: BlogPost = {
                      id: Date.now().toString(),
                      ...blogForm,
                      tags: tagsArray,
                      status: 'draft',
                      publishDate: new Date().toISOString().split('T')[0],
                      views: 0,
                      comments: 0
                    }
                    addBlogPost(newPost)
                    alert('New blog post created!')
                  }
                  setShowBlogModal(false)
                  setBlogForm({
                    title: '',
                    excerpt: '',
                    content: '',
                    author: '',
                    authorRole: '',
                    authorImage: '/api/placeholder/40/40',
                    category: '',
                    tags: '',
                    readTime: '',
                    featured: false,
                    image: '/api/placeholder/600/400'
                  })
                  setEditingPost(null)
                }}
                className="bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:shadow-lg transition-all"
              >
                <Send size={16} />
                <span>{isEdit ? 'Update Post' : 'Create Post'}</span>
              </button>
              <button
                onClick={() => setShowBlogModal(false)}
                className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-64 bg-black/50 border-r border-white/10 min-h-screen">
          <div className="p-6">
            <div className="flex items-center space-x-3 mb-8">
              <Shield className="w-8 h-8 text-[#44bee7]" />
              <div>
                <h2 className="text-white font-bold">Admin Panel</h2>
                <p className="text-gray-400 text-sm">Sirius Solutions</p>
              </div>
            </div>
            
            <nav className="space-y-2">
              {sidebarItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`w-full flex items-center justify-between px-4 py-3 rounded-lg transition-all ${
                    activeTab === item.id
                      ? 'bg-[#44bee7]/20 text-[#44bee7]'
                      : 'text-gray-300 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <item.icon size={20} />
                    <span>{item.label}</span>
                  </div>
                  {item.badge && item.badge > 0 && (
                    <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                      {item.badge}
                    </span>
                  )}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-8">
          {activeTab === 'dashboard' && <DashboardOverview />}
          {activeTab === 'submissions' && <FormSubmissionsTab />}
          {activeTab === 'chats' && <ChatManagementTab />}
          {activeTab === 'testimonials' && <TestimonialManagement />}
          {activeTab === 'blog' && <BlogManagement />}
          {activeTab === 'settings' && (
            <div className="glass rounded-lg p-6">
              <h2 className="text-2xl font-bold text-white mb-4">Settings</h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-white mb-2">Email Notifications</label>
                  <p className="text-gray-300">All form submissions and chat messages are sent to: mujeebrathore4@gmail.com</p>
                </div>
                <div>
                  <label className="block text-white mb-2">Admin Password</label>
                  <button className="bg-[#44bee7] text-white px-4 py-2 rounded-lg">
                    Change Password
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Submission Detail Modal */}
      <SubmissionDetailModal />

      {/* Blog Post Modal */}
      <BlogPostModal />
    </div>
  )
}

export default AdminDashboard
