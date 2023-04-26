import React from 'react';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faListUl, faSearch, faCaretDown } from '@fortawesome/free-solid-svg-icons';

import styles from './ProductSearch.module.scss';
import { useTranslation } from 'react-i18next';

const ProductSearch = () => {
  const { t } = useTranslation();

  return (
    <form action='' className={styles.root}>
      <div className={styles.category}>
        <FontAwesomeIcon className={styles.icon} icon={faListUl} />
        <ul>
          <li className={styles.selectCategory}>
            {t('label.selectCategory')}
            <ul>
              <li className={styles.mainCategory}>{t('label.newCollection')}</li>
              <li className={styles.mainCategory}>{t('label.bestsellers')}</li>
              <li className={styles.mainCategory}>{t('label.hotDeals')}</li>
              <li className={styles.mainCategory}>{t('label.comingSoon')}</li>
            </ul>
          </li>
        </ul>
        <FontAwesomeIcon className={styles.icon} icon={faCaretDown} />
      </div>
      <div className={styles.searchField}>
        <input placeholder={t('label.searchProducts')} type='text' />
        <button>
          <FontAwesomeIcon className={styles.icon} icon={faSearch} />
        </button>
      </div>
    </form>
  );
};

ProductSearch.propTypes = {
  children: PropTypes.node,
};

export default ProductSearch;
