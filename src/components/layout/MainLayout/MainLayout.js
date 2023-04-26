import React from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { StickyBar } from '../StickyBar/StickyBar';
import Feedbacks from '../../features/Feedbacks/Feedbacks';
import { useLocation } from 'react-router-dom';

const MainLayout = ({ children }) => {
  const { pathname } = useLocation();

  return (
    <div>
      <Header pathname={pathname} />
      {children}
      {pathname !== '/signup' && pathname !== '/login' && <StickyBar />}
      {pathname !== '/signup' && pathname !== '/login' && <Feedbacks />}
      <Footer pathname={pathname} />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
