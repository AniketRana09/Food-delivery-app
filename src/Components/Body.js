import React, { useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import { useState } from 'react'
import Shimmer from './Shimmer';


const Body = () => {

  const [listofRes,SetListofRes]=useState([]);
  const [filteredRes,SetFilteredRes]=useState([]);
  const [searchText,setSearchText]=useState("")

  useEffect(()=>{
    fetchData();
    
  },[]);
  const fetchData= async()=>{
    const data=await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3260152&lng=75.57618289999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING')
    const json=await data.json();
    console.log(json);
    //Optinal chaining
    SetListofRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    SetFilteredRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  };
 
  return listofRes.length === 0 ? (
    <Shimmer/>):(
    <div className='body'>
    {/* <div className='search'>Search</div> */}
    <div className='filter'>
      <div className='search'>
        <input type='text' value={searchText} className='search-box' placeholder='Search' onChange={(e)=>{
          setSearchText(e.target.value)
        }}/>
        <button className='search-btn' onClick={()=>{
           const filterList = listofRes.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase()));
           SetFilteredRes(filterList);
        }}>Search</button>

      </div>
      <div>
      <button  className='filter-btn' onClick={()=>{
        //Filter Logic 
        const filteredList = listofRes.filter((res)=> res.info.avgRating > 4.5);
        SetFilteredRes(filteredList);
       }}>Top Rated Restaurants</button></div>
    </div>
    <div className='res-container'>
     {
      filteredRes.map(restaurant=><RestaurantCard key={restaurant.info.id} resData={restaurant}/>)
     }
    </div>
  </div>
  )
}

export default Body
