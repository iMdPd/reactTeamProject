import React from 'react';
import styles from './SaleBoxes.module.scss';
import { SaleBox } from '../../common/SaleBox/SaleBox';
import { useSelector } from 'react-redux';
import { getSaleProducts } from '../../../redux/productsRedux';
import { useTranslation } from 'react-i18next';

export const SaleBoxes = () => {
  const { t } = useTranslation();
  const saleProducts = useSelector(getSaleProducts);
  const shuffledProducts = saleProducts.sort(() => 0.5 - Math.random());

  const percent = Math.floor(
    100 * (shuffledProducts[0].price / shuffledProducts[0].oldPrice) - 100
  );

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={'col-12 col-lg-6 ' + styles.mainBox}>
            <SaleBox key={shuffledProducts[0].id} {...shuffledProducts[0]} />
            <div className={styles.saleDescription}>
              <p className={styles.heading}>{t('label.hotOffer')}</p>
              <p className={styles.category}>{shuffledProducts[0].category}</p>
              <p className={styles.percent}> {percent}%</p>
            </div>
          </div>
          <div className={'col-12 col-lg-6 ' + styles.mainBox}>
            <div className={styles.smallBoxTop}>
              <SaleBox key={shuffledProducts[1].id} {...shuffledProducts[1]} />
              <div className={styles.saleDescription}>
                <p className={styles.collection}>
                  <span>{shuffledProducts[1].category}</span> {t('label.collection')}
                </p>
                <p className={styles.price}>{shuffledProducts[1].price}$</p>
              </div>
            </div>
            <div className={styles.smallBoxBottom}>
              <SaleBox key={shuffledProducts[2].id} {...shuffledProducts[2]} />
              <div className={styles.saleDescription}>
                <p className={styles.collection}>
                  <span>{t('label.special')}</span> {t('label.collection')}
                </p>
                <p className={styles.describeCollection}>
                  {' '}
                  {t('label.saveUpOfFurniture.part1')} 45%{' '}
                  {t('label.saveUpOfFurniture.part2')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
