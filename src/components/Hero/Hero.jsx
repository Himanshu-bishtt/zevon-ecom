import React from 'react';
import { Link } from 'react-router-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import classes from './Hero.module.scss';

const Hero = () => {
  return (
    <>
      <Carousel
        swipeable={true}
        emulateTouch={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
      >
        <div className={classes.item1}>
          <h1 className={classes['hero-heading']}>
            Best Clothes at affordable price
          </h1>
          <Link to={'/products'} className={classes.btn}>
            Show Now
          </Link>
        </div>
        <div className={classes.item2}>
          <h1 className={classes['hero-heading']}>
            Quick easy and hassle free transactions
          </h1>
          <Link to={'/products'} className={classes.btn}>
            Show Now
          </Link>
        </div>
      </Carousel>
    </>
  );
};

export default Hero;
