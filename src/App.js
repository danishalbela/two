import React, { useState } from 'react'
import Two from './Two'
import Quizz from './Quizz'
import First from './NewCompo/First'
import Navbar from './MyCart/Navbar'
import Main from './MyCart/Main'



function App(){

  let [fruit,setfruit]  = useState('Danish')
  // console.log(fruit, typeof fruit)
  // console.log(setfruit, typeof setfruit)

  let one =()=>
  {
    if(fruit==='Danish')
    {
      setfruit('Faisal')
    }else{
      setfruit('Danish')
    }
  }

  return (
    <div>
      {/* <h1>state has {fruit} </h1>
      <button onClick={one}>Change State</button>

      <hr/>
      <hr/><hr/><hr/><hr/><hr/>
 */}

      {/* <Two/> */}
      {/* <Quizz/> */}
      {/* <First/> */}

      {/* cart start */}
      <Navbar/>
      <Main/>
      {/* cart end */}
       
    </div>
  )


}

 

export default App