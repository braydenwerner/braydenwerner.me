import React from 'react'
import Slide from 'react-reveal/Slide'
import { IconImage } from '../exports'
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
                        {projectLinks.map(({ name, description, url, gif, tags }) => {
                            return (
                                <div className="project-background" key={name}>
                                    <div className="column-wrapper">
                                        <div className="project-column-1">
                                            <div className="project-title-container">
                                                <h1 className="project-title">{name}</h1>
                                                <a className="project-url" href={url} aria-label={name} target="_blank" rel="noreferrer">
                                                    <IconImage className="github-icon" name="GitHub" />
                                                </a>
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
                                            {gif && (
                                                <img className="project-gif" alt="loading" src={gif}></img>
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
