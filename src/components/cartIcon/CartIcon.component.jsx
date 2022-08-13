import { useContext } from "react";

import { CartContext } from "../../context/cart.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

import "./cartIcon.style.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen } = useContext(CartContext);

  const toggleCartOpenHandle = () => setIsCartOpen(!isCartOpen);

  return (
    <div className="cart-icon-container" onClick={toggleCartOpenHandle}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">20</span>
    </div>
  );
};

export default CartIcon;
