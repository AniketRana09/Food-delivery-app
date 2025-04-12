import React from "react";
import { CDN_URL } from "../Utils/Constant";

const RestaurantCard = (props) => {
  const { resData } = props;

  const { name, cuisines, avgRating, cloudinaryImageId } = resData.info;
  const { deliveryTime } = resData.info.sla;

  return (
    <div className="w-72 bg-gray-300 m-4 p-4 rounded-md h-96 shadow-xl hover:shadow-orange-300 duration-300">
      <img
        className="rounded-lg h-56 w-full"
        src={CDN_URL + cloudinaryImageId}
        alt="logo"
      />
      <h3 className="font-bold text-lg">{name}</h3>
      <p>{cuisines.join(" , ")}</p>
      <h5>⭐{avgRating}</h5>
      <h5>{deliveryTime} min</h5>
    </div>
  );
};

//Higher Order Component
//-input as -Restaurant Card =>Restaurant.CardPromoted

// export const withRatedLabel = (RestaurantCard) => {
//   return () => {
//     return (
//       <div>
//         <label>Rating</label>
//         <RestaurantCard />
//       </div>
//     );
//   };
// };

export default RestaurantCard;
