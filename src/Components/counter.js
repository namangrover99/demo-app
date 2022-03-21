import React from 'react'

const Counter = ({updateCounter, decrementCounter}) => {
  return (
    <div>
      <button style={{cursor: 'pointer'}} onClick={updateCounter}>Increment Counter</button>
      <button style={{cursor: 'pointer'}} onClick={decrementCounter}>Decrement Counter</button>
    </div>
  )
}

export default Counter