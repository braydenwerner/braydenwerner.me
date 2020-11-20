import React from 'react'
import { LandingSection, SocialSideBar, Background } from '../../components/exports'

export default function HomePage() {
    return (
        <>
            <SocialSideBar />

            <Layout>
                <Background />
                <LandingSection />
            </Layout>
        </>
    )
}
