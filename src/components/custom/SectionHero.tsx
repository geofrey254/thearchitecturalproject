'use client'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'

interface SectionHeroProps {
  title: string
}

export default function SectionHero({ title }: SectionHeroProps) {
  const containerRef = useRef<HTMLElement>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { scrollY } = useScroll()

  // Parallax effects
  const backgroundY = useTransform(scrollY, [0, 500], [0, 150])
  const overlayOpacity = useTransform(scrollY, [0, 300], [0.6, 0.9])

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (containerRef.current) {
        const rect = containerRef.current.getBoundingClientRect()
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        })
      }
    }

    const container = containerRef.current
    if (container) {
      container.addEventListener('mousemove', handleMouseMove)
      return () => container.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  // Split title into words for staggered animation
  const words = title.split(' ')

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const wordVariants = {
    hidden: {
      opacity: 0,
      y: 100,
      rotateX: 90,
    },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  }

  const decorativeVariants = {
    hidden: {
      opacity: 0,
      scale: 0,
      rotate: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 360,
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 15,
        duration: 1.2,
        delay: 0.8,
      },
    },
  }

  return (
    <motion.section
      ref={containerRef}
      className="relative py-24 flex items-center justify-center overflow-hidden"
      style={{ perspective: 1000 }}
    >
      {/* Animated Background */}
      <motion.div
        className="absolute inset-0 bg-[url(/4.jpg)] bg-cover bg-bottom"
        style={{
          y: backgroundY,
          scale: 1.1, // Slight zoom to prevent empty space during parallax
        }}
      />

      {/* Dynamic Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-b from-black to-black/90"
        style={{ opacity: overlayOpacity }}
      />

      {/* Interactive Light Effect */}
      <motion.div
        className="absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(600px circle at ${mousePosition.x * 100}% ${mousePosition.y * 100}%, rgba(251, 191, 36, 0.15), transparent 40%)`,
        }}
        transition={{ type: 'spring', stiffness: 50, damping: 30 }}
      />

      {/* Floating Geometric Elements */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border-2 border-amber-400/20"
        variants={decorativeVariants}
        initial="hidden"
        animate="visible"
        style={{
          rotate: useTransform(scrollY, [0, 1000], [0, 360]),
        }}
      />

      <motion.div
        className="absolute top-40 right-32 w-16 h-16 bg-amber-400/10"
        initial={{ opacity: 0, scale: 0, rotate: 45 }}
        animate={{
          opacity: 1,
          scale: 1,
          rotate: 45,
        }}
        transition={{
          delay: 1,
          duration: 0.8,
          type: 'spring',
          stiffness: 100,
        }}
        style={{
          y: useTransform(scrollY, [0, 500], [0, -100]),
        }}
      />

      <motion.div
        className="absolute bottom-32 left-40 w-24 h-24 border border-amber-400/30 rounded-full"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: 0.6,
          duration: 1,
          type: 'spring',
          stiffness: 80,
        }}
        style={{
          y: useTransform(scrollY, [0, 500], [0, 80]),
        }}
      />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(251, 191, 36, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(251, 191, 36, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '100px 100px',
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-8 text-center max-w-6xl mx-auto">
        {/* Animated Title */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mb-8"
        >
          <motion.h1 className="text-5xl md:text-6xl font-light text-white leading-[0.9] tracking-tight">
            {words.map((word, index) => (
              <motion.span
                key={index}
                variants={wordVariants}
                className={`inline-block mr-4 md:mr-6 ${
                  index === Math.floor(words.length / 2)
                    ? 'text-amber-400 font-bold'
                    : 'text-white font-bold'
                }`}
                style={{
                  transformStyle: 'preserve-3d',
                }}
                whileHover={{
                  scale: 1.05,
                  rotateY: 5,
                  transition: { duration: 0.3 },
                }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>
        </motion.div>

        {/* Bottom Decorative Elements */}
        <motion.div
          className="flex items-center justify-center space-x-8"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2.2, duration: 0.8 }}
        >
          <motion.div
            className="w-20 h-px bg-gradient-to-r from-transparent to-amber-400/50"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="w-2 h-2 bg-amber-400 rounded-full"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [1, 0.5, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="w-20 h-px bg-gradient-to-l from-transparent to-amber-400/50"
            animate={{ scaleX: [0, 1, 0] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'easeInOut',
              delay: 1.5,
            }}
          />
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-amber-400"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.5, duration: 0.8 }}
      >
        <motion.div
          className="w-6 h-10 border-2 border-amber-400/50 rounded-full flex justify-center"
          whileHover={{ scale: 1.1, borderColor: 'rgb(251 191 36)' }}
        >
          <motion.div
            className="w-1 h-3 bg-amber-400 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
