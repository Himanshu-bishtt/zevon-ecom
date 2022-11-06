import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import Home from './pages/Home/Home';
import Products, { loader as ProductLoader } from './pages/Products/Products';
import About from './pages/About/About';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import PageNotFound from './pages/NotFound/PageNotFound';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/products',
        element: <Products />,
        loader: ProductLoader,
      },
      {
        path: '/products/:id',
        element: <ProductDetail />,
      },
      {
        path: '/about',
        element: <About />,
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
