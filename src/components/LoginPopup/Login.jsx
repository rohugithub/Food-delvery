import React, { useState } from 'react'
import { assets } from '../../assets/assets'

function Login({setShowLogin}) {
    const [currState, setCurrState] = useState("Login")

  return (
    <div className='login-pop  z-20 absolute top-80 left-1/2 -translate-x-[50%] -translate-y-[50%] bg-white  rounded-md py-5 px-5 '>
        <form action="" className='login-material     ' >
            <div className='login-tittle  flex items-center justify-center m-2 gap-60'>
                <h2 className=' text-[1.3vw] font-bold '>{currState}</h2>
                <img className='w-4' onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
            </div>
             <div className='login-inputs  flex flex-col gap-5 text-center '>
                {currState==="Login"?<></>: <input type="text" placeholder='Name' required className='w-[20vw] border border-solid border-gray-400 rounded-md  p-2' />}
               
                <input type="text" placeholder='email' required  className='w-[20vw] border border-solid border-gray-400 rounded-md  p-2 ' />
                <input type="password" placeholder='password' required  className='w-[20vw] border border-solid border-gray-400 rounded-md p-2'/>
             </div>
             <button className=' border border-solid border-gray-400  rounded-md bg-[#EC6915] text-white px-8 border-none text-md   ml-[6vw]  mt-4 py-1'>{currState==="Sign Up"?"Create account":"Login"}</button>
             <div className='flex gap-4 font-semibold text-gray-400'>
                <input type="checkbox"  />
                <p className=' text-sm font-[gilroy] w-64 mt-3 text-center '>By continuing, i agree to the term of use & privacy policy .</p>
             </div>
             {currState==="Login"
             ?<p className='mt-3 text-center text-[#232825] text-md font-bold'>Create a new account ? <span onClick={()=>{setCurrState("Sign Up")}} className='text-[#E09548] cursor-pointer'>Click here</span></p>
             :<p className='mt-3 text-center text-[#232825] text-md font-bold '>Already have an account ? <span onClick={()=>{setCurrState("Login")}} className=' text-[#E09548] cursor-pointer'>Login </span></p>}
             
            
        </form>
    </div>
  )
}

export default Login