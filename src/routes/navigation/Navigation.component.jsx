import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import { signOutAuth } from "../../utils/filebase.util";

import { ReactComponent as Crown } from "../../assets/crown.svg";
import CartIcon from "../../components/cartIcon/CartIcon.component";
import CartDropdown from "../../components/cartDropDown/CartDropDown.component";

// import "./navagaion.style.scss";
import {
  NavigationContainer,
  NavLinksContainer,
  NavLink,
} from "./navagaion.style";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const handleSignOut = async () => {
    await signOutAuth();
  };

  return (
    <Fragment>
      <NavigationContainer>
        <div>
          <Link to="/">
            <Crown />
          </Link>
        </div>

        <NavLinksContainer>
          <NavLink to="shop">SHOP</NavLink>
          {!currentUser ? (
            <NavLink to="auth">SIGN IN</NavLink>
          ) : (
            <NavLink as="span" to="auth" onClick={handleSignOut}>
              SIGN OUT
            </NavLink>
          )}

          <CartIcon />
          {isCartOpen && <CartDropdown />}
        </NavLinksContainer>
      </NavigationContainer>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
