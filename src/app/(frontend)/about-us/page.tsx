import SectionHero from '@/components/custom/SectionHero'
import Philosophy from '@/components/aboutPage/Philosophy'
import AboutSection from '@/components/aboutPage/AboutSection'
import { Video } from '@/components/aboutPage/Video'
import LogoCarousel from '@/components/aboutPage/LogoCarousel'
import HowWeWorkSection from '@/components/aboutPage/HowWeWork'

export default function page() {
  return (
    <>
      <SectionHero title="About Us" />
      <Philosophy />
      <Video />
      <AboutSection />
      <HowWeWorkSection />
      <LogoCarousel />
    </>
  )
}
