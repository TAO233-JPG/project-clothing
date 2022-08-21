import { CART_ACTION_TYPES } from "./cart.reducer";

export const addItemToCart = (cartItems, producToAdd) => {
  const newCartItems = addCartItem(cartItems, producToAdd);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};

export const removeItemFromCart = (cartItems, producToRemove) => {
  const newCartItems = removeCartItem(cartItems, producToRemove);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};

export const clearItemFromCart = (cartItems, itemToClear) => {
  const newCartItems = clearCartItem(cartItems, itemToClear);
  return { type: CART_ACTION_TYPES.SET_CART_ITEMS, payload: newCartItems };
};

const addCartItem = (cartItems, productToAdd) => {
  const hasExisted = cartItems.find((item) => item.id === productToAdd.id);

  if (hasExisted) {
    return cartItems.map((item) =>
      item.id === productToAdd.id
        ? { ...item, quantity: item.quantity + 1 }
        : item
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, producToRemove) => {
  if (producToRemove.quantity === 1) {
    return cartItems.filter((item) => item.id !== producToRemove.id);
  }

  return cartItems.map((item) =>
    item.id === producToRemove.id
      ? { ...producToRemove, quantity: producToRemove.quantity - 1 }
      : item
  );
};

const clearCartItem = (cartItems, itemToClear) => {
  return cartItems.filter((item) => item.id !== itemToClear.id);
};

export const setIsCartOpen = (bool) => {
  return { type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool };
};
