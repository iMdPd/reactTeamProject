import React from 'react';
import PropTypes from 'prop-types';

import styles from './Header.module.scss';

import TopBar from '../TopBar/TopBar';
import CompanyClaim from '../CompanyClaim/CompanyClaim';
import MenuBar from '../MenuBar/MenuBar';

const Header = ({ pathname }) => {
  return (
    <header className={styles.root}>
      <TopBar />
      {pathname !== '/signup' && pathname !== '/login' && <CompanyClaim />}
      {pathname !== '/signup' && pathname !== '/login' && <MenuBar />}
    </header>
  );
};

Header.propTypes = {
  pathname: PropTypes.string,
};

export default Header;
