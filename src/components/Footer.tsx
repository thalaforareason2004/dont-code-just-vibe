import React from 'react'
import { motion } from 'framer-motion'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram } from 'lucide-react'

const Footer = () => {
  const footerSections = [
    {
      title: 'Quick Links',
      links: [
        { label: 'Home', href: '/' },
        { label: 'Mobiles', href: '/mobiles' },
        { label: 'Accessories', href: '/accessories' },
        { label: 'Services', href: '/services' },
        { label: 'About Us', href: '/about' },
      ]
    },
    {
      title: 'Services',
      links: [
        { label: 'Screen Repair', href: '/services' },
        { label: 'Battery Replacement', href: '/services' },
        { label: 'Data Recovery', href: '/services' },
        { label: 'Software Troubleshooting', href: '/services' },
        { label: 'Hardware Repair', href: '/services' },
      ]
    },
    {
      title: 'Brands',
      links: [
        { label: 'Apple', href: '/mobiles?brand=apple' },
        { label: 'Samsung', href: '/mobiles?brand=samsung' },
        { label: 'OnePlus', href: '/mobiles?brand=oneplus' },
        { label: 'Xiaomi', href: '/mobiles?brand=xiaomi' },
        { label: 'Oppo', href: '/mobiles?brand=oppo' },
      ]
    }
  ]

  const contactInfo = [
    { icon: Phone, text: '+1 (555) 123-4567', href: 'tel:+15551234567' },
    { icon: Mail, text: 'info@mobilestore3d.com', href: 'mailto:info@mobilestore3d.com' },
    { icon: MapPin, text: '123 Tech Street, Digital City, DC 12345', href: '#' },
  ]

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full blur-xl animate-float" 
             style={{ animationDelay: '0s' }} />
        <div className="absolute top-32 right-20 w-24 h-24 bg-secondary rounded-full blur-xl animate-float" 
             style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-20 left-1/3 w-40 h-40 bg-primary rounded-full blur-xl animate-float" 
             style={{ animationDelay: '4s' }} />
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <div className="flex items-center space-x-2 mb-6">
              <motion.div
                whileHover={{ scale: 1.1, rotateY: 180 }}
                transition={{ duration: 0.3 }}
                className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg card-3d"
              >
                M
              </motion.div>
              <span className="text-2xl font-bold">Mobile Store 3D</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Your premium destination for the latest smartphones, accessories, and professional repair services. 
              Experience technology in stunning 3D.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ x: 5 }}
                  className="flex items-center space-x-3 text-gray-300 hover:text-primary transition-colors"
                >
                  <div className="p-2 bg-primary/10 rounded-lg card-3d">
                    <item.icon size={16} />
                  </div>
                  <span className="text-sm">{item.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, index) => (
            <motion.div
              key={section.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-white mb-4 relative">
                {section.title}
                <div className="absolute bottom-0 left-0 w-12 h-0.5 bg-gradient-to-r from-primary to-secondary" />
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.a
                      href={link.href}
                      whileHover={{ x: 5, color: 'hsl(var(--primary))' }}
                      className="text-gray-300 hover:text-primary transition-all duration-300 text-sm block py-1"
                    >
                      {link.label}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Social Links & Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="border-t border-gray-800 pt-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Social Links */}
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Follow us:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.2, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-3 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors card-3d group"
                  aria-label={social.label}
                >
                  <social.icon size={18} className="text-gray-300 group-hover:text-primary transition-colors" />
                </motion.a>
              ))}
            </div>

            {/* Copyright */}
            <div className="text-center md:text-right">
              <p className="text-gray-400 text-sm">
                © 2024 Mobile Store 3D. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Designed with ❤️ and cutting-edge 3D technology
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Animated gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
    </footer>
  )
}

export default Footer