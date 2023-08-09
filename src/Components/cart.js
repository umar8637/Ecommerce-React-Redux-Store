import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addQuantity, removeFromCart, removeQuantity } from "../redux/actions";
import "./Cart.css";

const Cart = () => {
  const cartItems = useSelector((state) => state.cartItems);

  const dispatch = useDispatch();

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handleAddQuantity = (product) => {
    dispatch(addQuantity(product));
  };

  const handleRemoveQuantity = (product) => {
    dispatch(removeQuantity(product));
  };

  return (
    <div className="cart">
      <h2 style={{ textAlign: "center" }}>Your Cart</h2>
      <ul>
        {cartItems.map((item) => (
          <li key={item.id} className="cart-item">
            <img src={item.image} alt={item.name} />
            <div className="cart-item-details">
              <div className="cart-item-name">{item.name}</div>
              <div className="cart-item-price">${item.price}</div>
              <div className="cart-item-quantity">
                <button onClick={() => handleRemoveQuantity(item)}>-</button>
                <span>{item.quantity}</span>
                <button onClick={() => handleAddQuantity(item)}>+</button>
              </div>
              <button
                className="remove-button"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cart;
