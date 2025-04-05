import React from "react";
import { CDN_URL } from "../Utils/Constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, cloudinaryImageId } = resData.info;
  const { deliveryTime } = resData.info.sla;

  return (
    <div className="res-card">
      <img className="res-image" src={CDN_URL + cloudinaryImageId} alt="logo" />
      <h3>{name}</h3>
      <p>{cuisines.join(" , ")}</p>
      <h5>⭐{avgRating}</h5>
      <h5>{deliveryTime} min</h5>
    </div>
  );
};

export default RestaurantCard;
