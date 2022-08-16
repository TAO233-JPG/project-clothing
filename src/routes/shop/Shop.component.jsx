import { Route, Routes } from "react-router-dom";

import CategoriesPreview from "../categorise-preview/categorise-preview.component";
import Category from "../category/category.conponent";
import "./shop.style.scss";

const Shop = () => {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path=":category" element={<Category />} />
    </Routes>
  );
};

export default Shop;
