// import React from 'react'
// import { Link } from 'react-router-dom'
// import { Printer, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

// const Footer = () => {
//   const currentYear = new Date().getFullYear()

//   const quickLinks = [
//     { name: 'Home', path: '/' },
//     { name: 'About', path: '/about' },
//     { name: 'Services', path: '/services' },
//     { name: 'Gallery', path: '/gallery' },
//     { name: 'Contact', path: '/contact' },
//   ]

//   const services = [
//     'Backlit Flex',
//     'Non-Lit Flex',
//     'Standees',
//     'Vinyl Flex',
//     'Custom Printing',
//   ]

//   const socialLinks = [
//     { icon: <Facebook className="h-5 w-5" />, url: '#' },
//     { icon: <Twitter className="h-5 w-5" />, url: '#' },
//     { icon: <Instagram className="h-5 w-5" />, url: '#' },
//     { icon: <Linkedin className="h-5 w-5" />, url: '#' },
//   ]

//   return (
//     <footer className="bg-gray-900 text-white">
//       {/* Main Footer */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//           {/* Company Info */}
//           <div className="lg:col-span-1">
//             <Link to="/" className="flex items-center space-x-3 mb-6">
//               <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-2 rounded-lg">
//                 <Printer className="h-6 w-6 text-white" />
//               </div>
//               <div>
//                 <span className="text-xl font-bold">FlexPrint</span>
//                 <span className="text-xl font-bold text-blue-400">Pro</span>
//               </div>
//             </Link>
//             <p className="text-gray-400 mb-6 leading-relaxed">
//               Premium flex printing solutions with cutting-edge technology and 
//               exceptional quality. Transforming brands through innovative printing.
//             </p>
//             <div className="flex space-x-4">
//               {socialLinks.map((social, index) => (
//                 <a
//                   key={index}
//                   href={social.url}
//                   className="bg-gray-800 p-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
//                 >
//                   {social.icon}
//                 </a>
//               ))}
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
//             <ul className="space-y-3">
//               {quickLinks.map((link) => (
//                 <li key={link.name}>
//                   <Link
//                     to={link.path}
//                     className="text-gray-400 hover:text-white transition-colors duration-300"
//                   >
//                     {link.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Services */}
//           <div>
//             <h3 className="text-lg font-semibold mb-6">Our Services</h3>
//             <ul className="space-y-3">
//               {services.map((service) => (
//                 <li key={service}>
//                   <span className="text-gray-400 hover:text-white transition-colors duration-300 cursor-pointer">
//                     {service}
//                   </span>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h3 className="text-lg font-semibold mb-6">Contact Info</h3>
//             <div className="space-y-4 text-gray-400">
//               <div>
//                 <p className="font-medium text-white">Address</p>
//                 <p>123 Print Street</p>
//                 <p>New York, NY 10001</p>
//               </div>
//               <div>
//                 <p className="font-medium text-white">Phone</p>
//                 <p>+1 (555) 123-4567</p>
//               </div>
//               <div>
//                 <p className="font-medium text-white">Email</p>
//                 <p>info@flexprintpro.com</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Footer */}
//       <div className="border-t border-gray-800">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
//             <p className="text-gray-400 text-sm">
//               © {currentYear} FlexPrint Pro. All rights reserved.
//             </p>
//             <div className="flex space-x-6 text-sm text-gray-400">
//               <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
//               <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
//               <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }

// export default Footer

import React from 'react'
import { Link } from 'react-router-dom'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'
import { motion } from 'framer-motion'
import logo from '../../../public/images/logo.png'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ]

  const services = [
    'Backlit Flex',
    'Non-Lit Flex',
    'Standees',
    'Vinyl Flex',
    'Custom Printing',
  ]

  const socialLinks = [
    { icon: <Facebook className="h-5 w-5" />, url: '#' },
    { icon: <Twitter className="h-5 w-5" />, url: '#' },
    { icon: <Instagram className="h-5 w-5" />, url: '#' },
    { icon: <Linkedin className="h-5 w-5" />, url: '#' },
  ]

  return (
    <footer className="relative bg-gradient-to-br from-blue-700 via-blue-700 to-blue-800 text-white overflow-hidden">
      {/* Background Overlay with Subtle Pattern */}
      <div className="absolute inset-0 bg-[url('/images/footer-pattern.svg')] bg-cover opacity-10"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 z-10"
      >
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className='mx-auto'>
            <Link to="/" className="flex items-center space-x-3 mb-6 group">
              <div className="h-10 w-10 transition-transform duration-500 group-hover:rotate-12">
                <img src={logo} alt="FutureSign Logo" />
              </div>
              <div className="flex flex-col leading-tight">
                <div className="flex space-x-1">
                  <span className="text-xl font-extrabold text-[#1e40af] transition-all">
                    Future
                  </span>
                  <span className="text-xl font-extrabold text-[#f97316] transition-all">
                    Sign
                  </span>
                </div>
                <span className="text-xs font-semibold text-gray-300 tracking-wide uppercase text-nowrap">
                  The Complete Branding Solution
                </span>
              </div>
            </Link>

            <p className="text-gray-300 mb-6 leading-relaxed text-sm">
              Transform your brand’s visibility with high-quality printing and innovative
              signage. We bring your ideas to life with precision and creativity.
            </p>

            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="bg-blue-800/40 p-2 rounded-lg hover:bg-blue-600/80 transition-colors duration-300"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <motion.li
                  key={link.name}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Our Services</h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <motion.li
                  key={service}
                  whileHover={{ x: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="text-gray-300 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  {service}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-white">Contact Info</h3>
            <div className="space-y-4 text-gray-300 text-sm">
              <div>
                <p className="font-medium text-white">Address</p>
                <p>Plot no 26, Mallikarjun nagar, Parvatapur</p>
                <p>Peerzadiguda, Hyerabad, TG 500098</p>
              </div>
              <div>
                <p className="font-medium text-white">Phone</p>
                <p>+91 92814-09991</p>
              </div>
              <div>
                <p className="font-medium text-white">Email</p>
                <p>info@futuresign.com</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Bottom Footer */}
      <div className="relative border-t border-blue-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-gray-400 text-sm z-10">
          <p>© {currentYear} FutureSign. All rights reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-white transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
