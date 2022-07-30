import React from 'react';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

import './_BottomNavigation.scss';

export const BottomNavigation = () => {
  return (
    <div className="component-bottom-navigation container">
      <p>Ilość elementów</p>
      <select>
        <option value="10" selected>
          10
        </option>
        <option value="20">20</option>
        <option value="30">30</option>
      </select>

      <div className="page-number">
        <p>
          <span>10</span> z <span>11</span>
        </p>
      </div>
      <div className="buttons-wrap">
        <MdNavigateBefore />
        <MdNavigateNext />
      </div>
    </div>
  );
};
