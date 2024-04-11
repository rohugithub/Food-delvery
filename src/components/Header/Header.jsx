import React from 'react'

function Header() {
  return (
    <div className='header  h-screen w-full  overflow-hidden  animate-fadeIn '> 

       <div className=' m-5 p-10 h-[40vw] bg-no-repeat bg-cover  bg-[url("/public/header_img.png")] relative'> 
        <h2  className=' font-bold font-["gilroy"] text-6xl absolute top-48  left-20 text-white'>Order your <br/> favourite food here</h2>
        <p className=' w-[42vw] absolute top-[25vw] left-20 font-semibold tracking-tight leading-5 text-white' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum tempora quas enim recusandae commodi quos expedita dolorem maiores sapiente libero. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Praesentium, vitae.</p>
        <button className='  border-2 px-6  py-2 rounded-full text-gray absolute top-[32vw] left-20 bg-white hover:text-white hover:bg-[#ff4c24] transition-all border-none'>View now</button>
       </div>
     </div>
  )
}

export default Header