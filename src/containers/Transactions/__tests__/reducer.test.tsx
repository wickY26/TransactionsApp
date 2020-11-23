import { Action } from 'redux';

import { ActionTypes as at } from '../constant';
import { Transaction } from '../types';
import reducer from '../reducer';

const mockAccount = {name: 'Poyraz', surname: 'Yilmaz', id: 0};
const mockTransaction: Transaction = { from: mockAccount, to: mockAccount, amount: 50, description: 'description', id: 0 };

describe('Transactions Reducer', () => {

  it('should return initial state', () => {
    expect(reducer(undefined, {} as Action)).toEqual({ transactions: [] });
  });

  it('should handle CREATE_TRANSACTION_SUCCESS', () => {
    const state = reducer(undefined, {
      type: at.CreateTransactionSuccess,
      payload: mockTransaction,
    });
    expect(state).toEqual({transactions: [mockTransaction]});
  });

  it('should handle CREATE_TRANSACTION_ERROR', () => {
    const state = reducer(undefined, {
      type: at.CreateTransactionError,
    });
    expect(state).toEqual({transactions: []});
  });

  it('should handle FETCH_TRANSACTIONS_SUCCESS', () => {
    const state = reducer(undefined, {
      type: at.FetchTransactionsSuccess,
      payload: [mockTransaction],
    });
    expect(state).toEqual({transactions: [mockTransaction]}); 
  });

  it('should handle FETCH_TRANSACTIONS_ERROR', () => {
    const state = reducer(undefined, {
      type: at.FetchTransactionsError,
    });
    expect(state).toEqual({transactions: []});
  });

});