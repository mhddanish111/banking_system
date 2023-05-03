import { isEmpty, forEach } from 'lodash';
import { USER_KEY } from '../constant';
import { AccountDashboardProps, DropdownListProps } from '../type/AccountType';

export const cardNumberFormat = (cardNumber: String) => {
  if (!isEmpty(cardNumber)) {
    const cardNumberArr = cardNumber.split('');
    cardNumberArr.splice(4, 0, ' ');
    cardNumberArr.splice(9, 0, ' ');
    cardNumberArr.splice(14, 0, ' ');
    return cardNumberArr.join('');
  }
  return cardNumber;
};

export const setCookie = (value: string, exp_days: number) => {
  const d = new Date();
  d.setTime(d.getTime() + exp_days * 24 * 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${USER_KEY}=${value};${expires};path=/`;
};

export const getCookie = () => {
  const cname = `${USER_KEY}=`;
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i += 1) {
    let c = ca[i];
    while (c.charAt(0) === ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(cname) === 0) {
      return c.substring(cname.length, c.length);
    }
  }
  return '';
};

export const deleteCookie = () => {
  const d = new Date();
  d.setTime(d.getTime() - 60 * 60 * 1000);
  const expires = `expires=${d.toUTCString()}`;
  document.cookie = `${USER_KEY}=;${expires};path=/`;
};

export const accountDropdownList = (
  accounts: Array<AccountDashboardProps>,
): Array<DropdownListProps> => {
  const list: Array<DropdownListProps> = [];
  if (!isEmpty(accounts)) {
    forEach(accounts, (item) => {
      const { categoryName, _id } = item;
      list.push({ label: categoryName, value: _id });
    });
  }
  return list;
};
