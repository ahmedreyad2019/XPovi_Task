import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import ChoiceComponent from './ChoiceComponent'

export default function MultipleChoice(props) {
    const [selected, setselected] = useState(null)
    const handleSelected = (i) => {
        setselected(i);
        props.handleAnswer&&
        props.handleAnswer(i);
    }
    useEffect(() => {
        if (selected===null)
            setselected(props.selected)
    }, [selected, props.selected]);
    return (
        <div className="questionContainer"  style={{
            maxHeight: props.isOpen ? 500 : 0
          }}>
            {props.text}
            <div className="answersContainer">
                {props.children.map((item, i) => (<ChoiceComponent  {...item.props}disabled={props.disabled} key={i} selected={selected === i} handleSelected={() => !props.disabled&&handleSelected(i)} />))}
            </div>
        </div>
    )
}

MultipleChoice.propTypes = {
    text: PropTypes.string,
    isOpen:PropTypes.bool
}



