import React from 'react';
import styles from './Brands.module.scss';
import Brand from '../../common/Brand/Brand';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useSelector } from 'react-redux';
import { getAll } from '../../../redux/brandRedux';

const Brands = () => {
  const brands = useSelector(getAll);

  return (
    <div className='container'>
      <div className={styles.border}>
        <button className={styles.button}>
          <FontAwesomeIcon icon='fa-solid fa-chevron-left' />
        </button>
        <div className={styles.content}>
          {brands.map(brand => (
            <Brand key={brand.name} {...brand} />
          ))}
        </div>
        <button className={styles.button}>
          <FontAwesomeIcon icon='fa-solid fa-chevron-right' />
        </button>
      </div>
    </div>
  );
};

export default Brands;
