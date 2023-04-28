import React from 'react';
import PropTypes from 'prop-types';

import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faYoutube,
  faGooglePlusG,
  faLinkedinIn,
  faPinterestP,
} from '@fortawesome/free-brands-svg-icons';
import { useTranslation } from 'react-i18next';

const Footer = ({ pathname }) => {
  const { t } = useTranslation();

  return (
    pathname !== '/login' &&
    pathname !== '/signup' && (
      <footer className={styles.root}>
        <div className={styles.footerMenu}>
          <div className='container'>
            <div className='row text-center text-md-left'>
              <div className='col-12 col-md-6 col-lg-3'>
                <div className={styles.menuWrapper}>
                  <h6>{t('label.information')}</h6>
                  <ul>
                    <li>
                      <a href='#'>{t('label.aboutUs')}</a>
                    </li>
                    <li>
                      <a href='#'>{t('label.policy')}</a>
                    </li>
                    <li>
                      <a href='#'>{t('label.conditions')}</a>
                    </li>
                    <li>
                      <a href='#'>{t('label.onlineSupport')}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-12 col-md-6 col-lg-3'>
                <div className={styles.menuWrapper}>
                  <h6>{t('label.myAccount')}</h6>
                  <ul>
                    <li>
                      <a href='#'>{t('label.login')}</a>
                    </li>
                    <li>
                      <a href='#'>{t('label.myCart')}</a>
                    </li>
                    <li>
                      <a href='#'>{t('label.wishlist')}</a>
                    </li>
                    <li>
                      <a href='#'>{t('label.checkout')}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-12 col-md-6 col-lg-3'>
                <div className={styles.menuWrapper}>
                  <h6>{t('label.information')}</h6>
                  <ul>
                    <li>
                      <a href='#'>{t('label.specials')}</a>
                    </li>
                    <li>
                      <a href='#'>{t('label.newProducts')}</a>
                    </li>
                    <li>
                      <a href='#'>{t('label.bestSellers')}</a>
                    </li>
                    <li>
                      <a href='#'>{t('label.ourStores')}</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-12 col-md-6 col-lg-3'>
                <div className={styles.menuWrapper}>
                  <h6>{t('label.orders')}</h6>
                  <ul>
                    <li>
                      <a href='#'>{t('label.paymentOptions')}</a>
                    </li>
                    <li>
                      <a href='#'>{t('label.shippingAndDelivery')}</a>
                    </li>
                    <li>
                      <a href='#'>{t('label.returns')}</a>
                    </li>
                    <li>
                      <a href='#'>{t('label.shipping')}</a>
                    </li>
                  </ul>
                </div>
                <img
                  className={styles.paymentCards}
                  src='./images/cards.png'
                  alt={t('label.supportedCreditCards')}
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomBar}>
          <div className='container'>
            <div className='row  align-items-lg-center '>
              <div className='col-12 col-lg-4 text-center'></div>
              <div className={'col text-left text-lg-center ' + styles.copyright}>
                <p>©Copyright 2016 Bazar | All Rights Reserved</p>
              </div>
              <div className={'col text-right ' + styles.socialMedia}>
                <ul>
                  <li>
                    <a href='#'>
                      <FontAwesomeIcon icon={faTwitter}>Twitter</FontAwesomeIcon>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <FontAwesomeIcon icon={faFacebookF}>Facebook</FontAwesomeIcon>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <FontAwesomeIcon icon={faYoutube}>YouTube</FontAwesomeIcon>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <FontAwesomeIcon icon={faGooglePlusG}>
                        Google Plus
                      </FontAwesomeIcon>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <FontAwesomeIcon icon={faLinkedinIn}>LinkedIn</FontAwesomeIcon>
                    </a>
                  </li>
                  <li>
                    <a href='#'>
                      <FontAwesomeIcon icon={faPinterestP}>Pinterest</FontAwesomeIcon>
                    </a>
                  </li>
                </ul>
                =======
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
  );
};

Footer.propTypes = {
  pathname: PropTypes.string,
};

export default Footer;
