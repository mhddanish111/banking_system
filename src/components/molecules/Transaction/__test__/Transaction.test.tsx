import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';
import Transaction from '../Transaction';
import { GET_TRANSACTION } from '../../../../constant/Query';

describe('<Transaction />', () => {
  const props = {
    selectedAccountNumber: 1673894730214,
    setIsCallTransaction: jest.fn(),
    isCallTransaction: true,
  };
  const submitProps = {
    accountNumber: 1234567890,
    payeeAccountNumber: 12123123123123,
    amount: 100,
    accountType: 'Accounts',
  };
  const mocks = [
    {
      request: {
        query: GET_TRANSACTION,
        variables: {
          depositInput: submitProps,
        },
      },
      result: {
        data: {
          transaction: {
            _id: '12345',
          },
        },
      },
    },
  ];
  const wrapper = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Transaction {...props} />
    </MockedProvider>,
  ).toJSON;
  it('should render the Transaction Component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
