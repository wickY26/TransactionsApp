 import { Reducer } from 'redux';

import { TransactionsActions, State } from './types';
import { ActionTypes as at } from './constant';

const intialState: State = { transactions: [] };

const reducer: Reducer<State, TransactionsActions> = (state = intialState, action) => {
  switch (action.type) {
    case at.CreateTransactionSuccess:
      return {
        ...state, 
        transactions: [...state.transactions, action.payload],
      };
    case at.CreateTransactionError:
      return {...state};
    case at.FetchTransactionsSuccess:
      return {
        ...state, 
        transactions: [...action.payload],
      };
    case at.FetchTransactionsError:
      return {...state};
    default:
        return state;
  }
}

export default reducer;
