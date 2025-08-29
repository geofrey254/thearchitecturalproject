// components/FeatureCard.tsx
'use client'
import { motion } from 'framer-motion'
import { IconType } from 'react-icons'

interface FeatureCardProps {
  icon: IconType
  title: string
  description: string
  index: number
}

export default function FeatureCard({ icon: Icon, title, description, index }: FeatureCardProps) {
  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  }

  const iconVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 10,
      },
    },
  }

  const glowVariants = {
    hover: {
      opacity: 0.6,
      scale: 1.2,
      transition: {
        duration: 0.3,
      },
    },
  }

  return (
    <motion.div
      className="group relative"
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      whileHover="hover"
    >
      {/* Background glow effect */}
      <motion.div
        className="absolute inset-0 bg-amber-400/5 rounded-2xl opacity-0"
        variants={glowVariants}
      />

      {/* Card content */}
      <motion.div
        className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-8 h-full hover:border-amber-400/30 transition-all duration-300 hover:shadow-2xl hover:shadow-amber-400/5"
        whileHover={{
          scale: 1.02,
          y: -5,
          transition: {
            type: 'spring',
            stiffness: 300,
            damping: 20,
          },
        }}
      >
        {/* Icon container */}
        <motion.div className="relative mb-6" variants={iconVariants}>
          <div className="w-16 h-16 bg-amber-400/10 rounded-xl flex items-center justify-center border border-amber-400/20">
            <Icon className="w-8 h-8 text-amber-400" />
          </div>

          {/* Icon glow effect */}
          <motion.div
            className="absolute inset-0 w-16 h-16 bg-amber-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
            variants={glowVariants}
          />
        </motion.div>

        {/* Title */}
        <h3 className="text-xl lg:text-2xl font-semibold text-white mb-4 group-hover:text-amber-400 transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
          {description}
        </p>

        {/* Subtle accent line */}
        <motion.div
          className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          initial={{ scaleX: 0 }}
          whileHover={{
            scaleX: 1,
            transition: {
              duration: 0.3,
              delay: 0.1,
            },
          }}
        />
      </motion.div>

      {/* Corner accent */}
      <div className="absolute -top-1 -right-1 w-6 h-6 border-t-2 border-r-2 border-amber-400/0 rounded-tr-2xl group-hover:border-amber-400/40 transition-all duration-300" />
    </motion.div>
  )
}
