import React from 'react';
import { Button } from '../Button/Button';
//import { useToggle } from '../../../utils/hooks/useToggle';
import './_Navigation.scss';

export const Navigation = () => {
  // @TODO Alex coś chciałaś tu zrobić z true/false
  //  const [value, toggle] = useToggle();

  return (
    <nav className={'component-Navigation'}>
      <Button title={'Dostępni kursanci'} />
      <Button title={'Do rozmowy'} className={'active'} />
    </nav>
  );
};
