import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import RootLayout from './pages/RootLayout';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import About from './pages/About/About';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <Home /> },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/about',
        element: <About />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
