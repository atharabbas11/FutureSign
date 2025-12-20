import React, { useState, useEffect, useRef } from 'react'
import { Phone, Mail, MessageCircle, MapPin, Clock, Send, Plane, ArrowRight, Play, Star, Award, Users, CheckCircle, CircleUser, Sparkles, Zap, Target, Heart, TrendingUp } from 'lucide-react'
import axios from 'axios'
import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import ContactSkeleton from '../Components/Skeleton/ContactSkeleton'

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 12
    }
  }
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

// Background Pattern Component
const BackgroundPattern = ({ type = "dots", color = "blue", opacity = 0.1 }) => {
  const patterns = {
    dots: (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(100)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-1 h-1 rounded-full bg-${color}-500`}
            style={{
              left: `${(i % 10) * 10}%`,
              top: `${Math.floor(i / 10) * 10}%`,
              opacity: opacity
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [opacity, opacity * 1.5, opacity]
            }}
            transition={{
              duration: 2 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2
            }}
          />
        ))}
      </div>
    ),
    // ... other patterns
  };

  return patterns[type] || patterns.dots;
};

const slideInLeft = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};


const slideInRight = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const Contact = () => {
  const [loading, setLoading] = useState(true)
  const [showAirplane, setShowAirplane] = useState(false)
  const [windowWidth, setWindowWidth] = useState(0)
  const API_URL = import.meta.env.VITE_API_URL;
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)
  const formRef = useRef(null)

  useEffect(() => {
    setWindowWidth(window.innerWidth)
    const handleResize = () => setWindowWidth(window.innerWidth)
    window.addEventListener('resize', handleResize)
    
    const handle = requestAnimationFrame(() => {
      setLoading(false)
    })
    
    return () => {
      cancelAnimationFrame(handle)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      await axios.post(`${API_URL}/api/contact`, formData)
      setSubmitStatus('success')
      setShowAirplane(true)
      
      setTimeout(() => {
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      }, 1000)
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
      
      if (submitStatus !== 'success') {
        setTimeout(() => setSubmitStatus(null), 3000)
      }
    }
  }

  // Fixed airplane animation using windowWidth state
  const airplaneVariants = {
    initial: { 
      opacity: 0,
      x: 0,
      y: 0,
      scale: 0.5,
      rotate: -45
    },
    animate: {
      opacity: [0, 1, 1, 0],
      x: [0, windowWidth * 0.3, windowWidth * 0.6, windowWidth],
      y: [0, -100, -50, -200],
      scale: [0.5, 1, 0.8, 0.3],
      rotate: [-45, 0, 15, 45],
      transition: {
        duration: 2.5,
        ease: "easeInOut",
        times: [0, 0.3, 0.7, 1]
      }
    }
  }

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: 'Call Us',
      details: '+91 92814-09991',
      description: 'Mon to Sat 9am to 6pm',
      action: 'tel:+919281409991',
      color: 'from-[#1e40af] to-blue-400'
    },
    {
      icon: <MessageCircle className="h-6 w-6" />,
      title: 'WhatsApp',
      details: '+91 92814-09991',
      description: '24/7 support',
      action: 'https://wa.me/919281409991',
      color: 'from-[#dd5428] to-orange-400'
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: 'Email Us',
      details: 'info@zasfuturesign.com',
      description: 'Send us your query',
      action: 'mailto:info@zasfuturesign.com',
      color: 'from-[#1e40af] to-blue-400'
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: 'Visit Us',
      details: 'Plot no 26, Mallikarjun nagar',
      description: 'Peerzadiguda, Hyderabad, TG',
      action: 'https://maps.google.com',
      color: 'from-[#dd5428] to-orange-400'
    },
  ]

  if (loading) return <ContactSkeleton />;

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1e40af] via-blue-600 to-[#dd5428] text-white overflow-hidden">
        <BackgroundPattern type="dots" color="blue" opacity={0.1} />
        
        <motion.div className="relative py-24 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
          >
            <MessageCircle className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-sm font-semibold">Contact Us</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Get In
            <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Touch
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Let's create something amazing together. Reach out and start your printing journey
          </motion.p>
        </motion.div>
      </section>

      {/* Contact Info Cards */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
      >
        <BackgroundPattern type="grid" color="blue" opacity={0.03} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <motion.a
                key={index}
                variants={itemVariants}
                href={item.action}
                target={item.action.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000`} />
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg hover:shadow-2xl transition-all border border-gray-100">
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto`}
                  >
                    {item.icon}
                  </motion.div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-800 font-semibold mb-2 text-lg">{item.details}</p>
                  <p className="text-gray-600 text-sm">{item.description}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Form & Info Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative py-20 bg-gradient-to-b from-white to-orange-50 overflow-hidden"
      >
        <BackgroundPattern type="circles" color="orange" opacity={0.03} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              variants={slideInLeft}
              ref={formRef}
              className="relative"
            >
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100">
                <div className="text-left mb-10">
                  <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#1e40af]/10 to-blue-400/10 rounded-full mb-4 border border-blue-200">
                    <Send className="h-4 w-4 text-[#1e40af] mr-2" />
                    <span className="text-sm font-semibold text-[#1e40af]">Start Your Project</span>
                  </div>
                  <h2 className="gap-3 lg:flex sm:flex-wrap text-4xl font-bold text-gray-900 mb-4">
                    Send Us A
                    <span className="block bg-gradient-to-r from-[#1e40af] to-[#dd5428] bg-clip-text text-transparent">
                      Message
                    </span>
                  </h2>
                  <p className="text-lg text-gray-600">
                    Share your vision with us. We'll bring it to life with precision printing
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="Full Name"
                        required
                        className="w-full border border-gray-200 bg-white/50 px-4 py-4 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#1e40af] focus:border-[#1e40af] outline-none transition-all duration-300"
                      />
                    </div>

                    <div className="relative">
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="Phone Number"
                        required
                        className="w-full border border-gray-200 bg-white/50 px-4 py-4 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#1e40af] focus:border-[#1e40af] outline-none transition-all duration-300"
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      required
                      className="w-full border border-gray-200 bg-white/50 px-4 py-4 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#1e40af] focus:border-[#1e40af] outline-none transition-all duration-300"
                    />
                  </div>

                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                      className="w-full border border-gray-200 bg-white/50 px-4 py-4 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#1e40af] focus:border-[#1e40af] outline-none transition-all duration-300 appearance-none"
                    >
                      <option value="">Select a Service</option>
                      <option value="backlit-flex">Backlit Flex</option>
                      <option value="non-lit-flex">Non-Lit Flex</option>
                      <option value="standees">Standees</option>
                      <option value="vinyl-flex">Vinyl Flex</option>
                      <option value="consultation">Consultation</option>
                    </select>
                  </div>

                  <div className="relative">
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Project Details / Message"
                      required
                      rows="5"
                      className="w-full border border-gray-200 bg-white/50 px-4 py-4 rounded-xl text-gray-900 focus:ring-2 focus:ring-[#1e40af] focus:border-[#1e40af] outline-none transition-all duration-300 resize-none"
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileTap={{ scale: 0.95 }}
                    whileHover={{ scale: 1.02 }}
                    className="w-full bg-gradient-to-r from-[#1e40af] to-[#dd5428] text-white font-bold py-5 px-6 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-60 shadow-lg hover:shadow-xl"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        <span className="text-lg">Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Map & Info */}
            <motion.div 
              variants={slideInRight}
              className="space-y-8"
            >
              {/* Map */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <MapPin className="h-6 w-6 text-[#1e40af]" />
                  Our Location
                </h3>
                <div className="h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex flex-col items-center justify-center">
                  <MapPin className="h-16 w-16 text-[#1e40af] mb-4" />
                  <p className="text-gray-700 font-semibold text-center px-6">
                    Plot no 26, Mallikarjun nagar<br />
                    Peerzadiguda, Hyderabad, Telangana
                  </p>
                  <a
                    href="https://www.google.com/maps/place/Future+sign/@17.3919421,78.608,205m/data=!3m1!1e3!4m6!3m5!1s0x3bcb9f54365753d5:0x77b86455db213e06!8m2!3d17.391621!4d78.6084995!16s%2Fg%2F11ltl9q9g8?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 bg-gradient-to-r from-[#1e40af] to-[#dd5428] text-white font-medium py-3 px-6 rounded-lg transition-all duration-300"
                  >
                    <MapPin className="h-4 w-4" />
                    Open in Maps
                  </a>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-gradient-to-br from-[#1e40af] to-blue-400 text-white rounded-2xl shadow-xl p-8">
                <div className="flex items-center mb-8">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">Business Hours</h3>
                    <p className="text-blue-100">Always here to serve you</p>
                  </div>
                </div>
                <div className="space-y-4">
                  {[
                    { day: 'Monday - Friday', hours: '9:00 AM - 6:00 PM' },
                    { day: 'Saturday', hours: '10:00 AM - 4:00 PM' },
                    { day: 'Sunday', hours: 'Closed' },
                    { day: 'Emergency Support', hours: '24/7 Available' },
                  ].map((schedule, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center py-4 border-b border-blue-300/30"
                    >
                      <span className="font-medium text-blue-100">
                        {schedule.day}
                      </span>
                      <span className="font-semibold text-white">
                        {schedule.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantee */}
              <div className="bg-gradient-to-br from-[#dd5428] to-orange-400 rounded-2xl shadow-xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Quick Response Guarantee</h3>
                <ul className="space-y-4">
                  {[
                    'Initial response within 2 hours',
                    'Detailed quote within 24 hours',
                    'Project consultation available same day',
                    'Dedicated account manager',
                  ].map((item, index) => (
                    <li key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-white rounded-full mr-3 flex-shrink-0"></div>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Airplane Animation Modal */}
      <AnimatePresence>
        {showAirplane && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#1e40af]/95 to-[#dd5428]/95"
          >
            {/* Airplane */}
            <motion.div
              variants={airplaneVariants}
              initial="initial"
              animate="animate"
              exit={{ opacity: 0 }}
              onAnimationComplete={() => {
                setTimeout(() => setShowAirplane(false), 500)
              }}
              className="absolute top-1/2 left-0"
            >
              <Plane className="h-24 w-24 text-white" />
            </motion.div>

            {/* Success Message */}
            <div className="text-center text-white z-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="inline-flex items-center justify-center w-32 h-32 bg-white/20 rounded-full backdrop-blur-sm border border-white/20 mb-8"
              >
                <Send className="h-16 w-16 text-white" />
              </motion.div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">Message Sent!</h2>
              <p className="text-xl opacity-90 max-w-2xl mx-auto mb-10">
                Your message is on its way! We'll get back to you within 24 hours.
              </p>
              <button
                onClick={() => setShowAirplane(false)}
                className="bg-white text-[#1e40af] font-bold text-lg py-4 px-10 rounded-xl hover:bg-gray-100 transition-all"
              >
                Back to Contact
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Error Modal */}
      <AnimatePresence>
        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 flex items-center justify-center bg-black/50"
          >
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              className="bg-white rounded-2xl shadow-2xl p-10 text-center max-w-md mx-4"
            >
              <div className="text-red-500 mb-6">
                <svg className="h-16 w-16 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Failed to Send</h3>
              <p className="text-gray-600 mb-6">
                Please check your connection and try again.
              </p>
              <button
                onClick={() => setSubmitStatus(null)}
                className="bg-gradient-to-r from-[#1e40af] to-[#dd5428] text-white font-bold py-3 px-8 rounded-lg hover:shadow-lg transition-all"
              >
                Try Again
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Contact
