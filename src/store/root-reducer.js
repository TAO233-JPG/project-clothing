import { combineReducers } from "redux";

import UserReducer from "./user/user.reducer";
import categoriesReducer from "./categorise/categorise.reducer";

export const rootReducer = combineReducers({
  user: UserReducer,
  categories: categoriesReducer,
});
