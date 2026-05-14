import React, { useState } from 'react'
import Form from './Form'
import TowWayBinding from './TowWayBinding'

const App = () => {
  const[Data,SetData] = useState({name:"Ejaz",age:20})

  const update = () =>{
    SetData((prev)=>({...prev,age:"50"}))
    console.log(SetData);
  }
  return (
    <div>
      {Data.name}{Data.age}
      <button onClick={update}>click</button>
      <Form/>
      <TowWayBinding/>
    </div>
  )
}

export default App