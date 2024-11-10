'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Search, ShoppingCart, Menu, X, Star } from 'lucide-react'

import image1 from './assets/img/1.jpeg'
import image2 from './assets/img/2.jpeg'
import image3 from './assets/img/3.jpeg'
import image4 from './assets/img/4.jpeg'
import image5 from './assets/img/5.jpeg'
import image6 from './assets/img/6.jpeg'
import image7 from './assets/img/7.jpeg'
import image8 from './assets/img/9.jpeg'
import image9 from './assets/img/10.jpeg'
import image10 from './assets/img/11.jpg'

export default function Component() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const products = [
    { id: 1, name: 'Accesorios', price: 199.99, rating: 4.5, image: image1 },
    { id: 2, name: 'Accesorios gaming', price: 89.99, rating: 4.2, image: image2 },
    { id: 3, name: 'Audifonos', price: 799.99, rating: 4.8, image: image3 },
    { id: 4, name: 'Audifonos inalámbricos', price: 1299.99, rating: 4.6, image: image4 },
    { id: 5, name: 'Realidad virtual', price: 249.99, rating: 4.7, image: image5 },
    { id: 6, name: 'Smart Watches', price: 699.99, rating: 4.4, image: image6 },
    { id: 7, name: 'Tablets', price: 199.99, rating: 4.5, image: image7 },
    { id: 8, name: 'Gaming Laptop', price: 89.99, rating: 4.2, image: image8 },
    { id: 9, name: 'Teclados', price: 799.99, rating: 4.8, image: image9 },
    { id: 10, name: 'Teclados Gaming', price: 1299.99, rating: 4.6, image: image10 },
  ]

  return (
    <div className="min-h-screen bg-[#0A192F] text-white">
      <header className="bg-[#0A192F]/90 backdrop-blur-md border-b border-[#40E0D0]/20 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-md text-[#40E0D0] hover:bg-[#40E0D0]/10 focus:outline-none"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-[#40E0D0] to-[#98FB98] text-transparent bg-clip-text">
                TechSoS-Market
              </h1>
            </div>

            <nav className={`absolute lg:relative top-full left-0 w-full lg:w-auto bg-[#0A192F] lg:bg-transparent border-b lg:border-0 border-[#40E0D0]/20 ${
              isMenuOpen ? 'block' : 'hidden lg:block'
            }`}>
              <ul className="flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-8 p-4 lg:p-0">
                <li>
                  <a href="#" className="text-[#40E0D0] hover:text-[#98FB98] transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#40E0D0] hover:text-[#98FB98] transition-colors">
                    Categories
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#40E0D0] hover:text-[#98FB98] transition-colors">
                    Deals
                  </a>
                </li>
                <li>
                  <a href="#" className="text-[#40E0D0] hover:text-[#98FB98] transition-colors">
                    About
                  </a>
                </li>
              </ul>
            </nav>

            <div className="flex items-center space-x-4">
              <div className="relative hidden md:block">
                <input
                  type="search"
                  placeholder="Search products..."
                  className="w-full px-4 py-2 rounded-full bg-[#112240] border border-[#40E0D0]/30 focus:border-[#40E0D0] focus:outline-none focus:ring-1 focus:ring-[#40E0D0] placeholder-gray-400"
                />
                <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#40E0D0]" />
              </div>
              <button
                className="p-2 rounded-full text-[#40E0D0] hover:bg-[#40E0D0]/10 focus:outline-none"
                aria-label="View cart"
              >
                <ShoppingCart className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#40E0D0] to-[#98FB98] text-transparent bg-clip-text">
            Nuestro Catálogo
          </h1>
          <p className="text-xl text-gray-400 italic">
            "Tecnología de vanguardia, a un clic de distancia" Automatización
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-[#112240] rounded-xl overflow-hidden border border-[#40E0D0]/20 hover:border-[#40E0D0]/50 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A192F] to-transparent opacity-60" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#40E0D0] mb-2">{product.name}</h3>
                <div className="flex items-center mb-4">
                  <Star className="h-5 w-5 text-yellow-400 fill-current" />
                  <span className="ml-2 text-gray-400">{product.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-white">${product.price}</span>
                  <button className="px-4 py-2 bg-[#40E0D0] text-[#0A192F] rounded-md hover:bg-[#98FB98] transition-colors font-semibold">
                    Add to Cart
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </main>

      <footer className="bg-[#112240] border-t border-[#40E0D0]/20 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <h3 className="text-xl font-semibold text-[#40E0D0] mb-4">Nuestra misión</h3>
              <p className="text-gray-400">
                "Tecnología de vanguardia, a un clic de distancia" Automatización
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#40E0D0] mb-4">Nuestros links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#40E0D0] transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#40E0D0] transition-colors">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#40E0D0] transition-colors">
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-[#40E0D0] mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Manténgase actualizado con nuestras últimas ofertas y productos.
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-grow px-4 py-2 bg-[#0A192F] border border-[#40E0D0]/30 rounded-l-md focus:outline-none focus:ring-1 focus:ring-[#40E0D0] placeholder-gray-400"
                />
                <button className="px-6 py-2 bg-[#40E0D0] text-[#0A192F] rounded-r-md hover:bg-[#98FB98] transition-colors font-semibold">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-[#40E0D0]/20 text-center text-gray-400">
            <p>&copy; 2024 TechSoS-Market. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}