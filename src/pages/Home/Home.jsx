import React from 'react';
import Hero from '../../components/Hero/Hero';
import Collections, {
  loader as CategoryProductsLoader,
} from '../../components/Collections/Collections';
import Benefits from '../../components/Benefits/Benefits';

const Home = () => {
  return (
    <>
      <Hero />
      <Collections />
      <Benefits />
    </>
  );
};

export default Home;

export const loader = () => {
  return CategoryProductsLoader();
};
