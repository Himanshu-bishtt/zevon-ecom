import React, { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadWishlistData } from './store/wishlist-slice';
import { login } from './store/auth-slice';
import { useCallback } from 'react';
import { sendItems } from './api/wishlist';
import './App.scss';

import router from './router';

const App = () => {
  const [initalLoad, setInitialLoad] = useState(true);
  const { items } = useSelector(store => store.wishlist);
  const { idToken } = useSelector(store => store.auth);
  const dispatch = useDispatch();

  const sendWishlistData = useCallback(async () => {
    try {
      await sendItems(items);
    } catch (err) {
      alert(err.message);
    }
  }, [items]);

  useEffect(() => {
    if (idToken) {
      dispatch(loadWishlistData());
    }
  }, [idToken]);

  useEffect(() => {
    if (initalLoad) {
      setInitialLoad(false);
      return;
    }

    sendWishlistData();
  }, [items]);

  useEffect(() => {
    const token = localStorage.getItem('token');
    const email = localStorage.getItem('email');

    if (token && email) {
      dispatch(login({ token, email }));
    }
  }, [dispatch]);

  return <RouterProvider router={router} />;
};

export default App;
