import React from 'react'
import Hero from '@/components/landingpage/Hero'
import AboutSection from '@/components/landingpage/AboutSection'
import Projects from '@/components/landingpage/Projects'
import ServicesSection from '@/components/landingpage/Services'
import CTA from '@/components/landingpage/CTA'
import { Video } from '@/components/landingpage/Video'
import Floating from '@/components/landingpage/Floating'

export default function page() {
  return (
    <>
      <Hero />
      <AboutSection />
      <Projects />
      <ServicesSection />
      <Floating />
      <CTA />
      <Video />
    </>
  )
}
