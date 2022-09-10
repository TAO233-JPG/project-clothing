import { CategoryType, CATEGORIES_ACTION_TYPES } from './categorise.type'

import { createAction, ActionWithPayload, Action, withMatcher } from '../../utils/reducer/reducer.utils'

export type FetchCategoriesStartType = Action<CATEGORIES_ACTION_TYPES.FETCH_CATEGORISE_START>

export type FetchCategoriesSuccessType = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORISE_SUCCESS, CategoryType[]>

export type FetchCategoriesFailType = ActionWithPayload<CATEGORIES_ACTION_TYPES.FETCH_CATEGORISE_ERROR, Error>

export const fetchCategoriesStart = withMatcher(
  (): FetchCategoriesStartType => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORISE_START)
)

export const fetchCategoriesSuccess = withMatcher(
  (categories: CategoryType[]): FetchCategoriesSuccessType =>
    createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORISE_SUCCESS, categories)
)

export const fetchCategoriesFail = withMatcher(
  (error: Error): FetchCategoriesFailType => createAction(CATEGORIES_ACTION_TYPES.FETCH_CATEGORISE_ERROR, error)
)

// export const fetchCategoriesAsync = async (dispatch) => {
//   dispatch(fetchCategoriesStart());

//   try {
//     const categories = await getCategoriesAndDocuments();
//     dispatch(fetchCategoriesSuccess(categories));
//   } catch (error) {
//     dispatch(fetchCategoriesFail(error));
//   }
// };
