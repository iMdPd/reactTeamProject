import React from 'react';
import PropTypes from 'prop-types';
import styles from './Brand.module.scss';

const Brand = ({ name, logo }) => {
  console.log(logo);
  return (
    <div className={styles.class}>
      <img src={`${process.env.PUBLIC_URL}/images/brands/${logo}.jpg`} alt={name} />
    </div>
  );
};
Brand.propTypes = {
  name: PropTypes.string,
  logo: PropTypes.string,
};
export default Brand;
