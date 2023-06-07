import React from "react";
import { LOGO_LINK } from "../utils/constants";
 const Header = () => {
  return (
    <div className="header">
      <div className="food-logo">
        <img src={LOGO_LINK} />
      </div>
      <div>

      </div>
      <div className="nav-item">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
