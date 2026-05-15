import React from 'react'

const App = () => {
 const user = {
  name:"Ejaz",
  Age:12
 }
 localStorage.setItem("user",JSON.stringify(user))
 const usera = JSON.parse(localStorage.getItem("user"))
 console.log(usera);
 
  return (
    <div>
    
    </div>
  )
}

export default App 