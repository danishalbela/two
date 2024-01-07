import React from 'react'
import navstyle from './navbar.module.css'
function Navbar() {
  return (
    <div className={navstyle.nav}>
        <div className={navstyle.navcontent}>
        <img src='https://cdn-icons-png.flaticon.com/128/4290/4290854.png' alt=''
        className={navstyle.navcontentimg}/>
        <span className={navstyle.navcontentspan}>4</span>
    </div>
    </div>

  )
}

export default Navbar