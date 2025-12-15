import React from 'react';
import { motion } from 'framer-motion';

const HomeSkeleton = () => {
  const pulse = {
    initial: { opacity: 0.3 },
    animate: { opacity: 1 },
  };

  return (
    <div className="pt-0 space-y-20">

      {/* Hero Section Skeleton */}
      <section className="relative bg-gradient-to-r from-[#1e40af] via-blue-600 to-[#dd5428] text-white overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-6 py-8 sm:py-32 grid lg:grid-cols-2 gap-12 items-center mt-15 sm:mt-0">
          {/* Left Section */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div
              className="h-8 w-48 bg-white/20 rounded-full"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
            />
            
            {/* Main Heading */}
            <div className="space-y-4">
              <motion.div
                className="h-12 w-4/5 bg-white/20 rounded-lg"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.1 }}
              />
              <motion.div
                className="h-12 w-3/5 bg-white/20 rounded-lg"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.2 }}
              />
            </div>

            {/* Description */}
            <motion.div
              className="h-6 w-full bg-white/15 rounded-lg"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.3 }}
            />
            <motion.div
              className="h-6 w-5/6 bg-white/15 rounded-lg"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.4 }}
            />

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <motion.div
                className="h-12 w-40 bg-white/30 rounded-xl"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.5 }}
              />
              <motion.div
                className="h-12 w-40 bg-white/10 rounded-xl"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.6 }}
              />
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8">
              {Array(4).fill(0).map((_, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white/10 backdrop-blur-sm rounded-2xl p-4"
                  initial={pulse.initial}
                  animate={pulse.animate}
                  transition={{ 
                    repeat: Infinity, 
                    repeatType: 'reverse', 
                    duration: 1.2,
                    delay: idx * 0.1
                  }}
                >
                  <div className="h-8 w-16 bg-white/20 rounded-lg mx-auto mb-2"></div>
                  <div className="h-4 w-20 bg-white/15 rounded-lg mx-auto"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right Image Carousel */}
          <div className="relative sm:h-[400px] h-[200px] overflow-hidden rounded-2xl bg-white/20"></div>
        </div>
      </section>

      {/* Features Section Skeleton */}
      <section className="relative py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              className="h-8 w-32 bg-blue-100 rounded-full mx-auto mb-4"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
            />
            <motion.div
              className="h-12 w-3/4 bg-gray-200 rounded-lg mx-auto mb-4"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.1 }}
            />
            <motion.div
              className="h-8 w-2/3 bg-gray-200 rounded-lg mx-auto"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.2 }}
            />
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {Array(3).fill(0).map((_, idx) => (
              <motion.div
                key={idx}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 space-y-6"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'reverse', 
                  duration: 1.2,
                  delay: idx * 0.1
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

      {/* Editing Section Skeleton */}
      <section className="relative py-20 bg-white">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* First Row */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* About Us Box */}
            <motion.div
              className="bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl lg:rounded-r-[60px] p-8"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
            >
              <div className="space-y-4">
                <div className="h-8 w-24 bg-white/30 rounded-full"></div>
                <div className="h-8 w-32 bg-white/30 rounded-lg"></div>
                <div className="h-16 w-full bg-white/20 rounded-lg"></div>
              </div>
            </motion.div>

            {/* Main Content */}
            <div className="lg:col-span-2 flex flex-wrap lg:flex-nowrap gap-8">
              {/* Left */}
              <div className="flex-1 space-y-4">
                <div className="h-16 w-3/4 bg-gray-200 rounded-lg"></div>
                <div className="h-16 w-1/2 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg"></div>
              </div>
              
              {/* Right */}
              <div className="flex-1 space-y-6">
                <div className="h-24 w-full bg-gray-200 rounded-lg"></div>
                <div className="h-12 w-40 bg-gradient-to-r from-blue-600 to-orange-500 rounded-xl"></div>
              </div>
            </div>
          </div>

          {/* Second Row */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="flex flex-col space-y-8">
              {/* Customer Satisfaction Box */}
              <motion.div
                className="relative bg-gradient-to-br from-blue-600 to-blue-500 rounded-2xl p-6 flex-1 min-h-[180px]"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2 }}
              >
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <div className="h-16 w-16 bg-white/20 rounded-full"></div>
                    <div className="space-y-2">
                      <div className="h-6 w-32 bg-white/30 rounded-lg"></div>
                      <div className="h-10 w-24 bg-white/30 rounded-lg"></div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="h-2 w-full bg-white/30 rounded-full"></div>
                    <div className="flex justify-between">
                      <div className="h-4 w-20 bg-white/30 rounded-lg"></div>
                      <div className="h-6 w-24 bg-white/20 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Bottom Section */}
              <div className="flex flex-col lg:flex-row gap-8 flex-1">
                <div className="rounded-2xl overflow-hidden shadow-lg w-full lg:w-[40%] min-h-[150px] bg-gray-200"></div>
                <div className="w-full lg:w-[60%] bg-gradient-to-r from-orange-500 to-orange-400 rounded-2xl p-6 min-h-[150px] space-y-4">
                  <div className="h-16 w-16 bg-white/20 rounded-full"></div>
                  <div className="h-10 w-24 bg-white/30 rounded-lg"></div>
                  <div className="h-6 w-40 bg-white/30 rounded-lg"></div>
                </div>
              </div>
            </div>

            {/* Middle Image */}
            <div className="rounded-2xl overflow-hidden shadow-lg min-h-[500px] bg-gray-200"></div>

            {/* Right Column */}
            <div className="flex flex-col space-y-8">
              {/* Top Carousel */}
              <div className="flex-1 min-h-[250px] bg-gray-100 rounded-2xl"></div>
              
              {/* Bottom Slider */}
              <div className="flex-1 min-h-[250px] bg-gradient-to-br from-blue-50 to-orange-50 rounded-2xl p-6">
                <div className="h-full flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="h-12 w-20 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg mx-auto"></div>
                    <div className="h-6 w-32 bg-blue-200 rounded-lg mx-auto"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logo Carousel Skeleton */}
      <section className="relative py-16 bg-gradient-to-b from-white to-blue-50">
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
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.1 }}
            />
            <motion.div
              className="h-8 w-1/2 bg-gray-200 rounded-lg mx-auto"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.2 }}
            />
          </div>

          {/* Logo Grid */}
          <div className="flex gap-8 overflow-hidden">
            {Array(6).fill(0).map((_, idx) => (
              <motion.div
                key={idx}
                className="flex-shrink-0 w-40 h-32 bg-white/80 rounded-2xl p-6 space-y-3"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'reverse', 
                  duration: 1.2,
                  delay: idx * 0.05
                }}
              >
                <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-blue-400 rounded-xl mx-auto"></div>
                <div className="h-4 w-24 bg-gray-200 rounded-lg mx-auto"></div>
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
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.1 }}
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

      {/* How It Works Skeleton */}
      <section className="relative py-20 bg-gradient-to-b from-blue-50 to-white">
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
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.1 }}
            />
            <motion.div
              className="h-8 w-1/2 bg-gray-200 rounded-lg mx-auto"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.2 }}
            />
          </div>

          {/* Process Grid */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {Array(3).fill(0).map((_, idx) => (
              <motion.div
                key={idx}
                className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 shadow-lg space-y-6"
                initial={pulse.initial}
                animate={pulse.animate}
                transition={{ 
                  repeat: Infinity, 
                  repeatType: 'reverse', 
                  duration: 1.2,
                  delay: idx * 0.1
                }}
              >
                <div className="h-16 w-16 bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl"></div>
                <div className="h-12 w-12 bg-gradient-to-br from-orange-500 to-orange-400 rounded-xl"></div>
                <div className="h-8 w-3/4 bg-gray-200 rounded-lg"></div>
                <div className="h-6 w-full bg-gray-200 rounded-lg"></div>
              </motion.div>
            ))}
          </div>

          {/* Stats */}
          <div className="bg-gradient-to-r from-white/80 to-blue-50/80 rounded-2xl p-8 shadow-xl">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              {Array(3).fill(0).map((_, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="h-12 w-24 bg-gradient-to-r from-blue-600 to-orange-500 rounded-lg mx-auto"></div>
                  <div className="h-6 w-32 bg-gray-200 rounded-lg mx-auto"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Quality Section Skeleton */}
      <section className="relative py-20 bg-gradient-to-b from-white to-orange-50">
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
                  transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.1 }}
                />
                <motion.div
                  className="h-8 w-2/3 bg-gray-200 rounded-lg"
                  initial={pulse.initial}
                  animate={pulse.animate}
                  transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.2 }}
                />
                <motion.div
                  className="h-16 w-full bg-gray-200 rounded-lg"
                  initial={pulse.initial}
                  animate={pulse.animate}
                  transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.3 }}
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
                  transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.1 }}
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
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.1 }}
            />
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div
              className="h-12 w-40 bg-white/30 rounded-xl"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.2 }}
            />
            <motion.div
              className="h-12 w-40 bg-white/10 rounded-xl border border-white/30"
              initial={pulse.initial}
              animate={pulse.animate}
              transition={{ repeat: Infinity, repeatType: 'reverse', duration: 1.2, delay: 0.3 }}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeSkeleton;