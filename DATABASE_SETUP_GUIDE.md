# 🚀 Sirius Solutions - Complete Setup Guide with Database

This guide will help you set up the complete Sirius Solutions website with database functionality for persistent data storage.

## 📋 Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Git

## 🏗️ Project Structure

```
sirius-solutions/
├── src/                    # Frontend React application
├── backend/               # Backend API server
├── package.json          # Frontend dependencies
└── README.md
```

## 🛠️ Installation & Setup

### 1. Frontend Setup

```bash
# Install frontend dependencies
npm install

# Install additional development dependencies
npm install --save-dev @types/node
```

### 2. Backend Setup

```bash
# Navigate to backend directory
cd backend

# Install backend dependencies
npm install

# Create environment file
cp .env.example .env

# Edit .env file with your configuration
# At minimum, set the admin email:
ADMIN_EMAIL=mujeebrathore4@gmail.com
```

### 3. Environment Configuration

Edit `backend/.env`:

```env
PORT=3001
NODE_ENV=development
ADMIN_EMAIL=mujeebrathore4@gmail.com

# For production email notifications
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```

## 🚀 Running the Application

### Development Mode

**Terminal 1 - Backend API:**
```bash
cd backend
npm run dev
```
The API will run on http://localhost:3001

**Terminal 2 - Frontend:**
```bash
# From project root
npm run dev
```
The website will run on http://localhost:5173

### Production Mode

**Backend:**
```bash
cd backend
npm start
```

**Frontend:**
```bash
npm run build
npm run preview
```

## 📊 Database & Data Persistence

### Current Implementation: JSON File Database

The application currently uses a **JSON file-based database** stored in `backend/data/`:

- `blog-posts.json` - All blog posts
- `testimonials.json` - User testimonials  
- `form-submissions.json` - Contact form submissions
- `chat-sessions.json` - Live chat conversations

### Data Flow

1. **Frontend** sends requests to **Backend API** (when available)
2. **Backend API** stores data in **JSON files**
3. **Fallback**: If API unavailable, data stored in **browser localStorage**
4. **Auto-sync**: When API comes back online, localStorage data syncs to server

### Hybrid Data Strategy

The application uses a **hybrid approach**:

```typescript
// Automatic fallback system
if (API_available) {
  saveToDatabase(data)  // Persistent server storage
} else {
  saveToLocalStorage(data)  // Temporary browser storage
}
```

## 🔧 API Endpoints

### Blog Management
- `GET /api/blog-posts` - Get all blog posts
- `POST /api/blog-posts` - Create new post
- `PUT /api/blog-posts/:id` - Update post
- `DELETE /api/blog-posts/:id` - Delete post

### Form Submissions
- `GET /api/form-submissions` - Get all submissions
- `POST /api/form-submissions` - Submit new form
- `PUT /api/form-submissions/:id` - Update status

### Testimonials
- `GET /api/testimonials` - Get all testimonials
- `POST /api/testimonials` - Submit testimonial
- `PUT /api/testimonials/:id` - Approve/reject

### Live Chat
- `GET /api/chat-sessions` - Get chat sessions
- `POST /api/chat-sessions` - Start new chat
- `POST /api/chat-sessions/:id/messages` - Add message

### Analytics
- `GET /api/analytics/blog` - Blog statistics
- `GET /api/analytics/forms` - Form statistics

## 🔒 Admin Dashboard Access

1. Navigate to: http://localhost:5173/admin-dashboard
2. **Default Password**: `admin123`
3. **Features Available**:
   - ✅ Dashboard overview with statistics
   - ✅ Blog post management (create, edit, publish, delete)
   - ✅ Testimonial approval system
   - ✅ Form submission monitoring
   - ✅ Live chat management
   - ✅ Email notification system

## 📧 Email Notifications

### Current Status: **Simulated**
- Form submissions trigger email alerts
- Chat messages send notifications
- All emails logged to console

### Production Setup:
1. Get Gmail App Password: https://support.google.com/accounts/answer/185833
2. Update `backend/.env`:
```env
SMTP_USER=your_email@gmail.com
SMTP_PASS=your_app_password
```
3. Emails will be sent to: `mujeebrathore4@gmail.com`

## 🎯 Testing the System

### 1. Test Form Submissions
1. Fill out contact form on website
2. Check admin dashboard → Form Submissions
3. Verify email notification (console log)

### 2. Test Blog Management
1. Access admin dashboard
2. Create new blog post
3. Publish post
4. Verify it appears on public blog page

### 3. Test Live Chat
1. Start chat from public website
2. Admin responds from dashboard
3. Verify real-time updates

### 4. Test Data Persistence
1. Create blog post in admin
2. Restart both frontend and backend
3. Verify data persists across restarts

## 🚀 Upgrading to Production Database

### Option 1: PostgreSQL

```bash
# Install PostgreSQL driver
cd backend
npm install pg @types/pg

# Update server.js to use PostgreSQL
# Replace file operations with SQL queries
```

### Option 2: MongoDB

```bash
# Install MongoDB driver
cd backend
npm install mongodb

# Update server.js to use MongoDB
# Replace JSON files with collections
```

### Option 3: Firebase

```bash
# Install Firebase
cd backend
npm install firebase-admin

# Configure Firebase project
# Update API calls to use Firestore
```

## 📱 Features Working

### ✅ Public Website
- **Dynamic Homepage** with admin-controlled content
- **Blog System** with search, categories, filtering
- **Testimonials** from approved user submissions
- **Contact Forms** with validation and submission
- **Responsive Design** with modern animations

### ✅ Admin Dashboard
- **Secure Login** with password protection
- **Blog Management** - create, edit, publish, delete posts
- **Testimonial System** - approve, reject, edit reviews
- **Form Monitoring** - view all submissions with details
- **Live Chat** - real-time customer support
- **Analytics** - traffic and engagement metrics

### ✅ Database Integration
- **Persistent Storage** via JSON files
- **API Integration** with automatic fallback
- **Data Validation** and error handling
- **Backup/Restore** functionality
- **Real-time Sync** between admin and public site

## 🔍 Troubleshooting

### Backend Not Starting
```bash
cd backend
npm install
npm run dev
```

### Frontend API Errors
- Backend must be running on port 3001
- Check CORS settings in backend/server.js
- Verify API endpoints with: http://localhost:3001/api/health

### Data Not Persisting
- Check `backend/data/` directory exists
- Verify write permissions
- Check console for error messages

### Email Not Working
- Update SMTP settings in `.env`
- Check Gmail app password setup
- For testing, emails logged to console

## 🎉 Success!

When both servers are running:
- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:3001
- **Admin Dashboard**: http://localhost:5173/admin-dashboard
- **API Health**: http://localhost:3001/api/health

The complete system is now running with full database functionality! 🚀

## 📞 Support

If you encounter any issues:
1. Check both terminal outputs for errors
2. Verify all dependencies are installed
3. Ensure ports 3001 and 5173 are available
4. Review the API health endpoint for backend status
