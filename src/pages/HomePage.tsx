import React from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Star, Shield, Truck, Smartphone, Headphones, Wrench } from 'lucide-react'
import { Link } from 'react-router-dom'

const HomePage = () => {
  const features = [
    {
      icon: Smartphone,
      title: 'Latest Smartphones',
      description: 'Discover cutting-edge mobile technology from top brands',
      link: '/mobiles'
    },
    {
      icon: Headphones,
      title: 'Premium Accessories',
      description: 'Enhance your device with high-quality accessories',
      link: '/accessories'
    },
    {
      icon: Wrench,
      title: 'Expert Repairs',
      description: 'Professional repair services by certified technicians',
      link: '/services'
    }
  ]

  const benefits = [
    { icon: Shield, title: 'Warranty Protection', description: 'Comprehensive warranty on all products' },
    { icon: Truck, title: 'Free Delivery', description: 'Fast and free shipping on orders over $50' },
    { icon: Star, title: 'Expert Support', description: '24/7 customer support from tech experts' }
  ]

  const brands = [
    { name: 'Apple', logo: '/logos/apple.jpg' },
    { name: 'Samsung', logo: '/logos/samsung_logo.jpg' },
    { name: 'OnePlus', logo: '/logos/oneplus.jpg' },
    { name: 'Xiaomi', logo: '/logos/xiaomi.jpg' },
    { name: 'Oppo', logo: '/logos/oppo_logo.jpg' },
    { name: 'Vivo', logo: '/logos/vivo.jpg' }
  ]

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-3d min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-float" 
               style={{ animationDelay: '0s' }} />
          <div className="absolute top-40 right-20 w-24 h-24 bg-white/10 rounded-full blur-xl animate-float" 
               style={{ animationDelay: '2s' }} />
          <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-white/10 rounded-full blur-xl animate-float" 
               style={{ animationDelay: '4s' }} />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-7xl font-bold mb-6 text-3d"
            >
              Welcome to the
              <br />
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Future of Mobile
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90"
            >
              Experience cutting-edge smartphone technology with stunning 3D visuals, 
              premium accessories, and expert repair services.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/mobiles">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-3d bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2"
                >
                  <span>Shop Now</span>
                  <ArrowRight size={20} />
                </motion.button>
              </Link>

              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-3d border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300"
                >
                  Our Services
                </motion.button>
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1 h-3 bg-white rounded-full mt-2"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background relative">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Explore Our Collections
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Discover premium products and services designed to enhance your mobile experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -5 }}
                className="card-3d bg-white p-8 rounded-2xl group cursor-pointer"
              >
                <Link to={feature.link} className="block">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <feature.icon size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">{feature.title}</h3>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                  
                  <div className="flex items-center text-primary font-semibold group-hover:text-secondary transition-colors">
                    <span>Learn More</span>
                    <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5 relative overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Us?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the best mobile shopping and service experience
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center perspective-container"
              >
                <motion.div
                  whileHover={{ rotateY: 10, scale: 1.05 }}
                  className="card-3d bg-white p-6 rounded-xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 glow-effect">
                    <benefit.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Top Brands
            </h2>
            <p className="text-xl text-muted-foreground">
              We partner with leading technology brands worldwide
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {brands.map((brand, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                className="card-3d bg-white p-6 rounded-xl flex items-center justify-center group cursor-pointer"
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="h-12 w-auto object-contain filter grayscale group-hover:grayscale-0 transition-all duration-300"
                  onError={(e) => {
                    e.currentTarget.src = `https://via.placeholder.com/100x50/10e2bd/ffffff?text=${brand.name}`
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage