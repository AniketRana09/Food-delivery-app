import React, { useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = () => {
  const [listofRes, SetListofRes] = useState([]);
  const [filteredRes, SetFilteredRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  console.log(listofRes);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=31.3260152&lng=75.57618289999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    //Optinal chaining
    SetListofRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    SetFilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false)
    return (
      <h1>
        Looks like you are offline!
        <br /> check your internet and Try Again
      </h1>
    );

  return listofRes.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className='search'>Search</div> */}
      <div className="flex justify-between p-3 m-3">
        <div className="search">
          <input
            type="text"
            value={searchText}
            className="w-52 p-3 m-3 rounded-2xl "
            placeholder="Search"
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="bg-slate-500 p-3 m-2 rounded-xl"
            onClick={() => {
              const filterList = listofRes.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              SetFilteredRes(filterList);
            }}
          >
            Search
          </button>
        </div>
        <div>
          <button
            className="p-3 m-3 bg-orange-400 text-white rounded-lg font-semibold"
            onClick={() => {
              //Filter Logic
              const filteredList = listofRes.filter(
                (res) => res.info.avgRating > 4.5
              );
              SetFilteredRes(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
      </div>
      <div className="flex flex-wrap gap-2 items-center justify-center">
        {filteredRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"restaurant/" + restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
