import React from 'react';
import { motion } from 'framer-motion';

const GallerySkeleton = () => {
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
                <div className={`h-16 w-16 ${
                  index % 2 === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-400' : 'bg-gradient-to-br from-orange-500 to-orange-400'
                } rounded-2xl mx-auto`}></div>
                <div className="h-10 w-20 bg-gray-200 rounded-lg mx-auto"></div>
                <div className="h-4 w-24 bg-gray-200 rounded-lg mx-auto"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filters Section Skeleton */}
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

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Array(5).fill(0).map((_, index) => (
              <motion.div
                key={index}
                className="h-12 w-40 bg-white/90 backdrop-blur-sm rounded-2xl"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'reverse', 
                  duration: 1.2,
                  delay: index * 0.1 
                }}
              />
            ))}
          </div>

          {/* Gallery Grid Skeleton */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array(6).fill(0).map((_, index) => (
              <motion.div
                key={index}
                className="relative group"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'reverse', 
                  duration: 1.2,
                  delay: index * 0.1 
                }}
              >
                {/* Gradient border placeholder */}
                <div className={`absolute -inset-1 ${
                  index % 2 === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-400' : 'bg-gradient-to-r from-orange-500 to-orange-400'
                } rounded-3xl blur opacity-30`} />
                
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden">
                  {/* Image container */}
                  <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 relative">
                    <div className="absolute top-4 left-4 h-8 w-24 bg-white/90 backdrop-blur-sm rounded-full"></div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <div className="h-6 w-3/4 bg-gray-200 rounded-lg"></div>
                    <div className="h-4 w-full bg-gray-200 rounded-lg"></div>
                    <div className="h-3 w-5/6 bg-gray-200 rounded-lg"></div>
                    
                    <div className="flex items-center justify-between pt-4">
                      <div className="h-4 w-20 bg-gray-200 rounded-lg"></div>
                      <div className="h-4 w-24 bg-gray-200 rounded-lg"></div>
                    </div>
                  </div>
                </div>
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

      {/* Modal Skeleton */}
      <div className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4 pointer-events-none opacity-0">
        <div className="relative max-w-6xl w-full max-h-[90vh]">
          {/* Close button */}
          <div className="absolute -top-12 right-0 h-8 w-8 bg-white/20 rounded-full"></div>
          
          {/* Image */}
          <div className="w-full h-[70vh] bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl shadow-2xl"></div>
          
          {/* Info panel */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent p-8 rounded-b-xl">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="space-y-4">
                <div className="h-8 w-3/4 bg-gray-300 rounded-lg"></div>
                <div className="h-4 w-full bg-gray-400 rounded-lg"></div>
                <div className="h-3 w-5/6 bg-gray-400 rounded-lg"></div>
                
                <div className="flex flex-wrap gap-6 pt-4">
                  <div className="space-y-2">
                    <div className="h-3 w-16 bg-gray-400 rounded-lg"></div>
                    <div className="h-4 w-24 bg-gray-300 rounded-lg"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-16 bg-gray-400 rounded-lg"></div>
                    <div className="h-4 w-24 bg-gray-300 rounded-lg"></div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-3 w-16 bg-gray-400 rounded-lg"></div>
                    <div className="h-4 w-24 bg-gray-300 rounded-lg"></div>
                  </div>
                </div>
              </div>
              
              <div className="h-12 w-40 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GallerySkeleton;