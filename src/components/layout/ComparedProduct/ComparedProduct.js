import React from 'react';
import styles from './ComparedProduct.module.scss';
import Button from '../../common/Button/Button';
import { useDispatch } from 'react-redux';
import { toggleCompare } from '../../../redux/productsRedux';
import PropTypes from 'prop-types';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

export const ComparedProduct = ({ name, id }) => {
  const dispatch = useDispatch();

  const handleRemoveCompare = id => {
    dispatch(toggleCompare(id));
  };

  return (
    <>
      <div className={styles.smallBox + ' col-3'}>
        <img
          className={styles.image}
          alt={name}
          src={`${process.env.PUBLIC_URL}/images/products/${id}.jpg`}
        />
        <Button
          onClick={() => handleRemoveCompare(id)}
          className={styles.closeButton}
          noHover
          variant='outline'
        >
          <FontAwesomeIcon className={styles.icon} icon={faPlus}></FontAwesomeIcon>
        </Button>
      </div>
    </>
  );
};

ComparedProduct.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
};
