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

import './App.scss';
import Login from './pages/Login/Login';
import SignUp from './pages/SignUp/SignUp';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <h1>Some error occurred! Coming from root!</h1>,
    children: [
      { index: true, element: <Home />, loader: CollectionsProductLoader },
      {
        path: '/products',
        element: <ProductsLayout />,
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
      },
      {
        path: '/register',
        element: <SignUp />,
      },
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
