import React from 'react'
import { Routes, Route } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import MobilesPage from './pages/MobilesPage'
import AccessoriesPage from './pages/AccessoriesPage'
import ServicesPage from './pages/ServicesPage'
import AboutPage from './pages/AboutPage'

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="perspective-container"
      >
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/mobiles" element={<MobilesPage />} />
          <Route path="/accessories" element={<AccessoriesPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </motion.main>
      <Footer />
    </div>
  )
}

export default App