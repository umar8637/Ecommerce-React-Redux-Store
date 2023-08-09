// Action types
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const ADD_QUANTITY = "ADD_QUANTITY";
export const REMOVE_QUANTITY = "REMOVE_QUANTITY";

// Action creators
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: {
    ...product,
  },
});

export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});

export const addQuantity = (product) => ({
  type: ADD_QUANTITY,
  payload: product,
});

export const removeQuantity = (product) => ({
  type: REMOVE_QUANTITY,
  payload: product,
});
