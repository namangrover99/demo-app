import './App.css';
import { useEffect, useState } from 'react';
import Counter from './Components/counter';

function App() {

    const [time, setTime] = useState(`${new Date().getUTCHours()}:${new Date().getUTCMinutes()}:${new Date().getUTCSeconds()}`)
    const [count, setCount] = useState(0);
    const [timer, setTimer] = useState(`${new Date().getUTCHours()}:${new Date().getUTCMinutes()}:${new Date().getUTCSeconds()}`)
    const updateCounter = () => {
      setCount(count + 1);
      setTime(`${new Date().getUTCHours()}:${new Date().getUTCMinutes()}:${new Date().getUTCSeconds()}`)
    }
    const decrementCounter = () => {
      setCount(count - 1);
      setTime(`${new Date().getUTCHours()}:${new Date().getUTCMinutes()}:${new Date().getUTCSeconds()}`)
    }

    setInterval(() => {
      setTimer(`${new Date().getUTCHours()}:${new Date().getUTCMinutes()}:${new Date().getUTCSeconds()}`);
    },1000)

  return (
    <div className="App">
      <h1>This is a demo app</h1>
      <h1>{timer}</h1>
      <h1>{count}</h1>
      <h3>Updated At: {time}</h3>
      <Counter updateCounter={updateCounter} decrementCounter={decrementCounter} />
    </div>
  );
}

export default App;
