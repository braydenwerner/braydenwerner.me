import React from 'react'
import Slide from 'react-reveal/Slide'
import { projectLinks } from '../../constants/constants'
import './Projects.scss'

export default function Projects() {
    //  play gif on hover?
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
                                    <div className="project-url">{project.url}</div>
                                </div>
                            )
                        })
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
