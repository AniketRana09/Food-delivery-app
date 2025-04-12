import React from "react";
import { CDN_URL } from "../Utils/Constant";

const ItemList = ({ items }) => {
  console.log(items);

  return (
    <div>
      <ul className="w- ml-auto mr-auto ">
        {items.map((items) => (
          <li
            key={items?.card?.info?.id}
            className={
              " bg-gray-200 m-3  items-center p-5 rounded-md border-b-2 border-black shadow-md"
            }
          >
            <div className={" flex justify-between"}>
              <div className="w-3/4">
                <span className="font-semibold">{items?.card?.info?.name}</span>
                -₹.
                {items?.card?.info?.price / 100 ||
                  items?.card?.info?.defaultPrice / 100}
                <p className="text-sm pt-2 pb-4 text-gray-600">
                  {items?.card?.info?.description}
                </p>
              </div>
              <div>
                <div className=" absolute">
                  <button className="p-3 bg-white shadow-lg font-semibold rounded-md mx-12 my-16 ">
                    Add +
                  </button>
                </div>
                <img
                  className="h-24 w-28 rounded-lg "
                  src={CDN_URL + items?.card?.info?.imageId}
                />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
