import React from 'react';
import { BsFillStarFill } from 'react-icons/bs';
import './_Rating.scss';

interface Props {
  title: string;
}

export const Rating = ({ title }: Props) => {
  return (
    <div className="component-Rating">
      <p>{title}</p>
      <div className="stars-wrap">
        {[1, 2, 3, 4, 5].map((item, index) => (
          <div className="stars" key={index}>
            <p>{item}</p>
            <BsFillStarFill />
          </div>
        ))}
      </div>
    </div>
  );
};
