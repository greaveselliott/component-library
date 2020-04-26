import React from 'react';
import { shallow } from 'enzyme';

import Card from './card.component';

test('Renders card with contents,l', () => {
  const MockComponentA = () => null;
  const MockComponentB = () => null;

  expect(
    shallow(
      <Card onClickControl={() => null}>
        <MockComponentA />
        <MockComponentB />
      </Card>,
    ),
  ).toMatchInlineSnapshot();
});

test('Control click event is handled.', () => {
  const spy = jest.fn();
  const MockComponentA = () => null;
  const MockComponentB = () => null;

  const SUT = shallow(
    <Card onClickControl={spy}>
      <MockComponentA />
      <MockComponentB />
    </Card>,
  );

  const control = SUT.find('.card__control');

  control.simulate('click');

  expect(spy).toHaveBeenCalledTimes(0);
  expect(SUT).toMatchInlineSnapshot();
});
