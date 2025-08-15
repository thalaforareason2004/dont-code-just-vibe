import React from 'react'
import { motion } from 'framer-motion'
import { 
  Smartphone, 
  Battery, 
  Camera, 
  Wifi, 
  Volume2, 
  Monitor, 
  HardDrive, 
  Zap,
  CheckCircle,
  Clock,
  Shield,
  Star
} from 'lucide-react'

const ServicesPage = () => {
  const services = [
    {
      icon: Monitor,
      title: 'Screen Repair',
      description: 'Professional screen replacement for all smartphone models',
      price: 'From $49',
      duration: '30-60 min',
      warranty: '6 months',
      features: ['Original quality parts', 'Same-day service', 'Precision installation', 'Quality guarantee']
    },
    {
      icon: Battery,
      title: 'Battery Replacement',
      description: 'Restore your phone\'s battery life with genuine parts',
      price: 'From $39',
      duration: '20-30 min',
      warranty: '12 months',
      features: ['Genuine batteries', 'Fast service', 'Performance testing', 'Extended warranty']
    },
    {
      icon: Camera,
      title: 'Camera Repair',
      description: 'Fix camera issues and restore photo quality',
      price: 'From $59',
      duration: '45-90 min',
      warranty: '6 months',
      features: ['Camera calibration', 'Lens replacement', 'Software optimization', 'Quality testing']
    },
    {
      icon: Zap,
      title: 'Charging Port Repair',
      description: 'Resolve charging issues and port problems',
      price: 'From $29',
      duration: '30-45 min',
      warranty: '6 months',
      features: ['Port cleaning', 'Component replacement', 'Connection testing', 'Water damage check']
    },
    {
      icon: Volume2,
      title: 'Speaker & Audio Repair',
      description: 'Fix sound issues and restore audio quality',
      price: 'From $35',
      duration: '30-60 min',
      warranty: '6 months',
      features: ['Speaker replacement', 'Audio testing', 'Water damage repair', 'Sound optimization']
    },
    {
      icon: HardDrive,
      title: 'Data Recovery',
      description: 'Recover lost data from damaged devices',
      price: 'From $79',
      duration: '2-24 hours',
      warranty: 'N/A',
      features: ['Photo recovery', 'Contact restoration', 'App data backup', 'Secure process']
    },
    {
      icon: Wifi,
      title: 'Software Troubleshooting',
      description: 'Resolve software issues and optimize performance',
      price: 'From $25',
      duration: '30-90 min',
      warranty: '3 months',
      features: ['Virus removal', 'OS updates', 'App optimization', 'Performance tuning']
    },
    {
      icon: Smartphone,
      title: 'Water Damage Repair',
      description: 'Professional water damage assessment and repair',
      price: 'From $89',
      duration: '2-48 hours',
      warranty: '3 months',
      features: ['Damage assessment', 'Component cleaning', 'Part replacement', 'Testing & validation']
    }
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      rating: 5,
      comment: 'Amazing service! My iPhone screen was replaced in just 30 minutes and looks brand new.',
      service: 'Screen Repair'
    },
    {
      name: 'Mike Chen',
      rating: 5,
      comment: 'Professional and quick battery replacement. My phone lasts all day now!',
      service: 'Battery Replacement'
    },
    {
      name: 'Emma Davis',
      rating: 5,
      comment: 'They recovered all my photos from my water-damaged phone. Truly experts!',
      service: 'Data Recovery'
    }
  ]

  const whyChooseUs = [
    {
      icon: Shield,
      title: 'Certified Technicians',
      description: 'Our team consists of certified mobile repair specialists with years of experience'
    },
    {
      icon: CheckCircle,
      title: 'Quality Guarantee',
      description: 'We use only genuine parts and provide warranty on all our repair services'
    },
    {
      icon: Clock,
      title: 'Fast Turnaround',
      description: 'Most repairs completed the same day with our efficient service process'
    },
    {
      icon: Star,
      title: 'Customer Satisfaction',
      description: '98% customer satisfaction rate with thousands of successful repairs'
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
              Expert Mobile
              <br />
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                Repair Services
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Professional repairs with genuine parts, quick turnaround, and comprehensive warranties
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="btn-3d bg-white text-primary px-8 py-4 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Book a Repair
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Our Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Comprehensive repair solutions for all your mobile device needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="card-3d bg-white p-6 rounded-xl group cursor-pointer"
              >
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <service.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                  <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Price:</span>
                    <span className="font-semibold text-primary">{service.price}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Duration:</span>
                    <span className="font-medium">{service.duration}</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-muted-foreground">Warranty:</span>
                    <span className="font-medium">{service.warranty}</span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="text-sm font-semibold mb-2">Features:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <CheckCircle size={12} className="text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full btn-3d bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors"
                >
                  Book Now
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-secondary/5">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing the highest quality repair services with professional expertise
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUs.map((item, index) => (
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
                    <item.icon size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real experiences from satisfied customers
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="card-3d bg-white p-6 rounded-xl"
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} size={16} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">"{testimonial.comment}"</p>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-primary">{testimonial.service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default ServicesPage