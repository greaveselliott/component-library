import React from 'react';

import { shallow } from 'enzyme';

import BulletLayout from './bullet-layout.component';

test('Renders using an IoC component for the button.', () => {
  const InversionOfControlComponent = () => null;

  expect(
    shallow(
      <BulletLayout BulletPoint={() => <InversionOfControlComponent />}>
        A compelling paragraph
      </BulletLayout>,
    ),
  ).toMatchInlineSnapshot(`
    <div
      className="bullet-layout"
    >
      <div
        className="bullet-layout__bullet-point"
      >
        <BulletPoint />
      </div>
      <div
        className="bullet-layout__content"
      >
        A compelling paragraph
      </div>
    </div>
  `);
});
