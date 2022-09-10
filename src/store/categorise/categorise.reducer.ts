import { AnyAction } from 'redux'
import { fetchCategoriesFail, fetchCategoriesStart, fetchCategoriesSuccess } from './categorise.action'
import { CategoryType } from './categorise.type'

export type CategoryStateType = {
  readonly categories: CategoryType[]
  readonly isLoading: boolean
  readonly error: Error | null
}

const INITIAL_STATE: CategoryStateType = {
  categories: [],
  isLoading: false,
  error: null,
}

const categoriesReducer = (state = INITIAL_STATE, action: AnyAction): CategoryStateType => {
  if (fetchCategoriesStart.match(action)) {
    return {
      ...state,
      isLoading: true,
    }
  }

  if (fetchCategoriesSuccess.match(action)) {
    return {
      ...state,
      isLoading: false,
      categories: action.payload,
    }
  }

  if (fetchCategoriesFail.match(action.type)) {
    return {
      ...state,
      isLoading: false,
      error: action.payload,
    }
  }

  return state
}

export default categoriesReducer
