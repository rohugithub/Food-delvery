import React from 'react'
import { assets } from '../../assets/assets'

function AppDownload() {
  return (
    <div className=' m-10' id='App-download'>
      <p className=' text-4xl text-center font-bold font-[gilroy]'>For Better Experience Download<br/> Tomato App</p>
        <div className=' flex items-center justify-center gap-10 m-2 mt-5 cursor-pointer'>
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
    </div>
  )
}

export default AppDownload