import React from 'react'
import './UserOutput.css'

const person = (props) => {
  return (
    <div className="user-output">
      <p>I'm {props.username} and I am 29 years old!</p>
      <p>{props.children}</p>
    </div>
  )
}

export default person
