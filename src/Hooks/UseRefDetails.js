import React, { useRef,useState} from 'react'

function UseRefDetails() {

    let [state,setState] = useState(4)
    let ref = useRef(4)

    let handleClick=()=>{
        setState(state+1)
        console.log('state says',state)
    }

    // useref👇👇👇👇👇👇👇👇
    console.log('useRef says' , ref.current++);
  return (
    <div>
       <h1>Counter = {state}</h1>
       <button onClick={handleClick}>+</button>
    </div>
  )
}

export default UseRefDetails