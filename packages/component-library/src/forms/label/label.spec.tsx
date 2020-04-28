import React from 'react';
import { shallow } from 'enzyme';

import Label from './label.component';

test('Renders correctly', () =>
  expect(shallow(<Label>Label text</Label>)).toMatchSnapshot());
