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
      <p>{title}</p>
      <p>{rating} / 5</p>
      <div className="stars-wrap">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div className="stars" key={index}>
            <BsFillStarFill />
          </div>
        ))}
      </div>
    </div>
  );
};
