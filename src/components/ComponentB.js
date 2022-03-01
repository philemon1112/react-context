
import React,{useContext} from 'react'
import {CounterContext} from '../Cointexts/CounterContext'

function ComponentB() {
  const {increaseCount} = useContext(CounterContext)

  return (
    <div style={{backgroundColor:'yellow'}}>
        <button onClick={increaseCount}>Count {increaseCount}</button>
    </div>
  )
}

export default ComponentB

