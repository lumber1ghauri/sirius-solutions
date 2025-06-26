const express = require('express')
const cors = require('cors')
const helmet = require('helmet')
const morgan = require('morgan')
const fs = require('fs-extra')
const path = require('path')
const { v4: uuidv4 } = require('uuid')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT || 3001

// Database file paths
const DB_DIR = path.join(__dirname, 'data')
const DB_FILES = {
  blogPosts: path.join(DB_DIR, 'blog-posts.json'),
  testimonials: path.join(DB_DIR, 'testimonials.json'),
  formSubmissions: path.join(DB_DIR, 'form-submissions.json'),
  chatSessions: path.join(DB_DIR, 'chat-sessions.json')
}

// Middleware
app.use(helmet())
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:3000'],
  credentials: true
}))
app.use(morgan('combined'))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

// Ensure data directory exists
fs.ensureDirSync(DB_DIR)

// Initialize database files if they don't exist
const initializeDB = () => {
  Object.values(DB_FILES).forEach(file => {
    if (!fs.existsSync(file)) {
      fs.writeJsonSync(file, [])
    }
  })
}

initializeDB()

// Utility functions
const readData = (file) => {
  try {
    return fs.readJsonSync(file)
  } catch (error) {
    console.error(`Error reading ${file}:`, error)
    return []
  }
}

const writeData = (file, data) => {
  try {
    fs.writeJsonSync(file, data, { spaces: 2 })
    return true
  } catch (error) {
    console.error(`Error writing to ${file}:`, error)
    return false
  }
}

// Blog Posts API
app.get('/api/blog-posts', (req, res) => {
  const posts = readData(DB_FILES.blogPosts)
  res.json(posts)
})

app.get('/api/blog-posts/:id', (req, res) => {
  const posts = readData(DB_FILES.blogPosts)
  const post = posts.find(p => p.id === req.params.id)
  
  if (!post) {
    return res.status(404).json({ error: 'Blog post not found' })
  }
  
  res.json(post)
})

app.post('/api/blog-posts', (req, res) => {
  const posts = readData(DB_FILES.blogPosts)
  const newPost = {
    id: uuidv4(),
    ...req.body,
    views: 0,
    comments: 0,
    publishDate: new Date().toISOString().split('T')[0]
  }
  
  posts.unshift(newPost)
  
  if (writeData(DB_FILES.blogPosts, posts)) {
    res.status(201).json(newPost)
  } else {
    res.status(500).json({ error: 'Failed to save blog post' })
  }
})

app.put('/api/blog-posts/:id', (req, res) => {
  const posts = readData(DB_FILES.blogPosts)
  const index = posts.findIndex(p => p.id === req.params.id)
  
  if (index === -1) {
    return res.status(404).json({ error: 'Blog post not found' })
  }
  
  posts[index] = { ...posts[index], ...req.body }
  
  if (writeData(DB_FILES.blogPosts, posts)) {
    res.json(posts[index])
  } else {
    res.status(500).json({ error: 'Failed to update blog post' })
  }
})

app.delete('/api/blog-posts/:id', (req, res) => {
  const posts = readData(DB_FILES.blogPosts)
  const filteredPosts = posts.filter(p => p.id !== req.params.id)
  
  if (posts.length === filteredPosts.length) {
    return res.status(404).json({ error: 'Blog post not found' })
  }
  
  if (writeData(DB_FILES.blogPosts, filteredPosts)) {
    res.json({ message: 'Blog post deleted successfully' })
  } else {
    res.status(500).json({ error: 'Failed to delete blog post' })
  }
})

// Testimonials API
app.get('/api/testimonials', (req, res) => {
  const testimonials = readData(DB_FILES.testimonials)
  res.json(testimonials)
})

app.post('/api/testimonials', (req, res) => {
  const testimonials = readData(DB_FILES.testimonials)
  const newTestimonial = {
    id: uuidv4(),
    ...req.body,
    submittedDate: new Date().toISOString().split('T')[0],
    status: 'pending'
  }
  
  testimonials.unshift(newTestimonial)
  
  if (writeData(DB_FILES.testimonials, testimonials)) {
    res.status(201).json(newTestimonial)
  } else {
    res.status(500).json({ error: 'Failed to save testimonial' })
  }
})

app.put('/api/testimonials/:id', (req, res) => {
  const testimonials = readData(DB_FILES.testimonials)
  const index = testimonials.findIndex(t => t.id === req.params.id)
  
  if (index === -1) {
    return res.status(404).json({ error: 'Testimonial not found' })
  }
  
  testimonials[index] = { ...testimonials[index], ...req.body }
  
  if (writeData(DB_FILES.testimonials, testimonials)) {
    res.json(testimonials[index])
  } else {
    res.status(500).json({ error: 'Failed to update testimonial' })
  }
})

