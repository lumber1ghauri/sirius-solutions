import { motion, type Variants } from 'framer-motion'
import { Star, Quote } from 'lucide-react'
import { useData } from '../context/DataContext'

const Testimonials = () => {
  const { getApprovedTestimonials } = useData()
  const testimonials = getApprovedTestimonials()

  // Fallback testimonials if none are approved yet
  const fallbackTestimonials = [
    {
      id: 'fallback-1',
      name: "Sarah Chen",
      company: "TechFlow Systems",
      position: "CTO",
      content: "Sirius Solutions completely transformed our legacy systems. Their innovative approach and attention to detail resulted in a 60% increase in our system performance. The team's expertise in modern technologies is unparalleled.",
      rating: 5,
      status: 'approved' as const,
      submittedDate: '2025-06-20'
    },
    {
      id: 'fallback-2',
      name: "Michael Rodriguez",
      company: "InnovateLab",
      position: "Founder & CEO",
      content: "Working with Sirius Solutions was a game-changer for our startup. They not only delivered exceptional software but also provided strategic insights that helped us scale rapidly. Truly a partner you can rely on.",
      rating: 5,
      status: 'approved' as const,
      submittedDate: '2025-06-18'
    },
    {
      id: 'fallback-3',
      name: "Emily Watson",
      company: "Global Finance Corp",
      position: "Director of Digital Innovation",
      content: "The team at Sirius Solutions delivered beyond our expectations. Their comprehensive testing and maintenance services ensure our applications run flawlessly 24/7. Outstanding professionalism and technical expertise.",
      rating: 5,
      status: 'approved' as const,
      submittedDate: '2025-06-15'
    },
    {
      id: 'fallback-4',
      name: "David Park",
      company: "CloudTech Solutions",
      position: "VP of Engineering",
      content: "Sirius Solutions doesn't just code - they understand business. Their strategic approach to software development helped us reduce costs by 40% while improving user experience significantly.",
      rating: 5,
      status: 'approved' as const,
      submittedDate: '2025-06-12'
    },
    {
      id: 'fallback-5',
      name: "Lisa Thompson",
      company: "E-commerce Plus",
      position: "Product Manager",
      content: "From design to deployment, Sirius Solutions handled everything with precision. Their agile methodology and transparent communication made the entire process seamless. Highly recommended!",
      rating: 5,
      status: 'approved' as const,
      submittedDate: '2025-06-10'
    },
    {
      id: 'fallback-6',
      name: "James Wilson",
      company: "MedTech Innovations",
      position: "Chief Innovation Officer",
      content: "In the highly regulated healthcare industry, Sirius Solutions proved their expertise by delivering compliant, secure, and innovative solutions. Their attention to quality and security is exceptional.",
      rating: 5,
      status: 'approved' as const,
      submittedDate: '2025-06-08'
    }
  ]

  const displayTestimonials = testimonials.length > 0 ? testimonials : fallbackTestimonials

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  }

  return (
    <section id="testimonials" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-[#3b72b0]/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-[#44bee7]/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what industry leaders say about our work.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {displayTestimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              variants={cardVariants}
              className="glass rounded-2xl p-8 relative group hover:border-[#44bee7]/30 transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-4 -left-4 w-12 h-12 glass rounded-full flex items-center justify-center group-hover:bg-[#44bee7]/20 transition-colors duration-300">
                <Quote size={20} className="text-[#44bee7]" />
              </div>

              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-600'}
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-gray-300 leading-relaxed mb-8 relative z-10">
                "{testimonial.content}"
              </p>

              {/* Author Info */}
              <div className="flex items-center">

                <div>
                  <h4 className="text-white font-semibold">{testimonial.name}</h4>
                  <p className="text-gray-400 text-sm">{testimonial.position}</p>
                  <p className="text-[#44bee7] text-sm">{testimonial.company}</p>
                </div>
              </div>

              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#44bee7]/5 to-[#3b72b0]/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-lg text-gray-300 mb-8">
            Ready to join our satisfied clients?
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#44bee7] to-[#3b72b0] text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 pulse-glow"
          >
            Start Your Project Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Testimonials