import { BASE_URL, timeout } from '../util/helpers';

export const getProducts = async () => {
  const response = await Promise.race([
    fetch(`${BASE_URL}/products`),
    timeout(),
  ]);

  if (!response.ok) throw new Error('Error loading products!');

  return response.json();
};

export const getProduct = async id => {
  const response = await Promise.race([
    fetch(`${BASE_URL}/products/${id}`),
    timeout(),
  ]);

  if (!response.ok) throw new Error(`Error loading product with id ${id}`);

  return response.json();
};

export const getLimitProducts = async limit => {
  const response = await Promise.race([
    fetch(`${BASE_URL}/products?limit=${limit}`),
    timeout(),
  ]);

  if (!response.ok) throw new Error(`Error loading products!`);

  return response.json();
};

export const getCategoryProducts = async category => {
  const response = await Promise.race([
    fetch(`${BASE_URL}/products/category/${category}`),
    timeout(),
  ]);

  if (!response.ok) throw new Error(`Error loading products!`);

  return response.json();
};
