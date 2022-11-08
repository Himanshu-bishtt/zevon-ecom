import React from 'react';

import { Icons } from '../../icons';
import classes from './Benefits.module.scss';

const items = [
  {
    id: 1,
    icon: `${Icons}#icon-user`,
    title: 'Customer Support',
    small: 'Need Assitance?',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, eveniet!',
  },
  {
    id: 2,
    icon: `${Icons}#icon-check`,
    title: 'Secured payment',
    small: 'Safe and fast',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, eveniet!',
  },
  {
    id: 3,
    icon: `${Icons}#icon-skip-back`,
    title: 'Free returns',
    small: 'easy & free',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, eveniet!',
  },
  {
    id: 4,
    icon: `${Icons}#icon-truck`,
    title: 'free shipping',
    small: 'Order above $99',
    text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis, eveniet!',
  },
];

const Benefits = () => {
  return (
    <section className={classes.benefits}>
      {items.map(item => (
        <div key={item.id} className={classes.item}>
          <svg>
            <use href={item.icon} />
          </svg>
          <h1>{item.title}</h1>
          <h3>{item.small}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
};

export default Benefits;
