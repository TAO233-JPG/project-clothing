import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import Button from "../button/Button.component";

import "./productCard.style.scss";

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);

  const addToCartHandle = (product) => {
    addItemToCart(product);
  };

  const { imageUrl, name, price } = product;
  return (
    <div className="product-card-container">
      <img src={imageUrl} alt="Product" />

      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={() => addToCartHandle(product)}>
        Add to card
      </Button>
    </div>
  );
};

export default ProductCard;
