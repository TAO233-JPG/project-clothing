import { createContext, useReducer } from "react";

export const CART_ACTION_TYPES = {
  UPDATE_CART_ITEMS: "UPDATE_CART_ITEMS",
  SET_IS_CART_OPEN: "REOMVE_CART_ITEM",
};

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.UPDATE_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`unkown type:> ${type} in cartReducer`);
  }
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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
});

export const CartProvider = ({ children }) => {
  const [{ cartItems, cartCount, cartTotal, isCartOpen }, dispatch] =
    useReducer(cartReducer, INITIAL_STATE);

  const updateCartItems = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, pre) => total + pre.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (total, pre) => total + pre.quantity * pre.price,
      0
    );

    const payload = {
      cartItems: newCartItems,
      cartCount: newCartCount,
      cartTotal: newCartTotal,
    };

    dispatch({ type: CART_ACTION_TYPES.UPDATE_CART_ITEMS, payload });
  };

  const addItemToCart = (producToAdd) => {
    const newCartItems = addCartItem(cartItems, producToAdd);
    updateCartItems(newCartItems);
  };

  const removeItemFromCart = (producToRemove) => {
    const newCartItems = removeCartItem(cartItems, producToRemove);
    updateCartItems(newCartItems);
  };

  const clearItemFromCart = (itemToClear) => {
    const newCartItems = clearCartItem(cartItems, itemToClear);
    updateCartItems(newCartItems);
  };

  const setIsCartOpen = (bool) => {
    dispatch({ type: CART_ACTION_TYPES.SET_IS_CART_OPEN, payload: bool });
  };

  const value = {
    isCartOpen,
    setIsCartOpen,

    cartItems,
    cartCount,
    cartTotal,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
