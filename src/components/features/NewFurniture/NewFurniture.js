import React from 'react';
import PropTypes from 'prop-types';

import styles from './NewFurniture.module.scss';
import ProductBox from '../../common/ProductBox/ProductBox';
import { viewportModes } from '../../../settings';
import Carousel, { CarouselItem } from '../../common/Carousel/Carousel';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faArrowCircleLeft,
  faArrowCircleRight,
} from '@fortawesome/free-solid-svg-icons';
import { Translation } from 'react-i18next';

const time = 250;

class NewFurniture extends React.Component {
  DEFAULT_PRODUCTS_PER_PAGE = 8;
  pagesCount = 0;
  state = {
    activePage: 0,
    activeCategory: 'bed',
    visible: true,
  };

  handlePageChange(newPage) {
    this.setState({ visible: false });
    setTimeout(() => this.setState({ activePage: newPage }), time);
    setTimeout(() => this.setState({ visible: true }), time * 2);
  }

  handlePageSwipe = newPage => {
    this.setState({ activePage: newPage });
  };

  handleCategoryChange(newCategory) {
    this.setState({ visible: false });
    setTimeout(() => this.setState({ activeCategory: newCategory }), time);
    setTimeout(() => this.setState({ visible: true }), time * 2);
    this.setState({ activePage: 0 });
  }

  leftArrowClick = () => {
    if (this.state.activePage > 0) {
      this.handlePageChange(this.state.activePage - 1);
    }
  };

  rightArrowClick = () => {
    if (this.state.activePage < this.pagesCount - 1) {
      this.handlePageChange(this.state.activePage + 1);
    }
  };

  render() {
    const { categories, products, viewportMode } = this.props;
    const { activeCategory, activePage, visible } = this.state;

    if (viewportMode === viewportModes.mobile) {
      this.DEFAULT_PRODUCTS_PER_PAGE = 1;
    } else if (viewportMode === viewportModes.tablet) {
      this.DEFAULT_PRODUCTS_PER_PAGE = 2;
    } else {
      this.DEFAULT_PRODUCTS_PER_PAGE = 8;
    }

    const categoryProducts = products.filter(item => item.category === activeCategory);
    this.pagesCount = Math.ceil(
      categoryProducts.length / this.DEFAULT_PRODUCTS_PER_PAGE
    );

    const pages = [];
    const dots = [];
    for (let i = 0; i < this.pagesCount; i++) {
      dots.push(
        <li key={i}>
          <a
            onClick={() => this.handlePageChange(i)}
            className={i === activePage && styles.active}
          >
            <Translation>{(t, { i18n }) => t('label.page')}</Translation>
            {i}
          </a>
        </li>
      );

      pages.push(
        categoryProducts.slice(
          i * this.DEFAULT_PRODUCTS_PER_PAGE,
          (i + 1) * this.DEFAULT_PRODUCTS_PER_PAGE
        )
      );
    }
    return (
      <div className={styles.root}>
        <div className='container'>
          <div className={styles.panelBar}>
            <div className='row no-gutters align-items-end'>
              <div className={'col-auto ' + styles.heading}>
                <h3>
                  <Translation>{(t, { i18n }) => t('label.newFurniture')}</Translation>
                </h3>
              </div>
              <div className={'col ' + styles.menu}>
                <ul>
                  {categories.map(item => (
                    <li key={item.id}>
                      <a
                        className={item.id === activeCategory && styles.active}
                        onClick={() => this.handleCategoryChange(item.id)}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={'col-auto ' + styles.dots}>
                <ul>{dots}</ul>
              </div>
            </div>
          </div>
          <div className={'row justify-content-center ' + styles.arrows}>
            <FontAwesomeIcon
              className={styles.left + ' ' + (activePage === 0 && styles.unactive)}
              onClick={this.leftArrowClick}
              icon={faArrowCircleLeft}
            />
            <FontAwesomeIcon
              className={
                styles.right +
                ' ' +
                (activePage >= this.pagesCount - 1 && styles.unactive)
              }
              onClick={this.rightArrowClick}
              icon={faArrowCircleRight}
            />
          </div>
          <Carousel actionSwiped={this.handlePageSwipe} initialIndex={activePage}>
            {pages.map((page, i) => (
              <CarouselItem key={i}>
                <div
                  className={
                    'row justify-content-center ' +
                    styles.productsContainer +
                    ' ' +
                    (!visible && styles.fade)
                  }
                >
                  {page.map(item => (
                    <div key={item.id} className='col-12 col-sm-6 col-lg-3'>
                      <ProductBox {...item} />
                    </div>
                  ))}
                </div>
              </CarouselItem>
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
}

NewFurniture.propTypes = {
  children: PropTypes.node,
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
    })
  ),
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      category: PropTypes.string,
      price: PropTypes.number,
      stars: PropTypes.number,
      promo: PropTypes.string,
      newFurniture: PropTypes.bool,
    })
  ),
  viewportMode: PropTypes.object,
};

NewFurniture.defaultProps = {
  categories: [],
  products: [],
};

export default NewFurniture;
