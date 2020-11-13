import React from 'react'
import { LandingSection, SocialSideBar, MazeBackground } from '../../components/exports'

export default function HomePage() {
    return (
        <>
            <MazeBackground width={window.innerWidth} height={window.innerHeight} />
            <SocialSideBar />
            <LandingSection />
        </>
    )
}
