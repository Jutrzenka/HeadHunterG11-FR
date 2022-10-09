import React from 'react';

import { BsPaperclip } from 'react-icons/bs';
import './LinkTo.scss';

interface Props {
  link: string;
}

export const LinkTo = ({ link }: Props) => {
  return (
    <div className={'component-LinkTo'}>
      <BsPaperclip className="ico" />
      <a href={link} target="_blank">
        {link}
      </a>
    </div>
  );
};
