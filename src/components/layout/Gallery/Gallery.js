import React, { useState } from 'react';
import styles from './Gallery.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faStar,
  faChevronLeft,
  faChevronRight,
  faExchangeAlt,
  faEye,
  faShoppingBasket,
} from '@fortawesome/free-solid-svg-icons';
import Button from '../../common/Button/Button';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAll,
  getComparedProducts,
  toggleFavorite,
  toggleCompare,
  updateUserRating,
} from '../../../redux/productsRedux';
import StarRating from '../../features/StarRating/StarRating';
import Carousel, { CarouselItem } from '../../common/Carousel/Carousel';

const Gallery = () => {
  const dispatch = useDispatch();
  const products = useSelector(getAll);
  const comparedProducts = useSelector(getComparedProducts);
  const [galleryProduct, setGalleryProduct] = useState(() => {
    return products.find(product => product.section === 'featured') || {};
  });

  const [activeTab, setActiveTab] = useState('featured');

  const getThumbnailsByActiveTab = () => {
    const thumbnails = products.filter(
      product => product.thumbnailCategory === activeTab
    );
    return thumbnails;
  };

  const [showFade, setShowFade] = useState(false);
  const handleAnimationEnd = () => {
    setShowFade(false);
  };

  const handleButtonClick = (selectedProduct, e) => {
    e.preventDefault();
    const product = products.find(
      product => product.section.toLowerCase() === selectedProduct
    );
    setGalleryProduct(product);
    setShowFade(true);
    setActiveTab(selectedProduct);
  };

  const handleThumbnailClick = (thumbnail, e) => {
    e.preventDefault();
    if (galleryProduct.id !== thumbnail.id) {
      setShowFade(true);
      setGalleryProduct(products.find(product => product.id === thumbnail.id));
    }
  };

  const handleToggleFavoriteProduct = (id, e) => {
    e.preventDefault();
    dispatch(toggleFavorite(id));
  };

  const handleToggleCompareProduct = (id, e) => {
    e.preventDefault();
    if (comparedProducts.length < 4 || galleryProduct.compare === true) {
      dispatch(toggleCompare(id));
    }
  };

  const [activeSlide, setActiveSlide] = useState(0);

  const handleImageSwipe = newImage => {
    setActiveSlide(newImage);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.gallery}>
          <div className={styles.leftSide}>
            <h3>Furniture gallery</h3>
            <div className={styles.sectionButtons}>
              <Button
                variant='small'
                className={styles.button}
                onClick={e => handleButtonClick('featured', e)}
              >
                Featured
              </Button>
              <Button
                variant='small'
                className={styles.button}
                onClick={e => handleButtonClick('top seller', e)}
              >
                Top seller
              </Button>
              <Button
                variant='small'
                className={styles.button}
                onClick={e => handleButtonClick('sale off', e)}
              >
                Sale off
              </Button>
              <Button
                variant='small'
                className={styles.button}
                onClick={e => handleButtonClick('top rated', e)}
              >
                Top rated
              </Button>
            </div>
            <div
              className={styles.leftSideMainImage + (showFade ? ' ' + styles.fade : '')}
              onAnimationEnd={handleAnimationEnd}
            >
              <img
                src={`${process.env.PUBLIC_URL}/images/products/${galleryProduct.id}.jpg`}
                alt={galleryProduct.name}
              ></img>
              <div className={styles.productButtons}>
                <Button
                  variant='outline'
                  className={styles.tooltipButton}
                  onClick={e => handleToggleFavoriteProduct(galleryProduct.id, e)}
                >
                  <FontAwesomeIcon icon={faStar} />
                  <span className={styles.tooltip}>Favorite</span>
                </Button>
                <Button
                  variant='outline'
                  className={styles.tooltipButton}
                  onClick={e => handleToggleCompareProduct(galleryProduct.id, e)}
                >
                  <FontAwesomeIcon icon={faExchangeAlt} />
                  <span className={styles.tooltip}>Compare</span>
                </Button>
                <Button variant='outline' className={styles.tooltipButton}>
                  <FontAwesomeIcon icon={faEye} />
                  <span className={styles.tooltip}>Quick view</span>
                </Button>
                <Button variant='outline' className={styles.tooltipButton}>
                  <FontAwesomeIcon icon={faShoppingBasket} />
                  <span className={styles.tooltip}>Add to cart</span>
                </Button>
              </div>
              <div className={styles.productInfo}>
                <h5>{galleryProduct.name}</h5>
                <div className={styles.rating}>
                  <StarRating
                    defaultRating={galleryProduct.stars}
                    clientRating={
                      galleryProduct.userRating !== undefined
                        ? galleryProduct.userRating
                        : 0
                    }
                    onRatingChange={rating =>
                      dispatch(updateUserRating(galleryProduct.id, rating))
                    }
                  />
                </div>
                <div className={styles.productPrices}>
                  <span className={styles.price}>${galleryProduct.price}</span>
                  <span className={styles.oldPrice}>${galleryProduct.oldPrice}</span>
                </div>
              </div>
            </div>
            <div
              className={styles.slider + (showFade ? ' ' + styles.fade : '')}
              onAnimationEnd={handleAnimationEnd}
            >
              <Button
                className={styles.sliderButton}
                variant='outline'
                onClick={e => {
                  e.preventDefault();
                  handleImageSwipe(activeSlide - 1);
                }}
              >
                <FontAwesomeIcon icon={faChevronLeft} />
              </Button>
              <Carousel actionSwiped={handleImageSwipe} initialIndex={activeSlide}>
                <div className={styles.sliderImage}>
                  <div className={styles.thumbnailContainer}>
                    <CarouselItem className={styles.carouselItemGallery}>
                      {getThumbnailsByActiveTab().map(thumbnail => (
                        <div
                          className={styles.thumbnail}
                          key={thumbnail.id}
                          onClick={e => handleThumbnailClick(thumbnail, e)}
                        >
                          <img
                            src={`${process.env.PUBLIC_URL}/images/products/${thumbnail.id}.jpg`}
                            alt={thumbnail.name}
                          />
                        </div>
                      ))}
                    </CarouselItem>
                  </div>
                </div>
              </Carousel>
              <Button
                className={styles.sliderButton}
                variant='outline'
                onClick={e => {
                  e.preventDefault();
                  handleImageSwipe(activeSlide + 1);
                }}
              >
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
              <div className={styles.productInfo}>
                <div className={styles.price}>
                  <span className={styles.priceText}>from</span>
                  <span className={styles.priceValue}>$50.80</span>
                </div>
                <h5>Bedroom Bed</h5>
              </div>
              <Button className={styles.shopButton}>Shop now</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
