import React from 'react'
import PropTypes from 'prop-types'
import { Nav, SocialSideBar } from '../exports'
import './Layout.scss'

export default function Layout({ children }) {
    return (
        <>
            <div className="components">
                <Nav />
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
