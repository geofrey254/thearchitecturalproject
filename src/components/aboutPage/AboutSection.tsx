// components/AboutSection.tsx
'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function AboutSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.1,
      },
    },
  }

  const fadeUpVariants = {
    hidden: {
      opacity: 0,
      y: 60,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 15,
        duration: 0.8,
      },
    },
  }

  const slideInVariants = {
    hidden: {
      opacity: 0,
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: 'spring',
        stiffness: 100,
        damping: 12,
        duration: 0.8,
      },
    },
  }

  return (
    <section className="relative bg-black py-20 px-6 lg:py-32">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
              linear-gradient(45deg, rgba(245, 158, 11, 0.1) 25%, transparent 25%),
              linear-gradient(-45deg, rgba(245, 158, 11, 0.1) 25%, transparent 25%),
              linear-gradient(45deg, transparent 75%, rgba(245, 158, 11, 0.1) 75%),
              linear-gradient(-45deg, transparent 75%, rgba(245, 158, 11, 0.1) 75%)
            `,
            backgroundSize: '60px 60px',
            backgroundPosition: '0 0, 0 30px, 30px -30px, -30px 0px',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* First Section: Our Story */}
        <motion.div
          className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-32"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Content */}
          <div>
            <motion.h2
              className="text-4xl lg:text-5xl font-light text-white mb-8 leading-tight"
              variants={fadeUpVariants}
            >
              Our <span className="text-amber-400 font-bold">Story</span>
            </motion.h2>

            <motion.div
              className="space-y-6 text-gray-300 leading-relaxed"
              variants={fadeUpVariants}
            >
              <p className="text-lg">
                Founded on the belief that architecture has the power to transform lives, The
                Architectural Project has been creating meaningful spaces for over a decade. Our
                journey began with a simple vision: to design buildings that don't just serve their
                purpose, but elevate the human experience.
              </p>

              <p className="text-lg">
                From residential homes that become sanctuaries to commercial spaces that inspire
                productivity, we approach each project with fresh eyes and an unwavering commitment
                to excellence. Our multidisciplinary team combines traditional craftsmanship with
                innovative technology to deliver results that exceed expectations.
              </p>
            </motion.div>

            <motion.div className="mt-8 flex items-center space-x-8" variants={fadeUpVariants}>
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">150+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="w-px h-12 bg-amber-400/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">12</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="w-px h-12 bg-amber-400/20" />
              <div className="text-center">
                <div className="text-3xl font-bold text-amber-400">98%</div>
                <div className="text-sm text-gray-400">Client Satisfaction</div>
              </div>
            </motion.div>
          </div>

          {/* Image */}
          <motion.div className="relative" variants={slideInVariants}>
            <div className="relative">
              <Image
                src="/1.jpg"
                width={600}
                height={400}
                alt="Our architectural process"
                className="aspect-[3/2] rounded-2xl object-cover shadow-2xl border border-amber-400/20"
              />
              <div className="absolute -top-4 -left-4 w-full h-full bg-amber-400/10 rounded-2xl -z-10" />
            </div>
          </motion.div>
        </motion.div>

        {/* Second Section: Our Approach */}
        <motion.div
          className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Image (Left on desktop) */}
          <motion.div className="relative order-2 lg:order-1" variants={slideInVariants}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <Image
                  src="/1.jpg"
                  width={300}
                  height={200}
                  alt="Design process 1"
                  className="aspect-[3/2] rounded-xl object-cover shadow-lg border border-amber-400/10"
                />
                <Image
                  src="/1.jpg"
                  width={300}
                  height={300}
                  alt="Design process 2"
                  className="aspect-square rounded-xl object-cover shadow-lg border border-amber-400/10"
                />
              </div>
              <div className="space-y-4 pt-8">
                <Image
                  src="/1.jpg"
                  width={300}
                  height={300}
                  alt="Design process 3"
                  className="aspect-square rounded-xl object-cover shadow-lg border border-amber-400/10"
                />
                <Image
                  src="/1.jpg"
                  width={300}
                  height={200}
                  alt="Design process 4"
                  className="aspect-[3/2] rounded-xl object-cover shadow-lg border border-amber-400/10"
                />
              </div>
            </div>
          </motion.div>

          {/* Content (Right on desktop) */}
          <div className="order-1 lg:order-2">
            <motion.h2
              className="text-4xl lg:text-5xl font-light text-white mb-8 leading-tight"
              variants={fadeUpVariants}
            >
              Our <span className="text-amber-400 font-bold">Approach</span>
            </motion.h2>

            <motion.div
              className="space-y-6 text-gray-300 leading-relaxed"
              variants={fadeUpVariants}
            >
              <p className="text-lg">
                We believe that great architecture emerges from the intersection of functionality,
                beauty, and sustainability. Our design process is collaborative, iterative, and
                deeply rooted in understanding the unique needs of each client and context.
              </p>

              <p className="text-lg">
                Every project begins with listening. We immerse ourselves in your vision, study the
                site's characteristics, and explore how the space will be used. This foundation
                informs every decision, from the initial concept to the final construction details.
              </p>
            </motion.div>

            <motion.div className="mt-8 space-y-4" variants={fadeUpVariants}>
              {[
                'Research & Discovery',
                'Conceptual Design',
                'Development & Refinement',
                'Construction & Delivery',
              ].map((phase, index) => (
                <div key={phase} className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-amber-400 text-black font-bold rounded-full flex items-center justify-center text-sm">
                    {index + 1}
                  </div>
                  <span className="text-gray-300 text-lg">{phase}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
