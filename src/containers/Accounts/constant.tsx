export enum ActionTypes {
  FetchAccounts = 'FETCH_ACCOUNTS',
  FetchAccountsSuccess = 'FETCH_ACCOUNTS_SUCCESS',
  FetchAccountsError = 'FETCH_ACCOUNTS_ERROR',
  CreateAccount = 'CREATE_ACCOUNT',
  CreateAccountSuccess = 'CREATE_ACCOUNT_SUCCESS',
  CreateAccountError = 'CREATE_ACCOUNT_ERROR',
}

export enum apiUrls {
  FetchAccounts = 'http://localhost:9001/accounts',
  CreateAccount = 'http://localhost:9001/account/create',
}