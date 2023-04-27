import React from 'react';
// import PropTypes from 'prop-types';

import styles from './Homepage.module.scss';

import FeatureBoxes from '../../features/FeatureBoxes/FeatureBoxes';
import NewFurniture from '../../features/NewFurniture/NewFurnitureContainer';
import { SaleBoxes } from '../../features/SaleBoxes/SaleBoxes';

const Homepage = () => (
  <div className={styles.root}>
    <FeatureBoxes />
    <SaleBoxes />
    <NewFurniture />
  </div>
);

// Homepage.propTypes = {};

export default Homepage;
