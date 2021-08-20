import React from 'react'
import PropTypes from 'prop-types'

function Choice(props) {
    return (
        <div>
            {props.text}
        </div>
    )
}

Choice.propTypes = {
    text:PropTypes.string
}

export default Choice

