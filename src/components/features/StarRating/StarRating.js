import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './StarRating.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as farStar } from '@fortawesome/free-regular-svg-icons';

const StarRating = ({ defaultRating, clientRating, onRatingChange }) => {
  const [hoverRating, setHoverRating] = useState(0);
  const [clicked, setClicked] = useState(false);

  const rating = clientRating || defaultRating;

  const renderStar = starNumber => {
    if (hoverRating > 0) {
      if (starNumber <= hoverRating) {
        return <FontAwesomeIcon icon={faStar} className={styles.hoverStar} />;
      } else {
        return <FontAwesomeIcon icon={farStar} />;
      }
    } else {
      if (starNumber <= rating && clicked) {
        return <FontAwesomeIcon icon={faStar} className={styles.clickedStar} />;
      } else if (starNumber <= rating && clientRating !== 0) {
        return <FontAwesomeIcon icon={faStar} className={styles.userRatedStar} />;
      } else if (starNumber <= rating) {
        return <FontAwesomeIcon icon={faStar} className={styles.defaultStar} />;
      } else {
        return <FontAwesomeIcon icon={farStar} />;
      }
    }
  };

  return (
    <div className={styles.starRating}>
      {[1, 2, 3, 4, 5].map(i => (
        <span
          key={i}
          className={styles.star}
          onMouseEnter={() => setHoverRating(i)}
          onMouseLeave={() => setHoverRating(0)}
          onClick={() => {
            onRatingChange(i);
            setClicked(true);
          }}
        >
          {renderStar(i)}
        </span>
      ))}
    </div>
  );
};

StarRating.propTypes = {
  defaultRating: PropTypes.number.isRequired,
  clientRating: PropTypes.number,
  onRatingChange: PropTypes.func,
};

export default StarRating;
