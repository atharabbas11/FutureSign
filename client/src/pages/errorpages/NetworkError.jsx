// src/pages/ErrorPages/NetworkError.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, WifiOff, Wifi, RefreshCw, Globe, Signal } from 'lucide-react';

const NetworkError = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [retryCount, setRetryCount] = useState(0);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  const handleRetry = () => {
    setRetryCount(prev => prev + 1);
    window.location.reload();
  };

  const handleNetworkTest = () => {
    // Simple network test
    fetch('https://www.google.com/favicon.ico', { 
      mode: 'no-cors',
      cache: 'no-store' 
    })
    .then(() => {
      setIsOnline(true);
    })
    .catch(() => {
      setIsOnline(false);
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50 flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        {/* Connection Icon with Animation */}
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
          <div className="relative inline-block">
            <Globe className="h-48 w-48 text-gray-400/20" />
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
              {isOnline ? (
                <Wifi className="h-24 w-24 text-green-500" />
              ) : (
                <WifiOff className="h-24 w-24 text-red-500" />
              )}
            </motion.div>
          </div>
        </motion.div>

        {/* Status Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full mb-6 ${
            isOnline 
              ? 'bg-green-100 text-green-800' 
              : 'bg-red-100 text-red-800'
          }`}>
            {isOnline ? (
              <>
                <div className="h-3 w-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold">You're back online!</span>
              </>
            ) : (
              <>
                <div className="h-3 w-3 bg-red-500 rounded-full animate-pulse"></div>
                <span className="font-semibold">No Internet Connection</span>
              </>
            )}
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
            {isOnline ? 'Connection Restored!' : 'Network Error'}
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            {isOnline 
              ? 'Your connection has been restored. You can now continue browsing.' 
              : 'Unable to connect to the internet. Please check your network connection.'
            }
          </p>
          
          {/* Network Stats */}
          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto mb-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Signal className="h-5 w-5 text-blue-500" />
                <span className="font-semibold text-gray-700">Status</span>
              </div>
              <div className={`text-sm font-medium ${
                isOnline ? 'text-green-600' : 'text-red-600'
              }`}>
                {isOnline ? 'Connected' : 'Disconnected'}
              </div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center gap-3 mb-4">
                <RefreshCw className="h-5 w-5 text-amber-500" />
                <span className="font-semibold text-gray-700">Retry Attempts</span>
              </div>
              <div className="text-sm text-gray-500">{retryCount}</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Globe className="h-5 w-5 text-purple-500" />
                <span className="font-semibold text-gray-700">Server</span>
              </div>
              <div className="text-sm text-gray-500">Reachable</div>
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
          {!isOnline && (
            <>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleRetry}
                className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white font-semibold px-8 py-4 rounded-xl hover:shadow-lg transition-all flex items-center justify-center gap-3 group"
              >
                <RefreshCw className="h-5 w-5 group-hover:rotate-180 transition-transform" />
                Retry Connection
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handleNetworkTest}
                className="bg-white text-gray-800 font-semibold px-8 py-4 rounded-xl hover:bg-gray-50 transition-all flex items-center justify-center gap-3 border border-gray-200 group"
              >
                <Wifi className="h-5 w-5 group-hover:scale-110 transition-transform" />
                Test Connection
              </motion.button>
            </>
          )}

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
        </motion.div>

        {/* Troubleshooting Guide */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="bg-gradient-to-r from-blue-100/50 to-cyan-100/50 rounded-2xl p-8 max-w-3xl mx-auto"
        >
          <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <WifiOff className="h-5 w-5 text-blue-600" />
            Connection Troubleshooting
          </h3>
          <div className="grid md:grid-cols-2 gap-6 text-left">
            <div className="space-y-3">
              <div className="font-medium text-gray-800">Check Your Device</div>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm ml-4">
                <li>Airplane mode is off</li>
                <li>Wi-Fi is turned on</li>
                <li>Mobile data is enabled</li>
                <li>VPN is disconnected</li>
              </ul>
            </div>
            <div className="space-y-3">
              <div className="font-medium text-gray-800">Network Settings</div>
              <ul className="list-disc list-inside text-gray-600 space-y-1 text-sm ml-4">
                <li>Restart your router</li>
                <li>Forget and reconnect to Wi-Fi</li>
                <li>Check with your ISP</li>
                <li>Try a different network</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 text-center">
            <p className="text-sm text-gray-500">
              {isOnline 
                ? 'Connection established successfully.' 
                : 'Still having issues? Try the steps above.'
              }
            </p>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default NetworkError;