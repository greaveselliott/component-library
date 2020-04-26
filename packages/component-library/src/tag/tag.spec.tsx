import React from 'react';
import { shallow } from 'enzyme';

import Tag, { TagColors } from './tag.component';

const colors: TagColors[] = ['primary-300', 'shade-200'];

colors.forEach((color) =>
  test(`Renders ${color} tag`, () =>
    expect(shallow(<Tag color={color}>Abc</Tag>)).toMatchSnapshot()),
);
