import axios from "axios";

 const UNSPLASH_KEY = import.meta.env.VITE_UNSPLASH_KEY

 const VIDEO_KEY = import.meta.env.VITE_VIDEO_KEY

 const GIPHY_KEY = import.meta.env.VITE_GIPHY_KEY

export async function GetPhotos(query,page=1,per_page=20){
    const res = await axios.get('https://api.unsplash.com/search/photos',{
        params:{query,page,per_page},
        headers:{Authorization:`Client-ID ${UNSPLASH_KEY}`}
    })
    return res.data
    
 }

export async function GetVideos(query,page=1){
        const res = await axios.get('https://api.pexels.com/videos/search',{
        params:{query,page},
        headers:{Authorization:`Client-ID ${VIDEO_KEY}`}
    })
    return res.data
}

export async function GetGiphy(query,page=1){
      const limit = 20;
    const offset = (page - 1) * limit;
        const res = await axios.get('https://api.giphy.com/v1/gifs/search',{
        params:{q:query,api_key: GIPHY_KEY,page,limit,offset}
    })
    return res.data
}