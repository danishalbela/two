import React, { useState } from 'react'
import Two from './Two'
import Quizz from './Quizz'
import First from './NewCompo/First'
import Main from './MyCart/Main'
import Controllable from './Hooks/Controllable'
import MultiControllable from './Hooks/MultiControllable'
import UseRefHook from './Hooks/UseRefHook'
import UseRefDetails from './Hooks/UseRefDetails'
import MainTwo from './Hooks/MainTwo'
import Main3 from './fetchtwo/Main3'
import Main4 from './fetchthree/Main4'
import Main5 from './VideoSearch/Main5'



function App(){

  // let [fruit,setfruit]  = useState('Danish');
  // console.log(fruit, typeof fruit)
  // console.log(setfruit, typeof setfruit)

  // let one =()=>
  // {
    // if(fruit==='Danish')
    // {
    //   setfruit('Faisal')
    // }else{
    //   setfruit('Danish')
    // }
  // }

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
      
      {/* <Main/> */}
      {/* cart end */}
       
       {/* <Controllable/> */}
       {/* <MultiControllable/> */}
       {/* <UseRefHook/> */}
        {/* <UseRefDetails/> */}
      {/* <MainTwo/> */}
      {/* <Main3/> */}
      {/* <Main4/> */}
       
       <Main5/>

    </div>
  )
    }
export default App