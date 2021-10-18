

import './App.css';
import React,{useState} from 'react';
import Counter from './Counter.jsx';
const App = () => {
  const [count,setcount] = useState(1);
  const [fun,setfun] = useState('');
  const [data,setdata] = useState(true);

  function decrement(){
    setcount(count - 1) 
  }
  function increment(){
    setcount(count + 1) 
  }
  
const [color,setColor] = useState('red');

  return (
    <div className="App">
          <Counter
           count={count} 
           decrement={decrement}
           increment={increment}
           color={color}
           fun={fun}
           data={data}
           ></Counter>
           
    </div>
  );
}

export default App;
