import styles from './Carousel.module.scss';
import React, { useState } from 'react';
import { useSwipeable } from 'react-swipeable';
import PropTypes from 'prop-types';

export const CarouselItem = ({ children }) => {
  return <div className={styles.carouselItem}>{children}</div>;
};

const Carousel = ({ children, initialIndex, actionSwiped }) => {
  const [activeIndex, setActiveIndex] = useState(initialIndex);

  const updateIndex = newIndex => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    actionSwiped(newIndex);
    setActiveIndex(newIndex);
  };

  const handlers = useSwipeable({
    onSwipedLeft: () => updateIndex(activeIndex + 1),
    onSwipedRight: () => updateIndex(activeIndex - 1),
    trackMouse: true,
  });

  return (
    <div className={styles.carousel} {...handlers}>
      <div
        className={styles.inner}
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {React.Children.map(children, child => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </div>
    </div>
  );
};

CarouselItem.propTypes = {
  children: PropTypes.node,
};

Carousel.propTypes = {
  children: PropTypes.array,
  actionSwiped: PropTypes.func,
  initialIndex: PropTypes.number,
};

export default Carousel;
