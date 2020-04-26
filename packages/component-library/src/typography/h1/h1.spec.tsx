import React from 'react';
import { shallow } from 'enzyme';

import H1 from './h1.component';

test('Heading one should render correctly', () =>
  expect(shallow(<H1>abc</H1>)).toMatchSnapshot());
