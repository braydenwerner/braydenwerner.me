import React, { useState, useEffect } from 'react'
import { SideBar, IconImage } from '../exports'
import { socialLinks } from '../../constants/constants'
import './SocialSideBar.scss'

export default function SocialSideBar() {
    console.log(socialLinks)
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsMounted(true)
        }, 100)

        return () => {
            clearTimeout(timeout)
        }
    }, [])
    return (
        <SideBar location="right">
            <div className="social-list">
                {isMounted && socialLinks && socialLinks.map(({ url, name }) => (
                    <li key={name}>
                        <a href={url} aria-label={name} target="_blank" rel="noreferrer">
                            <IconImage name={name} />
                        </a>
                    </li>
                ))}
            </div>
        </SideBar>
    )
}
