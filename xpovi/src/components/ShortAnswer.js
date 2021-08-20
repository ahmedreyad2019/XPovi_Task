import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function ShortAnswer(props) {
    const [value, setvalue] = useState("")
    const handlevalue = (i) => {

        let val = parseFloat(i);
        if (isNaN(val) || val < 0 || i[0] === '0') {
            val = '';
        }
        setvalue(val);
        props.handlevalue &&
        props.handlevalue(val);
    }
    return (
        <div className="questionContainer"  >
            {props.text}
            <div className="answersContainer">
                <input onChange={(event) => handlevalue(event.target.value)} value={value} disabled={!props.isEnabled} {...props} />
            </div>
        </div>
    )
}

ShortAnswer.propTypes = {
    value: PropTypes.string,
    isEnabled: PropTypes.bool
}


