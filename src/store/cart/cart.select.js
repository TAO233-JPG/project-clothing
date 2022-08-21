import { createSelector } from "reselect";

export const selectCartsReducer = (state) => state.cart;

export const selectIsCartOpen = createSelector(
  [selectCartsReducer],
  (cart) => cart.isCartOpen
);

export const selectCartItems = createSelector(
  [selectCartsReducer],
  (cart) => cart.cartItems
);

export const selectCartCount = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, pre) => total + pre.quantity, 0)
);

export const selectCartTotal = createSelector([selectCartItems], (cartItems) =>
  cartItems.reduce((total, pre) => total + pre.quantity * pre.price, 0)
);
