'use client'
import { useState, useRef } from 'react'
import { motion, useScroll, useTransform, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { BsArrowUpRight, BsX, BsArrowRight } from 'react-icons/bs'

const projects = [
  {
    id: 1,
    title: 'Modern Luxury Residence',
    category: 'Residential',
    location: 'Beverly Hills, CA',
    year: '2024',
    area: '4,500 sq ft',
    image: '/1.jpg',
    description:
      'A contemporary masterpiece blending minimalist aesthetics with luxurious comfort. This residence features floor-to-ceiling windows, sustainable materials, and smart home integration throughout. The open-plan living spaces flow seamlessly into landscaped gardens, creating a harmonious connection between indoor and outdoor environments.',
    tags: ['Modern', 'Luxury', 'Sustainable'],
    featured: true,
  },
  {
    id: 2,
    title: 'Urban Loft Transformation',
    category: 'Commercial',
    location: 'Downtown NYC',
    year: '2023',
    area: '2,800 sq ft',
    image: '/2.jpg',
    description:
      'Industrial heritage meets contemporary design in this stunning loft conversion. Exposed brick walls, steel beams, and concrete floors provide the perfect backdrop for modern furnishings and artistic installations. The space balances raw industrial elements with refined contemporary touches.',
    tags: ['Industrial', 'Urban', 'Adaptive Reuse'],
    featured: false,
  },
  {
    id: 3,
    title: 'Eco-Conscious Family Home',
    category: 'Residential',
    location: 'Portland, OR',
    year: '2024',
    area: '3,200 sq ft',
    image: '/3.jpg',
    description:
      'Sustainable living redefined through biophilic design and smart technology. This family home incorporates natural materials, energy-efficient systems, and abundant natural light. Living walls and indoor gardens create a connection to nature while advanced home automation ensures optimal comfort and efficiency.',
    tags: ['Sustainable', 'Biophilic', 'Smart Home'],
    featured: true,
  },
  {
    id: 4,
    title: 'Corporate Headquarters',
    category: 'Commercial',
    location: 'San Francisco, CA',
    year: '2023',
    area: '12,000 sq ft',
    image: '/4.jpg',
    description:
      'A workspace that inspires innovation through thoughtful design and natural light. Open collaborative areas flow into private focus zones, while wellness amenities and sustainable features create an environment that supports both productivity and employee wellbeing.',
    tags: ['Corporate', 'Innovation', 'Wellness'],
    featured: false,
  },
  {
    id: 5,
    title: 'Boutique Hotel Interiors',
    category: 'Hospitality',
    location: 'Miami, FL',
    year: '2024',
    area: '8,500 sq ft',
    image: '/5.jpg',
    description:
      'Tropical modernism meets luxury hospitality in this stunning boutique hotel. Each space tells a story of local culture while providing world-class comfort. Custom furnishings, locally-sourced materials, and artistic lighting create an unforgettable guest experience.',
    tags: ['Hospitality', 'Tropical', 'Luxury'],
    featured: true,
  },
  {
    id: 6,
    title: 'Art Gallery Renovation',
    category: 'Cultural',
    location: 'Los Angeles, CA',
    year: '2023',
    area: '5,600 sq ft',
    image: '/6.jpg',
    description:
      "Reimagining exhibition space to enhance the dialogue between art and architecture. Clean lines, neutral palettes, and carefully controlled lighting create the perfect backdrop for artistic expression while respecting the building's historic character.",
    tags: ['Cultural', 'Exhibition', 'Minimalist'],
    featured: false,
  },
]

const categories = ['All', 'Residential', 'Commercial', 'Hospitality', 'Cultural']

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [expandedProject, setExpandedProject] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const heroRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const isInView = useInView(heroRef, { once: true, margin: '-10%' })
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])

  const filteredProjects =
    selectedCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === selectedCategory)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  const heroVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  return (
    <div ref={containerRef} className="relative bg-white min-h-screen">
      {/* Minimal Background */}
      <motion.div className="absolute inset-0 overflow-hidden" style={{ y: backgroundY }}>
        <div
          className="h-full w-full opacity-[0.03]"
          style={{
            backgroundImage: `
              radial-gradient(circle at 30% 40%, rgba(245, 158, 11, 0.15) 0%, transparent 60%),
              radial-gradient(circle at 70% 80%, rgba(245, 158, 11, 0.1) 0%, transparent 50%)
            `,
          }}
        />
      </motion.div>

      <div className="relative z-10 px-4 md:px-8 lg:px-12 py-12 lg:py-20">
        {/* Projects Grid */}
        <motion.div
          className="max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 lg:gap-8 space-y-6 lg:space-y-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                isExpanded={expandedProject === project.id}
                onToggleExpand={setExpandedProject}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}

