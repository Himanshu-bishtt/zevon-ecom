import { BASE_URL, timeout } from '../util/helpers';

export const getProducts = async () => {
  const response = await Promise.race([
    fetch(`${BASE_URL}/products`),
    timeout(),
  ]);

  if (!response.ok) throw new Error('Error loading products!');

  return response.json();
};
