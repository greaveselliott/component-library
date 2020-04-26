import React from 'react';
import { shallow } from 'enzyme';

import CompanyLogo from './company-logo.component';

test('Renders correctly', () =>
  expect(
    shallow(<CompanyLogo href="/" title="A descriptive title" />),
  ).toMatchSnapshot());
