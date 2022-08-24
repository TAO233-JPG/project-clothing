import { all, call, takeLatest, put } from "redux-saga/effects";
import {
  fetchCategoriesFail,
  fetchCategoriesSuccess,
} from "./categorise.action";
import { CATEGORIES_ACTION_TYPES } from "./categorise.reducer";
import { getCategoriesAndDocuments } from "../../utils/filebase.util";

export function* fetchCategoriesAsync() {
  try {
    const categories = yield call(getCategoriesAndDocuments);
    yield put(fetchCategoriesSuccess(categories));
  } catch (error) {
    yield put(fetchCategoriesFail(error));
  }
}

export function* onFetchCategories() {
  yield takeLatest(
    CATEGORIES_ACTION_TYPES.FETCH_CATEGORISE_START,
    fetchCategoriesAsync
  );
}

export function* categoriesSaga() {
  yield all([call(onFetchCategories)]);
}
