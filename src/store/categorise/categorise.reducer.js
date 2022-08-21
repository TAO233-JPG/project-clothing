export const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES: "categories/SET_CATEGORIES",
};

const INITIAL_STATE = {
  categories: [],
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
      return {
        ...state,
        categories: payload,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
