import { Reducer } from 'redux';

import { AccountsActions, State } from './types';
import { ActionTypes as at } from './constant';

const intialState: State = { accounts: [] };

const reducer: Reducer<State, AccountsActions> = (state = intialState, action) => {
  switch (action.type) {
    case at.CreateAccountSuccess:
      return {
        ...state, 
        accounts: [...state.accounts, action.payload],
      };
    case at.CreateAccountError:
      return {...state};
    case at.FetchAccountsSuccess:
      return {
        ...state, 
        accounts: [...action.payload],
      };
    case at.FetchAccountsError:
      return {...state};
    default:
        return state;
  }
}

export default reducer;
