// components/AboutSection.tsx
'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { BsArrowUpRight } from 'react-icons/bs'

export default function AboutSection() {
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

  const slideInFromRightVariants = {
    hidden: {
      opacity: 0,
      x: 60,
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
    <section className="relative bg-black py-20 px-4 md:px-12 overflow-hidden">
      {/* Enhanced Background with Architectural Grid - matching hero */}
      <div className="absolute inset-0">
        {/* Main gradient overlay */}
        <div
          className="h-full w-full opacity-[0.08]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 75% 25%, rgba(245, 158, 11, 0.3) 0%, transparent 60%),
              radial-gradient(circle at 15% 75%, rgba(245, 158, 11, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 55% 15%, rgba(245, 158, 11, 0.15) 0%, transparent 65%)
            `,
          }}
        />

        {/* Architectural grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(245, 158, 11, 0.4) 0.5px, transparent 0.5px),
              linear-gradient(90deg, rgba(245, 158, 11, 0.4) 0.5px, transparent 0.5px)
            `,
            backgroundSize: '40px 40px',
          }}
        />

        {/* Fine detail grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.02] hidden lg:block"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.1) 0.5px, transparent 0.5px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.1) 0.5px, transparent 0.5px)
            `,
            backgroundSize: '120px 120px',
          }}
        />
      </div>

      {/* Enhanced floating geometric elements */}
      <motion.div
        className="absolute top-12 left-4 sm:top-16 sm:left-8 lg:top-20 lg:left-12"
        animate="animate"
      >
        <div className="relative w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32">
          <div className="absolute inset-0 border border-amber-400/15 rounded-full backdrop-blur-sm" />
          <div className="absolute inset-2 border border-amber-400/8 rounded-full" />
          <motion.div
            className="absolute top-1/2 left-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-amber-400/40 rounded-full"
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
        className="absolute top-1/4 right-4 sm:top-1/3 sm:right-8 lg:top-1/4 lg:right-12 w-10 h-10 sm:w-14 sm:h-14 lg:w-18 lg:h-18 bg-gradient-to-br from-amber-400/8 to-amber-400/3 rotate-45 rounded-xl border border-amber-400/15 backdrop-blur-sm"
        animate="animate"
        style={{ animationDelay: '1s' }}
      />

      {/* Accent lines */}
      <motion.div
        className="absolute bottom-1/4 left-2 sm:left-4 w-0.5 h-20 sm:h-28 lg:h-36 bg-gradient-to-t from-amber-400/30 via-amber-400/15 to-transparent rounded-full"
        initial={{ opacity: 0, scaleY: 0 }}
        animate={{ opacity: 1, scaleY: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          className="grid lg:grid-cols-8 gap-12 lg:gap-0 justify-start items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="right-section lg:col-span-4">
            <motion.div
              className="flex justify-center lg:justify-start mb-2"
              variants={slideInFromRightVariants}
            >
              <span className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-amber-400/12 to-amber-400/8 text-amber-600 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-full border border-amber-400/20 backdrop-blur-sm shadow-sm hover:shadow-md hover:bg-amber-400/15 transition-all duration-300">
                How We Work
              </span>
            </motion.div>

            <motion.h2
              className="text-3xl sm:text-4xl lg:text-6xl xl:text-7xl font-black text-white/70 leading-[0.9] tracking-[-0.02em] font-sans text-center lg:text-left"
              variants={slideInFromRightVariants}
            >
              Designing{' '}
              <span className="relative inline-block">
                Tomorrow
                <motion.div
                  className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-amber-400/40 to-amber-500/20 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                />
              </span>{' '}
              With Today{"'"}s Vision
            </motion.h2>

            {/* CTA Button Design  */}
            <motion.div
              variants={slideInFromRightVariants}
              className="pt-11 flex justify-center lg:justify-start"
            >
              <Link
                href="/projects"
                className="group relative inline-flex items-center px-6 md:px-8 py-3 sm:py-3.5 text-gray-900 font-semibold rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:ring-offset-2 focus:ring-offset-white"
              >
                {/* Multi-layered button background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-amber-50/50 to-white/70 border border-amber-400/30 rounded-full" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/8 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                {/* Button shadow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 via-amber-500/15 to-amber-600/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                <span className="relative z-10 text-sm sm:text-base tracking-wide">
                  View Our Work
                </span>

                <motion.span
                  className="relative ml-4 sm:ml-6 lg:ml-8 bg-gradient-to-br from-amber-400 to-amber-500 p-2 sm:p-2.5 rounded-full shadow-lg group-hover:shadow-amber-400/30 transition-all duration-300"
                  whileHover={{ rotate: 45 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <BsArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                </motion.span>

                {/* Subtle shine effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 opacity-0 group-hover:opacity-100"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: '100%' }}
                  transition={{ duration: 0.8 }}
                />
              </Link>
            </motion.div>
          </div>
          {/* Content (Right - 5 columns) */}
          <div className="lg:col-span-4 md:mt-6">
            <motion.div className="space-y-6" variants={slideInFromRightVariants}>
              <p className="text-base sm:text-lg lg:text-lg text-white/50 leading-relaxed font-light tracking-wide text-center lg:text-left">
                We believe that great architecture emerges from the intersection of functionality,
                beauty, and sustainability. Our design process is collaborative, iterative, and
                deeply rooted in understanding the unique needs of each client and context.
              </p>

              <p className="text-base sm:text-lg lg:text-lg text-white/50 leading-relaxed font-light tracking-wide text-center lg:text-left">
                Every project begins with listening. We immerse ourselves in your vision, study the
                site{"'"}s characteristics, and explore how the space will be used. This foundation
                informs every decision, from initial concept to final construction details.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Enhanced decorative elements - responsive */}
        <motion.div
          className="absolute bottom-8 sm:bottom-12 lg:bottom-16 right-4 sm:right-8 lg:right-12 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border-2 border-amber-400/25 rounded-full flex items-center justify-center z-30 backdrop-blur-sm bg-white/30"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.5 }}
        >
          <motion.div
            className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-gradient-to-br from-amber-400 to-amber-500 rounded-full"
            animate={{
              scale: [1, 1.3, 1],
              opacity: [1, 0.6, 1],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>

        {/* Enhanced floating accent lines */}
        <motion.div
          className="absolute top-1/3 right-2 sm:right-4 lg:right-8 w-8 sm:w-12 lg:w-16 h-px bg-gradient-to-l from-amber-400/40 via-amber-500/30 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 2.5, duration: 1 }}
        />

        <motion.div
          className="absolute bottom-1/4 left-2 sm:left-4 lg:left-8 w-6 sm:w-8 lg:w-12 h-px bg-gradient-to-r from-amber-400/35 via-amber-400/25 to-transparent"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ delay: 2.8, duration: 1 }}
        />
      </div>

      {/* Subtle noise texture overlay for premium feel - matching hero */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </section>
  )
}
