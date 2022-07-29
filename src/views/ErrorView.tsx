import React from 'react';

import './_ErrorView.scss';

export const ErrorView = () => {
  return (
    <main className={'view-ErrorView'}>
      <img src="/img/logo_MegaK.png" alt="logo" />
      <h3>Oops..!</h3>
      <p>Przepraszamy. Strona, której szukasz nie istnieje.</p>
    </main>
  );
};
