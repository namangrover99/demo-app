import React, { useState } from 'react'

const ControlledForm = () => {
    const [name, setName] = useState('')
    return (
        <div>
            <form>
                <input type="text" id='name' onChange={(e) => {
                                                setName(e.target.value)
                                                console.log(name)
                                                }} />
                <br></br>
                <label htmlFor='name'>Enter Name</label>
            </form>
            <h1>{name}</h1>
        </div>
    )
}

export default ControlledForm