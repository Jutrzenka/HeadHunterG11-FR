import React, { ReactElement } from 'react';
import './_Modal.scss';

interface Props {
  toggle?: any;
  children: ReactElement[];
}

export const Modal = ({ toggle, children }: Props) => {
  return (
    <div className="component-Modal">
      <div className="overlay " onClick={() => toggle()}></div>
      <div className="modal-content">{children}</div>
    </div>
  );
};
