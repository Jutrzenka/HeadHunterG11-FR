import React from 'react';

import './_AboutUserShortCut.scss';

interface Props {
  title: string;
  description: string | number;
}

export const AboutUserShortCut = ({ title, description }: Props) => {
  return (
    <div className="component-AboutUserShortCut">
      <h3>{title}</h3>
      {Number(description) ? (
        <p>
          <span>{description}</span> / 5
        </p>
      ) : (
        <p>
          <span>{description}</span>
        </p>
      )}
    </div>
  );
};
