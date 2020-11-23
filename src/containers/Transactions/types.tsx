import { Action } from 'redux';

import { ActionTypes as at } from './constant';

export interface TransactionAccount {
  name: string;
  surname: string;
  id: number;
}

export interface Transaction {
  from: TransactionAccount;
  to: TransactionAccount;
  amount: number;
  description: string;
  id: number;
};

export interface TransactionBody {
  from: number;
  to: number;
  amount: number;
  description: string;
};

export interface FetchTransactionsSuccessAction extends Action {
  type: at.FetchTransactionsSuccess;
  payload: Transaction[];
}

export interface FetchTransactionsErrorAction extends Action {
  type: at.FetchTransactionsError;
}

export interface CreateTransactionSuccessAction extends Action {
  type: at.CreateTransactionSuccess;
  payload: Transaction;
}

export interface CreateTransactionErrorAction extends Action {
  type: at.CreateTransactionError;
}

export interface State {
  transactions: Transaction[];
}

export type TransactionsActions = 
  | FetchTransactionsSuccessAction
  | FetchTransactionsErrorAction
  | CreateTransactionSuccessAction
  | CreateTransactionErrorAction
