import React from 'react';
import { shallow } from 'enzyme';

import Small from './small.component';

test('renders correctly', () =>
  expect(shallow(<Small>abc</Small>)).toMatchSnapshot());
