import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'


function Navbar({setShowLogin}) {
    
const [Menu, setMenu] = useState('menu')

  return (
    <div className=' m-7 px-5 py-3 flex items-center justify-between navbar'>
       <div className='logo'>
      <Link to='/'><img src={assets.logo} alt="" /></Link>    
       </div>
       <ul className=' flex items-center gap-10 capitalize font-["gilroy"] navbar-menu cursor-pointer'>
        <Link to='/' onClick={()=>setMenu("Home")}  className={Menu==="Home"?"active":""} > Home </Link>
        <a href='#Explore-menu' onClick={()=>setMenu("menu")}  className={Menu==="menu"?"active":""}> menu </a>
        <a href='#App-download' onClick={()=>setMenu("mobile-app")}  className={Menu==="mobile-app"?"active":""}>mobile-app</a>
        <a href='#Footer-part' onClick={()=>setMenu("contact-us")}  className={Menu==="contact-us"?"active":""}> contact-us </a>
       </ul>
       <div className='search-icon flex gap-12 h-6'>
         <img src={assets.search_icon} alt="" />
         <Link to='/cart' > <img src={assets.basket_icon} alt="" /> </Link>
       </div>
         <button className=' border-2 px-4  py-1 rounded-full text-grey hover:bg-[#fff4f2] border-[#fff4f2] ' onClick={()=>{setShowLogin(true)}}>Sign in</button>
    </div>
  )
}

export default Navbar