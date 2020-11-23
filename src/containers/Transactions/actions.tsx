import axios from 'axios';

import { Transaction, CreateTransactionErrorAction, CreateTransactionSuccessAction, FetchTransactionsErrorAction, FetchTransactionsSuccessAction, TransactionBody } from './types';
import { ActionTypes as at, apiUrls } from './constant';
import { AppThunk } from '../../store/reducer';

export const createTransactionSuccess = (payload: Transaction): CreateTransactionSuccessAction => ({
  type: at.CreateTransactionSuccess,
  payload,
});

export const createTransactionError = (): CreateTransactionErrorAction => ({
  type: at.CreateTransactionError,
});

export const fetchTransactionsSuccess = (payload: Transaction[]): FetchTransactionsSuccessAction => ({
  type: at.FetchTransactionsSuccess,
  payload,
});

export const fetchTransactionsError = (): FetchTransactionsErrorAction => ({
  type: at.FetchTransactionsError,
});

export const thunkCreateTransaction = (transsaction: TransactionBody): AppThunk => async dispatch => {
  const asyncResp = await axios.post<Transaction>(apiUrls.CreateTransaction, transsaction);
  dispatch(createTransactionSuccess(asyncResp.data));
}

export const thunkFetchTransactions = (): AppThunk => async dispatch => {
  const asyncResp =  await axios.get<Transaction[]>(apiUrls.FetchTransactions);
  dispatch(fetchTransactionsSuccess(asyncResp.data));
}
