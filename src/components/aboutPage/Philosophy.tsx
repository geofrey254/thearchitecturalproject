// components/HeroSection.tsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowUpRight } from 'react-icons/bs'

export default function HeroSection() {
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

  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { duration: 2, ease: 'easeInOut' },
        opacity: { duration: 0.5 },
      },
    },
  }

  return (
    <section className="relative bg-white py-10 px-4 md:px-12 overflow-hidden">
      {/* Enhanced Background with Architectural Grid */}
      <div className="absolute inset-0">
        {/* Main gradient overlay */}
        <div
          className="h-full w-full opacity-[0.08]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.3) 0%, transparent 60%),
              radial-gradient(circle at 85% 75%, rgba(245, 158, 11, 0.2) 0%, transparent 50%),
              radial-gradient(circle at 45% 85%, rgba(245, 158, 11, 0.15) 0%, transparent 65%)
            `,
          }}
        />

        {/* Architectural grid pattern - responsive */}
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

      {/* Architectural Line Elements */}
      <motion.svg
        className="absolute inset-0 w-full h-full pointer-events-none z-[1]"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <motion.path
          d="M 0,20 Q 50,15 100,25"
          stroke="rgba(245, 158, 11, 0.15)"
          strokeWidth="0.1"
          fill="none"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 1.5 }}
        />
        <motion.path
          d="M 0,80 Q 30,75 70,82 Q 85,85 100,78"
          stroke="rgba(245, 158, 11, 0.1)"
          strokeWidth="0.1"
          fill="none"
          variants={lineVariants}
          initial="hidden"
          animate="visible"
          transition={{ delay: 2 }}
        />
      </motion.svg>

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
        <div className="grid lg:grid-cols-8 gap-12 lg:gap-2 items-center">
          {/* Left: Content */}
          <div className="lg:col-span-5 space-y-6 sm:space-y-8">
            <motion.div className="md:inline-block flex justify-center" variants={slideInVariants}>
              <span className="px-4 sm:px-5 py-2 sm:py-2.5 bg-gradient-to-r from-amber-400/12 to-amber-400/8 text-amber-600 text-xs sm:text-sm font-semibold tracking-wider uppercase rounded-full border border-amber-400/20 backdrop-blur-sm shadow-sm hover:shadow-md hover:bg-amber-400/15 transition-all duration-300">
                About Us
              </span>
            </motion.div>

            <motion.h1
              className="text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-gray-900/70 leading-[0.85] sm:leading-[0.9] tracking-[-0.02em] font-sans text-center lg:text-left"
              variants={slideInVariants}
            >
              We Shape{' '}
              <span className="relative inline-block">
                Interior
                <motion.div
                  className="absolute bottom-1 left-0 w-full h-1 bg-gradient-to-r from-amber-400/40 to-amber-500/20 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.5, duration: 0.8 }}
                />
              </span>{' '}
              Designs, Crafting Timeless and Inspiring Spaces
            </motion.h1>

            {/* Number and small image section - enhanced responsiveness */}
            <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
              <motion.div className="relative" variants={slideInVariants}>
                <h2 className="text-[10rem] lg:text-[16rem] font-black text-gray-900/90 leading-none tracking-[-0.04em] select-none">
                  26
                </h2>
                <motion.div
                  className="absolute -bottom-1 left-0 w-8 sm:w-12 lg:w-16 h-0.5 bg-gradient-to-r from-amber-400 to-amber-500 rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 1.8, duration: 0.6 }}
                />
                <motion.span
                  className="absolute -bottom-0 sm:-bottom-8 left-44 md:left-0 text-xs sm:text-sm font-medium text-gray-500 tracking-wide uppercase"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2, duration: 0.5 }}
                >
                  Years Experience
                </motion.span>
              </motion.div>

              <motion.div className="relative group mt-8 md:mt-0" variants={imageVariants}>
                <div className="relative overflow-hidden rounded-2xl lg:rounded-3xl">
                  {/* Image frame with architectural details */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent z-10 rounded-2xl lg:rounded-3xl" />
                  <div className="absolute inset-0 border border-white/30 rounded-2xl lg:rounded-3xl z-20" />
                  <div className="absolute -inset-0.5 bg-gradient-to-br from-amber-400/20 to-amber-600/10 rounded-2xl lg:rounded-3xl -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                  <Image
                    src="/4.jpg"
                    width={500}
                    height={500}
                    alt="Modern architectural design detail"
                    className="w-80 h-96 sm:w-56 sm:h-64 lg:w-80 lg:h-80 object-cover transition-all duration-700 group-hover:scale-105"
                    priority
                  />

                  {/* Subtle overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent" />

                  {/* Geometric corner accent */}
                  <motion.div
                    className="absolute top-3 right-3 w-8 h-8 border-l-2 border-t-2 border-amber-400/30"
                    initial={{ opacity: 0, scale: 0.5 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 2.2, duration: 0.4 }}
                  />
                </div>
              </motion.div>
            </div>
          </div>

          {/* Right: Enhanced Image Layout */}
          <div className="relative lg:col-span-3 flex flex-col justify-center lg:justify-end space-y-6 lg:space-y-0">
            {/* Main large image with architectural framing */}
            <motion.div className="relative z-20 group" variants={imageVariants}>
              <div className="relative overflow-hidden rounded-3xl lg:rounded-[2rem]">
                {/* Multi-layered frame system */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-black/5 z-30 rounded-3xl lg:rounded-[2rem]" />
                <div className="absolute inset-0 border border-white/40 rounded-3xl lg:rounded-[2rem] z-40" />
                <div className="absolute -inset-1 bg-gradient-to-br from-amber-400/15 via-amber-500/8 to-amber-600/5 rounded-3xl lg:rounded-[2rem] -z-10 blur-sm opacity-0 group-hover:opacity-100 transition-all duration-700" />

                <Image
                  src="/2.jpg"
                  width={450}
                  height={600}
                  alt="Modern architectural design showcase"
                  className="w-full max-w-full sm:max-w-md lg:max-w-lg xl:max-w-xl h-[40vh] sm:h-[65vh] lg:h-[70vh] object-cover transition-all duration-700 group-hover:scale-[1.02]"
                  priority
                />

                {/* Architectural corner details */}
                <motion.div
                  className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-white/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.5, duration: 0.5 }}
                />
                <motion.div
                  className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-white/50"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 2.8, duration: 0.5 }}
                />

                {/* Elegant shadow system */}
                <div className="absolute -bottom-6 -left-6 -right-6 h-6 bg-gradient-to-r from-transparent via-black/5 to-transparent blur-sm -z-20" />
              </div>
            </motion.div>

            {/* Enhanced description with better typography */}
            <motion.div className="relative max-w-xl lg:max-w-2xl mt-8" variants={slideInVariants}>
              <div className="relative">
                <p className="text-base sm:text-lg lg:text-lg text-gray-700 leading-relaxed font-light tracking-wide text-center lg:text-left">
                  We believe that every space has the power to inspire, and that great design brings
                  that inspiration to life. Our mission is to craft environments that stir
                  creativity, evoke emotion, and reflect the essence of those who inhabit them.
                </p>
              </div>
            </motion.div>

            {/* Premium CTA Design */}
            <motion.div
              variants={slideInVariants}
              className="ml-0 mt-6 flex justify-center lg:justify-start"
            >
              <Link
                href="/contact"
                className="group relative inline-flex items-center px-6 md:px-6 py-3 sm:py-2 text-gray-900 font-semibold rounded-full overflow-hidden transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-amber-400/50 focus:ring-offset-2 focus:ring-offset-white"
              >
                {/* Multi-layered button background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-amber-50 to-white border border-amber-400/30 rounded-full" />
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400/0 via-amber-400/5 to-amber-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full" />

                {/* Button shadow */}
                <div className="absolute -inset-1 bg-gradient-to-r from-amber-400/20 via-amber-500/15 to-amber-600/10 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

                <span className="relative z-10 text-sm sm:text-base tracking-wide">
                  Start Your Project
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

            {/* Enhanced decorative elements - responsive */}
            <motion.div
              className="absolute bottom-4 sm:bottom-6 lg:bottom-8 right-4 sm:right-8 lg:right-12 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 border-2 border-amber-400/25 rounded-full flex items-center justify-center z-30 backdrop-blur-sm bg-white/30"
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.5, duration: 0.5 }}
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

      {/* Subtle noise texture overlay for premium feel */}
      <div
        className="absolute inset-0 opacity-[0.015] mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </section>
  )
}
