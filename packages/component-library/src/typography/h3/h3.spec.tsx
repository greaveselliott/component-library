import React from 'react';
import { shallow } from 'enzyme';

import H3 from './h3.component';

test('Heading one should render correctly', () =>
  expect(shallow(<H3>abc</H3>)).toMatchSnapshot());
