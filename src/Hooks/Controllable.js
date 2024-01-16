import React, { useState } from 'react'

function Controllable() {
    let [val,setVal] = useState('kitten')

    let onhandleChange = (event)=>{
      console.log('Fired');
      console.log(event.target.value);
      setVal(event.target.value)
    }

    let [pass,setPass] = useState('lemon')
  return (
    <div>
        <input
            type='text'
            id=''
            name=''
            value={val}
            // onChange={onhandleChange}
            onChange={(event)=>setVal(event.target.value)}
            placeholder='Email'
        />
        <input
          type='text'
          name=''
          id=''
          placeholder='Password'
          onChange = {(event)=>setPass(event.target.value)}
        />
        <h1>{val}</h1>
    </div>
  )
}

export default Controllable