import { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { CartContext } from "../../context/cart.context";

import Button from "../button/Button.component";
import CartItem from "../cart-item/cart-item.component";

import "./cartDropDown.style.scss";

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const gotoCheckoutHandle = () => {
    navigate("checkout");
  };

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((product) => {
          return <CartItem product={product} key={product.id} />;
        })}

        {/* {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} cartItem={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )} */}
      </div>
      <Button onClick={gotoCheckoutHandle}>GO TO CHECKOUT</Button>
    </div>
  );
};

export default CartDropdown;
