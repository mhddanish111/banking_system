import { shallow } from 'enzyme';
import AccountDashboard from '../AccountDashboard';

describe('<AccountDashboard />', () => {
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
  const cards = {
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
    _id: '12345',
    charge: 0,
    users: [
      {
        _id: '12345',
        firstName: 'test',
        lastName: 'test',
      },
    ],
  };
  const accountTypeData = [accounts];
  const creditCardData = [cards];

  const accountData = [accounts, cards];

  const wrapped = shallow(
    <AccountDashboard
      accountData={accountData}
      accountTypeData={accountTypeData}
      creditCardData={creditCardData}
    />,
  );
  it('should render the Title Component correctly', () => {
    expect(wrapped).toMatchSnapshot();
  });
});
