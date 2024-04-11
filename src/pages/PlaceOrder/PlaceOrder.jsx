import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

function PlaceOrder() {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
     <form  className='  flex items-center justify-center gap-40 '>
        <div className="right">
        <form  className="space-y-4">
            <h1 className=' text-3xl font-bold '>Delivery Information</h1>
        <div>
          
          <input
            type="text"
            
            className="block w-full border border-orange-500 rounded-md px-4 py-2"
            placeholder='Full name'
            required
          />
        </div>
        <div>
         
          <input
            type="text"
            
            
            placeholder='E-mail'
            className="block w-full border border-orange-500 rounded-md px-4 py-2"
            required
          />
        </div>
        <div>
          
          <input
            type="text"
           
           placeholder='City'
            className="block w-full border border-orange-500 rounded-md px-4 py-2"
            required
          />
        </div>
        <div>
         
          <input
            type="text"
            id="postalCode"
            name="postalCode"
            placeholder='Address'
            className="block w-full border border-orange-500 rounded-md px-4 py-2"
            required
          />
        </div>
        <div>
         
         <input
           type="text"
           placeholder='Postalcode'
           className="block w-full border border-orange-500 rounded-md px-4 py-2"
           required
         />
       </div>
       
      </form>
        </div>
         <div className="left-deta  w-[50vw]">
         <div className="cart-total flex-1 flex flex-col p-24">
          <h2 className=" text-xl font-bold mb-5">Cart Totals</h2>
          <div className="   ">
            <div className="cart-totl-det  flex  items-center justify-between p-2 ">
              <h4 className="text-xl">Subtotal</h4>
              <h4>${getTotalCartAmount()}</h4>
            </div>
            <hr />
            <div className="cart-totl-det  flex items-center justify-between p-2">
              <h4 className=" text-xl">Delivery Fee</h4>
              <h4>${getTotalCartAmount()===0?0:2}</h4>
            </div>
             <hr />
            <div className="cart-totl-det flex items-center justify-between p-2">
              <h4 className=" text-xl">Total</h4>
              <h4>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</h4>
            </div>
          </div>
          <button  className=" border border-solid border-e-slate-300 bg-[#FF4C24] text-white rounded-lg w-48 p-3 mt-3 " >Proceed to Payment</button>
        </div>
         </div>
     </form>
  )
}

export default PlaceOrder