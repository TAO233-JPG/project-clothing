import { all, call, takeLatest, put } from 'typed-redux-saga'
import { fetchCategoriesFail, fetchCategoriesSuccess } from './categorise.action'
import { CATEGORIES_ACTION_TYPES } from './categorise.type'
import { getCategoriesAndDocuments } from '../../utils/filebase.util'

export function* fetchCategoriesAsync() {
  try {
    const categories = yield* call(getCategoriesAndDocuments)
    yield* put(fetchCategoriesSuccess(categories)) // 相当于dispatch({type: "...", payload: "..."})
  } catch (error) {
    yield* put(fetchCategoriesFail(error as Error))
  }
}
// watch 监视：
//  当监视到dispatch({type:CATEGORIES_ACTION_TYPES.FETCH_CATEGORISE_START }) 时，
//  会调用函数fetchCategoriesAsync
// export function* watchFetchCategories() {
export function* onFetchCategories() {
  yield* takeLatest(CATEGORIES_ACTION_TYPES.FETCH_CATEGORISE_START, fetchCategoriesAsync)
}

export function* categoriesSaga() {
  yield* all([call(onFetchCategories)])
}
