import React from 'react';
import Hero from '../../components/Hero/Hero';
import Collections, {
  loader as CategoryProductsLoader,
} from '../../components/Collections/Collections';

const Home = () => {
  return (
    <div>
      <Hero />
      {/* <Suspense fallback={<p>Loading...</p>}>
        <Await
          resolve={loaderData.men}
          errorElement={<h1>Something went wrong</h1>}
        >
          {resolveData => <Collections data={resolveData} />}
        </Await>
      </Suspense> */}
      <Collections />
    </div>
  );
};

export default Home;

export const loader = () => {
  return CategoryProductsLoader();
};
