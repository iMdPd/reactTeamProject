import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getNewsleterByEmail } from '../../../redux/newsletterRedux';
import Feedbacks from '../../features/Feedbacks/Feedbacks';
import { NewsletterModal } from '../../features/NewsletterModal/NewsletterModal';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { StickyBar } from '../StickyBar/StickyBar';

const time = 15000;

const MainLayout = ({ children, user, userSetter }) => {
  const [modalShow, setModalShow] = useState(false);
  const [count, setCount] = useState(0);

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
      <Header pathname={pathname} userSetter={userSetter} />
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
  userSetter: PropTypes.func,
};

export default MainLayout;
