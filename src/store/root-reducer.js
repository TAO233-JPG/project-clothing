import { combineReducers } from "redux";

import UserReducer from "./user/user.reducer";
import categoriesReducer from "./categorise/categorise.reducer";
import cartReducer from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  user: UserReducer,
  categories: categoriesReducer,
  cart: cartReducer,
});
