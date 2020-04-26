import React from 'react';
import { shallow } from 'enzyme';

import H4 from './h4.component';

test('Heading one should render correctly', () =>
  expect(shallow(<H4>abc</H4>)).toMatchSnapshot());
