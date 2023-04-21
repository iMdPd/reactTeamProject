import React from 'react';
import styles from './Brands.module.scss';
import Brand from '../../common/Brand/Brand';

const Brands = () => {
  const array = [1, 2, 3, 4, 5, 6, 7];
  return (
    <div className='container'>
      <div className={styles.border}>
        <button className={styles.button}></button>
        <div className={styles.content}>
          {array.map(element => (
            <Brand key={element} />
          ))}
        </div>
        <button className={styles.button}></button>
      </div>
    </div>
  );
};

export default Brands;
