'use client'
import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section className="bg-gray-50 py-24 px-8 relative overflow-hidden ">
      {/* Architectural Grid Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)
          `,
            backgroundSize: '40px 40px',
          }}
        ></div>
      </div>

      {/* Geometric Pattern Overlays */}
      <div className="absolute top-12 left-8 w-32 h-32 border-2 border-amber-400/20 rotate-45 transform"></div>
      <div className="absolute top-32 right-16 w-24 h-24 border border-gray-300/30 rotate-12 transform"></div>
      <div className="absolute bottom-24 left-1/4 w-16 h-16 bg-amber-400/10 rotate-45 transform"></div>

      {/* Architectural Line Elements */}
      <div className="absolute top-0 left-1/3 w-px h-40 bg-gradient-to-b from-transparent via-amber-400/30 to-transparent"></div>
      <div className="absolute bottom-0 right-1/4 w-px h-32 bg-gradient-to-t from-transparent via-gray-400/30 to-transparent"></div>
      <div className="absolute top-1/2 left-0 h-px w-32 bg-gradient-to-r from-transparent via-amber-400/20 to-transparent"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left: Badge */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start lg:sticky lg:top-8">
            <div className="group relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

              {/* Badge container */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
                }}
                transition={{
                  type: 'spring',
                  duration: 0.6,
                  bounce: 0.3,
                  delay: 0.2,
                  stiffness: 100,
                }}
                initial={'hidden'}
                whileInView="visible"
                className="relative bg-white/80 backdrop-blur-sm border border-amber-400/30 rounded-2xl px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-amber-400 rounded-full animate-ping opacity-20"></div>
                  </div>
                  <span className="text-gray-800 font-bold text-sm tracking-widest uppercase">
                    Who We Are
                  </span>
                </div>

                {/* Architectural detail line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
              </motion.div>
            </div>
          </div>

          {/* Right: Title and Description */}
          <div className="lg:col-span-9">
            <div className="mb-20">
              <motion.h2
                variants={{
                  hidden: { opacity: 0, x: 20 },
                  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
                }}
                transition={{
                  type: 'inertia',
                  duration: 0.6,
                  bounce: 0.2,
                  delay: 0.2,
                  stiffness: 100,
                }}
                initial={'hidden'}
                whileInView="visible"
                className="text-5xl lg:text-7xl font-light text-gray-900 mb-8 leading-[0.9] tracking-tight"
              >
                Experience
                <span className="block text-amber-500 font-bold mt-2">The Art Of</span>
                <span className="block text-gray-800 font-medium">Architectural Design</span>
              </motion.h2>

              <div className="relative max-w-3xl">
                <motion.div
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.6 } },
                  }}
                  transition={{
                    type: 'spring',
                    duration: 0.6,
                    bounce: 0.2,
                    delay: 0.2,
                    stiffness: 100,
                  }}
                  initial={'hidden'}
                  whileInView="visible"
                  className="absolute md:-left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-400 via-amber-500 to-transparent opacity-30"
                ></motion.div>
                <motion.p
                  variants={{
                    hidden: { opacity: 0, y: 20 },
                    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                  }}
                  transition={{
                    type: 'inertia',
                    duration: 0.6,
                    bounce: 0.2,
                    delay: 0.2,
                    stiffness: 100,
                  }}
                  initial={'hidden'}
                  whileInView="visible"
                  className="text-lg text-gray-600 leading-relaxed font-light pl-8"
                >
                  We are a distinguished collective of architects, designers, and construction
                  professionals dedicated to transforming spaces through innovative design
                  solutions. Our commitment to architectural excellence, sustainable practices, and
                  precision craftsmanship defines every project we undertake.
                </motion.p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom architectural element */}
        <div className="mt-2 flex justify-center">
          <div className="flex items-center space-x-4 opacity-30">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            <div className="w-32 h-px bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
