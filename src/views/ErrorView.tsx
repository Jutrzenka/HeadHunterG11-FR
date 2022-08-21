import React from 'react';

import './_ErrorView.scss';

interface Props{
    message:string;
}

export const ErrorView = ({message}:Props) => {
  return (
    <main className={'view-ErrorView'}>
      <img src="/img/logo_MegaK.png" alt="logo" />
      <h3>Oops..!</h3>
      <p>{message}</p>
      <a href="http://localhost:3000">Wróć do strony logowania</a>
    </main>
  );
};
