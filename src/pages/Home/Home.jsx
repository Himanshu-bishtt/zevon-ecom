import React from 'react';
import Hero from '../../components/Hero/Hero';
import Collections from '../../components/Collections/Collections';
import { getCategoryProducts, getLimitProducts } from '../../api/api';
import { defer, useLoaderData } from 'react-router-dom';

const Home = () => {
  const loaderData = useLoaderData();
  return (
    <div>
      <Hero />
      <Collections data={loaderData} />
    </div>
  );
};

export default Home;

export const loader = async () => {
  return defer({
    men: await getCategoryProducts("men's clothing"),
    women: await getCategoryProducts("women's clothing"),
  });
};
