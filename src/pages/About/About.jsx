import React from 'react';

import classes from './About.module.scss';
import { aboutUs, person1, person2, person3 } from '../../assets';
import { Icons } from '../../icons';

const About = () => {
  return (
    <section className={classes.about}>
      <div className={classes.top}>
        <img className={classes.image} src={aboutUs} alt="about us page" />
        <div className={classes.content}>
          <h1>About Us</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Delectus
            placeat vitae similique tempore possimus, nostrum nam maiores. Totam
            ea qui nisi accusamus veniam quidem omnis, consequuntur adipisci
            assumenda libero enim provident ullam perspiciatis tenetur aperiam
            optio temporibus, suscipit neque illum facilis sint harum at. Hic
            ex, excepturi sit ullam tenetur aspernatur incidunt commodi optio
            numquam provident ab nam est saepe eligendi. Quis tempora quam
            tenetur at deserunt eaque quod magni in, nesciunt nisi ad placeat
            sunt veniam saepe! Earum praesentium eaque accusantium reprehenderit
            adipisci temporibus nihil similique et! Aperiam voluptate nemo et
            exercitationem iure veniam alias facilis aspernatur, maiores velit.
          </p>
        </div>
      </div>
      <div className={classes.bottom}>
        <h1>Team</h1>
        <div className={classes.items}>
          <div className={classes.item}>
            <img src={person1} alt="person 1" />
            <p>John Smith</p>
            <div className={classes.social}>
              <svg>
                <use href={`${Icons}#icon-instagram`} />
              </svg>
              <svg>
                <use href={`${Icons}#icon-linkedin`} />
              </svg>
              <svg>
                <use href={`${Icons}#icon-facebook`} />
              </svg>
            </div>
          </div>

          <div className={classes.item}>
            <img src={person2} alt="person 2" />
            <p>John Smith</p>
            <div className={classes.social}>
              <svg>
                <use href={`${Icons}#icon-instagram`} />
              </svg>
              <svg>
                <use href={`${Icons}#icon-facebook`} />
              </svg>
            </div>
          </div>

          <div className={classes.item}>
            <img src={person3} alt="person 3" />
            <p>John Smith</p>
            <div className={classes.social}>
              <svg>
                <use href={`${Icons}#icon-instagram`} />
              </svg>
              <svg>
                <use href={`${Icons}#icon-linkedin`} />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
