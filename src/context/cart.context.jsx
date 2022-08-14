import { createContext, useState, useEffect } from "react";

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
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    const newCartCount = cartItems.reduce(
      (total, pre) => total + pre.quantity,
      0
    );
    setCartCount(newCartCount);

    const newCartTotal = cartItems.reduce(
      (total, pre) => total + pre.quantity * pre.price,
      0
    );
    setCartTotal(newCartTotal);
  }, [cartItems]);

  const addItemToCart = (producToAdd) => {
    setCartItems(addCartItem(cartItems, producToAdd));
  };

  const removeItemFromCart = (producToRemove) => {
    setCartItems(removeCartItem(cartItems, producToRemove));
  };

  const clearItemFromCart = (itemToClear) => {
    setCartItems(clearCartItem(cartItems, itemToClear));
  };

  const value = {
    isCartOpen,
    setIsCartOpen,

    cartItems,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,

    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
