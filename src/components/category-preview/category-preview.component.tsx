import "./category-preview.style.scss";
import { Link } from "react-router-dom";

import ProductCard from "../productCard/ProductCard.component";
import { CategoryItemType } from "../../store/categorise/categorise.type";
import { FC } from "react";

type CategoryPreviewProps = {
  title: string,
  products: CategoryItemType[]
}

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={title} className="title">
          {title}
        </Link>
      </h2>

      <div className="preview">
        {products
          .filter((_, index) => index < 4)
          .map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
