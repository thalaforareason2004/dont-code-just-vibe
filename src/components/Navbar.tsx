import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Search, Menu, X, Smartphone, Headphones, Wrench } from 'lucide-react'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')
  const location = useLocation()

  const navItems = [
    { path: '/', label: 'Home', icon: null },
    { path: '/mobiles', label: 'Mobiles', icon: Smartphone },
    { path: '/accessories', label: 'Accessories', icon: Headphones },
    { path: '/services', label: 'Services', icon: Wrench },
    { path: '/about', label: 'About', icon: null },
  ]

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 nav-3d"
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <motion.div
              whileHover={{ scale: 1.1, rotateY: 180 }}
              transition={{ duration: 0.3 }}
              className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center text-white font-bold text-xl shadow-lg"
            >
              M
            </motion.div>
            <span className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
              Mobile Store 3D
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path
              const Icon = item.icon
              
              return (
                <Link key={item.path} to={item.path} className="relative group">
                  <motion.div
                    whileHover={{ y: -2 }}
                    className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'text-primary bg-primary/10' 
                        : 'text-foreground hover:text-primary hover:bg-primary/5'
                    }`}
                  >
                    {Icon && <Icon size={18} />}
                    <span className="font-medium">{item.label}</span>
                  </motion.div>
                  
                  {/* 3D underline effect */}
                  <motion.div
                    className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-primary to-secondary transform-gpu ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                    style={{ 
                      transformStyle: 'preserve-3d',
                      boxShadow: '0 2px 4px rgba(16, 226, 189, 0.3)'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                </Link>
              )
            })}
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center relative">
            <motion.div
              whileFocus={{ scale: 1.02 }}
              className="relative card-3d bg-background/50 rounded-lg"
            >
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 pr-4 py-2 w-64 bg-transparent border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
              />
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-primary/10 transition-colors"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden border-t border-border mt-4 pt-4 space-y-2"
          >
            {navItems.map((item) => {
              const Icon = item.icon
              const isActive = location.pathname === item.path
              
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center space-x-2 px-4 py-3 rounded-lg transition-all ${
                    isActive 
                      ? 'text-primary bg-primary/10' 
                      : 'text-foreground hover:text-primary hover:bg-primary/5'
                  }`}
                >
                  {Icon && <Icon size={18} />}
                  <span className="font-medium">{item.label}</span>
                </Link>
              )
            })}
            
            {/* Mobile Search */}
            <div className="px-4 py-2">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 pr-4 py-2 w-full bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                />
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  )
}

export default Navbar