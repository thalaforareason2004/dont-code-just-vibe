import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Filter, Grid, List, Star, ShoppingCart } from 'lucide-react'

const MobilesPage = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid')
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 2000])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])

  const mobiles = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      brand: 'Apple',
      price: 999,
      originalPrice: 1199,
      image: '/logos/apple.jpg',
      rating: 4.8,
      reviews: 245,
      specs: ['6.1" Display', '128GB Storage', 'A17 Pro Chip', '48MP Camera'],
      colors: ['Natural Titanium', 'Blue Titanium', 'White Titanium', 'Black Titanium']
    },
    {
      id: 2,
      name: 'Galaxy S24 Ultra',
      brand: 'Samsung',
      price: 1199,
      originalPrice: 1299,
      image: '/logos/samsung_logo.jpg',
      rating: 4.7,
      reviews: 189,
      specs: ['6.8" Display', '256GB Storage', 'Snapdragon 8 Gen 3', '200MP Camera'],
      colors: ['Titanium Black', 'Titanium Gray', 'Titanium Violet', 'Titanium Yellow']
    },
    {
      id: 3,
      name: 'OnePlus 12',
      brand: 'OnePlus',
      price: 799,
      originalPrice: 899,
      image: '/logos/oneplus.jpg',
      rating: 4.6,
      reviews: 156,
      specs: ['6.82" Display', '256GB Storage', 'Snapdragon 8 Gen 3', '50MP Camera'],
      colors: ['Silky Black', 'Flowy Emerald', 'Sunset Dune']
    },
    {
      id: 4,
      name: 'Xiaomi 14 Ultra',
      brand: 'Xiaomi',
      price: 1299,
      originalPrice: 1399,
      image: '/logos/xiaomi.jpg',
      rating: 4.5,
      reviews: 203,
      specs: ['6.73" Display', '512GB Storage', 'Snapdragon 8 Gen 3', '50MP Camera'],
      colors: ['Black', 'White']
    },
    {
      id: 5,
      name: 'Oppo Find X7 Pro',
      brand: 'Oppo',
      price: 1099,
      originalPrice: 1199,
      image: '/logos/oppo_logo.jpg',
      rating: 4.4,
      reviews: 134,
      specs: ['6.82" Display', '256GB Storage', 'Snapdragon 8 Gen 3', '50MP Camera'],
      colors: ['Desert Silver', 'Sepia Brown', 'Ocean Blue']
    },
    {
      id: 6,
      name: 'Vivo X100 Pro',
      brand: 'Vivo',
      price: 899,
      originalPrice: 999,
      image: '/logos/vivo.jpg',
      rating: 4.3,
      reviews: 98,
      specs: ['6.78" Display', '256GB Storage', 'Dimensity 9300', '50MP Camera'],
      colors: ['Asteroid Black', 'Sunset Orange']
    }
  ]

  const brands = ['Apple', 'Samsung', 'OnePlus', 'Xiaomi', 'Oppo', 'Vivo']

  const filteredMobiles = mobiles.filter(mobile => {
    const brandMatch = selectedBrands.length === 0 || selectedBrands.includes(mobile.brand)
    const priceMatch = mobile.price >= priceRange[0] && mobile.price <= priceRange[1]
    return brandMatch && priceMatch
  })

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    )
  }

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
            Premium Smartphones
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the latest flagship devices with cutting-edge technology and stunning design
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

              {/* Price Range */}
              <div className="mb-6">
                <h4 className="font-medium mb-3">Price Range</h4>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>${priceRange[0]}</span>
                    <span>${priceRange[1]}</span>
                  </div>
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    step="50"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>

              {/* Brands */}
              <div>
                <h4 className="font-medium mb-3">Brands</h4>
                <div className="space-y-2">
                  {brands.map(brand => (
                    <label key={brand} className="flex items-center space-x-2 cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="rounded border-gray-300 text-primary focus:ring-primary"
                      />
                      <span className="text-sm">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Products Grid */}
          <div className="lg:col-span-3">
            {/* View Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex items-center justify-between mb-6"
            >
              <p className="text-muted-foreground">
                Showing {filteredMobiles.length} products
              </p>
              <div className="flex items-center space-x-2">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'grid' 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <Grid size={18} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded-lg transition-colors ${
                    viewMode === 'list' 
                      ? 'bg-primary text-white' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  <List size={18} />
                </button>
              </div>
            </motion.div>

            {/* Products */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 md:grid-cols-2 xl:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {filteredMobiles.map((mobile, index) => (
                <motion.div
                  key={mobile.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`product-card bg-white rounded-xl overflow-hidden group cursor-pointer ${
                    viewMode === 'list' ? 'flex' : ''
                  }`}
                >
                  <div className={`relative ${viewMode === 'list' ? 'w-64 h-48' : 'h-64'}`}>
                    <img
                      src={mobile.image}
                      alt={mobile.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        e.currentTarget.src = `https://via.placeholder.com/300x200/10e2bd/ffffff?text=${mobile.name}`
                      }}
                    />
                    {mobile.originalPrice > mobile.price && (
                      <div className="absolute top-4 left-4 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                        ${mobile.originalPrice - mobile.price} OFF
                      </div>
                    )}
                  </div>

                  <div className={`p-6 ${viewMode === 'list' ? 'flex-1' : ''}`}>
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {mobile.name}
                      </h3>
                      <div className="flex items-center space-x-1 text-sm">
                        <Star size={14} className="text-yellow-400 fill-current" />
                        <span className="font-medium">{mobile.rating}</span>
                        <span className="text-muted-foreground">({mobile.reviews})</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-3">{mobile.brand}</p>

                    <div className="mb-4">
                      <div className="flex items-center space-x-2 mb-2">
                        <span className="text-2xl font-bold text-primary">${mobile.price}</span>
                        {mobile.originalPrice > mobile.price && (
                          <span className="text-lg text-muted-foreground line-through">
                            ${mobile.originalPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Specs */}
                    <div className="mb-4">
                      <div className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                        {mobile.specs.map((spec, idx) => (
                          <div key={idx} className="flex items-center">
                            <span className="w-1 h-1 bg-primary rounded-full mr-2" />
                            {spec}
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Colors */}
                    <div className="mb-4">
                      <p className="text-xs text-muted-foreground mb-2">Available Colors:</p>
                      <div className="flex space-x-1">
                        {mobile.colors.slice(0, 3).map((color, idx) => (
                          <div 
                            key={idx} 
                            className="w-6 h-6 rounded-full border-2 border-gray-200 bg-gradient-to-br from-gray-300 to-gray-500"
                            title={color}
                          />
                        ))}
                        {mobile.colors.length > 3 && (
                          <div className="w-6 h-6 rounded-full border-2 border-gray-200 bg-gray-100 flex items-center justify-center">
                            <span className="text-xs text-gray-600">+{mobile.colors.length - 3}</span>
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
                        View Details
                      </motion.button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {filteredMobiles.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <p className="text-muted-foreground text-lg">No products found matching your criteria.</p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default MobilesPage