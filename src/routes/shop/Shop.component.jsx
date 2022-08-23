import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";

import CategoriesPreview from "../categorise-preview/categorise-preview.component";
import Category from "../category/category.conponent";
import "./shop.style.scss";

import { fetchCategoriesAsync } from "../../store/categorise/categorise.action";

const Shop = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchCategoriesAsync);
  });

  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
