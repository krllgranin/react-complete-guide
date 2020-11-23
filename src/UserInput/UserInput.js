import React from 'react'

const userInput = (props) => {
  return (
    <div className="user-input"
         style={{maxWidth: '600px', margin: '0 auto'}}>
      <input
        type="text"
        onChange={props.change}
        value={props.username}/>
    </div>
  )
}

export default userInput
