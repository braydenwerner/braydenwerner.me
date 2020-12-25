import React from 'react'
import Fade from 'react-reveal/Fade'
import { IconImage } from '../exports'
import { projectLinks } from '../../constants/constants'
import { Element } from 'react-scroll'
import './Projects.scss'

export default function Projects() {
  return (
    <Element name="Projects" id="outer-project-container">
      <div id="main-container">
        <Fade distance="100%" up>
          <div id="title-container">
            <div id="title">Projects</div>
          </div>
        </Fade>
        <div id="project-container">
          {projectLinks &&
            projectLinks.map(
              ({ name, description, githubURL, websiteURL, vid, tags }) => {
                return (
                  <Fade up distance="20%" key={name}>
                    <div id="project-background">
                      <div id="column-wrapper">
                        <div id="project-column-1">
                          <div id="project-title-container">
                            <h1 id="project-title">{name}</h1>
                          </div>
                          <div id="project-description-container">
                            <h2 id="project-description">{description}</h2>
                          </div>
                          <div id="project-tags">
                            {tags.map((tag) => {
                              return (
                                <li key={tag} className="tag">
                                  {tag}
                                </li>
                              )
                            })}
                          </div>
                        </div>
                        <div id="project-column-2">
                          {vid && (
                            <video id="project-vid" autoPlay loop muted>
                              <source src={vid} type="video/mp4"></source>
                            </video>
                          )}
                          <div id="external-link-container">
                            <a
                              id="project-github-url"
                              href={githubURL}
                              aria-label={name}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <IconImage name="GitHub" />
                            </a>
                            <a
                              id="project-website-url"
                              href={websiteURL}
                              aria-label={name}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <IconImage name="Website" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Fade>
                )
              }
            )}
        </div>
      </div>
    </Element>
  )
}
