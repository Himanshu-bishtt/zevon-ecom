import React from 'react';
import Hero from '../../components/Hero/Hero';
import Collections, {
  loader as CategoryProductsLoader,
} from '../../components/Collections/Collections';

const Home = () => {
  return (
    <>
      <Hero />
      <Collections />
    </>
  );
};

export default Home;

export const loader = () => {
  return CategoryProductsLoader();
};
