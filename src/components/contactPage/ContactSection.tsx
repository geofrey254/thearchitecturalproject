'use client'
import { motion } from 'framer-motion'
import ContactForm from './ContactForm'

export default function ContactSection() {
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

  return (
    <section className="relative w-full py-16 md:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 bg-white backdrop-blur-sm">
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
                Get in Touch
              </span>
            </motion.div>
          </div>

          {/* Right: Enhanced Image Layout */}
          <div className="relative lg:col-span-6 flex flex-col justify-center lg:justify-end space-y-6 lg:space-y-0">
            <motion.h1
              className="text-4xl md:text-5xl lg:text-5xl xl:text-7xl font-black text-gray-900/70 leading-[0.85] sm:leading-[0.9] tracking-[-0.02em] font-sans text-center lg:text-left"
              variants={slideInVariants}
            >
              Have a Project in{' '}
              <span className="relative inline-block">
                Mind?
                <motion.div
                  className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-amber-400/40 to-amber-500/20 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                />
              </span>{' '}
              Let{"'"}s Make It Happen{' '}
            </motion.h1>

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

        {/* Contact Form */}
        <motion.div
          className="mt-16 lg:mt-16 px-4 md:px-0"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <ContactForm />
        </motion.div>
      </motion.div>
    </section>
  )
}
