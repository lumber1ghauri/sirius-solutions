import type { Testimonial, FormSubmission, ChatSession } from '../context/DataContext'

const API_BASE_URL = 'http://localhost:3001/api'

// API response types
interface ApiResponse<T> {
  data?: T
  error?: string
  message?: string
}

class ApiService {
  private async request<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    try {
      const url = `${API_BASE_URL}${endpoint}`
      const config: RequestInit = {
        headers: {
          'Content-Type': 'application/json',
          ...options.headers,
        },
        ...options,
      }

      const response = await fetch(url, config)
      const data = await response.json()

      if (!response.ok) {
        return { error: data.error || 'Request failed' }
      }

      return { data }
    } catch (error) {
      console.error('API request failed:', error)
      return { error: 'Network error occurred' }
    }
  }

  // Testimonials API
  async getTestimonials(): Promise<ApiResponse<Testimonial[]>> {
    return this.request<Testimonial[]>('/testimonials')
  }

  async createTestimonial(testimonial: Omit<Testimonial, 'id' | 'submittedDate' | 'status'>): Promise<ApiResponse<Testimonial>> {
    return this.request<Testimonial>('/testimonials', {
      method: 'POST',
      body: JSON.stringify(testimonial),
    })
  }

  async updateTestimonial(id: string, updates: Partial<Testimonial>): Promise<ApiResponse<Testimonial>> {
    return this.request<Testimonial>(`/testimonials/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    })
  }

  async deleteTestimonial(id: string): Promise<ApiResponse<{ message: string }>> {
    return this.request<{ message: string }>(`/testimonials/${id}`, {
      method: 'DELETE',
    })
  }

  // Form Submissions API
  async getFormSubmissions(): Promise<ApiResponse<FormSubmission[]>> {
    return this.request<FormSubmission[]>('/form-submissions')
  }

  async createFormSubmission(submission: Omit<FormSubmission, 'id' | 'timestamp' | 'status'>): Promise<ApiResponse<FormSubmission>> {
    return this.request<FormSubmission>('/form-submissions', {
      method: 'POST',
      body: JSON.stringify(submission),
    })
  }

  async updateFormSubmission(id: string, updates: Partial<FormSubmission>): Promise<ApiResponse<FormSubmission>> {
    return this.request<FormSubmission>(`/form-submissions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    })
  }

  // Chat Sessions API
  async getChatSessions(): Promise<ApiResponse<ChatSession[]>> {
    return this.request<ChatSession[]>('/chat-sessions')
  }

  async createChatSession(session: Omit<ChatSession, 'id'>): Promise<ApiResponse<ChatSession>> {
    return this.request<ChatSession>('/chat-sessions', {
      method: 'POST',
      body: JSON.stringify(session),
    })
  }

  async updateChatSession(id: string, updates: Partial<ChatSession>): Promise<ApiResponse<ChatSession>> {
    return this.request<ChatSession>(`/chat-sessions/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    })
  }

  async addChatMessage(sessionId: string, message: Omit<ChatSession['messages'][0], 'id' | 'timestamp'>): Promise<ApiResponse<ChatSession['messages'][0]>> {
    return this.request<ChatSession['messages'][0]>(`/chat-sessions/${sessionId}/messages`, {
      method: 'POST',
      body: JSON.stringify(message),
    })
  }

  // Analytics API
  async getFormAnalytics(): Promise<ApiResponse<{
    total: number
    byStatus: Record<string, number>
    byType: Record<string, number>
    recent: FormSubmission[]
  }>> {
    return this.request('/analytics/forms')
  }

  // Health check
  async healthCheck(): Promise<ApiResponse<{
    status: string
    timestamp: string
    uptime: number
    memory: object
  }>> {
    return this.request('/health')
  }

  // Blog related methods
  async getBlogPosts(): Promise<ApiResponse<any[]>> {
    return this.request<any[]>('/blog-posts')
  }

  async createBlogPost(post: any): Promise<ApiResponse<any>> {
    return this.request<any>('/blog-posts', {
      method: 'POST',
      body: JSON.stringify(post),
    })
  }

  async updateBlogPost(id: string, updates: any): Promise<ApiResponse<any>> {
    return this.request<any>(`/blog-posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    })
  }

  async deleteBlogPost(id: string): Promise<ApiResponse<{ message: string }>> {
    return this.request<{ message: string }>(`/blog-posts/${id}`, {
      method: 'DELETE',
    })
  }
}

// Create singleton instance
export const apiService = new ApiService()

// Hybrid service that falls back to localStorage if API is unavailable
export class HybridDataService {
  private isOnline = navigator.onLine

  constructor() {
    // Listen for online/offline events
    window.addEventListener('online', () => {
      this.isOnline = true
      this.syncLocalDataToServer()
    })
    
    window.addEventListener('offline', () => {
      this.isOnline = false
    })
  }

  private updateLocalCache(key: string, item: Testimonial | FormSubmission | ChatSession, id: string) {
    try {
      const cached = JSON.parse(localStorage.getItem(key) || '[]')
      const index = cached.findIndex((i: { id: string }) => i.id === id)
      
      if (index >= 0) {
        cached[index] = item
      } else {
        cached.unshift(item)
      }
      
      localStorage.setItem(key, JSON.stringify(cached))
    } catch (error) {
      console.error('Failed to update local cache:', error)
    }
  }

  private async syncLocalDataToServer() {
    if (!this.isOnline) return;

    try {
      // Sync form submissions
      const localForms = JSON.parse(localStorage.getItem('form-submissions') || '[]');
      for (const form of localForms) {
        if (!form.synced) {
          const response = await apiService.createFormSubmission(form);
          if (response.data) {
            this.updateLocalCache('form-submissions', response.data, response.data.id);
          }
        }
      }

      // Sync testimonials
      const localTestimonials = JSON.parse(localStorage.getItem('testimonials') || '[]');
      for (const testimonial of localTestimonials) {
        if (!testimonial.synced) {
          const response = await apiService.createTestimonial(testimonial);
          if (response.data) {
            this.updateLocalCache('testimonials', response.data, response.data.id);
          }
        }
      }

      // Sync chat sessions
      const localChats = JSON.parse(localStorage.getItem('chat-sessions') || '[]');
      for (const chat of localChats) {
        if (!chat.synced) {
          const response = await apiService.createChatSession(chat);
          if (response.data) {
            this.updateLocalCache('chat-sessions', response.data, response.data.id);
          }
        }
      }
    } catch (error) {
      console.error('Failed to sync data to server:', error);
    }
  }
}

export const hybridDataService = new HybridDataService()

// Utility functions for API integration
export const withErrorHandling = async <T>(
  apiCall: () => Promise<ApiResponse<T>>,
  fallback?: T
): Promise<T | null> => {
  const response = await apiCall()
  
  if (response.error) {
    console.error('API Error:', response.error)
    return fallback || null
  }
  
  return response.data || null
}

export const isApiAvailable = async (): Promise<boolean> => {
  try {
    const response = await apiService.healthCheck()
    return !response.error
  } catch {
    return false
  }
}
