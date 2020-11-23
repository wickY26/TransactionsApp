import { Action } from 'redux';

import { ActionTypes as at } from './constant';

export interface Account {
  name: string;
  surname: string;
  id?: number;
};

export interface FetchAccountsSuccessAction extends Action {
  type: at.FetchAccountsSuccess;
  payload: Account[];
}

export interface FetchAccountsErrorAction extends Action {
  type: at.FetchAccountsError;
}

export interface CreateAccountSuccessAction extends Action {
  type: at.CreateAccountSuccess;
  payload: Account;
}

export interface CreateAccountErrorAction extends Action {
  type: at.CreateAccountError;
}

export interface State {
  accounts: Account[];
}

export type AccountsActions = 
  | FetchAccountsSuccessAction
  | FetchAccountsErrorAction
  | CreateAccountSuccessAction
  | CreateAccountErrorAction
