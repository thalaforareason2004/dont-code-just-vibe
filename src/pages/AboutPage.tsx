import React from 'react'
import { motion } from 'framer-motion'
import { 
  Award, 
  Users, 
  Clock, 
  Target,
  Heart,
  Lightbulb,
  Shield,
  TrendingUp
} from 'lucide-react'

const AboutPage = () => {
  const stats = [
    { icon: Users, value: '10,000+', label: 'Happy Customers' },
    { icon: Clock, value: '10+', label: 'Years Experience' },
    { icon: Award, value: '99%', label: 'Success Rate' },
    { icon: TrendingUp, value: '50K+', label: 'Devices Repaired' }
  ]

  const values = [
    {
      icon: Heart,
      title: 'Customer First',
      description: 'We prioritize customer satisfaction above everything else, ensuring every interaction exceeds expectations.'
    },
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'Built on a foundation of trust with transparent pricing, honest communication, and reliable service.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation',
      description: 'Constantly evolving with the latest technology trends and repair techniques to serve you better.'
    },
    {
      icon: Target,
      title: 'Excellence',
      description: 'Committed to delivering exceptional quality in every product and service we provide.'
    }
  ]

  const timeline = [
    {
      year: '2014',
      title: 'Foundation',
      description: 'Started as a small mobile repair shop in Anjugramam with a vision to provide quality service.'
    },
    {
      year: '2017',
      title: 'Expansion',
      description: 'Expanded our services to include premium smartphones and accessories from top brands.'
    },
    {
      year: '2020',
      title: 'Digital Transformation',
      description: 'Launched our online platform and introduced advanced repair technologies.'
    },
    {
      year: '2024',
      title: '3D Experience',
      description: 'Revolutionized shopping experience with immersive 3D visualization and virtual consultations.'
    }
  ]

  return (
    <div className="min-h-screen bg-background pt-20">
      {/* Hero Section */}
      <section className="hero-3d py-20 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-3d">
              About
              <br />
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Mobile Store 3D
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Over a decade of excellence in mobile technology, serving the Anjugramam community 
              with premium products and professional services.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ rotateY: 10, scale: 1.05 }}
                  className="card-3d bg-white p-6 rounded-xl"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4 glow-effect">
                    <stat.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-foreground mb-2">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  What started as a small mobile repair shop in Anjugramam has grown into a premier 
                  destination for mobile technology enthusiasts. For over a decade, we've been 
                  committed to bringing you the latest mobile phones and accessories, offering 
                  exceptional quality at competitive prices.
                </p>
                <p className="text-lg leading-relaxed">
                  Our passion for technology and dedication to customer service has made us the 
                  trusted choice for thousands of customers. We believe in not just selling products, 
                  but building lasting relationships with our community.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, we're proud to introduce cutting-edge 3D visualization technology that 
                  revolutionizes how you experience mobile shopping, making it more immersive 
                  and interactive than ever before.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="card-3d bg-gradient-to-br from-primary to-secondary p-8 rounded-2xl text-white">
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-lg opacity-90 mb-6">
                  To democratize access to cutting-edge mobile technology while providing 
                  exceptional service that exceeds customer expectations at every touchpoint.
                </p>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-lg opacity-90">
                  To be the leading mobile technology destination that seamlessly blends 
                  innovation, quality, and customer-centric service in the digital age.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              The principles that guide everything we do and define who we are as a company
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-3d bg-white p-6 rounded-xl text-center group cursor-pointer"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <value.icon size={32} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Key milestones that shaped our growth and evolution over the years
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary to-secondary rounded-full" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'justify-start' : 'justify-end'
                  }`}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10" />

                  <div className={`w-5/12 ${index % 2 === 0 ? 'text-right pr-8' : 'text-left pl-8'}`}>
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      className="card-3d bg-white p-6 rounded-xl"
                    >
                      <div className="text-2xl font-bold text-primary mb-2">{item.year}</div>
                      <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 hero-3d">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-3d">
              Ready to Experience the Future?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Visit our showroom or browse our online collection to discover the latest in mobile technology
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-3d bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Visit Showroom
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="btn-3d border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-primary transition-all duration-300"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage