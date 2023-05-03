import '@testing-library/jest-dom';
import renderer from 'react-test-renderer';
import { MockedProvider } from '@apollo/client/testing';
import AmountWithDrawl from '../AmountWithDrawl';
import { WITHDRAWAL } from '../../../../constant/Mutation';

describe('<AmountWithDrawl />', () => {
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
    amount: 100,
    accountType: 'Accounts',
  };
  const mocks = [
    {
      request: {
        query: WITHDRAWAL,
        variables: {
          withdrawalInput: submitProps,
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
      <AmountWithDrawl {...props} />
    </MockedProvider>,
  ).toJSON;
  it('should render the AmountWithDrawl Component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
