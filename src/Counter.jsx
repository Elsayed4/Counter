import './App.css';
import React,{useState} from 'react';
const Counter = (props) => {

  return (
    <section className="Counter">
        <button onClick = {props.decrement}> - </button>
          <span>{props.count}</span>
        <button onClick = {props.increment}> + </button>   
    </section>
  );
}

export default Counter;
