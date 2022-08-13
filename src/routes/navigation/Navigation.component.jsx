import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";

import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import { signOutAuth } from "../../utils/filebase.util";

import { ReactComponent as Crown } from "../../assets/crown.svg";
import CartIcon from "../../components/cartIcon/CartIcon.component";
import CartDropdown from "../../components/cartDropDown/CartDropDown.component";

import "./navagaion.style.scss";

const Navigation = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  const handleSignOut = async () => {
    await signOutAuth();
  };

  return (
    <Fragment>
      <header className="navigation">
        <div className="nav-logo-container">
          <Link to="/">
            <Crown className="nav-logo" />
          </Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            SHOP
          </Link>
          {!currentUser ? (
            <Link className="nav-link" to="auth">
              SIGN IN
            </Link>
          ) : (
            <span className="nav-link" onClick={handleSignOut}>
              SIGN OUT
            </span>
          )}

          <CartIcon />
          {isCartOpen && <CartDropdown />}
        </div>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
