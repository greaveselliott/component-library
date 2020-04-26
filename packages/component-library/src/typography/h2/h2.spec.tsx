import React from 'react';
import { shallow } from 'enzyme';

import H2 from './h2.component';

test('Heading one should render correctly', () =>
  expect(shallow(<H2>abc</H2>)).toMatchSnapshot());
