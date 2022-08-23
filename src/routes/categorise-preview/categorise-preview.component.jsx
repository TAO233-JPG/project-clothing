import { Fragment } from "react";
import { useSelector } from "react-redux";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import {
  selectCategoriesMap,
  selectIsLoading,
} from "../../store/categorise/categorise.select";

const CategoriesPreview = () => {
  const categoriesMap = useSelector(selectCategoriesMap);
  const isLoading = useSelector(selectIsLoading);

  return (
    <Fragment>
      {
      isLoading ? (
        <h3>isLoading</h3>
      ) : (
        Object.keys(categoriesMap).map((title) => {
          return (
            <CategoryPreview
              title={title}
              products={categoriesMap[title]}
              key={title}
            />
          );
        })
      )}
    </Fragment>
  );
};

export default CategoriesPreview;
