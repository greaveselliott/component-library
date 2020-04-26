import React from 'react';
import { shallow } from 'enzyme';

import H5 from './h5.component';

test('Heading one should render correctly', () =>
  expect(shallow(<H5>abc</H5>)).toMatchSnapshot());
