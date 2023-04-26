import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl } from '@fortawesome/free-solid-svg-icons';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import { useTranslation } from 'react-i18next';

const MenuBar = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <div className='container'>
        <nav className='row  flex-column-reverse  flex-xl-row  align-items-center '>
          <div className='col d-flex justify-content-center align-items-center  my-2'>
            <ProductSearch />

            <div className={styles.dropdown + ' d-md-none'}>
              <FontAwesomeIcon className='mx-2' icon={faListUl} />

              <ul className={styles.dropdownContent}>
                <li>
                  <a href='#' className={styles.active}>
                    {t('label.homePage')}
                  </a>
                </li>
                <li>
                  <a href='#'>{t('label.furniture')}</a>
                </li>
                <li>
                  <a href='#'>{t('label.chair')}</a>
                </li>
                <li>
                  <a href='#'>{t('label.table')}</a>
                </li>
                <li>
                  <a href='#'>{t('label.sofa')}</a>
                </li>
                <li>
                  <a href='#'>{t('label.bedroom')}</a>
                </li>
                <li>
                  <a href='#'>{t('label.blog')}</a>
                </li>
              </ul>
            </div>
          </div>
          <div className={'col-auto d-none d-md-flex ' + styles.menu}>
            <ul>
              <li>
                <a href='#' className={styles.active}>
                  {t('label.homePage')}
                </a>
              </li>
              <li>
                <a href='#'>{t('label.furniture')}</a>
              </li>
              <li>
                <a href='#'>{t('label.chair')}</a>
              </li>
              <li>
                <a href='#'>{t('label.table')}</a>
              </li>
              <li>
                <a href='#'>{t('label.sofa')}</a>
              </li>
              <li>
                <a href='#'>{t('label.bedroom')}</a>
              </li>
              <li>
                <a href='#'>{t('label.blog')}</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
