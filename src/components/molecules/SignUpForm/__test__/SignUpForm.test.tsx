import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import Button from '../../../atoms/Button';
import SignUpForm from '../SignUpForm';

describe('<SignUpForm />', () => {
  const SignUpHandler = jest.fn();
  const wrapper = shallow(<SignUpForm SignUpHandler={SignUpHandler} />);
  it('should render the SignUpForm Component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should call form event', () => {
    const onSubmit = jest.fn();
    const handleSubmit = jest.fn();
    const event = { preventDefault: jest.fn() };
    const data = {
      firstName: 'test',
      lastName: 'test',
      email: 'test@test.com',
      mobile: 99999999,
      address: 'test',
      city: 'test',
      state: 'test',
      postalCode: 99999,
      occupation: 'test',
      income: 'test',
      password: 'test@1234',
      confirmPassword: 'test@1234',
      govtId: 1,
      govtIdNumber: 1231233,
      aadhaarNumber: 2312312,
      panNumber: 'abc123',
    };
    wrapper
      .find('.sign-up-form')
      .simulate('submit', handleSubmit(onSubmit(data, event)));
    expect(onSubmit).toHaveBeenCalled();
  });
  it('should call button event', () => {
    const onClick = jest.fn();
    const event = { preventDefault: jest.fn() };
    wrapper.find(Button).simulate('submit', onClick(event));
    expect(onClick).toHaveBeenCalled();
  });
});
