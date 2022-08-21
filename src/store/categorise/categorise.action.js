import { CATEGORIES_ACTION_TYPES } from "./categorise.reducer";

export const setCategories = (categories) => ({
  type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
  payload: categories,
});
