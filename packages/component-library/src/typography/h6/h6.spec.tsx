import React from 'react';
import { shallow } from 'enzyme';

import H6 from './h6.component';

test('Heading one should render correctly', () =>
  expect(shallow(<H6>abc</H6>)).toMatchSnapshot());
