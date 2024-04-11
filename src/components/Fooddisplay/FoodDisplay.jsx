import React, { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'
import FoodItem from '../Fooditem/FoodItem'

// eslint-disable-next-line react/prop-types
function FoodDisplay({Category}) {

    const {food_list} = useContext(StoreContext)
  return (
    <div className=' w-full mt-4 px-5'> 
        <h2 className=' ml-5  text-2xl font-bold font-["gilroy"] capitalize'>Top dishes near you</h2>
        <div className='  grid grid-cols-4 mt-10 p-10 gap-10 '>
            {food_list.map((item , index)=>{
              {console.log(Category,item.Category)}
              if (Category==='All' || Category===item.Category) {
                return <FoodItem key={index} id={item.id} name={item.name} price={item.price} description={item.description} image={item.image} />
              }
               
               

            })}
        </div>
    </div>
  )
}

export default FoodDisplay