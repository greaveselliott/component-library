import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import './simple-icon.scss';

export type SimpleIconColours =
  | 'primary-400'
  | 'shade-400'
  | 'accent-200'
  | 'accent-300'
  | 'accent-400';

export type SimpleIconVariant = 'small' | 'large';

export interface SimpleIconProps {
  variant?: SimpleIconVariant;
  icon: IconProp;
  color?: SimpleIconColours;
}

const SimpleIcon: React.FC<SimpleIconProps> = ({
  icon,
  variant = 'small',
  color = 'shade-400',
}) => (
  <div
    className={`simple-icon simple-icon--${variant} simple-icon--color-${color}`}
  >
    <FontAwesomeIcon aria-hidden icon={icon} />
  </div>
);

export default SimpleIcon;
