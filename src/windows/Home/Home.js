import React from 'react'
import {
  LandingSection,
  Layout,
  Projects,
  About,
  Footer,
  // WorkExperience
  WorkExperienceVertical
} from '../../components/exports'

export default function HomePage() {
  return (
    <Layout>
      <LandingSection />
      <About />
      {/* <WorkExperience /> */}
      <WorkExperienceVertical />
      <Projects />
      <Footer />
    </Layout>
  )
}
