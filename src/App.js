import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

    const [users, setUsers] = useState([])
    const [isShow , setIsShow] = useState(false);
    const handleUpdate = () => {

    }
  return (
    <div className="App">
      <h1>This is a demo app</h1>
      <h2>Seen? <span onClick={handleUpdate} style={{color: 'blue', cursor: 'pointer'}}>Update you details</span></h2>
      <div>
        <label htmlFor='name'>Your Name</label><input type="text" id='name' />
        <label htmlFor='date'>Seen On(day)</label><input type="text" id='date' />
      </div>
      <h2>Seen By:</h2>
      {users.map((user) => (
        <h3>{user.name}</h3>
      ))}
    </div>
  );
}

export default App;
