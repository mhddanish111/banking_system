import {
  addUser,
  addUserProfile,
  addAccounts,
  addCards,
  resetContext,
} from '../index';
import {
  ADD_USER,
  ADD_USER_PROFILE,
  ADD_ACCOUNTS,
  ADD_CARDS,
  RESET_CONTEXT,
} from '../../Constant';

import {
  addUserInput,
  addUserProfileInput,
  accountInput,
} from '../../context.mock';

describe('Actions', () => {
  test('addUser', () => {
    const result = {
      data: addUserInput,
      type: ADD_USER,
    };
    expect(addUser(addUserInput)).toEqual(result);
  });

  test('addUserProfile', () => {
    const result = {
      data: addUserProfileInput,
      type: ADD_USER_PROFILE,
    };
    expect(addUserProfile(addUserProfileInput)).toEqual(result);
  });

  test('addAccounts', () => {
    const result = {
      data: accountInput,
      type: ADD_ACCOUNTS,
    };
    expect(addAccounts(accountInput)).toEqual(result);
  });

  test('addCards', () => {
    const result = {
      data: accountInput,
      type: ADD_CARDS,
    };
    expect(addCards(accountInput)).toEqual(result);
  });
  test('resetContext', () => {
    const result = { type: RESET_CONTEXT };
    expect(resetContext()).toEqual(result);
  });
});
