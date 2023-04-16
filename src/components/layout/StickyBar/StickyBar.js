import React from 'react';
import styles from './StickyBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { getComparedProducts } from '../../../redux/productsRedux';
import { ComparedProduct } from '../ComparedProduct/ComparedProduct';
import Button from '../../common/Button/Button';

export const StickyBar = () => {
  const comparedProducts = useSelector(getComparedProducts);

  return (
    <>
      <button className={styles.sticky}>
        <FontAwesomeIcon className={styles.icon} icon={faExchangeAlt}>
          Add to compare
        </FontAwesomeIcon>
        <div className={styles.container}>
          <div className='row align-items-center justify-content-start flex-nowrap flex'>
            {comparedProducts.map((product, i) => (
              <ComparedProduct key={i} {...product} />
            ))}
            <Button className={styles.compareButton} variant='small'>
              COMPARE
            </Button>
          </div>
        </div>
      </button>
    </>
  );
};
