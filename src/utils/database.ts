import type { BlogPost, Testimonial, FormSubmission, ChatSession } from '../context/DataContext'

// Database interface for persistence
export interface DatabaseData {
  blogPosts: BlogPost[]
  testimonials: Testimonial[]
  formSubmissions: FormSubmission[]
  chatSessions: ChatSession[]
  lastUpdated: string
}

// Local storage keys
const DB_KEYS = {
  BLOG_POSTS: 'sirius_blog_posts',
  TESTIMONIALS: 'sirius_testimonials',
  FORM_SUBMISSIONS: 'sirius_form_submissions',
  CHAT_SESSIONS: 'sirius_chat_sessions',
  LAST_UPDATED: 'sirius_last_updated'
}

class DatabaseService {
  private isClient = typeof window !== 'undefined'

  // Save data to localStorage (client-side persistence)
  private saveToStorage<T>(key: string, data: T): void {
    if (!this.isClient) return
    
    try {
      localStorage.setItem(key, JSON.stringify(data))
      localStorage.setItem(DB_KEYS.LAST_UPDATED, new Date().toISOString())
    } catch (error) {
      console.error('Failed to save to localStorage:', error)
    }
  }

  // Load data from localStorage
  private loadFromStorage<T>(key: string, defaultValue: T): T {
    if (!this.isClient) return defaultValue
    
    try {
      const stored = localStorage.getItem(key)
      return stored ? JSON.parse(stored) : defaultValue
    } catch (error) {
      console.error('Failed to load from localStorage:', error)
      return defaultValue
    }
  }

  // Blog Posts
  saveBlogPosts(posts: BlogPost[]): void {
    this.saveToStorage(DB_KEYS.BLOG_POSTS, posts)
  }

  loadBlogPosts(): BlogPost[] {
    return this.loadFromStorage(DB_KEYS.BLOG_POSTS, [])
  }

  // Testimonials
  saveTestimonials(testimonials: Testimonial[]): void {
    this.saveToStorage(DB_KEYS.TESTIMONIALS, testimonials)
  }

  loadTestimonials(): Testimonial[] {
    return this.loadFromStorage(DB_KEYS.TESTIMONIALS, [])
  }

  // Form Submissions
  saveFormSubmissions(submissions: FormSubmission[]): void {
    this.saveToStorage(DB_KEYS.FORM_SUBMISSIONS, submissions)
  }

  loadFormSubmissions(): FormSubmission[] {
    return this.loadFromStorage(DB_KEYS.FORM_SUBMISSIONS, [])
  }

  // Chat Sessions
  saveChatSessions(sessions: ChatSession[]): void {
    this.saveToStorage(DB_KEYS.CHAT_SESSIONS, sessions)
  }

  loadChatSessions(): ChatSession[] {
    return this.loadFromStorage(DB_KEYS.CHAT_SESSIONS, [])
  }

  // Backup and restore
  exportData(): DatabaseData {
    return {
      blogPosts: this.loadBlogPosts(),
      testimonials: this.loadTestimonials(),
      formSubmissions: this.loadFormSubmissions(),
      chatSessions: this.loadChatSessions(),
      lastUpdated: localStorage.getItem(DB_KEYS.LAST_UPDATED) || new Date().toISOString()
    }
  }

  importData(data: DatabaseData): void {
    this.saveBlogPosts(data.blogPosts)
    this.saveTestimonials(data.testimonials)
    this.saveFormSubmissions(data.formSubmissions)
    this.saveChatSessions(data.chatSessions)
  }

  // Clear all data
  clearAllData(): void {
    if (!this.isClient) return
    
    Object.values(DB_KEYS).forEach(key => {
      localStorage.removeItem(key)
    })
  }

  // Get storage stats
  getStorageStats(): { used: number; available: number; percentage: number } {
    if (!this.isClient) return { used: 0, available: 0, percentage: 0 }
    
    try {
      const used = new Blob(Object.values(localStorage)).size
      const available = 5 * 1024 * 1024 // 5MB typical localStorage limit
      const percentage = (used / available) * 100
      
      return { used, available, percentage }
    } catch (error) {
      console.error('Failed to get storage stats:', error)
      return { used: 0, available: 0, percentage: 0 }
    }
  }
}

// Create singleton instance
export const database = new DatabaseService()

