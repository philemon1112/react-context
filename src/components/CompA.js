import React,{useContext} from 'react'
import {CounterContext} from '../Cointexts/CounterContext'
import ComponentB from './ComponentB'

function CompA() {
    const {count} = useContext(CounterContext)
  return (
    <div style={{backgroundColor:'wheat'}}>
        <p>Count {count}</p>
       <ComponentB />
    </div>
  )
}

export default CompA