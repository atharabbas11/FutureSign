// src/pages/ErrorPages/Maintenance.jsx
import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Clock, HardDrive, Server, Cpu } from 'lucide-react';

const Maintenance = () => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 2,
    minutes: 30,
    seconds: 0
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        const totalSeconds = prev.hours * 3600 + prev.minutes * 60 + prev.seconds - 1;
        
        if (totalSeconds <= 0) {
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }

        return {
          hours: Math.floor(totalSeconds / 3600),
          minutes: Math.floor((totalSeconds % 3600) / 60),
          seconds: totalSeconds % 60
        };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const progressItems = [
    { name: 'Database Migration', progress: 85, icon: <HardDrive className="h-5 w-5" /> },
    { name: 'Server Updates', progress: 70, icon: <Server className="h-5 w-5" /> },
    { name: 'Security Patches', progress: 95, icon: <Wrench className="h-5 w-5" /> },
    { name: 'System Optimization', progress: 60, icon: <Cpu className="h-5 w-5" /> },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-orange-50 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto text-center"
      >
        {/* Tools Icon with Animation */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2 
          }}
          className="relative mb-8"
        >
          <div className="relative inline-block">
            <Wrench className="h-48 w-48 text-amber-500/20" />
            <motion.div
              animate={{ 
                rotate: 360,
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <Wrench className="h-24 w-24 text-amber-600" />
            </motion.div>
          </div>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Scheduled Maintenance
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            We're currently performing scheduled maintenance to improve your experience. 
            We'll be back online shortly.
          </p>
          
          {/* Countdown Timer */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-gray-100 max-w-2xl mx-auto mb-8">
            <div className="flex items-center justify-center gap-3 mb-6">
              <Clock className="h-6 w-6 text-amber-500" />
              <span className="text-xl font-semibold text-gray-700">Estimated Completion</span>
            </div>
            
            <div className="flex justify-center gap-6 mb-6">
              {Object.entries(timeLeft).map(([unit, value]) => (
                <div key={unit} className="text-center">
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                    {String(value).padStart(2, '0')}
                  </div>
                  <div className="text-sm text-gray-500 uppercase mt-2">
                    {unit}
                  </div>
                </div>
              ))}
            </div>
            
            <div className="w-full bg-gray-200 rounded-full h-2">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "70%" }}
                transition={{ duration: 2, ease: "easeInOut" }}
                className="h-2 rounded-full bg-gradient-to-r from-amber-500 to-orange-500"
              />
            </div>
            <p className="text-sm text-gray-500 mt-3">Maintenance Progress: 70%</p>
          </div>
        </motion.div>

        {/* Maintenance Progress */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center justify-center gap-2">
            <Server className="h-6 w-6 text-amber-600" />
            Current Maintenance Tasks
          </h3>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {progressItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8 + index * 0.1 }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-amber-600">
                      {item.icon}
                    </div>
                    <span className="font-semibold text-gray-700">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium text-amber-600">
                    {item.progress}%
                  </span>
                </div>
                
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.progress}%` }}
                    transition={{ duration: 1.5, delay: index * 0.2 }}
                    className="h-2 rounded-full bg-gradient-to-r from-amber-400 to-orange-400"
                  />
                </div>
                
                <div className="flex justify-between text-xs text-gray-500 mt-2">
                  <span>Started</span>
                  <span>In Progress</span>
                  <span>Completed</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Information Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="bg-gradient-to-r from-amber-100/50 to-orange-100/50 rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <Wrench className="h-5 w-5 text-amber-600" />
            What's Happening?
          </h3>
          
          <div className="text-left space-y-4">
            <p className="text-gray-700">
              We're working hard to improve our services. During this maintenance window:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Performance optimizations and updates</li>
              <li>Security enhancements and patches</li>
              <li>Database maintenance and backups</li>
              <li>Infrastructure improvements</li>
              <li>Bug fixes and stability improvements</li>
            </ul>
            <p className="text-gray-700 pt-4">
              This scheduled maintenance ensures better performance, enhanced security, 
              and an overall improved user experience once completed.
            </p>
          </div>
          
          <div className="mt-6 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm">
              <Clock className="h-4 w-4" />
              <span>Next maintenance window: Every Sunday 2:00 AM - 6:00 AM</span>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="mt-12 text-gray-500 text-sm max-w-2xl mx-auto"
        >
          For urgent matters during maintenance, please contact our support team at 
          <span className="font-semibold text-amber-600 ml-1">support@futuresign.com</span>
        </motion.p>
      </motion.div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-amber-200/20 to-orange-200/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 200 + 50}px`,
              height: `${Math.random() * 200 + 50}px`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.1, 0.3, 0.1]
            }}
            transition={{
              duration: Math.random() * 5 + 5,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Maintenance;
