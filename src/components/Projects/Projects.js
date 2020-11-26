import React from 'react'
import Fade from 'react-reveal/Fade'
import { IconImage } from '../exports'
import { projectLinks } from '../../constants/constants'
import './Projects.scss'

export default function Projects() {
    //  play gif on hover?
    projectLinks.map(p => {
        console.log(p.vid)
        return 0
    })

    return (
        <>
            <div className="outer-container">
                <div className="main-container">
                    <Fade up>
                        <div className="title-container">
                            <div className="title">Projects</div>
                        </div>
                    </Fade>
                    <div className="project-container">
                        {projectLinks.map(({ name, description, githubURL, websiteURL, vid, tags }) => {
                            return (
                                <Fade up key="null">
                                    <div className="project-background" key={name}>
                                        <div className="column-wrapper">
                                            <div className="project-column-1">
                                                <div className="project-title-container">
                                                    <h1 className="project-title">{name}</h1>

                                                </div>
                                                <div className="project-description-container">
                                                    <h2 className="project-description">{description}</h2>
                                                </div>
                                                <div className="project-tags">
                                                    {tags.map((tag, i) => {
                                                        return (
                                                            <li key={i} className="tag">{tag}</li>
                                                        )
                                                    })}
                                                </div>
                                            </div>
                                            <div className="project-column-2">
                                                {vid && (
                                                    <video className="project-vid" autoPlay loop muted >
                                                        <source src={vid} type="video/mp4"></source>
                                                    </video>
                                                )}
                                                <div className="external-link-container" >
                                                    <a className="project-github-url" href={githubURL} aria-label={name} target="_blank" rel="noreferrer">
                                                        <IconImage name="GitHub" />
                                                    </a>
                                                    <a className="project-website-url" href={websiteURL} aria-label={name} target="_blank" rel="noreferrer">
                                                        <IconImage name="Website" />
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Fade>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
