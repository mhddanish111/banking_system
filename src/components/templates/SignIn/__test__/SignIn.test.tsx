import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';
import { BrowserRouter } from 'react-router-dom';
import SignIn from '../SignIn';
import { LOGIN_USER } from '../../../../constant/Query';

describe('<SignIn />', () => {
  const props = {
    selectedAccountNumber: 1673894730214,
    setIsCallTransaction: jest.fn(),
    isCallTransaction: true,
  };
  const logInInput = {
    email: 'test@test.com',
    password: '12345678',
  };
  const mocks = [
    {
      request: {
        query: LOGIN_USER,
        variables: {
          logInInput,
        },
      },
      result: {
        data: {
          login: {
            isValid: true,
            message: 'test',
            firstName: 'test',
            lastName: 'test',
            token: 'test test test test',
            userType: 'Admin',
            userId: 'user123',
          },
        },
      },
    },
  ];
  const mockedUsedNavigate = jest.fn();
  jest.mock('react-router-dom', () => ({
    ...(jest.requireActual('react-router-dom') as any),
    useNavigate: () => mockedUsedNavigate,
  }));
  const wrapper = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <BrowserRouter>
        <SignIn {...props} />
      </BrowserRouter>
    </MockedProvider>,
  ).toJSON;
  it('should render the SignIn Component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
