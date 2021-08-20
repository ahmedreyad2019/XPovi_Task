import React from 'react'
import MultipleChoice from './MultipleChoice'
import Choice from './Choice'
import ShortAnswer from './ShortAnswer'

function SectionTwo({ answers, handleChange }) {


    return (
        <div>
            <MultipleChoice handleAnswer={i => handleChange("q4", i)} selected={answers.q4} text={"Did you have an investment?"} isOpen={true}>
                <Choice text="Yes" />
                <Choice text="No" />
            </MultipleChoice>
            <ShortAnswer isEnabled={answers.q4 === 0} type="number" min="0"
                handlevalue={i => handleChange("q5", i)} text={"how much was the investment?"} value={answers.q4===0?answers.q5:""} />

        </div>
    )
}


export default SectionTwo

