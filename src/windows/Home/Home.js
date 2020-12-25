import React from 'react'
import {
  LandingSection,
  Layout,
  Projects,
  About,
  Footer,
  WorkExperience
} from '../../components/exports'

export default function HomePage() {
  return (
    <Layout>
      <LandingSection />
      <About />
      <WorkExperience />
      <Projects />
      <Footer />
    </Layout>
  )
}
