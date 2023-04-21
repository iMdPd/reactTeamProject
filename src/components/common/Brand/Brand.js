import React from 'react';
import styles from './Brand.module.scss';

const Brand = () => {
  return (
    <div className={styles.class}>
      Brand
      <img
        src='https://images.pexels.com/photos/13235422/pexels-photo-13235422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
        alt='logo'
      />
    </div>
  );
};

export default Brand;
