import {
  cardNumberFormat,
  setCookie,
  getCookie,
  deleteCookie,
  accountDropdownList,
} from '../index';

describe('Utils', () => {
  it('test cardNumberFormat', () => {
    const number = '1234123412341234';
    const result = '1234 1234 1234 1234';
    expect(cardNumberFormat(number)).toBe(result);
  });
  it('test setCookie', () => {
    const value = 'test';
    const exp_days = 1;
    setCookie(value, exp_days);
    expect(getCookie()).toBe('test');
    deleteCookie();
    expect(getCookie()).toBe('');
  });

  it('test accountDropdownList', () => {
    const accounts = [
      {
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
      },
    ];
    const list = [{ label: 'Regular Account', value: '12345' }];
    expect(accountDropdownList(accounts)).toEqual(list);
  });
});
