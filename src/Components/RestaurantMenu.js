// import React, { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resid } = useParams();
  const resInfo = useRestaurantMenu(resid);

  // useEffect(() => {
  //   fetchMenu();
  // const fetchMenu = async () => {
  //}, []);
  //    const data = await fetch(MENU_URL + resid);

  //   const json = await data.json();
  //   console.log(json);
  //   setResInfo(json.data);
  // };

  if (resInfo === null) return <Shimmer />;
  //const {name,cuisines,cloudinaryImageId}=resInfo?.cards[2]?.card?.card?.info
  const { name, cuisines, costForTwo } = resInfo?.cards[2]?.card?.card?.info;
  // const { itemCards } =
  //   resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  console.log(resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards);
  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div>
      <h1 className="text-center font-bold text-3xl">{name} </h1>
      <h2 className="text-center text-3xl font-semibold">Menu</h2>
      <h3 className="text-center">Cost For Two :₹.{costForTwo / 100}</h3>
      <p className="text-center"> Cuisines: {cuisines.join(",")}</p>

      {categories.map((category) => (
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
