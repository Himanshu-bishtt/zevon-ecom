import React, { Suspense, useState } from 'react';
import PropType from 'prop-types';
import { Await, defer, useLoaderData } from 'react-router-dom';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import FeaturedProducts from '../../components/FeaturedProducts/FeaturedProducts';
import { getCategoryProducts, getProduct } from '../../api/api';
import ErrorElement from '../../components/ErrorElement/ErrorElement';

import {
  whatsapp,
  telegram,
  instagram,
  facebook,
  person1,
  person2,
} from '../../assets';
import { Icons } from '../../icons';
import classes from './ProductDetail.module.scss';

const RenderProductDetail = ({ data }) => {
  const [quantity, setQuantity] = useState(1);

  const quantityIncreaseHandler = () => {
    if (quantity === 10) return;
    setQuantity(prev => prev + 1);
  };

  const quantityDecreaseHandler = () => {
    if (quantity === 1) return;
    setQuantity(prev => prev - 1);
  };

  return (
    <section className={classes.product}>
      <img className={`${classes.image}`} src={data.image} />
      <div className={classes.content}>
        <h2 className={classes.category}>{data.category}</h2>
        <h1 className={classes.heading}>{data.title}</h1>
        <div className={classes.rating}>
          <p className={classes.stars}>{data.rating.rate} ⭐</p>
          <p className={classes.count}>({data.rating.count})</p>
        </div>

        <h2 className={classes.price}>
          Price: <span>${data.price}</span>
        </h2>
        <p className={classes.description}>{data.description}</p>

        <div className={classes['other-info']}>
          <p>
            ID: <span>{data.id}</span>
          </p>
          <p>
            Category: <span>{data.category}</span>
          </p>
        </div>

        <div className={classes.actions}>
          <div className={classes.quantity}>
            <button type="button" onClick={quantityDecreaseHandler}>
              <svg>
                <use href={`${Icons}#icon-minus`} />
              </svg>
            </button>
            <p>{quantity}</p>
            <button type="button" onClick={quantityIncreaseHandler}>
              <svg>
                <use href={`${Icons}#icon-plus`} />
              </svg>
            </button>
          </div>
        </div>

        <div className={classes.social}>
          <p>Share:</p>
          <a>
            <img src={telegram} />
          </a>
          <a>
            <img src={whatsapp} />
          </a>
          <a>
            <img src={facebook} />
          </a>
          <a>
            <img src={instagram} />
          </a>
        </div>
      </div>
    </section>
  );
};

const ProductDetail = () => {
  const loaderData = useLoaderData();

  return (
    //prettier-ignore
    <>
      <Suspense fallback={<LoadingSpinner />}>
        <Await
          resolve={loaderData.product}
          errorElement={<ErrorElement message={'Some error occurred while loading product data!'} />}>
          {resolvedData => <RenderProductDetail data={resolvedData}/>}
        </Await>
      </Suspense>
      <section className={classes.reviews}>
        <div className={classes["customer-reviews"]}>
          <h1 className='secondary-heading'>Customer Reviews</h1>
          <ul className={classes["reviews-list"]}>
            <li className={classes['review-item']}>
              <img src={person1} alt="person 1"/>
              <div className={classes['review-content']}>
                <h4>Himanshu says</h4>
                <h3>Best product in the market</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas sequi voluptas unde odit sint corporis distinctio modi perspiciatis ea veritatis maxime quod impedit eius amet, beatae quos illum ad? Cum.</p>
              </div>
            </li>
            <li className={classes['review-item']}>
              <img src={person2} alt="person 1"/>
              <div className={classes['review-content']}>
                <h4>Himanshu says</h4>
                <h3>Best product in the market</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quas sequi voluptas unde odit sint corporis distinctio modi perspiciatis ea veritatis maxime quod impedit eius amet, beatae quos illum ad? Cum.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className={classes["write-reviews"]}>
          <h1 className='secondary-heading'>Write your review</h1>
          <form className={classes.form}>
            <input placeholder='Enter title' type={"text"} name="title" id="title"/>
            <textarea name="message" id="message" placeholder='Enter message'></textarea>
            <button className={classes.submit}>Submit</button>
          </form>
        </div>
      </section>
      <Suspense fallback={<LoadingSpinner />}>
        <Await
          resolve={loaderData.category}
          errorElement={<ErrorElement message='Some error occurred while loading featured products!'/>}>
          {resolvedData => <FeaturedProducts data={resolvedData} />}
        </Await>
      </Suspense>
    </>
  );
};

export default ProductDetail;

export const loader = ({ params }) => {
  const category = params.category.replaceAll('-', ' ');
  return defer({
    product: getProduct(params.id),
    category: getCategoryProducts(category),
  });
};

RenderProductDetail.propTypes = {
  data: PropType.object,
};
