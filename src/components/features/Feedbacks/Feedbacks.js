import React, { useState } from 'react';
import { getAll } from '../../../redux/feedbacksRedux';
import { useSelector } from 'react-redux';
import styles from './Feedbacks.module.scss';
import Feedback from '../../common/Feedback/Feedback';
import { useTranslation } from 'react-i18next';
import Carousel, { CarouselItem } from '../../common/Carousel/Carousel';
import Dots from '../../common/Dots/Dots';

const Feedbacks = () => {
  const { t } = useTranslation();
  const feedbacks = useSelector(getAll);

  const [activeFeedback, setActiveFeedback] = useState(0);

  const handleFeedbackChange = newFeedback => {
    setActiveFeedback(newFeedback);
  };

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className={styles.panelBar}>
          <div className='row no-gutters align-items-end'>
            <div className={'col-auto ' + styles.heading}>
              <h3>{t('label.clientFeedback')}</h3>
            </div>
            <div className={styles.dotsContainer}>
              <Dots
                changeEvent={handleFeedbackChange}
                activeNumber={activeFeedback}
                dotsNumber={feedbacks.length}
              />
            </div>
          </div>
        </div>
        <Carousel actionSwiped={handleFeedbackChange} initialIndex={activeFeedback}>
          {feedbacks.map((feedback, i) => (
            <CarouselItem key={i}>
              <div className='row'>
                <div className='col'>
                  <Feedback {...feedback} />
                </div>
              </div>
            </CarouselItem>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Feedbacks;
