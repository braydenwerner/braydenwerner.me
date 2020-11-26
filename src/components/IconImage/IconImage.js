import { React } from 'react'
import PropTypes from 'prop-types'

export default function IconImage({ name }) {
    let source
    switch (name) {
        case 'GitHub': source = 'fab fa-github'; break
        case 'Linkedin': source = 'fab fa-linkedin'; break
        case 'Youtube': source = 'fab fa-youtube-square'; break
        case 'Email': source = 'far fa-envelope'; break
        case 'Website': source = 'fas fa-external-link-alt'; break;
    }

    return (
        <i className={source}></i>
    )
}

IconImage.propTypes = {
    name: PropTypes.string
}
