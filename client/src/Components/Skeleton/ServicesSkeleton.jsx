import React from 'react';
import { motion } from 'framer-motion';

const ServicesSkeleton = () => {
  const pulse = {
    initial: { opacity: 0.3 },
    animate: { opacity: 1 },
  };

  return (
    <div className="pt-0">
      {/* Hero Section Skeleton */}
      <section className="relative bg-gradient-to-r from-[#1e40af] via-blue-600 to-[#dd5428] text-white overflow-hidden">
        <div className="relative py-24 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Badge */}
          <motion.div
            className="h-8 w-48 bg-white/20 rounded-full mx-auto mb-6"
            initial={pulse.initial}
            animate={pulse.animate}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
          />
          
          {/* Main Heading */}
          <div className="space-y-4 mb-6">
            <motion.div
              className="h-12 w-3/4 bg-white/20 rounded-lg mx-auto"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ 
                repeat: Infinity, 
                repeatType: 'reverse', 
                duration: 1.2,
                delay: 0.1 
              }}
            />
            <motion.div
              className="h-12 w-2/5 bg-white/30 rounded-lg mx-auto"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ 
                repeat: Infinity, 
                repeatType: 'reverse', 
                duration: 1.2,
                delay: 0.2 
              }}
            />
          </div>
          
          {/* Description */}
          <motion.div
            className="h-8 w-2/3 bg-white/15 rounded-lg mx-auto mb-10"
            initial={pulse.initial}
            animate={pulse.animate}
            transition={{ 
              repeat: Infinity, 
              repeatType: 'reverse', 
              duration: 1.2,
              delay: 0.3 
            }}
          />
          
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.div
              className="h-12 w-40 bg-white/30 rounded-xl"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ 
                repeat: Infinity, 
                repeatType: 'reverse', 
                duration: 1.2,
                delay: 0.4 
              }}
            />
            <motion.div
              className="h-12 w-40 bg-white/10 rounded-xl"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ 
                repeat: Infinity, 
                repeatType: 'reverse', 
                duration: 1.2,
                delay: 0.5 
              }}
            />
          </div>
        </div>
      </section>

      {/* Stats Section Skeleton */}
      <section className="relative py-16 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {Array(4).fill(0).map((_, index) => (
              <motion.div
                key={index}
                className="text-center space-y-4"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'reverse', 
                  duration: 1.2,
                  delay: index * 0.1 
                }}
              >
                <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl mx-auto"></div>
                <div className="h-10 w-20 bg-gray-200 rounded-lg mx-auto"></div>
                <div className="h-4 w-24 bg-gray-200 rounded-lg mx-auto"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section Skeleton */}
      <section className="relative py-20 bg-gradient-to-b from-white to-orange-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <motion.div
              className="h-8 w-32 bg-orange-100 rounded-full mx-auto"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
            />
            <motion.div
              className="h-10 w-2/3 bg-gray-200 rounded-lg mx-auto"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ 
                repeat: Infinity, 
                repeatType: 'reverse', 
                duration: 1.2,
                delay: 0.1 
              }}
            />
            <motion.div
              className="h-8 w-1/2 bg-gray-200 rounded-lg mx-auto"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ 
                repeat: Infinity, 
                repeatType: 'reverse', 
                duration: 1.2,
                delay: 0.2 
              }}
            />
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {Array(3).fill(0).map((_, index) => (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 space-y-6"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'reverse', 
                  duration: 1.2,
                  delay: index * 0.1 
                }}
              >
                <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl"></div>
                <div className="h-8 w-3/4 bg-gray-200 rounded-lg"></div>
                <div className="h-6 w-full bg-gray-200 rounded-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid Skeleton */}
      <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <motion.div
              className="h-8 w-32 bg-blue-100 rounded-full mx-auto"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
            />
            <motion.div
              className="h-10 w-2/3 bg-gray-200 rounded-lg mx-auto"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ 
                repeat: Infinity, 
                repeatType: 'reverse', 
                duration: 1.2,
                delay: 0.1 
              }}
            />
            <motion.div
              className="h-8 w-1/2 bg-gray-200 rounded-lg mx-auto"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ 
                repeat: Infinity, 
                repeatType: 'reverse', 
                duration: 1.2,
                delay: 0.2 
              }}
            />
          </div>

          {/* Services Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            {Array(4).fill(0).map((_, index) => (
              <motion.div
                key={index}
                className="relative"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'reverse', 
                  duration: 1.2,
                  delay: index * 0.2 
                }}
              >
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden">
                  {/* Image */}
                  <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 relative">
                    <div className="absolute top-6 right-6 h-12 w-12 bg-gradient-to-br from-blue-500 to-blue-400 rounded-xl"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 space-y-6">
                    <div className="h-8 w-2/3 bg-gray-200 rounded-lg"></div>
                    <div className="h-12 w-full bg-gray-200 rounded-lg"></div>
                    
                    <ul className="space-y-3 mb-8">
                      {Array(4).fill(0).map((_, idx) => (
                        <li key={idx} className="flex items-center">
                          <div className="h-5 w-5 bg-green-200 rounded-full mr-3"></div>
                          <div className="h-4 w-32 bg-gray-200 rounded-lg"></div>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="h-12 w-32 bg-gradient-to-r from-blue-500 to-blue-400 rounded-xl"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section Skeleton */}
      <section className="relative py-20 bg-gradient-to-b from-white to-orange-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16 space-y-4">
            <motion.div
              className="h-8 w-32 bg-orange-100 rounded-full mx-auto"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
            />
            <motion.div
              className="h-10 w-2/3 bg-gray-200 rounded-lg mx-auto"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ 
                repeat: Infinity, 
                repeatType: 'reverse', 
                duration: 1.2,
                delay: 0.1 
              }}
            />
            <motion.div
              className="h-8 w-1/2 bg-gray-200 rounded-lg mx-auto"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ 
                repeat: Infinity, 
                repeatType: 'reverse', 
                duration: 1.2,
                delay: 0.2 
              }}
            />
          </div>

          {/* Process Steps Grid */}
          <div className="grid md:grid-cols-4 gap-8">
            {Array(4).fill(0).map((_, index) => (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 space-y-6 text-center"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'reverse', 
                  duration: 1.2,
                  delay: index * 0.1 
                }}
              >
                {/* Step Badge */}
                <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl mx-auto"></div>
                
                {/* Icon */}
                <div className="h-12 w-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl mx-auto"></div>
                
                {/* Content */}
                <div className="h-6 w-3/4 bg-gray-200 rounded-lg mx-auto"></div>
                <div className="h-12 w-full bg-gray-200 rounded-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section Skeleton */}
      <section className="relative py-20 bg-gradient-to-r from-blue-600 to-orange-500">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-10">
          <div className="space-y-4">
            <motion.div
              className="h-12 w-3/4 bg-white/30 rounded-lg mx-auto"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
            />
            <motion.div
              className="h-8 w-2/3 bg-white/20 rounded-lg mx-auto"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ 
                repeat: Infinity, 
                repeatType: 'reverse', 
                duration: 1.2,
                delay: 0.1 
              }}
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              className="h-12 w-40 bg-white/30 rounded-xl"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ 
                repeat: Infinity, 
                repeatType: 'reverse', 
                duration: 1.2,
                delay: 0.2 
              }}
            />
            <motion.div
              className="h-12 w-40 bg-white/10 rounded-xl"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ 
                repeat: Infinity, 
                repeatType: 'reverse', 
                duration: 1.2,
                delay: 0.3 
              }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesSkeleton;