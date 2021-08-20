import React from 'react'
import MultipleChoice from './MultipleChoice'
import Choice from './Choice'

function SectionOne({ answers, handleChange }) {


    return (
        <div>
            <MultipleChoice handleAnswer={i => handleChange("q1", i)} selected={answers.q1} text={"Is your business model B2C or B2B or both?"} isOpen={true}>
                <Choice text="B2C" />
                <Choice text="B2B" />
                <Choice text="Both" />
            </MultipleChoice>
            <MultipleChoice handleAnswer={i => handleChange("q2", i)} selected={answers.q2} text={"Do you target all age brackets?"} isOpen={(answers.q1 === 1 || answers.q1 === 2)}>
                <Choice text="Yes" />
                <Choice text="No" />
            </MultipleChoice>

            <MultipleChoice handleAnswer={i => handleChange("q3", i)} selected={answers.q3} text={"Do you target all industries?"} isOpen={(answers.q1 === 0 || answers.q1 === 2)}>
                <Choice text="Yes" />
                <Choice text="No" />
            </MultipleChoice>


        </div>
    )
}

export default SectionOne

