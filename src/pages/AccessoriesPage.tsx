import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter, ShoppingCart, Star } from 'lucide-react'

const AccessoriesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 200])

  const accessories = [
    {
      id: 1,
      name: 'Wireless Earbuds Pro',
      category: 'Audio',
      price: 129,
      originalPrice: 159,
      image: 'https://via.placeholder.com/300x200/10e2bd/ffffff?text=Earbuds',
      rating: 4.7,
      reviews: 156,
      features: ['Active Noise Cancellation', 'Wireless Charging', '30h Battery', 'IPX4 Water Resistant']
    },
    {
      id: 2,
      name: 'Fast Wireless Charger',
      category: 'Charging',
      price: 39,
      originalPrice: 49,
      image: 'https://via.placeholder.com/300x200/f76d37/ffffff?text=Charger',
      rating: 4.5,
      reviews: 234,
      features: ['15W Fast Charging', 'LED Indicator', 'Universal Compatibility', 'Non-slip Base']
    },
    {
      id: 3,
      name: 'Premium Phone Case',
      category: 'Protection',
      price: 25,
      originalPrice: 35,
      image: 'https://via.placeholder.com/300x200/252525/ffffff?text=Case',
      rating: 4.6,
      reviews: 89,
      features: ['Drop Protection', 'Raised Edges', 'Precise Cutouts', 'Easy Installation']
    },
    {
      id: 4,
      name: 'Screen Protector Kit',
      category: 'Protection',
      price: 15,
      originalPrice: 20,
      image: 'https://via.placeholder.com/300x200/10e2bd/ffffff?text=Screen',
      rating: 4.4,
      reviews: 167,
      features: ['Tempered Glass', 'Bubble-free Install', '99% Transparency', 'Touch Sensitive']
    },
    {
      id: 5,
      name: 'Car Mount Holder',
      category: 'Mounts',
      price: 22,
      originalPrice: 30,
      image: 'https://via.placeholder.com/300x200/f76d37/ffffff?text=Mount',
      rating: 4.3,
      reviews: 98,
      features: ['360° Rotation', 'One-hand Operation', 'Strong Grip', 'Universal Fit']
    },
    {
      id: 6,
      name: 'Power Bank 20000mAh',
      category: 'Charging',
      price: 45,
      originalPrice: 60,
      image: 'https://via.placeholder.com/300x200/252525/ffffff?text=PowerBank',
      rating: 4.8,
      reviews: 278,
      features: ['20000mAh Capacity', 'Fast Charging', 'Digital Display', 'Multiple Ports']
    },
    {
      id: 7,
      name: 'Bluetooth Speaker',
      category: 'Audio',
      price: 79,
      originalPrice: 99,
      image: 'https://via.placeholder.com/300x200/10e2bd/ffffff?text=Speaker',
      rating: 4.6,
      reviews: 145,
      features: ['360° Sound', 'Waterproof', '12h Playtime', 'Voice Assistant']
    },
    {
      id: 8,
      name: 'Phone Stand Adjustable',
      category: 'Mounts',
      price: 18,
      originalPrice: 25,
      image: 'https://via.placeholder.com/300x200/f76d37/ffffff?text=Stand',
      rating: 4.2,
      reviews: 67,
      features: ['Adjustable Angle', 'Foldable Design', 'Non-slip Base', 'Portable']
    }
  ]

  const categories = [
    { id: 'all', name: 'All Categories' },
    { id: 'Audio', name: 'Audio' },
    { id: 'Charging', name: 'Charging' },
    { id: 'Protection', name: 'Protection' },
    { id: 'Mounts', name: 'Mounts' }
  ]

  const filteredAccessories = accessories.filter(accessory => {
    const categoryMatch = selectedCategory === 'all' || accessory.category === selectedCategory
    const priceMatch = accessory.price >= priceRange[0] && accessory.price <= priceRange[1]
    return categoryMatch && priceMatch
  })

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Mobile Accessories
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Enhance your mobile experience with our premium collection of accessories
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Filters Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="card-3d bg-white p-6 rounded-xl mb-6">
              <div className="flex items-center space-x-2 mb-4">
                <Filter size={20} className="text-primary" />
                <h3 className="text-lg font-semibold">Filters</h3>
              </div>

              {/* Categories */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Categories</h4>
                <div className="space-y-2">
                  {categories.map(category => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-left p-2 rounded-lg transition-colors ${
                        selectedCategory === category.id
                          ? 'bg-primary text-white'
                          : 'text-muted-foreground hover:bg-gray-100'
                      }`}
                    >
                      {category.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range */}
              <div>
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="200"
                    step="5"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mb-6"
            >
              <p className="text-muted-foreground">
                Showing {filteredAccessories.length} accessories
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredAccessories.map((accessory, index) => (
                <motion.div
                  key={accessory.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="product-card bg-white rounded-xl overflow-hidden group cursor-pointer"
                >
                  <div className="relative h-48">
                    <img
                      src={accessory.image}
                      alt={accessory.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {accessory.originalPrice > accessory.price && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        ${accessory.originalPrice - accessory.price} OFF
                      </div>
                    )}
                    <div className="absolute top-4 right-4 bg-primary text-white px-2 py-1 rounded-full text-xs font-semibold">
                      {accessory.category}
                    </div>
                  </div>

                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors">
                        {accessory.name}
                      </h3>
                      <div className="flex items-center space-x-1 text-sm">
                        <Star size={14} className="text-yellow-400 fill-current" />
                        <span className="font-medium">{accessory.rating}</span>
                        <span className="text-muted-foreground">({accessory.reviews})</span>
                      </div>
                    </div>

                    <div className="mb-4">
                      <div className="flex items-center space-x-2">
                        <span className="text-xl font-bold text-primary">${accessory.price}</span>
                        {accessory.originalPrice > accessory.price && (
                          <span className="text-sm text-muted-foreground line-through">
                            ${accessory.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-4">
                      <div className="space-y-1">
                        {accessory.features.slice(0, 3).map((feature, idx) => (
                          <div key={idx} className="flex items-center text-xs text-muted-foreground">
                            <span className="w-1 h-1 bg-primary rounded-full mr-2" />
                            {feature}
                          </div>
                        ))}
                        {accessory.features.length > 3 && (
                          <div className="text-xs text-primary">
                            +{accessory.features.length - 3} more features
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-2">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="flex-1 btn-3d bg-primary text-white py-2 px-4 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
                      >
                        <ShoppingCart size={16} />
                        <span>Add to Cart</span>
                      </motion.button>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="btn-3d border border-primary text-primary py-2 px-4 rounded-lg font-medium hover:bg-primary hover:text-white transition-colors"
                      >
                        Details
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredAccessories.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-muted-foreground text-lg">No accessories found matching your criteria.</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccessoriesPage