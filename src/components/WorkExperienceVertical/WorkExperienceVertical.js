import React from 'react'
import { Element } from 'react-scroll'
import { Fade } from 'react-reveal'

import { workExperience } from '../../constants/constants'
import './WorkExperienceVertical.scss'

export const WorkExperienceVertical = () => {
  return (
    <Element name="Experience" id="outer-experience-container">
      <Fade distance="20%" up>
        <div id="experience-main-container">
          <div id="experience-header-container">
            <div id="experience-header">Experience</div>
          </div>
          {workExperience.map((experienceObj, i) => (
            <div key={i} id="experience-object-container">
              <div id="experience-image-container">
                {experienceObj.image && (
                  <img id="experience-image" src={experienceObj.image} />
                )}
              </div>
              <div id="experience-text-container">
                <div id="experience-title">{experienceObj.role}</div>
                <div id="experience-employer">{experienceObj.employer}</div>
                <div id="experience-date">{experienceObj.date}</div>
                {experienceObj.description.map((description, i) => {
                  return (
                    <div key={i} id="experience-description">
                      {description}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </Fade>
    </Element>
  )
}
