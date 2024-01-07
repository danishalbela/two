import React from 'react'
import Four from './Four'

function Three(props) {

    // console.log(props)

    let {sendAbout} = props

    let sendAge = sendAbout+ 'and is as a Docter'
  return (
    <div style={{border:'6px dashed black', backgroundColor:'orange',padding:'15px'}}>
         <h4>Three says {props.sendAbout}</h4>


         <Four sendAge={sendAge}/>
    </div>
  )
}

export default Three