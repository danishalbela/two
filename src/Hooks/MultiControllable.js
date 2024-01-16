import React, {useState} from 'react'

function MultiControllable() {

    let [val, setVal] = useState({
        username:'Raphel',
        myemail:'raphel@123gmail.com',
        mypass:'realme'
    })

    let onhandleChange = (event)=>{
        setVal(
            {...val, [event.target.name]:event.target.value}
        )
    }
  return (
    <div>
        <input
            type='text'
            placeholder='Username'
            name='username'
            value={val.username}
            onChange={onhandleChange}
        />
        <input
            type='text'
            placeholder='Email'
            name='myemail'
            value={val.myemail}
            onChange={onhandleChange}
        />
        <input
            type='text'
            placeholder='Password'
            name='mypass'
            value={val.mypass}
            onChange={onhandleChange}
        />
    </div>
  )
}

export default MultiControllable