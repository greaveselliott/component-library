import React from 'react';
import { shallow } from 'enzyme';

import Link from './link.component';

test('Heading one should render correctly', () =>
  expect(shallow(<Link>abc</Link>)).toMatchSnapshot());
