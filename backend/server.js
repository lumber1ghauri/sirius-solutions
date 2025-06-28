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
    status: 'pending',
    date: new Date().toISOString()
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
    status: 'new',
    timestamp: new Date().toISOString()
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
    return res.status(404).json({ error: 'Submission not found' })
  }
  
  submissions[index] = { ...submissions[index], ...req.body }
  
  if (writeData(DB_FILES.formSubmissions, submissions)) {
    res.json(submissions[index])
  } else {
    res.status(500).json({ error: 'Failed to update submission' })
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
    status: 'active',
    messages: [],
    createdAt: new Date().toISOString(),
    lastUpdated: new Date().toISOString()
  }
  
  sessions.unshift(newSession)
  
  if (writeData(DB_FILES.chatSessions, sessions)) {
    res.status(201).json(newSession)
  } else {
    res.status(500).json({ error: 'Failed to create chat session' })
  }
})

app.put('/api/chat-sessions/:id', (req, res) => {
  const sessions = readData(DB_FILES.chatSessions)
  const index = sessions.findIndex(s => s.id === req.params.id)
  
  if (index === -1) {
    return res.status(404).json({ error: 'Chat session not found' })
  }
  
  sessions[index] = {
    ...sessions[index],
    ...req.body,
    lastUpdated: new Date().toISOString()
  }
  
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
  sessions[index].lastUpdated = new Date().toISOString()
  
  if (writeData(DB_FILES.chatSessions, sessions)) {
    res.json(newMessage)
  } else {
    res.status(500).json({ error: 'Failed to add message' })
  }
})

// Analytics API
app.get('/api/analytics/forms', (req, res) => {
  const submissions = readData(DB_FILES.formSubmissions)
  
  const analytics = {
    totalSubmissions: submissions.length,
    byStatus: {
      new: submissions.filter(s => s.status === 'new').length,
      read: submissions.filter(s => s.status === 'read').length,
      responded: submissions.filter(s => s.status === 'responded').length
    },
    byType: submissions.reduce((acc, s) => {
      acc[s.type] = (acc[s.type] || 0) + 1
      return acc
    }, {}),
    recent: submissions.slice(0, 10)
  }
  
  res.json(analytics)
})

app.get('/api/analytics/chats', (req, res) => {
  const sessions = readData(DB_FILES.chatSessions)
  
  const analytics = {
    totalSessions: sessions.length,
    activeSessions: sessions.filter(s => s.status === 'active').length,
    byPriority: {
      low: sessions.filter(s => s.priority === 'low').length,
      medium: sessions.filter(s => s.priority === 'medium').length,
      high: sessions.filter(s => s.priority === 'high').length,
      critical: sessions.filter(s => s.priority === 'critical').length
    },
    averageMessagesPerSession: sessions.reduce((sum, s) => sum + s.messages.length, 0) / sessions.length || 0,
    recentSessions: sessions.slice(0, 10)
  }
  
  res.json(analytics)
})

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    uptime: process.uptime(),
    memory: process.memoryUsage()
  })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
