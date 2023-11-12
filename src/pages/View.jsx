import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

function View() {
   const {id} = useParams()
   const {allRestaurants,loading,error,allRestaurantsContainer} = useSelector((state)=>state.restaurantSlice)
   const [restaurant,setRestaurant] = useState({})
   useEffect(()=>{
    allRestaurants?.find(item=>item.id==id)
   },[])
  return (
    <div>View</div>
  )
}

export default View