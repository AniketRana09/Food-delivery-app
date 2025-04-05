import React, { useEffect, useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_URL } from '../Utils/Constant';

const RestaurantMenu = () => {
  const [resInfo,setResInfo]=useState(null);
  const {resid}=useParams();
  console.log({resid});
  
  
  useEffect(()=>{
    fetchMenu();
   },[]);
   const fetchMenu=async()=>{
    const data=await fetch(MENU_URL+resid)
  
   const json=await data.json();
   console.log(json);
   setResInfo(json.data);
  };

  if (resInfo===null) return<Shimmer/>
 //const {name,cuisines,cloudinaryImageId}=resInfo?.cards[2]?.card?.card?.info
 const {name,cuisines,costForTwo}=resInfo?.cards[2]?.card?.card?.info;
 const {itemCards}=resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
 console.log(itemCards);
 
  return (
    <div>
        <h1>{name} </h1>
        <h2>Menu</h2>
        <h3>Cost For Two :Rs.{costForTwo/100}</h3>
        <p>
         Cuisines: {cuisines.join(",")}
        </p>
        <ul>
           {itemCards.map((items)=>(
            
            <li key={items?.card?.info?.id}> {items?.card?.info?.name}- Rs{(items?.card?.info?.price)/100||(items?.card?.info?.defaultPrice)/100}</li>

            ))}
           
        </ul>
    </div>
  )
}

export default RestaurantMenu