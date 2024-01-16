import React, {useRef} from 'react'



function UseRefHook() {

    // using js-----------------------------------
//     let myInput = document.getElementById('myInput')

// let onHandleClick=()=>{
//     let val = myInput.value
//     console.log(val)
// }

// using react----------------------------------------
let inputRef = useRef(null)

let onHandleClick=()=>{
    let val = inputRef.current.value
    console.log(val);
    
}

  return (
    <div>
      <input
        type='text'
        id='myInput'
        ref={inputRef}
      />
      <button onClick={onHandleClick}>Click me</button>
    </div>
  )
}

export default UseRefHook