// src/pages/ErrorPages/NotFound.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ArrowLeft, AlertTriangle, RefreshCw } from 'lucide-react';

const NotFound = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-orange-50 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* 404 Number with Animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2 
          }}
          className="relative mb-8"
        >
          <div className="text-[180px] md:text-[250px] font-bold text-gradient bg-gradient-to-r from-[#1e40af] via-blue-400 to-[#dd5428] bg-clip-text text-transparent relative">
            404
            <motion.div
              animate={{ 
                rotate: [0, 5, -5, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <AlertTriangle className="h-32 w-32 text-yellow-500/20" />
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
            Page Not Found
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Oops! The page you're looking for seems to have wandered off into the digital void. 
            Let's get you back on track.
          </p>
          
          {/* Error Details */}
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100 max-w-md mx-auto mb-8">
            <div className="flex items-center justify-center gap-3 text-gray-700">
              <AlertTriangle className="h-5 w-5 text-amber-500" />
              <span className="font-medium">HTTP 404 Error</span>
              <span className="text-gray-400">•</span>
              <span className="text-sm">Page Not Found</span>
            </div>
          </div>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#1e40af] to-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-3 group"
          >
            <Link to="/" className="flex items-center gap-3">
              <Home className="h-5 w-5 group-hover:scale-110 transition-transform" />
              Back to Home
            </Link>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.history.back()}
            className="bg-white text-gray-800 font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-3 border border-gray-200 group"
          >
            <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-[#dd5428] to-orange-500 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-3 group"
          >
            <RefreshCw className="h-5 w-5 group-hover:rotate-180 transition-transform" />
            Refresh Page
          </motion.button>
        </motion.div>

        {/* Help Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-blue-100/50 to-orange-100/50 rounded-2xl p-8 max-w-2xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <AlertTriangle className="h-5 w-5 text-amber-500" />
            Need Help?
          </h3>
          <div className="grid md:grid-cols-3 gap-6 text-left">
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
              <div className="text-[#1e40af] font-semibold mb-2">Check the URL</div>
              <p className="text-sm text-gray-600">Ensure the web address is spelled correctly</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
              <div className="text-[#1e40af] font-semibold mb-2">Browse Our Site</div>
              <p className="text-sm text-gray-600">Use navigation menu to find what you need</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4">
              <div className="text-[#1e40af] font-semibold mb-2">Contact Support</div>
              <p className="text-sm text-gray-600">We're here to help you find your way</p>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 text-[#1e40af] hover:text-blue-600 font-medium transition-colors"
            >
              <span>Contact Support Team</span>
              <ArrowLeft className="h-4 w-4 rotate-180" />
            </Link>
          </div>
        </motion.div>

        {/* Footer Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 text-gray-500 text-sm"
        >
          If you believe this is an error, please contact our support team.
        </motion.p>
      </motion.div>

      {/* Background Animation */}
      <div className="fixed inset-0 overflow-hidden -z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full border border-blue-200"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              width: `${Math.random() * 300 + 50}px`,
              height: `${Math.random() * 300 + 50}px`,
              opacity: 0.05
            }}
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default NotFound;