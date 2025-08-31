'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

export default function OurServices() {
  const services = [
    {
      number: '01',
      title: 'Residential Interior Design',
      description:
        'Transforming homes with innovative spatial solutions and personalized aesthetics. Our residential design approach focuses on creating spaces that reflect your personality while maximizing functionality and comfort. We work closely with homeowners to understand their lifestyle needs and translate them into beautiful, livable spaces.',
      features: [
        'Custom space planning and layout optimization',
        'Personalized color schemes and material selection',
        'Furniture selection and custom millwork design',
        'Lighting design and fixture specification',
      ],
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
      category: 'Residential',
    },
    {
      number: '02',
      title: 'Outdoor & Landscape Design',
      description:
        'Creating harmonious outdoor environments that extend your living space seamlessly into nature. Our landscape designs integrate architectural elements with natural beauty to create outdoor sanctuaries that complement your interior spaces.',
      features: [
        'Garden design and plant selection',
        'Outdoor living space planning',
        'Hardscape design and installation',
        'Irrigation and lighting systems',
      ],
      image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?w=800&q=80',
      category: 'Landscape',
    },
    {
      number: '03',
      title: 'Interior Design Consultation',
      description:
        'Professional guidance on concepts, color schemes and material selection to help you make informed design decisions. Our consultation services provide expert advice tailored to your project scope and budget.',
      features: [
        'Design concept development',
        'Color palette and material guidance',
        'Space planning recommendations',
        'Budget and timeline planning',
      ],
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80',
      category: 'Consultation',
    },
    {
      number: '04',
      title: 'Commercial Interior Design',
      description:
        'Crafting functional and inspiring commercial spaces for business success. We understand that commercial spaces need to balance aesthetics with productivity, creating environments that enhance both employee satisfaction and customer experience.',
      features: [
        'Office space planning and design',
        'Retail and hospitality interiors',
        'Brand integration and identity',
        'Ergonomic and productivity optimization',
      ],
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
      category: 'Commercial',
    },
    {
      number: '05',
      title: 'Renovation and Remodeling',
      description:
        'Revitalizing existing spaces with contemporary design solutions while preserving the character and integrity of your property. Our renovation expertise transforms outdated spaces into modern, functional environments.',
      features: [
        'Structural assessment and planning',
        'Historic preservation considerations',
        'Modern system integration',
        'Phased construction management',
      ],
      image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?w=800&q=80',
      category: 'Renovation',
    },
    {
      number: '06',
      title: 'Interior 2D/3D Layouts',
      description:
        'Detailed visualizations bringing your design concepts to life through cutting-edge technology. Our visualization services help you see and understand your space before construction begins, ensuring perfect results.',
      features: [
        '3D modeling and rendering',
        'Virtual reality walkthroughs',
        'Technical drawings and specifications',
        'Material and finish visualization',
      ],
      image: 'https://images.unsplash.com/photo-1545558014-8692077e9b5c?w=800&q=80',
      category: 'Visualization',
    },
  ]

  const [selectedService, setSelectedService] = useState(0)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  }

  const slideInVariants = {
    hidden: {
      opacity: 0,
      x: -60,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  }

  const imageVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 40,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 15,
        duration: 1,
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-8, 8, -8],
      rotate: [0, 3, 0],
      transition: {
        duration: 5,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    },
  }

  const orbitVariants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: 'linear',
      },
    },
  }

  const serviceContentVariants = {
    hidden: {
      opacity: 0,
      x: -30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 15,
        duration: 0.6,
      },
    },
  }

  const serviceNavVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const serviceButtonVariants = {
    hidden: {
      opacity: 0,
      x: 30,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 120,
        damping: 15,
        duration: 0.5,
      },
    },
  }

  return (
    <section className="relative bg-white py-10 md:py-20 px-4 md:px-12 overflow-hidden">
      {/* Enhanced floating geometric elements - responsive positioning */}
      <motion.div
        className="absolute top-8 right-4 sm:top-12 sm:right-8 lg:top-16 lg:right-12"
        variants={orbitVariants}
        animate="animate"
      >
        <div className="relative w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36">
          <div className="absolute inset-0 border border-amber-400/15 rounded-full backdrop-blur-sm" />
          <div className="absolute inset-2 border border-amber-400/8 rounded-full" />
          <div className="absolute inset-4 border border-amber-400/5 rounded-full" />
          <motion.div
            className="absolute top-1/2 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400/40 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.8, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>
      </motion.div>

      <motion.div
        className="absolute bottom-16 left-4 sm:bottom-20 sm:left-8 lg:bottom-24 lg:left-12 w-12 h-12 sm:w-16 sm:h-16 lg:w-20 lg:h-20 bg-gradient-to-br from-amber-400/8 to-amber-400/3 rotate-45 rounded-xl border border-amber-400/15 backdrop-blur-sm"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '1.5s' }}
      />

      {/* Responsive accent lines */}
      <motion.div
        className="absolute top-1/4 right-2 sm:right-4 w-0.5 h-24 sm:h-32 lg:h-48 bg-gradient-to-b from-amber-400/30 via-amber-400/15 to-transparent rounded-full"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />

      <motion.div
        className="absolute bottom-1/3 left-2 sm:left-4 lg:left-8 w-px h-16 sm:h-24 lg:h-32 bg-gradient-to-t from-amber-400/25 to-transparent"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1.2, delay: 1.2 }}
      />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid lg:grid-cols-8 gap-4 md:gap-2 lg:gap-2 justify-start">
          {/* Left: Content */}
          <div className="lg:col-span-2 space-y-6 md:space-y-8">
            <motion.div className="md:inline-block flex justify-center" variants={slideInVariants}>
              <span className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-amber-400/12 to-amber-400/8 text-amber-600 text-xs md:text-sm font-semibold tracking-wider uppercase rounded-full border border-amber-400/20 backdrop-blur-sm shadow-sm hover:shadow-md hover:bg-amber-400/15 transition-all duration-300">
                Our Services
              </span>
            </motion.div>
          </div>

          {/* Right: Enhanced Image Layout */}
          <div className="relative lg:col-span-6 flex flex-col justify-center lg:justify-end space-y-6 lg:space-y-0">
            <motion.h1
              className="text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900/70 leading-[0.85] sm:leading-[0.9] tracking-[-0.02em] font-sans text-center lg:text-left"
              variants={slideInVariants}
            >
              Explore our comprehensive{' '}
              <span className="relative inline-block">
                Interior
                <motion.div
                  className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-amber-400/40 to-amber-500/20 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                />
              </span>{' '}
              design services{' '}
            </motion.h1>
            {/* Enhanced description with better typography */}
            <motion.div className="relative md:mt-8" variants={slideInVariants}>
              <div className="relative">
                <p className="text-sm md:text-lg text-gray-700 leading-relaxed font-light tracking-wide text-center lg:text-left">
                  We specialize in transforming visions into reality. Explore our portfolio of
                  innovative architectural and interior design projects crafted with precision.
                </p>
              </div>
            </motion.div>
            {/* Enhanced floating accent lines - responsive */}
            <motion.div
              className="absolute top-1/4 -right-2 sm:right-0 lg:right-4 w-8 sm:w-12 lg:w-16 h-px bg-gradient-to-r from-amber-400/40 via-amber-500/30 to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
            />
            <motion.div
              className="absolute bottom-1/3 -left-2 sm:left-0 lg:left-4 w-6 sm:w-8 lg:w-12 h-px bg-gradient-to-l from-amber-400/35 via-amber-400/25 to-transparent"
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 2.3, duration: 1 }}
            />
            {/* Additional architectural detail - desktop only */}
            <motion.div
              className="absolute top-1/2 left-0 w-px h-16 bg-gradient-to-b from-amber-400/20 to-transparent hidden lg:block"
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ scaleY: 1, opacity: 1 }}
              transition={{ delay: 3, duration: 0.8 }}
            />
          </div>
        </div>
      </motion.div>

      {/* divider */}
      <div className="my-2 md:my-8 border-t border-amber-400/20" />

      <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 mt-2 lg:mt-6 max-w-7xl mx-auto relative z-10">
        {/* Left: Enhanced Service Navigation */}
        <div className="lg:col-span-5 space-y-3">
          <motion.div
            className="bg-gradient-to-br from-gray-50/80 to-white/80 backdrop-blur-sm md:border border-gray-200/40 rounded-2xl p-2 shadow-lg"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {services.map((service, index) => (
              <motion.button
                key={index}
                onClick={() => setSelectedService(index)}
                onMouseOver={() => setSelectedService(index)}
                className={`w-full text-left p-3 lg:p-4 rounded-xl border transition-all duration-300 group relative overflow-hidden ${
                  selectedService === index
                    ? 'bg-white border-amber-400/30 shadow-xl'
                    : 'bg-transparent border-transparent hover:bg-white/60 hover:shadow-md'
                }`}
                whileHover={{
                  scale: 1.01,
                  transition: { duration: 0.2 },
                }}
                whileTap={{ scale: 0.99 }}
              >
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-16 h-16 opacity-5">
                  <div className="grid grid-cols-4 gap-px h-full">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="bg-amber-400"></div>
                    ))}
                  </div>
                </div>

                <div className="relative flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <div className="flex flex-col items-center">
                      <span
                        className={`text-2xl lg:text-3xl font-light transition-colors duration-300 ${
                          selectedService === index
                            ? 'text-amber-500'
                            : 'text-gray-400 group-hover:text-amber-400'
                        }`}
                      >
                        {service.number}
                      </span>
                      <motion.div
                        className={`w-px h-8 bg-gradient-to-b transition-colors duration-300 ${
                          selectedService === index
                            ? 'from-amber-400 to-transparent'
                            : 'from-gray-300 to-transparent'
                        }`}
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: selectedService === index ? 1 : 0.3 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    <div className="flex-1">
                      <h4
                        className={`font-semibold text-sm lg:text-base mb-1 transition-colors duration-300 ${
                          selectedService === index
                            ? 'text-gray-900'
                            : 'text-gray-700 group-hover:text-gray-900'
                        }`}
                      >
                        {service.title}
                      </h4>
                      <span
                        className={`text-xs font-medium tracking-wide uppercase transition-colors duration-300 ${
                          selectedService === index
                            ? 'text-amber-600'
                            : 'text-gray-500 group-hover:text-amber-500'
                        }`}
                      >
                        {service.category}
                      </span>
                    </div>
                  </div>

                  {/* Active Indicator */}
                  <motion.div
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      selectedService === index
                        ? 'bg-amber-400 shadow-lg shadow-amber-400/30'
                        : 'bg-gray-300 group-hover:bg-amber-400/50'
                    }`}
                    animate={{
                      scale: selectedService === index ? [1, 1.2, 1] : 1,
                    }}
                    transition={{
                      duration: 2,
                      repeat: selectedService === index ? Infinity : 0,
                      ease: 'easeInOut',
                    }}
                  />
                </div>
              </motion.button>
            ))}
          </motion.div>
        </div>

        {/* Right: Enhanced Content Display */}
        <div className="lg:col-span-7">
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService}
                className="relative bg-gradient-to-br from-white/90 to-gray-50/80 backdrop-blur-sm border border-gray-200/50 rounded-3xl overflow-hidden shadow-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                {/* Image Section with Overlay */}
                <div className="relative h-[60vh] lg:h-[110vh] overflow-hidden">
                  <motion.div
                    className="relative w-full h-full"
                    initial={{ scale: 1.1 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Image
                      src={services[selectedService].image}
                      alt={services[selectedService].title}
                      fill
                      className="object-cover"
                      onLoad={() => setIsImageLoading(false)}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

                    {/* Architectural Grid Overlay */}
                    <div className="absolute inset-0 opacity-10">
                      <div className="grid grid-cols-6 h-full">
                        {Array.from({ length: 6 }).map((_, i) => (
                          <motion.div
                            key={i}
                            className="border-r border-white"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.8 + i * 0.1 }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Service Number Overlay */}
                    <div className="absolute top-6 left-6">
                      <motion.span
                        className="text-6xl lg:text-7xl font-thin text-black/80 md:text-white/80 backdrop-blur-sm"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        {services[selectedService].number}
                      </motion.span>
                    </div>

                    {/* Category Badge */}
                    <div className="absolute top-6 right-6">
                      <motion.span
                        className="px-4 py-2 bg-black/20 backdrop-blur-md text-white text-sm font-medium rounded-full border border-white/30"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.4 }}
                      >
                        {services[selectedService].category}
                      </motion.span>
                    </div>
                  </motion.div>
                </div>

                {/* Content Section */}
                <div className="absolute bottom-0 p-8 lg:p-10">
                  <div className="max-w-3xl bg-black/30 backdrop-blur-md w-full p-6 lg:p-8 rounded-2xl border border-white/20 shadow-lg">
                    <motion.p
                      className="text-sm md:text-base text-white/90 leading-relaxed font-light"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      {services[selectedService].description}
                    </motion.p>
                  </div>
                </div>

                {/* Architectural Detail Lines */}
                <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />
                <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-amber-400/20 to-transparent" />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* Bottom Architectural Elements */}
      <motion.div
        className="mt-16 lg:mt-20 flex justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <div className="flex items-center space-x-8 lg:space-x-12">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-px bg-amber-400/40"></div>
            <div className="w-2 h-2 border border-amber-400/40 rotate-45"></div>
            <div className="w-16 h-px bg-gradient-to-r from-amber-400/40 to-transparent"></div>
          </div>

          <motion.div
            className="w-3 h-3 border border-amber-400/30 rounded-full"
            animate={{
              scale: [1, 1.2, 1],
              borderColor: [
                'rgba(251, 191, 36, 0.3)',
                'rgba(251, 191, 36, 0.6)',
                'rgba(251, 191, 36, 0.3)',
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />

          <div className="flex items-center space-x-2">
            <div className="w-16 h-px bg-gradient-to-l from-amber-400/40 to-transparent"></div>
            <div className="w-2 h-2 border border-amber-400/40 rotate-45"></div>
            <div className="w-8 h-px bg-amber-400/40"></div>
          </div>
        </div>
      </motion.div>

      {/* Subtle noise texture overlay for premium feel */}
    </section>
  )
}
