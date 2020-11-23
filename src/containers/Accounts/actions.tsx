import axios from 'axios';

import { Account, CreateAccountErrorAction, CreateAccountSuccessAction, FetchAccountsErrorAction, FetchAccountsSuccessAction } from './types';
import { ActionTypes as at, apiUrls } from './constant';
import { AppThunk } from '../../store/reducer';

export const createAccountSuccess = (payload: Account): CreateAccountSuccessAction => ({
  type: at.CreateAccountSuccess,
  payload,
});

export const createAccountError = (): CreateAccountErrorAction => ({
  type: at.CreateAccountError,
});

export const fetchAccountsSuccess = (payload: Account[]): FetchAccountsSuccessAction => ({
  type: at.FetchAccountsSuccess,
  payload,
});

export const fetchAccountsError = (): FetchAccountsErrorAction => ({
  type: at.FetchAccountsError,
});

export const thunkCreateAccount = (account: Account): AppThunk => async dispatch => {
  const asyncResp = await axios.post<Account>(apiUrls.CreateAccount, account);
  dispatch(createAccountSuccess(asyncResp.data));
}

export const thunkFetchAccounts = (): AppThunk => async dispatch => {
  const asyncResp =  await axios.get<Account[]>(apiUrls.FetchAccounts);
  dispatch(fetchAccountsSuccess(asyncResp.data));
}
