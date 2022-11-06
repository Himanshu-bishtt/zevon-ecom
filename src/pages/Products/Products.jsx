import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { getProducts } from '../../api/api';

const Products = () => {
  const loaderData = useLoaderData();

  console.log(loaderData);
  return <h1>Products</h1>;
};

export default Products;

export const loader = ({ request, params }) => {
  console.log(request);
  console.log(params);

  return getProducts();
};
