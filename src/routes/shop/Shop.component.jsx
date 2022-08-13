import { useContext } from "react";

import ProductCard from "../../components/productCard/ProductCard.component";

import { ProductContext } from "../../context/product.context";

import "./shop.style.scss"

const Shop = () => {
  const { products } = useContext(ProductContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
