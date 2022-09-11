import { createSelector } from "reselect";
import { RootState } from "../store";
import { CategoryStateType } from "./categorise.reducer";
import { CategoryMapType } from "./categorise.type";

export const selectCategoriesReducer = (state: RootState): CategoryStateType =>
  state.categories;

// 使用reselect进行缓存
export const selectCategoriesMap = createSelector(
  [selectCategoriesReducer],
  (categories): CategoryMapType =>
    categories.categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {} as CategoryMapType)
);

export const selectIsLoading = createSelector(
  [selectCategoriesReducer],
  (categories) => categories.isLoading
);

// export const selectCategoriesMap = ({ categories }) =>
//   categories.categories.reduce((acc, category) => {
//     const { title, items } = category;
//     acc[title.toLowerCase()] = items;
//     return acc;
//   }, {});
