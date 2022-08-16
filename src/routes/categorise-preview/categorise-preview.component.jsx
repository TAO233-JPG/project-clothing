import { useContext, Fragment } from "react";

import CategoryPreview from "../../components/category-preview/category-preview.component";

import { CategoriesContext } from "../../context/categories.context";

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        return (
          <CategoryPreview
            title={title}
            products={categoriesMap[title]}
            key={title}
          />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
