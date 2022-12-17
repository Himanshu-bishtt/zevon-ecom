import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import RootLayout from '../pages/Layouts/RootLayout';
import Home, { loader as CollectionsProductLoader } from '../pages/Home/Home';
import ProductsLayout from '../pages/Layouts/ProductsLayout';
import Products, { loader as ProductsLoader } from '../pages/Products/Products';
import ProductDetail, {
  loader as ProductLoader,
} from '../pages/ProductDetail/ProductDetail';
import About from '../pages/About/About';
import Login from '../pages/Login/Login';
import SignUp from '../pages/SignUp/SignUp';
import UserProfile from '../pages/UserProfile/UserProfile';
import Wishlist from '../pages/Wishlist/Wishlist';
import PageNotFound from '../pages/NotFound/PageNotFound';
import ErrorElement from '../components/ErrorElement/ErrorElement';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: (
      <ErrorElement message="Some error occurred! Coming from root!" />
    ),
    children: [
      {
        index: true,
        element: <Home />,
        loader: CollectionsProductLoader,
        errorElement: <ErrorElement message="Error coming from home" />,
      },
      {
        path: '/products',
        element: <ProductsLayout />,
        errorElement: <ErrorElement message="Error coming from products" />,
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
        errorElement: <ErrorElement message="Error coming from login" />,
      },
      {
        path: '/register',
        element: <SignUp />,
        errorElement: <ErrorElement message="Error coming from signup" />,
      },
      {
        path: '/user',
        element: <UserProfile />,
        errorElement: <ErrorElement message="Error coming from user profile" />,
      },
      { path: '/wishlist', element: <Wishlist /> },
      {
        path: '*',
        element: <PageNotFound />,
      },
    ],
  },
]);

export default router;
