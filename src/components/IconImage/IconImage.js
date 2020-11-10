import React from 'react'
import PropTypes from 'prop-types'
import github32 from '../../images/github32.png'
import linkedIn32Blue from '../../images/linkedIn32Blue.png'
import instagram32Rainbow from '../../images/instagram32Rainbow.png'
import email32 from '../../images/email32.png'

export default function IconImage({ name }) {
    let source
    switch (name) {
        case 'GitHub': source = github32; break
        case 'Linkedin': source = linkedIn32Blue; break
        case 'Instagram': source = instagram32Rainbow; break
        case 'Email': source = email32; break
    }

    return (
        <div>
            <img src={source} />
        </div>
    )
}

IconImage.propTypes = {
    name: PropTypes.string
}
