'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

export default function Philosophy() {
  const philosophyPrinciples = [
    {
      icon: '🎯',
      title: 'Purpose-Driven Design',
      description:
        'Every space we create serves a meaningful purpose, enhancing the daily lives of those who inhabit them. We believe architecture should solve problems while inspiring joy.',
      fullDescription:
        'Our approach begins with understanding the deeper purpose behind every project. We analyze how spaces will be lived in, worked in, and experienced over time. This understanding drives every design decision, from the grandest architectural gestures to the smallest material choices.',
    },
    {
      icon: '❤️',
      title: 'Passionate Craftsmanship',
      description:
        'We pour our hearts into every project, treating each design challenge as an opportunity to push boundaries and exceed expectations.',
      fullDescription:
        'Passion is the fuel of exceptional design. Our team approaches each project with infectious enthusiasm, dedicating countless hours to perfecting every detail. This passion translates into spaces that feel alive and meaningful to those who experience them.',
    },
    {
      icon: '🌱',
      title: 'Sustainable Innovation',
      description:
        'We integrate environmental consciousness with cutting-edge design, creating spaces that are both beautiful and responsible.',
      fullDescription:
        'Sustainability is woven into our creative DNA. We pioneer innovative materials and techniques that reduce environmental impact while enhancing aesthetic appeal. Our designs consider the entire lifecycle of a space, ensuring longevity and adaptability for future generations.',
    },
    {
      icon: '🤝',
      title: 'Collaborative Partnership',
      description:
        'We believe the best designs emerge from close collaboration with our clients, understanding their vision and translating it into reality.',
      fullDescription:
        'True architectural excellence requires genuine partnership. We listen deeply, ask thoughtful questions, and involve our clients in the creative journey. This collaborative approach ensures that every space authentically reflects the people who will call it home or work.',
    },
  ]

  const [selectedPrinciple, setSelectedPrinciple] = useState(null)

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

  const principleVariants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 80,
        damping: 15,
        duration: 0.6,
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="relative bg-gradient-to-br from-gray-50 to-white py-24 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(245, 158, 11, 0.05) 0%, transparent 50%)
            `,
          }}
        ></div>
      </div>

      {/* Floating geometric elements */}
      <motion.div
        className="absolute top-20 right-12 w-32 h-32 border-2 border-amber-400/10 rounded-full"
        variants={floatingVariants}
        animate="animate"
      ></motion.div>
      <motion.div
        className="absolute bottom-32 left-16 w-24 h-24 bg-amber-400/5 rotate-45 rounded-lg"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      ></motion.div>
      <motion.div
        className="absolute top-1/3 right-8 w-2 h-64 bg-gradient-to-b from-amber-400/20 via-transparent to-amber-400/20"
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
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
          <div className="lg:col-span-8">
            <motion.h2
              className="text-4xl lg:text-6xl font-light text-gray-900 mb-8 leading-[0.9] tracking-tight"
              variants={titleVariants}
            >
              Designing with
              <span className="block text-amber-500 font-bold mt-2">Purpose & Passion</span>
            </motion.h2>

            <motion.div className="relative max-w-4xl" variants={descriptionVariants}>
              <div className="absolute -left-6 top-0 w-2 h-full bg-gradient-to-b from-amber-400 via-amber-500 to-transparent opacity-20 rounded-full"></div>
              <p className="text-xl text-gray-600 leading-relaxed font-light pl-10">
                At The Architectural Project, we believe that architecture is more than just
                creating beautiful spaces; it is about crafting environments that enhance the way
                people live, work, and interact. Our philosophy centers around core principles that
                guide every design decision.
              </p>
            </motion.div>
          </div>
          {/* Right: Title and Description */}

          <div className="lg:col-span-2 flex justify-center lg:justify-start">
            <Image
              src="/1.jpg"
              width={150}
              height={200}
              alt="Philosophy"
              className="aspect-[3/4] rounded-lg object-cover shadow-lg border border-amber-100"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}
