import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleSearchBar } from '../../store/ui-slice';
import Backdrop from '../UI/Backdrop/Backdrop';

import { logo } from '../../assets';
import { CartIcon, WishlistIcon, SearchIcon, UserIcon } from '../../icons';
import classes from './MainNavigation.module.scss';
import Search from '../Search/Search';

const MainNavigation = () => {
  const dispatch = useDispatch();
  const { showSearch } = useSelector(store => store.ui);
  const { isLoggedIn } = useSelector(store => store.auth);
  const { items: wishlistItems } = useSelector(store => store.wishlist);

  const searchHandler = () => {
    dispatch(toggleSearchBar());
  };

  return (
    <>
      {showSearch && <Backdrop />}
      {showSearch && <Search />}
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
        {/* <h2 className={classes.logo}>Logo</h2> */}
        <img src={logo} alt="main logo" className={classes.logo} />
        <div className={classes.actions}>
          <button>
            <CartIcon className={classes.logo} />
            Cart
          </button>

          <button type="button" onClick={searchHandler}>
            <SearchIcon className={classes.logo} />
            Search
          </button>

          <Link to={'/wishlist'}>
            <button>
              <WishlistIcon className={classes.logo} />
              Wishlist
              {wishlistItems.length !== 0 && (
                <span className={classes.badge}>{wishlistItems.length}</span>
              )}
            </button>
          </Link>

          {isLoggedIn ? (
            <Link to={'/user'}>
              <button type="button">
                <UserIcon className={classes.logo} />
                User
              </button>
            </Link>
          ) : (
            <Link to={'/login'}>
              <button type="button">
                <UserIcon className={classes.logo} />
                Login
              </button>
            </Link>
          )}
        </div>
      </header>
    </>
  );
};

export default MainNavigation;
