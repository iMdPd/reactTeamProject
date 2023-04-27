import PropTypes from 'prop-types';
import React, { useState } from 'react';

import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { getNewsleterByEmail } from '../../../redux/newsletterRedux';
import Feedbacks from '../../features/Feedbacks/Feedbacks';
import { NewsletterModal } from '../../features/NewsletterModal/NewsletterModal';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import { StickyBar } from '../StickyBar/StickyBar';

const timeout = 15000;

const MainLayout = ({ children, user }) => {
  const [modalShow, setModalShow] = useState(false);
  const [count, setCount] = useState(0);

  const { pathname } = useLocation();

  const userSignedToNewsletter = useSelector(state => getNewsleterByEmail(state, user));
  const incorrectPath = pathname !== '/signup' && pathname !== '/login';

  if (count < 1 && incorrectPath && userSignedToNewsletter !== user && user !== null) {
    setTimeout(() => setModalShow(true), timeout);
    setCount(prev => prev + 1);
  }

  const handleMouseLeave = () => {
    if (
      count <= 1 &&
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
