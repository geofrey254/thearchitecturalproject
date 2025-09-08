'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Eye, Lightbulb, Ruler, Hammer, ArrowRight, Sparkles, Clock } from 'lucide-react'

export default function HowWeWorkSection() {
  const processSteps = [
    {
      icon: Eye,
      step: '01',
      title: 'Discovery & Vision',
      description:
        'We begin by understanding your needs, lifestyle, and dreams. Through detailed consultations, we explore your vision and establish the foundation for exceptional design.',
      image:
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
      duration: '1-2 Weeks',
      highlights: ['Initial Consultation', 'Lifestyle Analysis', 'Vision Mapping'],
    },
    {
      icon: Lightbulb,
      step: '02',
      title: 'Concept Development',
      description:
        'Our team transforms ideas into visual concepts. We create initial sketches, mood boards, and 3D visualizations to bring your vision to life.',
      image:
        'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
      duration: '2-3 Weeks',
      highlights: ['3D Visualizations', 'Mood Boards', 'Initial Sketches'],
    },
    {
      icon: Ruler,
      step: '03',
      title: 'Design & Planning',
      description:
        'Detailed architectural drawings, technical specifications, and comprehensive planning ensure every element is perfectly calculated and code-compliant.',
      image:
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
      duration: '4-6 Weeks',
      highlights: ['Technical Drawings', 'Code Compliance', 'Material Selection'],
    },
    {
      icon: Hammer,
      step: '04',
      title: 'Construction & Build',
      description:
        'We oversee the construction process, ensuring quality craftsmanship and adherence to design specifications while managing timelines and budgets.',
      image:
        'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&h=400&fit=crop&crop=entropy&auto=format&q=80',
      duration: '3-12 Months',
      highlights: ['Quality Control', 'Timeline Management', 'Budget Oversight'],
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 15,
        duration: 1,
      },
    },
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 80 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 15,
        duration: 1,
      },
    },
  }

  return (
    <section className="relative bg-white py-20 px-4 md:px-8 lg:px-12 overflow-hidden">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Organic shapes */}
        <motion.div
          className="absolute top-20 right-10 w-80 h-80 bg-gradient-to-br from-amber-400/8 via-amber-300/4 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
        />
        <motion.div
          className="absolute bottom-40 left-10 w-96 h-96 bg-gradient-to-tr from-amber-500/6 via-amber-400/3 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
        />

        {/* Geometric grid */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(245, 158, 11, 0.3) 1px, transparent 1px),
                linear-gradient(90deg, rgba(245, 158, 11, 0.3) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px',
            }}
          />
        </div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Header Section - Side by Side Layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-32">
          {/* Left Side - Text Content */}
          <motion.div variants={fadeInLeft} className="space-y-8">
            <motion.div className="inline-flex items-center gap-3">
              <Sparkles className="w-5 h-5 text-amber-500" />
              <span className="px-4 py-2 bg-gradient-to-r from-amber-400/15 to-amber-300/10 text-amber-700 text-sm font-semibold tracking-wider uppercase rounded-full border border-amber-400/25 backdrop-blur-sm">
                Our Process
              </span>
            </motion.div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900/70 leading-[0.9] tracking-[-0.02em]">
              Crafting Your{' '}
              <span className="relative inline-block text-amber-600">
                Vision
                <motion.div
                  className="absolute bottom-2 left-0 w-full h-3 bg-gradient-to-r from-amber-400/30 to-amber-500/15 rounded-full -z-10"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                />
              </span>{' '}
              Into Reality
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed font-light">
              From initial concept to final delivery, our proven methodology ensures exceptional
              results through collaboration, innovation, and meticulous attention to detail.
            </p>

            <motion.div
              className="flex items-center gap-4 pt-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
            >
              <div className="flex items-center gap-2 text-amber-600">
                <Clock className="w-4 h-4" />
                <span className="text-sm font-medium">4-Step Process</span>
              </div>
              <div className="w-px h-4 bg-gray-300" />
              <span className="text-sm text-gray-600">Tailored to Your Needs</span>
            </motion.div>
          </motion.div>

          {/* Right Side - Visual Element */}
          <motion.div variants={fadeInRight} className="relative">
            <div className="relative bg-white rounded-3xl p-8 shadow-2xl border border-gray-100/50 backdrop-blur-sm">
              {/* Process Flow Visualization */}
              <div className="space-y-6">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    className="flex items-center gap-4 group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    {/* Step Icon */}
                    <div className="relative">
                      <div className="w-12 h-12 bg-gradient-to-br from-amber-400/10 to-amber-500/5 rounded-xl flex items-center justify-center border border-amber-400/20 group-hover:border-amber-400/40 transition-all duration-300">
                        <step.icon className="w-5 h-5 text-amber-600" />
                      </div>
                      {index < processSteps.length - 1 && (
                        <div className="absolute top-12 left-1/2 w-px h-6 bg-gradient-to-b from-amber-400/30 to-transparent transform -translate-x-1/2" />
                      )}
                    </div>

                    {/* Step Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-1">
                        <span className="text-xs font-bold text-amber-600 bg-amber-400/10 px-2 py-1 rounded-md">
                          {step.step}
                        </span>
                        <h4 className="font-semibold text-gray-900 text-sm">{step.title}</h4>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">{step.duration}</p>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className="w-4 h-4 text-amber-500/60 group-hover:text-amber-500 group-hover:translate-x-1 transition-all duration-300" />
                  </motion.div>
                ))}
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full shadow-lg"
                animate={{
                  scale: [1, 1.2, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
              <motion.div
                className="absolute -bottom-3 -left-3 w-6 h-6 bg-gradient-to-br from-amber-300 to-amber-400 rounded-lg rotate-45 shadow-md"
                animate={{
                  rotate: [45, 405, 45],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            </div>
          </motion.div>
        </div>

        {/* Enhanced Statistics Section */}
        <motion.div
          className="relative bg-gradient-to-r from-amber-50 via-white to-amber-50 rounded-3xl p-8 lg:p-12 mb-24 border border-amber-200/30 shadow-xl"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              className="space-y-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl mx-auto flex items-center justify-center shadow-lg rotate-3 hover:rotate-6 transition-transform duration-300">
                <span className="text-white font-black text-xl">200+</span>
              </div>
              <h4 className="font-bold text-gray-900">Projects Completed</h4>
              <p className="text-gray-600 text-sm">Delivered with excellence</p>
            </motion.div>

            <motion.div
              className="space-y-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl mx-auto flex items-center justify-center shadow-lg -rotate-3 hover:-rotate-6 transition-transform duration-300">
                <span className="text-white font-black text-xl">98%</span>
              </div>
              <h4 className="font-bold text-gray-900">Client Satisfaction</h4>
              <p className="text-gray-600 text-sm">Exceeding expectations</p>
            </motion.div>

            <motion.div
              className="space-y-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-amber-500 rounded-2xl mx-auto flex items-center justify-center shadow-lg rotate-2 hover:rotate-12 transition-transform duration-300">
                <span className="text-white font-black text-xl">15+</span>
              </div>
              <h4 className="font-bold text-gray-900">Years Experience</h4>
              <p className="text-gray-600 text-sm">Proven expertise</p>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>

      {/* Floating Accent Elements */}
      <motion.div
        className="absolute top-40 left-8 w-16 h-16 border-2 border-amber-400/20 rounded-xl backdrop-blur-sm"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: 'linear',
        }}
      />

      <motion.div
        className="absolute bottom-32 right-12 w-12 h-12 bg-gradient-to-br from-amber-400/10 to-amber-500/5 rounded-full border border-amber-400/20 backdrop-blur-sm"
        animate={{
          y: [-10, 10, -10],
          x: [-5, 5, -5],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
    </section>
  )
}
