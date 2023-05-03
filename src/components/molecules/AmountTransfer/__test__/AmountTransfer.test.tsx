import '@testing-library/jest-dom';
import { MockedProvider } from '@apollo/client/testing';
import renderer from 'react-test-renderer';
import AmountTransfer from '../AmountTransfer';
import { DEPOSIT } from '../../../../constant/Mutation';

describe('<AmountTransfer />', () => {
  const accounts = {
    _id: '63c1519e9919f0f41a86bd94',
    type: 'Accounts',
    accountType: 'Savings Account',
    categoryName: 'Regular Account',
    accountNumber: 123456789,
    amount: 10000,
    debitCardCSVNumber: 123,
    debitCardNumber: 12312313123,
    expiryMonth: 1,
    expiryYear: 2023,
    limit: 0,
    maxAmount: 0,
    minAmount: 0,
    charge: 0,
    users: [
      {
        _id: '63c1519e9919f0f41a86bd94',
        firstName: 'test',
        lastName: 'test',
      },
    ],
  };
  const props = {
    defaultAccountNumber: 1673894730214,
    selectedId: '63c59b4ae67667f7cbc2ccfe',
    type: 'Accounts',
    state: {
      user: {
        firstName: 'test',
        lastName: 'test',
        userType: 'user',
        userId: '63c1519e9919f0f41a86bd94',
      },
      accounts: [{ ...accounts }],
      cards: [{ ...accounts }],
    },
  };
  const submitProps = {
    accountNumber: 1234567890,
    payeeAccountNumber: 1212121212121212,
    amount: 100,
    accountType: 'Accounts',
  };
  const mocks = [
    {
      request: {
        query: DEPOSIT,
        variables: {
          depositInput: submitProps,
        },
      },
      result: {
        data: {
          deposit: {
            accounts: [{ ...accounts }],
            transactionResult: { _id: '63c1519e9919f0f41a86bd94' },
          },
        },
      },
    },
  ];
  const wrapper = renderer.create(
    <MockedProvider mocks={mocks} addTypename={false}>
      <AmountTransfer {...props} />
    </MockedProvider>,
  ).toJSON;
  it('should render the AmountTransfer Component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
