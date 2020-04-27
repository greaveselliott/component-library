import React from 'react';
import { shallow } from 'enzyme';

import Accordion from './accordian.component';

test('renders open by default', () => {
  expect(
    shallow(
      <Accordion>
        <h1>Some random</h1>
        <h2>Content to render</h2>
        <h3>Within the accordion</h3>
      </Accordion>,
    ),
  ).toMatchInlineSnapshot();
});

test('Can toggle the accordion open/closed.', () => {
  const SUT = shallow(
    <Accordion>
      <h1>Some random</h1>
      <h2>Content to render</h2>
      <h3>Within the accordion</h3>
    </Accordion>,
  );
  const heading = SUT.find('.accordion__heading');

  // Content is visible
  expect(SUT).toMatchInlineSnapshot();

  heading.simulate('click');
  // Content is hidden
  expect(SUT).toMatchInlineSnapshot();

  heading.simulate('click');

  // COntent is visible again.
  expect(SUT).toMatchInlineSnapshot();
});
