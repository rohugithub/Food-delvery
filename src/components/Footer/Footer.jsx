import React from "react";

import { assets } from '../../assets/assets'

function Footer() {
  return (
    <>
       <div className="footer w-full px-20 py-20 bg-[#323232] grid grid-cols-3 gap-80 ">
      <div className=" Footer-conta1 cursor-pointer">
         <img src={assets.logo} alt="" />
         <p className=" w-[30vw] mt-5 text-white ">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vero reiciendis corporis minus illum quibusdam fuga quidem velit quam inventore totam. Alias temporibus explicabo molestiae illum!</p>
         <div className="social-media-icon flex items-center justify-start gap-6 mt-6 cursor-pointer">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
         </div>
      </div>
      <div className="Footer-coont2 ml-20 list-none capitalize text-white cursor-pointer ">
        <h2 className=" uppercase text-2xl font-bold text-white">comapny</h2>
        <li className=" mt-3">home</li>
        <li>about</li>
        <li>delivery</li>
        <li>privacy policy</li>
      </div>
      <div className="Footer-cont3 text-white">
        <h2 className=" uppercase text-white text-2xl font-bold mt-2"> get in touch</h2>
        <p>+91 5451-5445-6565</p>
        <p>tomato@gmail.com</p>
      </div>
       </div>
       
       <div className="bg-[#323232]  text-center  text-md text-[#e2e2e2]">Copyrigh 2024 c Tomato.com - All Right Reserved</div>
    </>
   
  );
}

export default Footer;
