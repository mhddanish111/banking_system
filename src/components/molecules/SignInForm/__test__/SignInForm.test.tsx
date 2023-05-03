import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import Button from '../../../atoms/Button';
import SignInForm from '../SignInForm';

describe('<SignInForm />', () => {
  const SignInHandler = jest.fn();
  const wrapper = shallow(<SignInForm SignInHandler={SignInHandler} />);
  it('should render the SignInForm Component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should call form event', () => {
    const onSubmit = jest.fn();
    const handleSubmit = jest.fn();
    const event = { preventDefault: jest.fn() };
    const data = {
      user: 'test',
      password: 'test@123',
    };
    wrapper
      .find('.sign-in-form')
      .simulate('submit', handleSubmit(onSubmit(data, event)));
    expect(onSubmit).toHaveBeenCalled();
  });
  it('should call button event', () => {
    const onClick = jest.fn();
    const event = { preventDefault: jest.fn() };
    wrapper.find(Button).simulate('click', onClick(event));
    expect(onClick).toHaveBeenCalled();
  });
});
