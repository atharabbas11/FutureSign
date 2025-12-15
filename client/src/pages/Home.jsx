import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowLeft, Play, Star, Award, Users, CheckCircle, CircleUser, Plus, Minus, ChevronLeft, ChevronRight, Sparkles, Zap, Target, Heart, TrendingUp, Printer, Truck, Clock, Shield, Sparkle, Hexagon, Dot, Grid3x3, Circle } from 'lucide-react';
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HomeSkeleton from '../Components/Skeleton/HomeSkeleton';

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

// AnimatedCounter Component
const AnimatedCounter = ({ from, to }) => {
  const [count, setCount] = useState(from);
  const hasAnimated = useRef(false);
  const { ref, inView } = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView && !hasAnimated.current) {
      hasAnimated.current = true;
      let start = from;
      const duration = 2000;
      const increment = (to - from) / (duration / 16);

      const timer = setInterval(() => {
        start += increment;
        if (start >= to) {
          setCount(to);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);

      return () => clearInterval(timer);
    }
  }, [inView, from, to]);

  return <span ref={ref}>{count}</span>;
};

// Premium Logo Carousel
const SmoothLogoCarousel = () => {
  const logos = [
    { id: 1, name: "Acc", image: "/public/images/logos/acc.png" },
    { id: 2, name: "Afstar", image: "/public/images/logos/afstar.png" },
    { id: 3, name: "Ambuja", image: "/public/images/logos/ambuja.png" },
    { id: 4, name: "Hangyo", image: "/public/images/logos/hangyo.jpg" },
    { id: 5, name: "Maha", image: "/public/images/logos/maha.png" },
    { id: 6, name: "Mslife", image: "/public/images/logos/mslife.png" },
    { id: 7, name: "Ramco", image: "/public/images/logos/ramco.jpg" },
    { id: 8, name: "Sudhakar", image: "/public/images/logos/sudhakar.png" },
    { id: 9, name: "Supreme", image: "/public/images/logos/supreme.png" },
    { id: 10, name: "Ultratech", image: "/public/images/logos/ultratech.png" },
  ];


  // return (
  //   <section className="relative py-16 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
  //     <BackgroundPattern type="dots" color="blue" opacity={0.05} />
      
  //     <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  //       <motion.div
  //         initial="hidden"
  //         whileInView="visible"
  //         viewport={{ once: true }}
  //         variants={fadeInUp}
  //         className="text-center mb-16"
  //       >
  //         <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#1e40af]/10 to-[#dd5428]/10 rounded-full mb-4 border border-blue-200/50">
  //           <Users className="h-4 w-4 text-[#1e40af] mr-2" />
  //           <span className="text-sm font-semibold text-[#1e40af]">Our Partners</span>
  //         </div>
  //         <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
  //           Trusted By Industry
  //           <span className="block bg-gradient-to-r from-[#1e40af] to-[#dd5428] bg-clip-text text-transparent">
  //             Leaders Worldwide
  //           </span>
  //         </h2>
  //         <p className="text-xl text-gray-600 max-w-3xl mx-auto">
  //           Brands that trust us with their premium printing needs
  //         </p>
  //       </motion.div>

  //       <div className="relative overflow-hidden">
  //         <div className="flex gap-8 animate-scroll">
  //           {[...Array(3)].map((_, setIndex) => (
  //             <React.Fragment key={setIndex}>
  //               {logos.map((logo) => (
  //                 <motion.div
  //                   key={`${setIndex}-${logo.id}`}
  //                   whileHover={{ scale: 1.1, y: -5 }}
  //                   className="flex-shrink-0 w-40 h-32 bg-white/80 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-blue-100 cursor-pointer"
  //                 >
  //                   <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${logo.color} flex items-center justify-center mb-3`}>
  //                     <div className="text-white text-xl font-bold">
  //                       {logo.name.charAt(0)}
  //                     </div>
  //                   </div>
  //                   <div className="text-sm font-semibold text-gray-700 text-center">
  //                     {logo.name}
  //                   </div>
  //                 </motion.div>
  //               ))}
  //             </React.Fragment>
  //           ))}
  //         </div>
          
  //         {/* Gradient overlays */}
  //         <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
  //         <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
  //       </div>
  //     </div>

  //     <style jsx>{`
  //       @keyframes scroll {
  //         0% {
  //           transform: translateX(0);
  //         }
  //         100% {
  //           transform: translateX(calc(-192px * 10 - 32px * 9));
  //         }
  //       }
        
  //       .animate-scroll {
  //         animation: scroll 40s linear infinite;
  //         width: max-content;
  //       }
        
  //       .animate-scroll:hover {
  //         animation-play-state: paused;
  //       }
  //     `}</style>
  //   </section>
  // );

  return (
    <section className="relative py-16 bg-gradient-to-b from-white to-blue-50 overflow-x-hidden overflow-y-visible">
      <BackgroundPattern type="dots" color="blue" opacity={0.05} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#1e40af]/10 to-[#dd5428]/10 rounded-full mb-4 border border-blue-200/50">
            <Users className="h-4 w-4 text-[#1e40af] mr-2" />
            <span className="text-sm font-semibold text-[#1e40af]">Our Partners</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Trusted By Industry
            <span className="block bg-gradient-to-r from-[#1e40af] to-[#dd5428] bg-clip-text text-transparent">
              Leaders Worldwide
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Brands that trust us with their premium printing needs
          </p>
        </motion.div>

        <div className="relative overflow-x-hidden overflow-y-visible pt-6 h-64">
          <div className="flex gap-8 animate-scroll">
            {[...Array(3)].map((_, setIndex) => (
              <React.Fragment key={setIndex}>
                {logos.map((logo) => (
                  <motion.div
                    key={`${setIndex}-${logo.id}`}
                    whileHover={{ scale: 1.1, y: -8 }}
                    className="flex-shrink-0 w-40 h-36bg-white/90 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-4 shadow-md border border-blue-100 cursor-pointer transition-all duration-300 ease-out hover:shadow-2xl">
                    <div className="w-28 h-28 rounded-xl overflow-hidden">
                      <img
                        src={logo.image}
                        alt={logo.name}
                        className="w-full h-full object-contain"
                      />
                    </div>

                    <div className="text-xs font-semibold text-gray-700 text-center mt-2 truncate w-full px-2">
                      {logo.name}
                    </div>
                  </motion.div>
                ))}
              </React.Fragment>
            ))}
          </div>

          {/* Gradient overlays */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-192px * 10 - 32px * 9));
          }
        }

        .animate-scroll {
          animation: scroll 40s linear infinite;
          width: max-content;
        }

        .animate-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

