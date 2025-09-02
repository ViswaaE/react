import React from 'react'

function Stud(props) {
  return (
    <div>
      <p>Student name : {props.name} </p>
      <p>Student age : {props.age} </p>
      {/* <p>Currently Student : {props.isStudent ? "yes" : "no"} </p> */}
    </div>
  )
}

export default Stud