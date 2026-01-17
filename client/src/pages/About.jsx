import React, { useState, useEffect, useRef } from 'react'
import AboutSkeleton from '../Components/Skeleton/AboutSkeleton'
import { useNavigate } from 'react-router-dom'
import { motion, useAnimation, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowLeft, Play, Clock, Shield, Store, ShoppingBag, Sparkles, Zap, TrendingUp, Printer, Truck, Target, Heart, Star, Award, Users, CheckCircle, CircleUser, Plus, Minus, ChevronLeft, ChevronRight } from 'lucide-react';
import ReactCompareImage from 'react-compare-image';
import ClientsCarousel from '../Components/UI/ClientsCarousel';

// Container variants for staggered children
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Reduced from 0.1
      delayChildren: 0.1 // Reduced from 0.2
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

// Background Pattern Component (like Home page)
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

// Navigation Button Component
const NavigationButton = ({ to, children, variant = "primary", className = "", icon = ArrowRight }) => {
  const navigate = useNavigate();
  const Icon = icon;
  
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    // Immediate navigation without any delay
    navigate(to);
    window.scrollTo(0, 0);
  };
  
  const baseClasses = "font-semibold px-8 py-4 rounded-xl transition-all flex items-center gap-2 cursor-pointer select-none ";
  
  const variants = {
    primary: "bg-white text-[#1e40af] hover:bg-blue-50 shadow-lg",
    secondary: "bg-transparent border-2 border-white/50 text-white hover:bg-white/10 backdrop-blur-sm",
    gradient: "bg-gradient-to-r from-[#1e40af] to-[#dd5428] text-white hover:shadow-lg",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white/10"
  };
  
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleClick}
      className={`${baseClasses} ${variants[variant]} ${className}`}
    >
      {children}
      <Icon className="h-5 w-5" />
    </motion.button>
  );
};

// Gallery Link Button Component
const GalleryButton = () => {
  const navigate = useNavigate();
  
  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    
    navigate('/gallery');
    window.scrollTo(0, 0);
  };
  
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.05 }}
      onClick={handleClick}
      className="inline-flex items-center gap-3 bg-gradient-to-r from-[#1e40af] to-[#dd5428] text-white font-semibold px-6 py-3 rounded-xl hover:shadow-lg transition-all group cursor-pointer select-none"
    >
      View More Projects
      <ArrowRight className="h-5 w-5 group-hover:translate-x-2 transition-transform" />
    </motion.button>
  );
};

