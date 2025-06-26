# Admin Dashboard Setup Guide

## 🎯 Overview
The Sirius Solutions Admin Dashboard provides comprehensive monitoring and management capabilities for your website operations.

## 🔑 Access Information
- **URL**: `/admin-dashboard`
- **Password**: `sirius2025admin`
- **Email Notifications**: All sent to `mujeebrathore4@gmail.com`

## 📋 Features

### 1. Dashboard Overview
- Real-time statistics for forms, chats, blog posts, and reviews
- Recent activity feed
- Status indicators with notification badges

### 2. Form Submissions Management
- Monitor contact, career, help, and newsletter form submissions
- View detailed submission data
- Send email notifications to admin
- Mark submissions as read/responded
- Export functionality

### 3. Live Chat Management
- View active chat sessions
- Respond to customer messages in real-time
- Set chat priorities (low, medium, high, critical)
- Email notifications for new messages and admin responses
- Close/manage chat sessions

### 4. Testimonial Management
- Review pending testimonials
- Approve or reject customer reviews
- Edit testimonial content
- Manage testimonial status
- Delete unwanted reviews

### 5. Blog Management
- View all blog posts (published and drafts)
- Edit post content and metadata
- Feature/unfeature posts
- Track post views and engagement
- Manage categories and tags

### 6. Settings
- Configure email notifications
- Change admin password
- View email service status

## 🚀 Setting Up Real Email Functionality

### Option 1: EmailJS (Recommended)

1. **Sign up for EmailJS**:
   - Go to [EmailJS.com](https://www.emailjs.com/)
   - Create a free account
   - Set up an email service (Gmail, Outlook, etc.)

2. **Get Your Credentials**:
   - Service ID
   - Template ID
   - Public Key

3. **Update Configuration**:
   - Open `src/utils/emailService.ts`
   - Replace the placeholder values in `EMAIL_CONFIG`:
   ```typescript
   export const EMAIL_CONFIG: EmailConfig = {
     serviceId: 'your_service_id_here',
     templateId: 'your_template_id_here', 
     publicKey: 'your_public_key_here',
     adminEmail: 'mujeebrathore4@gmail.com'
   }
   ```

4. **Install EmailJS**:
   ```bash
   npm install emailjs-com
   ```

5. **Enable Real Email Sending**:
   - Uncomment the EmailJS code in the `sendEmail` function
   - Comment out the simulation code

### Option 2: Backend API Integration

1. **Create a Backend Endpoint**:
   ```javascript
   app.post('/api/send-email', async (req, res) => {
     // Implement your email sending logic here
     // Using nodemailer, SendGrid, AWS SES, etc.
   })
   ```

2. **Update Email Service**:
   - Modify `sendEmail` function to call your API
   - Add proper error handling

### Option 3: Zapier Integration

1. Set up Zapier webhooks
2. Configure email automation
3. Update the webhook URL in the email service

## 🛡️ Security Considerations

1. **Change Default Password**:
   - Update the admin password from the default
   - Use environment variables for production

2. **Implement Proper Authentication**:
   - Add JWT tokens
   - Session management
   - Rate limiting

3. **Environment Variables**:
   ```env
   REACT_APP_ADMIN_PASSWORD=your_secure_password
   REACT_APP_EMAILJS_SERVICE_ID=your_service_id
   REACT_APP_EMAILJS_TEMPLATE_ID=your_template_id
   REACT_APP_EMAILJS_PUBLIC_KEY=your_public_key
   REACT_APP_ADMIN_EMAIL=mujeebrathore4@gmail.com
   ```

## 📊 Data Persistence

Currently, all data is stored in memory and will reset on page refresh. For production:

1. **Add Database Integration**:
   - MongoDB, PostgreSQL, or Firebase
   - Store form submissions, chat history, etc.

2. **Backend API**:
   - Create REST API endpoints
   - Implement CRUD operations

3. **State Management**:
   - Redux or Zustand for complex state
   - Local storage for simple persistence

## 🚦 Testing the Dashboard

1. **Access the Dashboard**:
   - Navigate to `http://localhost:5173/admin-dashboard`
   - Enter password: `sirius2025admin`

2. **Test Form Submissions**:
   - Submit forms on the website
   - Check if they appear in the dashboard
   - Test email notifications

3. **Test Live Chat**:
   - Use the chat feature on help center
   - Respond as admin
   - Verify email notifications

## 📱 Mobile Responsiveness

The dashboard is fully responsive and works on:
- Desktop computers
- Tablets
- Mobile phones

## 🎨 Customization

### Colors and Branding
- All colors follow the Sirius Solutions brand palette
- Glassmorphism effects for modern UI
- Consistent typography and spacing

### Adding New Features
1. Add new sidebar menu items
2. Create corresponding components
3. Update routing and state management
4. Test functionality

## 🔧 Troubleshooting

### Common Issues:

1. **Email Not Sending**:
   - Check EmailJS configuration
   - Verify internet connection
   - Check browser console for errors

2. **Dashboard Not Loading**:
   - Check route configuration
   - Verify all imports are correct
   - Check for TypeScript errors

3. **Data Not Persisting**:
   - Expected behavior (in-memory storage)
   - Implement database for persistence

### Support
For technical support, contact the development team or refer to the project documentation.
