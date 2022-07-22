import React from 'react';
import { Button } from '../components/common/Button/Button';
import { useToggle } from '../utils/useToggle';

export const LoginViews = () => {
  const [click, toggleClick] = useToggle();

  return (
    <div className="App">
      <Button title={'Zarejestruj'} toggle={toggleClick} />
    </div>
  );
};
