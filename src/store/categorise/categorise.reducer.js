export const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES: "categories/SET_CATEGORIES",
  FETCH_CATEGORISE_START: "categories/FETCH_CATEGORISE_START",
  FETCH_CATEGORISE_SUCCESS: "categories/FETCH_CATEGORISE_SUCCESS",
  FETCH_CATEGORISE_ERROR: "categories/FETCH_CATEGORISE_ERROR",
};

const INITIAL_STATE = {
  categories: [],
  isLoading: false,
  error: null,
};

const categoriesReducer = (state = INITIAL_STATE, action = {}) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORISE_START:
      return {
        ...state,
        isLoading: true,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORISE_SUCCESS:
      return {
        ...state,
        isLoading: false,
        categories: payload,
      };
    case CATEGORIES_ACTION_TYPES.FETCH_CATEGORISE_ERROR:
      return {
        ...state,
        isLoading: false,
        error: payload,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
