// Email service configuration for Sirius Solutions Admin Dashboard
// To enable real email sending, sign up for EmailJS and configure your service

export interface EmailConfig {
  serviceId: string
  templateId: string
  publicKey: string
  adminEmail: string
}

export const EMAIL_CONFIG: EmailConfig = {
  serviceId: 'your_service_id', // Replace with your EmailJS service ID
  templateId: 'your_template_id', // Replace with your EmailJS template ID
  publicKey: 'your_public_key', // Replace with your EmailJS public key
  adminEmail: 'mujeebrathore4@gmail.com'
}

export interface EmailData {
  to: string
  subject: string
  message: string
  fromName?: string
  fromEmail?: string
}

// Simple email sending function
export const sendEmail = async (emailData: EmailData): Promise<boolean> => {
  try {
    // For now, we'll simulate email sending with console log and alert
    console.log('📧 Email would be sent:', {
      to: EMAIL_CONFIG.adminEmail,
      subject: emailData.subject,
      message: emailData.message,
      timestamp: new Date().toISOString()
    })

    // In production, uncomment and configure EmailJS:
    /*
    const emailjs = await import('emailjs-com')
    
    const templateParams = {
      to_email: EMAIL_CONFIG.adminEmail,
      subject: emailData.subject,
      message: emailData.message,
      from_name: emailData.fromName || 'Sirius Solutions Admin Dashboard',
      from_email: emailData.fromEmail || 'admin@siriussolutions.com'
    }

    const result = await emailjs.default.send(
      EMAIL_CONFIG.serviceId,
      EMAIL_CONFIG.templateId,
      templateParams,
      EMAIL_CONFIG.publicKey
    )

    return result.status === 200
    */

    // Simulate successful email sending
    return true
  } catch (error) {
    console.error('Failed to send email:', error)
    return false
  }
}

// Email templates for different notifications
export const EMAIL_TEMPLATES = {
  formSubmission: (type: string, data: Record<string, unknown>) => ({
    subject: `New ${type.toUpperCase()} Form Submission - Sirius Solutions`,
    message: `
New ${type} form submission received:

${Object.entries(data).map(([key, value]) => 
  `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`
).join('\n')}

Submitted at: ${new Date().toLocaleString()}
Source: Sirius Solutions Website

Please review and respond accordingly.
    `.trim()
  }),
  
  chatMessage: (customerName: string, customerEmail: string, subject: string, message: string) => ({
    subject: `New Chat Message: ${subject} - Sirius Solutions`,
    message: `
New chat message received:

Customer: ${customerName} (${customerEmail})
Subject: ${subject}
Message: ${message}

Timestamp: ${new Date().toLocaleString()}
Source: Sirius Solutions Live Chat

Please respond via the admin dashboard.
    `.trim()
  }),

  adminChatResponse: (customerName: string, customerEmail: string, subject: string, adminResponse: string) => ({
    subject: `Admin Response Sent: ${subject} - Sirius Solutions`,
    message: `
Admin response sent to customer:

Customer: ${customerName} (${customerEmail})
Subject: ${subject}
Admin Response: ${adminResponse}

Timestamp: ${new Date().toLocaleString()}
Source: Sirius Solutions Admin Dashboard

This is a confirmation that your response was sent.
    `.trim()
  })
}
