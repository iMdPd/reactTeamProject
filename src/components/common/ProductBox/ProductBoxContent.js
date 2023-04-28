import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

import styles from './ProductBoxContent.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { faStar as faHeart } from '@fortawesome/free-regular-svg-icons';
import Button from '../Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  getComparedProducts,
  toggleCompare,
  toggleFavorite,
  updateUserRating,
} from '../../../redux/productsRedux';
import StarRating from '../../features/StarRating/StarRating';
import { useTranslation } from 'react-i18next';

const ProductBoxContent = ({ userRating: initialUserRating, ...props }) => {
  const { t } = useTranslation();
  const [userRating, setUserRating] = useState(initialUserRating || 0);

  const dispatch = useDispatch();
  const products = useSelector(getComparedProducts);

  const handleToggleFavoriteProduct = e => {
    e.preventDefault();
    dispatch(toggleFavorite(props.id));
  };

  const handleToggleCompareProduct = e => {
    e.preventDefault();
    if (products.length < 4 || props.compare === true) {
      dispatch(toggleCompare(props.id));
    }
  };

  const handleRatingChange = (id, rating) => {
    setUserRating(rating);
    dispatch(updateUserRating(id, rating));
  };

  return (
    <div className={styles.root}>
      <div className={styles.contentbox}>
        <div className={styles.content}>
          <h5>{props.name}</h5>
          <div className={styles.stars}>
            <StarRating
              defaultRating={props.stars}
              clientRating={userRating}
              onRatingChange={rating => handleRatingChange(props.id, rating)}
            />
          </div>
        </div>
        <div className={styles.line}></div>
        <div className={styles.actions}>
          <div className={styles.outlines}>
            <Button
              className={props.favorite && styles.favorite}
              onClick={handleToggleFavoriteProduct}
              variant='outline'
            >
              <FontAwesomeIcon icon={faHeart}>{t('label.favorite')}</FontAwesomeIcon>
            </Button>
            <Button
              className={props.compare && styles.compare}
              onClick={handleToggleCompareProduct}
              variant='outline'
            >
              <FontAwesomeIcon icon={faExchangeAlt}>
                {t('label.favorite')}
              </FontAwesomeIcon>
            </Button>
          </div>
          <div className={styles.price}>
            {props.oldPrice && <p>${props.oldPrice}</p>}
            <Button noHover variant='small'>
              $ {props.price}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

ProductBoxContent.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  favorite: PropTypes.bool,
  compare: PropTypes.bool,
  oldPrice: PropTypes.number,
  view: PropTypes.bool,
  userRating: PropTypes.number,
  id: PropTypes.string,
};

export default ProductBoxContent;
