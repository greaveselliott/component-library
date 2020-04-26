import * as React from 'react';
import { shallow } from 'enzyme';
import { Button } from '.';

describe('Button', () => {
  it('renders as expected', () => {
    expect(shallow(<Button>ABC</Button>)).toMatchSnapshot();
  });
  it('is able to call a function on click', () => {
    const mockOnClickFunction = jest.fn();
    const button = shallow(<Button onClick={mockOnClickFunction}>ABC</Button>);
    button.simulate('click');
    expect(mockOnClickFunction).toHaveBeenCalled();
  });

  it('can be disabled', () => {
    expect(shallow(<Button disabled>ABC</Button>)).toMatchSnapshot();
  });

  it('can render children', () => {
    expect(shallow(<Button disabled>ABC</Button>)).toMatchSnapshot();
  });
});
