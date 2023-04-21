import React from 'react';
import styles from './Gallery.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faChevronLeft,
  faChevronRight,
  faHeart,
  faExchangeAlt,
  faEye,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';

const Gallery = () => (
  <div className={styles.root}>
    <div className='container'>
      <div className={styles.gallery}>
        <div className={styles.leftSide}>
          <h3 className='text-uppercase'>Furniture gallery</h3>
          <div className={styles.sectionButtons}>
            <Button variant='small'>Featured</Button>
            <Button variant='small'>Top seller</Button>
            <Button variant='small'>Sale off</Button>
            <Button variant='small'>Top rated</Button>
          </div>
          <div className={styles.leftSideMainImage}>
            <img
              src='https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg'
              alt='mainLeft'
            ></img>
          </div>
          <div className={styles.buttons}>
            <Button variant='icon' className={styles.tooltipButton}>
              <FontAwesomeIcon icon={faHeart} />
              <span className={styles.tooltip}>Wishlist</span>
            </Button>
            <Button variant='icon' className={styles.tooltipButton}>
              <FontAwesomeIcon icon={faExchangeAlt} />
              <span className={styles.tooltip}>Compare</span>
            </Button>
            <Button variant='icon' className={styles.tooltipButton}>
              <FontAwesomeIcon icon={faEye} />
              <span className={styles.tooltip}>Quick view</span>
            </Button>
            <Button variant='icon' className={styles.tooltipButton}>
              <FontAwesomeIcon icon={faShoppingBasket} />
              <span className={styles.tooltip}>Add to cart</span>
            </Button>
          </div>
          <div className={styles.productInfo}>
            <h5>Product name</h5>
            <div className={styles.stars}>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </div>
            <div className={styles.prices}>
              <span className={styles.salePrice}>$120</span>
              <span className={styles.oldPrice}>$160</span>
            </div>
          </div>
          <div className={styles.slider}>
            <Button className={styles.sliderButton} variant='outline'>
              <FontAwesomeIcon icon={faChevronLeft} />
            </Button>
            <div className={styles.sliderImage}>
              <div className={styles.thumbnail}>
                <img
                  src='https://images.pexels.com/photos/276528/pexels-photo-276528.jpeg'
                  alt='product1'
                ></img>
              </div>
              <div className={styles.thumbnail}>
                <img
                  src='https://images.pexels.com/photos/276534/pexels-photo-276534.jpeg'
                  alt='product2'
                ></img>
              </div>
              <div className={styles.thumbnail}>
                <img
                  src='https://images.pexels.com/photos/11112728/pexels-photo-11112728.jpeg'
                  alt='product3'
                ></img>
              </div>
              <div className={styles.thumbnail}>
                <img
                  src='https://images.pexels.com/photos/3965513/pexels-photo-3965513.jpeg'
                  alt='product4'
                ></img>
              </div>
              <div className={styles.thumbnail}>
                <img
                  src='https://images.pexels.com/photos/4172379/pexels-photo-4172379.jpeg'
                  alt='product5'
                ></img>
              </div>
              <div className={styles.thumbnail}>
                <img
                  src='https://images.pexels.com/photos/11112729/pexels-photo-11112729.jpeg'
                  alt='product6'
                ></img>
              </div>
            </div>
            <Button className={styles.sliderButton} variant='outline'>
              <FontAwesomeIcon icon={faChevronRight} />
            </Button>
          </div>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.rightSideMainImage}>
            <img
              src='https://images.pexels.com/photos/7598138/pexels-photo-7598138.jpeg'
              alt='mainRight'
            ></img>
          </div>
          <div className={styles.productInfo}>
            <h5>Product name</h5>
            <div className={styles.price}>
              from <span className={styles.priceValue}>$50.80</span>
            </div>
          </div>
          <Button>Shop now</Button>
        </div>
      </div>
    </div>
  </div>
);

export default Gallery;
