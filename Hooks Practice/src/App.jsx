import React from 'react'
import { useState } from 'react'

const App = () => {
  const [Data, setData] = useState({user:"Ejaz",age:20})

  function btnClicked(){
    const Newuser = {...Data}
    Newuser.user='bhaskar'
    setData(Newuser )
    
  }
  return (
    <div>
      <button onClick={btnClicked}>click</button>
      <p>{Data.user}{Data.age}</p>
    </div>
  )
}

export default App