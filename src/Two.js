import React, { useState } from 'react'

function Two() {
   let [a,b] = useState(9)
    
   let style = {
    red:{
      backgroundColor:'red',
      color:'aqua'
    },
    blue:{
      backgroundColor:'blue',
      color:'white'
    }
   }



   let inc =()=>
   {
    if(a===18) return null
    else return b(a+1)
      
   }
   let dec =()=>
   {
    if(a===6) return null
     else return b(a-1)
   }
   
   let colors = (a>=14) ? style.red : style.blue

  return (
    <div style={colors}>
      <h1>Counter App</h1>
      <h2>State Currently Has {a}</h2>
      <button onClick={inc}>+</button>
      <button onClick={dec}>-</button>
    </div>
  )
}

export default Two