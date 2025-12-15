import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Sun, Moon, Image, Zap, ArrowRight, CheckCircle, Star, Shield, Clock, Award, Sparkles, Target, Users, TrendingUp, Play, CircleUser, Heart } from 'lucide-react'
import ServicesSkeleton from '../Components/Skeleton/ServicesSkeleton';

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

const scaleUp = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
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
    hexagons: (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute w-8 h-8 border border-${color}-300`}
            style={{
              left: `${(i % 5) * 20}%`,
              top: `${Math.floor(i / 5) * 20}%`,
              opacity: opacity * 0.5
            }}
            animate={{
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    ),
    circles: (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full border border-${color}-300`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${20 + Math.random() * 60}px`,
              height: `${20 + Math.random() * 60}px`,
              opacity: opacity * 0.3
            }}
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
    ),
    grid: (
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <React.Fragment key={i}>
            <motion.div
              className={`absolute w-full h-px bg-gradient-to-r from-transparent via-${color}-300 to-transparent`}
              style={{
                top: `${i * 5}%`,
                opacity: opacity * 0.5
              }}
              animate={{
                backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div
              className={`absolute h-full w-px bg-gradient-to-b from-transparent via-${color}-300 to-transparent`}
              style={{
                left: `${i * 5}%`,
                opacity: opacity * 0.5
              }}
              animate={{
                backgroundPosition: ['0% 0%', '0% 100%', '0% 0%']
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "linear"
              }}
            />
          </React.Fragment>
        ))}
      </div>
    )
  };

  return patterns[type] || patterns.dots;
};

const Services = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setLoading(false)
    })
    return () => cancelAnimationFrame(handle)
  }, [])

  const services = [
    {
      icon: <Sun className="h-12 w-12" />,
      title: "Backlit Flex",
      description: "High-quality backlit flex printing perfect for illuminated displays and signage with vibrant colors that shine through when lit.",
      features: ["Vibrant colors", "Light diffusion", "Durable material", "Perfect for lit displays"],
      image: "/services/blservice.jpg",
      gradient: "from-[#1e40af] to-blue-400"
    },
    {
      icon: <Moon className="h-12 w-12" />,
      title: "Non-Lit Flex",
      description: "Standard flex printing for outdoor and indoor signage that maintains excellent color quality without backlighting.",
      features: ["Weather resistant", "UV protected", "Cost-effective", "Various finishes"],
      image: "/services/nblservice.jpg",
      gradient: "from-[#dd5428] to-orange-400"
    },
    {
      icon: <Image className="h-12 w-12" />,
      title: "Standees",
      description: "Custom standees and displays for promotional events, retail spaces, and exhibitions with sturdy construction.",
      features: ["Easy setup", "Various sizes", "Lightweight", "Reusable"],
      image: "/services/stservice.jpg",
      gradient: "from-[#1e40af] to-blue-400"
    },
    {
      icon: <Zap className="h-12 w-12" />,
      title: "Vinyl Flex",
      description: "Premium vinyl flex printing for vehicle wraps, wall graphics, and custom applications with excellent adhesion.",
      features: ["High adhesion", "Removable options", "Glossy/matte finish", "Weather proof"],
      image: "/services/vnlservice.jpg",
      gradient: "from-[#dd5428] to-orange-400"
    }
  ]

  const stats = [
    { value: "500+", label: "Projects Completed", icon: <Award className="h-8 w-8" />, color: "from-[#1e40af] to-blue-400" },
    { value: "24/7", label: "Customer Support", icon: <Clock className="h-8 w-8" />, color: "from-[#dd5428] to-orange-400" },
    { value: "100%", label: "Quality Guarantee", icon: <Shield className="h-8 w-8" />, color: "from-[#1e40af] to-blue-400" },
    { value: "98%", label: "Client Satisfaction", icon: <Star className="h-8 w-8" />, color: "from-[#dd5428] to-orange-400" }
  ]

  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Premium Quality Materials",
      description: "We use only the highest quality materials for durable, vibrant, and long-lasting prints",
      color: "from-[#1e40af] to-blue-400"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Expert Team",
      description: "Experienced professionals with years of expertise in flex printing",
      color: "from-[#dd5428] to-orange-400"
    },
    {
      icon: <CheckCircle className="h-8 w-8" />,
      title: "Fast Turnaround",
      description: "Quick delivery without compromising on quality and attention to detail",
      color: "from-[#1e40af] to-blue-400"
    }
  ]

  const processSteps = [
    { 
      number: "01", 
      title: "Design Consultation", 
      description: "Share your vision with our expert team for professional guidance",
      icon: <Sparkles className="h-6 w-6" />,
      color: "from-[#1e40af] to-blue-400"
    },
    { 
      number: "02", 
      title: "Material Selection", 
      description: "Choose from premium materials tailored to your specific needs",
      icon: <Image className="h-6 w-6" />,
      color: "from-[#dd5428] to-orange-400"
    },
    { 
      number: "03", 
      title: "Precision Printing", 
      description: "High-quality printing using advanced technology and techniques",
      icon: <Zap className="h-6 w-6" />,
      color: "from-[#1e40af] to-blue-400"
    },
    { 
      number: "04", 
      title: "Quality Delivery", 
      description: "Careful packaging and timely delivery to your location",
      icon: <Award className="h-6 w-6" />,
      color: "from-[#dd5428] to-orange-400"
    }
  ]

  if (loading) return <ServicesSkeleton />;

  return (
    <div className="pt-0">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-[#1e40af] via-blue-600 to-[#dd5428] text-white overflow-hidden">
        <BackgroundPattern type="dots" color="blue" opacity={0.1} />
        
        {/* Background Elements */}
        <motion.div
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.1, 0.2, 0.1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            repeatType: "reverse"
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full blur-3xl"
        ></motion.div>
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.05, 0.1, 0.05]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
            delay: 1
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
        ></motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative py-24 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-6"
          >
            <Zap className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-sm font-semibold">Premium Printing Services</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Our Printing
            <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Solutions
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Premium flex printing services that transform your brand vision into stunning reality
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#1e40af] font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all flex items-center gap-2 shadow-lg"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm"
            >
              <Play className="h-5 w-5 mr-2" />
              Watch Demo
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative py-16 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
      >
        <BackgroundPattern type="grid" color="blue" opacity={0.03} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            variants={containerVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center text-white mb-4 mx-auto`}
                >
                  {stat.icon}
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative py-20 bg-gradient-to-b from-white to-orange-50 overflow-hidden"
      >
        <BackgroundPattern type="circles" color="orange" opacity={0.03} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#dd5428]/10 to-orange-400/10 rounded-full mb-4 border border-orange-200">
              <CheckCircle className="h-4 w-4 text-[#dd5428] mr-2" />
              <span className="text-sm font-semibold text-[#dd5428]">Why Choose Us</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose
              <span className="block bg-gradient-to-r from-[#1e40af] to-[#dd5428] bg-clip-text text-transparent">
                Our Services?
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge technology with expert craftsmanship to deliver exceptional printing solutions
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center text-white mb-6`}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-lg">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Services Grid */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
      >
        <BackgroundPattern type="grid" color="blue" opacity={0.03} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#1e40af]/10 to-blue-400/10 rounded-full mb-4 border border-blue-200">
              <Image className="h-4 w-4 text-[#1e40af] mr-2" />
              <span className="text-sm font-semibold text-[#1e40af]">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Premium Printing
              <span className="block bg-gradient-to-r from-[#1e40af] to-[#dd5428] bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each service is crafted with precision and attention to detail
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                className="relative group"
              >
                {/* Gradient border effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r ${service.gradient} rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000`} />
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden border border-gray-100">
                  {/* Image container */}
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    />
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    
                    {/* Icon badge */}
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`absolute top-6 right-6 bg-gradient-to-br ${service.gradient} p-3 rounded-xl text-white shadow-lg`}
                    >
                      {service.icon}
                    </motion.div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex items-center text-gray-700 group/feature"
                        >
                          <div className="mr-3">
                            <CheckCircle className="h-5 w-5 text-green-500 group-hover/feature:scale-110 transition-transform" />
                          </div>
                          <span className="font-medium">{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <motion.div
                      whileHover={{ x: 5 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <Link
                        to="/contact"
                        className={`inline-flex items-center bg-gradient-to-r ${service.gradient} text-white px-8 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300`}
                      >
                        Get Quote
                        <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                      </Link>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Process Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative py-20 bg-gradient-to-b from-white to-orange-50 overflow-hidden"
      >
        <BackgroundPattern type="hexagons" color="orange" opacity={0.04} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#dd5428]/10 to-orange-400/10 rounded-full mb-4 border border-orange-200">
              <TrendingUp className="h-4 w-4 text-[#dd5428] mr-2" />
              <span className="text-sm font-semibold text-[#dd5428]">Our Process</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How We Deliver
              <span className="block bg-gradient-to-r from-[#1e40af] to-[#dd5428] bg-clip-text text-transparent">
                Excellence
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A seamless process from concept to completion
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  transition: { type: "spring", stiffness: 400, damping: 25 }
                }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative group text-center"
              >
                {/* Step Badge */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className={`w-16 h-16 bg-gradient-to-br ${step.color} rounded-2xl flex items-center justify-center text-white text-xl font-bold mb-6 mx-auto relative overflow-hidden`}
                >
                  <div className="absolute inset-4 bg-white/20 rounded-xl blur-md"></div>
                  <div className="relative z-10">{step.number}</div>
                </motion.div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-12 h-12 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center text-white mb-4 mx-auto`}
                >
                  {step.icon}
                </motion.div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="relative py-20 bg-gradient-to-r from-[#1e40af] to-[#dd5428] text-white overflow-hidden"
      >
        <BackgroundPattern type="dots" color="white" opacity={0.1} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transform Your Vision?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Let's collaborate to create stunning prints that elevate your brand presence.
            Contact us today for a personalized quote.
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-[#1e40af] font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all flex items-center gap-2 shadow-lg"
            >
              <Link to="/contact" className="flex items-center gap-2">
                Get Free Quote
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <Link to="/portfolio" className="flex items-center gap-2">
                View Our Work
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>
    </div>
  )
}

export default Services