import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../store/auth-slice';

import classes from './UserProfile.module.scss';

const UserProfile = () => {
  const { isLoggedIn, email } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = () => {
    dispatch(logout());
    navigate('/');
  };
  return (
    <div className={classes.profile}>
      {isLoggedIn ? (
        <>
          <h1 className="main-heading">Hello, {email}</h1>
          <button className={classes.logout} onClick={logoutHandler}>
            Logout
          </button>
        </>
      ) : (
        <h1>User not logged in!</h1>
      )}
    </div>
  );
};

export default UserProfile;
