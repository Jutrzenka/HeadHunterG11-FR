import React from 'react';
import { FaChevronLeft } from 'react-icons/fa';
import './_ButtonBack.scss';

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
