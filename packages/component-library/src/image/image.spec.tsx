import React from 'react';
import { shallow } from 'enzyme';

import Image from './image.component';

test('Renders correctly', () =>
  expect(
    shallow(<Image src="/" alt="A helpful description of this image." />),
  ).toMatchSnapshot());
