import React from 'react'
import Three from './Three';

function Seconed(props) {
    // console.log(props);
 
    let about = props.sendData + 'plays football'
  return (
    <div style={{backgroundColor:'aqua',border:'10px double green',padding:'15px'}}> 
            <address style={{fontSize:'25px'}}>Seconed says {props.sendData}</address>

    <Three sendAbout={about}/>
    </div>
  )
}

export default Seconed