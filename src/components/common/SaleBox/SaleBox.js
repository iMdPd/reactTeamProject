import React from 'react';
import styles from './SaleBox.module.scss';

import PropTypes from 'prop-types';

export const SaleBox = ({ id, name }) => {
  return (
    <div className={styles.discount}>
      <img
        className={styles.image}
        alt={name}
        src={`${process.env.PUBLIC_URL}/images/products/${id}.jpg`}
      />
    </div>
  );
};

SaleBox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};
