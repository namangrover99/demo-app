import React from 'react'

const Counter = ({updateCounter}) => {
  return (
    <div>
      <button style={{cursor: 'pointer'}} onClick={updateCounter}>Update Counter</button>
    </div>
  )
}

export default Counter