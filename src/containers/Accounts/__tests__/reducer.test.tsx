import { Action } from 'redux';

import reducer from '../reducer';
import { ActionTypes as at } from '../constant';
import { Account } from '../types';

const mockAccount: Account = {name:'Poyraz', surname: 'Yilmaz', id: 0};

describe('Accounts Reducer', () => {

  it('should return initial state', () => {
    expect(reducer(undefined, {} as Action)).toEqual({ accounts: [] });
  });

  it('should handle CREATE_ACCOUNT_SUCCESS', () => {
    const state = reducer(undefined, {
      type: at.CreateAccountSuccess,
      payload: mockAccount,
    });
    expect(state).toEqual({accounts: [mockAccount]});
  });

  it('should handle CREATE_ACCOUNT_ERROR', () => {
    const state = reducer(undefined, {
      type: at.CreateAccountError,
    });
    expect(state).toEqual({accounts: []});
  });

  it('should handle FETCH_ACCOUNTS_SUCCESS', () => {
    const state = reducer(undefined, {
      type: at.FetchAccountsSuccess,
      payload: [mockAccount],
    });
    expect(state).toEqual({accounts: [mockAccount]});
  });

  it('should handle FETCH_ACCOUNTS_ERROR', () => {
    const state = reducer(undefined, {
      type: at.FetchAccountsError,
    });
    expect(state).toEqual({accounts: []});
  });

});