import React from 'react';
import { shallow } from 'enzyme';

import Card from './card.component';

test('Renders card with contents,l', () => {
  const MockComponentA = () => null;
  const MockComponentB = () => null;

  expect(
    shallow(
      <Card onCardControlClick={() => null}>
        <MockComponentA />
        <MockComponentB />
      </Card>,
    ),
  ).toMatchInlineSnapshot(`
    <div
      className="card"
    >
      <div
        className="card__content"
      >
        <MockComponentA />
        <MockComponentB />
      </div>
      <div
        className="card__control"
      >
        <button
          className="card__control-button"
          onClick={[Function]}
        >
          <SimpleIcon
            color="shade-400"
            icon={
              Object {
                "icon": Array [
                  512,
                  512,
                  Array [],
                  "f141",
                  "M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z",
                ],
                "iconName": "ellipsis-h",
                "prefix": "fas",
              }
            }
            variant="large"
          />
          <span
            className="card__control-button-label"
          >
            Click
          </span>
        </button>
      </div>
    </div>
  `);
});

test('Control click event is handled.', () => {
  const spy = jest.fn();
  const MockComponentA = () => null;
  const MockComponentB = () => null;

  const SUT = shallow(
    <Card onCardControlClick={spy}>
      <MockComponentA />
      <MockComponentB />
    </Card>,
  );

  const control = SUT.find('.card__control');

  control.simulate('click');

  expect(spy).toHaveBeenCalledTimes(0);
  expect(SUT).toMatchInlineSnapshot(`
    <div
      className="card"
    >
      <div
        className="card__content"
      >
        <MockComponentA />
        <MockComponentB />
      </div>
      <div
        className="card__control"
      >
        <button
          className="card__control-button"
          onClick={[MockFunction]}
        >
          <SimpleIcon
            color="shade-400"
            icon={
              Object {
                "icon": Array [
                  512,
                  512,
                  Array [],
                  "f141",
                  "M328 256c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72zm104-72c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72zm-352 0c-39.8 0-72 32.2-72 72s32.2 72 72 72 72-32.2 72-72-32.2-72-72-72z",
                ],
                "iconName": "ellipsis-h",
                "prefix": "fas",
              }
            }
            variant="large"
          />
          <span
            className="card__control-button-label"
          >
            Click
          </span>
        </button>
      </div>
    </div>
  `);
});
