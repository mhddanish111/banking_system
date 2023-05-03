import RootReducer from '../index';
import initState from '../../InitState';
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

describe('RootReducer', () => {
  test('addUserAction', () => {
    const addUserAction = {
      type: ADD_USER,
      data: addUserInput,
    };
    const result = {
      ...initState,
      user: addUserInput,
    };
    expect(RootReducer(initState, addUserAction)).toEqual(result);
  });

  test('addUserProfileData', () => {
    const addUserProfileData = {
      type: ADD_USER_PROFILE,
      data: addUserProfileInput,
    };
    const result = {
      ...initState,
      userProfile: addUserProfileInput,
    };
    expect(RootReducer(initState, addUserProfileData)).toEqual(result);
  });

  test('addAccountData', () => {
    const addAccountData = {
      type: ADD_ACCOUNTS,
      data: accountInput,
    };
    const result = {
      ...initState,
      accounts: accountInput,
    };
    expect(RootReducer(initState, addAccountData)).toEqual(result);
  });

  test('addCardsData', () => {
    const addCardsData = {
      type: ADD_CARDS,
      data: accountInput,
    };
    const result = {
      ...initState,
      cards: accountInput,
    };
    expect(RootReducer(initState, addCardsData)).toEqual(result);
  });

  test('resetContext', () => {
    const resetContext = {
      type: RESET_CONTEXT,
    };
    const result = {
      ...initState,
    };
    expect(RootReducer(initState, resetContext)).toEqual(result);
  });
});
