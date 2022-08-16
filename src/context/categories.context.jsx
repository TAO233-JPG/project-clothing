import { createContext, useState, useEffect } from "react";

import { getCategoriesAndDocuments } from "../utils/filebase.util";

export const CategoriesContext = createContext({
  categoriesMap: {},
  // setCategoriesMapcategoriesMap: () => {},
});

export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});

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
