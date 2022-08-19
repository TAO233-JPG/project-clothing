import { CATEGORIES_ACTION_TYPES } from "./categorise.reducer";

export const setCategoriesMap = (categories) => ({
  type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP,
  payload: categories,
});
