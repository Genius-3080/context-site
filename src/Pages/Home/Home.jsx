import React, { useContext } from 'react'
import { Context } from '../../Context/Context'
import '../Home/Home.css'
function Home() {
    const {mode, setMode} = useContext(Context)
    console.log(mode);
  return (
    <div className={mode ? "header" : "header2"}>
    
      <div className="container">
    
    <div className="nav">
      <h1 className={mode ? "nav__btn" : "nav__btn2"}>Microsoft Apps</h1>
       <ul>
        <li className={mode ? "nav__btn" : "nav__btn2"}>Home</li>
       <li className={mode ? "nav__btn" : "nav__btn2"}>About Us</li>
       <li className={mode ? "nav__btn" : "nav__btn2"}>Services</li>
       <li className={mode ? "nav__btn" : "nav__btn2"}>Support</li>
       <li className={mode ? "nav__btn" : "nav__btn2"}>Log in</li>
       </ul>
            <button className={mode ? "nav__btn" : "nav__btn2"}  onClick={()=> setMode(!mode)}>Mode</button>
  
    </div>
  </div>
      
    
      
  </div>
  )
}

export default Home
