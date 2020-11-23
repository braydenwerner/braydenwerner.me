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
                                    <div className="column-wrapper">
                                        <div className="project-column-1">
                                            <h1 className="project-title">{project.name}</h1>
                                            <div className="project-description-container">
                                                <h2 className="project-description">{project.description}</h2>
                                            </div>
                                            <a className="project-url" href={project.url} aria-label={name} target="_blank" rel="noreferrer">Github</a>
                                            <div className="project-tags">
                                                {project.tags.map(tag => {
                                                    return (
                                                        <li key={++tagKeyIndex} className="project-tags">{tag}</li>
                                                    )
                                                })}
                                            </div>
                                        </div>
                                        <div className="project-column-2">
                                            {project.gif && (
                                                <img className="project-gif" alt="loading" src={project.gif}></img>
                                            )}
                                        </div>
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
