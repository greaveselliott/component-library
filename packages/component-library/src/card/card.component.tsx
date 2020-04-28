import React from 'react';
import { faEllipsisH } from '@fortawesome/free-solid-svg-icons';
import './card.scss';

import { SimpleIcon } from '..';

type CardProps = {
  onCardControlClick: () => void;
};

const Card: React.FC<CardProps> = ({ children, onCardControlClick }) => (
  <div className="card">
    <div className="card__content">{children}</div>
    <div className="card__control">
      <button className="card__control-button" onClick={onCardControlClick}>
        <SimpleIcon icon={faEllipsisH} color="shade-400" variant="large" />
        <span className="card__control-button-label">Click</span>
      </button>
    </div>
  </div>
);

export default Card;
