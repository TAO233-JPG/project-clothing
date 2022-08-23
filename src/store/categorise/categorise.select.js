import { createSelector } from "reselect";

export const selectCategoriesReducer = (state) => state.categories;

// 使用reselect进行缓存
export const selectCategoriesMap = createSelector(
  [selectCategoriesReducer],
  (categories) =>
    categories.categories.reduce((acc, category) => {
      const { title, items } = category;
      acc[title.toLowerCase()] = items;
      return acc;
    }, {})
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
