import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

import classes from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={classes.hero}>
      <Carousel
        swipeable={true}
        emulateTouch={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
      >
        <div className={classes.item1}>Item 1</div>
        <div className={classes.item2}>Item 2</div>
      </Carousel>
    </div>
  );
};

export default Hero;
