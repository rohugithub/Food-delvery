import React, { useContext } from 'react'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../context/StoreContext'


// eslint-disable-next-line react/prop-types
function FoodItem({id,name,price,description,image}) {
  

  const {cartItems, addToCart, removeCartItem} = useContext(StoreContext);
  
  
  return (
    <div className=' shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] rounded-t-lg'>
        <div className='image-container  relative '> 
              <img className='rounded-t-lg' src={image} alt="" />
            {!cartItems[id]
               ?<img className=' absolute top-36 left-52 ' onClick={()=>addToCart(id)} src={assets.add_icon_white} alt="" />
               :<div className='food-item-counter  absolute top-40 left-32 flex justify-center items-center gap-5 bg-white p-1 rounded-full'>
                   <img onClick={()=>removeCartItem(id)} src={assets.remove_icon_red} alt="" />
                   <h4 className='text-xl font-bold'>{cartItems[id]}</h4>
                   <img onClick={()=>addToCart(id)} src={assets.add_icon_green} alt="" />
               </div>
            }

        </div>
        <div className='food-item-info p-5'>
            <div className='food-item-name-rating flex justify-center items-center gap-14'>
                <p className=' text-md font-bold font-["gilroy"]'>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>  
            <p className='fooo-descp  w-60 mt-4 text-[#676767] text-[1vw]'>{description}</p>
            <p className='food-price mt-3 font-bold text-xl text-[#FF623F]'>${price}</p>
        </div>
    </div>
  )
}

export default FoodItem