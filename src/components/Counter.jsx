import React from 'react';
import { useState } from 'react';
// eslint-disable-next-line no-unused-vars
import'./Counterstyle.css';

const Counter = () => {
 const [counter, setCounter] = useState(0);

 const Increment=()=>{
 setCounter(counter+1)
 }

 const Decrement=()=>{
    setCounter(counter-1)
 }
const Reset=()=>{
    setCounter(0);
}
  return (
    <div>
        <div className="output">
        {counter}
        </div>
        <button type="button" onClick={Increment} className="btn-increment">+</button>
        <button type="button" onClick={Decrement} className="btn-decrement">-</button>
        <button type="button" onClick={Reset} className="btn-reset">Reset</button>
    </div>
  )
}

export default Counter