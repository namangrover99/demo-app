import './App.css';
import { useState } from 'react';

function App() {

    const [users, setUsers] = useState([])
    const [isShow , setIsShow] = useState(false);
    const [name, setName] = useState("")
    const handleChange = (e) => {
      setName(e.target.value)
    }
    const handleSubmit = () => {
      console.log(users);
      setUsers([...name])
    }
  return (
    <div className="App">
      <h1>This is a demo app</h1>
      <h2>Seen? <span onClick={() => setIsShow(true)} style={{color: 'blue', cursor: 'pointer'}}>Update you details</span></h2>
      {isShow && <div>
        <label htmlFor='name'>Your Name</label> <input onChange={handleChange} type="text" id='name' /><br/>
        <br/>
        <button onClick={handleSubmit}>Submit</button>
      </div>}
      <h2>Seen By:</h2>
      {users.map((user, index) => (
        <h3 key={index}>{user}</h3>
      ))}
    </div>
  );
}

export default App;
