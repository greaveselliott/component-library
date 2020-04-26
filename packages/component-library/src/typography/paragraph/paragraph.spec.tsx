import React from 'react';
import { shallow } from 'enzyme';

import Paragraph from './paragraph.component';

test('Paragraph component renders correctly', () =>
  expect(shallow(<Paragraph>abc</Paragraph>)).toMatchSnapshot());
