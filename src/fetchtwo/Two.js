import axios from 'axios'
import React, { useState } from 'react'
import imgstyles from './two.module.css'

function Two() {
 
    let [txt, setTxt] = useState('Orange')
    let [imgData,setImgData] = useState([])

    let accessKey = `p0Yo4d2jaEWQDFppwMZOxO8rxZuZ7splPn4h9Kd0Gzs`


    let handleSubmit = async(event)=>{
        event.preventDefault()
        // console.log('Pen');

       
        await axios
        .get(`https://api.unsplash.com/search/photos/?client_id=${accessKey}&query=${txt}`)
        .then(data=>setImgData(data?.data?.results))
        .catch(err=>console.log(err))
    }

    let renderdata = imgData.map(ele=>{
        return <img className={imgstyles.images} key={ele?.id} src={ele?.urls?.small} alt={ele?.alt_description}/>
    })

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <input type='text'
        name=''
        id=''
        value={txt}
        onChange={(event)=>setTxt(event.target.value)}

        />
    </form>
    <div className={imgstyles.one}></div>
    {renderdata}
    </div>
  )
}

export default Two

// 1) Get search term in state
// 2) send image search request on the specific endpoint using the above search term
// 3) get response as array
// 4) update the state with the incomming response array data 
// 5) render the state above in (4)