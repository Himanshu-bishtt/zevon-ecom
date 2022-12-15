import React, { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './pages/Layouts/RootLayout';
import Home, { loader as CollectionsProductLoader } from './pages/Home/Home';
import Products, { loader as ProductsLoader } from './pages/Products/Products';
import About from './pages/About/About';
import ProductDetail, {
  loader as ProductLoader,
} from './pages/ProductDetail/ProductDetail';
import PageNotFound from './pages/NotFound/PageNotFound';
import ProductsLayout from './pages/Layouts/ProductsLayout';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';
import Wishlist from './pages/Wishlist/Wishlist';

import './App.scss';
import UserProfile from './pages/UserProfile/UserProfile';
import { useDispatch, useSelector } from 'react-redux';
import { loadItems } from './store/wishlist-slice';
import { login } from './store/auth-slice';
import { useCallback } from 'react';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <h1>Some error occurred! Coming from root!</h1>,
    children: [
      {
        index: true,
        element: <Home />,
        loader: CollectionsProductLoader,
        errorElement: <h1>Error coming from home</h1>,
      },
      {
        path: '/products',
        element: <ProductsLayout />,
        errorElement: <h1>Error coming from products</h1>,
        children: [
          {
            index: true,
            element: <Products />,
            loader: ProductsLoader,
          },
          {
            path: ':category/:id',
            element: <ProductDetail />,
            loader: ProductLoader,
          },
        ],
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/login',
        element: <Login />,
        errorElement: <h1>Error coming from login</h1>,
      },
      {
        path: '/register',
        element: <SignUp />,
        errorElement: <h1>Error coming from signup</h1>,
      },
      {
        path: '/user',
        element: <UserProfile />,
        errorElement: <h1>Error coming from user</h1>,
      },
      { path: '/wishlist', element: <Wishlist /> },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

const App = () => {
  const [initalLoad, setInitialLoad] = useState(true);
  const { idToken: token } = useSelector(store => store.auth);
  const { items } = useSelector(store => store.wishlist);
  const dispatch = useDispatch();

  // send wishlist data
  const sendWishlistData = useCallback(async () => {
    try {
      const res = await fetch(
        `https://zevon-ecom-default-rtdb.firebaseio.com/wishlist.json`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(items),
        }
      );

      if (!res.ok) throw new Error('Error sending data');

      const data = await res.json();

      console.log(data);
    } catch (err) {
      alert(err.message);
    }
  }, [items]);

  const loadWishlistData = useCallback(async () => {
    try {
      const res = await fetch(
        'https://zevon-ecom-default-rtdb.firebaseio.com/wishlist.json'
      );

      if (!res.ok) throw new Error('Error loading wishlist data');

      const data = await res.json();

      dispatch(loadItems(data || []));

      console.log(data);
    } catch (err) {
      alert(err.message);
    }
  }, []);

  useEffect(() => {
    loadWishlistData();
  }, []);

  useEffect(() => {
    if (initalLoad) {
      setInitialLoad(false);
      return;
    }

    console.log('Effect running when wishlist changes');
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
