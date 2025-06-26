import React, { createContext, useContext, useState, useEffect } from 'react'
import type { ReactNode } from 'react'
import { database } from '../utils/database'
import { apiService, isApiAvailable } from '../utils/apiService'

// Types for our data structures
export interface BlogPost {
  id: string
  title: string
  excerpt: string
  content: string
  author: string
  authorRole: string
  authorImage: string
  category: string
  tags: string[]
  status: 'draft' | 'published'
  publishDate: string
  readTime: string
  views: number
  comments: number
  featured: boolean
  image?: string
}

export interface Testimonial {
  id: string
  name: string
  company: string
  position: string
  content: string
  rating: number
  image: string
  status: 'pending' | 'approved' | 'rejected'
  submittedDate: string
}

export interface FormSubmission {
  id: string
  type: 'contact' | 'career' | 'help' | 'newsletter'
  data: Record<string, unknown>
  timestamp: string
  status: 'new' | 'read' | 'responded'
}

export interface ChatSession {
  id: string
  customerName: string
  email: string
  subject: string
  messages: Array<{
    id: string
    sender: 'customer' | 'admin'
    message: string
    timestamp: string
  }>
  status: 'active' | 'closed' | 'pending'
  priority: 'low' | 'medium' | 'high' | 'critical'
}

interface DataContextType {
  // Blog Posts
  blogPosts: BlogPost[]
  setBlogPosts: React.Dispatch<React.SetStateAction<BlogPost[]>>
  addBlogPost: (post: BlogPost) => void
  updateBlogPost: (id: string, updates: Partial<BlogPost>) => void
  deleteBlogPost: (id: string) => void
  getPublishedPosts: () => BlogPost[]
  getFeaturedPosts: () => BlogPost[]

  // Testimonials
  testimonials: Testimonial[]
  setTestimonials: React.Dispatch<React.SetStateAction<Testimonial[]>>
  addTestimonial: (testimonial: Testimonial) => void
  updateTestimonial: (id: string, updates: Partial<Testimonial>) => void
  deleteTestimonial: (id: string) => void
  getApprovedTestimonials: () => Testimonial[]

  // Form Submissions
  formSubmissions: FormSubmission[]
  setFormSubmissions: React.Dispatch<React.SetStateAction<FormSubmission[]>>
  addFormSubmission: (submission: FormSubmission) => void
  updateFormSubmission: (id: string, updates: Partial<FormSubmission>) => void

  // Chat Sessions
  chatSessions: ChatSession[]
  setChatSessions: React.Dispatch<React.SetStateAction<ChatSession[]>>
  addChatSession: (session: ChatSession) => void
  updateChatSession: (id: string, updates: Partial<ChatSession>) => void
  addChatMessage: (sessionId: string, message: ChatSession['messages'][0]) => void
}

const DataContext = createContext<DataContextType | undefined>(undefined)

