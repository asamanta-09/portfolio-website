import React from 'react';
import styles from '../css/Home.module.css';
import Social from './Social';
import Data from './Data';
import Scroll from './Scroll';

const Home = () => {
  return (
    <section className={styles.section} id="home">
      <div className={styles.home__container}>
        <div className={styles.home__content}>
          <Social />
          <div className={styles.home__img}></div>
          <Data />
        </div>
        <Scroll />
      </div>
    </section>
  );
};

export default Home;