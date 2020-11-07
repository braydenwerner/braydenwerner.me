import React from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default function SideBar({ children, location }) {
    return (
        <div>
            <li>
                <a>Test</a>
            </li>
        </div>
    )
}

SideBar.propTypes = {
    children: PropTypes.node.isRequired,
    orientation: PropTypes.string,
}
