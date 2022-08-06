import React from 'react';
import './_ButtonBack.scss';
import { FaChevronLeft } from 'react-icons/fa';

interface Props {
  title: string;
  className: string;
}

export const ButtonBack = ({ title, className }: Props) => {
  return (
    <div className={'component-ButtonBack'}>
      <FaChevronLeft className="button-back-ico" />
      <button className={className}>{title}</button>
    </div>
  );
};
