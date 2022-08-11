import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import {ReactComponent as Crown} from "../../assets/crown.svg";

import "./navagaion.style.scss"

const Navigation = () => {
  return (
    <Fragment>
      <header className="navigation">
        <div className="nav-logo-container">
          <Link to="/">
            <Crown className='nav-logo' />
          </Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to="shop">
            SHOP
          </Link>
          <Link className="nav-link" to="sign-in">
            SIGN IN
          </Link>
        </div>
      </header>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
