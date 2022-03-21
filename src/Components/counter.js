import React from 'react'

const Counter = ({ value }) => {
  return (
    <div>
      {/* <button style={{cursor: 'pointer'}} onClick={decrementCounter}>Decrement Counter</button>
      <button style={{cursor: 'pointer'}} onClick={updateCounter}>Increment Counter</button> */}
      <h1>{value}</h1>

    </div>
  )
}

export default Counter