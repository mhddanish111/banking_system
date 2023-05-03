import { render, screen } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { MemoryRouter, BrowserRouter } from 'react-router-dom';
import renderer from 'react-test-renderer';
import userEvent from '@testing-library/user-event';
import SignUp from '../SignUp';
import { CREATE_USER } from '../../../../constant/Mutation';
import SignUpForm from '../../../molecules/SignUpForm';

describe('<SignIn />', () => {
  const props = {
    selectedAccountNumber: 1673894730214,
    setIsCallTransaction: jest.fn(),
    isCallTransaction: true,
  };
  const data = {
    firstName: 'test',
    lastName: 'test',
    email: 'test@test',
    mobile: 99999999,
    address: 'test',
    city: 'test',
    state: 'test',
    postalCode: 909090,
    occupation: 'test',
    income: 'test',
    password: 'test',
    confirmPassword: 'test',
    govtId: 'test',
    govtIdNumber: 'test',
    aadhaarNumber: 'test',
    panNumber: 'test',
  };
  const mocks = [
    {
      request: {
        query: CREATE_USER,
        variables: {
          userInput: data,
        },
      },
      result: {
        data: {
          createUser: {
            message: 'test',
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
        <SignUp {...props} />
      </BrowserRouter>
    </MockedProvider>,
  ).toJSON;
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <BrowserRouter>
        <SignUp {...props} />
      </BrowserRouter>
    </MockedProvider>,
  );
  it('should render the SignUp Component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
  it('should call SignUpForm Component correctly', async () => {
    const SignUpHandler = jest.fn();
    render(<SignUpForm SignUpHandler={SignUpHandler} />, {
      wrapper: MemoryRouter,
    });
    await userEvent.click(screen.getByRole('button'));
  });
});
