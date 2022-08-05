import React from 'react';

import './RatingOnCv.scss';
import { BsFillStarFill } from 'react-icons/bs';

interface Props {
  rating: number;
  title: string;
}

export const RatingOnCv = ({ title, rating }: Props) => {
  return (
    <div className="component-RatingOnCv">
      <div className="rating-title">
        <p>{title}</p>
      </div>

      <div className="rating-and-stars">
        <p>
          <span className="rating">{rating}</span>
          <span className="slash"> /</span> 5
        </p>
        <div className="stars-wrap">
          {[1, 2, 3, 4, 5].map((item, index) => (
            <div className="stars" key={index}>
              <BsFillStarFill
                className={index < rating ? 'star-red' : 'star-gray'}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
