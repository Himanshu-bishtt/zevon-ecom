import React from 'react';
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
  return <RouterProvider router={router} />;
};

export default App;
