import React from 'react';
import { shallow } from 'enzyme';

import Accordion from './accordian.component';

test('renders open by default', () => {
  expect(
    shallow(
      <Accordion title="abc">
        <h1>Some random</h1>
        <h2>Content to render</h2>
        <h3>Within the accordion</h3>
      </Accordion>,
    ),
  ).toMatchInlineSnapshot(`
    <div
      className="accordion"
    >
      <fieldset>
        <legend
          aria-control="abc"
          className="accordion__title"
          onClick={[Function]}
          role="button"
        >
          abc
        </legend>
        <div
          id="abc"
        >
          <h1>
            Some random
          </h1>
          <h2>
            Content to render
          </h2>
          <h3>
            Within the accordion
          </h3>
        </div>
      </fieldset>
    </div>
  `);
});

test('Can toggle the accordion open/closed.', () => {
  const SUT = shallow(
    <Accordion title="abc">
      <h1>Some random</h1>
      <h2>Content to render</h2>
      <h3>Within the accordion</h3>
    </Accordion>,
  );

  // Content is visible
  expect(SUT).toMatchInlineSnapshot(`
    <div
      className="accordion"
    >
      <fieldset>
        <legend
          aria-control="abc"
          className="accordion__title"
          onClick={[Function]}
          role="button"
        >
          abc
        </legend>
        <div
          id="abc"
        >
          <h1>
            Some random
          </h1>
          <h2>
            Content to render
          </h2>
          <h3>
            Within the accordion
          </h3>
        </div>
      </fieldset>
    </div>
  `);

  SUT.find('.accordion__title').simulate('click');
  // Content is hidden
  expect(SUT).toMatchInlineSnapshot(`
    <div
      className="accordion"
    >
      <fieldset>
        <legend
          aria-control="abc"
          className="accordion__title"
          onClick={[Function]}
          role="button"
        >
          abc
        </legend>
        <div
          id="abc"
        />
      </fieldset>
    </div>
  `);

  SUT.find('.accordion__title').simulate('click');

  // Content is visible again.
  expect(SUT).toMatchInlineSnapshot(`
    <div
      className="accordion"
    >
      <fieldset>
        <legend
          aria-control="abc"
          className="accordion__title"
          onClick={[Function]}
          role="button"
        >
          abc
        </legend>
        <div
          id="abc"
        >
          <h1>
            Some random
          </h1>
          <h2>
            Content to render
          </h2>
          <h3>
            Within the accordion
          </h3>
        </div>
      </fieldset>
    </div>
  `);
});
