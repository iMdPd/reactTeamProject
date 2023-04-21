import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { useDispatch } from 'react-redux';
import { updateViewportMode } from '../../../redux/viewportModeRedux';
import getViewportMode from '../../../utils/getViewportMode';
import { StickyBar } from '../StickyBar/StickyBar';

const MainLayout = ({ children }) => {
  const dispatch = useDispatch();

  const setViewportMode = () => dispatch(updateViewportMode(getViewportMode()));

  const handleWindowResize = () => {
    setViewportMode();
  };

  useEffect(() => {
    setViewportMode();

    window.addEventListener('resize', handleWindowResize);
  });

  return (
    <div>
      <Header />
      {children}
      <StickyBar />
      <Footer />
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
};

export default MainLayout;
