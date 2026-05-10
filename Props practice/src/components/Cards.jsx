import { Bookmark } from 'lucide-react'
import React from 'react'

const Cards = (prop) => {
  return (
    <div className='w-[450px] shadow-2xl flex flex-col gap-6 p-5 rounded-4xl'>
      <div className='flex justify-between items-center py-[20px] gap-0.5'>
        <img src={prop.logo} className='w-[30px] rounded-full' />
        <p><Bookmark/></p>
      </div>
      <div className='flex gap-1'>
        <h1 className='font-bold'>{prop.company}</h1>
        <span className='text-[12px] py-1 text-gray-400'>{prop.posted}</span>
      </div>
      <div className='flex items-center gap-2'>
          <p>{prop.type}</p>
        <p>{prop.level}</p></div>
        <div className='flex justify-between py-8'>
          <div>
            <p>{prop.salary}</p>
          <p>{prop.location}</p>
          </div>
          <button className='bg-black text-white p-2 rounded-3xl'>Apply now</button>
        </div>
    </div>
  )
}

export default Cards