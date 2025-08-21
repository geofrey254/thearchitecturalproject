import React from 'react'

const SERVICES = [
  {
    title: 'Architectural Design',
    description: 'Innovative and sustainable building designs tailored to your needs.',
    icon: '🏛️',
  },
  {
    title: 'Project Management',
    description: 'End-to-end management ensuring timely and quality project delivery.',
    icon: '📋',
  },
  {
    title: 'Project Manager',
    description: 'End-to-end management ensuring timely and quality project delivery.',
    icon: '📋',
  },
  {
    title: 'Staff Management',
    description: 'End-to-end management ensuring timely and quality project delivery.',
    icon: '📋',
  },
]

export default function AboutSection() {
  return (
    <section className="bg-white py-20 px-4 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-400 rounded-full opacity-5 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-black rounded-full opacity-3 translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start">
          {/* Left: Badge */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start lg:sticky lg:top-8">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-500 rounded-2xl blur-lg opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative border border-amber-400/20 rounded-full px-6 py-2 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></div>
                  <span className="text-black font-semibold text-sm tracking-wide">Who We Are</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Title, Description, Services */}
          <div className="lg:col-span-9">
            {/* Title and Description */}
            <div className="mb-16">
              <h2 className="text-5xl lg:text-6xl font-bold text-black mb-8 leading-tight">
                Experience
                <span className="relative inline-block ml-4 text-amber-400">
                  The Art Of Interior
                </span>{' '}
                Design
              </h2>
              <p className="text-base text-gray-600 leading-relaxed max-w-2xl">
                We are a passionate team of architects and designers dedicated to transforming
                spaces and creating inspiring environments. Our commitment to excellence and
                innovation drives every project we undertake.
              </p>
            </div>
          </div>

          {/* Services Cards */}
          <div className="lg:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((service, index) => (
              <div
                key={service.title}
                className="group relative"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Card background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/10 to-black/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-105"></div>

                {/* Main card */}
                <div className="relative bg-white border border-gray-100 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden">
                  {/* Decorative corner element */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-amber-400/10 to-transparent rounded-bl-full"></div>

                  {/* Icon */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400/20 to-amber-500/20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <span className="text-3xl filter grayscale group-hover:grayscale-0 transition-all duration-300">
                        {service.icon}
                      </span>
                    </div>
                    <div className="absolute -top-1 -left-1 w-4 h-4 bg-amber-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-black mb-4 group-hover:text-amber-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-base">{service.description}</p>

                  {/* Hover indicator */}
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
