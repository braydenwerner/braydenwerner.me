import React from 'react'
import { LandingSection, Background, Layout, Projects } from '../../components/exports'

export default function HomePage() {
    return (
        <>
            <Layout>
                <Background />
                <LandingSection />
                <Projects />
            </Layout>
        </>
    )
}
