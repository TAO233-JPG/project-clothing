import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import { ReactComponent as Crown } from "../../assets/crown.svg";
import CartIcon from "../../components/cartIcon/CartIcon.component";
import CartDropdown from "../../components/cartDropDown/CartDropDown.component";

import { selectCurrentUser } from "../../store/user/user.select";
import { selectIsCartOpen } from "../../store/cart/cart.select";
// import "./navagaion.style.scss";
import {
  NavigationContainer,
  NavLinksContainer,
  NavLink,
} from "./navagaion.style";
import { signOutStart } from "../../store/user/user.action";

const Navigation = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectCurrentUser);
  const isCartOpen = useSelector(selectIsCartOpen);

  const handleSignOut = () => {
    dispatch(signOutStart());
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
            <NavLink as="span"  onClick={handleSignOut}>
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
