import React, { useState } from 'react';
// import PropTypes from 'prop-types';
import styles from './ProductList.module.scss';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getProductsByCategory } from '../../../redux/productsRedux';
import { Translation } from 'react-i18next';
import ProductBox from '../../common/ProductBox/ProductBox';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleDown, faList, faTable } from '@fortawesome/free-solid-svg-icons';
import { Form } from 'react-bootstrap';

const displayedProducts = 8;

const ProductList = () => {
  const [displayProducts, setDisplayProducts] = useState(displayedProducts);
  const [sortBy, setSortBy] = useState('');

  const { categoryId } = useParams();

  const categoryProducts = useSelector(state =>
    getProductsByCategory(state, categoryId)
  );

  const sortedProducts = condition => {
    switch (condition) {
      case 'priceLow':
        return categoryProducts.sort((a, b) => {
          return Math.sign(a.price - b.price);
        });

      case 'priceHigh':
        return categoryProducts.sort((a, b) => {
          return Math.sign(b.price - a.price);
        });

      case 'ratingLow':
        return categoryProducts.sort((a, b) => {
          return Math.sign(a.stars - b.stars);
        });

      case 'ratingHigh':
        return categoryProducts.sort((a, b) => {
          return Math.sign(b.stars - a.stars);
        });

      default:
        return categoryProducts;
    }
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end justify-content-center'>
            <div className={'row ' + styles.heading}>
              <h3>
                <Translation>{t => t(`label.${categoryId}`)}</Translation>
              </h3>
              <div className={styles.filterWrapper}>
                <div>
                  <p className={styles.selectDescribe}>Sort By</p>
                  <Form.Select
                    className={styles.select}
                    size='sm'
                    defaultValue={0}
                    onChange={e => setSortBy(e.target.value)}
                  >
                    <option value='0'>Select</option>
                    <option value='priceLow'>Price: Lowest first</option>
                    <option value='priceHigh'>Price: Highest first</option>
                    <option value='ratingLow'>Rating: Lowest first</option>
                    <option value='ratingHigh'>Rating: Highest first</option>
                  </Form.Select>
                  <p className={styles.selectDescribe}>Show</p>
                  <Form.Select
                    className={styles.select}
                    size='sm'
                    defaultValue={displayedProducts}
                    onChange={e => setDisplayProducts(+e.target.value)}
                  >
                    {[...Array(categoryProducts.length / 4).keys()].map(i => (
                      <option key={i}>{(i + 1) * 4}</option>
                    ))}
                  </Form.Select>
                </div>
                <div className={styles.displayVariant}>
                  <FontAwesomeIcon icon={faTable} />
                  <FontAwesomeIcon icon={faList} />
                </div>
              </div>
            </div>
            <div className='row'>
              {sortedProducts(sortBy)
                .slice(0, displayProducts)
                .map(product => (
                  <div key={product.id} className='col-12 col-sm-6 col-lg-3'>
                    <ProductBox {...product} />
                  </div>
                ))}
            </div>
            {displayProducts < categoryProducts.length && (
              <div>
                <FontAwesomeIcon
                  className={styles.getMore}
                  onClick={() => setDisplayProducts(displayProducts + 4)}
                  icon={faArrowCircleDown}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// ProductList.propTypes = {};

export default ProductList;
