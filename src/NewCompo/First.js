import React from 'react'
import Seconed from './Seconed'

function First() {

    let name = 'Frank D"Silva'
  return (
    <div style={{border:'4px solid blue',padding:'15px'}}>
       <h1>First Component says {name}</h1>
        <Seconed sendData={name}/>
    </div>
  )
}

export default First