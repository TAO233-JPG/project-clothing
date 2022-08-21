import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import CategoriesPreview from "../categorise-preview/categorise-preview.component";
import Category from "../category/category.conponent";
import "./shop.style.scss";

import { setCategories } from "../../store/categorise/categorise.action";
import { getCategoriesAndDocuments } from "../../utils/filebase.util";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("shop page useEffect render");
    const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDocuments();
      dispatch(setCategories(categories));
    };

    getCategoriesMap();
  }, []);

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
