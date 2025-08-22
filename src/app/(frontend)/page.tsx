import React from 'react'
import Hero from '@/components/landingpage/Hero'
import AboutSection from '@/components/landingpage/AboutSection'
import Projects from '@/components/landingpage/Projects'
import ServicesSection from '@/components/landingpage/Services'
import CTA from '@/components/landingpage/CTA'
import Image from 'next/image'

export default function page() {
  return (
    <div>
      <Hero />
      <AboutSection />
      <Projects />

      <ServicesSection />
      <CTA />
    </div>
  )
}
