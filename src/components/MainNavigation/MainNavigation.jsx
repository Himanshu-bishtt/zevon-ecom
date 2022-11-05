import React from "react";

import { CartIcon, WishlistIcon, UserIcon } from "../../icons";
import classes from "./MainNavigation.module.scss";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <ul className={classes.menu}>
        <li>Home</li>
        <li>Products</li>
        <li>About</li>
      </ul>
      <h2 className={classes.logo}>Logo</h2>
      <div className={classes.actions}>
        <button>
          <CartIcon className={classes.logo} />
          Cart
        </button>
        <button>
          <WishlistIcon className={classes.logo} />
          Wishlist
        </button>
        <button>
          <UserIcon className={classes.logo} />
          Login
        </button>
      </div>
    </header>
  );
};

export default MainNavigation;
