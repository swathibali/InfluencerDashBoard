import React from 'react';
import './scoreCard.scss';
import SmsFailedOutlinedIcon from '@material-ui/icons/SmsFailedOutlined';
import { useContext } from 'react';
import { AppDetailsContext } from '../contexts/AppDetailsContext';

const ScoreCard = () => {
  const { appDetails } = useContext(AppDetailsContext);
  const { img, mesageCount, totalEngagementScore, rating } = appDetails;

  return (
    <>
      <div className="scorecard__logo">
        <img src={img} alt="logo" />

        <div className="scorecard__logo__count">
          <SmsFailedOutlinedIcon
            style={{ fontSize: '15px', color: 'rgb(156, 37, 33)' }}
          />

          <div className="scorecard__logo__count__text">{mesageCount}</div>
        </div>
      </div>
      <div className="scorecard__description">
        <div className="scorecard__description__title">
          Total Engagement Score
        </div>
        <div className="scorecard__description__score">
          {totalEngagementScore}
        </div>
        <div className="scorecard__description__rating">{rating}</div>
      </div>
    </>
  );
};

export default ScoreCard;
