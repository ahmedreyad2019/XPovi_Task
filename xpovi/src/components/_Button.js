import React from 'react'
import "../styles.css"
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';



export default function ButtonNew(props) {

    return (
        <Link to={props.href} style={{ textDecoration: "none" }}>
            <div className="myButton" onClick={props.onClick} href={props.href}>
                {props.text}
            </div>
        </Link>
    )
}
ButtonNew.propTypes = {
    text: PropTypes.string,
    href: PropTypes.string,
    onClick: PropTypes.func
}

