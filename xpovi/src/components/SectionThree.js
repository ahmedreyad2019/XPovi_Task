import React from 'react'
import MultipleChoice from './MultipleChoice'
import Choice from './Choice'
import ShortAnswer from './ShortAnswer'

function SectionThree({answers}) {
    
    return (
        <div>
            <MultipleChoice disabled selected={answers.q1} text={"Is your business model B2C or B2B or both?"} isOpen={true}>
                <Choice text="B2C" />
                <Choice text="B2B" />
                <Choice text="Both" />
            </MultipleChoice>
            <MultipleChoice disabled selected={answers.q2} text={"Do you target all age brackets?"} isOpen={(answers.q1 === 1 || answers.q1 === 2)}>
                <Choice text="Yes" />
                <Choice text="No" />
            </MultipleChoice>

            <MultipleChoice disabled selected={answers.q3} text={"Do you target all industries?"} isOpen={(answers.q1 === 0 || answers.q1 === 2)}>
                <Choice text="Yes" />
                <Choice text="No" />
            </MultipleChoice>
            <MultipleChoice disabled selected={answers.q4} text={"Did you have an investment?"} isOpen={true}>
                <Choice text="Yes" />
                <Choice text="No" />
            </MultipleChoice>
            <ShortAnswer isEnabled={false}
              text={"how much was the investment?"} value={answers.q4===0?answers.q5:""} />

        </div>
    )
}


export default SectionThree

