import React from 'react'
import PropTypes from 'prop-types'
import { SocialSideBar } from '../exports'
import './Layout.scss'

export default function Layout({ children }) {
    return (
        <>
            <div className="components">
                <SocialSideBar />

                <div className="main-sections">
                    {children}
                </div>
            </div>
        </>
    )
}

Layout.propTypes = {
    children: PropTypes.node.isRequired
}
