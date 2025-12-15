import React from 'react';
import { motion } from 'framer-motion';

const ContactSkeleton = () => {
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
        </div>
      </section>

      {/* Contact Info Cards Skeleton */}
      <section className="relative py-20 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Array(4).fill(0).map((_, index) => (
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
                {/* Gradient border */}
                <div className={`absolute -inset-1 ${
                  index % 2 === 0 ? 'bg-gradient-to-r from-blue-500 to-blue-400' : 'bg-gradient-to-r from-orange-500 to-orange-400'
                } rounded-3xl blur opacity-30`} />
                
                {/* Card */}
                <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl p-8 text-center space-y-6">
                  <div className={`h-16 w-16 ${
                    index % 2 === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-400' : 'bg-gradient-to-br from-orange-500 to-orange-400'
                  } rounded-2xl mx-auto`}></div>
                  <div className="h-6 w-24 bg-gray-200 rounded-lg mx-auto"></div>
                  <div className="h-8 w-32 bg-gray-300 rounded-lg mx-auto"></div>
                  <div className="h-4 w-36 bg-gray-200 rounded-lg mx-auto"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Info Section Skeleton */}
      <section className="relative py-20 bg-gradient-to-b from-white to-orange-50 overflow-hidden">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Form Side */}
            <div className="relative">
              {/* Gradient border */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-orange-500 rounded-3xl blur opacity-30" />
              
              {/* Form container */}
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 lg:p-10 space-y-8">
                {/* Header */}
                <div className="space-y-4">
                  <div className="h-8 w-40 bg-blue-100 rounded-full"></div>
                  <div className="space-y-2">
                    <div className="h-8 w-2/3 bg-gray-200 rounded-lg"></div>
                    <div className="h-8 w-1/2 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg"></div>
                  </div>
                  <div className="h-6 w-full bg-gray-200 rounded-lg"></div>
                </div>

                {/* Form fields */}
                <div className="space-y-6">
                  {/* Name & Phone */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="h-14 w-full bg-gray-100 rounded-xl"></div>
                    <div className="h-14 w-full bg-gray-100 rounded-xl"></div>
                  </div>
                  
                  {/* Email */}
                  <div className="h-14 w-full bg-gray-100 rounded-xl"></div>
                  
                  {/* Service Select */}
                  <div className="h-14 w-full bg-gray-100 rounded-xl"></div>
                  
                  {/* Message */}
                  <div className="h-32 w-full bg-gray-100 rounded-xl"></div>
                  
                  {/* Submit button */}
                  <div className="h-16 w-full bg-gradient-to-r from-blue-500 to-orange-500 rounded-xl"></div>
                </div>
              </div>
            </div>

            {/* Info Side */}
            <div className="space-y-8">
              {/* Map Card */}
              <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl p-8 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="h-6 w-6 bg-blue-100 rounded-lg"></div>
                  <div className="h-6 w-32 bg-gray-200 rounded-lg"></div>
                </div>
                <div className="h-64 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl flex flex-col items-center justify-center space-y-4">
                  <div className="h-16 w-16 bg-blue-100 rounded-full"></div>
                  <div className="space-y-2 text-center">
                    <div className="h-4 w-48 bg-gray-200 rounded-lg mx-auto"></div>
                    <div className="h-4 w-56 bg-gray-200 rounded-lg mx-auto"></div>
                  </div>
                  <div className="h-12 w-40 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg"></div>
                </div>
              </div>

              {/* Hours Card */}
              <div className="bg-gradient-to-br from-blue-500 to-blue-400 rounded-2xl shadow-xl p-8 space-y-6">
                <div className="flex items-center mb-2">
                  <div className="h-12 w-12 bg-white/20 rounded-xl mr-4"></div>
                  <div className="space-y-2">
                    <div className="h-6 w-32 bg-white/30 rounded-lg"></div>
                    <div className="h-4 w-48 bg-white/20 rounded-lg"></div>
                  </div>
                </div>
                <div className="space-y-4">
                  {Array(4).fill(0).map((_, index) => (
                    <div key={index} className="flex justify-between items-center py-2">
                      <div className="h-4 w-32 bg-white/30 rounded-lg"></div>
                      <div className="h-4 w-24 bg-white/40 rounded-lg"></div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Guarantee Card */}
              <div className="bg-gradient-to-br from-orange-500 to-orange-400 rounded-2xl shadow-xl p-8 space-y-6">
                <div className="h-6 w-48 bg-white/30 rounded-lg"></div>
                <ul className="space-y-4">
                  {Array(4).fill(0).map((_, index) => (
                    <li key={index} className="flex items-center">
                      <div className="h-2 w-2 bg-white rounded-full mr-3"></div>
                      <div className="h-4 w-full bg-white/20 rounded-lg"></div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Airplane Animation Modal Skeleton */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-500/95 to-orange-500/95 z-50 flex items-center justify-center pointer-events-none opacity-0">
        {/* Airplane */}
        <div className="absolute top-1/2 left-0 h-24 w-24 bg-white/30 rounded-full"></div>

        {/* Success Message */}
        <div className="text-center text-white z-10 space-y-8">
          <div className="inline-flex items-center justify-center w-32 h-32 bg-white/20 rounded-full border border-white/20">
            <div className="h-16 w-16 bg-white/30 rounded-full"></div>
          </div>
          <div className="space-y-4">
            <div className="h-12 w-64 bg-white/30 rounded-lg mx-auto"></div>
            <div className="h-6 w-96 bg-white/20 rounded-lg mx-auto"></div>
          </div>
          <div className="h-14 w-48 bg-white/40 rounded-xl mx-auto"></div>
        </div>
      </div>

      {/* Error Modal Skeleton */}
      <div className="fixed inset-0 bg-black/50 z-40 flex items-center justify-center pointer-events-none opacity-0">
        <div className="bg-white rounded-2xl shadow-2xl p-10 text-center max-w-md mx-4 space-y-6">
          <div className="h-16 w-16 bg-red-100 rounded-full mx-auto"></div>
          <div className="space-y-3">
            <div className="h-8 w-40 bg-gray-300 rounded-lg mx-auto"></div>
            <div className="h-6 w-64 bg-gray-200 rounded-lg mx-auto"></div>
          </div>
          <div className="h-12 w-32 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg mx-auto"></div>
        </div>
      </div>
    </div>
  );
};

export default ContactSkeleton;