// OurWorkProcess Component
const OurWorkProcess = () => {
  const processes = [
    {
      id: 1,
      step: "01",
      title: "Design Consultation",
      description: "Share your vision with our expert team for professional guidance",
      icon: <Sparkles className="h-6 w-6" />,
      color: "from-[#1e40af] to-blue-400"
    },
    {
      id: 2,
      step: "02",
      title: "Material Selection",
      description: "Choose from premium materials tailored to your needs",
      icon: <Store className="h-6 w-6" />,
      color: "from-[#dd5428] to-orange-400"
    },
    {
      id: 3,
      step: "03",
      title: "Digital Proofing",
      description: "Review and approve detailed proofs before production",
      icon: <CheckCircle className="h-6 w-6" />,
      color: "from-[#1e40af] to-blue-400"
    },
    {
      id: 4,
      step: "04",
      title: "Precision Printing",
      description: "High-quality printing with advanced technology",
      icon: <Printer className="h-6 w-6" />,
      color: "from-[#dd5428] to-orange-400"
    },
    {
      id: 5,
      step: "05",
      title: "Quality Control",
      description: "Rigorous checks for perfection in every detail",
      icon: <Zap className="h-6 w-6" />,
      color: "from-[#1e40af] to-blue-400"
    },
    {
      id: 6,
      step: "06",
      title: "Delivery",
      description: "Careful packaging and timely delivery",
      icon: <Truck className="h-6 w-6" />,
      color: "from-[#dd5428] to-orange-400"
    }
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
    >
      <BackgroundPattern type="dots" color="blue" opacity={0.03} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#1e40af]/10 to-blue-400/10 rounded-full mb-4 border border-blue-200">
            <TrendingUp className="h-4 w-4 text-[#1e40af] mr-2" />
            <span className="text-sm font-semibold text-[#1e40af]">Our Process</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            How We Deliver
            <span className="block bg-gradient-to-r from-[#1e40af] to-[#dd5428] bg-clip-text text-transparent">
              Excellence
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A streamlined 6-step process ensuring premium quality from concept to completion
          </p>
        </motion.div>

        {/* Process Grid */}
        <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {processes.map((process, index) => (
            <motion.div
              key={process.id}
              variants={itemVariants}
              custom={index}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { type: "spring", stiffness: 400, damping: 25 }
              }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100 relative group"
            >
              {/* Step Badge */}
              <motion.div
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
                className={`w-16 h-16 bg-gradient-to-br ${process.color} rounded-2xl flex items-center justify-center text-white text-xl font-bold mb-6 relative overflow-hidden`}
              >
                <div className="absolute inset-4 bg-white/20 rounded-xl blur-md"></div>
                <div className="relative z-10">{process.step}</div>
              </motion.div>
              
              {/* Icon */}
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className={`w-12 h-12 bg-gradient-to-br ${process.color} rounded-xl flex items-center justify-center text-white mb-4`}
              >
                {process.icon}
              </motion.div>
              
              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {process.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {process.description}
              </p>
              
              {/* Connecting Line */}
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: "80%" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`h-1 bg-gradient-to-r ${process.color} rounded-full mt-6`}
              ></motion.div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={fadeInUp}
          className="mt-16"
        >
          <div className="bg-gradient-to-r from-white/80 to-blue-50/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-gray-100">
            <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-8 text-center">
              {[
                { value: "98%", label: "Client Satisfaction" },
                { value: "3-5 Days", label: "Average Turnaround" },
                { value: "500+", label: "Projects Completed" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="text-center"
                >
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#1e40af] to-[#dd5428] bg-clip-text text-transparent mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-700 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

// Quality Section Component
const QualitySection = () => {
  const qualityFeatures = [
    { 
      title: "Precise Sizing", 
      description: "Exact measurements for perfect fit every time",
      icon: <Target className="h-6 w-6" />,
      color: 'from-[#1e40af] to-blue-400'
    },
    { 
      title: "Accurate Colors", 
      description: "True-to-design color reproduction",
      icon: <Printer className="h-6 w-6" />,
      color: 'from-[#dd5428] to-orange-400'
    },
    { 
      title: "Durable Material", 
      description: "Long-lasting materials built to withstand elements",
      icon: <Shield className="h-6 w-6" />,
      color: 'from-[#1e40af] to-blue-400'
    },
    { 
      title: "Edge Perfection", 
      description: "Clean, precise cuts and finishes",
      icon: <Zap className="h-6 w-6" />,
      color: 'from-[#dd5428] to-orange-400'
    },
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative py-20 bg-gradient-to-b from-white to-orange-50 overflow-hidden"
    >
      <BackgroundPattern type="hexagons" color="orange" opacity={0.04} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Content */}
          <motion.div
            variants={slideInLeft}
            className="space-y-8"
          >
            <div>
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#dd5428]/10 to-orange-400/10 rounded-full mb-4 border border-orange-200"
              >
                <Award className="h-4 w-4 text-[#dd5428] mr-2" />
                <span className="text-sm font-semibold text-[#dd5428]">Excellence</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Quality At Its
                <span className="block bg-gradient-to-r from-[#1e40af] to-[#dd5428] bg-clip-text text-transparent">
                  Best
                </span>
              </motion.h2>
              <motion.h3 variants={fadeInUp} className="text-2xl md:text-3xl font-semibold text-gray-700 mb-6">
                What makes our quality exceptional?
              </motion.h3>
              <motion.p variants={fadeInUp} className="text-lg text-gray-600 leading-relaxed">
                We combine cutting-edge technology with expert craftsmanship to deliver printing solutions that not only meet but exceed expectations. Every project undergoes rigorous quality checks to ensure perfection.
              </motion.p>
            </div>

            <motion.div variants={containerVariants} className="grid sm:grid-cols-2 gap-6">
              {qualityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all border border-gray-100"
                >
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-12 h-12 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mb-4`}
                  >
                    {feature.icon}
                  </motion.div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {feature.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right - Visual */}
          <motion.div
            variants={slideInRight}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#dd5428] to-orange-400 rounded-2xl p-8 lg:rounded-l-[60px] h-full min-h-[500px] flex items-center justify-center relative overflow-hidden">
              <motion.div
                animate={{ 
                  y: [0, -20, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute top-8 left-8 w-24 h-24 bg-white/10 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ 
                  y: [0, 20, 0],
                  rotate: [0, -8, 8, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 0.5
                }}
                className="absolute bottom-8 right-8 w-32 h-32 bg-white/10 rounded-full"
              ></motion.div>
              
              <div className="text-white text-center relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-24 h-24 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                >
                  <Award className="h-12 w-12" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-4">Craftsmanship</h3>
                <p className="text-orange-100 max-w-md mx-auto">Where precision engineering meets artistic vision</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// Testimonials Carousel Component
const TestimonialsCarousel = () => {
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const timerRef = useRef(null);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      company: "Tech Innovations Ltd",
      role: "Marketing Director",
      content: "FutureSign transformed our brand presence with their exceptional printing quality. The attention to detail and professional service exceeded our expectations.",
      rating: 5,
      avatarColor: 'bg-gradient-to-br from-[#1e40af] to-blue-400'
    },
    {
      id: 2,
      name: "Michael Chen",
      company: "Global Retail Corp",
      role: "Brand Manager",
      content: "Outstanding service from start to finish. The team understood our vision and delivered beyond what we imagined. Highly recommended!",
      rating: 5,
      avatarColor: 'bg-gradient-to-br from-[#dd5428] to-orange-400'
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      company: "Creative Solutions Inc",
      role: "Creative Director",
      content: "The quality of their flex printing is unmatched. Our banners and displays have received countless compliments. Truly professional partners.",
      rating: 5,
      avatarColor: 'bg-gradient-to-br from-[#1e40af] to-blue-400'
    },
    {
      id: 4,
      name: "David Thompson",
      company: "Enterprise Solutions",
      role: "Operations Manager",
      content: "Fast delivery, excellent quality, and great customer service. FutureSign has become our go-to printing partner for all our branding needs.",
      rating: 5,
      avatarColor: 'bg-gradient-to-br from-[#dd5428] to-orange-400'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-rotate testimonials
  useEffect(() => {
    if (isAutoPlaying) {
      timerRef.current = setInterval(() => {
        nextTestimonial();
      }, 5000);
    }

    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [isAutoPlaying]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
    if (timerRef.current) {
      clearInterval(timerRef.current);
    }
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative py-20 bg-gradient-to-b from-orange-50 to-white overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <BackgroundPattern type="circles" color="orange" opacity={0.05} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#dd5428]/10 to-orange-400/10 rounded-full mb-4 border border-orange-200">
            <Star className="h-4 w-4 text-[#dd5428] mr-2" />
            <span className="text-sm font-semibold text-[#dd5428]">Client Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            What Our Clients
            <span className="block bg-gradient-to-r from-[#1e40af] to-[#dd5428] bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Testimonial Card */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial}
              initial={{ opacity: 0, scale: 0.95, x: 100 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              exit={{ opacity: 0, scale: 0.95, x: -100 }}
              transition={{ duration: 0.4 }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 relative overflow-hidden"
            >
              {/* Background Decoration */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1e40af]/5 to-[#dd5428]/5 rounded-full -translate-y-16 translate-x-16"></div>
              
              <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                {/* Client Avatar */}
                <div className="flex-shrink-0">
                  <motion.div 
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`w-24 h-24 rounded-2xl flex items-center justify-center text-white text-2xl font-bold ${testimonials[currentTestimonial].avatarColor} shadow-lg`}
                  >
                    {testimonials[currentTestimonial].name.charAt(0)}
                  </motion.div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-amber-400 fill-current"
                      />
                    ))}
                  </div>

                  <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 relative">
                    <span className="text-4xl text-[#1e40af]/30 absolute -top-4 -left-2">"</span>
                    {testimonials[currentTestimonial].content}
                  </blockquote>

                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900 text-lg">
                        {testimonials[currentTestimonial].name}
                      </div>
                      <div className="text-[#1e40af]">
                        {testimonials[currentTestimonial].role}, {testimonials[currentTestimonial].company}
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full"
                      >
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Verified Client
                      </motion.div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-xl transition-all border border-gray-200 backdrop-blur-sm"
          >
            <ChevronLeft className="h-6 w-6" />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 rounded-full w-12 h-12 flex items-center justify-center shadow-xl transition-all border border-gray-200 backdrop-blur-sm"
          >
            <ChevronRight className="h-6 w-6" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentTestimonial ? 'bg-gradient-to-r from-[#1e40af] to-[#dd5428]' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// FAQ Component
const FAQSection = ({ activeFaq, setActiveFaq }) => {
  const faqs = [
    {
      question: "What materials do you use for flex printing?",
      answer: "We use premium quality PVC flex material that is durable, weather-resistant, and perfect for both indoor and outdoor applications. Our materials are UV protected to ensure colors don't fade."
    },
    {
      question: "How long does a typical printing project take?",
      answer: "Standard projects are completed within 3-5 business days. Rush orders can be accommodated within 24-48 hours depending on the complexity and size of the project."
    },
    {
      question: "Do you provide design services?",
      answer: "Yes, we offer comprehensive design services. Our expert design team can create custom designs from scratch or modify your existing artwork to ensure optimal print quality."
    }
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
    >
      <BackgroundPattern type="grid" color="blue" opacity={0.03} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Visual */}
          <motion.div
            variants={slideInLeft}
            className="relative"
          >
            <div className="bg-gradient-to-br from-[#1e40af] to-blue-400 rounded-2xl p-8 lg:rounded-r-[60px] h-full min-h-[400px] flex items-center justify-center relative overflow-hidden">
              <motion.div
                animate={{ 
                  rotate: [0, 10, -10, 0],
                  scale: [1, 1.05, 1]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
                className="absolute top-4 left-4 w-16 h-16 bg-white/10 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ 
                  rotate: [0, -15, 15, 0],
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  duration: 8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  delay: 1
                }}
                className="absolute bottom-4 right-4 w-20 h-20 bg-white/10 rounded-full"
              ></motion.div>
              
              <div className="text-white text-center relative z-10">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                >
                  <Target className="h-10 w-10" />
                </motion.div>
                <h3 className="text-3xl font-bold mb-4">Got Questions?</h3>
                <p className="text-blue-100">We're here to help with everything you need to know</p>
              </div>
            </div>
          </motion.div>

          {/* Right - FAQ */}
          <motion.div
            variants={slideInRight}
            className="space-y-6"
          >
            <div className="text-left mb-8">
              <motion.div
                variants={fadeInUp}
                className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#1e40af]/10 to-blue-400/10 rounded-full mb-4 border border-blue-200"
              >
                <CircleUser className="h-4 w-4 text-[#1e40af] mr-2" />
                <span className="text-sm font-semibold text-[#1e40af]">FAQ</span>
              </motion.div>
              <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked
                <span className="block bg-gradient-to-r from-[#1e40af] to-[#dd5428] bg-clip-text text-transparent">
                  Questions
                </span>
              </motion.h2>
            </div>

            <motion.div variants={containerVariants} className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group"
                >
                  <motion.div 
                    whileHover={{ scale: 1.02 }}
                    className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 cursor-pointer hover:shadow-xl transition-all border border-gray-100 hover:border-blue-200"
                    onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-[#1e40af] transition-colors">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: activeFaq === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-[#1e40af]/10 to-blue-400/10 rounded-lg flex items-center justify-center">
                          {activeFaq === index ? (
                            <Minus className="h-4 w-4 text-[#1e40af]" />
                          ) : (
                            <Plus className="h-4 w-4 text-[#1e40af]" />
                          )}
                        </div>
                      </motion.div>
                    </div>
                    <AnimatePresence>
                      {activeFaq === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="w-full h-px bg-gradient-to-r from-[#1e40af]/20 to-[#dd5428]/20 my-4"></div>
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

// Main About Component
const About = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const [isClient, setIsClient] = useState(false);

  // Initialize as client-side - NO DELAY
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Timeline Data
  const timeline = [
    { 
      year: '2023', 
      event: 'Company Founded', 
      description: 'Started our journey with a vision for premium flex printing',
      icon: <Award className="h-6 w-6 text-white" />,
      color: 'from-[#1e40af] to-blue-400'
    },
    { 
      year: '2023', 
      event: 'First Major Client', 
      description: 'Secured our first enterprise-level printing project',
      icon: <Users className="h-6 w-6 text-white" />,
      color: 'from-[#dd5428] to-orange-400'
    },
    { 
      year: '2024', 
      event: 'Expanded Team', 
      description: 'Grew our expert team of designers and technicians',
      icon: <TrendingUp className="h-6 w-6 text-white" />,
      color: 'from-[#1e40af] to-blue-400'
    },
    { 
      year: '2024', 
      event: 'Advanced Technology', 
      description: 'Invested in eco-solvent & UV printing technology',
      icon: <Zap className="h-6 w-6 text-white" />,
      color: 'from-[#dd5428] to-orange-400'
    },
    { 
      year: '2025', 
      event: '500+ Projects', 
      description: 'Achieved milestone of 500+ successful projects',
      icon: <Target className="h-6 w-6 text-white" />,
      color: 'from-[#1e40af] to-blue-400'
    },
  ]

  // Team Data
  const team = [
    { name: 'Alex Johnson', role: 'CEO & Founder', img: '/images/home1.jpg', expertise: 'Printing Technology' },
    { name: 'Sarah Chen', role: 'Creative Director', img: '/images/home2.jpg', expertise: 'Design & Branding' },
    { name: 'Mike Rodriguez', role: 'Production Head', img: '/images/home3.jpg', expertise: 'Quality Control' },
    { name: 'Emma Wilson', role: 'Client Relations', img: '/images/home1.jpg', expertise: 'Customer Success' },
  ]

  // Before/After Images
  const beforeAfterItems = [
    { 
      before: '/images/home1.jpg', 
      after: '/images/home2.jpg',
      title: 'Brand Transformation',
      description: 'From concept to vibrant reality - see how we bring brand visions to life'
    },
    { 
      before: '/images/home2.jpg', 
      after: '/images/home1.jpg',
      title: 'Quality Enhancement',
      description: 'Witness the precision and attention to detail in every project'
    },
  ]

  // Values Data
  const values = [
    {
      title: "Excellence",
      description: "We never compromise on quality, delivering only the best results for our clients",
      icon: <Award className="h-8 w-8" />,
      color: "from-[#1e40af] to-blue-400"
    },
    {
      title: "Innovation",
      description: "Continuously adopting new technologies and techniques to stay ahead",
      icon: <Zap className="h-8 w-8" />,
      color: "from-[#dd5428] to-orange-400"
    },
    {
      title: "Integrity",
      description: "Honest communication and transparent processes build lasting relationships",
      icon: <Shield className="h-8 w-8" />,
      color: "from-[#1e40af] to-blue-400"
    },
    {
      title: "Collaboration",
      description: "Working closely with clients to understand and exceed their vision",
      icon: <Users className="h-8 w-8" />,
      color: "from-[#dd5428] to-orange-400"
    },
    {
      title: "Sustainability",
      description: "Eco-friendly practices and materials for a better tomorrow",
      icon: <Sparkles className="h-8 w-8" />,
      color: "from-[#1e40af] to-blue-400"
    },
    {
      title: "Reliability",
      description: "Consistent quality and timely delivery you can count on",
      icon: <CheckCircle className="h-8 w-8" />,
      color: "from-[#dd5428] to-orange-400"
    }
  ]

  if (!isClient) return <AboutSkeleton />;

  return (
    <div className="pt-0">
      {/* Hero Header */}
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
          transition={{ duration: 0.3 }} // Reduced from 0.6
          className="relative py-24 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }} // Reduced from 0.6
            className="text-5xl md:text-7xl font-bold mb-6 leading-tight"
          >
            About
            <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
              FutureSign
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }} // Reduced delay
            className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto mb-10 leading-relaxed"
          >
            We are pioneers in premium flex printing, transforming visions into vibrant realities with cutting-edge technology and unparalleled craftsmanship
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }} // Reduced delay
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <NavigationButton to="/contact" variant="primary">
              Start Your Project
            </NavigationButton>
            <NavigationButton to="/services" variant="secondary">
              View Services
            </NavigationButton>
          </motion.div>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative py-20 bg-white overflow-hidden"
      >
        <BackgroundPattern type="grid" color="blue" opacity={0.03} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission */}
            <motion.div
              variants={slideInLeft}
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1e40af]/10 to-blue-400/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="relative z-10">
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#1e40af]/20 to-blue-400/20 rounded-full mb-6"
                >
                  <Target className="h-5 w-5 text-[#1e40af] mr-2" />
                  <span className="font-semibold text-[#1e40af]">Our Mission</span>
                </motion.div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  To deliver exceptional printing solutions that elevate brands and inspire connections
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We combine innovative technology with artistic vision to create printing solutions that not only meet but exceed expectations, helping businesses stand out in today's competitive landscape.
                </p>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              variants={slideInRight}
              className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-10 relative overflow-hidden group"
            >
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-br from-[#dd5428]/10 to-orange-400/10 rounded-full translate-y-16 -translate-x-16"></div>
              <div className="relative z-10">
                <motion.div
                  variants={fadeInUp}
                  className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#dd5428]/20 to-orange-400/20 rounded-full mb-6"
                >
                  <Sparkles className="h-5 w-5 text-[#dd5428] mr-2" />
                  <span className="font-semibold text-[#dd5428]">Our Vision</span>
                </motion.div>
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  To be the most trusted partner for premium flex printing worldwide
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  We envision a future where every brand can access high-quality, sustainable printing solutions that make a lasting impact and drive business growth.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Timeline Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
      >
        <BackgroundPattern type="dots" color="blue" opacity={0.03} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#1e40af]/10 to-blue-400/10 rounded-full mb-4 border border-blue-200">
              <Clock className="h-4 w-4 text-[#1e40af] mr-2" />
              <span className="text-sm font-semibold text-[#1e40af]">Our Journey</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Milestones That
              <span className="block bg-gradient-to-r from-[#1e40af] to-[#dd5428] bg-clip-text text-transparent">
                Shape Our Story
              </span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-[#1e40af] via-blue-400 to-[#dd5428]"></div>
            
            {/* Timeline Items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Content */}
                  <div className={`w-5/12 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-gray-100 hover:shadow-2xl transition-all">
                      <div className={`inline-flex items-center px-4 py-2 bg-gradient-to-r ${item.color} bg-opacity-10 rounded-lg mb-4`}>
                        {item.icon}
                        <span className="ml-2 font-semibold text-gray-900">{item.year}</span>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.event}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>

                  {/* Circle */}
                  <div className="absolute left-1/2 transform -translate-x-1/2">
                    <motion.div
                      whileHover={{ scale: 1.2 }}
                      className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-full flex items-center justify-center shadow-xl border-4 border-white`}
                    >
                      <div className="text-white">{item.year.slice(-2)}</div>
                    </motion.div>
                  </div>

                  {/* Empty Space */}
                  <div className="w-5/12"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* Before & After Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative py-20 bg-white overflow-hidden"
      >
        <BackgroundPattern type="circles" color="orange" opacity={0.03} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#1e40af]/10 to-blue-400/10 rounded-full mb-4 border border-blue-200">
              <Sparkles className="h-4 w-4 text-[#1e40af] mr-2" />
              <span className="text-sm font-semibold text-[#1e40af]">Our Work</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Transforming Visions
              <span className="block bg-gradient-to-r from-[#1e40af] to-[#dd5428] bg-clip-text text-transparent">
                Into Reality
              </span>
            </h2>
          </motion.div>

          <div className="space-y-20">
            {beforeAfterItems.map((item, index) => (
              <motion.div
                key={index}
                variants={index % 2 === 0 ? slideInLeft : slideInRight}
                className={`flex flex-col lg:flex-row items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''} gap-12`}
              >
                {/* Image Comparison */}
                <div className="w-full lg:w-1/2">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
                    {!item.before || !item.after ? (
                      <div className="flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl">
                        <div className="text-center p-8">
                          <p className="text-gray-500 text-lg mb-2">Image not found</p>
                          <p className="text-gray-400 text-sm">
                            Before: {item.before ? "✓" : "✗"} | After: {item.after ? "✓" : "✗"}
                          </p>
                        </div>
                      </div>
                    ) : isClient ? (
                      <div className="relative">
                        <ReactCompareImage
                          leftImage={item.before}
                          rightImage={item.after}
                          leftImageLabel="Before"
                          rightImageLabel="After"
                          sliderLineColor="#1e40af"
                          sliderLineWidth={3}
                          handle={
                            <div className="w-12 h-12 rounded-full bg-gradient-to-r from-[#1e40af] to-[#dd5428] shadow-xl flex items-center justify-center border-4 border-white">
                              <div className="flex gap-1">
                                <div className="w-1 h-4 bg-white rounded-full"></div>
                                <div className="w-1 h-4 bg-white rounded-full"></div>
                                <div className="w-1 h-4 bg-white rounded-full"></div>
                              </div>
                            </div>
                          }
                          handleSize={48}
                          hover={true}
                        />
                        {/* Add labels on top of images */}
                        <div className="absolute top-4 left-4 z-10">
                          <div className="bg-black/80 text-white px-3 py-1.5 rounded-lg text-sm font-medium backdrop-blur-sm">
                            Before
                          </div>
                        </div>
                        <div className="absolute top-4 right-4 z-10">
                          <div className="bg-gradient-to-r from-[#1e40af]/90 to-blue-400/90 text-white px-3 py-1.5 rounded-lg text-sm font-medium backdrop-blur-sm">
                            After
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="h-[500px] bg-gradient-to-br from-gray-100 to-gray-200 animate-pulse rounded-2xl"></div>
                    )}
                  </div>
                </div>
                
                {/* Text Content */}
                <div className="w-full lg:w-1/2">
                  <motion.h3 variants={fadeInUp} className="text-3xl font-bold text-gray-900 mb-6">
                    {item.title}
                  </motion.h3>
                  <motion.p variants={fadeInUp} className="text-gray-600 text-lg leading-relaxed mb-8">
                    {item.description}
                  </motion.p>
                  <motion.div variants={fadeInUp} className="space-y-6">
                    <div className="flex items-center gap-6">
                      <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-lg">
                        <div className="w-4 h-4 rounded-full bg-[#1e40af]"></div>
                        <span className="text-gray-800 font-medium">Original Design</span>
                      </div>
                      <div className="flex items-center gap-3 bg-gray-50 px-4 py-2 rounded-lg">
                        <div className="w-4 h-4 rounded-full bg-[#dd5428]"></div>
                        <span className="text-gray-800 font-medium">Our Transformation</span>
                      </div>
                    </div>
                    <div className="pt-6 border-t border-gray-200">
                      <GalleryButton />
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Values Section */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden"
      >
        <BackgroundPattern type="grid" color="blue" opacity={0.03} />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#1e40af]/10 to-blue-400/10 rounded-full mb-4 border border-blue-200">
              <Heart className="h-4 w-4 text-[#1e40af] mr-2" />
              <span className="text-sm font-semibold text-[#1e40af]">Our Values</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Principles That
              <span className="block bg-gradient-to-r from-[#1e40af] to-[#dd5428] bg-clip-text text-transparent">
                Drive Us
              </span>
            </h2>
          </motion.div>

          <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all border border-gray-100"
              >
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-16 h-16 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center text-white mb-6`}
                >
                  {value.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Process Section */}
      <OurWorkProcess />

      {/* Quality Section */}
      <QualitySection />

      {/* Team Section */}
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
              <Users className="h-4 w-4 text-[#dd5428] mr-2" />
              <span className="text-sm font-semibold text-[#dd5428]">Meet Our Team</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              The Experts Behind
              <span className="block bg-gradient-to-r from-[#1e40af] to-[#dd5428] bg-clip-text text-transparent">
                Your Success
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Passionate professionals dedicated to bringing your vision to life with expertise and care
            </p>
          </motion.div>

          <motion.div variants={containerVariants} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all border border-gray-100 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                    src={member.img}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                  <div className="text-[#1e40af] font-semibold mb-3">{member.role}</div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Zap className="h-4 w-4 mr-2 text-amber-500" />
                    {member.expertise}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <TestimonialsCarousel />

      {/* FAQ Section */}
      <FAQSection activeFaq={activeFaq} setActiveFaq={setActiveFaq} />

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
            Join hundreds of satisfied clients who have elevated their brand with our premium printing solutions
          </motion.p>
          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
            <NavigationButton to="/contact" variant="primary">
              Start Your Project
            </NavigationButton>
            <NavigationButton to="/gallery" variant="outline">
              View Our Work
            </NavigationButton>
          </motion.div>
        </div>
      </motion.section>

      {/* Clients Carousel */}
      <ClientsCarousel />
    </div>
  );
};

export default About;

