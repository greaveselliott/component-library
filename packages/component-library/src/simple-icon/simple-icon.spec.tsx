import React from 'react';

import { shallow } from 'enzyme';
import {
  faExclamationCircle,
  faGlobeAmericas,
  faMousePointer,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import SimpleIcon, {
  SimpleIconColours,
  SimpleIconVariant,
} from './simple-icon.component';

jest.mock('@fortawesome/react-fontawesome', () => ({
  FontAwesomeIcon: () => null,
}));

jest.mock('@fortawesome/free-solid-svg-icons', () => ({
  faExclamationCircle: () => null,
  faGlobeAmericas: () => null,
  faMousePointer: () => null,
}));

export default { title: 'Simple Icon' };

const iconColors: SimpleIconColours[] = [
  'primary-400',
  'shade-400',
  'accent-200',
  'accent-300',
  'accent-400',
];

const iconVariants: SimpleIconVariant[] = ['small', 'large'];

const iconSet: IconProp[] = [
  faExclamationCircle,
  faGlobeAmericas,
  faMousePointer,
];

iconVariants.forEach((variant) =>
  iconColors.forEach((color) =>
    iconSet.forEach((icon) => {
      test(`Render the ${variant} ${color} ${icon} icon`, () => {
        const SUT = shallow(
          <SimpleIcon variant={variant} color={color} icon={icon} />,
        );
        expect(SUT).toMatchSnapshot();
      });
    }),
  ),
);
