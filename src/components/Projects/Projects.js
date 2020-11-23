import React from 'react'
import Slide from 'react-reveal/Slide'
import { projectLinks } from '../../constants/constants'
import './Projects.scss'

export default function Projects() {
    //  play gif on hover?
    let tagKeyIndex = 0
    return (
        <>
            <div className="outer-container">
                <div className="main-container">
                    <Slide left>
                        <div className="title-container">
                            <div className="title">Projects</div>
                        </div>
                    </Slide>
                    <div className="project-container">
                        {projectLinks.map(project => {
                            return (
                                <div className="project-background" key={project.name}>
                                    <div className="project-title">{project.name}</div>
                                    <a className="project-url" href={project.url} aria-label={name} target="_blank" rel="noreferrer">Github</a>
                                    {project.gif && (
                                        <img className="project-gif" alt="loading" src={project.gif}></img>
                                    )}
                                    <div className="project-tags">
                                        {project.tags.map(tag => {
                                            return (
                                                <li key={++tagKeyIndex} className="project-tags">{tag}</li>
                                            )
                                        })}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
