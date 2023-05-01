import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { useDispatch } from 'react-redux';
import { updateViewportMode } from '../../../redux/viewportModeRedux';
import getViewportMode from '../../../utils/getViewportMode';
import { StickyBar } from '../StickyBar/StickyBar';
import Feedbacks from '../../features/Feedbacks/Feedbacks';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getNewsleterByEmail } from '../../../redux/newsletterRedux';
import { NewsletterModal } from '../../features/NewsletterModal/NewsletterModal';

const time = 15000;

const MainLayout = ({ children, user }) => {
  const [modalShow, setModalShow] = useState(false);
  const [count, setCount] = useState(0);

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

  const userSignedToNewsletter = useSelector(state => getNewsleterByEmail(state, user));
  const incorrectPath = pathname !== '/signup' && pathname !== '/login';

  useEffect(() => {
    if (
      count < 1 &&
      incorrectPath &&
      userSignedToNewsletter !== user &&
      user !== null
    ) {
      const modalTimeout = setTimeout(() => {
        setModalShow(true);
        setCount(prev => prev + 1);
      }, time);

      return () => {
        clearTimeout(modalTimeout);
      };
    }
  }, [count, incorrectPath, user, userSignedToNewsletter]);

  const handleMouseLeave = () => {
    if (
      count < 1 &&
      incorrectPath &&
      userSignedToNewsletter !== user &&
      user !== null
    ) {
      setModalShow(true);
      setCount(prev => prev + 1);
    }
  };

  return (
    <div
      onMouseLeave={handleMouseLeave}
      style={{ filter: modalShow ? 'blur(20px)' : 'none' }}
    >
      <Header pathname={pathname} />
      {children}
      {incorrectPath && ((<StickyBar />), (<Feedbacks />))}
      <Footer pathname={pathname} />
      {incorrectPath && (
        <NewsletterModal show={modalShow} onHide={() => setModalShow(false)} />
      )}
    </div>
  );
};

MainLayout.propTypes = {
  children: PropTypes.node,
  user: PropTypes.string,
};

export default MainLayout;