// Premium Testimonials Carousel
const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
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
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

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
      viewport={{ once: true }}
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
              key={currentIndex}
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
                    className={`w-24 h-24 rounded-2xl flex items-center justify-center text-white text-2xl font-bold ${testimonials[currentIndex].avatarColor} shadow-lg`}
                  >
                    {testimonials[currentIndex].name.charAt(0)}
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
                    {testimonials[currentIndex].content}
                  </blockquote>

                  <div className="flex flex-col md:flex-row md:items-center justify-between">
                    <div>
                      <div className="font-semibold text-gray-900 text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-[#1e40af]">
                        {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
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
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentIndex ? 'bg-gradient-to-r from-[#1e40af] to-[#dd5428]' : 'bg-gray-300'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

// Premium FAQ Section
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

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
      viewport={{ once: true }}
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
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  >
                    <div className="flex justify-between items-center">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4 group-hover:text-[#1e40af] transition-colors">
                        {faq.question}
                      </h3>
                      <motion.div
                        animate={{ rotate: openIndex === index ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="flex-shrink-0"
                      >
                        <div className="w-8 h-8 bg-gradient-to-br from-[#1e40af]/10 to-blue-400/10 rounded-lg flex items-center justify-center">
                          {openIndex === index ? (
                            <Minus className="h-4 w-4 text-[#1e40af]" />
                          ) : (
                            <Plus className="h-4 w-4 text-[#1e40af]" />
                          )}
                        </div>
                      </motion.div>
                    </div>
                    <AnimatePresence>
                      {openIndex === index && (
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

// Premium Quality Section
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
      viewport={{ once: true }}
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

// Premium How It Works Section
const HowItWorksSection = () => {
  const steps = [
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
      icon: <Printer className="h-6 w-6" />,
      color: "from-[#dd5428] to-orange-400"
    },
    {
      id: 3,
      step: "03",
      title: "Production & Delivery",
      description: "High-quality printing and timely delivery to your location",
      icon: <Truck className="h-6 w-6" />,
      color: "from-[#1e40af] to-blue-400"
    }
  ];

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="relative py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden"
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
            A streamlined 3-step process ensuring premium quality from concept to completion
          </p>
        </motion.div>

        {/* Process Grid */}
        <motion.div variants={containerVariants} className="grid md:grid-cols-3 gap-8">
          {steps.map((process, index) => (
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

// Main Home Component
const Home = () => {
  const [loading, setLoading] = useState(true);
  const [confettiActive, setConfettiActive] = useState(false);

  useEffect(() => {
    const handle = requestAnimationFrame(() => setLoading(false));
    return () => cancelAnimationFrame(handle);
  }, []);

  const stats = [
    { number: '500+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support' },
    { number: '5+', label: 'Years Experience' },
  ];

  const features = [
    { 
      icon: <Award className="h-8 w-8" />, 
      title: 'Premium Quality', 
      description: 'Highest quality materials and printing technology',
      color: 'from-[#1e40af] to-blue-400'
    },
    { 
      icon: <Users className="h-8 w-8" />, 
      title: 'Expert Team', 
      description: 'Experienced professionals with years of expertise',
      color: 'from-[#dd5428] to-orange-400'
    },
    { 
      icon: <CheckCircle className="h-8 w-8" />, 
      title: 'Fast Delivery', 
      description: 'Quick turnaround without compromising quality',
      color: 'from-[#1e40af] to-blue-400'
    }
  ];

  const images = [
    "/images/homeC1.png",
    "/images/homeC2.png",
    "/images/homeC3.png",
  ];

  // Auto Carousel Component
  function AutoCarousel({ images, interval = 3000 }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, interval);

      return () => clearInterval(timer);
    }, [images.length, interval]);

    return (
      <motion.img
        key={index}
        src={images[index]}
        alt={`Slide ${index}`}
        className="w-full h-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 1 }}
      />
    );
  }

  // Stat Item Component
  function StatItem({ number, label }) {
    const [count, setCount] = useState(0);
    const { ref, inView } = useInView({ triggerOnce: true });

    useEffect(() => {
      if (!inView) return;
      let start = 0;
      const end = parseInt(number);
      const duration = 2000;
      const stepTime = Math.max(Math.floor(duration / end), 1);
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, stepTime);

      return () => clearInterval(timer);
    }, [inView, number]);

    return (
      <div ref={ref} className="text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl font-bold text-white"
        >
          {number.includes("+") ? `${count}+` : count}
        </motion.div>
        <div className="text-blue-200 text-sm">{label}</div>
      </div>
    );
  }

  const BoxConfetti = ({ isActive }) => {
    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
        {[...Array(60)].map((_, i) => {
          const fromLeft = i % 2 === 0;
          const startX = fromLeft ? Math.random() * 40 : 60 + Math.random() * 40;

          return (
            <motion.div
              key={i}
              className={`absolute w-2 h-2 ${i % 6 === 0 ? 'bg-yellow-400' :
                i % 6 === 1 ? 'bg-blue-400' :
                  i % 6 === 2 ? 'bg-orange-400' :
                    i % 6 === 3 ? 'bg-[#dd5428]' :
                      i % 6 === 4 ? 'bg-[#1e40af]' : 'bg-white'
                } rounded-sm`}
              style={{
                left: `${startX}%`,
                top: '-20px'
              }}
              initial={{
                opacity: 0,
                y: 0,
                x: 0,
                rotate: 0
              }}
              animate={isActive ? {
                opacity: [0, 1, 0],
                y: [0, 400],
                x: Math.random() * 40 - 20,
                rotate: Math.random() * 360
              } : {
                opacity: 0,
                y: 0
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                ease: "easeOut",
                delay: Math.random() * 2,
              }}
            />
          );
        })}
      </div>
    );
  };

  const oriImages = [
    "/images/slide1.jpg",
    "/images/slide2.jpg",
    "/images/slide3.jpg",
  ];

  // ACHIEVEMENTS SLIDER
  const achievements = [
    { number: "500+", text: "Projects Completed" },
    { number: "50+", text: "Happy Clients" },
    { number: "5+", text: "Years Experience" },
  ];

  // TOP CAROUSEL Component
  function TopCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);

    const totalSlides = Math.ceil(oriImages.length / 2);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, 3000);

      return () => clearInterval(timer);
    }, [totalSlides]);

    const handleDragEnd = (event, info) => {
      const threshold = 50;
      
      if (info.offset.x < -threshold) {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      } else if (info.offset.x > threshold) {
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
      }
    };

    const goToSlide = (index) => {
      setCurrentIndex(index);
    };

    return (
      <div className="relative h-full bg-gray-100 rounded-2xl overflow-hidden">
        <motion.div
          ref={carouselRef}
          className="flex h-full"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          animate={{ x: `-${currentIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => {
            const startIdx = slideIndex * 2;
            const slideImages = [
              oriImages[startIdx],
              oriImages[(startIdx + 1) % oriImages.length]
            ];

            return (
              <div key={slideIndex} className="w-full h-full flex-shrink-0 flex">
                {slideImages.map((src, imgIndex) => (
                  <div key={`${slideIndex}-${imgIndex}`} className="w-1/2 px-2">
                    <img
                      src={src}
                      alt={`Slide ${startIdx + imgIndex + 1}`}
                      className="w-full h-full object-cover rounded-xl shadow-lg"
                      draggable="false"
                    />
                  </div>
                ))}
              </div>
            );
          })}
        </motion.div>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {Array.from({ length: totalSlides }).map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === i ? "bg-white" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  // BOTTOM SLIDER Component
  function BottomSlider() {
    const [currentAchIndex, setCurrentAchIndex] = useState(0);
    const sliderRef = useRef(null);

    const handleAchDragEnd = (event, info) => {
      const threshold = 50;
      
      if (info.offset.x < -threshold) {
        setCurrentAchIndex((prev) => (prev + 1) % achievements.length);
      } else if (info.offset.x > threshold) {
        setCurrentAchIndex((prev) => (prev - 1 + achievements.length) % achievements.length);
      }
    };

    const goToAchSlide = (index) => {
      setCurrentAchIndex(index);
    };

    return (
      <div className="relative h-full overflow-hidden">
        <motion.div
          ref={sliderRef}
          className="flex h-full"
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleAchDragEnd}
          animate={{ x: `-${currentAchIndex * 100}%` }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {achievements.map((a, index) => (
            <div key={index} className="w-full px-2 flex-shrink-0">
              <div className="w-full h-full bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6 shadow-lg border border-blue-100 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-[#1e40af] to-[#dd5428] bg-clip-text text-transparent mb-3">
                    {a.number}
                  </div>
                  <p className="text-blue-700 font-semibold text-lg">
                    {a.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>

        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex space-x-2">
          {achievements.map((_, i) => (
            <button
              key={i}
              onClick={() => goToAchSlide(i)}
              className={`w-2 h-2 rounded-full transition-all ${
                i === currentAchIndex ? "bg-[#1e40af]" : "bg-blue-300"
              }`}
            />
          ))}
        </div>
      </div>
    );
  }

  if (loading) return <HomeSkeleton />;

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="fixed inset-0 z-50"
          >
            <div className="flex items-center justify-center h-full bg-gradient-to-br from-blue-50 to-orange-50">
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-[#1e40af] border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="mt-4 text-gray-600">Loading...</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="overflow-hidden"
        >
          {/* Hero Section */}
          <section className="relative bg-gradient-to-r from-[#1e40af] via-blue-600 to-[#dd5428] text-white overflow-hidden">
            {/* Background Pattern */}
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
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="relative max-w-7xl mx-auto px-6 py-8 sm:py-32 grid lg:grid-cols-2 gap-12 items-center mt-15 sm:mt-0"
            >
              {/* Left Section */}
              <div className="space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-4"
                >
                  <div className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
                    <Star className="h-4 w-4 text-yellow-400 mr-2" />
                    <span className="text-sm font-semibold">Premium Flex Printing Solutions</span>
                  </div>

                  <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                    Transform Your{' '}
                    <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                      Brand Vision
                    </span>
                  </h1>

                  <p className="text-lg text-blue-100 max-w-2xl leading-relaxed">
                    Professional flex printing services with cutting-edge technology.
                    From backlit displays to vinyl wraps, we bring your ideas to life.
                  </p>
                </motion.div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 items-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-[#1e40af] font-semibold px-8 py-4 rounded-xl hover:bg-blue-50 transition-all flex items-center gap-2 shadow-lg"
                  >
                    <Link to="/services" className="flex items-center gap-2">
                      Explore Services
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
                </div>

                {/* Stats */}
                <motion.div 
                  initial="hidden"
                  whileInView="visible"
                  variants={containerVariants}
                  className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8"
                >
                  {stats.map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 text-center border border-white/20"
                    >
                      <div className="text-2xl md:text-3xl font-bold text-white mb-1">
                        <AnimatedCounter from={0} to={parseInt(stat.number)} />
                        {stat.number.includes('+') && '+'}
                      </div>
                      <div className="text-blue-100 text-sm">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </div>

              {/* Right Image Carousel */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.7 }}
                className="relative sm:h-[400px] h-[200px] overflow-hidden"
              >
                <AutoCarousel images={images} interval={3000} />
              </motion.div>
            </motion.div>
          </section>

          {/* Features Section */}
          <section className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
            <BackgroundPattern type="grid" color="blue" opacity={0.03} />
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              // viewport={{ once: true }}
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              <motion.div variants={fadeInUp} className="text-center mb-16">
                <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-[#1e40af]/10 to-blue-400/10 rounded-full mb-4 border border-blue-200">
                  <CheckCircle className="h-4 w-4 text-[#1e40af] mr-2" />
                  <span className="text-sm font-semibold text-[#1e40af]">Why Choose Us</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Why Choose
                  <span className="block bg-gradient-to-r from-[#1e40af] to-[#dd5428] bg-clip-text text-transparent">
                    FutureSign?
                  </span>
                </h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                  We combine cutting-edge technology with expert craftsmanship to deliver
                  exceptional printing solutions that make your brand stand out.
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
            </motion.div>
          </section>

          {/* Editing Section */}
          <section className="relative py-20 bg-white overflow-hidden">
            <BackgroundPattern type="circles" color="orange" opacity={0.3} />
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              // viewport={{ once: true }}
              viewport={{ once: true, margin: "-100px" }}
              variants={containerVariants}
              className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              {/* First Row - About Us & Main Content */}
              <div className="grid lg:grid-cols-3 gap-8 mb-16">
                {/* About Us in Curve Box */}
                <motion.div
                  variants={slideInLeft}
                  whileHover={{ scale: 1.02 }}
                  className="bg-gradient-to-br from-[#1e40af] to-blue-500 text-white p-8 rounded-2xl lg:rounded-r-[60px] shadow-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

                  <div className="relative z-10">
                    <motion.div
                      variants={fadeInUp}
                      className="inline-flex items-center px-4 py-2 bg-white/20 rounded-full mb-6"
                    >
                      <Users className="h-4 w-4 text-white mr-2" />
                      <span className="font-semibold">About Us</span>
                    </motion.div>
                    <h3 className="text-3xl font-bold mb-4">Our Story</h3>
                    <p className="text-blue-100 text-lg leading-relaxed">
                      We are passionate about delivering exceptional printing solutions that bring your brand to life with precision and creativity.
                    </p>
                  </div>
                </motion.div>

                {/* Main Content */}
                <div className="lg:col-span-2 flex flex-wrap lg:flex-nowrap gap-8">
                  {/* Left Section */}
                  <motion.div 
                    variants={slideInLeft}
                    className="flex flex-col justify-center"
                  >
                    <h2 className="text-4xl md:text-7xl font-bold text-gray-900">
                      Bold Design, <span className="bg-gradient-to-r from-[#1e40af] to-[#dd5428] bg-clip-text text-transparent">Flawless Print</span>
                    </h2>
                  </motion.div>

                  {/* Right Section */}
                  <motion.div 
                    variants={slideInRight}
                    className="flex flex-col justify-between space-y-6"
                  >
                    <p className="text-lg text-gray-600 leading-relaxed">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                    </p>

                    <motion.div 
                      variants={fadeInUp}
                      whileHover={{ scale: 1.05 }} 
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        to="/about"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-[#1e40af] to-[#dd5428] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-lg transition-all"
                      >
                        Read More
                        <ArrowRight className="h-5 w-5" />
                      </Link>
                    </motion.div>
                  </motion.div>
                </div>
              </div>

              {/* Second Row - Customer Satisfaction & Slides */}
              {/* <div className="grid lg:grid-cols-3 gap-8"> */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column */}
                <div className='flex flex-col space-y-8'>
                  {/* Customer Satisfaction Box */}
                  <motion.div
                    variants={slideInLeft}
                    whileHover={{ scale: 1.02 }}
                    onMouseEnter={() => setConfettiActive(true)}
                    onMouseLeave={() => setConfettiActive(false)}
                    className="relative bg-gradient-to-br from-[#1e40af] to-blue-500 rounded-2xl p-6 shadow-2xl overflow-hidden flex-1 min-h-[180px] flex items-center justify-center cursor-pointer"
                  >
                    <AnimatePresence>
                      {confettiActive && <BoxConfetti isActive={confettiActive} />}
                    </AnimatePresence>

                    <div className="relative z-10 w-full">
                      <div className="flex items-center justify-between mb-4">
                        <motion.div
                          whileHover={{ rotate: 360 }}
                          className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center"
                        >
                          <CheckCircle className="h-8 w-8 text-white" />
                        </motion.div>

                        <div className="text-right">
                          <h3 className="text-xl font-bold text-white mb-1">
                            Customer Satisfaction
                          </h3>
                          <div className="text-4xl font-bold text-white">
                            <AnimatedCounter from={0} to={98} />%
                          </div>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <div className="w-full bg-white/20 rounded-full h-2">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: "98%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, delay: 0.5 }}
                            className="h-full bg-gradient-to-r from-green-400 to-cyan-400 rounded-full"
                          />
                        </div>

                        <div className="flex justify-between items-center">
                          <p className="text-white/90 text-sm font-semibold">
                            Happy Clients
                          </p>
                          <div className="inline-flex items-center px-3 py-1 bg-white/20 rounded-full">
                            <Star className="h-3 w-3 text-yellow-400 mr-1" />
                            <span className="text-white text-xs font-semibold">Rated Excellent</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Bottom Section - Image and Customer Projects Stats */}
                  <div className="flex flex-col lg:flex-row gap-8 flex-1">
                    {/* Small Picture */}
                    <motion.div
                      variants={slideInLeft}
                      whileHover={{ scale: 1.05 }}
                      // className="rounded-2xl overflow-hidden shadow-lg lg:w-[40%] min-h-[150px]"
                      className="rounded-2xl overflow-hidden shadow-lg w-full lg:w-[40%] min-h-[150px]"
                    >
                      <img
                        src="/images/smallimg.jpg"
                        alt="Project Showcase"
                        className="w-full h-full object-cover"
                      />
                    </motion.div>

                    {/* Customer Projects Stats */}
                    <motion.div
                      variants={slideInRight}
                      whileHover={{ scale: 1.02 }}
                      className="w-full lg:w-[60%] bg-gradient-to-r from-[#dd5428] to-orange-500 rounded-2xl p-6 text-white shadow-xl flex flex-col justify-center min-h-[150px]"
                    >
                      <motion.div 
                        variants={scaleUp}
                        className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mb-4"
                      >
                        <CircleUser className="h-8 w-8 text-white" />
                      </motion.div>
                      <motion.div 
                        variants={fadeInUp}
                        className="font-bold"
                      >
                        <div className="text-5xl font-bold mb-1">500+</div>
                        <h3 className="text-lg font-bold mb-1">Customer Projects Accomplished</h3>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>

                {/* Middle Column - Image */}
                <motion.div
                  variants={scaleUp}
                  whileHover={{ scale: 1.02 }}
                  className="rounded-2xl overflow-hidden shadow-lg"
                >
                  <img
                    src="/images/printing.jpg"
                    alt="Customer Showcase"
                    // className="w-full h-full object-cover min-h-[500px]"
                    className="w-full h-full object-cover min-h-[250px] sm:min-h-[350px] lg:min-h-[500px]"
                  />
                </motion.div>
                
                {/* Right Column - Slides Container */}
                <motion.div
                  variants={slideInRight}
                  className="flex flex-col h-full noselect space-y-8"
                >
                  {/* TOP CAROUSEL */}
                  <motion.div
                    variants={fadeInUp}
                    className="flex-1 min-h-[250px]"
                  >
                    <TopCarousel />
                  </motion.div>

                  {/* BOTTOM SLIDER */}
                  <motion.div
                    variants={fadeInUp}
                    className="flex-1 min-h-[250px]"
                  >
                    <BottomSlider />
                  </motion.div>
                </motion.div>
              </div>
            </motion.div>
          </section>

          {/* Logo Carousel Section */}
          <SmoothLogoCarousel />

          {/* Testimonials Section */}
          <TestimonialsCarousel />

          {/* How It Works Section */}
          <HowItWorksSection />

          {/* Quality Section */}
          <QualitySection />

          {/* FAQ Section */}
          <FAQSection />
    
          {/* CTA Section */}
          <motion.section
            initial="hidden"
            whileInView="visible"
            // viewport={{ once: true }}
            viewport={{ once: true, margin: "-100px" }}
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
                  <Link to="/gallery" className="flex items-center gap-2">
                    View Our Work
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </motion.button>
              </motion.div>
            </div>
          </motion.section>
        </motion.div>
      )}
    </>
  );
};

export default Home;