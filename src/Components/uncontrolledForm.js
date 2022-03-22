import React, { useRef } from 'react'

const UncontrolledForm = () => {
    const name = useRef('');
    console.log(name);
    const handleSubmit = (e) => {
        console.log(name.current.value)
        e.preventDefault();
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" id='name' ref={name} />
                <br></br>
                <label htmlFor='name'>Enter Name</label>
            </form>
            <h1>{name.current.value}</h1>
        </div>
    )
}

export default UncontrolledForm