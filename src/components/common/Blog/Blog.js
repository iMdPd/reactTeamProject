import React from 'react';
import PropTypes from 'prop-types';
import styles from './Blog.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt, faCommentAlt } from '@fortawesome/free-solid-svg-icons';
import Button from '../Button/Button';

const Blog = ({ image, date, comments, title, text }) => {
  return (
    <div className={styles.blog}>
      <img className={styles.image} src={image} alt={title} />
      <div className={styles.article}>
        <div className={styles.header}>
          <p className={styles.callendar}>
            <FontAwesomeIcon icon={faCalendarAlt} />
            {` ${date}`}
          </p>
          <p className={styles.comments}>
            <FontAwesomeIcon icon={faCommentAlt} />
            {` ${comments} comments`}
          </p>
        </div>
        <h5 className={styles.title}>{title}</h5>
        <p className={styles.text}>{text}</p>
        <Button className={styles.blogButton}>Read more</Button>
      </div>
    </div>
  );
};

Blog.propTypes = {
  date: PropTypes.string,
  comments: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,
};

export default Blog;
