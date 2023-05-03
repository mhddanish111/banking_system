import React from 'react';
import { shallow } from 'enzyme';
import ErrorMessage from '../ErrorMessage';

describe('<Error />', () => {
  const props = {
    className: '',
    message: 'Something went wrong',
    children: <div />,
    onClick: jest.fn(),
  };
  const wrapped = shallow(<ErrorMessage {...props} />);
  it('should render the Error Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });

  it('should call onClick event', () => {
    const onClick = jest.fn();
    const event = {
      preventDefault: jest.fn(),
    };
    wrapped.find('.close-btn').simulate('click', onClick(event));
    expect(onClick).toHaveBeenCalled();
  });
});
