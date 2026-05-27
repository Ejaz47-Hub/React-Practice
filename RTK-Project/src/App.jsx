import React from 'react'
import { GetGiphy, GetPhotos, GetVideos } from './api/mediaApi.js'

const App = () => {
  return (
    <div className='flex gap-4'>
      <button onClick={async()=>{const raj = await GetPhotos('cat')
        console.log(raj.results);
        
      }}>Get Photos</button>
      
      <button onClick={async()=>{const raj = await GetVideos('cat')
        console.log(raj.videos); 
        
      }}>Get Videos</button>


       <button onClick={async()=>{const raj = await GetGiphy('cat')
        console.log(raj.data);
        
      }}>Get Giphy</button>
    </div>
  )
}

export default App