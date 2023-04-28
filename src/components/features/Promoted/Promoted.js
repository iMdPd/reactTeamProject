import React from 'react';
import PropTypes from 'prop-types';

import styles from './Promoted.module.scss';
import { useSelector } from 'react-redux';
import { getOne } from '../../../redux/productsRedux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faShoppingBasket,
  faChevronRight,
  faChevronLeft,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import ProductBoxContent from '../../common/ProductBox/ProductBoxContent';

const Promoted = () => {
  const product = useSelector(state => getOne(state, 'aenean-ru-bristique-1'));

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <section className={'col-4 ' + styles.productCart}>
            <div className={styles.photobox}>
              <div className={styles.deals}>
                <h3 className={styles.text}>hot deals</h3>
                <div className={'col-auto ' + styles.dots}>
                  <ul>
                    <li>
                      <a>.</a>
                    </li>
                    <li>
                      <a>.</a>
                    </li>
                    <li>
                      <a>.</a>
                    </li>
                  </ul>
                </div>
              </div>
              <img
                className={styles.image}
                alt={product.name}
                src={`${process.env.PUBLIC_URL}/images/products/aenean-ru-bristique-1.jpg`}
              />
              <div className={styles.button}>
                <Button variant='small'>
                  <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO
                  CART
                </Button>
              </div>
              <div className={styles.counter}>
                <div className={styles.item}>
                  <p className={styles.itemOne}>25</p>
                  <p className={styles.itemTwo}>days</p>
                </div>
                <div className={styles.item}>
                  <p className={styles.itemOne}>10</p>
                  <p className={styles.itemTwo}>hrs</p>
                </div>
                <div className={styles.item}>
                  <p className={styles.itemOne}>47</p>
                  <p className={styles.itemTwo}>mins</p>
                </div>
                <div className={styles.item}>
                  <p className={styles.itemOne}>59</p>
                  <p className={styles.itemTwo}>secs</p>
                </div>
              </div>
            </div>
            <ProductBoxContent key={product.id} {...product} />
          </section>
          <section className={'col-8 ' + styles.productFeatured}>
            <div className={styles.photo}>
              <img
                className={styles.image}
                alt={product.name}
                src={`${process.env.PUBLIC_URL}/images/products/aenean-ru-bristique-2.jpg`}
              />
              <div className={styles.title}>
                <div className={styles.text}>
                  <p className={styles.textOne}>
                    indoor <span>furniture</span>
                  </p>
                  <p className={styles.textTwo}>save up to 50% of all furniture</p>
                </div>
              </div>
              <button>shop now</button>
            </div>

            <div className={styles.buttons}>
              <button className={styles.button}>
                <FontAwesomeIcon icon={faChevronLeft}></FontAwesomeIcon>
              </button>
              <button className={styles.button}>
                <FontAwesomeIcon icon={faChevronRight}></FontAwesomeIcon>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

Promoted.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string,
  price: PropTypes.number,
  promo: PropTypes.string,
  stars: PropTypes.number,
  favorite: PropTypes.bool,
  compare: PropTypes.bool,
  oldPrice: PropTypes.number,
};

export default Promoted;
