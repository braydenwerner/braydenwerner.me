import React from 'react'
import { SideBar, IconImage } from '../exports'
import { socialLinks } from '../../constants/constants'
import './SocialSideBar.scss'

export default function SocialSideBar() {
    return (
        <SideBar location="left">
            <div className="social-list">
                {socialLinks && socialLinks.map(({ url, name }, i) => (
                    <li key={i}>
                        <a href={url} aria-label={name} >
                            <IconImage name={name} />
                        </a>
                    </li>
                ))}
            </div>
        </SideBar>
    )
}
