import React from 'react'
import {
  LandingSection,
  Background,
  Layout,
  Projects,
  About,
  Footer,
  WorkExperience
} from '../../components/exports'

export default function HomePage() {
  return (
    <>
      <Layout>
        <Background />
        <LandingSection />
        <About />
        <WorkExperience />
        <Projects />
        <Footer />
      </Layout>
    </>
  )
}
