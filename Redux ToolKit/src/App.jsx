import React from 'react'
import { useState } from 'react';
import './index.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increament, increasesbyamt } from './Redux/features/counterSlice';

const App = () => {
  const [num, setnum] = useState(5)
  const dispatch = useDispatch();
  const count = useSelector((state)=>state.counter.value)
  return (
    <div>
      <button onClick={()=>{dispatch(increament())}}>increament</button>
    <h1>{count}</h1>
    <button onClick={()=>{dispatch(decrement())}}>decrement</button>
    <button value={num} onClick={()=>{dispatch(increasesbyamt(Number(num)))}}>{num}</button>
    <input onChange={(e)=>{setnum(e.target.value)}} type="text" />
    </div>
  )
}

export default App