app.delete('/api/testimonials/:id', (req, res) => {
  const testimonials = readData(DB_FILES.testimonials)
  const filteredTestimonials = testimonials.filter(t => t.id !== req.params.id)
  
  if (testimonials.length === filteredTestimonials.length) {
    return res.status(404).json({ error: 'Testimonial not found' })
  }
  
  if (writeData(DB_FILES.testimonials, filteredTestimonials)) {
    res.json({ message: 'Testimonial deleted successfully' })
  } else {
    res.status(500).json({ error: 'Failed to delete testimonial' })
  }
})

// Form Submissions API
app.get('/api/form-submissions', (req, res) => {
  const submissions = readData(DB_FILES.formSubmissions)
  res.json(submissions)
})

app.post('/api/form-submissions', (req, res) => {
  const submissions = readData(DB_FILES.formSubmissions)
  const newSubmission = {
    id: uuidv4(),
    ...req.body,
    timestamp: new Date().toISOString(),
    status: 'new'
  }
  
  submissions.unshift(newSubmission)
  
  if (writeData(DB_FILES.formSubmissions, submissions)) {
    res.status(201).json(newSubmission)
  } else {
    res.status(500).json({ error: 'Failed to save form submission' })
  }
})

app.put('/api/form-submissions/:id', (req, res) => {
  const submissions = readData(DB_FILES.formSubmissions)
  const index = submissions.findIndex(s => s.id === req.params.id)
  
  if (index === -1) {
    return res.status(404).json({ error: 'Form submission not found' })
  }
  
  submissions[index] = { ...submissions[index], ...req.body }
  
  if (writeData(DB_FILES.formSubmissions, submissions)) {
    res.json(submissions[index])
  } else {
    res.status(500).json({ error: 'Failed to update form submission' })
  }
})

// Chat Sessions API
app.get('/api/chat-sessions', (req, res) => {
  const sessions = readData(DB_FILES.chatSessions)
  res.json(sessions)
})

app.post('/api/chat-sessions', (req, res) => {
  const sessions = readData(DB_FILES.chatSessions)
  const newSession = {
    id: uuidv4(),
    ...req.body,
    messages: req.body.messages || []
  }
  
  sessions.unshift(newSession)
  
  if (writeData(DB_FILES.chatSessions, sessions)) {
    res.status(201).json(newSession)
  } else {
    res.status(500).json({ error: 'Failed to save chat session' })
  }
})

app.put('/api/chat-sessions/:id', (req, res) => {
  const sessions = readData(DB_FILES.chatSessions)
  const index = sessions.findIndex(s => s.id === req.params.id)
  
  if (index === -1) {
    return res.status(404).json({ error: 'Chat session not found' })
  }
  
  sessions[index] = { ...sessions[index], ...req.body }
  
  if (writeData(DB_FILES.chatSessions, sessions)) {
    res.json(sessions[index])
  } else {
    res.status(500).json({ error: 'Failed to update chat session' })
  }
})

app.post('/api/chat-sessions/:id/messages', (req, res) => {
  const sessions = readData(DB_FILES.chatSessions)
  const index = sessions.findIndex(s => s.id === req.params.id)
  
  if (index === -1) {
    return res.status(404).json({ error: 'Chat session not found' })
  }
  
  const newMessage = {
    id: uuidv4(),
    ...req.body,
    timestamp: new Date().toISOString()
  }
  
  sessions[index].messages.push(newMessage)
  
  if (writeData(DB_FILES.chatSessions, sessions)) {
    res.status(201).json(newMessage)
  } else {
    res.status(500).json({ error: 'Failed to add message' })
  }
})

// Analytics API
app.get('/api/analytics/blog', (req, res) => {
  const posts = readData(DB_FILES.blogPosts)
  
  const analytics = {
    totalPosts: posts.length,
    publishedPosts: posts.filter(p => p.status === 'published').length,
    draftPosts: posts.filter(p => p.status === 'draft').length,
    totalViews: posts.reduce((sum, p) => sum + (p.views || 0), 0),
    totalComments: posts.reduce((sum, p) => sum + (p.comments || 0), 0),
    topPosts: posts
      .filter(p => p.status === 'published')
      .sort((a, b) => (b.views || 0) - (a.views || 0))
      .slice(0, 5)
  }
  
  res.json(analytics)
})

app.get('/api/analytics/forms', (req, res) => {
  const submissions = readData(DB_FILES.formSubmissions)
  
  const byStatus = submissions.reduce((acc, sub) => {
    acc[sub.status] = (acc[sub.status] || 0) + 1
    return acc
  }, {})
  
  const byType = submissions.reduce((acc, sub) => {
    acc[sub.type] = (acc[sub.type] || 0) + 1
    return acc
  }, {})
  
  const analytics = {
    total: submissions.length,
    byStatus,
    byType,
    recent: submissions.slice(0, 10)
  }
  
  res.json(analytics)
})

// Health check
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage()
  })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong!' })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Route not found' })
})

app.listen(PORT, () => {
  console.log(`🚀 Sirius Solutions Backend API running on port ${PORT}`)
  console.log(`📊 API Health: http://localhost:${PORT}/api/health`)
  console.log(`📁 Data Directory: ${DB_DIR}`)
})
