import React, { useState } from 'react';
import PropTypes from 'prop-types';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { StickyBar } from '../StickyBar/StickyBar';
import Feedbacks from '../../features/Feedbacks/Feedbacks';
import { useLocation } from 'react-router-dom';
import { NewsletterModal } from '../../features/NewsletterModal/NewsletterModal';
import { useSelector } from 'react-redux';
import { getNewsleterByEmail } from '../../../redux/newsletterRedux';

const timeout = 15000;

const MainLayout = ({ children, user }) => {
  const [modalShow, setModalShow] = useState(false);
  const [count, setCount] = useState(0);

  const { pathname } = useLocation();

  const userSignedToNewsletter = useSelector(state =>
    getNewsleterByEmail(state, user.email)
  );

  const incorrectPath = pathname !== '/signup' && pathname !== '/login';

  if (count < 1 && incorrectPath && !userSignedToNewsletter) {
    setTimeout(() => setModalShow(true), timeout);
    setCount(prev => prev + 1);
  }

  const handleMouseLeave = () => {
    if (count <= 1 && incorrectPath && !userSignedToNewsletter) {
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
  user: PropTypes.shape({ email: PropTypes.string, password: PropTypes.string }),
};

export default MainLayout;
