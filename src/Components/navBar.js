import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import "./Navbar.css";

const Navbar = () => {
  const cartItems = useSelector((state) => state.cartItems);
  const cartItemCount = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" className="logo-link">
          E-Commerce Store
        </Link>
      </div>
      <div className="cart-icon">
        <Link to="/cart" className="cart-link">
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="cart-count">{cartItemCount}</span>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
