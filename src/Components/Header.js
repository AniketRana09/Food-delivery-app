import React, { useState, useContext } from "react";
import { LOGO_URL } from "../Utils/Constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnReact, setBtnReact] = useState("Log in");
  const onlineStatus = useOnlineStatus();
  const data = useContext(UserContext);
  //Subscribing to the Stoe using useSelector
  const CartItems = useSelector((store) => store.cart.items);

  return (
    <div className=" flex justify-between items-center bg-orange-400">
      <div className="">
        <img className="w-32 rounded-full" src={LOGO_URL} alt="logo" />
      </div>
      <div className="text-2xl font-semibold text-white">
        <ul className="flex p-4 m-4">
          <li className="m-3 p-3">
            Online Status:{onlineStatus ? "🟢" : "🔴"}
          </li>
          <li className="m-3 p-3">
            <Link to="/"> Home</Link>{" "}
          </li>
          <li className="m-3 p-3">
            <Link to="/about"> About</Link>
          </li>
          <li className="m-3 p-3">
            <Link to="/contact"> Contact</Link>
          </li>
          <li className="m-3 p-3">
            <Link to="/cart"> Cart({CartItems.length})</Link>
          </li>
          <button
            className="m-3 p-3 bg-red-500"
            onClick={() => {
              btnReact === "Log in"
                ? setBtnReact("Log out")
                : setBtnReact("Log in");
            }}
          >
            {btnReact}
          </button>
          <li className="p-3 m-3 font-semibold">{data.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
