import React from 'react';
import styles from './Gallery.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faChevronLeft,
  faChevronRight,
  faHeart,
  faExchangeAlt,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const Gallery = () => (
  <div className={styles.root}>
    <div className={styles.container}>
      <div className={styles.gallery}>
        <div className={styles.leftSide}>
          <h3>Furniture gallery</h3>
          <div className={styles.button}>
            <Button>
              <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
            </Button>
            <Button>
              <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
            </Button>
            <Button>
              <FontAwesomeIcon icon={faHeart}>Look for</FontAwesomeIcon>
            </Button>
            <Button>
              <FontAwesomeIcon icon={faHeart}>Add to cart</FontAwesomeIcon>
            </Button>
          </div>
          <div className={styles.leftSideMainImage}></div>
          <div className={styles.productInfo}>
            <h5>Product name</h5>
            <div className={styles.stars}>Ocena w gwiazdkach</div>
            <div className={styles.salePrice}>
              <p>$120</p>
            </div>
            <div className={styles.oldPrice}>
              <p>$160</p>
            </div>
          </div>

          <div className={styles.slider}></div>

          <Button className={styles.navButton} variant='outline'>
            <FontAwesomeIcon icon={faChevronLeft} />
          </Button>
          <Button className={styles.navButton} variant='outline'>
            <FontAwesomeIcon icon={faChevronRight} />
          </Button>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.rightSideMainImage}></div>
          <div className={styles.price}>
            <p>from</p>
            <h1>$50.80</h1>
          </div>
          <div className={styles.productInfo}>
            <h5>Product name</h5>
          </div>
          <Button>Shop now</Button>
        </div>
      </div>
    </div>
  </div>
);

export default Gallery;
