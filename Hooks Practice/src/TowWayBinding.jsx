import React, { useState } from 'react'

const TowWayBinding = () => {
    const[input,setInput] = useState('')
    const Handling = (e) =>{
        e.preventDefault()
        console.log("Form Handled",input);
        setInput('')
        
    }
    
  return (
    <div>
        <form onSubmit={(e)=>{Handling(e)}}>
            <input type="text" value={input} onChange={(e)=>{setInput(e.target.value);
            }} />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default TowWayBinding