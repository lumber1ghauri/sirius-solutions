import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Clock, DollarSign, GraduationCap, Send, Upload, X, CheckCircle, Star, Award, Coffee, Briefcase, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Careers = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    location: '',
    expectedSalary: '',
    availableFrom: '',
    workMode: 'hybrid',
    education: '',
    university: '',
    graduationYear: '',
    portfolio: '',
    linkedin: '',
    github: '',
    coverLetter: '',
    resume: null as File | null,
    portfolioFiles: [] as File[],
    hearAboutUs: '',
    willingToRelocate: false,
    newsletter: false
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [dragOver, setDragOver] = useState(false)

  const positions = [
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'UI/UX Designer',
    'Project Manager',
    'Quality Assurance Engineer',
    'DevOps Engineer',
    'Data Scientist',
    'Mobile App Developer',
    'Business Analyst',
    'Technical Writer',
    'Other'
  ]

  const experienceLevels = [
    'Entry Level (0-2 years)',
    'Mid Level (2-5 years)',
    'Senior Level (5-8 years)',
    'Lead/Principal (8+ years)',
    'Director/VP Level'
  ]

  const educationLevels = [
    'High School',
    'Associate Degree',
    'Bachelor\'s Degree',
    'Master\'s Degree',
    'PhD',
    'Bootcamp Graduate',
    'Self-taught'
  ]

  const hearAboutOptions = [
    'LinkedIn',
    'Job Board',
    'Company Website',
    'Referral',
    'Social Media',
    'University Career Fair',
    'Tech Conference',
    'Other'
  ]

  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Market-leading compensation packages with performance bonuses"
    },
    {
      icon: Heart,
      title: "Health & Wellness",
      description: "Comprehensive health insurance, mental health support, and wellness programs"
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Work-life balance with flexible scheduling and remote work options"
    },
    {
      icon: GraduationCap,
      title: "Learning & Development",
      description: "Continuous learning opportunities, conferences, and certification programs"
    },
    {
      icon: Coffee,
      title: "Amazing Culture",
      description: "Collaborative environment with team events, free snacks, and modern office"
    },
    {
      icon: Award,
      title: "Career Growth",
      description: "Clear career progression paths with mentorship and leadership opportunities"
    }
  ]

  const openPositions = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote / On-site",
      type: "Full-time",
      experience: "5+ years",
      description: "Join our core development team to build cutting-edge solutions using React, Node.js, and cloud technologies."
    },
    {
      title: "UI/UX Designer",
      department: "Design",
      location: "Remote / On-site",
      type: "Full-time",
      experience: "3+ years",
      description: "Create beautiful, user-centered designs and lead the design process from concept to implementation."
    },
    {
      title: "DevOps Engineer",
      department: "Infrastructure",
      location: "Remote",
      type: "Full-time",
      experience: "4+ years",
      description: "Build and maintain our cloud infrastructure, CI/CD pipelines, and automation systems."
    },
    {
      title: "Project Manager",
      department: "Operations",
      location: "On-site",
      type: "Full-time",
      experience: "3+ years",
      description: "Lead cross-functional teams to deliver projects on time and within budget using Agile methodologies."
    }
  ]

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked
      setFormData(prev => ({ ...prev, [name]: checked }))
    } else {
      setFormData(prev => ({ ...prev, [name]: value }))
    }
  }

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'resume' | 'portfolio') => {
    const files = e.target.files
    if (!files) return

    if (type === 'resume') {
      setFormData(prev => ({ ...prev, resume: files[0] }))
    } else {
      setFormData(prev => ({ 
        ...prev, 
        portfolioFiles: [...prev.portfolioFiles, ...Array.from(files)] 
      }))
    }
  }

  const handleDrop = (e: React.DragEvent, type: 'resume' | 'portfolio') => {
    e.preventDefault()
    setDragOver(false)
    
    const files = e.dataTransfer.files
    if (!files) return

    if (type === 'resume') {
      setFormData(prev => ({ ...prev, resume: files[0] }))
    } else {
      setFormData(prev => ({ 
        ...prev, 
        portfolioFiles: [...prev.portfolioFiles, ...Array.from(files)] 
      }))
    }
  }

  const removeFile = (index: number, type: 'resume' | 'portfolio') => {
    if (type === 'resume') {
      setFormData(prev => ({ ...prev, resume: null }))
    } else {
      setFormData(prev => ({ 
        ...prev, 
        portfolioFiles: prev.portfolioFiles.filter((_, i) => i !== index) 
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSubmitted(true)
    }, 2000)
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen pt-20 pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass rounded-2xl p-8 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring" }}
              className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle size={40} className="text-white" />
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-bold text-white mb-4"
            >
              Application Submitted Successfully!
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-gray-300 mb-8 text-lg"
            >
              Thank you for your interest in joining Sirius Solutions. We've received your application and will review it carefully. 
              Our HR team will contact you within 5-7 business days if your profile matches our current openings.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="space-y-4"
            >
              <Link to="/">
                <button className="bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white px-8 py-3 rounded-full hover:shadow-lg transition-all duration-300 mr-4">
                  Back to Home
                </button>
              </Link>
              <button 
                onClick={() => {
                  setIsSubmitted(false)
                  setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                    position: '',
                    experience: '',
                    location: '',
                    expectedSalary: '',
                    availableFrom: '',
                    workMode: 'hybrid',
                    education: '',
                    university: '',
                    graduationYear: '',
                    portfolio: '',
                    linkedin: '',
                    github: '',
                    coverLetter: '',
                    resume: null,
                    portfolioFiles: [],
                    hearAboutUs: '',
                    willingToRelocate: false,
                    newsletter: false
                  })
                }}
                className="bg-transparent border border-[#44bee7] text-[#44bee7] px-8 py-3 rounded-full hover:bg-[#44bee7] hover:text-white transition-all duration-300"
              >
                Submit Another Application
              </button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen pt-20 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <Link to="/" className="inline-flex items-center text-[#44bee7] hover:text-white transition-colors duration-200 mb-6">
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </Link>
          
          <h1 className="text-5xl font-bold text-white mb-6">
            Join Our <span className="gradient-text">Innovative Team</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Be part of a company that's shaping the future of technology. We're looking for passionate, 
            talented individuals who want to make a difference.
          </p>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Why Work With Us?</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index }}
                className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <div className="w-12 h-12 bg-gradient-to-r from-[#44bee7] to-[#3b72b0] rounded-lg flex items-center justify-center mb-4">
                  <benefit.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-gray-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Open Positions */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white text-center mb-12">Current Openings</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.1 * index }}
                className="glass rounded-xl p-6 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-white">{position.title}</h3>
                  <span className="bg-[#44bee7] text-white px-3 py-1 rounded-full text-sm">
                    {position.type}
                  </span>
                </div>
                <div className="grid grid-cols-2 gap-4 mb-4 text-sm text-gray-300">
                  <div className="flex items-center">
                    <Briefcase size={16} className="mr-2" />
                    {position.department}
                  </div>
                  <div className="flex items-center">
                    <MapPin size={16} className="mr-2" />
                    {position.location}
                  </div>
                  <div className="flex items-center">
                    <Star size={16} className="mr-2" />
                    {position.experience}
                  </div>
                </div>
                <p className="text-gray-300 mb-4">{position.description}</p>
                <button className="w-full bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white py-2 rounded-lg hover:shadow-lg transition-all duration-300">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Application Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-2xl p-8"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-white mb-4">Submit Your Application</h2>
            <p className="text-gray-300">
              Fill out the form below and we'll get back to you within 5-7 business days.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">First Name *</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:outline-none transition-colors"
                  placeholder="Enter your first name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Last Name *</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:outline-none transition-colors"
                  placeholder="Enter your last name"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:outline-none transition-colors"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:outline-none transition-colors"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            {/* Position & Experience */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Position Applied For *</label>
                <select
                  name="position"
                  value={formData.position}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#44bee7] focus:outline-none transition-colors"
                >
                  <option value="">Select a position</option>
                  {positions.map(pos => (
                    <option key={pos} value={pos} className="bg-gray-800">{pos}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Experience Level *</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#44bee7] focus:outline-none transition-colors"
                >
                  <option value="">Select experience level</option>
                  {experienceLevels.map(level => (
                    <option key={level} value={level} className="bg-gray-800">{level}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Location *</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleInputChange}
                  required
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:outline-none transition-colors"
                  placeholder="City, State/Country"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Expected Salary</label>
                <input
                  type="text"
                  name="expectedSalary"
                  value={formData.expectedSalary}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:outline-none transition-colors"
                  placeholder="$80,000 - $100,000"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Available From</label>
                <input
                  type="date"
                  name="availableFrom"
                  value={formData.availableFrom}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#44bee7] focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-300 mb-2">Preferred Work Mode *</label>
              <div className="flex space-x-6">
                {['remote', 'hybrid', 'onsite'].map(mode => (
                  <label key={mode} className="flex items-center">
                    <input
                      type="radio"
                      name="workMode"
                      value={mode}
                      checked={formData.workMode === mode}
                      onChange={handleInputChange}
                      className="mr-2 text-[#44bee7]"
                    />
                    <span className="text-gray-300 capitalize">{mode}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Education */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Education Level</label>
                <select
                  name="education"
                  value={formData.education}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#44bee7] focus:outline-none transition-colors"
                >
                  <option value="">Select education level</option>
                  {educationLevels.map(level => (
                    <option key={level} value={level} className="bg-gray-800">{level}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-gray-300 mb-2">University/Institution</label>
                <input
                  type="text"
                  name="university"
                  value={formData.university}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:outline-none transition-colors"
                  placeholder="University name"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Graduation Year</label>
                <input
                  type="number"
                  name="graduationYear"
                  value={formData.graduationYear}
                  onChange={handleInputChange}
                  min="1980"
                  max="2030"
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:outline-none transition-colors"
                  placeholder="2023"
                />
              </div>
            </div>

            {/* Links */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="block text-gray-300 mb-2">Portfolio Website</label>
                <input
                  type="url"
                  name="portfolio"
                  value={formData.portfolio}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:outline-none transition-colors"
                  placeholder="https://yourportfolio.com"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">LinkedIn Profile</label>
                <input
                  type="url"
                  name="linkedin"
                  value={formData.linkedin}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:outline-none transition-colors"
                  placeholder="https://linkedin.com/in/yourprofile"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">GitHub Profile</label>
                <input
                  type="url"
                  name="github"
                  value={formData.github}
                  onChange={handleInputChange}
                  className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:outline-none transition-colors"
                  placeholder="https://github.com/yourusername"
                />
              </div>
            </div>

            {/* File Uploads */}
            <div className="grid md:grid-cols-2 gap-6">
              {/* Resume Upload */}
              <div>
                <label className="block text-gray-300 mb-2">Resume/CV *</label>
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                    dragOver ? 'border-[#44bee7] bg-[#44bee7]/10' : 'border-gray-600'
                  }`}
                  onDragOver={(e) => {
                    e.preventDefault()
                    setDragOver(true)
                  }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => handleDrop(e, 'resume')}
                >
                  <Upload size={32} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-300 mb-2">Drag & drop your resume here</p>
                  <p className="text-gray-400 text-sm mb-4">or</p>
                  <label className="bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white px-4 py-2 rounded-lg cursor-pointer hover:shadow-lg transition-all duration-300">
                    Browse Files
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => handleFileUpload(e, 'resume')}
                      className="hidden"
                    />
                  </label>
                  {formData.resume && (
                    <div className="mt-4 flex items-center justify-between bg-white/10 rounded-lg p-2">
                      <span className="text-white text-sm">{formData.resume.name}</span>
                      <button
                        type="button"
                        onClick={() => removeFile(0, 'resume')}
                        className="text-red-400 hover:text-red-300"
                      >
                        <X size={16} />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              {/* Portfolio Files */}
              <div>
                <label className="block text-gray-300 mb-2">Portfolio Files (Optional)</label>
                <div
                  className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                    dragOver ? 'border-[#44bee7] bg-[#44bee7]/10' : 'border-gray-600'
                  }`}
                  onDragOver={(e) => {
                    e.preventDefault()
                    setDragOver(true)
                  }}
                  onDragLeave={() => setDragOver(false)}
                  onDrop={(e) => handleDrop(e, 'portfolio')}
                >
                  <Upload size={32} className="mx-auto text-gray-400 mb-2" />
                  <p className="text-gray-300 mb-2">Drag & drop portfolio files</p>
                  <p className="text-gray-400 text-sm mb-4">Images, PDFs, or design files</p>
                  <label className="bg-transparent border border-[#44bee7] text-[#44bee7] px-4 py-2 rounded-lg cursor-pointer hover:bg-[#44bee7] hover:text-white transition-all duration-300">
                    Browse Files
                    <input
                      type="file"
                      multiple
                      accept=".pdf,.jpg,.jpeg,.png,.gif,.psd,.ai,.fig"
                      onChange={(e) => handleFileUpload(e, 'portfolio')}
                      className="hidden"
                    />
                  </label>
                  {formData.portfolioFiles.length > 0 && (
                    <div className="mt-4 space-y-2">
                      {formData.portfolioFiles.map((file, index) => (
                        <div key={index} className="flex items-center justify-between bg-white/10 rounded-lg p-2">
                          <span className="text-white text-sm">{file.name}</span>
                          <button
                            type="button"
                            onClick={() => removeFile(index, 'portfolio')}
                            className="text-red-400 hover:text-red-300"
                          >
                            <X size={16} />
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Cover Letter */}
            <div>
              <label className="block text-gray-300 mb-2">Cover Letter</label>
              <textarea
                name="coverLetter"
                value={formData.coverLetter}
                onChange={handleInputChange}
                rows={6}
                className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:border-[#44bee7] focus:outline-none transition-colors resize-none"
                placeholder="Tell us why you're perfect for this role and what you can bring to our team..."
              ></textarea>
            </div>

            {/* Additional Questions */}
            <div>
              <label className="block text-gray-300 mb-2">How did you hear about us?</label>
              <select
                name="hearAboutUs"
                value={formData.hearAboutUs}
                onChange={handleInputChange}
                className="w-full bg-white/10 border border-gray-600 rounded-lg px-4 py-3 text-white focus:border-[#44bee7] focus:outline-none transition-colors"
              >
                <option value="">Select an option</option>
                {hearAboutOptions.map(option => (
                  <option key={option} value={option} className="bg-gray-800">{option}</option>
                ))}
              </select>
            </div>

            {/* Checkboxes */}
            <div className="space-y-4">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="willingToRelocate"
                  checked={formData.willingToRelocate}
                  onChange={handleInputChange}
                  className="mr-3 text-[#44bee7]"
                />
                <span className="text-gray-300">I am willing to relocate for this position</span>
              </label>
              
              <label className="flex items-center">
                <input
                  type="checkbox"
                  name="newsletter"
                  checked={formData.newsletter}
                  onChange={handleInputChange}
                  className="mr-3 text-[#44bee7]"
                />
                <span className="text-gray-300">Subscribe to our newsletter for job updates and company news</span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white px-12 py-4 rounded-full text-lg font-semibold hover:shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center mx-auto"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                    Submitting Application...
                  </>
                ) : (
                  <>
                    <Send size={20} className="mr-3" />
                    Submit Application
                  </>
                )}
              </motion.button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  )
}

export default Careers
