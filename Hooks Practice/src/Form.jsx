import React from 'react'

const Form = () => {
    const HandleForm = (e) =>{
        e.preventDefault()
        console.log("Form Submitted");
    }
  return (
    <div>
        <form onSubmit={(e)=>{HandleForm(e)}}>
            <input type="text" />
            <button>Submit</button>
        </form>
    </div>
  )
}

export default Form