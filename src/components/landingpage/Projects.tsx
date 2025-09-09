'use client'
import Image from 'next/image'
import { motion } from 'framer-motion'

const PROJECTS = [
  {
    id: 1,
    title: 'Modern Residential Complex',
    category: 'Residential',
    location: 'Nairobi, Kenya',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
  },
  {
    id: 2,
    title: 'Corporate Headquarters',
    category: 'Commercial',
    location: 'Mombasa, Kenya',
    year: '2023',
    image:
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
  },
  {
    id: 3,
    title: 'Sustainable Community Center',
    category: 'Public',
    location: 'Kisumu, Kenya',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2340&q=80',
  },
]

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

const projectsGridVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
}

const projectCardVariants = {
  hidden: {
    opacity: 0,
    y: 100,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: 'spring' as const,
      stiffness: 60,
      damping: 15,
      duration: 0.8,
    },
  },
}

const bottomElementVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring' as const,
      stiffness: 80,
      damping: 15,
      duration: 0.6,
      delay: 1.2,
    },
  },
}

export default function Projects() {
  return (
    <section className="bg-black py-24 px-8 relative overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left: Badge */}
          <div className="lg:col-span-3 flex justify-start lg:sticky lg:top-8">
            <motion.div className="group relative" variants={badgeVariants}>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

              {/* Badge container */}
              <div className="relative bg-white/80 backdrop-blur-sm border border-amber-400/30 rounded-2xl px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-amber-400 rounded-full animate-ping opacity-20"></div>
                  </div>
                  <span className="text-gray-800 font-bold text-sm tracking-widest uppercase">
                    Our Projects
                  </span>
                </div>

                {/* Architectural detail line */}
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
              </div>
            </motion.div>
          </div>

          {/* Right: Title and Description */}
          <div className="lg:col-span-9">
            <div className="mb-20">
              <motion.h2
                className="text-5xl lg:text-7xl font-light text-white mb-8 leading-[0.9] tracking-tight"
                variants={titleVariants}
              >
                Creative
                <span className="block text-amber-500 font-bold mt-2">Projects That Define</span>
                <span className="block text-white font-medium">Our Style</span>
              </motion.h2>

              <motion.div className="relative max-w-3xl" variants={descriptionVariants}>
                <div className="absolute md:-left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-400 via-amber-500 to-transparent opacity-30"></div>
                <p className="text-lg text-gray-50 leading-relaxed font-light pl-8">
                  Explore our portfolio of distinctive architectural projects that showcase our
                  commitment to innovative design, sustainable construction, and spaces that inspire
                  communities across Kenya.
                </p>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          className="mt-4 px-2 items-start"
          variants={projectsGridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {/* Left Projects */}
          <div className=" grid grid-cols-1 lg:grid-cols-3 space-x-8">
            {PROJECTS.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>

        {/* Bottom architectural element */}
        <motion.div
          className="mt-20 flex justify-center"
          variants={bottomElementVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.8 }}
        >
          <div className="flex items-center space-x-4 opacity-30">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-gray-400"></div>
            <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
            <div className="w-32 h-px bg-gray-400"></div>
            <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-gray-400"></div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}

function ProjectCard({ project }: { project: (typeof PROJECTS)[0]; index: number }) {
  return (
    <motion.div
      className="relative"
      variants={projectCardVariants}
      whileHover={{
        y: -10,
        scale: 1.02,
        transition: {
          type: 'spring',
          stiffness: 300,
          damping: 20,
        },
      }}
    >
      {/* Image container */}
      <motion.div
        className="relative w-full h-[40vh] md:h-[80vh]"
        whileHover={{ scale: 1.05 }}
        transition={{ type: 'spring', stiffness: 200, damping: 20 }}
      >
        <Image
          fill
          src={project.image}
          alt={project.title}
          className="rounded-2xl object-cover transition-transform duration-700"
        />

        {/* Category badge */}
        <motion.div
          className="absolute top-4 left-4"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <div className="bg-black/40 backdrop-blur-sm px-3 py-2 rounded-full border border-gray-200/90 flex justify-center items-center">
            <span className="text-xs font-medium text-white tracking-wide uppercase">
              {project.category}
            </span>
          </div>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        className="my-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        <h3 className="text-2xl font-semibold text-white/60 md:mb-3 group-hover:text-amber-600 transition-colors duration-300">
          {project.title}
        </h3>

        <div className="text-lg text-white/30">
          <h4 className="font-medium -mb-2">{project.location}</h4>
          <h4 className="font-medium">{project.year}</h4>
        </div>
      </motion.div>
    </motion.div>
  )
}
