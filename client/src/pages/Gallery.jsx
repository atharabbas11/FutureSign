import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Filter, ZoomIn, X, ChevronRight, Star, TrendingUp, Award, Eye, ArrowRight, Play, Sparkles, Target, Users, Heart, CircleUser, Clock, Shield } from 'lucide-react'
import { Image as ImageIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import GallerySkeleton from '../Components/Skeleton/GallerySkeleton';


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


const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [selectedImage, setSelectedImage] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const handle = requestAnimationFrame(() => {
      setLoading(false)
    })
    return () => cancelAnimationFrame(handle)
  }, [])

  const categories = [
    { 
      id: 'all', 
      name: 'All Projects', 
      icon: <Star className="h-5 w-5" />, 
      count: 8,
      color: 'from-[#1e40af] to-blue-400'
    },
    { 
      id: 'backlit', 
      name: 'Backlit Flex', 
      icon: <TrendingUp className="h-5 w-5" />, 
      count: 2,
      color: 'from-[#dd5428] to-orange-400'
    },
    { 
      id: 'nonlit', 
      name: 'Non-Lit Flex', 
      icon: <Eye className="h-5 w-5" />, 
      count: 2,
      color: 'from-[#1e40af] to-blue-400'
    },
    { 
      id: 'standees', 
      name: 'Standees', 
      icon: <Award className="h-5 w-5" />, 
      count: 2,
      color: 'from-[#dd5428] to-orange-400'
    },
    { 
      id: 'vinyl', 
      name: 'Vinyl Flex', 
      icon: <Filter className="h-5 w-5" />, 
      count: 2,
      color: 'from-[#1e40af] to-blue-400'
    },
  ]

  const projects = [
    {
      id: 1,
      title: 'Shopping Mall Backlit Signage',
      category: 'backlit',
      image: '/services/blservice.jpg',
      description: 'Large format backlit flex for shopping mall entrance with vibrant LED illumination',
      size: '20ft x 4ft',
      location: 'City Center Mall'
    },
    {
      id: 2,
      title: 'Retail Store Front',
      category: 'nonlit',
      image: '/services/nblservice.jpg',
      description: 'Weather-resistant non-lit flex for retail store with UV protection',
      size: '8ft x 4ft',
      location: 'Downtown Retail District'
    },
    {
      id: 3,
      title: 'Event Standee Display',
      category: 'standees',
      image: '/services/stservice.jpg',
      description: 'Promotional standee for corporate event with easy setup design',
      size: '5ft x 1ft',
      location: 'Corporate Conference'
    },
    {
      id: 4,
      title: 'Vehicle Wrap',
      category: 'vinyl',
      image: '/services/vnlservice.jpg',
      description: 'Full vehicle wrap with custom branding and premium vinyl',
      size: 'Full wall',
      location: 'Brand Promotion Campaign'
    },
    {
      id: 5,
      title: 'Restaurant Illuminated Sign',
      category: 'backlit',
      image: '/services/blservice.jpg',
      description: 'Backlit signage for fine dining restaurant with elegant design',
      size: '20ft x 4ft',
      location: 'Luxury Restaurant'
    },
    {
      id: 6,
      title: 'Office Directional Signs',
      category: 'nonlit',
      image: '/services/nblservice.jpg',
      description: 'Interior directional signage for corporate office with matte finish',
      size: 'Various Sizes',
      location: 'Corporate Office Tower'
    },
    {
      id: 7,
      title: 'Product Launch Standee',
      category: 'standees',
      image: '/services/stservice.jpg',
      description: 'Standee display for new product launch event',
      size: '5ft x 1ft',
      location: 'Product Launch Event'
    },
    {
      id: 8,
      title: 'Wall Branding Graphics',
      category: 'vinyl',
      image: '/services/vnlservice.jpg',
      description: 'Vinyl wall graphics for brand promotion in showroom',
      size: '13ft x 15ft',
      location: 'Showroom Entrance'
    },
  ]

  const stats = [
    { value: "100+", label: "Projects Completed", icon: <Award className="h-8 w-8" /> },
    { value: "50+", label: "Happy Clients", icon: <Users className="h-8 w-8" /> },
    { value: "8+", label: "Years Experience", icon: <Clock className="h-8 w-8" /> },
    { value: "100%", label: "Quality Guarantee", icon: <Shield className="h-8 w-8" /> }
  ]

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory)

  if (loading) return <GallerySkeleton />;


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
            <ImageIcon className="h-4 w-4 text-yellow-400 mr-2" />
            <span className="text-sm font-semibold">Project Gallery</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            Our Project
            <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              Gallery
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            Showcasing our finest work in flex printing and branding solutions
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
                Start Your Project
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white/50 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all flex items-center gap-2 backdrop-blur-sm"
            >
              <Play className="h-5 w-5 mr-2" />
              View Process
            </motion.button>
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Bar */}
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
                  className={`w-16 h-16 bg-gradient-to-br ${index % 2 === 0 ? 'from-[#1e40af] to-blue-400' : 'from-[#dd5428] to-orange-400'} rounded-2xl flex items-center justify-center text-white mb-4 mx-auto`}
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

      {/* Category Filters */}
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
              <Filter className="h-4 w-4 text-[#dd5428] mr-2" />
              <span className="text-sm font-semibold text-[#dd5428]">Browse Our Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Filter By
              <span className="block bg-gradient-to-r from-[#1e40af] to-[#dd5428] bg-clip-text text-transparent">
                Category
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Filter through our portfolio by category to see specific types of projects
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="flex flex-wrap justify-center gap-4 mb-16">
            {categories.map(category => (
              <motion.button
                key={category.id}
                variants={itemVariants}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`relative group flex items-center gap-3 px-6 py-4 rounded-2xl font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-xl`
                    : 'bg-white/90 backdrop-blur-sm text-gray-700 hover:shadow-xl border border-gray-100'
                }`}
              >
                <div className={`flex items-center gap-2 ${
                  selectedCategory === category.id ? 'text-white' : 'text-[#1e40af]'
                }`}>
                  {category.icon}
                  {category.name}
                </div>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                  selectedCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-blue-100 text-[#1e40af]'
                }`}>
                  {category.count}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Gallery Grid - FIXED SECTION */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.02, 
                    y: -5,
                    transition: { type: "spring", stiffness: 400, damping: 25 }
                  }}
                  className="group relative"
                >
                  {/* Gradient border effect */}
                  <div className={`absolute -inset-1 bg-gradient-to-r ${
                    project.category === 'backlit' ? 'from-[#1e40af] to-blue-400' :
                    project.category === 'nonlit' ? 'from-[#dd5428] to-orange-400' :
                    project.category === 'standees' ? 'from-[#1e40af] to-blue-400' :
                    'from-[#dd5428] to-orange-400'
                  } rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-1000`} />
                  
                  <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer border border-gray-100 overflow-hidden"
                    onClick={() => setSelectedImage(project)}
                  >
                    {/* Image container with overlay */}
                    <div className="relative h-64 overflow-hidden">
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      
                      {/* Hover overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 transform group-hover:scale-110 transition-transform duration-300">
                          <ZoomIn className="h-8 w-8 text-white" />
                        </div>
                      </div>
                      
                      {/* Category badge */}
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#1e40af] rounded-full text-sm font-medium">
                          {categories.find(cat => cat.id === project.category)?.name}
                        </span>
                      </div>
                    </div>
                    
                    {/* Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#1e40af] transition-colors">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <span className="flex items-center gap-1">
                          <span className="font-medium">Size:</span> {project.size}
                        </span>
                        <span className="flex items-center gap-1">
                          <span className="font-medium">Location:</span> {project.location}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-20"
            >
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-gray-200 to-gray-300 rounded-full mb-6">
                <Filter className="h-12 w-12 text-gray-500" />
              </div>
              <h3 className="text-2xl font-bold text-gray-600 mb-2">No projects found</h3>
              <p className="text-gray-500 max-w-md mx-auto">
                Try selecting a different category to see related projects
              </p>
            </motion.div>
          )}
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
            Ready to Start Your Project?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-blue-100 mb-10 max-w-3xl mx-auto">
            Inspired by our work? Let's create something amazing for your brand.
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
              <Link to="/services" className="flex items-center gap-2">
                View Services
                <ArrowRight className="h-5 w-5" />
              </Link>
            </motion.button>
          </motion.div>
        </div>
      </motion.section>

      {/* Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              className="relative max-w-6xl w-full max-h-[90vh]"
              onClick={e => e.stopPropagation()}
            >
              {/* Close button */}
              <motion.button
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white hover:text-gray-300 transition z-50 bg-black/50 rounded-full p-2 backdrop-blur-sm"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <X className="h-8 w-8" />
              </motion.button>

              {/* Image */}
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full h-full max-h-[70vh] object-contain rounded-xl shadow-2xl"
              />

              {/* Info panel */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-8 text-white rounded-b-xl"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-2">{selectedImage.title}</h3>
                    <p className="text-gray-200 mb-4 max-w-2xl">{selectedImage.description}</p>
                    
                    <div className="flex flex-wrap gap-6">
                      <div>
                        <div className="text-sm text-gray-300 mb-1">Category</div>
                        <div className="font-medium">
                          {categories.find(cat => cat.id === selectedImage.category)?.name}
                        </div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-300 mb-1">Size</div>
                        <div className="font-medium">{selectedImage.size}</div>
                      </div>
                      <div>
                        <div className="text-sm text-gray-300 mb-1">Location</div>
                        <div className="font-medium">{selectedImage.location}</div>
                      </div>
                    </div>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer bg-gradient-to-r from-[#1e40af] to-[#dd5428] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 whitespace-nowrap"
                    onClick={() => {
                      setSelectedImage(null)
                      window.location.href = '/contact'
                    }}
                  >
                    Start Similar Project
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery