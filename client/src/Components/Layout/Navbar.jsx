// import React, { useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { Printer, Menu, X } from 'lucide-react'
// import logo from '../../../public/images/logo.png'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const location = useLocation()

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Services', path: '/services' },
//     { name: 'Gallery', path: '/gallery' },
//     { name: 'Contact', path: '/contact' },
//   ]

//   const isActive = (path) => location.pathname === path

//   return (
//     <nav className="bg-white shadow-lg sticky top-0 z-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo */}
//           <Link to="/" className="flex items-center">
//             <div className='mx-auto h-10 w-10'>
//               <img src={logo} alt="Logo" />
//             </div>
//             <div className="flex flex-wrap">
//               <div className="flex">
//                 <span className="text-2xl font-bold text-[#1e40af]">Future</span>
//                 <span className="text-2xl font-bold text-[#dd5428]">Sign</span>
//               </div>
//               <span className="text-xs font-bold text-gray-800 w-full">The Complete Branding Solution</span>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className={`relative px-3 py-2 text-lg font-medium transition-all duration-300 ${
//                   isActive(item.path)
//                     ? 'text-blue-600'
//                     : 'text-gray-700 hover:text-blue-600'
//                 }`}
//               >
//                 {item.name}
//                 {isActive(item.path) && (
//                   <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full"></span>
//                 )}
//               </Link>
//             ))}
//             <Link
//               to="/contact"
//               className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300 transform hover:scale-105"
//             >
//               Get Quote
//             </Link>
//           </div>

//           {/* Mobile menu button */}
//           <div className="md:hidden">
//             <button
//               onClick={() => setIsOpen(!isOpen)}
//               className="text-gray-700 hover:text-blue-600 transition"
//             >
//               {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
//             </button>
//           </div>
//         </div>

//         {/* Mobile Navigation */}
//         {isOpen && (
//           <div className="md:hidden absolute top-20 left-0 w-full bg-white shadow-lg border-t">
//             <div className="px-4 py-6 space-y-4">
//               {navItems.map((item) => (
//                 <Link
//                   key={item.name}
//                   to={item.path}
//                   onClick={() => setIsOpen(false)}
//                   className={`block px-3 py-2 text-lg font-medium rounded-lg transition ${
//                     isActive(item.path)
//                       ? 'bg-blue-50 text-blue-600'
//                       : 'text-gray-700 hover:bg-gray-50'
//                   }`}
//                 >
//                   {item.name}
//                 </Link>
//               ))}
//               <Link
//                 to="/contact"
//                 onClick={() => setIsOpen(false)}
//                 className="block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-3 rounded-lg font-semibold text-center hover:from-blue-700 hover:to-blue-900 transition"
//               >
//                 Get Quote
//               </Link>
//             </div>
//           </div>
//         )}
//       </div>
//     </nav>
//   )
// }

// export default Navbar


// import React, { useState } from 'react'
// import { Link, useLocation } from 'react-router-dom'
// import { Menu, X } from 'lucide-react'
// import { motion, AnimatePresence } from 'framer-motion'
// import logo from '../../../public/images/logo.png'

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const location = useLocation()

//   const navItems = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Services', path: '/services' },
//     { name: 'Gallery', path: '/gallery' },
//     { name: 'Contact', path: '/contact' },
//   ]

//   const isActive = (path) => location.pathname === path

//   return (
//     <nav className="backdrop-blur-md bg-white/80 shadow-md sticky top-0 z-50 transition-all duration-300">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="flex justify-between items-center h-20">
//           {/* Logo Section */}
//           <Link to="/" className="flex items-center space-x-3 group">
//             <div className="h-10 w-10 transition-transform duration-500 group-hover:rotate-12">
//               <img src={logo} alt="Logo" />
//             </div>
//             <div className="flex flex-col leading-tight">
//               <div className="flex space-x-1">
//                 <span className="text-2xl font-extrabold text-[#1e40af] group-hover:text-blue-700 transition-all">Future</span>
//                 <span className="text-2xl font-extrabold text-[#dd5428] group-hover:text-orange-600 transition-all">Sign</span>
//               </div>
//               <span className="text-[10px] font-semibold text-gray-700 tracking-wider uppercase">
//                 The Complete Branding Solution
//               </span>
//             </div>
//           </Link>

