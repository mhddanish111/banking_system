import { shallow } from 'enzyme';
import AccountTiles from '../AccountTiles';

describe('<AccountTiles />', () => {
  const accounts = {
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
  const wrapper = shallow(<AccountTiles accounts={accounts} />);
  it('should render the AccountTiles Component correctly', () => {
    expect(wrapper).toMatchSnapshot();
  });
});
