

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
  


  return (
    <div className="App">
          <Counter count={count} increment={increment} decrement={decrement}></Counter>
    </div>
  );
}

export default App;
