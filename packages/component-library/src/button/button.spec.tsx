import * as React from 'react';
import { shallow } from 'enzyme';
import { Button } from '.';

describe('Button', () => {
  it('renders as expected', () => {
    expect(
      shallow(<Button shape="round" variant="secondary" size="small" />)
    ).toMatchSnapshot();
  });

  it('renders a link as expected', () => {
    expect(
      shallow(<Button href="#" shape="default" variant="secondary" />)
    ).toMatchSnapshot();
  });

  it('renders a button elemement as default', () => {
    expect(shallow(<Button />)).toMatchSnapshot();
  });

  it('renders an anchor tag if given a href', () => {
    expect(shallow(<Button href="#" />)).toMatchSnapshot();
  });

  it('is able to call a function on click', () => {
    const mockOnClickFunction = jest.fn();
    const button = shallow(<Button onClick={mockOnClickFunction} />);
    button.simulate('click');
    expect(mockOnClickFunction).toHaveBeenCalled();
  });

  it('can be disabled', () => {
    expect(shallow(<Button disabled />)).toMatchSnapshot();
  });

  it('can render children', () => {
    expect(shallow(<Button disabled>abc</Button>)).toMatchSnapshot();
  });
});
