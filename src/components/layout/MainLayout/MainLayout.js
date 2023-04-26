import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import { useDispatch } from 'react-redux';
import { updateViewportMode } from '../../../redux/viewportModeRedux';
import getViewportMode from '../../../utils/getViewportMode';
import { StickyBar } from '../StickyBar/StickyBar';
import Feedbacks from '../../features/Feedbacks/Feedbacks';
import { useLocation } from 'react-router-dom';

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
