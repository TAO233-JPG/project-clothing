import { CATEGORIES_ACTION_TYPES } from "./categorise.reducer";

// import { getCategoriesAndDocuments } from "../../utils/filebase.util";

export const setCategories = (categories) => ({
  type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES,
  payload: categories,
});

export const fetchCategoriesStart = () => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORISE_START,
});

export const fetchCategoriesSuccess = (categories) => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORISE_SUCCESS,
  payload: categories,
});
export const fetchCategoriesFail = (error) => ({
  type: CATEGORIES_ACTION_TYPES.FETCH_CATEGORISE_ERROR,
  payload: error,
});

// export const fetchCategoriesAsync = async (dispatch) => {
//   dispatch(fetchCategoriesStart());

//   try {
//     const categories = await getCategoriesAndDocuments();
//     dispatch(fetchCategoriesSuccess(categories));
//   } catch (error) {
//     dispatch(fetchCategoriesFail(error));
//   }
// };
