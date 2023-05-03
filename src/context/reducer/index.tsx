import initState from '../InitState';
import {
  ADD_USER,
  ADD_USER_PROFILE,
  ADD_ACCOUNTS,
  ADD_CARDS,
  RESET_CONTEXT,
} from '../Constant';

const addUserData = (state: any, data: any) => {
  return { ...state, user: data };
};

const addUserProfileData = (state: any, data: any) => {
  return { ...state, userProfile: data };
};

const addAccountData = (state: any, data: any) => {
  return { ...state, accounts: data };
};

const addCardsData = (state: any, data: any) => {
  return { ...state, cards: data };
};
const resetContext = () => {
  return initState;
};

const RootReducer = (state = initState, action: any = {}) => {
  const { type, data } = action;
  switch (type) {
    case ADD_USER:
      return addUserData(state, data);
    case ADD_USER_PROFILE:
      return addUserProfileData(state, data);
    case ADD_ACCOUNTS:
      return addAccountData(state, data);
    case ADD_CARDS:
      return addCardsData(state, data);
    case RESET_CONTEXT:
      return resetContext();
    default:
      return state;
  }
};

export default RootReducer;
