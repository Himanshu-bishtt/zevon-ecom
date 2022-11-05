import React from 'react';
import { NavLink } from 'react-router-dom';

import { CartIcon, WishlistIcon, UserIcon } from '../../icons';
import classes from './MainNavigation.module.scss';

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <ul className={classes.menu}>
        <li>
          <NavLink
            to={'/'}
            className={navData => (navData.isActive ? classes.active : '')}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'products'}
            className={navData => (navData.isActive ? classes.active : '')}
          >
            Products
          </NavLink>
        </li>
        <li>
          <NavLink
            to={'about'}
            className={navData => (navData.isActive ? classes.active : '')}
          >
            About
          </NavLink>
        </li>
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
