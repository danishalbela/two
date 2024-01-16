import React, { useEffect, useState } from 'react'
import CrudAxios from '../fetchone/CrudAxios'


function MainTwo() {

    // let [data, setdata] = useState(0)
    // let [val,setVal] = useState(4)

    // console.log('outside')

    // useEffect(()=>{
    //     console.log('inside')
    // })

    // useEffect(()=>{
    //     console.log('inside')
    // },[])

    // useEffect(()=>{
    //     console.log('inside')
    // },[val])

  return (
    <div>
     {/* Main
     <button onClick={()=>setdata(data+1)}>Increase{data}</button>
     <button onClick={()=>setVal(data-1)}>Decrease{val}</button> */}

     <CrudAxios/>
    </div>

  )
}

export default MainTwo