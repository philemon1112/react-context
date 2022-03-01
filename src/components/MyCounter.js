import React,{useContext} from 'react';
import {CounterContext} from "../Cointexts/CounterContext"

function MyCounter() {
    
    const {count, increaseCount, decreaseCount} = useContext(CounterContext)
  return (
    <div>
        <h3>MyCounter is {count}</h3>

        <button onClick={increaseCount}>Increase Count</button>
        <button onClick={decreaseCount}>Decrease Count</button>
    </div>
  )
}

export default MyCounter