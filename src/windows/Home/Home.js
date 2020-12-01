import React from 'react'
import { LandingSection, Background, Layout, Projects, About, Footer } from '../../components/exports'

export default function HomePage() {
    return (
        <>
            <Layout>
                <Background />
                <LandingSection />
                <About />
                <Projects />
                <Footer />
            </Layout>
        </>
    )
}
