// components/ValuesSection.tsx
'use client'
import { motion } from 'framer-motion'
import { FaLightbulb, FaHeart, FaLeaf, FaHandshake, FaRocket, FaShieldAlt } from 'react-icons/fa'
import FeatureCard from './FeatureCard'

export default function ValuesSection() {
  const values = [
    {
      icon: FaLightbulb,
      title: 'Innovation',
      description:
        'We push the boundaries of design, constantly exploring new materials, technologies, and methodologies to create cutting-edge architectural solutions.',
    },
    {
      icon: FaHeart,
      title: 'Passion',
      description:
        'Every project is infused with our genuine love for architecture. This passion drives us to exceed expectations and create truly remarkable spaces.',
    },
    {
      icon: FaLeaf,
      title: 'Sustainability',
      description:
        'We integrate environmental consciousness into every design decision, creating buildings that are both beautiful and responsible for future generations.',
    },
    {
      icon: FaHandshake,
      title: 'Collaboration',
      description:
        'The best designs emerge from genuine partnership. We work closely with clients, contractors, and communities to bring visions to life.',
    },
    {
      icon: FaRocket,
      title: 'Excellence',
      description:
        'We maintain the highest standards in every aspect of our work, from initial concepts to final construction details and beyond.',
    },
    {
      icon: FaShieldAlt,
      title: 'Integrity',
      description:
        'Honesty, transparency, and ethical practices form the foundation of our relationships with clients, partners, and the communities we serve.',
    },
  ]

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

  const titleVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  }

  const floatingVariants = {
    animate: {
      y: [-5, 5, -5],
      rotate: [0, 2, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      },
    },
  }

  return (
    <section className="relative bg-black py-20 px-6 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 20%, rgba(245, 158, 11, 0.1) 0%, transparent 50%),
              radial-gradient(circle at 70% 80%, rgba(245, 158, 11, 0.08) 0%, transparent 50%),
              radial-gradient(circle at 90% 40%, rgba(245, 158, 11, 0.06) 0%, transparent 50%)
            `,
          }}
        />
      </div>

      {/* Floating geometric elements */}
      <motion.div
        className="absolute top-20 left-8 w-20 h-20 border border-amber-400/10 rotate-45 rounded-lg"
        variants={floatingVariants}
        animate="animate"
      />
      <motion.div
        className="absolute bottom-32 right-12 w-32 h-32 border-2 border-amber-400/10 rounded-full"
        variants={floatingVariants}
        animate="animate"
        style={{ animationDelay: '2s' }}
      />
      <motion.div
        className="absolute top-1/2 left-4 w-1 h-32 bg-gradient-to-b from-amber-400/20 via-transparent to-amber-400/20"
        initial={{ opacity: 0, scaleY: 0 }}
        whileInView={{ opacity: 1, scaleY: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
      />

      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        {/* Header */}
        <div className="text-center mb-20">
          <motion.div className="inline-block mb-6" variants={titleVariants}>
            <span className="px-4 py-2 bg-amber-400/10 text-amber-400 text-sm font-medium rounded-full border border-amber-400/20">
              Our Values
            </span>
          </motion.div>

          <motion.h2
            className="text-4xl lg:text-6xl font-light text-white mb-8 leading-tight"
            variants={titleVariants}
          >
            What <span className="text-amber-400 font-bold">Drives Us</span>
          </motion.h2>

          <motion.div className="relative max-w-3xl mx-auto" variants={titleVariants}>
            <div className="absolute -left-6 top-0 w-2 h-full bg-gradient-to-b from-amber-400 via-amber-500 to-transparent opacity-20 rounded-full" />
            <p className="text-xl text-gray-300 leading-relaxed font-light pl-10">
              Our core values shape every decision we make and guide us in creating architectural
              experiences that stand the test of time. These principles are not just words—they're
              the foundation of our practice.
            </p>
          </motion.div>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <FeatureCard
              key={value.title}
              icon={value.icon}
              title={value.title}
              description={value.description}
              index={index}
            />
          ))}
        </div>

        {/* Bottom CTA Section */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            type: 'spring',
            stiffness: 80,
            damping: 15,
            duration: 0.8,
            delay: 0.5,
          }}
        >
          <div className="relative inline-block">
            <div className="absolute inset-0 bg-amber-400/5 rounded-2xl blur-xl" />
            <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl p-12 max-w-2xl">
              <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                Ready to bring your vision to life?
              </h3>
              <p className="text-gray-300 mb-8 text-lg">
                Let's work together to create something extraordinary that reflects your unique
                story and needs.
              </p>
              <motion.button
                className="inline-flex items-center px-8 py-4 bg-amber-400 text-black font-semibold rounded-full hover:bg-amber-300 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-amber-400/20"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}
