import { createContext, useReducer, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/filebase.util";

export const CATEGORIES_ACTION_TYPES = {
  SET_CATEGORIES_MAP: "SET_CATEGORIES_MAP",
};

const INITIAL_STATE = {
  categoriesMap: {},
};

const categoriesReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP:
      return {
        ...state,
        categoriesMap: payload,
      };

    default:
      throw new Error(`unkown type:> ${type} in CategoriesReducter`);
  }
};

export const CategoriesContext = createContext({
  categoriesMap: {},
  // setCategoriesMap: () => {},
});

export const CategoriesProvider = ({ children }) => {
  const [{ categoriesMap }, dispatch] = useReducer(
    categoriesReducer,
    INITIAL_STATE
  );

  const setCategoriesMap = (categories) => {
    dispatch({
      type: CATEGORIES_ACTION_TYPES.SET_CATEGORIES_MAP,
      payload: categories,
    });
  };

  useEffect(() => {
    const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDocuments();
      setCategoriesMap(categories);
    };

    getCategoriesMap();
  }, []);

  const value = { categoriesMap, setCategoriesMap };

  return (
    <CategoriesContext.Provider value={value}>
      {children}
    </CategoriesContext.Provider>
  );
};
