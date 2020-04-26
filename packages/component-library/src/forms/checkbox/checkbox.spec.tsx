import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from './checkbox.component';

test('Renders correctly', () =>
  expect(
    shallow(<Checkbox id="abc" name="abc" value="abc" />),
  ).toMatchSnapshot());
