import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, food_list, removeCartItem,getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  return (
    <div className="cart">
      <div className="cart-item ">
        <div className="cart-items-tittle p-16 capitalize  grid grid-cols-6 ml-16  text-xl font-medium">
          <p>items</p>
          <p>tittle</p>
          <p>price</p>
          <p>quantity</p>
          <p>total</p>
          <p>remove</p>
        </div>
        <br />
        <div className=" w-[80vw] h-[.2vw] rounded-full bg-[#9b9a9a] mb-5 ml-28  px-5"></div>
        {food_list.map((item, index) => {
          if (cartItems[item.id] > 0) {
            return (
              // eslint-disable-next-line react/jsx-key
              <div>
                <div className=" cart-item-detail   mb-5 grid grid-cols-6 ml-28 items-center ">
                  <img
                    className=" w-[100px] rounded-md"
                    src={item.image}
                    alt=""
                  />
                  <h4>{item.name}</h4>
                  <h4>${item.price}</h4>
                  <h4>{cartItems[item.id]}</h4>
                  <h4>${item.price * cartItems[item.id]}</h4>
                  <h4
                    onClick={() => removeCartItem(item.id)}
                    className=" cursor-pointer text-black font-bold text-xl hover:text-[#FF4C24] transition-all"
                  >
                    X
                  </h4>
                </div>
                <div className=" w-[80vw] h-[.1vw] rounded-full bg-[#9b9a9a] mb-5 ml-28  px-5"></div>
              </div>
            );
          }
        })}
      </div>
      <div className="cart-bottom flex itemce justify-around ">
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
          <button onClick={()=>{navigate('/order')}} className=" border border-solid border-e-slate-300 bg-[#FF4C24] text-white rounded-lg w-48 p-3 " >Proceed to checkout</button>
        </div>
        <div className="card-promo mr-20 mt-24">
            <div>
              <p className=" text-md mb-3">If you have Coupan Code, Enter here</p>
              <div className="enter-coupan-inpu  rounded-md "> 
                <input type="text" placeholder="Enter Coupan"  className=" w-80 bg-gray-300 p-2 border border-solid border-e-black rounded-md" />
                <button className=" border w-20 rounded-md bg-[#000000d5] border-none text-white p-2 hover:bg-[#ff4c24c9] transition-all">Submit</button>
              </div>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
