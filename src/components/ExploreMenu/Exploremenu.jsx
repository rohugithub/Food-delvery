import React from 'react'
import { menu_list } from '../../assets/assets'

// eslint-disable-next-line react/prop-types
function Exploremenu({Category, setCategory}) {
  return (
    <div className=' w-full px-10  p-1 flex flex-col gap-10  '>
        <h1 className='font-bold text-3xl  mt-3 text-[#262626]'>Explore our menu</h1>
        <p className=' font-semibold text-[#262626] w-[45vw] mt-2'> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Atque odit sequi tenetur natus? Saepe iusto itaque error, asperiores animi veniam!</p>
        <div className='Explore-menu-list mt-4  flex  justify-between items-center gap-10 text-center  m-[20px]  '>
            {menu_list.map((item, index)=>{
                return(
                    <div onClick={()=>setCategory(prev=>prev ===item.menu_name?"All":item.menu_name)} key={index} className=' explore-menu-list-item cursor-pointer' >
                         <img className={Category ===item.menu_name? "active" : ""} src={item.menu_image} alt="" />
                         <p className=' mt-2 text-xl text-[#262626] '>{item.menu_name}</p>
                    </div>
                )
            })}
           
        </div>
        <div className=' h-[2.5px] w-full bg-[#e2e2e2]'></div>
    </div>
  )
}

export default Exploremenu