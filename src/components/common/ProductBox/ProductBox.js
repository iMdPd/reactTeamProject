import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './ProductBox.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';
import { useSelector } from 'react-redux';
import { getOne } from '../../../redux/productsRedux';
import ProductBoxContent from './ProductBoxContent';
import { useTranslation } from 'react-i18next';

const ProductBox = ({ name, price, promo, oldPrice, id }) => {
  const { t } = useTranslation();

  const product = useSelector(state => getOne(state, id));

  return (
    <div className={styles.root}>
      <div className={styles.photo}>
        <img
          className={styles.image}
          alt={name}
          src={`${process.env.PUBLIC_URL}/images/products/${id}.jpg`}
        />
        {price < oldPrice && <div className={styles.sale}>{promo}</div>}
        <div className={styles.buttons}>
          <Button variant='small'>{t('button.quickView')}</Button>
          <Button variant='small'>
            <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
            {t('button.addToCart')}
          </Button>
        </div>
      </div>
      <ProductBoxContent key={product.id} {...product} />
    </div>
  );
};

ProductBox.propTypes = {
  id: PropTypes.string,
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  oldPrice: PropTypes.number,
};

export default ProductBox;
