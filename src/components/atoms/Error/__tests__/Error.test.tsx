import React from 'react';
import { shallow } from 'enzyme';
import Error from '../Error';

describe('<Error />', () => {
  const props = {
    message: 'Something went wrong',
  };
  const wrapped = shallow(<Error {...props} />);
  it('should render the Error Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
