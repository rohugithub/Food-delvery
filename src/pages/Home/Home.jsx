import React, { useState } from 'react'
import Header from '../../components/Header/Header'
import Exploremenu from '../../components/ExploreMenu/Exploremenu'
import FoodDisplay from '../../components/Fooddisplay/FoodDisplay'

function Home() {
  
  const [Category, setCategory] = useState('All')
  return (
    <div>
        <Header/>
        <Exploremenu Category={Category} setCategory={setCategory}/>
        <FoodDisplay Category={Category} />
    </div>
  )
}

export default Home