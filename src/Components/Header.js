import React, { useEffect, useState } from "react";
import { LOGO_URL } from "../Utils/Constant";
import { Link } from "react-router-dom";

const Header = () => {
  const [btnReact, setBtnReact] = useState("Log in");

  useEffect(() => {
    console.log("useEffect Called!");
  }, []);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} alt="logo" />
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link to="/"> Home</Link>{" "}
          </li>
          <li>
            <Link to="/about"> About</Link>
          </li>
          <li>
            <Link to="/contact"> Contact</Link>
          </li>
          <li>
            <Link to="/cart"> Cart</Link>
          </li>
          <button
            className="login-btn"
            onClick={() => {
              btnReact === "Log in"
                ? setBtnReact("Log out")
                : setBtnReact("Log in");
            }}
          >
            {btnReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
