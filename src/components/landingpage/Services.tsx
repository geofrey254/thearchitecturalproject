'use client'
import React, { useState } from 'react'
import Image from 'next/image'

export default function ServicesSection() {
  const services = [
    {
      number: '01',
      title: 'Residential Interior Design',
      description:
        'Transforming homes with innovative spatial solutions and personalized aesthetics. Our residential design approach focuses on creating spaces that reflect your personality while maximizing functionality and comfort. We work closely with homeowners to understand their lifestyle needs and translate them into beautiful, livable spaces.',
      features: [
        'Custom space planning and layout optimization',
        'Personalized color schemes and material selection',
        'Furniture selection and custom millwork design',
        'Lighting design and fixture specification',
      ],
    },
    {
      number: '02',
      title: 'Outdoor & Landscape Design',
      description:
        'Creating harmonious outdoor environments that extend your living space seamlessly into nature. Our landscape designs integrate architectural elements with natural beauty to create outdoor sanctuaries that complement your interior spaces.',
      features: [
        'Garden design and plant selection',
        'Outdoor living space planning',
        'Hardscape design and installation',
        'Irrigation and lighting systems',
      ],
    },
    {
      number: '03',
      title: 'Interior Design Consultation',
      description:
        'Professional guidance on concepts, color schemes and material selection to help you make informed design decisions. Our consultation services provide expert advice tailored to your project scope and budget.',
      features: [
        'Design concept development',
        'Color palette and material guidance',
        'Space planning recommendations',
        'Budget and timeline planning',
      ],
    },
    {
      number: '04',
      title: 'Commercial Interior Design',
      description:
        'Crafting functional and inspiring commercial spaces for business success. We understand that commercial spaces need to balance aesthetics with productivity, creating environments that enhance both employee satisfaction and customer experience.',
      features: [
        'Office space planning and design',
        'Retail and hospitality interiors',
        'Brand integration and identity',
        'Ergonomic and productivity optimization',
      ],
    },
    {
      number: '05',
      title: 'Renovation and Remodeling',
      description:
        'Revitalizing existing spaces with contemporary design solutions while preserving the character and integrity of your property. Our renovation expertise transforms outdated spaces into modern, functional environments.',
      features: [
        'Structural assessment and planning',
        'Historic preservation considerations',
        'Modern system integration',
        'Phased construction management',
      ],
    },
    {
      number: '06',
      title: 'Interior 2D/3D Layouts',
      description:
        'Detailed visualizations bringing your design concepts to life through cutting-edge technology. Our visualization services help you see and understand your space before construction begins, ensuring perfect results.',
      features: [
        '3D modeling and rendering',
        'Virtual reality walkthroughs',
        'Technical drawings and specifications',
        'Material and finish visualization',
      ],
    },
  ]

  const stats = [
    {
      number: '2013',
      label: 'Years experience',
      description: 'Improving homes with expert craftsmanship for years',
    },
    {
      number: '+190',
      label: 'Projects completed',
      description: 'Over 250 successful projects delivered with quality and care',
    },
    {
      number: '+260',
      label: 'Skilled Tradespeople',
      description: 'Our team of experts ensures top-quality results',
    },
    {
      number: '+328',
      label: 'Client satisfaction',
      description: 'All of our clients are satisfied with our work and service',
    },
  ]

  const [selectedService, setSelectedService] = useState(0)

  return (
    <section className="bg-white py-24 px-4 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-3">
        <div
          className="h-full w-full"
          style={{
            backgroundImage: `
            linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)
          `,
            backgroundSize: '60px 60px',
          }}
        ></div>
      </div>

      {/* Geometric Elements */}
      <div className="absolute top-20 right-12 w-40 h-40 border border-amber-400/15 rotate-45 transform"></div>
      <div className="absolute bottom-32 left-16 w-20 h-20 bg-amber-400/5 rotate-12 transform"></div>
      <div className="absolute top-1/3 left-8 w-px h-48 bg-gradient-to-b from-transparent via-amber-400/20 to-transparent"></div>

      {/* Floating Image */}

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header Section */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20">
          {/* Left: Badge */}
          <div className="lg:col-span-3 flex justify-center lg:justify-start">
            <div className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-2xl blur-xl opacity-20 group-hover:opacity-30 transition-opacity duration-500"></div>

              <div className="relative bg-white/90 backdrop-blur-sm border border-amber-400/30 rounded-2xl px-8 py-4 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-1">
                <div className="flex items-center space-x-4">
                  <div className="relative">
                    <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                    <div className="absolute inset-0 w-3 h-3 bg-amber-400 rounded-full animate-ping opacity-20"></div>
                  </div>
                  <span className="text-gray-800 font-bold text-sm tracking-widest uppercase">
                    Our Services
                  </span>
                </div>
                <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-amber-400/50 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Right: Title and Description */}
          <div className="lg:col-span-9">
            <h2 className="text-5xl lg:text-7xl font-light text-gray-900 mb-8 leading-[0.9] tracking-tight">
              Explore Our
              <span className="block text-amber-500 font-bold mt-2">Comprehensive</span>
              <span className="block text-gray-800 font-medium">Interior Design Services</span>
            </h2>

            <div className="relative max-w-3xl">
              <div className="absolute md:-left-4 top-0 w-1 h-full bg-gradient-to-b from-amber-400 via-amber-500 to-transparent opacity-30"></div>
              <p className="text-lg text-gray-600 leading-relaxed font-light pl-8">
                We specialize in transforming visions into reality. Explore our portfolio of
                innovative architectural and interior design projects crafted with precision and
                attention to every detail.
              </p>
            </div>
          </div>
        </div>

        {/* Interactive Services Section */}
        <div className="mb-24">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
            {/* Left: Service Content Display */}
            <div className="lg:col-span-7">
              <div className="relative bg-gray-50/80 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-8 lg:p-12 min-h-[500px]">
                {/* Selected Service Content */}
                <div className="relative">
                  {/* Service Number */}
                  <div className="mb-8">
                    <span className="text-8xl font-light text-amber-400/20">
                      {services[selectedService].number}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-6 leading-tight">
                    {services[selectedService].title}
                  </h3>

                  {/* Service Description */}
                  <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
                    {services[selectedService].description}
                  </p>

                  {/* Service Features */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4">Key Features:</h4>
                    {services[selectedService].features.map((feature, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-600 leading-relaxed font-light">{feature}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-8 right-8 w-16 h-16 border border-amber-400/10 rotate-45"></div>
                <div className="absolute bottom-0 left-12 right-12 h-px bg-gradient-to-r from-transparent via-amber-400/30 to-transparent"></div>
              </div>
            </div>

            {/* Right: Service Navigation */}
            <div className="lg:col-span-5">
              <div className="space-y-4">
                {services.map((service, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedService(index)}
                    className={`w-full text-left p-6 rounded-xl border transition-all duration-300 group ${
                      selectedService === index
                        ? 'bg-white border-amber-400/30 shadow-xl'
                        : 'bg-gray-50/50 border-gray-200/30 hover:bg-white hover:shadow-lg'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <span
                          className={`text-2xl font-light transition-colors duration-300 ${
                            selectedService === index
                              ? 'text-amber-500'
                              : 'text-gray-400 group-hover:text-amber-400'
                          }`}
                        >
                          {service.number}
                        </span>
                        <div>
                          <h4
                            className={`font-semibold transition-colors duration-300 ${
                              selectedService === index
                                ? 'text-gray-900'
                                : 'text-gray-700 group-hover:text-gray-900'
                            }`}
                          >
                            {service.title}
                          </h4>
                        </div>
                      </div>

                      <div
                        className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                          selectedService === index
                            ? 'bg-amber-400'
                            : 'bg-gray-300 group-hover:bg-amber-400/50'
                        }`}
                      ></div>
                    </div>

                    {/* Active indicator line */}
                    <div
                      className={`mt-4 h-px bg-gradient-to-r from-amber-400 to-transparent transition-opacity duration-300 ${
                        selectedService === index ? 'opacity-100' : 'opacity-0'
                      }`}
                    ></div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="relative">
          {/* Stats Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-4 mb-8">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-amber-400"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-amber-400"></div>
            </div>
            <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-4">
              Proven <span className="text-amber-500 font-semibold">Excellence</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our track record speaks for itself through years of dedicated service and countless
              satisfied clients.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center relative">
                {/* Background glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative p-8">
                  {/* Number */}
                  <div className="mb-4">
                    <span className="text-5xl lg:text-6xl font-light text-gray-900 group-hover:text-amber-500 transition-colors duration-300">
                      {stat.number}
                    </span>
                  </div>

                  {/* Label */}
                  <h4 className="text-lg font-semibold text-gray-800 mb-3 tracking-wide">
                    {stat.label}
                  </h4>

                  {/* Description */}
                  <p className="text-sm text-gray-600 leading-relaxed font-light">
                    {stat.description}
                  </p>

                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 w-6 h-6 border border-amber-400/10 rotate-45 group-hover:border-amber-400/30 transition-colors duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative element */}
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
