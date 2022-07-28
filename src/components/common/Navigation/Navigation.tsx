import React, { useState } from 'react';
import { Button } from '../Button/Button';
import './_Navigation.scss';

export const Navigation = () => {
  const [toggle, setToggle] = useState(false);

  const toggleBtn = () => {
    setToggle(!toggle);
  };

  return (
    <nav>
      <Button title={'Dostępni kursanci'} />
      <Button title={'Do rozmowy'} className={'active'} />
    </nav>
  );
};
