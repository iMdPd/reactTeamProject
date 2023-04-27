import React from 'react';
import PropTypes from 'prop-types';

import ProductSearch from '../../features/ProductSearch/ProductSearch';

import styles from './MenuBar.module.scss';
import { useTranslation } from 'react-i18next';

const MenuBar = ({ children }) => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row align-items-center'>
          <div className='col'>
            <ProductSearch />
          </div>
          <div className={'col-auto ' + styles.menu}>
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
        </div>
      </div>
    </div>
  );
};

MenuBar.propTypes = {
  children: PropTypes.node,
};

export default MenuBar;