function ProjectCard({
  project,
  index,
  isExpanded,
  onToggleExpand,
}: {
  project: any
  index: number
  isExpanded: boolean
  onToggleExpand: (id: number | null) => void
}) {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: '-20%' })

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: 'spring',
        stiffness: 80,
        damping: 20,
        duration: 0.8,
        delay: index * 0.1,
      },
    },
  }

  const handleToggle = () => {
    onToggleExpand(isExpanded ? null : project.id)
  }

  return (
    <motion.div
      ref={cardRef}
      className="break-inside-avoid mb-6 lg:mb-8"
      variants={cardVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
    >
      <div className="group relative bg-white rounded-2xl lg:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-700 border border-gray-100/50">
        {/* Image with Text Overlay */}
        <div className="relative overflow-hidden">
          <motion.div
            className={`relative ${project.featured ? 'aspect-[4/5]' : 'aspect-[3/4]'}`}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-all duration-700"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />

            {/* Sophisticated overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

            {/* Featured indicator */}
            {project.featured && (
              <motion.div
                className="absolute top-4 right-4 w-3 h-3 bg-amber-400 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [1, 0.7, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              />
            )}

            {/* Text Overlay */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
              <motion.div
                className="space-y-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + index * 0.05, duration: 0.6 }}
              >
                {/* Category */}
                <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full border border-white/30">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-white leading-tight">
                  {project.title}
                </h3>

                {/* Meta info */}
                <div className="flex items-center gap-4 text-white/80 text-sm">
                  <span>{project.location}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                  <span>•</span>
                  <span>{project.area}</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Minimal Action Section */}
        <div className="p-6 lg:p-8">
          <div className="flex items-center justify-between">
            {/* Tags - minimal display */}
            <div className="flex gap-1.5">
              {project.tags.slice(0, 2).map((tag: string) => (
                <span key={tag} className="w-2 h-2 bg-amber-400/30 rounded-full" title={tag} />
              ))}
              {project.tags.length > 2 && (
                <span
                  className="w-2 h-2 bg-gray-300 rounded-full"
                  title={`+${project.tags.length - 2} more`}
                />
              )}
            </div>

            {/* Expand Button */}
            <motion.button
              onClick={handleToggle}
              className="group relative flex items-center gap-3 px-4 py-2 text-gray-900 font-medium text-sm tracking-wide hover:text-amber-600 transition-colors duration-300"
              whileHover={{ x: 4 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>{isExpanded ? 'Less' : 'More'}</span>
              <motion.div animate={{ rotate: isExpanded ? 180 : 0 }} transition={{ duration: 0.3 }}>
                {isExpanded ? <BsX className="w-4 h-4" /> : <BsArrowRight className="w-4 h-4" />}
              </motion.div>
            </motion.button>
          </div>

          {/* Expandable Description */}
          <AnimatePresence>
            {isExpanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="overflow-hidden"
              >
                <motion.div
                  className="pt-6 space-y-6"
                  initial={{ y: -20 }}
                  animate={{ y: 0 }}
                  exit={{ y: -20 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  {/* Separator line */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent" />

                  {/* Description */}
                  <p className="text-gray-600 leading-relaxed text-base lg:text-lg">
                    {project.description}
                  </p>

                  {/* All Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 bg-gray-50 text-gray-600 text-xs font-medium rounded-full border border-gray-200 hover:border-amber-400/30 hover:bg-amber-50 hover:text-amber-600 transition-all duration-200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* View Project Link */}
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    <Link
                      href={`/projects/${project.id}`}
                      className="group inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-amber-400 to-amber-500 text-white font-semibold rounded-full hover:shadow-lg hover:shadow-amber-400/30 transition-all duration-300"
                    >
                      <span className="tracking-wide">View Full Project</span>
                      <motion.span whileHover={{ rotate: 45 }} transition={{ duration: 0.2 }}>
                        <BsArrowUpRight className="w-4 h-4" />
                      </motion.span>
                    </Link>
                  </motion.div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Subtle hover glow */}
        <motion.div
          className="absolute -inset-0.5 bg-gradient-to-r from-amber-400/0 via-amber-400/20 to-amber-400/0 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm"
          animate={isExpanded ? { opacity: 0.3 } : {}}
        />
      </div>
    </motion.div>
  )
}
