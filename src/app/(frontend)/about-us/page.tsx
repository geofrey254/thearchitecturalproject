import SectionHero from '@/components/custom/SectionHero'
import Philosophy from '@/components/aboutPage/Philosophy'
import AboutSection from '@/components/aboutPage/AboutSection'
import ValuesSection from '@/components/aboutPage/Values'
import { Video } from '@/components/aboutPage/Video'

export default function page() {
  return (
    <>
      <SectionHero title="About Us" />
      <Philosophy />
      <Video />
      <AboutSection />
      <ValuesSection />
    </>
  )
}
