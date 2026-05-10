import React from 'react'

const App = () => {
  function Inputhandler(e){
    console.log(e)
  }
  function ButtonClicked(){
    console.log("Iam the king");
    
  }
  return (
    <div>
      <input onChange={((e)=>console.log(e.target.value))} type="text" />
      <button onClick={ButtonClicked}>Click me</button>
    </div>
  )
}

export default App