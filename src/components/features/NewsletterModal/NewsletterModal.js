import Modal from 'react-bootstrap/Modal';
import React, { useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import styles from './NewsletterModal.module.scss';
import { useDispatch } from 'react-redux';
import { addNewsletter } from '../../../redux/newsletterRedux';

export const NewsletterModal = props => {
  const [email, setEmail] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(addNewsletter(email));
    props.onHide();
  };

  return (
    <Modal {...props} size='md' centered>
      <Modal.Header className={styles.modalHeader}>
        <Modal.Title>Subscribe to our newsletter.</Modal.Title>
      </Modal.Header>
      <Modal.Body className={styles.modalBody}>
        <div>
          <FontAwesomeIcon className={styles.icon} icon={faEnvelope} />
        </div>
        <p>
          Signup for our weekly newsletter to get the latest news, updates and amazing
          offers delivered directly in your inbox.
        </p>

        <Form onSubmit={handleSubmit}>
          <Row className={styles.form}>
            <Col xs={7}>
              <Form.Group>
                <Form.Control
                  type='email'
                  onChange={e => setEmail(e.target.value)}
                  placeholder='Enter your email'
                  autoFocus
                  required
                />
              </Form.Group>
            </Col>
            <Button variant='primary' type='submit'>
              Subscribe
            </Button>
          </Row>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant='secondary' onClick={props.onHide}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

NewsletterModal.propTypes = {
  onHide: PropTypes.func,
};