//           {/* Desktop Navigation */}
//           <div className="hidden md:flex items-center space-x-8">
//             {navItems.map((item) => (
//               <Link
//                 key={item.name}
//                 to={item.path}
//                 className={`relative text-[1rem] font-medium transition-all duration-300 ${
//                   isActive(item.path)
//                     ? 'text-blue-600'
//                     : 'text-gray-700 hover:text-blue-600'
//                 }`}
//               >
//                 {item.name}
//                 {isActive(item.path) && (
//                   <motion.span
//                     layoutId="underline"
//                     className="absolute left-0 -bottom-1 w-full h-[2px] bg-blue-600 rounded-full"
//                   />
//                 )}
//               </Link>
//             ))}
//             <Link
//               to="/contact"
//               className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-900 transform hover:scale-105 transition-all duration-300"
//             >
//               Get Quote
//             </Link>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="md:hidden text-gray-700 hover:text-blue-600 transition"
//           >
//             {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
//           </button>
//         </div>

//         {/* Mobile Navigation with Animation */}
//         <AnimatePresence>
//           {isOpen && (
//             <motion.div
//               initial={{ opacity: 0, y: -10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.3 }}
//               className="md:hidden absolute left-0 w-full bg-white/95 shadow-lg border-t rounded-b-2xl backdrop-blur-lg"
//             >
//               <div className="px-6 py-6 space-y-4">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.name}
//                     to={item.path}
//                     onClick={() => setIsOpen(false)}
//                     className={`block px-3 py-2 text-lg font-medium rounded-lg transition-all duration-200 ${
//                       isActive(item.path)
//                         ? 'bg-blue-50 text-blue-700 shadow-sm'
//                         : 'text-gray-700 hover:bg-gray-100'
//                     }`}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//                 <Link
//                   to="/contact"
//                   onClick={() => setIsOpen(false)}
//                   className="block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-3 rounded-full font-semibold text-center shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
//                 >
//                   Get Quote
//                 </Link>
//               </div>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>
//     </nav>
//   )
// }

// export default Navbar

import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import logo from '../../../public/images/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'backdrop-blur-md bg-white/80 shadow-md' 
        : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="h-10 w-10 transition-transform duration-500 group-hover:rotate-12">
              <img src={logo} alt="Logo" />
            </div>
            <div className="flex flex-col leading-tight">
              <div className="flex space-x-1">
                <span className={`text-2xl font-extrabold transition-all ${
                  scrolled ? 'text-[#1e40af]' : 'text-white'
                } ${scrolled ? 'group-hover:text-blue-700' : 'group-hover:text-blue-200'}`}>
                  Future
                </span>
                <span className={`text-2xl font-extrabold transition-all ${
                  scrolled ? 'text-[#dd5428]' : 'text-white'
                } ${scrolled ? 'group-hover:text-orange-600' : 'group-hover:text-orange-300'}`}>
                  Sign
                </span>
              </div>
              <span className={`text-[10px] font-semibold tracking-wider uppercase transition-all ${
                scrolled ? 'text-gray-700' : 'text-white/90'
              }`}>
                The Complete Branding Solution
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`relative text-[1rem] font-medium transition-all duration-300 ${
                  isActive(item.path)
                    ? scrolled ? 'text-blue-600' : 'text-white'
                    : scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white/90 hover:text-white'
                }`}
              >
                {item.name}
                {isActive(item.path) && (
                  <motion.span
                    layoutId="underline"
                    className={`absolute left-0 -bottom-1 w-full h-[2px] rounded-full ${
                      scrolled ? 'bg-blue-600' : 'bg-white'
                    }`}
                  />
                )}
              </Link>
            ))}
            <Link
              to="/contact"
              className={`${scrolled ? 'bg-gradient-to-r from-blue-600 to-blue-800' : 'bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-sm border border-white/20'} text-white px-6 py-2 rounded-full font-semibold shadow-md hover:shadow-lg ${scrolled ? 'hover:from-blue-700 hover:to-blue-900' : 'hover:from-white/30 hover:to-white/20'} transform hover:scale-105 transition-all duration-300`}
            >
              Get Quote
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden transition ${
              scrolled ? 'text-gray-700 hover:text-blue-600' : 'text-white hover:text-blue-200'
            }`}
          >
            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
          </button>
        </div>

        {/* Mobile Navigation with Animation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute left-0 w-full bg-white/95 shadow-lg border-t rounded-b-2xl backdrop-blur-lg"
            >
              <div className="px-6 py-6 space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block px-3 py-2 text-lg font-medium rounded-lg transition-all duration-200 ${
                      isActive(item.path)
                        ? 'bg-blue-50 text-blue-700 shadow-sm'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block bg-gradient-to-r from-blue-600 to-blue-800 text-white px-5 py-3 rounded-full font-semibold text-center shadow-md hover:shadow-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
                >
                  Get Quote
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  )
}

export default Navbar