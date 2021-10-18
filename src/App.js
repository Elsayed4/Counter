

import './App.css';
import React,{useState} from 'react';
import Counter from './Counter.jsx';
const App = () => {
  const [count,setcount] = useState(0);

  function decrement(){
    setcount(count - 1) 
  }
  
  function increment(){
    setcount(count + 1) 
  }
  
const [color,setColor] = useState('white');

  return (
    <div className="App">
          <Counter count={count} 
          increment={increment}
           decrement={decrement}
           color={color}
           ></Counter>
    </div>
  );
}

export default App;
