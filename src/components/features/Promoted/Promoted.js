import React from 'react';
import PropTypes from 'prop-types';

import styles from './Promoted.module.scss';
//import ProductBox from '../../common/ProductBox/ProductBox';

//import { useSelector } from 'react-redux';
//import { useParams } from 'react-router-dom';
//import { getNew} from '../../../redux/productsRedux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faExchangeAlt,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar, faHeart, faEye } from '@fortawesome/free-regular-svg-icons';
import Button from '../../common/Button/Button';

const Promoted = ({ name, price, stars, oldPrice, favorite, compare }) => (
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
                    <a></a>
                  </li>
                  <li>
                    <a></a>
                  </li>
                  <li>
                    <a></a>
                  </li>
                </ul>
              </div>
            </div>
            <img
              className={styles.image}
              alt={name}
              src={`${process.env.PUBLIC_URL}/images/products/Aenean Ru Bristique 1.jpg`}
            />
            <div className={styles.button}>
              <Button variant='small'>
                <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon> ADD TO CART
              </Button>
            </div>
            <div className={styles.counter}>
              <div className={styles.item}>
                <h4>25</h4>
                <h5>days</h5>
              </div>
              <div className={styles.item}>
                <h4>10</h4>
                <h5>hrs</h5>
              </div>
              <div className={styles.item}>
                <h4>47</h4>
                <h5>mins</h5>
              </div>
              <div className={styles.item}>
                <h4>59</h4>
                <h5>secs</h5>
              </div>
            </div>
          </div>
          <div className={styles.contentbox}>
            <div className={styles.content}>
              <h5>Aenean Ru Bristique 1</h5>
              <div className={styles.stars}>
                {[1, 2, 3, 4, 5].map(i => (
                  <a key={i} href='#'>
                    {i <= stars ? (
                      <FontAwesomeIcon icon={faStar}>{i} stars</FontAwesomeIcon>
                    ) : (
                      <FontAwesomeIcon icon={farStar}>{i} stars</FontAwesomeIcon>
                    )}
                  </a>
                ))}
              </div>
            </div>
            <div className={styles.line}></div>
            <div className={styles.actions}>
              <div className={styles.outlines}>
                <Button className={compare && styles.compare} variant='outline'>
                  <FontAwesomeIcon icon={faEye}>Favorite</FontAwesomeIcon>
                </Button>
                <Button className={favorite && styles.favorite} variant='outline'>
                  <FontAwesomeIcon icon={faHeart}>Favorite</FontAwesomeIcon>
                </Button>
                <Button className={compare && styles.compare} variant='outline'>
                  <FontAwesomeIcon icon={faExchangeAlt}>Add to compare</FontAwesomeIcon>
                </Button>
              </div>
              <div className={styles.price}>
                {oldPrice && <p>${oldPrice}</p>}
                <Button noHover variant='small'>
                  $ {price}
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className={'col-8 ' + styles.productFeatured}>
          <div className={styles.photo}>
            <img
              className={styles.image}
              alt={name}
              src={`${process.env.PUBLIC_URL}/images/products/Aenean Ru Bristique 3.jpg`}
            />
            <div className={styles.title}>
              <div className={styles.text}>
                <h1>
                  indoor <b>furniture</b>
                </h1>
                <h2>save up to 50% of all furniture</h2>
              </div>
            </div>
            <button>shop now</button>
          </div>

          <div className={styles.buttons}>
            <button className={styles.button}>&lsaquo;</button>
            <button className={styles.button}>&rsaquo;</button>
          </div>
        </section>
      </div>
    </div>
  </div>
);

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