// Initial sample data
const initialBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of AI in Software Development',
    excerpt: 'Exploring how AI is transforming the development landscape and what it means for developers and businesses.',
    content: `
      Artificial Intelligence is revolutionizing the software development industry in unprecedented ways. From automated code generation to intelligent debugging, AI tools are becoming indispensable for modern developers.

      ## Key Areas of Impact

      ### 1. Code Generation and Assistance
      AI-powered tools like GitHub Copilot and GPT-based assistants are helping developers write code faster and more efficiently. These tools can generate boilerplate code, suggest optimizations, and even help with complex algorithms.

      ### 2. Automated Testing
      Machine learning algorithms can now generate comprehensive test cases, identify edge cases that human testers might miss, and continuously improve test coverage based on real-world usage patterns.

      ### 3. Bug Detection and Prevention
      Advanced static analysis tools powered by AI can detect potential bugs, security vulnerabilities, and performance issues before they make it to production.

      ## The Road Ahead

      As AI continues to evolve, we can expect even more sophisticated tools that will further streamline the development process. However, the human element remains crucial for creativity, problem-solving, and understanding business requirements.

      At Sirius Solutions, we're at the forefront of integrating these AI technologies into our development workflows, ensuring our clients benefit from the latest innovations while maintaining the highest quality standards.
    `,
    author: 'M Mujeeb',
    authorRole: 'AI Specialist & Co-Founder',
    authorImage: '/api/placeholder/40/40',
    category: 'AI/ML',
    tags: ['AI', 'Software Development', 'Future Technology', 'Machine Learning'],
    status: 'published',
    publishDate: '2025-06-20',
    readTime: '8 min read',
    views: 1250,
    comments: 23,
    featured: true,
    image: '/api/placeholder/600/400'
  },
  {
    id: '2',
    title: 'Building Scalable Web Applications with Modern Architecture',
    excerpt: 'Best practices for designing and implementing scalable web applications that can grow with your business.',
    content: `
      Building scalable web applications requires careful planning, proper architecture decisions, and the right technology choices. In this comprehensive guide, we'll explore the key principles and practices for creating applications that can handle growth effectively.

      ## Architectural Patterns

      ### Microservices Architecture
      Breaking down monolithic applications into smaller, independent services offers numerous benefits for scalability and maintainability.

      ### Event-Driven Architecture
      Implementing event-driven patterns helps decouple services and enables better scalability through asynchronous processing.

      ## Performance Optimization

      ### Caching Strategies
      Implementing effective caching at multiple levels can dramatically improve application performance and reduce server load.

      ### Database Optimization
      Proper database design, indexing, and query optimization are crucial for maintaining performance as data grows.

      ## Deployment and Infrastructure

      ### Container Orchestration
      Using technologies like Kubernetes for container orchestration provides scalability and reliability benefits.

      ### Cloud-Native Solutions
      Leveraging cloud services and serverless architectures can provide automatic scaling capabilities.

      At Sirius Solutions, we specialize in designing and implementing scalable architectures that grow with your business needs.
    `,
    author: 'Hassan A',
    authorRole: 'Full-Stack Developer & Co-Founder',
    authorImage: '/api/placeholder/40/40',
    category: 'Web Development',
    tags: ['Scalability', 'Architecture', 'Performance', 'Cloud'],
    status: 'published',
    publishDate: '2025-06-15',
    readTime: '12 min read',
    views: 890,
    comments: 15,
    featured: false,
    image: '/api/placeholder/600/400'
  },
  {
    id: '3',
    title: 'The Importance of User Experience in Modern Applications',
    excerpt: 'Why UX design is crucial for application success and how to implement user-centered design principles.',
    content: `
      User Experience (UX) has become a critical differentiator in today's competitive digital landscape. Applications that prioritize user experience consistently outperform those that don't, both in user satisfaction and business metrics.

      ## Core UX Principles

      ### User-Centered Design
      Putting users at the center of the design process ensures that applications meet real user needs and expectations.

      ### Accessibility
      Designing for accessibility ensures that applications are usable by people with diverse abilities and needs.

      ## Research and Testing

      ### User Research
      Understanding your users through research helps inform design decisions and prevents costly assumptions.

      ### Usability Testing
      Regular testing with real users helps identify issues early and validates design decisions.

      ## Design Systems

      ### Consistency
      Maintaining consistency across interfaces improves usability and reduces cognitive load for users.

      ### Component Libraries
      Building reusable component libraries ensures consistency and speeds up development.

      Our UI/UX team at Sirius Solutions specializes in creating intuitive, accessible, and engaging user experiences that drive business success.
    `,
    author: 'GM Ukasha',
    authorRole: 'Automation Engineer & Co-Founder',
    authorImage: '/api/placeholder/40/40',
    category: 'UI/UX Design',
    tags: ['UX Design', 'User Research', 'Accessibility', 'Design Systems'],
    status: 'draft',
    publishDate: '2025-06-10',
    readTime: '6 min read',
    views: 450,
    comments: 8,
    featured: false,
    image: '/api/placeholder/600/400'
  }
]

const initialTestimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Wilson',
    company: 'Digital Innovations',
    position: 'CTO',
    content: 'Sirius Solutions delivered exceptional results for our project. Their team demonstrated deep technical expertise and excellent communication throughout the development process.',
    rating: 5,
    image: '/api/placeholder/60/60',
    status: 'approved',
    submittedDate: '2025-06-25'
  },
  {
    id: '2',
    name: 'Michael Rodriguez',
    company: 'TechStart Inc.',
    position: 'Founder',
    content: 'Working with Sirius Solutions was a game-changer for our startup. They helped us build a scalable platform that has been instrumental in our growth.',
    rating: 5,
    image: '/api/placeholder/60/60',
    status: 'approved',
    submittedDate: '2025-06-20'
  },
  {
    id: '3',
    name: 'Emma Thompson',
    company: 'Global Corp',
    position: 'Project Manager',
    content: 'The quality of work and attention to detail from Sirius Solutions exceeded our expectations. Highly recommended for any software development needs.',
    rating: 5,
    image: '/api/placeholder/60/60',
    status: 'pending',
    submittedDate: '2025-06-24'
  }
]

export const DataProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [useAPI, setUseAPI] = useState(false)
  
  // Initialize state with data from database or fallback to initial data
  const [blogPosts, setBlogPosts] = useState<BlogPost[]>(() => {
    const savedPosts = database.loadBlogPosts()
    return savedPosts.length > 0 ? savedPosts : initialBlogPosts
  })
  
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => {
    const savedTestimonials = database.loadTestimonials()
    return savedTestimonials.length > 0 ? savedTestimonials : initialTestimonials
  })
  
  const [formSubmissions, setFormSubmissions] = useState<FormSubmission[]>(() => {
    return database.loadFormSubmissions()
  })
  
  const [chatSessions, setChatSessions] = useState<ChatSession[]>(() => {
    return database.loadChatSessions()
  })

  // Check if API is available on mount
  useEffect(() => {
    const checkAPI = async () => {
      const available = await isApiAvailable()
      setUseAPI(available)
      
      if (available) {
        // Load data from API if available
        try {
          const blogResponse = await apiService.getBlogPosts()
          if (blogResponse.data && blogResponse.data.length > 0) {
            setBlogPosts(blogResponse.data)
          }
          
          const testimonialsResponse = await apiService.getTestimonials()
          if (testimonialsResponse.data) {
            setTestimonials(testimonialsResponse.data)
          }
          
          const formsResponse = await apiService.getFormSubmissions()
          if (formsResponse.data) {
            setFormSubmissions(formsResponse.data)
          }
          
          const chatsResponse = await apiService.getChatSessions()
          if (chatsResponse.data) {
            setChatSessions(chatsResponse.data)
          }
        } catch (error) {
          console.error('Failed to load data from API:', error)
          setUseAPI(false)
        }
      }
    }
    
    checkAPI()
  }, [])

  // Save to database/API whenever data changes
  useEffect(() => {
    if (useAPI) {
      // Data is managed by API calls, no need to save here
      return
    }
    database.saveBlogPosts(blogPosts)
  }, [blogPosts, useAPI])

  useEffect(() => {
    if (useAPI) return
    database.saveTestimonials(testimonials)
  }, [testimonials, useAPI])

  useEffect(() => {
    if (useAPI) return
    database.saveFormSubmissions(formSubmissions)
  }, [formSubmissions, useAPI])

  useEffect(() => {
    if (useAPI) return
    database.saveChatSessions(chatSessions)
  }, [chatSessions, useAPI])

  // Blog post functions
  const addBlogPost = async (post: BlogPost) => {
    if (useAPI) {
      try {
        const response = await apiService.createBlogPost(post)
        if (response.data) {
          setBlogPosts(prev => [response.data!, ...prev.filter(p => p.id !== response.data!.id)])
          return
        }
      } catch (error) {
        console.error('Failed to create blog post via API:', error)
      }
    }
    
    // Fallback to local storage
    setBlogPosts(prev => [post, ...prev])
  }

  const updateBlogPost = async (id: string, updates: Partial<BlogPost>) => {
    if (useAPI) {
      try {
        const response = await apiService.updateBlogPost(id, updates)
        if (response.data) {
          setBlogPosts(prev => prev.map(post => 
            post.id === id ? response.data! : post
          ))
          return
        }
      } catch (error) {
        console.error('Failed to update blog post via API:', error)
      }
    }
    
    // Fallback to local storage
    setBlogPosts(prev => prev.map(post => 
      post.id === id ? { ...post, ...updates } : post
    ))
  }

  const deleteBlogPost = async (id: string) => {
    if (useAPI) {
      try {
        const response = await apiService.deleteBlogPost(id)
        if (response.data) {
          setBlogPosts(prev => prev.filter(post => post.id !== id))
          return
        }
      } catch (error) {
        console.error('Failed to delete blog post via API:', error)
      }
    }
    
    // Fallback to local storage
    setBlogPosts(prev => prev.filter(post => post.id !== id))
  }

  const getPublishedPosts = () => {
    return blogPosts.filter(post => post.status === 'published')
  }

  const getFeaturedPosts = () => {
    return blogPosts.filter(post => post.featured && post.status === 'published')
  }

  // Testimonial functions
  const addTestimonial = (testimonial: Testimonial) => {
    setTestimonials(prev => [testimonial, ...prev])
  }

  const updateTestimonial = (id: string, updates: Partial<Testimonial>) => {
    setTestimonials(prev => prev.map(testimonial => 
      testimonial.id === id ? { ...testimonial, ...updates } : testimonial
    ))
  }

  const deleteTestimonial = (id: string) => {
    setTestimonials(prev => prev.filter(testimonial => testimonial.id !== id))
  }

  const getApprovedTestimonials = () => {
    return testimonials.filter(testimonial => testimonial.status === 'approved')
  }

  // Form submission functions
  const addFormSubmission = async (submission: FormSubmission) => {
    if (useAPI) {
      try {
        const response = await apiService.createFormSubmission(submission)
        if (response.data) {
          setFormSubmissions(prev => [response.data!, ...prev])
          return
        }
      } catch (error) {
        console.error('Failed to create form submission via API:', error)
      }
    }
    
    // Fallback to local storage
    setFormSubmissions(prev => [submission, ...prev])
  }

  const updateFormSubmission = async (id: string, updates: Partial<FormSubmission>) => {
    if (useAPI) {
      try {
        const response = await apiService.updateFormSubmission(id, updates)
        if (response.data) {
          setFormSubmissions(prev => prev.map(submission => 
            submission.id === id ? response.data! : submission
          ))
          return
        }
      } catch (error) {
        console.error('Failed to update form submission via API:', error)
      }
    }
    
    // Fallback to local storage
    setFormSubmissions(prev => prev.map(submission => 
      submission.id === id ? { ...submission, ...updates } : submission
    ))
  }

  // Chat session functions
  const addChatSession = (session: ChatSession) => {
    setChatSessions(prev => [session, ...prev])
  }

  const updateChatSession = (id: string, updates: Partial<ChatSession>) => {
    setChatSessions(prev => prev.map(session => 
      session.id === id ? { ...session, ...updates } : session
    ))
  }

  const addChatMessage = (sessionId: string, message: ChatSession['messages'][0]) => {
    setChatSessions(prev => prev.map(session => 
      session.id === sessionId 
        ? { ...session, messages: [...session.messages, message] }
        : session
    ))
  }

  const value: DataContextType = {
    blogPosts,
    setBlogPosts,
    addBlogPost,
    updateBlogPost,
    deleteBlogPost,
    getPublishedPosts,
    getFeaturedPosts,
    testimonials,
    setTestimonials,
    addTestimonial,
    updateTestimonial,
    deleteTestimonial,
    getApprovedTestimonials,
    formSubmissions,
    setFormSubmissions,
    addFormSubmission,
    updateFormSubmission,
    chatSessions,
    setChatSessions,
    addChatSession,
    updateChatSession,
    addChatMessage
  }

  return (
    <DataContext.Provider value={value}>
      {children}
    </DataContext.Provider>
  )
}

export const useData = () => {
  const context = useContext(DataContext)
  if (context === undefined) {
    throw new Error('useData must be used within a DataProvider')
  }
  return context
}
