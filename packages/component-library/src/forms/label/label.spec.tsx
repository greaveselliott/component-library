import React from 'react';
import { shallow } from 'enzyme';

import Label from './index';

test('Renders correctly', () =>
  expect(shallow(<Label>ABC</Label>)).toMatchSnapshot());
