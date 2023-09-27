// Validate Properties using PropTypes 

import React from 'react'
import PropTypes from 'prop-types';

export default function Person(props) {
    return (
        <h1>{props.name}, {props.age}</h1>
    )
}


Person.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired
};