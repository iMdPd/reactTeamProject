import React from 'react';
import PropTypes from 'prop-types';

import {
  faTruck,
  faHeadphones,
  faReplyAll,
  faBullhorn,
} from '@fortawesome/free-solid-svg-icons';

import styles from './FeatureBoxes.module.scss';
import FeatureBox from '../../common/FeatureBox/FeatureBox';
import { useTranslation } from 'react-i18next';

const FeatureBoxes = () => {
  const { t } = useTranslation();

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className='col-6 col-lg'>
            <FeatureBox icon={faTruck} active>
              <h5>{t('label.freeShipping.part1')}</h5>
              <p>{t('label.freeShipping.part2')}</p>
            </FeatureBox>
          </div>
          <div className='col-6 col-lg'>
            <FeatureBox icon={faHeadphones}>
              <h5>{t('label.custSupport.part1')}</h5>
              <p>{t('label.custSupport.part2')}</p>
            </FeatureBox>
          </div>
          <div className='col-6 col-lg'>
            <FeatureBox icon={faReplyAll}>
              <h5>{t('label.moneyBack.part1')}</h5>
              <p>{t('label.moneyBack.part2')}</p>
            </FeatureBox>
          </div>
          <div className='col-6 col-lg'>
            <FeatureBox icon={faBullhorn}>
              <h5>{t('label.memberDiscount.part1')}</h5>
              <p>{t('label.memberDiscount.part2')}</p>
            </FeatureBox>
          </div>
        </div>
      </div>
    </div>
  );
};

FeatureBoxes.propTypes = {
  children: PropTypes.node,
};

export default FeatureBoxes;
