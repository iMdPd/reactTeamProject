import React, { useState } from 'react';
import styles from './StickyBar.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExchangeAlt } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { getComparedProducts } from '../../../redux/productsRedux';
import { ComparedProduct } from '../ComparedProduct/ComparedProduct';
import Button from '../../common/Button/Button';
import { useTranslation } from 'react-i18next';

export const StickyBar = () => {
  const { t } = useTranslation();
  const [focused, setFocused] = useState(false);

  const comparedProducts = useSelector(getComparedProducts);

  const styledBox = {
    width: focused && `calc(260px + ${comparedProducts.length}*130px)`,
    outline: 'none',
  };

  return (
    <>
      <button
        onClick={e => e.target.tagName === 'BUTTON' && setFocused(!focused)}
        style={styledBox}
        className={styles.sticky}
      >
        <FontAwesomeIcon className={styles.icon} icon={faExchangeAlt}>
          {t('label.addToCompare')}
        </FontAwesomeIcon>
        <div className={styles.container}>
          <div className='row align-items-center justify-content-start flex-nowrap flex'>
            {comparedProducts.map((product, i) => (
              <ComparedProduct key={i} {...product} />
            ))}
            <Button className={styles.compareButton} variant='small'>
              {t('button.compare')}
            </Button>
          </div>
        </div>
      </button>
    </>
  );
};
