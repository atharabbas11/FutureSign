import React from 'react';
import { motion } from 'framer-motion';

const AboutSkeleton = () => {
  const pulse = {
    initial: { opacity: 0.3 },
    animate: { opacity: 1 },
  };

  return (
    <div className="pt-0">
      {/* Hero Header Skeleton */}
      <section className="relative bg-gradient-to-r from-[#1e40af] via-blue-600 to-[#dd5428] text-white overflow-hidden">
        <div className="relative py-24 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Heading */}
          <motion.div
            className="h-16 w-48 bg-white/20 rounded-lg mx-auto mb-6"
            initial={pulse.initial}
            animate={pulse.animate}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
          />
          <motion.div
            className="h-16 w-64 bg-white/30 rounded-lg mx-auto mb-10"
            initial={pulse.initial}
            animate={pulse.animate}
            transition={{ 
              repeat: Infinity, 
              repeatType: 'reverse', 
              duration: 1.2,
              delay: 0.1 
            }}
          />
          
          {/* Description */}
          <motion.div
            className="h-8 w-3/4 bg-white/15 rounded-lg mx-auto mb-6"
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

      {/* Mission & Vision Skeleton */}
      <section className="relative py-20 bg-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Mission Card */}
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-10 space-y-6">
              <motion.div
                className="h-8 w-24 bg-blue-100 rounded-full"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
              />
              <motion.div
                className="h-12 w-full bg-gray-200 rounded-lg"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'reverse', 
                  duration: 1.2,
                  delay: 0.1 
                }}
              />
              <div className="space-y-3">
                <motion.div
                  className="h-4 w-full bg-gray-200 rounded-lg"
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
                  className="h-4 w-5/6 bg-gray-200 rounded-lg"
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

            {/* Vision Card */}
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-10 space-y-6">
              <motion.div
                className="h-8 w-24 bg-orange-100 rounded-full"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
              />
              <motion.div
                className="h-12 w-full bg-gray-200 rounded-lg"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'reverse', 
                  duration: 1.2,
                  delay: 0.1 
                }}
              />
              <div className="space-y-3">
                <motion.div
                  className="h-4 w-full bg-gray-200 rounded-lg"
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
                  className="h-4 w-5/6 bg-gray-200 rounded-lg"
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
          </div>
        </div>
      </section>

      {/* Timeline Section Skeleton */}
      <section className="relative py-20 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
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
          </div>

          {/* Timeline */}
          <div className="space-y-12">
            {Array(5).fill(0).map((_, index) => (
              <div key={index} className="relative flex items-center">
                {/* Left Content */}
                <div className="w-5/12 pr-12 text-right">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                    <motion.div
                      className="h-8 w-24 bg-blue-100 rounded-lg"
                      initial={pulse.initial}
                      animate={pulse.animate}
                      transition={{ 
                        repeat: Infinity, 
                        repeatType: 'reverse', 
                        duration: 1.2,
                        delay: index * 0.1 
                      }}
                    />
                    <motion.div
                      className="h-6 w-32 bg-gray-200 rounded-lg ml-auto"
                      initial={pulse.initial}
                      animate={pulse.animate}
                      transition={{ 
                        repeat: Infinity, 
                        repeatType: 'reverse', 
                        duration: 1.2,
                        delay: index * 0.1 + 0.1 
                      }}
                    />
                    <motion.div
                      className="h-4 w-40 bg-gray-200 rounded-lg ml-auto"
                      initial={pulse.initial}
                      animate={pulse.animate}
                      transition={{ 
                        repeat: Infinity, 
                        repeatType: 'reverse', 
                        duration: 1.2,
                        delay: index * 0.1 + 0.2 
                      }}
                    />
                  </div>
                </div>

                {/* Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-400 rounded-full"></div>
                </div>

                {/* Right Content (Alternate) */}
                <div className="w-5/12 pl-12">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 space-y-4">
                    <motion.div
                      className="h-8 w-24 bg-orange-100 rounded-lg"
                      initial={pulse.initial}
                      animate={pulse.animate}
                      transition={{ 
                        repeat: Infinity, 
                        repeatType: 'reverse', 
                        duration: 1.2,
                        delay: index * 0.1 + 0.15 
                      }}
                    />
                    <motion.div
                      className="h-6 w-32 bg-gray-200 rounded-lg"
                      initial={pulse.initial}
                      animate={pulse.animate}
                      transition={{ 
                        repeat: Infinity, 
                        repeatType: 'reverse', 
                        duration: 1.2,
                        delay: index * 0.1 + 0.25 
                      }}
                    />
                    <motion.div
                      className="h-4 w-40 bg-gray-200 rounded-lg"
                      initial={pulse.initial}
                      animate={pulse.animate}
                      transition={{ 
                        repeat: Infinity, 
                        repeatType: 'reverse', 
                        duration: 1.2,
                        delay: index * 0.1 + 0.35 
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Before & After Section Skeleton */}
      <section className="relative py-20 bg-white overflow-hidden">
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
          </div>

          {/* Before/After Items */}
          <div className="space-y-20">
            {Array(2).fill(0).map((_, index) => (
              <div key={index} className="flex flex-col lg:flex-row items-center gap-12">
                {/* Image Comparison */}
                <div className="w-full lg:w-1/2">
                  <div className="h-96 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl shadow-2xl"></div>
                </div>
                
                {/* Text Content */}
                <div className="w-full lg:w-1/2 space-y-6">
                  <motion.div
                    className="h-8 w-2/3 bg-gray-200 rounded-lg"
                    initial={pulse.initial}
                    animate={pulse.animate}
                    transition={{ 
                      repeat: Infinity, 
                      repeatType: 'reverse', 
                      duration: 1.2,
                      delay: index * 0.2 
                    }}
                  />
                  <div className="space-y-3">
                    <motion.div
                      className="h-4 w-full bg-gray-200 rounded-lg"
                      initial={pulse.initial}
                      animate={pulse.animate}
                      transition={{ 
                        repeat: Infinity, 
                        repeatType: 'reverse', 
                        duration: 1.2,
                        delay: index * 0.2 + 0.1 
                      }}
                    />
                    <motion.div
                      className="h-4 w-5/6 bg-gray-200 rounded-lg"
                      initial={pulse.initial}
                      animate={pulse.animate}
                      transition={{ 
                        repeat: Infinity, 
                        repeatType: 'reverse', 
                        duration: 1.2,
                        delay: index * 0.2 + 0.2 
                      }}
                    />
                  </div>
                  <div className="flex items-center gap-6 pt-4">
                    <div className="h-8 w-32 bg-gray-100 rounded-lg"></div>
                    <div className="h-8 w-36 bg-gray-100 rounded-lg"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section Skeleton */}
      <section className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
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
          </div>

          {/* Values Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {Array(6).fill(0).map((_, index) => (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 space-y-6"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'reverse', 
                  duration: 1.2,
                  delay: index * 0.05 
                }}
              >
                <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl"></div>
                <div className="h-6 w-32 bg-gray-200 rounded-lg"></div>
                <div className="h-4 w-full bg-gray-200 rounded-lg"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Work Process Skeleton */}
      <section className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
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

          {/* Process Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {Array(6).fill(0).map((_, index) => (
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
                <div className="h-12 w-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl"></div>
                <div className="h-6 w-3/4 bg-gray-200 rounded-lg"></div>
                <div className="h-4 w-full bg-gray-200 rounded-lg"></div>
                <div className="h-1 w-4/5 bg-gradient-to-r from-blue-500 to-orange-400 rounded-full"></div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-white/80 to-blue-50/80 rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {Array(3).fill(0).map((_, idx) => (
                <div key={idx} className="space-y-2">
                  <motion.div
                    className="h-12 w-24 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg mx-auto"
                    initial={pulse.initial}
                    animate={pulse.animate}
                    transition={{ 
                      repeat: Infinity, 
                      repeatType: 'reverse', 
                      duration: 1.2,
                      delay: idx * 0.1 
                    }}
                  />
                  <motion.div
                    className="h-6 w-32 bg-gray-200 rounded-lg mx-auto"
                    initial={pulse.initial}
                    animate={pulse.animate}
                    transition={{ 
                      repeat: Infinity, 
                      repeatType: 'reverse', 
                      duration: 1.2,
                      delay: idx * 0.1 + 0.1 
                    }}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section Skeleton */}
      <section className="relative py-20 bg-gradient-to-b from-white to-orange-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <motion.div
                  className="h-8 w-32 bg-orange-100 rounded-full"
                  initial={pulse.initial}
                  animate={pulse.animate}
                  transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
                />
                <motion.div
                  className="h-10 w-3/4 bg-gray-200 rounded-lg"
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
                  className="h-8 w-2/3 bg-gray-200 rounded-lg"
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
                  className="h-16 w-full bg-gray-200 rounded-lg"
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

              {/* Features Grid */}
              <div className="grid sm:grid-cols-2 gap-6">
                {Array(4).fill(0).map((_, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/90 rounded-2xl p-6 space-y-4"
                    initial={pulse.initial}
                    animate={pulse.animate}
                    transition={{ 
                      repeat: Infinity, 
                      repeatType: 'reverse', 
                      duration: 1.2,
                      delay: idx * 0.05 
                    }}
                  >
                    <div className="h-12 w-12 bg-gradient-to-br from-blue-500 to-blue-400 rounded-xl"></div>
                    <div className="h-6 w-32 bg-gray-200 rounded-lg"></div>
                    <div className="h-4 w-full bg-gray-200 rounded-lg"></div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Right Visual */}
            <div className="bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl lg:rounded-l-[60px] h-full min-h-[500px]"></div>
          </div>
        </div>
      </section>

      {/* Team Section Skeleton */}
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

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array(4).fill(0).map((_, index) => (
              <motion.div
                key={index}
                className="bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'reverse', 
                  duration: 1.2,
                  delay: index * 0.1 
                }}
              >
                <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200"></div>
                <div className="p-6 space-y-3">
                  <div className="h-6 w-32 bg-gray-200 rounded-lg"></div>
                  <div className="h-4 w-24 bg-blue-100 rounded-lg"></div>
                  <div className="flex items-center">
                    <div className="h-4 w-4 bg-amber-200 rounded-full mr-2"></div>
                    <div className="h-3 w-28 bg-gray-200 rounded-lg"></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Skeleton */}
      <section className="relative py-20 bg-gradient-to-b from-orange-50 to-white">
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
          </div>

          {/* Testimonial Card */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 md:p-12 space-y-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                {/* Avatar */}
                <div className="h-24 w-24 bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl"></div>
                
                {/* Content */}
                <div className="flex-1 space-y-6">
                  <div className="flex gap-1">
                    {Array(5).fill(0).map((_, idx) => (
                      <div key={idx} className="h-5 w-5 bg-amber-200 rounded-full"></div>
                    ))}
                  </div>
                  
                  <div className="space-y-3">
                    <div className="h-6 w-full bg-gray-200 rounded-lg"></div>
                    <div className="h-6 w-5/6 bg-gray-200 rounded-lg"></div>
                    <div className="h-6 w-4/5 bg-gray-200 rounded-lg"></div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
                    <div className="space-y-2">
                      <div className="h-6 w-32 bg-gray-200 rounded-lg"></div>
                      <div className="h-4 w-40 bg-blue-200 rounded-lg"></div>
                    </div>
                    <div className="h-8 w-32 bg-gray-100 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section Skeleton */}
      <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Visual */}
            <div className="bg-gradient-to-br from-blue-600 to-blue-400 rounded-2xl lg:rounded-r-[60px] h-full min-h-[400px]"></div>

            {/* Right FAQ */}
            <div className="space-y-8">
              <div className="space-y-4">
                <motion.div
                  className="h-8 w-24 bg-blue-100 rounded-full"
                  initial={pulse.initial}
                  animate={pulse.animate}
                  transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
                />
                <motion.div
                  className="h-10 w-3/4 bg-gray-200 rounded-lg"
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

              {/* FAQ Items */}
              <div className="space-y-4">
                {Array(3).fill(0).map((_, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-white/90 rounded-2xl p-6 space-y-4"
                    initial={pulse.initial}
                    animate={pulse.animate}
                    transition={{ 
                      repeat: Infinity, 
                      repeatType: 'reverse', 
                      duration: 1.2,
                      delay: idx * 0.1 
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <div className="h-6 w-3/4 bg-gray-200 rounded-lg"></div>
                      <div className="h-8 w-8 bg-blue-100 rounded-lg"></div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
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

      {/* Clients Carousel Skeleton */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden">
          <motion.div
            className="h-8 w-1/3 mx-auto mb-8 rounded-lg bg-gray-200"
            initial={pulse.initial}
            animate={pulse.animate}
            transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
          />
          <div className="flex gap-12">
            {Array(6).fill(0).map((_, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 w-40 h-20 bg-gray-200 rounded-2xl"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'reverse', 
                  duration: 1.2,
                  delay: index * 0.05 
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutSkeleton;