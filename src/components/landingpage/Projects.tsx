import Image from 'next/image'
import React from 'react'

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

export default function Projects() {
  return (
    <section className="bg-black py-24 px-4 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left: Badge */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start lg:sticky lg:top-8">
            <div className="group relative">
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
            </div>
          </div>

          {/* Right: Title and Description */}
          <div className="lg:col-span-9">
            <div className="mb-20">
              <h2 className="text-5xl lg:text-7xl font-light text-white mb-8 leading-[0.9] tracking-tight">
                Creative
                <span className="block text-amber-500 font-bold mt-2">Projects That Define</span>
                <span className="block text-white font-medium">Our Style</span>
              </h2>

              <div className="relative max-w-3xl">
                <div className="absolute md:-left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-400 via-amber-500 to-transparent opacity-30"></div>
                <p className="text-lg text-gray-50 leading-relaxed font-light pl-8">
                  Explore our portfolio of distinctive architectural projects that showcase our
                  commitment to innovative design, sustainable construction, and spaces that inspire
                  communities across Kenya.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="mt-4 px-2 items-start">
          {/* Left Projects */}
          <div className=" grid grid-cols-1 lg:grid-cols-3 space-x-8">
            {PROJECTS.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </div>

        {/* Bottom architectural element */}
        <div className="mt-20 flex justify-center">
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

function ProjectCard({ project, index }: { project: (typeof PROJECTS)[0]; index: number }) {
  return (
    <div className="relative" style={{ animationDelay: `${index * 200}ms` }}>
      {/* Image container */}
      <div className="relative w-full h-[40vh] md:h-[80vh]">
        <Image
          fill
          src={project.image}
          alt={project.title}
          className="rounded-2xl object-cover transition-transform duration-700"
        />

        {/* Category badge */}
        <div className="absolute top-4 left-4">
          <div className="backdrop-blur-sm px-3 py-1 rounded-full border border-gray-200/90">
            <span className="text-xs font-medium text-white tracking-wide uppercase">
              {project.category}
            </span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="my-4">
        <h3 className="text-2xl font-semibold text-white/60 md:mb-3 group-hover:text-amber-600 transition-colors duration-300">
          {project.title}
        </h3>

        <div className="text-lg text-white/30">
          <h4 className="font-medium -mb-2">{project.location}</h4>
          <h4 className="font-medium">{project.year}</h4>
        </div>
      </div>
    </div>
  )
}
