import React from 'react'
import { CDN_URL } from '../Utils/Constant';

const RestaurantCard=(props)=>{
    const {resData}=props;
    
     const {name,cuisines,avgRating,cloudinaryImageId,}=resData.info;
     const {deliveryTime}=resData.info.sla;
  
  
    
    
    return(
      <div className='res-card'>
        <img className='res-image' src={CDN_URL+ cloudinaryImageId} alt='logo'/>
        <h2>{name}</h2>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>{avgRating}</h4>
        <h4>{deliveryTime} min</h4>
      </div>
    )
  } 

export default RestaurantCard
