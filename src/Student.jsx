import React from "react";
import PropTypes from "prop-types";

function Student(props) {
    return (
        <div>
            <p>Student name : {props.name} </p>
            <p>Student age : {props.age} </p>
            <p>Currently Student : {props.isStudent ? "yes" : "no"} </p>
        </div>
    );
}

Student.propTypes = {
    name: PropTypes.string,
    age: PropTypes.number,
    isStudent: PropTypes.bool,
};

export default Student;
