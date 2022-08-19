export const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES_MAP: "categories/SET_CATEGORIES_MAP",
};

const INITIAL_STATE = {
  categoriesMap: {},
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return {
        ...state,
        categoriesMap: payload,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
