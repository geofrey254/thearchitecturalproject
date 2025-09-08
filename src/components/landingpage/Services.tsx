'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function ServicesSection() {
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
    },
  ]

  const stats = [
    {
      number: '2013',
      label: 'Years experience',
      description: 'Improving homes with expert craftsmanship for years',
    },
    {
      number: '+190',
      label: 'Projects completed',
      description: 'Over 250 successful projects delivered with quality and care',
    },
    {
      number: '+260',
      label: 'Skilled Tradespeople',
      description: 'Our team of experts ensures top-quality results',
    },
    {
      number: '+328',
      label: 'Client satisfaction',
      description: 'All of our clients are satisfied with our work and service',
    },
  ]

  const [selectedService, setSelectedService] = useState(0)

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const badgeVariants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 120,
        damping: 10,
        duration: 0.8,
      },
    },
  }

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  }

  const descriptionVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 12,
        duration: 0.8,
        delay: 0.3,
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

  const statsContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  }

  const statVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 15,
        duration: 0.8,
      },
    },
  }

  return (
    <section className="bg-white pt-24 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      {/* Geometric Elements */}
      <motion.div
        className="absolute top-20 right-12 w-40 h-40 border border-amber-400/15 rotate-45 transform"
        initial={{ opacity: 0, rotate: 0 }}
        whileInView={{ opacity: 1, rotate: 45 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      ></motion.div>
      <motion.div
        className="absolute bottom-32 left-16 w-20 h-20 bg-amber-400/5 rotate-12 transform"
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 1 }}
      ></motion.div>
      <motion.div
        className="absolute top-1/3 left-8 w-px h-48 bg-gradient-to-b from-transparent via-amber-400/20 to-transparent"
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.7 }}
      ></motion.div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header Section */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20">
          {/* Left: Badge */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <motion.div className="group relative" variants={badgeVariants}>
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative bg-white/90 backdrop-blur-sm border border-amber-400/30 rounded-2xl px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-amber-400 rounded-full animate-ping opacity-20"></div>
                  </div>
                  <span className="text-gray-800 font-bold text-sm tracking-widest uppercase">
                    Our Services
                  </span>
                </div>
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>

          {/* Right: Title and Description */}
          <div className="lg:col-span-9">
            <motion.h2
              className="text-5xl lg:text-7xl font-light text-gray-900 mb-8 leading-[0.9] tracking-tight"
              variants={titleVariants}
            >
              Explore Our
              <span className="block text-amber-500 font-bold mt-2">Comprehensive</span>
              <span className="block text-gray-800 font-medium">Interior Design Services</span>
            </motion.h2>

            <motion.div className="relative max-w-3xl" variants={descriptionVariants}>
              <div className="absolute md:-left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-400 via-amber-500 to-transparent opacity-30"></div>
              <p className="text-lg text-gray-600 leading-relaxed font-light pl-8">
                We specialize in transforming visions into reality. Explore our portfolio of
                innovative architectural and interior design projects crafted with precision and
                attention to every detail.
              </p>
            </motion.div>
          </div>
        </div>

        {/* Interactive Services Section */}
        <motion.div
          className="mb-24"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6 }}
        >
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Service Content Display */}
            <div className="lg:col-span-7">
              <motion.div
                className="relative bg-gray-50/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 lg:p-12 min-h-[500px]"
                variants={serviceContentVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {/* Selected Service Content */}
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedService}
                    className="relative"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {/* Service Number */}
                    <div className="mb-8">
                      <motion.span
                        className="text-8xl font-light text-amber-400/20"
                        initial={{ scale: 0.8 }}
                        animate={{ scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                      >
                        {services[selectedService].number}
                      </motion.span>
                    </div>

                    {/* Service Title */}
                    <motion.h3
                      className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 leading-tight"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.2 }}
                    >
                      {services[selectedService].title}
                    </motion.h3>

                    {/* Service Description */}
                    <motion.p
                      className="text-lg text-gray-600 leading-relaxed font-light mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 }}
                    >
                      {services[selectedService].description}
                    </motion.p>

                    {/* Service Features */}
                    <motion.div
                      className="space-y-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.4, delay: 0.4 }}
                    >
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Features:</h4>
                      {services[selectedService].features.map((feature, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start space-x-4"
                          custom={index}
                          variants={serviceNavVariants}
                          initial="hidden"
                          animate="visible"
                        >
                          <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-600 leading-relaxed font-light">{feature}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </motion.div>
                </AnimatePresence>

                {/* Decorative elements */}
                <div className="absolute top-8 right-8 w-16 h-16 border border-amber-400/10 rotate-45"></div>
                <div className="absolute bottom-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
              </motion.div>
            </div>

            {/* Right: Service Navigation */}
            <div className="lg:col-span-5">
              <motion.div
                className="space-y-4"
                variants={serviceNavVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {services.map((service, index) => (
                  <motion.button
                    key={index}
                    variants={serviceButtonVariants}
                    onClick={() => setSelectedService(index)}
                    className={`w-full text-left p-6 rounded-xl border transition-all duration-300 group ${
                      selectedService === index
                        ? 'bg-white border-amber-400/30 shadow-xl'
                        : 'bg-gray-50/50 border-gray-200/30 hover:bg-white hover:shadow-lg'
                    }`}
                    whileHover={{
                      scale: 1.02,
                      transition: { duration: 0.2 },
                    }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span
                          className={`text-2xl font-light transition-colors duration-300 ${
                            selectedService === index
                              ? 'text-amber-500'
                              : 'text-gray-400 group-hover:text-amber-400'
                          }`}
                        >
                          {service.number}
                        </span>
                        <div>
                          <h4
                            className={`font-semibold transition-colors duration-300 ${
                              selectedService === index
                                ? 'text-gray-900'
                                : 'text-gray-700 group-hover:text-gray-900'
                            }`}
                          >
                            {service.title}
                          </h4>
                        </div>
                      </div>

                      <div
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                          selectedService === index
                            ? 'bg-amber-400'
                            : 'bg-gray-300 group-hover:bg-amber-400/50'
                        }`}
                      ></div>
                    </div>

                    {/* Active indicator line */}
                    <div
                      className={`mt-4 h-px bg-gradient-to-r from-amber-400 to-transparent transition-opacity duration-300 ${
                        selectedService === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    ></div>
                  </motion.button>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="relative"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
        >
          {/* Stats Header */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center space-x-4 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-400"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
            <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
              Proven <span className="text-amber-500 font-semibold">Excellence</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our track record speaks for itself through years of dedicated service and countless
              satisfied clients.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
            variants={statsContainerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="group text-center relative"
                variants={statVariants}
                whileHover={{
                  y: -10,
                  scale: 1.05,
                  transition: { duration: 0.2 },
                }}
              >
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative p-8">
                  {/* Number */}
                  <div className="mb-4">
                    <span className="text-5xl lg:text-6xl font-light text-gray-900 group-hover:text-amber-500 transition-colors duration-300">
                      {stat.number}
                    </span>
                  </div>

                  {/* Label */}
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">
                    {stat.label}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed font-light">
                    {stat.description}
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-6 h-6 border border-amber-400/10 rotate-45 group-hover:border-amber-400/30 transition-colors duration-300"></div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Bottom decorative element */}
        <motion.div
          className="mt-20 flex justify-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="flex items-center space-x-4 opacity-30">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            <div className="w-32 h-px bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
