export enum ActionTypes {
  FetchTransactions = 'FETCH_TRANSACTIONS',
  FetchTransactionsSuccess = 'FETCH_TRANSACTIONS_SUCCESS',
  FetchTransactionsError = 'FETCH_TRANSACTIONS_ERROR',
  CreateTransaction = 'CREATE_TRANSACTION',
  CreateTransactionSuccess = 'CREATE_TRANSACTION_SUCCESS',
  CreateTransactionError = 'CREATE_TRANSACTION_ERROR',
}

export enum apiUrls {
  FetchTransactions = 'http://localhost:9001/transactions',
  CreateTransaction = 'http://localhost:9001/transaction/create',
}