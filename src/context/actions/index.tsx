import {
  ADD_USER,
  ADD_USER_PROFILE,
  ADD_ACCOUNTS,
  ADD_CARDS,
  RESET_CONTEXT,
} from '../Constant';
import { UserProfileProps, UserProps } from '../../type/UserType';
import { AccountDashboardProps } from '../../type/AccountType';

export const addUser = (data: UserProps) => ({
  type: ADD_USER,
  data,
});

export const addUserProfile = (data: UserProfileProps) => ({
  type: ADD_USER_PROFILE,
  data,
});

export const addAccounts = (data: Array<AccountDashboardProps>) => ({
  type: ADD_ACCOUNTS,
  data,
});

export const addCards = (data: Array<AccountDashboardProps>) => ({
  type: ADD_CARDS,
  data,
});

export const resetContext = () => ({
  type: RESET_CONTEXT,
});
