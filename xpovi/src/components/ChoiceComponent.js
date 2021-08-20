import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import "../styles.css"

function ChoiceComponent(props) {
    const [selected, setselected] = useState(props.selected);
    useEffect(() => {
        setselected(props.selected)
    }, [props.selected]);
    return (
        <div className="choice">
            <div className={`choiceCircle${selected ? "_selected" : props.disabled?"_disabled":""}`} onClick={() => props.handleSelected()} />
            <div className={`text${selected ? "_selected" : props.disabled?"_disabled":""}`}>{props.text}</div>
        </div>
    )
}

ChoiceComponent.propTypes = {
    text: PropTypes.string,
    key: PropTypes.number
}

export default ChoiceComponent

