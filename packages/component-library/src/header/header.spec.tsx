import React from 'react';
import { shallow } from 'enzyme';

import Header from './header.component';

test('Renders without border', () => {
  expect(
    shallow(
      <Header>
        <h1>ABC</h1>
        <h2>123</h2>
      </Header>,
    ),
  ).toMatchInlineSnapshot(`
    <header
      className="header"
    >
      <h1>
        ABC
      </h1>
      <h2>
        123
      </h2>
    </header>
  `);
});

test('Renders with border', () => {
  expect(
    shallow(
      <Header hasBottomBorder>
        <h1>ABC</h1>
        <h2>123</h2>
      </Header>,
    ),
  ).toMatchInlineSnapshot;
});
