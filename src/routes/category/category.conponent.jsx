import { useContext, useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import ProductCard from "../../components/productCard/ProductCard.component";

import { CategoriesContext } from "../../context/categories.context";

import styles from "./category.module.scss";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <Fragment>
      <h2 className={styles["category-title"]}>{category.toUpperCase()}</h2>
      <div className={styles["category-container"]}>
        {products &&
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </div>
    </Fragment>
  );
};

export default Category;
