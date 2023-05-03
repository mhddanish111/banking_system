type UserProps = {
  _id: string;
  firstName: string;
  lastName: string;
};

export type AccountDashboardProps = {
  _id: string;
  accountNumber: number;
  type: string;
  accountType: string;
  categoryName: string;
  amount: number;
  charge: number;
  limit: number;
  maxAmount: number;
  minAmount: number;
  expiryMonth: number;
  expiryYear: number;
  users: Array<UserProps>;
};

export type AccountData = {
  accountData: Array<AccountDashboardProps>;
  accountTypeData: Array<AccountDashboardProps>;
  creditCardData: Array<AccountDashboardProps>;
};

export type Account = {
  accounts: AccountDashboardProps;
};

export type Cards = {
  cards: AccountDashboardProps;
};

export type AccountDetailsProps = {
  accountDetails: AccountDashboardProps;
};

export type DropdownListProps = {
  label: string;
  value: string;
};