// Advanced database functionality for future expansion
export class AdvancedDatabaseService extends DatabaseService {
  // Simulate API calls for future backend integration
  async saveBlogPostToAPI(post: BlogPost): Promise<boolean> {
    try {
      // This would be replaced with actual API call
      // const response = await fetch('/api/blog-posts', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(post)
      // })
      // return response.ok
      
      // For now, just use localStorage
      const posts = this.loadBlogPosts()
      const updatedPosts = [post, ...posts.filter(p => p.id !== post.id)]
      this.saveBlogPosts(updatedPosts)
      return true
    } catch (error) {
      console.error('Failed to save blog post:', error)
      return false
    }
  }

  async saveFormSubmissionToAPI(submission: FormSubmission): Promise<boolean> {
    try {
      // This would be replaced with actual API call
      // const response = await fetch('/api/form-submissions', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(submission)
      // })
      // return response.ok
      
      // For now, just use localStorage
      const submissions = this.loadFormSubmissions()
      this.saveFormSubmissions([submission, ...submissions])
      return true
    } catch (error) {
      console.error('Failed to save form submission:', error)
      return false
    }
  }

  async saveChatSessionToAPI(session: ChatSession): Promise<boolean> {
    try {
      // This would be replaced with actual API call
      const sessions = this.loadChatSessions()
      const updatedSessions = [session, ...sessions.filter(s => s.id !== session.id)]
      this.saveChatSessions(updatedSessions)
      return true
    } catch (error) {
      console.error('Failed to save chat session:', error)
      return false
    }
  }

  // Search functionality
  searchBlogPosts(query: string): BlogPost[] {
    const posts = this.loadBlogPosts()
    const lowercaseQuery = query.toLowerCase()
    
    return posts.filter(post => 
      post.title.toLowerCase().includes(lowercaseQuery) ||
      post.excerpt.toLowerCase().includes(lowercaseQuery) ||
      post.content.toLowerCase().includes(lowercaseQuery) ||
      post.author.toLowerCase().includes(lowercaseQuery) ||
      post.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
    )
  }

  // Analytics
  getBlogAnalytics() {
    const posts = this.loadBlogPosts()
    const totalViews = posts.reduce((sum, post) => sum + post.views, 0)
    const totalComments = posts.reduce((sum, post) => sum + post.comments, 0)
    const publishedPosts = posts.filter(post => post.status === 'published').length
    const draftPosts = posts.filter(post => post.status === 'draft').length
    
    return {
      totalPosts: posts.length,
      publishedPosts,
      draftPosts,
      totalViews,
      totalComments,
      averageViewsPerPost: posts.length > 0 ? totalViews / posts.length : 0
    }
  }

  getFormAnalytics() {
    const submissions = this.loadFormSubmissions()
    const byStatus = submissions.reduce((acc, sub) => {
      acc[sub.status] = (acc[sub.status] || 0) + 1
      return acc
    }, {} as Record<string, number>)
    
    const byType = submissions.reduce((acc, sub) => {
      acc[sub.type] = (acc[sub.type] || 0) + 1
      return acc
    }, {} as Record<string, number>)
    
    return {
      total: submissions.length,
      byStatus,
      byType,
      recent: submissions.slice(0, 10) // Last 10 submissions
    }
  }
}

export const advancedDatabase = new AdvancedDatabaseService()

// Utility functions for data validation
export const validateBlogPost = (post: Partial<BlogPost>): post is BlogPost => {
  return !!(
    post.id &&
    post.title &&
    post.excerpt &&
    post.content &&
    post.author &&
    post.authorRole &&
    post.category &&
    post.tags &&
    post.status &&
    post.publishDate &&
    post.readTime
  )
}

export const validateFormSubmission = (submission: Partial<FormSubmission>): submission is FormSubmission => {
  return !!(
    submission.id &&
    submission.type &&
    submission.data &&
    submission.timestamp &&
    submission.status
  )
}

export const validateTestimonial = (testimonial: Partial<Testimonial>): testimonial is Testimonial => {
  return !!(
    testimonial.id &&
    testimonial.name &&
    testimonial.company &&
    testimonial.position &&
    testimonial.content &&
    testimonial.rating &&
    testimonial.status &&
    testimonial.submittedDate
  )
}
