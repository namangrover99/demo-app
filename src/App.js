import './App.css';
import { useEffect, useState } from 'react';
import Counter from './Components/counter';
import ControlledForm from './Components/controlledForm';
import UncontrolledForm from './Components/uncontrolledForm';

function App() {

  const getNewTime = () => {
    return `${new Date().getUTCHours()}:${new Date().getUTCMinutes()}:${new Date().getUTCSeconds()}`
  }
  const [time, setTime] = useState(getNewTime())
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState(getNewTime())
  // const updateCounter = () => {
  //   setCount(count + 1);
  //   setTime(getNewTime())
  // }
  // const decrementCounter = () => {
  //   setCount(count - 1);
  //   setTime(getNewTime())
  // }
  // setInterval(() => {
  //   setTimer(getNewTime());
  // }, 1000)

console.log('runn');
  return (
    <div className="App">
      {/* <h1>This is a demo app</h1>
      <h1>{timer}</h1>
      <h1>{count}</h1>
      <h3>Updated At: {time}</h3>
      <Counter updateCounter={updateCounter} decrementCounter={decrementCounter} />
      <Counter value={count} />
      <button style={{ cursor: 'pointer' }} onClick={decrementCounter}>Decrement Counter</button>
      <button style={{ cursor: 'pointer' }} onClick={updateCounter}>Increment Counter</button> */}
      {/* <ControlledForm /> */}
      <UncontrolledForm />
    </div>
  );
}

export default App;
