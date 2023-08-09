import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/actions";
import "./ProductList.css";

const ProductList = ({ products }) => {
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  const isProductInCart = (productId) => {
    return cartItems.find((item) => item.id === productId);
  };

  const handleAddToCart = (product) => {
    if (!isProductInCart(product.id)) {
      dispatch(addToCart(product));
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 2000);
    }
  };

  return (
    <div className="product-list">
      <h2 style={{ textAlign: "center" }}>Product List</h2>

      {showAlert && <div className="alert">Product added to the Cart</div>}

      <div className="card-container">
        {products.map((product) => (
          <div key={product.id} className="card">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.price} $</p>
            <button
              className={isProductInCart(product.id) ? "in-cart" : ""}
              onClick={() => handleAddToCart(product)}
            >
              {isProductInCart(product.id) ? "In Cart" : "Add to Cart"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
