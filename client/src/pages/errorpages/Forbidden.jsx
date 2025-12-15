// src/pages/ErrorPages/Forbidden.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, Lock, Shield, AlertOctagon, ArrowRight } from 'lucide-react';

const Forbidden = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-pink-50 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Lock Icon with Animation */}
        <motion.div
          initial={{ scale: 0, y: -50 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ 
            type: "spring",
            stiffness: 200,
            damping: 15,
            delay: 0.2 
          }}
          className="relative mb-8"
        >
          <div className="relative inline-block">
            <Lock className="h-48 w-48 text-purple-500/20" />
            <motion.div
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "reverse"
              }}
              className="absolute top-8 left-1/2 transform -translate-x-1/2"
            >
              <Shield className="h-24 w-24 text-purple-600" />
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
          <div className="text-[100px] md:text-[150px] font-bold text-gradient bg-gradient-to-r from-purple-600 via-purple-500 to-pink-600 bg-clip-text text-transparent">
            403
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
            Access Forbidden
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            You don't have permission to access this page. 
            This area is restricted to authorized users only.
          </p>
          
          {/* Security Indicators */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Shield className="h-5 w-5 text-green-500" />
                <span className="font-semibold text-gray-700">Security</span>
              </div>
              <div className="text-sm text-gray-500">Active</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Lock className="h-5 w-5 text-purple-500" />
                <span className="font-semibold text-gray-700">Access</span>
              </div>
              <div className="text-sm text-gray-500">Restricted</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center gap-3 mb-4">
                <AlertOctagon className="h-5 w-5 text-amber-500" />
                <span className="font-semibold text-gray-700">Authorization</span>
              </div>
              <div className="text-sm text-gray-500">Required</div>
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
            <ArrowRight className="h-5 w-5 rotate-180 group-hover:-translate-x-1 transition-transform" />
            Go Back
          </motion.button>
        </motion.div>

        {/* Access Information */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-purple-100/50 to-pink-100/50 rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <Shield className="h-5 w-5 text-purple-600" />
            Why Am I Seeing This?
          </h3>
          <div className="text-left space-y-4">
            <p className="text-gray-700">
              You're seeing this page because you tried to access a restricted area. 
              This could be due to:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2 ml-4">
              <li>Insufficient permissions for your account</li>
              <li>Attempting to access admin-only features</li>
              <li>Session timeout or expired credentials</li>
              <li>IP address restriction in place</li>
            </ul>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500 mb-4">
              Need access? Contact your administrator or support team.
            </p>
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 text-purple-600 hover:text-purple-700 font-medium transition-colors"
            >
              <span>Request Access</span>
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Forbidden;