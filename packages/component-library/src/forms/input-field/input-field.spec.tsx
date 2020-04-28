import React from 'react';
import { shallow } from 'enzyme';

import InputField from './input-field.component';

test('should render', () =>
  expect(
    shallow(<InputField id="abc" name="abc" placeholder="abc" />),
  ).toMatchSnapshot());

test('should render with password type', () =>
  expect(
    shallow(
      <InputField id="abc" name="abc" placeholder="abc" type="password" />,
    ),
  ).toMatchSnapshot());

test('should render with email type', () =>
  expect(
    shallow(<InputField id="abc" name="abc" placeholder="abc" type="email" />),
  ).toMatchSnapshot());

test('should render with an icon', () =>
  expect(
    shallow(
      <InputField
        id="abc"
        name="abc"
        placeholder="abc"
        Icon={() => <div>Fancy icon</div>}
      />,
    ),
  ).toMatchSnapshot());
