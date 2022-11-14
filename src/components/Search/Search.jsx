import React, { useEffect, useState } from 'react';
import { getProducts } from '../../api/api';
import SearchItem from './SearchItem';

import { Icons } from '../../icons';
import classes from './Search.module.scss';

const Search = () => {
  const [products, setProducts] = useState([]);
  const [filteredItems, setFilteredItems] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await getProducts();
      setProducts(response);
    } catch (err) {
      alert(err.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const searchInputChangeHandler = event => {
    const items = products.filter(item =>
      item.title.toLowerCase().includes(event.target.value.toLowerCase())
    );

    setFilteredItems(items);
  };

  return (
    //prettier-ignore
    <>
      <form className={classes.search}>
      <svg className={classes.icon}>
        <use href={`${Icons}#icon-search`} />
      </svg>
      <input type="text" placeholder="Enter item to search..." className={classes.input} onChange={searchInputChangeHandler}/>
      <ul className={classes.suggestions}>
        {filteredItems.slice(0, 5).map((item, index) => (
          <SearchItem key={index} id={item.id} title={item.title} image={item.image} category={item.category}/>
        ))}
      </ul>

    </form>
    </>
  );
};

export default Search;
