// src/pages/ErrorPages/ServerError.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, RefreshCw, Server, AlertCircle, WifiOff } from 'lucide-react';

const ServerError = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Server Icon with Animation */}
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
            <Server className="h-48 w-48 text-red-500/20" />
            <motion.div
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
            >
              <AlertCircle className="h-24 w-24 text-red-500" />
            </motion.div>
          </div>
        </motion.div>

        {/* Error Number */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-6"
        >
          <div className="text-[100px] md:text-[150px] font-bold text-gradient bg-gradient-to-r from-red-600 via-red-500 to-orange-600 bg-clip-text text-transparent">
            500
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
            Server Error
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Our servers are experiencing some technical difficulties. 
            Don't worry, our team has been alerted and is working to fix the issue.
          </p>
          
          {/* Status Indicators */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-700">Server Status</span>
              </div>
              <div className="text-sm text-gray-500">Investigating</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center gap-3 mb-4">
                <WifiOff className="h-5 w-5 text-amber-500" />
                <span className="font-semibold text-gray-700">Connection</span>
              </div>
              <div className="text-sm text-gray-500">Check your network</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center gap-3 mb-4">
                <RefreshCw className="h-5 w-5 text-green-500" />
                <span className="font-semibold text-gray-700">Auto-Retry</span>
              </div>
              <div className="text-sm text-gray-500">Enabled</div>
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
            onClick={() => window.location.reload()}
            className="bg-gradient-to-r from-red-600 to-orange-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-3 group"
          >
            <RefreshCw className="h-5 w-5 group-hover:rotate-180 transition-transform" />
            Try Again
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-gradient-to-r from-[#1e40af] to-blue-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-3 group"
          >
            <Link to="/" className="flex items-center gap-3">
              <Home className="h-5 w-5 group-hover:scale-110 transition-transform" />
              Go to Homepage
            </Link>
          </motion.button>
        </motion.div>

        {/* Technical Info */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-red-100/50 to-orange-100/50 rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-500" />
            What Happened?
          </h3>
          <div className="text-left space-y-4">
            <p className="text-gray-700">
              This error typically means there's an issue on our end. Our technical team has been 
              automatically notified and is working to resolve it as quickly as possible.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Server maintenance or updates might be in progress</li>
              <li>Temporary network issues could be affecting connectivity</li>
              <li>High traffic might be causing temporary delays</li>
              <li>We're working to restore full functionality</li>
            </ul>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 mb-4">
              Estimated resolution time: <span className="font-semibold">15-30 minutes</span>
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 text-red-600 hover:text-red-700 font-medium transition-colors"
            >
              <span>Report This Issue</span>
              <AlertCircle className="h-4 w-4" />
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
          Thank you for your patience. We're working hard to fix this issue.
        </motion.p>
      </motion.div>
    </div>
  );
};

export default ServerError;