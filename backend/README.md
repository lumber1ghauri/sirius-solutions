# Sirius Solutions Backend API

This backend API provides data persistence and management for the Sirius Solutions website.

## Features

- **RESTful API** for blog posts, testimonials, form submissions, and chat sessions
- **JSON file-based database** (easily upgradeable to SQL/NoSQL databases)
- **CORS enabled** for frontend integration
- **Security headers** with Helmet
- **Request logging** with Morgan
- **Error handling** and validation
- **Analytics endpoints** for dashboard insights

## API Endpoints

### Blog Posts
- `GET /api/blog-posts` - Get all blog posts
- `GET /api/blog-posts/:id` - Get specific blog post
- `POST /api/blog-posts` - Create new blog post
- `PUT /api/blog-posts/:id` - Update blog post
- `DELETE /api/blog-posts/:id` - Delete blog post

### Testimonials
- `GET /api/testimonials` - Get all testimonials
- `POST /api/testimonials` - Submit new testimonial
- `PUT /api/testimonials/:id` - Update testimonial (approve/reject)
- `DELETE /api/testimonials/:id` - Delete testimonial

### Form Submissions
- `GET /api/form-submissions` - Get all form submissions
- `POST /api/form-submissions` - Submit new form
- `PUT /api/form-submissions/:id` - Update submission status

### Chat Sessions
- `GET /api/chat-sessions` - Get all chat sessions
- `POST /api/chat-sessions` - Create new chat session
- `PUT /api/chat-sessions/:id` - Update chat session
- `POST /api/chat-sessions/:id/messages` - Add message to chat

### Analytics
- `GET /api/analytics/blog` - Blog analytics
- `GET /api/analytics/forms` - Form submission analytics

### System
- `GET /api/health` - Health check

## Installation

```bash
cd backend
npm install
```

## Development

```bash
npm run dev
```

## Production

```bash
npm start
```

## Environment Variables

Create a `.env` file in the backend directory:

```env
PORT=3001
NODE_ENV=production
# Add email configuration for production
SMTP_HOST=your_smtp_host
SMTP_PORT=587
SMTP_USER=your_email
SMTP_PASS=your_password
ADMIN_EMAIL=mujeebrathore4@gmail.com
```

## Data Storage

Data is stored in JSON files in the `backend/data/` directory:
- `blog-posts.json` - Blog posts
- `testimonials.json` - User testimonials
- `form-submissions.json` - Contact form submissions
- `chat-sessions.json` - Chat conversations

## Upgrading to Real Database

To upgrade to a real database (PostgreSQL, MongoDB, etc.):

1. Install database driver (e.g., `pg` for PostgreSQL)
2. Replace file I/O operations with database queries
3. Add connection configuration
4. Implement proper migrations

Example for PostgreSQL:
```javascript
const { Pool } = require('pg')
const pool = new Pool({
  connectionString: process.env.DATABASE_URL
})
```
