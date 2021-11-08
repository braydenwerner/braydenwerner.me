import React, { useState } from 'react'
import { Element } from 'react-scroll'
import { Fade } from 'react-reveal'

import { workExperience } from '../../constants/constants'
import './WorkExperience.scss'

export default function WorkExperience() {
  const [selected, setSelected] = useState(workExperience[0])
  const [selectedIdx, setSelectedIdx] = useState()

  return (
    <Element name="Experience" id="outer-experience-container">
      <Fade distance="20%" up>
        <div id="experience-main-container">
          <div id="experience-header-container">
            <div id="experience-header">Experience</div>
          </div>
          <div id="job-selection-column">
            <ul>
              {workExperience.map((experienceObj, i) => (
                <li
                  key={i}
                  onClick={() => {
                    setSelected(experienceObj)
                    setSelectedIdx(i)
                  }}
                  id={`job-title-container-${
                    selected.employer === experienceObj.employer
                  }`}
                >
                  <div id="employer-text">{experienceObj.employer}</div>
                </li>
              ))}
            </ul>
            <hr id={`selected-index-${selectedIdx}`} />
            <div id="experience-column">
              <div>
                <h1>{selected.role}</h1>
                <h2>{selected.date}</h2>
              </div>
              {selected.description.map((description, i) => {
                return <p key={i}>{description}</p>
              })}
            </div>
          </div>
          <div id="experience-inner-container">
            {workExperience.map(
              ({ role, image, employer, date, description }, i) => {
                return (
                  <div id="job-container" key={i}>
                    <h1>{role}</h1>
                    <img id="job-image" src={image} alt={image} />
                    <h2>{employer}</h2>
                    <h3>{date}</h3>
                    <div id="job-paragraph-container">
                      {description.map((description, i) => {
                        return <p key={i}>{description}</p>
                      })}
                    </div>
                  </div>
                )
              }
            )}
          </div>
        </div>
      </Fade>
    </Element>
  )
}
