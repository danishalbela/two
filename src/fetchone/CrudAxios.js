import axios from 'axios'
import React from 'react'

function CrudAxios() {

    let getData =async()=>{
        await axios
        .get('http://localhost:3000/users')
        .then(response=>console.log(response))
        .catch(err=>console.log(err))
    }

    let postData = async()=>{
        let newdta = {name:"bhanu",age:56,profession:"Singer"}
        await axios.post('http://localhost:3000/users', newdta)
        .then(response=>console.log(response.data))
        .catch(err=>console.log(err))
    }
   
    let putData = async(para)=>{
        // alert(para)
        let newdta = {name:"bhanuPratap",age:58,profession:"Poet"}
        await axios.put(`http://localhost:3000/users/${para}`,newdta)
        .then(response=>console.log(response.data))
        .catch(err=>console.log(err))
    }

    let patchData = async(para)=>{
        let newdta = {profession:"Docter"}
        await axios.patch(`http://localhost:3000/users/${para}`,newdta)
        .then(response=>console.log(response.data))
        .catch(err=>console.log(err))
    }

    let delData = async(para)=>{
        await axios.delete (`http://localhost:3000/users/${para}`)
        .then(response=>console.log(response.data))
        .catch(err=>console.log(err))
    }

  return (
    <div>
          
        CrudAxios
    <button onClick={getData}>GetDATA</button>
    <button onClick={postData}>PostDATA</button>
    <button onClick={()=>putData('cde5')}>PutDATA</button>
    <button onClick={()=>patchData('cde5')}>patchData</button>
    <button onClick={()=>delData('cde5')}>delData</button>
    </div>
  )
}

export default CrudAxios