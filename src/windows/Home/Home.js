import React from 'react'
import { LandingSection, Background, Layout, Projects, About } from '../../components/exports'

export default function HomePage() {
    return (
        <>
            <Layout>
                <Background />
                <LandingSection />
                <About />
                <Projects />
            </Layout>
        </>
    )
}
