import React from 'react'
import { SideBar, IconImage } from '../exports'
import { socialLinks } from '../../constants/constants'
import './SocialSideBar.scss'

export default function SocialSideBar() {
    return (
        <SideBar location="right">
            <div className="social-list">
                {socialLinks && socialLinks.map(({ url, name }) => (
                    <li key={name}>
                        <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                            <IconImage name={name} />
                            <h1>Test</h1>
                        </a>
                    </li>
                ))}
            </div>
        </SideBar>
    )
}
