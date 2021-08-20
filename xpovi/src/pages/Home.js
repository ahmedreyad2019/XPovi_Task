import React from 'react'
import ButtonNew from '../components/_Button'
import "../styles.css"
function Home(props) {
    return (
        <div className="container">
            <ButtonNew text="Generate Buisenss Plan" href="/questionnaire" />
        </div>
    )
}

Home.propTypes = {

}

export default Home

