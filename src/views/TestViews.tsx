import React from 'react';
import { Audio } from 'react-loader-spinner';
import { NavLink } from 'react-router-dom';
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/slice/counter';
import { format } from 'date-fns';

export const TestViews = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <div style={{ margin: 'auto', width: 'max-content' }}>
        <h1>Test</h1>
        <h2 style={{ color: 'grey' }}>Redux Toolkit:</h2>
        <h3>Increments: {count}</h3>
        <button onClick={() => dispatch(decrement())}>Odejmowanie</button>
        <button onClick={() => dispatch(increment())}>Dodawanie</button>
        <h2 style={{ color: 'grey' }}>date-fns:</h2>
        <h3>{format(new Date(), `dd.MM.yyyy`)}</h3>
        <h3>{format(new Date(), `kk:mm:ss`)}</h3>
        <h2 style={{ color: 'grey' }}>Spinner:</h2>
        <Audio height="100" width="100" color="grey" ariaLabel="loading" />
        <NavLink to={'/login'}>
          Jeśli w teście wszystko działa przejdź do logowania! KLIKNIJ NA MNIE!
        </NavLink>
      </div>
    </div>
  );
};
