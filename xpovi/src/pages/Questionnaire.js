import React, { useState } from 'react'
import SectionOne from '../components/SectionOne'
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import ButtonNew from '../components/_Button';
import "../styles.css"
function Questionnaire() {
    const [answers, setAnswers] = useState({
        q1: null,
        q2: null,
        q3: null,
        q4: null,
        q5: null,

    });
    const [section, setSection] = useState(1);
    const [success, setsuccess] = useState(false)
    const nextSection = () => {
        if (section < 3) {
            setSection(section + 1);
        } else if (section === 3) {
            submitAnswers();
        }
    };
    const prevsection = () => {
        if (section > 1) {
            setSection(section - 1);
        }
    };
    const handleChange = (name, value) => {
        setAnswers({ ...answers, [name]: value });
    };
    const buttonText = () => {
        if (section === 3)
            return "Submit"
        return "Next"
    }
    const submitAnswers = () => {
        // POST request using fetch inside useEffect React hook
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(answers)
        };
        fetch('https://xpovitask.free.beeceptor.com/my/api/path', requestOptions).then(() => window.alert("Your answers were successfully submitted"))



        // empty dependency array means this effect will only run once (like componentDidMount in classes)
    }
    return (
        <div>
            {section === 1 &&
                <SectionOne answers={answers} handleChange={handleChange} />}
            {section === 2 &&
                <SectionTwo answers={answers} handleChange={handleChange} />}
            {section === 3 &&
                <SectionThree answers={answers} />}
            <div className="container">
                {section !== 1 &&
                    <ButtonNew text={"Previous"} onClick={() => prevsection()} />
                }
                <ButtonNew text={buttonText()} onClick={() => nextSection()} />
            </div>
            
        </div>

    )
}


export default Questionnaire

