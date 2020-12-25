import React from 'react'
import { Element } from 'react-scroll'
import { Fade } from 'react-reveal'
import UniverstyMichiganImage from '../../Image/umich.jpg'
import { workExperience } from '../../constants/constants'
import './WorkExperience.scss'

export default function WorkExperience() {
  return (
    <Element name="Experience" id="outer-experience-container">
      <Fade distance="20%" up>
        <div id="experience-main-container">
          <div id="experience-header-container">
            <div id="experience-header">Experience</div>
          </div>

          <div id="experience-inner-container">
            {workExperience.map((job, i) => {
              return (
                <div id="job-container" key={i}>
                  <h1>{job.role}</h1>
                  <h2>{job.employer}</h2>
                </div>
              )
            })}
            <div id="column-container">
              <div id="experience-column-1">
                <img src={UniverstyMichiganImage} />
              </div>
              <div id="experience-column-2">
                {workExperience.map((job, i) => {
                  return (
                    <div id="job-container" key={i}>
                      {job.description.map((description, i) => {
                        return <p key={i}>{description}</p>
                      })}
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </Fade>
    </Element>
  )
}
