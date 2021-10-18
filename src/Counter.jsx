import './App.css';
import React,{useState} from 'react';
const Counter = (props) => {

  return (
    <section className="Counter">
        <button onClick = {props.decrement}> - </button>
          <span class={props.color}>{props.count}</span>
        <button onClick = {props.increment}> + </button>
        <p className="txtStatus">{props.count >= 0 ? 'positive Number' : 'Negative Number'}</p> 
    </section>
  );
}

export default Counter;
